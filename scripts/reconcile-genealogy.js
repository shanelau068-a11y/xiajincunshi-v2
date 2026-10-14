import fs from 'node:fs';
import path from 'node:path';
import { bookRoot, projectRoot, readData, writeData, walk } from './lib/data.js';
import { normalizeText, parseBook } from './lib/book-html.js';

const people = readData('src/data/genealogy.ts', 'genealogyPeople');
const reference = readData('src/data/genealogyReference.ts', 'genealogyReferencePeople');
const changes = [];
const removed = [];
const byName = (name) => people.find((p) => p.name === name);
const map = new Map(people.map((p) => [p.id, p]));
const removedIds = new Set();
const note = (person, text) => { person.reviewNotes = [...new Set([...(person.reviewNotes ?? []), text])]; };

function unlinkSpouses(leftName, rightName) {
  const left = byName(leftName), right = byName(rightName);
  if (!left || !right) return;
  left.spouseIds = left.spouseIds.filter((id) => id !== right.id);
  right.spouseIds = right.spouseIds.filter((id) => id !== left.id);
  changes.push(`${leftName}与${rightName}：取消误配关系，原文配偶属于另一位人物。`);
}

unlinkSpouses('刘玉花', '陈锶敏');
unlinkSpouses('刘枢', '郑氏');
const zheng = byName('郑氏');
if (zheng) {
  zheng.name = '郑氏（刘策配）';
  zheng.aliases = [...new Set([...(zheng.aliases ?? []), '郑氏'])];
  zheng.description = byName('刘策')?.description ?? zheng.description;
}

function remove(person, reason) {
  if (!person || removedIds.has(person.id)) return;
  removedIds.add(person.id);
  removed.push({ ...person, reason });
  changes.push(`${person.name}：移出展示；${reason}`);
}

function merge(fromName, toName) {
  const from = byName(fromName);
  const target = byName(toName);
  if (!from || !target || from === target) return;
  // Only explicit, source-confirmed aliases belong in this table.
  target.aliases = [...new Set([...(target.aliases ?? []), from.name])];
  for (const p of people) {
    if (p.fatherId === from.id) p.fatherId = target.id;
    if (p.motherId === from.id) p.motherId = target.id;
    p.spouseIds = [...new Set(p.spouseIds.map((id) => id === from.id ? target.id : id))].filter((id) => id !== p.id);
  }
  for (const id of from.spouseIds) {
    if (id !== target.id && !target.spouseIds.includes(id)) target.spouseIds.push(id);
  }
  remove(from, `原文可确认的同一人物/称谓，归入${target.name}`);
}

const nonNames = new Set([
  '秦汉时期', '他为妻', '套入', '房屋居住', '陈侯为妻', '陈娶田', '东汉时', '解放初期',
  '鬼方氏女', '脚桶黄', '夏启王时', '为韩津', '柯相传', '以撒网捕', '散寨时', '尧舜时期',
  '契的母亲', '妣氏失', '茂科公的', '散宜部', '散宜部落', '氏失记', '享大宗祠', '春秋时期',
  '黄帝居于', '方一至', '康两子', '为帝之第', '刘力',
]);
people.filter((p) => nonNames.has(p.name)).forEach((p) => remove(p, '段落时间、地名、叙述、未知配偶或截断人名，不是可确认的人物姓名'));
const aliases = [
  ['陈莲峰卜', '陈莲峰'], ['力谦公致', '刘力谦'], ['李老', '李老大'], ['甘草木', '李老大'],
  ['郡主赵', '赵氏（刘公孙配）'], ['郡主赵氏', '赵氏（刘公孙配）'],
  ['孺人陈', '陈氏（刘真庆配）'], ['孺人陈氏', '陈氏（刘真庆配）'],
  ['县君陈', '陈氏（刘勋配）'], ['县君陈氏', '陈氏（刘勋配）'],
  ['县君李', '李氏（刘铨配）'], ['宜人苏', '苏氏（刘炳配）'], ['宜人苏氏', '苏氏（刘炳配）'],
  ['李氏', '李氏（刘童配）'], ['梁氏', '梁氏（刘文旦配）'], ['吴氏', '吴氏（刘顺兴配）'], ['叶氏', '叶氏（刘渍配）'],
  ['枫溪吴', '吴氏（钟炳元妻）'],
];
aliases.forEach(([from, to]) => merge(from, to));
const guangjing = byName('廖光景任');
if (guangjing) {
  guangjing.name = '廖光景';
  guangjing.clan = '廖氏';
  changes.push('廖光景任：改为廖光景；“任唐宰相”是任职叙述。');
  for (const name of ['琼瑄', '琳瑄', '瑞瑄']) {
    const p = byName(name);
    if (p) { p.name = `廖${name}`; p.clan = '廖氏'; }
  }
}

// Multiple wives plus a shared list of sons does not identify each son's mother.
for (const name of ['刘景', '刘真庆', '刘铨', '刘锡', '陈莲峰']) {
  const father = byName(name);
  if (!father) continue;
  const wives = people.filter((p) => !removedIds.has(p.id) && p.spouseIds.includes(father.id));
  if (wives.length < 2) continue;
  const wifeIds = new Set(wives.map((p) => p.id));
  for (const child of people.filter((p) => p.fatherId === father.id && wifeIds.has(p.motherId))) {
    changes.push(`${child.name}：原文并列多位配偶而未指明生母，取消${map.get(child.motherId)?.name}的生母归属。`);
    delete child.motherId;
    note(child, '原文列父亲多位配偶，未说明具体生母；保留父系关系。');
  }
}

// The original explicitly says the woman is Zhong Bingyuan's wife, not his father's.
const wu = byName('吴氏（钟炳元妻）');
const bingyuan = byName('钟炳元');
const jinlin = byName('钟锦麟');
if (wu && bingyuan && jinlin) {
  wu.spouseIds = wu.spouseIds.filter((id) => id !== jinlin.id);
  jinlin.spouseIds = jinlin.spouseIds.filter((id) => id !== wu.id);
  wu.spouseIds = [...new Set([...wu.spouseIds, bingyuan.id])];
  bingyuan.spouseIds = [...new Set([...bingyuan.spouseIds, wu.id])];
}

let current = people.filter((p) => !removedIds.has(p.id));
const currentMap = new Map(current.map((p) => [p.id, p]));
for (const p of current) {
  if (removedIds.has(p.fatherId)) delete p.fatherId;
  if (removedIds.has(p.motherId)) delete p.motherId;
  p.spouseIds = [...new Set(p.spouseIds.filter((id) => currentMap.has(id) && id !== p.id))];
  for (const childId of p.childrenIds) {
    const child = currentMap.get(childId);
    if (child && child.fatherId !== p.id && child.motherId !== p.id && !removedIds.has(p.id)) {
      changes.push(`${p.name}→${child.name}：取消与记录父母归属不一致的子女边。`);
    }
  }
  const validIds = current.filter((child) => child.fatherId === p.id || child.motherId === p.id).map((child) => child.id);
  p.childrenIds = [...new Set([...p.childrenIds.filter((id) => validIds.includes(id)), ...validIds])];
}
for (const p of current) {
  for (const id of p.spouseIds) {
    const spouse = currentMap.get(id);
    if (!spouse.spouseIds.includes(p.id)) spouse.spouseIds.push(p.id);
  }
  if (!p.clan && p.sourceFile) p.clan = p.sourceFile.match(/第[^/]+章\s*([^/]{1,2}氏)/)?.[1];
}

const numerals = { 零: 0, 〇: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
function number(text) {
  if (/^\d+$/.test(text)) return Number(text);
  if (!/^[零〇一二三四五六七八九十百]+$/.test(text)) return undefined;
  if (!/[十百]/.test(text)) return Number([...text].map((c) => numerals[c]).join(''));
  let result = 0, digit = 0;
  for (const c of text) {
    if (c === '十' || c === '百') { result += (digit || 1) * (c === '十' ? 10 : 100); digit = 0; }
    else digit = numerals[c];
  }
  return result + digit;
}
const chars = '日旭伯延禧茂力贻远支光宗绍世德裕昆启鸿泽';
const generations = new Map();
for (const r of reference) {
  if (r.gender !== '男' || !(r.lineageFlag.startsWith('是') || r.category.startsWith('A.'))) continue;
  const match = r.generation.match(/桃坑\s*(\d+|[零〇一二三四五六七八九十百]+)世/);
  if (!match) continue;
  const entries = generations.get(r.name) ?? new Set();
  entries.add(number(match[1]));
  generations.set(r.name, entries);
}
for (const p of current) {
  if (p.gender !== '男') continue;
  const candidates = generations.get(p.name);
  if (candidates?.size === 1 && !p.generation) {
    p.generation = [...candidates][0];
    p.generationSystem = '桃坑';
    p.generationName = chars[p.generation - 19];
    p.generationEvidence = '参考表明确记载';
  } else if (candidates?.size > 1) note(p, '参考表同名人物的世数不同，须核实身份。');
}
// Infer only from consistent father/son anchors in the same lineage.
for (let pass = 0; pass < current.length; pass += 1) {
  let added = 0;
  for (const p of current) {
    if (p.gender !== '男' || p.clan !== '刘氏' || p.generation) continue;
    const father = currentMap.get(p.fatherId);
    const candidates = new Set();
    if (father?.generationSystem === '桃坑') candidates.add(father.generation + 1);
    for (const id of p.childrenIds) {
      const child = currentMap.get(id);
      if (child?.gender === '男' && child.generationSystem === '桃坑' && child.fatherId === p.id) candidates.add(child.generation - 1);
    }
    if (candidates.size !== 1) { if (candidates.size > 1) note(p, '父子世数推定不一致，暂不赋予世数。'); continue; }
    const generation = [...candidates][0];
    if (generation <= 0) continue;
    p.generation = generation;
    p.generationSystem = '桃坑';
    p.generationName = chars[generation - 19];
    p.generationEvidence = '亲子关系推定';
    added += 1;
  }
  if (!added) break;
}

for (const name of ['刘佳琪', '刘翠华', '刘桂宜', '刘启泳', '刘启跃', '刘咏华']) {
  const p = byName(name);
  if (p) note(p, '原文只记名字，是刘氏女性的子女；当前沿用旧显示姓名，姓氏须核对，不应自动按母姓补刘。');
}
for (const p of current) {
  if (p.name.includes('（')) {
    const surname = p.name.match(/^([\u4e00-\u9fff]+)氏/);
    if (surname) p.clan = `${surname[1]}氏`;
  }
  const row = reference.find((r) => r.name === p.name && r.surname);
  if (row) p.clan = `${row.surname}氏`;
}

writeData('src/data/genealogy.ts', 'genealogyPeople', current);
fs.mkdirSync(path.join(projectRoot, 'reports'), { recursive: true });
const quarantinePath = path.join(projectRoot, 'reports/genealogy-quarantine.json');
const oldRemoved = fs.existsSync(quarantinePath) ? JSON.parse(fs.readFileSync(quarantinePath, 'utf8')) : [];
fs.writeFileSync(quarantinePath, JSON.stringify([...oldRemoved, ...removed].filter((p, i, a) => a.findIndex((q) => q.id === p.id) === i), null, 2));
fs.writeFileSync(path.join(projectRoot, 'reports/genealogy-corrections.md'), ['# 族谱纠错记录', '', '按现有村史及参考表核对；不凭名字中的辈字推定世数。移出的误抽记录保留在 genealogy-quarantine.json。', '', ...changes.map((c) => `- ${c}`), '', `当前展示 ${current.length} 人；有结构化世数的男性 ${current.filter((p) => p.gender === '男' && p.generation).length} 人。`].join('\n'));
console.log(`保留 ${current.length} 人，移出 ${removed.length} 个误抽/称谓重复节点；${changes.length} 条纠错记录。`);
