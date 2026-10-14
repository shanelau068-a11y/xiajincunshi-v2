import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const extractedDir = path.join(publicDir, 'images', 'extracted');
const manualDir = path.join(publicDir, 'images', 'gallery');
const dataFile = path.join(projectRoot, 'src', 'data', 'gallery.ts');
const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

function toPublicPath(filePath) {
  return `/${path.relative(publicDir, filePath).replaceAll(path.sep, '/')}`;
}

function existsPublicPath(publicPath) {
  const relative = publicPath.replace(/^\/+/, '').split('/').join(path.sep);
  return fs.existsSync(path.join(publicDir, relative));
}

function readCurrentPhotos() {
  if (!fs.existsSync(dataFile)) return [];
  const source = fs.readFileSync(dataFile, 'utf8');
  const match = source.match(/export const galleryPhotos: GalleryPhoto\[\] = ([\s\S]*?);\s*$/);
  if (!match) return [];
  try {
    return JSON.parse(match[1]);
  } catch {
    return [];
  }
}

function walkImages(dir) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkImages(fullPath));
    if (entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase())) results.push(fullPath);
  }
  return results.sort((a, b) => a.localeCompare(b, 'zh-Hans-CN', { numeric: true }));
}

function scanNumber(name) {
  const match = name.match(/\((\d+)\)/);
  return match ? Number(match[1]) : undefined;
}

function categoryFor(sourceName) {
  if (sourceName.startsWith('1下津村史序言')) return '序言合影';
  const number = scanNumber(sourceName);
  if (!number) return '其他待分';
  if (number <= 60) return '村貌风物';
  if (number <= 119) return '乡村建设';
  if (number <= 149) return '人物照片';
  if (number <= 183) return '祠堂古建';
  if (number <= 205) return '教育影像';
  return '其他待分';
}

function extractedInfo(filePath, index) {
  const name = path.basename(filePath);
  const sourceStem = name.replace(/_photo_\d+\.[^.]+$/i, '').replaceAll('_', ' ');
  const photoIndex = name.match(/_photo_(\d+)/i)?.[1] ?? String(index);
  const sourcePage = `${sourceStem.replace(/ \((\d+)\)$/u, ' ($1)')}.jpg`;
  const number = scanNumber(sourcePage);
  const isPreface = sourcePage.startsWith('1下津村史序言');
  return {
    title: isPreface ? `序言照片 ${number ?? index}` : number ? `扫描页 ${number} 提取照片 ${Number(photoIndex)}` : `村史扫描提取照片 ${index}`,
    category: categoryFor(sourcePage),
    sourcePage,
  };
}

function manualInfo(filePath) {
  const relative = path.relative(manualDir, filePath);
  const parts = relative.split(path.sep);
  const category = parts.length > 1 ? parts[0] : '人工添加';
  const title = path.basename(filePath, path.extname(filePath)).replace(/[_-]+/g, ' ').trim();
  return { title, category };
}

function makeId(prefix, publicPath) {
  let hash = 0;
  for (const char of publicPath) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return `${prefix}-${hash.toString(36)}`;
}

function writePhotos(photos) {
  const body = `export type GalleryPhoto = {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  description: string;
  sourcePage?: string;
};

export const galleryPhotos: GalleryPhoto[] = ${JSON.stringify(photos, null, 2)};
`;
  fs.writeFileSync(dataFile, body, 'utf8');
}

fs.mkdirSync(manualDir, { recursive: true });

const current = readCurrentPhotos();
const synced = current.filter((photo) => existsPublicPath(photo.image));
const syncedByImage = new Set(synced.map((photo) => photo.image));

for (const [index, filePath] of walkImages(extractedDir).entries()) {
  const image = toPublicPath(filePath);
  if (syncedByImage.has(image)) continue;
  const info = extractedInfo(filePath, index + 1);
  synced.push({
    id: makeId('scan-photo', image),
    title: info.title,
    year: '村史扫描件',
    category: info.category,
    image,
    description: '由村史扫描页自动初筛裁出，建议后续人工校对标题、年代和人物说明。',
    sourcePage: info.sourcePage,
  });
  syncedByImage.add(image);
}

for (const filePath of walkImages(manualDir)) {
  const image = toPublicPath(filePath);
  if (syncedByImage.has(image)) continue;
  const info = manualInfo(filePath);
  synced.push({
    id: makeId('manual-photo', image),
    title: info.title,
    year: '待考',
    category: info.category,
    image,
    description: '人工添加的老照片，可在 src/data/gallery.ts 中补充年代、人物和说明。',
  });
  syncedByImage.add(image);
}

writePhotos(synced);

console.log(`原有记录：${current.length}`);
console.log(`已删除失效记录：${current.length - current.filter((photo) => existsPublicPath(photo.image)).length}`);
console.log(`同步后记录：${synced.length}`);
console.log(`人工照片目录：${path.relative(projectRoot, manualDir)}`);
