import fs from 'node:fs';
import path from 'node:path';
import { bookRoot, projectRoot, readData, writeData, walk } from './lib/data.js';

const files = walk(bookRoot).filter((f) => /\.html?$/i.test(f)).map((f) => path.relative(bookRoot, f).replace(/\\/g, '/'));
const people = readData('src/data/genealogy.ts', 'genealogyPeople');
const references = readData('src/data/genealogyReference.ts', 'genealogyReferencePeople');
const unresolved = [];
for (const p of people) {
  const referencesForPerson = references.filter((r) => r.name === p.name || p.aliases?.includes(r.name));
  const candidates = [...(p.sourceFiles ?? []), ...(p.sourceFile ?? '').split(/[；;]/), ...referencesForPerson.flatMap((r) => r.sourceFile.split(/[；;]/))].map((s) => s.trim().replace(/^(?:人口篇补充|人物篇补充|教育篇补充)[：:]\s*/, '')).filter(Boolean);
  const resolved = [];
  for (const candidate of candidates) {
    const matches = files.filter((f) => f === candidate || path.basename(f) === path.basename(candidate) || (candidate.endsWith('...') && path.basename(f).startsWith(path.basename(candidate).slice(0, -3))));
    if (matches.length === 1) resolved.push(matches[0]);
    else unresolved.push({ name: p.name, source: candidate, reason: matches.length ? '存在多个同名文件' : '来源文件未找到' });
  }
  p.sourceFiles = [...new Set(resolved)];
  if (p.sourceFiles.length) p.sourceFile = p.sourceFiles[0];
}
writeData('src/data/genealogy.ts', 'genealogyPeople', people);
fs.writeFileSync(path.join(projectRoot, 'reports/genealogy-source-unresolved.json'), JSON.stringify(unresolved, null, 2));
console.log(`来源路径已核对；未找到或有歧义的路径：${unresolved.length}。`);
