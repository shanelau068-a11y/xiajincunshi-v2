import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distRoot = path.join(projectRoot, "dist");
const maxGithubFileSize = 95 * 1024 * 1024;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return [fullPath];
  });
}

const removed = [];
for (const filePath of walk(distRoot)) {
  const stat = fs.statSync(filePath);
  if (stat.size <= maxGithubFileSize) continue;
  fs.unlinkSync(filePath);
  removed.push(path.relative(distRoot, filePath).replace(/\\/g, "/"));
}

if (removed.length) {
  console.log("Removed oversized files from dist for GitHub Pages:");
  for (const item of removed) console.log(`- ${item}`);
} else {
  console.log("No oversized files found in dist.");
}
