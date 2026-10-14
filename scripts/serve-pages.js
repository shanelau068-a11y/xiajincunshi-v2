import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { projectRoot } from './lib/data.js';

const root = path.join(projectRoot, 'dist');
const prefix = '/xiajincunshi-v2/';
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json', '.webp': 'image/webp', '.pdf': 'application/pdf' };
http.createServer((req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (!pathname.startsWith(prefix)) { res.writeHead(404).end(); return; }
    const target = path.resolve(root, pathname.slice(prefix.length) || 'index.html');
    const relative = path.relative(root, target);
    if (relative.startsWith('..') || path.isAbsolute(relative) || !fs.existsSync(target) || !fs.statSync(target).isFile()) { res.writeHead(404).end(); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(target).toLowerCase()] ?? 'application/octet-stream' });
    fs.createReadStream(target).pipe(res);
  } catch { res.writeHead(400).end(); }
}).listen(5197, '127.0.0.1', () => console.log('Pages test server: http://127.0.0.1:5197/xiajincunshi-v2/'));
