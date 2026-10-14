import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const sourceDir = process.argv[2] ? path.resolve(process.argv[2]) : '';
const publicBookDir = path.join(projectRoot, 'public', 'book');
const dataFile = path.join(projectRoot, 'src', 'data', 'book.ts');

const chapterRules = [
  { key: '前言', id: 'preface', order: 0, part: '前言', title: '前言', description: '说明村史编纂缘起、资料来源与保存乡土记忆的意义。' },
  { key: '第一篇', id: 'land', order: 1, part: '第一篇', title: '土地资源', description: '记述村庄地理、田畴、水土、山林与自然资源。' },
  { key: '第二篇', id: 'origin', order: 2, part: '第二篇', title: '先祖创乡', description: '追溯先民迁徙、开基创业与村落形成脉络。' },
  { key: '第三篇', id: 'construction', order: 3, part: '第三篇', title: '乡村建设', description: '记录道路、水利、公共设施与乡村面貌变迁。' },
  { key: '第四篇', id: 'population', order: 4, part: '第四篇', title: '人口', description: '呈现人口规模、姓氏分布、迁徙与家庭结构。' },
  { key: '第五篇', id: 'economy', order: 5, part: '第五篇', title: '经济', description: '梳理农业、副业、集体经济与村民生计变化。' },
  { key: '第六篇', id: 'politics', order: 6, part: '第六篇', title: '政治', description: '记录村庄治理、组织沿革与基层公共事务。' },
  { key: '第七篇', id: 'people', order: 7, part: '第七篇', title: '人物', description: '收录村中贤达、干部、教师、乡贤与普通人物事迹。' },
  { key: '第八篇', id: 'culture', order: 8, part: '第八篇', title: '文化', description: '展现民俗、信仰、文艺、方言与乡土文化传统。' },
  { key: '第九篇', id: 'education', order: 9, part: '第九篇', title: '教育', description: '记载学校、教师、学子与村庄教育发展。' },
  { key: '第十篇', id: 'chronicle', order: 10, part: '第十篇', title: '大事记', description: '按时间记录村庄重要事件与历史节点。' },
];

function usage() {
  console.log('用法: npm run import:book -- "E:\\\\你的HTML文件夹"');
}

function copyDirectory(source, target) {
  fs.mkdirSync(target, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const from = path.join(source, entry.name);
    const to = path.join(target, entry.name);
    if (entry.isDirectory()) copyDirectory(from, to);
    else fs.copyFileSync(from, to);
  }
}

function writeBookData(chapters) {
  const publicChapters = chapters.map(({ key, ...chapter }) => chapter);
  const body = `export type BookChapter = {
  id: string;
  order: number;
  part: string;
  title: string;
  file: string;
  description: string;
};

export const bookChapters: BookChapter[] = ${JSON.stringify(publicChapters, null, 2)};

export const getChapterById = (id?: string | null) =>
  bookChapters.find((chapter) => chapter.id === id) ?? bookChapters[0];
`;
  fs.writeFileSync(dataFile, body, 'utf8');
}

if (!sourceDir || !fs.existsSync(sourceDir)) {
  usage();
  process.exit(sourceDir ? 1 : 0);
}

fs.mkdirSync(publicBookDir, { recursive: true });

const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
const htmlFiles = entries.filter((entry) => entry.isFile() && /\.html?$/i.test(entry.name));
const imported = [];

for (const rule of chapterRules) {
  const match = htmlFiles.find((entry) => entry.name.includes(rule.key));
  if (!match) {
    console.warn(`未找到：${rule.key}`);
    continue;
  }

  fs.copyFileSync(path.join(sourceDir, match.name), path.join(publicBookDir, match.name));
  imported.push({ ...rule, file: match.name });
  console.log(`已导入：${match.name} -> public/book/${match.name}`);
}

for (const entry of entries.filter((item) => item.isDirectory())) {
  copyDirectory(path.join(sourceDir, entry.name), path.join(publicBookDir, entry.name));
  console.log(`已复制资源目录：${entry.name}`);
}

writeBookData(imported);
console.log(`已生成：${path.relative(projectRoot, dataFile)}`);
console.log(`共导入 ${imported.length} 个章节。`);
