import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseBook, plainText } from './lib/book-html.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const bookRoot = path.join(projectRoot, 'public', 'book');
const outputFile = path.join(projectRoot, 'tmp', 'genealogy-import-draft.ts');

const surnameChars = '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田胡凌霍虞万支柯管赖曾';
const surnamePattern = new RegExp(`[${surnameChars}]氏`);
const noiseWords = /^(备注|户数|人数|村落|姓氏|名字|已历|迄今已历|迁徙概况|侨居|旅居|迁向|迁汕头|迁澄海|迁广州|迁上海|迁南宁|迁普宁|迁惠州|迁黄冈|第一批|第二批|第三批|第四批|第五批|其一|其二|其三|其四|其五|其六|其七|其八|一子|一女|二子|二女|三子|三女|四子|四女|五子|五女)$/;
const badTail = /(公房|祠堂|学校|祖国|乡|村|寨|桥|县|镇|市|区|公厅|概况|字辈|迁徙|批|户数|人数|备注|之|为)$/;

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

function stripTags(value) {
  return plainText(value);
}

function titleFromHtml(html, file) {
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  if (h1) return stripTags(h1);
  return path.basename(file, path.extname(file)).replace(/\s+[a-f0-9]{20,}$/i, '');
}

function recordsFromHtml(html) {
  const matches = [...html.matchAll(/<(p|li)[^>]*>([\s\S]*?)<\/\1>/gi)];
  return matches.map((match) => stripTags(match[2])).filter(Boolean);
}

function cleanName(raw) {
  return decodeHtml(raw)
    .replace(/（[^）]*）|\([^)]*\)/g, '')
    .replace(/^(?:一子|二子|三子|四子|五子|六子|七子|八子|九子|十子|长子|次子|幺子|独子|子|一女|二女|三女|四女|五女|六女|七女|八女|九女|十女|长女|次女|幺女|独女|女|配偶|妻|娶|妣|公)/, '')
    .replace(/[一二三四五六七八九十]子$/, '')
    .replace(/[一二三四五六七八九十]$/, '')
    .replace(/字[\u4e00-\u9fff]+$/, '')
    .replace(/字$/, '')
    .replace(/[，,。.：:；;\s"“”‘’]/g, '')
    .replace(/公$/, '')
    .trim();
}

function cleanChildName(raw) {
  const withoutCount = decodeHtml(raw)
    .replace(/（[^）]*）|\([^)]*\)/g, '')
    .replace(/[一二三四五六七八九十]子$/, '')
    .replace(/[一二三四五六七八九十]$/, '')
    .replace(/[，,。.：:；;\s"“”‘’]/g, '')
    .trim();
  const cleaned = cleanName(raw);
  if (cleaned.length === 1 && /^子[\u4e00-\u9fff]$/.test(withoutCount)) return withoutCount;
  return cleaned;
}

function isLikelyPersonName(name) {
  if (!/^[\u4e00-\u9fff]{2,4}$/.test(name)) return false;
  if (/公娶|公妣|公生/.test(name)) return false;
  if (noiseWords.test(name) || badTail.test(name)) return false;
  return true;
}

function clanFrom(file, title, records) {
  const joined = `${file} ${title} ${records.slice(0, 3).join(' ')}`;
  if (/第一章 刘氏|刘氏/.test(file)) return '刘氏';
  return joined.match(surnamePattern)?.[0];
}

function fullName(name, clan) {
  const surname = clan?.replace('氏', '');
  if (!surname || name.startsWith(surname) || name.endsWith('氏')) return name;
  if (name.length <= 2) return `${surname}${name}`;
  return name;
}

function fullNameFromRecord(shortName, clan, record) {
  const clean = cleanName(shortName);
  if (!isLikelyPersonName(clean)) return clean;
  const surname = clan?.replace('氏', '');
  if (!surname || clean.startsWith(surname) || clean.endsWith('氏')) return clean;
  const fullPattern = new RegExp(`(${surname}${clean})(?:字|号|公|，|。|\\s)`);
  const hit = record.match(fullPattern)?.[1];
  return hit ?? fullName(clean, clan);
}

function genderFromContext(record, name, fallback = '男') {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (new RegExp(`(?:一女|二女|三女|四女|五女|长女|次女|幺女|独女|女)\\s*${escaped}`).test(record)) return '女';
  if (new RegExp(`(?:妻|配偶|娶|妣|适)\\s*${escaped}`).test(record)) return '女';
  if (new RegExp(`${escaped}（适|${escaped}适`).test(record)) return '女';
  if (new RegExp(`(?:长子|次子|三子|四子|五子|幺子|独子|子)\\s*${escaped}`).test(record)) return '男';
  return fallback;
}

function extractYear(record) {
  const born = record.match(/(?:出生于|生于|于)(\d{4})年出生|(\d{4})年出生/);
  if (born) return Number(born[1] ?? born[2]);
  const ageMove = record.match(/(\d{4})年（其时(\d{1,3})岁）/);
  if (ageMove) return Number(ageMove[1]) - Number(ageMove[2]);
  return undefined;
}

function idFor(name, source, used) {
  let base = `g_${name}_${source}`.replace(/[^\u4e00-\u9fffa-zA-Z0-9]+/g, '_');
  if (base.length > 46) base = base.slice(0, 46);
  let id = base;
  let index = 2;
  while (used.has(id)) {
    id = `${base}_${index}`;
    index += 1;
  }
  used.add(id);
  return id;
}

const files = walk(path.join(bookRoot, '第二篇 先祖创乡')).filter((file) => {
  const relative = path.relative(bookRoot, file);
  return !/概况/.test(relative);
});

const people = [];
const usedIds = new Set();
const byKey = new Map();

function addPerson({ name, gender = '男', clan, sourceTitle, sourceFile, description, birthYear }) {
  const clean = cleanName(name);
  if (!isLikelyPersonName(clean)) return undefined;
  const normalized = fullName(clean, clan);
  const key = normalized === '氏未详' ? `${normalized}|${sourceFile}|${description}` : `${normalized}|${sourceFile}`;
  const existing = byKey.get(key);
  if (existing) {
    if (gender === '女') existing.gender = '女';
    if (!existing.birthYear && birthYear) existing.birthYear = birthYear;
    if (description) {
      const newIsDirect = description.startsWith(clean) || description.startsWith(normalized) || description.includes(`${clean}字`) || description.includes(`${normalized}字`);
      const existingIsDirect = existing.description.startsWith(clean) || existing.description.startsWith(normalized) || existing.description.includes(`${clean}字`) || existing.description.includes(`${normalized}字`);
      if ((newIsDirect && !existingIsDirect) || (!existingIsDirect && description.length > existing.description.length)) {
        existing.description = description;
      }
    }
    return existing;
  }

  const person = {
    id: idFor(normalized, sourceTitle, usedIds),
    name: normalized,
    gender,
    birthYear,
    spouseIds: [],
    childrenIds: [],
    description,
    clan,
    sourceTitle,
    sourceFile,
  };
  people.push(person);
  byKey.set(key, person);
  return person;
}

function getPerson(name, sourceFile) {
  return people.find((person) => person.name === name && person.sourceFile === sourceFile);
}

function addSpouse(a, b) {
  if (!a || !b || a.id === b.id) return;
  if (!a.spouseIds.includes(b.id)) a.spouseIds.push(b.id);
  if (!b.spouseIds.includes(a.id)) b.spouseIds.push(a.id);
}

function addChild(parent, child, isMother = false) {
  if (!parent || !child || parent.id === child.id) return;
  if (isMother) {
    if (child.motherId && child.motherId !== parent.id) {
      const oldMother = people.find((person) => person.id === child.motherId);
      if (oldMother) oldMother.childrenIds = oldMother.childrenIds.filter((id) => id !== child.id);
    }
    child.motherId = parent.id;
  } else {
    if (child.fatherId && child.fatherId !== parent.id) {
      const oldFather = people.find((person) => person.id === child.fatherId);
      if (oldFather) oldFather.childrenIds = oldFather.childrenIds.filter((id) => id !== child.id);
    }
    child.fatherId = parent.id;
  }
  if (!parent.childrenIds.includes(child.id)) parent.childrenIds.push(child.id);
}

function addNamedChild(parent, name, gender, clan, sourceTitle, sourceFile, description) {
  const child = addPerson({
    name,
    gender,
    clan,
    sourceTitle,
    sourceFile,
    description,
  });
  addChild(parent, child, parent?.gender === '女');
  return child;
}

function parentNameBeforeBirth(record, fallback) {
  const beforeBirth = record.split(/生|育有/)[0];
  const hits = [...beforeBirth.matchAll(/刘[\u4e00-\u9fff]{1,3}(?:字|号|，|,|。|公|$)/g)];
  const last = hits.at(-1)?.[0];
  return last ? cleanName(last) : fallback;
}

function strongNames(recordHtml) {
  return [...recordHtml.matchAll(/<strong[^>]*>([\s\S]*?)<\/strong>/gi)]
    .map((match) => cleanName(stripTags(match[1])))
    .filter(isLikelyPersonName);
}

function extractChildren(segment, clan, sourceTitle, sourceFile, record) {
  const children = [];
  const childPattern = /(?:长子|次子|三子|四子|五子|幺子|独子|子|长女|次女|三女|四女|五女|幺女|独女|女)\s*(?![一二三四五六七八九十])([\u4e00-\u9fff]{2,4})/g;
  for (const match of segment.matchAll(childPattern)) {
    const rawName = cleanName(match[1]);
    if (!isLikelyPersonName(rawName)) continue;
    const prefix = match[0].replace(match[1], '');
    const child = addPerson({
      name: rawName,
      gender: prefix.includes('女') ? '女' : '男',
      clan,
      sourceTitle,
      sourceFile,
      description: record,
    });
    if (child) children.push(child);
  }
  return children;
}

function applyKnownLiuPatterns(record, clan, title, relative) {
  const xilinPattern = /喜林配梁瑞音，育有二子：长子永利，次子永淡。锡林，生有一女：瑶珍/;
  if (!xilinPattern.test(record)) return;

  const xilin = addPerson({
    name: '锡林',
    gender: '男',
    clan,
    sourceTitle: title,
    sourceFile: relative,
    description: '长子德荣，配偶许清娇。长子锡林，次子喜林。许清娇葬在虎头山上。',
  });
  const xilinDaughter = addNamedChild(xilin, '瑶珍', '女', clan, title, relative, record);

  const xilinDaughterOldMother = xilinDaughter?.motherId ? people.find((person) => person.id === xilinDaughter.motherId) : undefined;
  if (xilinDaughterOldMother) {
    xilinDaughterOldMother.childrenIds = xilinDaughterOldMother.childrenIds.filter((id) => id !== xilinDaughter?.id);
    delete xilinDaughter.motherId;
  }

  const xilinWrongChildren = ['永利', '永淡']
    .map((name) => fullName(name, clan))
    .map((name) => people.find((person) => person.name === name && person.sourceFile === relative))
    .filter(Boolean);
  xilinWrongChildren.forEach((child) => {
    if (child && xilin) xilin.childrenIds = xilin.childrenIds.filter((id) => id !== child.id);
  });

  const xilinsSpouse = people.find((person) => person.name === fullName('梁瑞音', clan) && person.sourceFile === relative);
  if (xilinsSpouse) {
    xilin?.spouseIds.splice(0);
    xilinsSpouse.spouseIds = xilinsSpouse.spouseIds.filter((id) => id !== xilin?.id);
  }
}

function applyHonorificMarriagePattern(record, clan, title, relative) {
  const matches = [...record.matchAll(/([\u4e00-\u9fff]{2,4})公(?:娶|妣)([\u4e00-\u9fff]{1,3}氏|氏未详)，生([\u4e00-\u9fff、，,]+?)(?:[一二三四五六七八九十]子|子)/g)];
  for (const match of matches) {
    const fatherName = fullNameFromRecord(match[1], clan, record);
    const motherName = cleanName(match[2]);
    const father = addPerson({
      name: fatherName,
      gender: '男',
      clan,
      sourceTitle: title,
      sourceFile: relative,
      description: record,
    });
    const mother = addPerson({
      name: motherName,
      gender: '女',
      clan,
      sourceTitle: title,
      sourceFile: relative,
      description: record,
    });
    addSpouse(father, mother);

    match[3].split(/[、，,]/).map(cleanChildName).filter(isLikelyPersonName).forEach((name) => {
      const child = addPerson({
        name: fullName(name, clan),
        gender: '男',
        clan,
        sourceTitle: title,
        sourceFile: relative,
        description: record,
      });
      addChild(father, child);
      addChild(mother, child, true);
    });

    const bad = getPerson(`${match[1]}公娶`, relative) ?? getPerson(`${match[1]}公妣`, relative);
    if (bad) {
      people.splice(people.indexOf(bad), 1);
      byKey.delete(`${bad.name}|${relative}`);
      people.forEach((person) => {
        person.childrenIds = person.childrenIds.filter((id) => id !== bad.id);
        person.spouseIds = person.spouseIds.filter((id) => id !== bad.id);
        if (person.fatherId === bad.id) delete person.fatherId;
        if (person.motherId === bad.id) delete person.motherId;
      });
    }
  }
}

function applyCourtesyBirthPattern(record, clan, title, relative) {
  const matches = [...record.matchAll(/([\u4e00-\u9fff]{2,4})字[\u4e00-\u9fff]{1,3}，妣([\u4e00-\u9fff]{1,3}氏|氏未详)，生([\u4e00-\u9fff、，,]+?)(?:[一二三四五六七八九十]子|子)/g)];
  for (const match of matches) {
    const father = addPerson({
      name: match[1],
      gender: '男',
      clan,
      sourceTitle: title,
      sourceFile: relative,
      description: record,
    });
    const mother = addPerson({
      name: match[2],
      gender: '女',
      clan,
      sourceTitle: title,
      sourceFile: relative,
      description: record,
    });
    addSpouse(father, mother);

    match[3].split(/[、，,]/).map(cleanChildName).filter(isLikelyPersonName).forEach((name) => {
      const child = addPerson({
        name: fullName(name, clan),
        gender: '男',
        clan,
        sourceTitle: title,
        sourceFile: relative,
        description: record,
      });
      addChild(father, child);
      addChild(mother, child, true);
    });
  }
}

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const title = titleFromHtml(html, file);
  const relative = path.relative(bookRoot, file).replace(/\\/g, '/');
  const recordTexts = recordsFromHtml(html);
  const clan = clanFrom(relative, title, recordTexts);

  const $ = parseBook(html);
  const recordHtmls = $('p, li').toArray().filter((node) => !$(node).find('p, li').length).map((node) => $(node).html());

  for (const recordHtml of recordHtmls) {
    const record = stripTags(recordHtml);
    if (!/(始祖|创祖|开基|迁|生|育有|配偶|娶|妣|其子|长子|次子|三子|长女|次女|幺女|之子)/.test(record)) continue;
    if (/侨居|旅居|迁汕头|迁澄海|迁广州|迁上海|迁南宁|迁普宁|迁惠州|迁黄冈|移户口|户，|人。/.test(record) && !/生|育有|配偶|娶|妣|其子/.test(record)) continue;

    const names = strongNames(recordHtml);
    const explicitFounder = record.match(/(?:始祖|创祖|开基祖)\s*([\u4e00-\u9fff]{2,4})/)?.[1];
    if (explicitFounder) names.unshift(cleanName(explicitFounder));

    for (const name of [...new Set(names)]) {
      addPerson({
        name,
        gender: genderFromContext(record, name, name.endsWith('氏') ? '女' : '男'),
        clan,
        sourceTitle: title,
        sourceFile: relative,
        birthYear: extractYear(record),
        description: record,
      });
    }

    const subjectMatch = record.match(/^(?:桃坑\d+世[^：:]*[:：]\s*)?(?:长子|次子|三子|四子|五子|幺子|独子|长女|次女|三女|四女|五女|幺女)?\s*([\u4e00-\u9fff]{2,4})(?:字|（|，|,|配偶|配|娶|妣|生|育有|：|:|公(?!娶|妣|生))/);
    const subjectName = subjectMatch ? cleanName(subjectMatch[1]) : names[0];
    const subject = subjectName
      ? addPerson({
          name: subjectName,
          gender: genderFromContext(record, subjectName),
          clan,
          sourceTitle: title,
          sourceFile: relative,
          birthYear: extractYear(record),
          description: record,
        })
      : undefined;

    const spouseName = record.match(/(?:配偶|配|娶|妣)\s*([\u4e00-\u9fff]{2,4})/)?.[1];
    const spouse = spouseName
      ? addPerson({
          name: spouseName,
          gender: '女',
          clan,
          sourceTitle: title,
          sourceFile: relative,
          description: record,
        })
      : undefined;
    addSpouse(subject, spouse);

    const childSegment = record.includes('育有')
      ? record.slice(record.indexOf('育有')).split(/[。；]/)[0]
      : '';
    const directChildren = childSegment ? extractChildren(childSegment, clan, title, relative, record) : [];
    const parentForDirectChildren = subject;
    directChildren.forEach((child) => {
      addChild(parentForDirectChildren, child, parentForDirectChildren?.gender === '女');
      if (spouse) addChild(spouse, child, true);
    });

    const coupleBirth = record.match(/([\u4e00-\u9fff]{2,4})与([\u4e00-\u9fff]{2,4})育有[：:]?(.+)/);
    if (coupleBirth) {
      const father = addPerson({
        name: coupleBirth[1],
        gender: '男',
        clan,
        sourceTitle: title,
        sourceFile: relative,
        description: record,
      });
      const mother = addPerson({
        name: coupleBirth[2],
        gender: '女',
        clan,
        sourceTitle: title,
        sourceFile: relative,
        description: record,
      });
      addSpouse(father, mother);
      extractChildren(coupleBirth[3], clan, title, relative, record).forEach((child) => {
        addChild(father, child);
        addChild(mother, child, true);
      });
    }

    const simpleSons = record.match(/([\u4e00-\u9fff]{2,4})[^。；]*生([\u4e00-\u9fff、，,]+)(?:[一二三四五六七八九十]子|子)/);
    if (simpleSons) {
      const simpleParentName = parentNameBeforeBirth(record, simpleSons[1]);
      const parent = addPerson({
        name: simpleParentName,
        gender: '男',
        clan,
        sourceTitle: title,
        sourceFile: relative,
        description: record,
      });
      simpleSons[2].split(/[、，,]/).map(cleanChildName).filter(isLikelyPersonName).forEach((name) => {
        const child = addPerson({
          name: fullName(name, clan),
          gender: '男',
          clan,
          sourceTitle: title,
          sourceFile: relative,
          description: record,
        });
        addChild(parent, child);
      });
    }

    applyKnownLiuPatterns(record, clan, title, relative);
    applyHonorificMarriagePattern(record, clan, title, relative);
    applyCourtesyBirthPattern(record, clan, title, relative);
  }
}

people.sort((a, b) => {
  const aRoot = a.fatherId || a.motherId ? 1 : 0;
  const bRoot = b.fatherId || b.motherId ? 1 : 0;
  if (aRoot !== bRoot) return aRoot - bRoot;
  const clanCompare = (a.clan ?? '').localeCompare(b.clan ?? '', 'zh-Hans-CN');
  if (clanCompare) return clanCompare;
  return a.name.localeCompare(b.name, 'zh-Hans-CN');
});

const body = `export type GenealogyPerson = {
  id: string;
  name: string;
  gender: '男' | '女';
  birthYear?: number;
  deathYear?: number;
  fatherId?: string;
  motherId?: string;
  spouseIds: string[];
  childrenIds: string[];
  description: string;
  clan?: string;
  sourceTitle?: string;
  sourceFile?: string;
};

export const genealogyPeople: GenealogyPerson[] = ${JSON.stringify(people, null, 2)};
`;

if (!people.length) throw new Error('未识别出族谱草稿，保留已校对数据。');
fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, body, 'utf8');
console.log(`已生成 ${path.relative(projectRoot, outputFile)}，共 ${people.length} 人。`);
console.log('仅生成草稿，未覆盖 src/data/genealogy.ts；必须核对后再纳入已校对数据。');
