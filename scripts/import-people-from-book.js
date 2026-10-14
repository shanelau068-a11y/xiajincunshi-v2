import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseBook } from './lib/book-html.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const sourceDir = path.join(projectRoot, 'public', 'book', '第七篇 人物');
const outputFile = path.join(projectRoot, 'src', 'data', 'people.ts');

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

function titleFromHtml(html, file) {
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const title = h1 ? stripTags(h1) : path.basename(file, path.extname(file));
  return title.replace(/\s+[a-f0-9]{20,}$/i, '').replace(/\s+/g, ' ').trim();
}

function categoryFromTitle(title) {
  return title.replace(/^第[一二三四五六七八九十]+章\s*/, '').trim() || '人物';
}

function chapterOrder(file) {
  const order = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 };
  const hit = path.basename(file).match(/第([一二三四五六七八九十]+)章/);
  if (!hit) return 99;
  if (hit[1] === '十一') return 11;
  if (hit[1] === '十二') return 12;
  return order[hit[1]] ?? 99;
}

function idFor(name, used) {
  const base = `person-${name}`.replace(/[^\u4e00-\u9fffa-zA-Z0-9]+/g, '-');
  let id = base;
  let index = 2;
  while (used.has(id)) {
    id = `${base}-${index}`;
    index += 1;
  }
  used.add(id);
  return id;
}

function yearsFromText(text) {
  // A reign or a period of service is not a person's lifespan.
  const range = text.match(/^\s*[（(](\d{3,4})\s*[—\-–]\s*(\d{3,4})[）)]/);
  if (range) return `${range[1]}-${range[2]}`;
  const born = text.match(/(?:生于|出生于)(?:[^。；]{0,12}?[（(])?(\d{3,4})(?:[）)]?年)|(?:^|[，。；])\s*(\d{3,4})年(?:出生|生[，。；])/);
  if (born) return `${born[1] ?? born[2]}年生`;
  return '生卒未详';
}

function summaryFromText(text) {
  return text
    .split(/[。；;]/)
    .map((item) => item.trim())
    .find(Boolean) ?? text.slice(0, 60);
}

function achievementsFromText(text) {
  const sentences = text
    .split(/[。；;]/)
    .map((item) => item.trim())
    .filter(Boolean);
  return sentences.slice(0, 3).map((item) => (item.length > 42 ? `${item.slice(0, 42)}...` : item));
}

function extractPeopleFromFile(file, usedIds) {
  const html = fs.readFileSync(file, 'utf8');
  const sourceTitle = titleFromHtml(html, file);
  const category = categoryFromTitle(sourceTitle);
  const relative = path.relative(path.join(projectRoot, 'public', 'book'), file).replace(/\\/g, '/');
  const people = [];
  const $ = parseBook(html);
  $('li').each((_, node) => {
    const item = $(node).clone();
    const strong = item.children('strong').first();
    const label = strong.text().trim();
    if (!/[：:]$/.test(label)) return;
    const name = label.replace(/[：:]/g, '').trim();
    strong.remove();
    const body = item.text().replace(/\s+/g, ' ').trim();
    if (!/^[\u4e00-\u9fff]{2,4}$/.test(name) || body.length < 4) return;
    const biography = body.startsWith(name) ? body : `${name}：${body}`;
    people.push({
      id: idFor(name, usedIds),
      name,
      category,
      years: yearsFromText(body),
      summary: summaryFromText(body),
      biography: `${biography}\n\n来源：${sourceTitle}（${relative}）`,
      achievements: achievementsFromText(body),
      sourceFile: relative,
      sourceTitle,
    });
  });

  return people;
}

const files = fs.existsSync(sourceDir)
  ? fs.readdirSync(sourceDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && /\.html?$/i.test(entry.name))
      .map((entry) => path.join(sourceDir, entry.name))
      .sort((a, b) => chapterOrder(a) - chapterOrder(b) || a.localeCompare(b, 'zh-Hans-CN'))
  : [];

const usedIds = new Set();
const people = files.flatMap((file) => extractPeopleFromFile(file, usedIds));
if (!people.length) throw new Error('未识别出任何人物，保留现有数据。');

const body = `export type Person = {
  id: string;
  name: string;
  category: string;
  years: string;
  summary: string;
  biography: string;
  achievements: string[];
  sourceFile: string;
  sourceTitle: string;
};

export const people: Person[] = ${JSON.stringify(people, null, 2)};

export const getPersonById = (id?: string) => people.find((person) => person.id === id);
`;

fs.writeFileSync(outputFile, body, 'utf8');
console.log(`已生成 ${path.relative(projectRoot, outputFile)}，共 ${people.length} 人。`);
console.log('来源：public/book/第七篇 人物。');
