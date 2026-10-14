import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { fileURLToPath } from 'node:url';

export const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const bookRoot = path.join(projectRoot, 'public/book');

function literal(node) {
  if (ts.isStringLiteralLike(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (node.kind === ts.SyntaxKind.NullKeyword) return null;
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(literal);
  if (ts.isObjectLiteralExpression(node)) return Object.fromEntries(node.properties.map((p) => {
    if (!ts.isPropertyAssignment(p)) throw new Error('Data must contain literal properties');
    return [p.name.text, literal(p.initializer)];
  }));
  throw new Error('Data must contain literals, not executable expressions');
}

export function readData(file, name) {
  const source = fs.readFileSync(path.resolve(projectRoot, file), 'utf8');
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  for (const statement of ast.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    const declaration = statement.declarationList.declarations.find((d) => d.name.getText(ast) === name);
    if (declaration?.initializer) return literal(declaration.initializer);
  }
  throw new Error(`Missing ${name} in ${file}`);
}

export function writeData(file, name, data) {
  const target = path.resolve(projectRoot, file);
  const source = fs.readFileSync(target, 'utf8');
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  for (const statement of ast.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    const declaration = statement.declarationList.declarations.find((d) => d.name.getText(ast) === name);
    if (!declaration?.initializer) continue;
    const node = declaration.initializer;
    fs.writeFileSync(target, source.slice(0, node.getStart(ast)) + JSON.stringify(data, null, 2) + source.slice(node.end));
    return;
  }
  throw new Error(`Missing ${name} in ${file}`);
}

export function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}
