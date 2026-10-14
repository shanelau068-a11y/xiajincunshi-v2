import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import { readData } from '../scripts/lib/data.js';

const people = readData('src/data/genealogy.ts', 'genealogyPeople');
const map = new Map(people.map((p) => [p.id, p]));
const find = (name) => { const p = people.find((p) => p.name === name); assert.ok(p, name); return p; };
const children = (name) => find(name).childrenIds.map((id) => map.get(id).name).sort();

test('历次人工确认的世数与亲子关系不回退', () => {
  for (const [name, generation] of [['刘策', 19], ['刘铉', 23], ['刘文旦', 23], ['刘茂翔', 24], ['刘世乾', 32], ['刘喜林', 34], ['刘永利', 35], ['刘永淡', 35], ['刘锐泽', 36], ['刘雄宣', 37], ['刘镒齐', 38]]) assert.equal(find(name).generation, generation, name);
  assert.deepEqual(children('刘永淡'), ['刘玉琴', '刘锐泽', '刘玉花', '刘耀怀', '刘玉珊'].sort());
  assert.deepEqual(children('刘雄宣'), ['刘纯语', '刘镒齐'].sort());
  assert.deepEqual(children('刘世乾'), ['刘德荣', '刘松镇'].sort());
  assert.deepEqual(children('刘茂翔'), ['刘力添', '刘力谦', '刘力真', '刘力任'].sort());
  assert.deepEqual(children('刘策'), ['刘以松', '刘梅松', '刘桂松'].sort());
  assert.deepEqual(children('刘铉'), ['刘子实']);
  for (const name of ['刘戴慧', '刘惠璇', '刘纯语']) assert.equal(find(name).gender, '女');
  for (const name of ['刘功名', '刘文旦号', '梅松公娶', '他为妻', '秦汉时期']) assert.ok(!people.some((p) => p.name === name));
  assert.deepEqual(find('刘玉花').spouseIds.map((id) => map.get(id).name), ['进发']);
  assert.deepEqual(find('刘枢').spouseIds.map((id) => map.get(id).name), ['郑氏（刘枢配）']);
});

test('族谱引用对称、无断链、无祖先环', () => {
  const walk = (p, ancestors = new Set()) => {
    assert.ok(!ancestors.has(p.id), `祖先环：${p.name}`);
    for (const id of [p.fatherId, p.motherId].filter(Boolean)) walk(map.get(id), new Set([...ancestors, p.id]));
  };
  for (const p of people) {
    for (const id of [p.fatherId, p.motherId, ...p.spouseIds, ...p.childrenIds].filter(Boolean)) assert.ok(map.has(id) && id !== p.id);
    for (const id of p.spouseIds) assert.ok(map.get(id).spouseIds.includes(p.id));
    for (const id of p.childrenIds) assert.ok([map.get(id).fatherId, map.get(id).motherId].includes(p.id));
    walk(p);
  }
});

test('导入族谱只生成草稿，不覆盖人工校对结果', () => {
  const before = fs.readFileSync('src/data/genealogy.ts');
  const result = spawnSync(process.execPath, ['scripts/import-genealogy-from-book.js'], { encoding: 'utf8', timeout: 30000 });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(fs.readFileSync('src/data/genealogy.ts'), before);
  assert.ok(fs.existsSync('tmp/genealogy-import-draft.ts'));
});

test('人物生卒不把唐昭宗年号当成寿命', () => {
  const p = readData('src/data/people.ts', 'people').find((p) => p.name === '刘嵩');
  assert.equal(p.years, '生卒未详');
});

test('空目录导入不能清空村史目录', () => {
  const before = fs.readFileSync('src/data/book.ts');
  fs.mkdirSync('tmp/empty-book-test', { recursive: true });
  const result = spawnSync(process.execPath, ['scripts/import-book.js', 'tmp/empty-book-test'], { encoding: 'utf8', timeout: 30000 });
  assert.notEqual(result.status, 0);
  assert.deepEqual(fs.readFileSync('src/data/book.ts'), before);
});

test('清理族谱只生成候选，不删除人工记录', () => {
  const before = fs.readFileSync('src/data/genealogy.ts');
  const result = spawnSync(process.execPath, ['scripts/clean-genealogy-nonpersons.js'], { encoding: 'utf8', timeout: 30000 });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(fs.readFileSync('src/data/genealogy.ts'), before);
});
