import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readData } from './lib/data.js';
import { parseBook } from './lib/book-html.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const chapter = readData('src/data/book.ts', 'bookChapters').find((item) => item.id === 'chronicle');
if (!chapter) throw new Error('目录中未找到大事记，保留现有数据。');
const sourceFile = path.join(projectRoot, 'public', 'book', chapter.file);
const outputFile = path.join(projectRoot, 'src', 'data', 'timeline.ts');

function decodeHtml(value) {
  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'");
}

function stripTags(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
}

function classify(text) {
  if (/迁|开基|创乡|创寨|落籍|移创/.test(text)) return '迁徙开基';
  if (/学校|小学|教育|奖学|学生|办学|博雅/.test(text)) return '教育';
  if (/祠|庙|谱|村史|文化|锣鼓|篮球|体育|广场|文集|新书|著|刊行/.test(text)) return '文化';
  if (/党|政府|村委|公社|管理区|选举|组织|土改|农会/.test(text)) return '治理';
  if (/功名|举贤良|进士|庠生/.test(text)) return '人物';
  if (/农业|生产|合作社|商|工商业|水稻|土地|承包|经济/.test(text)) return '经济';
  return '建设';
}

function titleFromDetail(detail) {
  const title = detail.split(/[。；;]/).find(Boolean)?.trim() ?? detail;
  return title.length > 28 ? `${title.slice(0, 28)}...` : title;
}

function summaryFromDetail(detail) {
  return detail.length > 72 ? `${detail.slice(0, 72)}...` : detail;
}

if (!fs.existsSync(sourceFile)) throw new Error(`来源文件不存在，保留现有数据：${sourceFile}`);
const html = fs.readFileSync(sourceFile, 'utf8');
const events = [];
const $ = parseBook(html);

let index = 1;
$('li').each((_, node) => {
  const item = $(node).clone();
  const strong = item.children('strong').first();
  const year = strong.text().trim().replace(/[，,。；;]$/, '');
  strong.remove();
  const rest = item.text().trim().replace(/^[，,。；;\s]+/, '');
  if (!year || !rest || /姓名|金额|赞助村史/.test(`${year}${rest}`)) return;
  const detail = `${year}，${rest}`;
  events.push({
    id: `chronicle-${String(index).padStart(3, '0')}`,
    year,
    title: titleFromDetail(rest),
    category: classify(detail),
    summary: summaryFromDetail(rest),
    detail,
    sourceFile: chapter.file,
  });
  index += 1;
});

if (!events.length) throw new Error('未识别出任何大事记，保留现有数据。');

const body = `export type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  category: string;
  summary: string;
  detail: string;
  sourceFile: string;
};

export const timelineEvents: TimelineEvent[] = ${JSON.stringify(events, null, 2)};
`;

fs.writeFileSync(outputFile, body, 'utf8');
console.log(`已生成 ${path.relative(projectRoot, outputFile)}，共 ${events.length} 条。`);
console.log(`来源：public/book/${chapter.file}。`);
