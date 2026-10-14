import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const genealogyPath = path.join(projectRoot, "src", "data", "genealogy.ts");
const referencePath = path.join(projectRoot, "src", "data", "genealogyReference.ts");
const reportPath = path.join(projectRoot, "tmp", "genealogy-reference-merge-report.md");

function readExportedArray(filePath, exportName) {
  const text = fs.readFileSync(filePath, "utf8");
  const match = text.match(new RegExp(`export const ${exportName}: [^=]+ = ([\\s\\S]*?);\\s*$`));
  if (!match) {
    throw new Error(`Cannot find exported array ${exportName} in ${filePath}`);
  }
  return JSON.parse(match[1]);
}

function clean(value) {
  return String(value ?? "").trim();
}

function isUnknownName(name) {
  const value = clean(name);
  if (!value) return true;
  return (
    value.includes("未详") ||
    value === "不详" ||
    value === "无" ||
    value === "氏" ||
    value === "妣氏" ||
    value === "配偶"
  );
}

function isLineageRecord(record) {
  return clean(record.lineageFlag).startsWith("是") || clean(record.category).startsWith("A.");
}

function normalizeName(name) {
  return clean(name).replace(/\s+/g, "");
}

function hasSurname(name) {
  return /^[\u4e00-\u9fa5]{2,}$/.test(name) && /^[刘廖陈黄洪许林梁辛郑冯王李张赵吴周曾杨赖蔡罗何谢庄方郭]/.test(name);
}

function sharesAny(left = [], right = []) {
  return left.some((item) => right.includes(item));
}

function findSurnamedAlias(people, shortName, contextPerson) {
  const name = normalizeName(shortName);
  if (!name || hasSurname(name)) return undefined;
  const candidates = people.filter((person) => person.name !== name && normalizeName(person.name).endsWith(name));
  if (!candidates.length) return undefined;
  if (!contextPerson) return candidates.length === 1 ? candidates[0] : undefined;

  const strong = candidates.filter((person) => {
    const personSpouses = ensureArray(person.spouseIds);
    const contextSpouses = ensureArray(contextPerson.spouseIds);
    const personChildren = ensureArray(person.childrenIds);
    const contextChildren = ensureArray(contextPerson.childrenIds);
    return (
      personSpouses.includes(contextPerson.id) ||
      contextSpouses.includes(person.id) ||
      sharesAny(personChildren, contextChildren)
    );
  });
  if (strong.length === 1) return strong[0];
  return candidates.length === 1 ? candidates[0] : undefined;
}

function makeIdFromReference(record) {
  const base = clean(record.id) || normalizeName(record.name);
  return `ref_${base.replace(/[^\w\u4e00-\u9fa5-]+/g, "_")}`;
}

function parseYear(value) {
  const match = clean(value).match(/\d{3,4}/);
  return match ? Number(match[0]) : undefined;
}

function generationLead(record) {
  const generation = clean(record.generation);
  const generationName = clean(record.generationName);
  if (generation && generationName) return `${generation}"${generationName}"字辈`;
  if (generation) return generation;
  return "";
}

function buildDescription(record) {
  const lead = generationLead(record);
  const excerpt = clean(record.excerpt);
  const summary = clean(record.summary);
  const body = excerpt || summary || clean(record.events) || clean(record.note);
  if (lead && body && !body.includes(lead)) return `${lead}：${body}`;
  return body || lead || "来自族谱参考表，待补充详情。";
}

function cleanSourceTitle(source) {
  return clean(source).split(/[；;]/)[0] || "族谱参考表";
}

function chooseExistingPerson(people, record) {
  const name = normalizeName(record.name);
  const matches = people.filter((person) => normalizeName(person.name) === name);
  if (matches.length <= 1) return matches[0];

  const source = clean(record.source) + clean(record.sourceFile);
  const bySource = matches.find((person) => {
    const currentSource = `${clean(person.sourceTitle)}${clean(person.sourceFile)}`;
    return source && currentSource && (source.includes(clean(person.sourceTitle)) || currentSource.includes(clean(record.sourceFile)));
  });
  return bySource || matches[0];
}

function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function ensurePerson(people, recordByName, name, fallback = {}) {
  const normalized = normalizeName(name);
  if (isUnknownName(normalized)) return undefined;

  const alias = findSurnamedAlias(people, normalized, fallback.contextPerson);
  if (alias) return alias;

  const record = recordByName.get(normalized);
  const existing = record ? chooseExistingPerson(people, record) : people.find((person) => normalizeName(person.name) === normalized);
  if (existing) return existing;

  const created = {
    id: record ? makeIdFromReference(record) : `manual_${normalized}`,
    name: normalized,
    gender: record && clean(record.gender) === "女" ? "女" : fallback.gender || "男",
    spouseIds: [],
    childrenIds: [],
    description: record ? buildDescription(record) : fallback.description || "来自族谱参考表的亲属关系补充，待校对详情。",
    clan: record?.surname ? `${clean(record.surname)}氏` : fallback.clan,
    sourceTitle: record ? cleanSourceTitle(record.source) : fallback.sourceTitle,
    sourceFile: record ? clean(record.sourceFile) : fallback.sourceFile,
  };
  const birthYear = record ? parseYear(record.birthYear) : undefined;
  const deathYear = record ? parseYear(record.deathYear) : undefined;
  if (birthYear) created.birthYear = birthYear;
  if (deathYear) created.deathYear = deathYear;

  people.push(created);
  return created;
}

function addUnique(list, value) {
  if (value && !list.includes(value)) list.push(value);
}

function replaceIdEverywhere(people, fromId, toId) {
  for (const person of people) {
    if (person.fatherId === fromId) person.fatherId = toId;
    if (person.motherId === fromId) person.motherId = toId;
    person.spouseIds = ensureArray(person.spouseIds).map((id) => (id === fromId ? toId : id)).filter((id, index, list) => id !== person.id && list.indexOf(id) === index);
    person.childrenIds = ensureArray(person.childrenIds).map((id) => (id === fromId ? toId : id)).filter((id, index, list) => id !== person.id && list.indexOf(id) === index);
  }
}

function mergeDuplicateIntoTarget(duplicate, target) {
  for (const spouseId of ensureArray(duplicate.spouseIds)) addUnique(target.spouseIds, spouseId);
  for (const childId of ensureArray(duplicate.childrenIds)) addUnique(target.childrenIds, childId);
  if (!target.fatherId && duplicate.fatherId) target.fatherId = duplicate.fatherId;
  if (!target.motherId && duplicate.motherId) target.motherId = duplicate.motherId;
  if ((!target.description || target.description.length < duplicate.description?.length) && duplicate.description) {
    target.description = duplicate.description;
  }
}

function dedupeSurnamedAliases(people) {
  const removedIds = new Set();
  const merged = [];

  for (const duplicate of [...people]) {
    const shortName = normalizeName(duplicate.name);
    if (!shortName || hasSurname(shortName)) continue;
    const target = findSurnamedAlias(
      people.filter((person) => person.id !== duplicate.id && !removedIds.has(person.id)),
      shortName,
      duplicate,
    );
    if (!target) continue;
    mergeDuplicateIntoTarget(duplicate, target);
    replaceIdEverywhere(people, duplicate.id, target.id);
    removedIds.add(duplicate.id);
    merged.push(`${duplicate.name} -> ${target.name}`);
  }

  if (!removedIds.size) return merged;
  for (let index = people.length - 1; index >= 0; index -= 1) {
    if (removedIds.has(people[index].id)) people.splice(index, 1);
  }
  return merged;
}

function replacePoorDescription(current, record) {
  const next = buildDescription(record);
  const currentText = clean(current.description);
  const looksLikeCssDump = currentText.includes("webkit-print-color-adjust") || currentText.includes("@media only screen");
  if (!currentText || looksLikeCssDump || (next.length > currentText.length && !next.includes(currentText))) {
    current.description = next;
  }
}

function mergePersonBasics(person, record) {
  if (clean(record.gender) === "男" || clean(record.gender) === "女") {
    person.gender = clean(record.gender);
  }
  const birthYear = parseYear(record.birthYear);
  const deathYear = parseYear(record.deathYear);
  if (birthYear && !person.birthYear) person.birthYear = birthYear;
  if (deathYear && !person.deathYear) person.deathYear = deathYear;
  if (record.surname && !person.clan) person.clan = `${clean(record.surname)}氏`;
  if (record.source && !person.sourceTitle) person.sourceTitle = cleanSourceTitle(record.source);
  if (record.sourceFile && !person.sourceFile) person.sourceFile = clean(record.sourceFile);
  replacePoorDescription(person, record);
  person.spouseIds = ensureArray(person.spouseIds);
  person.childrenIds = ensureArray(person.childrenIds);
}

function writeGenealogy(people) {
  const original = fs.readFileSync(genealogyPath, "utf8");
  const before = original.split("export const genealogyPeople: GenealogyPerson[] = ")[0];
  const body = `${before}export const genealogyPeople: GenealogyPerson[] = ${JSON.stringify(people, null, 2)};\n`;
  const draft = path.join(projectRoot, 'tmp', 'genealogy-reference-draft.ts');
  fs.mkdirSync(path.dirname(draft), { recursive: true });
  fs.writeFileSync(draft, body, "utf8");
}

const people = readExportedArray(genealogyPath, "genealogyPeople");
const reference = readExportedArray(referencePath, "genealogyReferencePeople").filter(isLineageRecord);
const recordByName = new Map();

for (const record of reference) {
  const name = normalizeName(record.name);
  if (!isUnknownName(name) && !recordByName.has(name)) {
    recordByName.set(name, record);
  }
}

const stats = {
  referenceRecords: reference.length,
  createdPeople: 0,
  fatherLinks: 0,
  motherLinks: 0,
  spouseLinks: 0,
  childLinks: 0,
  mergedAliases: [],
};

const initialCount = people.length;

for (const record of reference) {
  if (isUnknownName(record.name)) continue;
  const person = ensurePerson(people, recordByName, record.name);
  if (!person) continue;
  mergePersonBasics(person, record);
}

stats.createdPeople = people.length - initialCount;

for (const record of reference) {
  if (isUnknownName(record.name)) continue;
  const person = ensurePerson(people, recordByName, record.name);
  if (!person) continue;

  const father = ensurePerson(people, recordByName, record.fatherName, {
    gender: "男",
    clan: person.clan,
    sourceTitle: person.sourceTitle,
    sourceFile: person.sourceFile,
    contextPerson: person,
  });
  if (father && person.fatherId !== father.id) {
    person.fatherId = father.id;
    addUnique(father.childrenIds, person.id);
    stats.fatherLinks += 1;
  }

  const mother = ensurePerson(people, recordByName, record.motherName, {
    gender: "女",
    clan: person.clan,
    sourceTitle: person.sourceTitle,
    sourceFile: person.sourceFile,
    contextPerson: person,
  });
  if (mother && person.motherId !== mother.id) {
    person.motherId = mother.id;
    addUnique(mother.childrenIds, person.id);
    stats.motherLinks += 1;
  }

  for (const spouseName of ensureArray(record.spouseNames)) {
    const spouse = ensurePerson(people, recordByName, spouseName, {
      gender: person.gender === "男" ? "女" : "男",
      clan: person.clan,
      sourceTitle: person.sourceTitle,
      sourceFile: person.sourceFile,
      description: `配偶：${person.name}。来自族谱参考表，待补充详情。`,
      contextPerson: person,
    });
    if (!spouse) continue;
    const beforeA = person.spouseIds.length;
    const beforeB = spouse.spouseIds.length;
    addUnique(person.spouseIds, spouse.id);
    addUnique(spouse.spouseIds, person.id);
    if (person.spouseIds.length !== beforeA || spouse.spouseIds.length !== beforeB) stats.spouseLinks += 1;
  }

  for (const childName of ensureArray(record.childrenNames)) {
    const child = ensurePerson(people, recordByName, childName, {
      gender: "男",
      clan: person.clan,
      sourceTitle: person.sourceTitle,
      sourceFile: person.sourceFile,
      contextPerson: person,
    });
    if (!child) continue;
    const before = person.childrenIds.length;
    addUnique(person.childrenIds, child.id);
    if (person.gender === "女" && !child.motherId) child.motherId = person.id;
    if (person.gender !== "女" && !child.fatherId) child.fatherId = person.id;
    if (person.childrenIds.length !== before) stats.childLinks += 1;
  }
}

stats.mergedAliases = dedupeSurnamedAliases(people);

writeGenealogy(people);

const report = [
  "# 族谱参考表合并报告",
  "",
  `- 参考世系记录：${stats.referenceRecords}`,
  `- 新增人物节点：${stats.createdPeople}`,
  `- 补父亲关系：${stats.fatherLinks}`,
  `- 补母亲关系：${stats.motherLinks}`,
  `- 补配偶关系：${stats.spouseLinks}`,
  `- 补子女关系：${stats.childLinks}`,
  `- 合并省姓重复节点：${stats.mergedAliases.length}`,
  "",
  "## 本次合并的省姓重复节点",
  "",
  ...(stats.mergedAliases.length ? stats.mergedAliases.map((item) => `- ${item}`) : ["无。"]),
  "",
  "说明：本脚本只合并参考表中标记为村内严格世系的人物关系；配偶或父母写作“未详”的，不生成空白节点。",
].join("\n");

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, report, "utf8");
console.log(report);
console.log('仅生成 tmp/genealogy-reference-draft.ts；未覆盖已校对族谱。合并建议须人工核对。');
