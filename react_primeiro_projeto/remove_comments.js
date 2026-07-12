const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname);
const exts = new Set(['.ts', '.tsx', '.js', '.jsx', '.py']);
const excludeDirs = new Set(['.next', 'node_modules', '.git', 'public']);

function stripComments(text) {
  let out = '';
  let i = 0;
  let state = 'code';
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escape = false;
  let inLineComment = false;
  let inBlockComment = false;

  while (i < text.length) {
    const ch = text[i];
    const next = text[i + 1] || '';

    if (inLineComment) {
      if (ch === '\n') {
        inLineComment = false;
        out += ch;
      }
      i += 1;
      continue;
    }

    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false;
        i += 2;
      } else {
        if (ch === '\n') out += ch;
        i += 1;
      }
      continue;
    }

    if (inSingle) {
      out += ch;
      if (escape) {
        escape = false;
      } else if (ch === '\\') {
        escape = true;
      } else if (ch === "'") {
        inSingle = false;
      }
      i += 1;
      continue;
    }

    if (inDouble) {
      out += ch;
      if (escape) {
        escape = false;
      } else if (ch === '\\') {
        escape = true;
      } else if (ch === '"') {
        inDouble = false;
      }
      i += 1;
      continue;
    }

    if (inTemplate) {
      out += ch;
      if (escape) {
        escape = false;
      } else if (ch === '\\') {
        escape = true;
      } else if (ch === '`') {
        inTemplate = false;
      }
      i += 1;
      continue;
    }

    if (ch === "'") {
      inSingle = true;
      out += ch;
      i += 1;
      continue;
    }

    if (ch === '"') {
      inDouble = true;
      out += ch;
      i += 1;
      continue;
    }

    if (ch === '`') {
      inTemplate = true;
      out += ch;
      i += 1;
      continue;
    }

    if (ch === '/' && next === '/') {
      inLineComment = true;
      i += 2;
      continue;
    }

    if (ch === '/' && next === '*') {
      inBlockComment = true;
      i += 2;
      continue;
    }

    out += ch;
    i += 1;
  }

  return out;
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (excludeDirs.has(entry.name)) continue;
      walk(fullPath);
      continue;
    }

    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (!exts.has(ext)) continue;

    const original = fs.readFileSync(fullPath, 'utf8');
    const updated = stripComments(original);
    if (updated !== original) {
      fs.writeFileSync(fullPath, updated, 'utf8');
      console.log(`Updated ${path.relative(root, fullPath)}`);
    }
  }
}

walk(root);
console.log('Comment cleanup finished.');
