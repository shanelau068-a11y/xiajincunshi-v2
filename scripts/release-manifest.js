import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { projectRoot, walk, bookRoot } from './lib/data.js';
const pkg = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
const audit = JSON.parse(fs.readFileSync(path.join(projectRoot, 'reports/content-audit.json'), 'utf8'));
const hash = createHash('sha256');
for (const file of walk(bookRoot).filter((f) => /\.html?$/i.test(f)).sort()) {
  hash.update(path.relative(bookRoot, file).replace(/\\/g, '/'));
  hash.update(fs.readFileSync(file));
}
const release = { version: pkg.version, verifiedAt: audit.date, commit: process.env.GITHUB_SHA ?? null, counts: audit.counts, pendingReviewCount: audit.warnings, originalBookSha256: hash.digest('hex') };
fs.writeFileSync(path.join(projectRoot, 'dist/release.json'), JSON.stringify(release, null, 2));
console.log(`Release manifest: ${release.version}, ${release.pendingReviewCount} pending review records.`);
