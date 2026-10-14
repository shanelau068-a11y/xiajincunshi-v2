import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { plainText } from './lib/book-html.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const bookRoot = path.join(projectRoot, 'public', 'book');
const outputFile = path.join(projectRoot, 'src', 'data', 'searchDocs.ts');

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return /\.html?$/i.test(entry.name) ? [full] : [];
  });
}

function decodeHtml(value) {
  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'");
}

function stripHtml(html) {
  return plainText(html);
}

function titleFromHtml(html, file) {
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  if (h1) return stripHtml(h1);
  return path.basename(file, path.extname(file)).replace(/\s+[a-f0-9]{20,}$/i, '');
}

function partFromRelative(relative) {
  const first = relative.split('/')[0];
  if (/^\d{2}-/.test(first) || first === 'preface.html') return '村史正文';
  return first;
}

function idFromRelative(relative) {
  return `doc-${relative.replace(/[^\u4e00-\u9fffa-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
}

const docs = walk(bookRoot)
  .filter((file) => !/勘误与审校报告/.test(file))
  .map((file) => {
    const html = fs.readFileSync(file, 'utf8');
    const relative = path.relative(bookRoot, file).replace(/\\/g, '/');
    return {
      id: idFromRelative(relative),
      part: partFromRelative(relative),
      title: titleFromHtml(html, file),
      file: relative,
      text: stripHtml(html),
    };
  })
  .filter((doc) => doc.text.length > 0)
  .sort((a, b) => a.file.localeCompare(b.file, 'zh-Hans-CN'));

if (!docs.length) throw new Error('未找到村史 HTML，保留现有搜索数据。');

const body = `export type SearchDoc = {
  id: string;
  part: string;
  title: string;
  file: string;
  text: string;
};

export const searchDocs: SearchDoc[] = ${JSON.stringify(docs, null, 2)};
`;

fs.writeFileSync(outputFile, body, 'utf8');
console.log(`已生成 ${path.relative(projectRoot, outputFile)}，共 ${docs.length} 个 HTML 文档。`);
