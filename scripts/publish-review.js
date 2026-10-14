import fs from 'node:fs';
import path from 'node:path';
import { projectRoot, readData } from './lib/data.js';
const audit = JSON.parse(fs.readFileSync(path.join(projectRoot, 'reports/content-audit.json'), 'utf8'));
const people = readData('src/data/genealogy.ts', 'genealogyPeople');
const chapters = readData('src/data/book.ts', 'bookChapters');
const issues = audit.issues.filter((i) => i.severity === 'warning').map((i, index) => {
  const person = people.find((p) => p.name === i.name);
  const sourceFiles = person?.sourceFiles ?? chapters.filter((c) => i.name.includes(c.title) || i.detail.includes(c.title)).map((c) => c.file);
  return { id: `review-${index + 1}`, category: i.area, title: i.name, detail: i.detail, sourceFiles, status: '待核' };
});
fs.writeFileSync(path.join(projectRoot, 'src/data/review.json'), JSON.stringify({ date: audit.date, counts: audit.counts, unknownGenerations: audit.information, issues }, null, 2));
console.log(`已生成公开校对记录：${issues.length} 项。`);
