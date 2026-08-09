const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, 'react_primeiro_projeto');
const appRoot = path.join(projectRoot, 'app');
const allowed = new Set(['.ts', '.tsx', '.js', '.jsx']);

function stripComments(text) {
  let out = '';
  let i = 0;
  let state = 'code';
  let quote = null;
  let escaped = false;

  while (i < text.length) {
    const ch = text[i];
    const next = text[i + 1] || '';

    if (state === 'code') {
      if (ch === '"' || ch === "'" || ch === '`') {
        quote = ch;
        out += ch;
        state = 'string';
        i += 1;
        continue;
      }

      if (ch === '<' && text.slice(i, i + 4) === '<!--') {
        i += 4;
        while (i + 2 < text.length && text.slice(i, i + 3) !== '-->') {
          i += 1;
        }
        if (i + 2 < text.length) i += 3;
        continue;
      }

      if (ch === '/' && next === '/') {
        i += 2;
        while (i < text.length && text[i] !== '\n') {
          i += 1;
        }
        continue;
      }

      if (ch === '/' && next === '*') {
        i += 2;
        while (i + 1 < text.length && !(text[i] === '*' && text[i + 1] === '/')) {
          i += 1;
        }
        if (i + 1 < text.length) i += 2;
        continue;
      }

      out += ch;
      i += 1;
      continue;
    }

    if (state === 'string') {
      out += ch;
      if (ch === '\\' && !escaped) {
        escaped = true;
        i += 1;
        continue;
      }
      if (ch === quote && !escaped) {
        state = 'code';
        quote = null;
      }
      escaped = false;
      i += 1;
    }
  }

  return out;
}

function typeLabel(rel) {
  const low = rel.toLowerCase();
  if (low.endsWith('page.tsx') || low.endsWith('page.jsx')) return 'P\u00E1gina da aplica\u00E7\u00E3o';
  if (low.includes('/cadastro/')) return 'P\u00E1gina de cadastro';
  if (low.includes('/components/')) return 'Componente React';
  if (low.includes('/data/')) return 'Arquivo de dados';
  if (low.includes('/types/')) return 'Defini\u00E7\u00E3o de tipos';
  if (low.includes('/legado/')) return 'Arquivo legado';
  if (low.includes('/estados_eventos/')) return 'P\u00E1gina de estudo';
  return 'M\u00F3dulo do projeto';
}

function purpose(rel) {
  const low = rel.toLowerCase();
  if (low.endsWith('page.tsx') || low.endsWith('page.jsx')) return 'Esta p\u00E1gina re\u00FAne exemplos visuais e componentes para demonstrar conceitos de React e organiza\u00E7\u00E3o da interface.';
  if (low.includes('/cadastro/')) return 'Esta p\u00E1gina centraliza o formul\u00E1rio de cadastro e o estado dos campos preenchidos pelo usu\u00E1rio.';
  if (low.includes('/components/')) return 'Este componente gera parte da interface e recebe dados por meio de props para ser reutilizado.';
  if (low.includes('/data/')) return 'Este arquivo mantém listas e objetos estáticos usados para alimentar telas, tabelas e exemplos.';
  if (low.includes('/types/')) return 'Este arquivo descreve a estrutura dos dados do TypeScript para manter o c\u00F3digo previs\u00EDvel e seguro.';
  if (low.includes('/legado/')) return 'Este arquivo foi mantido como refer\u00EAncia hist\u00F3rica para comparar com as vers\u00F5es atuais do projeto.';
  if (low.includes('/estados_eventos/')) return 'Esta p\u00E1gina mostra exemplos de eventos, estado local e renderiza\u00E7\u00E3o din\u00E2mica em uma interface React.';
  return 'Este arquivo organiza parte da l\u00F3gica, do conte\u00FAdo ou da interface do projeto para facilitar o aprendizado.';
}

function howToRead(rel) {
  const low = rel.toLowerCase();
  if (low.endsWith('page.tsx') || low.endsWith('page.jsx')) return 'Leia cada se\u00E7\u00E3o em ordem para entender como os componentes, as props e os dados se relacionam na tela.';
  if (low.includes('/cadastro/')) return 'Observe os estados locais, os eventos de entrada e o envio do formul\u00E1rio para entender a l\u00F3gica do cadastro.';
  if (low.includes('/components/')) return 'Importe este componente em outra tela e passe valores para personalizar texto, imagem, estilo ou comportamento.';
  if (low.includes('/data/')) return 'Consulte este m\u00F3dulo para entender os valores iniciais usados pelo projeto e como eles s\u00E3o exibidos.';
  if (low.includes('/types/')) return 'Use estes tipos como refer\u00EAncia para saber quais propriedades cada objeto deve possuir antes de manipular os dados.';
  if (low.includes('/legado/')) return 'Compare este arquivo com a vers\u00E3o atual para entender a evolu\u00E7\u00E3o da solu\u00E7\u00E3o e os padr\u00F5es de estudo.';
  if (low.includes('/estados_eventos/')) return 'Use esta p\u00E1gina como guia para entender como a\u00E7\u00F5es do usu\u00E1rio alteram a interface e como o estado \u00E9 atualizado.';
  return 'Leia este m\u00F3dulo como refer\u00EAncia do papel que ele desempenha no conjunto da aplica\u00E7\u00E3o.';
}

function normalizeFile(filePath) {
  const rel = path.relative(projectRoot, filePath).replace(/\\/g, '/');
  const raw = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '').replace(/\r/g, '');
  const code = stripComments(raw).replace(/\n{3,}/g, '\n\n').trimStart();

  let remaining = code;
  const match = remaining.match(/^(?:"use client";|'use client';)\s*\n?/);
  let useClient = '';
  if (match) {
    useClient = match[0].trim();
    remaining = remaining.slice(match[0].length).trimStart();
  }

  const header = [
    '/**',
    ' * Arquivo: ' + rel,
    ' * Nome: ' + path.basename(filePath),
    ' * Tipo: ' + typeLabel(rel),
    ' * Finalidade: ' + purpose(rel),
    ' * Como ler: ' + howToRead(rel),
    ' *',
    ' * Observa\u00E7\u00E3o did\u00E1tica:',
    ' * - este arquivo funciona como refer\u00EAncia do papel da parte do projeto;',
    ' * - mantenha explica\u00E7\u00F5es apenas no in\u00EDcio do arquivo e fora de fun\u00E7\u00F5es e componentes;',
    ' * - o texto deve estar em portugu\u00EAs do Brasil e ajudar a entender a estrutura e a finalidade.',
    ' */',
    ''
  ].join('\n');

  const finalText = header + (useClient ? useClient + '\n\n' : '') + remaining + '\n';
  fs.writeFileSync(filePath, finalText, 'utf8');
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['.next', 'node_modules', '.git'].includes(entry.name)) continue;
      walk(full);
      continue;
    }
    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (!allowed.has(ext)) continue;
    normalizeFile(full);
  }
}

walk(appRoot);
console.log('Arquivos da pasta app padronizados com comentários externos em português do Brasil e sem caracteres corrompidos.');
