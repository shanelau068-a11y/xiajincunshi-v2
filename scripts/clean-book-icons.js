import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const bookRoot = path.join(projectRoot, "public", "book");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return entry.isFile() && entry.name.toLowerCase().endsWith(".html") ? [fullPath] : [];
  });
}

function removePageIcons(html) {
  let next = html;
  const before = next;

  next = next.replace(/\sdata-notion-page-icon=(["']).*?\1/g, "");
  next = next.replace(/<meta\b[^>]*name=(["'])data-notion-page-icon\1[^>]*>/gi, "");
  next = next.replace(/<link\b[^>]*rel=(["'])icon\1[^>]*href=(["'])data:image\/svg\+xml[\s\S]*?\2[^>]*>/gi, "");
  next = next.replace(/<link\b[^>]*href=(["'])data:image\/svg\+xml[\s\S]*?\1[^>]*rel=(["'])icon\2[^>]*>/gi, "");
  next = next.replace(/<div\b[^>]*class=(["'])[^"']*\bpage-header-icon\b[^"']*\1[^>]*>[\s\S]*?<\/div>/gi, "");
  next = next.replace(/<img\b[^>]*class=(["'])[^"']*\bicon\b[^"']*\1[^>]*>/gi, "");
  next = next.replace(/<img\b[^>]*class=(["'])[^"']*\bnotion-static-icon\b[^"']*\1[^>]*>/gi, "");
  next = next.replace(/<span\b[^>]*class=(["'])[^"']*\bicon\b[^"']*\1[^>]*data-emoji=(["']).*?\2[^>]*><\/span>/gi, "");
  next = next.replace(/<span\b[^>]*data-emoji=(["']).*?\1[^>]*class=(["'])[^"']*\bicon\b[^"']*\2[^>]*><\/span>/gi, "");

  return {
    html: next,
    changed: next !== before,
  };
}

const files = walk(bookRoot);
let changedFiles = 0;

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  const result = removePageIcons(original);
  if (!result.changed) continue;
  fs.writeFileSync(file, result.html, "utf8");
  changedFiles += 1;
}

console.log(`已检查 ${files.length} 个 HTML 文件，清理 ${changedFiles} 个文件中的页面图标。`);
