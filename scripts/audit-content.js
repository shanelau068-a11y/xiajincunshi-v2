import fs from 'node:fs';
import path from 'node:path';
import { bookRoot, projectRoot, readData, walk } from './lib/data.js';
import { parseBook, normalizeText } from './lib/book-html.js';

const issues = [];
const add = (severity, area, name, detail) => issues.push({ severity, area, name, detail });
const chapters = readData('src/data/book.ts', 'bookChapters');
const genealogy = readData('src/data/genealogy.ts', 'genealogyPeople');
const reference = readData('src/data/genealogyReference.ts', 'genealogyReferencePeople');
const people = readData('src/data/people.ts', 'people');
const events = readData('src/data/timeline.ts', 'timelineEvents');
const photos = readData('src/data/gallery.ts', 'galleryPhotos');
const docs = readData('src/data/searchDocs.ts', 'searchDocs');
const places = readData('src/data/places.ts', 'places');
const map = new Map(genealogy.map((p) => [p.id, p]));
const files = walk(bookRoot).filter((f) => /\.html?$/i.test(f));
const texts = new Map();
const relativeFiles = new Set();

for (const file of files) {
  const relative = path.relative(bookRoot, file).replace(/\\/g, '/');
  relativeFiles.add(relative);
  const $ = parseBook(fs.readFileSync(file, 'utf8'));
  texts.set(relative, normalizeText($('body').text()));
  $('img[src], a[href]').each((_, node) => {
    const value = $(node).attr(node.name === 'img' ? 'src' : 'href');
    if (!value || /^(?:[a-z]+:|#|\/\/)/i.test(value)) return;
    let decoded;
    try { decoded = decodeURIComponent(value.split(/[?#]/)[0]); } catch { decoded = value; }
    const target = value.startsWith('/') ? path.join(projectRoot, 'public', decoded) : path.resolve(path.dirname(file), decoded);
    if (!fs.existsSync(target)) add(node.name === 'img' ? 'error' : 'warning', '村史资源', relative, `${node.name}: ${value}`);
  });
}

for (const [area, items] of [['目录', chapters], ['族谱', genealogy], ['人物志', people], ['大事记', events], ['照片', photos], ['搜索', docs]]) {
  const ids = new Set();
  for (const item of items) {
    if (ids.has(item.id)) add('error', area, item.name ?? item.title ?? item.id, `重复 id: ${item.id}`);
    ids.add(item.id);
  }
}
for (const item of [...chapters, ...docs]) {
  if (!relativeFiles.has(item.file)) add('error', '章节/搜索', item.title, `文件不存在: ${item.file}`);
}
for (const photo of photos) {
  if (!fs.existsSync(path.join(projectRoot, 'public', photo.image))) add('error', '照片', photo.title, photo.image);
}
for (const file of relativeFiles) {
  if (/勘误与审校报告/.test(file)) continue;
  const doc = docs.find((d) => d.file === file);
  if (!doc) add('error', '搜索', file, '未收入搜索索引');
  else if (normalizeText(doc.text) !== texts.get(file)) add('error', '搜索', file, '索引与当前 HTML 不同步，请运行 npm run import:search');
}

const nameGroups = new Map();
for (const p of genealogy) {
  const group = nameGroups.get(p.name) ?? [];
  group.push(p.id);
  nameGroups.set(p.name, group);
  if (/webkit-print-color-adjust|@media only screen/.test(p.description)) add('error', '族谱', p.name, '描述含样式代码');
  if (/时期|初期|为妻|居住|套入|氏失|公致|公的|为帝之|两子|娶田|大宗祠|网捕/.test(p.name)) add('error', '族谱', p.name, '疑似非人名，须对照来源');
  const links = [p.fatherId, p.motherId, ...p.spouseIds, ...p.childrenIds].filter(Boolean);
  for (const id of links) {
    if (!map.has(id)) add('error', '族谱', p.name, `悬空关系: ${id}`);
    if (id === p.id) add('error', '族谱', p.name, '指向自身的关系');
  }
  for (const [key, gender] of [['fatherId', '男'], ['motherId', '女']]) {
    const parent = map.get(p[key]);
    if (!parent) continue;
    if (parent.gender !== gender) add('error', '族谱', p.name, `${key} 性别错误: ${parent.name}`);
    if (!parent.childrenIds.includes(p.id)) add('error', '族谱', p.name, `父母子女关系不对称: ${parent.name}`);
    if (p.birthYear && parent.birthYear && p.birthYear - parent.birthYear < 12) add('warning', '族谱', p.name, `生年与父母相差不足12年: ${parent.name}`);
    if (p.generation && parent.generation && (p.generationSystem === parent.generationSystem) && p.generation !== parent.generation + 1) add('warning', '族谱', p.name, `世系与父母不连续: ${parent.name}`);
  }
  for (const id of p.childrenIds) {
    const child = map.get(id);
    if (child && child.fatherId !== p.id && child.motherId !== p.id) add('error', '族谱', p.name, `子女归属矛盾: ${child.name}`);
  }
  for (const id of p.spouseIds) {
    if (map.has(id) && !map.get(id).spouseIds.includes(p.id)) add('error', '族谱', p.name, `配偶关系不对称: ${map.get(id).name}`);
  }
  if (p.birthYear && p.deathYear && p.birthYear > p.deathYear) add('error', '族谱', p.name, '生年晚于卒年');
  if (p.gender === '男' && !p.generation) add('info', '待核世系', p.name, '尚无结构化世系证据；页面不按姓名猜辈份');
  if (p.reviewNotes?.length) add('warning', '族谱待核', p.name, p.reviewNotes.join('；'));
  for (const source of p.sourceFiles ?? []) {
    if (!texts.has(source)) add('error', '族谱来源', p.name, `来源文件不存在：${source}`);
  }
  if (!p.sourceFiles?.length) add('warning', '族谱来源', p.name, '来源未定位到实际 HTML；需补充原文证据');
}
for (const [name, ids] of nameGroups) {
  if (ids.length > 1) add('warning', '同名待核', name, '同名不等于同一人，不能仅凭姓名合并');
}
const visited = new Set();
const visiting = new Set();
function visit(id) {
  if (visiting.has(id)) { add('error', '族谱', map.get(id)?.name, '祖先关系成环'); return; }
  if (visited.has(id)) return;
  visiting.add(id);
  const p = map.get(id);
  [p?.fatherId, p?.motherId].filter((i) => map.has(i)).forEach(visit);
  visiting.delete(id);
  visited.add(id);
}
genealogy.forEach((p) => visit(p.id));

for (const p of people) {
  const sourceFile = p.sourceFile ?? p.biography.match(/来源：[^（]+（([^）]+)）/)?.[1];
  const body = p.biography.split(/\n\n来源：/)[0].replace(new RegExp(`^${p.name}[：:]?`), '');
  if (!sourceFile?.startsWith('第七篇 人物/')) add('error', '人物志', p.name, '来源不是人物篇');
  else if (!texts.get(sourceFile)?.includes(normalizeText(body))) add('warning', '人物志', p.name, '摘录与来源不完全一致');
}
const chronicleFile = chapters.find((c) => c.id === 'chronicle')?.file;
for (const e of events) {
  if (!texts.get(chronicleFile)?.includes(normalizeText(e.detail))) add('warning', '大事记', e.title, '内容与大事记原文不完全一致');
}
for (const place of places) {
  if (place.coordinateStatus !== '已定位') add('warning', '地图', place.name, '地点、简介和坐标仍为示例，需实地核实');
}
// Compare totals from actual table cells rather than copying an old review's sums.
const populationFile = files.find((f) => /第四篇 人口.*人口结构/.test(f));
if (populationFile) {
  const $ = parseBook(fs.readFileSync(populationFile, 'utf8'));
  const table = $('table').filter((_, t) => $(t).text().includes('姓氏')).first();
  let households = 0, population = 0, rows = 0;
  table.find('tr').each((_, row) => {
    const cells = $(row).find('td').map((_, cell) => $(cell).text().trim()).get();
    if (cells.length >= 4 && /^\d+$/.test(cells[2]) && /^\d+$/.test(cells[3])) {
      households += Number(cells[2]); population += Number(cells[3]); rows += 1;
    }
  });
  if (rows && (households !== 1818 || population !== 6035)) add('warning', '原文口径', '姓氏人口与2018年人口', `${rows}姓合计${households}户、${population}人；人口发展篇记2018年1818户、6035人。年份和户籍/常住/宗族口径需核对，未改原文数字。`);
  const villageTable = $('table').filter((_, t) => $(t).text().includes('村落')).first();
  const villageRows = villageTable.find('tr').filter((_, tr) => $(tr).find('td').length >= 4).length;
  if (villageRows && villageRows !== 14) add('warning', '原文缺漏', '自然村人口表', `表中只有${villageRows}行数据；与14个自然村的表述需要核对。`);
}
for (const [file, text] of texts) {
  if (/勘误与审校报告/.test(file)) continue;
  if (/台南知州|高雄州知州/.test(text)) add('warning', '原文待核', '刘景官职', `${file}记台南知州/高雄州知州；先祖创乡篇记奉诏使安南。请核族谱与原始文献，不能擅改成另一个官名。`);
  if (/约2\.6平方公里/.test(text) && /山地面积1455亩/.test(text)) add('warning', '原文口径', '山地面积', '土地资源篇同时记山地约2.6平方公里（3900亩）及2018年1455亩；需说明年代和征地后的统计口径。');
  if (/1102年/.test(text)) add('warning', '原文时间', file, '1102年是917年至2019年的差值。原文“迄今”应按编纂时间理解，不宜当作网站当前年份。');
  const gaps = text.match(/.{0,25}(?:缺第\d+页|未录入|后续可按照片|后续可再拆分|保留后续再整理|内容待补).{0,55}/g);
  if (gaps) add('warning', '原文缺漏', file, [...new Set(gaps)].join('；'));
  if (/峻工/.test(text)) add('warning', '原文文字', file, '出现“峻工”，通常应为“竣工”；原书留存，等待审定后修订。');
}
for (const p of genealogy) {
  const refs = reference.filter((r) => r.name === p.name || p.aliases?.includes(r.name));
  for (const r of refs) {
    if (r.conflict && /冲突|需人工|可能|推算/.test(r.conflict)) add('warning', '参考表待核', p.name, r.conflict);
    if (r.gender === '男' || r.gender === '女') {
      if (r.gender !== p.gender) add('warning', '参考表差异', p.name, `性别：参考表${r.gender}，网站${p.gender}`);
    }
  }
}
const refsToReview = reference.filter((r) => /待|冲突|需人工|可能|未明|未说明/.test(`${r.status} ${r.conflict}`));
const report = {
  date: new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Shanghai' }),
  counts: { html: files.length, chapters: chapters.length, genealogy: genealogy.length, people: people.length, events: events.length, photos: photos.length, searchDocs: docs.length, referenceRecords: reference.length, referenceNeedsReview: refsToReview.length },
  errors: issues.filter((i) => i.severity === 'error').length,
  warnings: issues.filter((i) => i.severity === 'warning').length,
  information: issues.filter((i) => i.severity === 'info').length,
  issues,
};
fs.mkdirSync(path.join(projectRoot, 'reports'), { recursive: true });
const suffix = process.argv.includes('--baseline') ? '-baseline' : '';
fs.writeFileSync(path.join(projectRoot, `reports/content-audit${suffix}.json`), JSON.stringify(report, null, 2));
const lines = ['# 村史资料核对报告', '', `核对日期：${report.date}。仅核对网站数据与所提供的村史/参考表，不代表史料事实已经独立考证。`, '', `数据规模：${JSON.stringify(report.counts)}`, '', `结构错误：${report.errors}；待人工核对及提示：${report.warnings}。其中“尚无世数证据”不等于人物有误。`, '', '## 原文矛盾和资料缺漏', '', ...issues.filter((i) => i.area.startsWith('原文')).map((i) => `- ${i.name}：${i.detail}`), '', '## 发现记录', '', '|级别|范围|对象|说明|', '|---|---|---|---|', ...issues.map((i) => `|${i.severity}|${i.area}|${String(i.name).replace(/\|/g, '/')}|${i.detail.replace(/[\r\n|]/g, ' ')}|`), '', '## Excel 参考表的审校状态', '', `参考表中 ${refsToReview.length} 条记录含待校对/未明确关系等状态，不能将“合并完成”当作“史料已审定”。`, '', ...refsToReview.filter((r) => /冲突|需人工|可能/.test(r.conflict)).map((r) => `- ${r.name}：${r.conflict}`)];
fs.writeFileSync(path.join(projectRoot, `reports/content-audit${suffix}.md`), lines.join('\n'));
console.log(JSON.stringify({ counts: report.counts, errors: report.errors, warnings: report.warnings, information: report.information }));
if (report.errors && !process.argv.includes('--baseline')) process.exitCode = 1;
