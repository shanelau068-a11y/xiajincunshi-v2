import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const genealogyPath = path.join(projectRoot, "src", "data", "genealogy.ts");
const reportPath = path.join(projectRoot, "tmp", "genealogy-nonperson-clean-report.md");

const chineseNumeralGeneration = /^[一二三四五六七八九十〇零百]+世$/;

function readPeople() {
  const text = fs.readFileSync(genealogyPath, "utf8");
  const match = text.match(/([\s\S]*?export const genealogyPeople: GenealogyPerson\[\] = )([\s\S]*?);\s*$/);
  if (!match) throw new Error("Cannot parse src/data/genealogy.ts");
  return {
    prefix: match[1],
    people: JSON.parse(match[2]),
  };
}

function unique(list) {
  return [...new Set((list ?? []).filter(Boolean))];
}

function isNonPersonName(name) {
  const value = String(name ?? "").trim();
  if (!value) return true;
  if (value === "花公花妈") return true;
  if (value === "嫘祖为元") return true;
  if (value === "刘后厝") return true;
  if (value === "刘勤") return true;
  if (value === "刘功名") return true;
  if (value === "传至其") return true;
  if (value === "田/许/林三氏之一") return true;
  if (value === "氏未详" || value === "妣氏未详" || value === "配偶未详") return true;
  if (value.includes("未详")) return true;
  if (value.endsWith("身处")) return true;
  if (value.startsWith("迁")) return true;
  if (value.includes("名讳")) return true;
  if (value.includes("先祖")) return true;
  if (value.startsWith("始祖") || value.startsWith("创祖")) return true;
  if (chineseNumeralGeneration.test(value)) return true;
  if (/^[黄刘廖陈洪潘柯赖管李林康]名讳$/.test(value)) return true;
  if (value === "黄帝七世") return true;
  return false;
}

function normalizePersonName(name) {
  const value = String(name ?? "").trim();
  if (/^刘[\u4e00-\u9fa5]{2,4}[字号]$/.test(value)) {
    return value.slice(0, -1);
  }
  return value;
}

function removePeople(people, shouldRemove) {
  const removed = people.filter(shouldRemove);
  const removedIds = new Set(removed.map((person) => person.id));

  for (const person of people) {
    if (removedIds.has(person.id)) continue;
    if (removedIds.has(person.fatherId)) delete person.fatherId;
    if (removedIds.has(person.motherId)) delete person.motherId;
    person.spouseIds = unique(person.spouseIds).filter((id) => !removedIds.has(id) && id !== person.id);
    person.childrenIds = unique(person.childrenIds).filter((id) => !removedIds.has(id) && id !== person.id);
  }

  return {
    people: people.filter((person) => !removedIds.has(person.id)),
    removed,
  };
}

function writePeople(prefix, people) {
  const draft = path.join(projectRoot, 'tmp', 'genealogy-clean-draft.ts');
  fs.mkdirSync(path.dirname(draft), { recursive: true });
  fs.writeFileSync(draft, `${prefix}${JSON.stringify(people, null, 2)};\n`, "utf8");
}

function writeReport(removed) {
  const lines = [
    "# 非人名族谱节点清理报告",
    "",
    `- 清理节点数：${removed.length}`,
    "",
    "## 已清理节点",
    "",
    ...removed.map((person) => `- ${person.name}（${person.id}，来源：${person.sourceTitle ?? "未注明"}）`),
    "",
    "说明：此脚本只清理明显由段落文字误抽出的非人名节点；明确配偶如“陈氏（某人配）”会保留。",
  ];
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8");
}

const { prefix, people } = readPeople();
for (const person of people) {
  person.name = normalizePersonName(person.name);
}
const result = removePeople(people, (person) => isNonPersonName(person.name));
writePeople(prefix, result.people);
writeReport(result.removed);

console.log(`生成清理候选：${result.removed.length} 个节点；已校对族谱未覆盖。`);
console.log(`报告：${path.relative(projectRoot, reportPath)}`);
