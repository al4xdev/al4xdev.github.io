import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const read = (path) => readFile(resolve(root, path), 'utf8');

function readObjectConstant(source, name, nextName) {
  const startMarker = `const ${name} = `;
  const start = source.indexOf(startMarker);
  const end = source.indexOf(`;\n\nconst ${nextName}`, start);
  assert.notEqual(start, -1, `${name} must exist.`);
  assert.notEqual(end, -1, `${name} must end before ${nextName}.`);
  return vm.runInNewContext(`(${source.slice(start + startMarker.length, end)})`);
}

function deepShape(value) {
  if (Array.isArray(value)) return value.map(deepShape);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, deepShape(value[key])]));
  }
  return typeof value;
}

test('interface translations are complete and used keys exist in both locales', async () => {
  const [app, html] = await Promise.all([read('app.js'), read('index.html')]);
  const strings = readObjectConstant(app, 'STRINGS', 'PROJECTS');
  assert.deepEqual(Object.keys(strings.en).sort(), Object.keys(strings['pt-BR']).sort());

  const usedKeys = [...html.matchAll(/data-i18n(?:-html|-aria)?="([^"]+)"/g)].map((match) => match[1]);
  assert.ok(usedKeys.length > 0);
  for (const key of new Set(usedKeys)) {
    assert.equal(typeof strings.en[key], 'string', `Missing English translation: ${key}`);
    assert.equal(typeof strings['pt-BR'][key], 'string', `Missing Portuguese translation: ${key}`);
  }
});

test('all six projects have aligned bilingual evidence contracts and HTTPS links', async () => {
  const app = await read('app.js');
  const projects = readObjectConstant(app, 'PROJECTS', 'projectOrder');
  assert.equal(Object.keys(projects).length, 6);

  for (const [id, project] of Object.entries(projects)) {
    assert.match(id, /^[a-z0-9-]+$/);
    assert.deepEqual(Object.keys(project.en).sort(), ['decision', 'evidence', 'problem', 'thesis']);
    assert.deepEqual(Object.keys(project.en).sort(), Object.keys(project['pt-BR']).sort());
    for (const locale of ['en', 'pt-BR']) {
      for (const value of Object.values(project[locale])) assert.ok(value.trim().length > 20);
    }
    assert.ok(project.links.length > 0);
    for (const link of project.links) assert.match(link.url, /^https:\/\//);
  }
});

test('CV locales preserve identical field shapes and safe public links', async () => {
  const source = await read('cv/content.js');
  const sandbox = { window: {} };
  vm.runInNewContext(source, sandbox);
  const content = sandbox.window.CV_CONTENT;

  assert.deepEqual(deepShape(content.en), deepShape(content['pt-BR']));
  for (const locale of ['en', 'pt-BR']) {
    assert.match(content[locale].mockBadge, /MOCK/);
    assert.ok(content[locale].experience.length >= 3);
    assert.ok(content[locale].selectedWork.length >= 4);
    for (const link of content[locale].links) assert.match(link.url, /^https:\/\//);
  }
});

test('local article reader contains four aligned bilingual studies with original provenance', async () => {
  const source = await read('articles/content.js');
  const sandbox = { window: {} };
  vm.runInNewContext(source, sandbox);
  const articles = sandbox.window.ARTICLE_CONTENT;
  assert.equal(Object.keys(articles).length, 4);

  for (const article of Object.values(articles)) {
    assert.match(article.source, /^https:\/\/github\.com\/al4xdev\/alex-tavern\//);
    assert.deepEqual(deepShape(article.en), deepShape(article['pt-BR']));
    assert.equal(article.en.sections.length, 4);
    assert.equal(article['pt-BR'].sections.length, 4);
  }

  const html = await read('index.html');
  const publicationLinks = [...html.matchAll(/<a class="[^"]*publication[^"]*"[^>]*href="([^"]+)"/g)]
    .map((match) => match[1]);
  assert.equal(publicationLinks.length, 4);
  publicationLinks.forEach((href) => assert.match(href, /^articles\//));
});

test('HTML IDs and local resource references are valid', async () => {
  const files = ['index.html', 'cv/index.html'];
  for (const file of files) {
    const html = await read(file);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${file} has duplicate IDs.`);

    const resources = [...html.matchAll(/(?:src|href)="([^"#?]+)(?:\?[^"#]*)?"/g)]
      .map((match) => match[1])
      .filter((path) => !/^(?:https?:|mailto:|\/)/.test(path));
    for (const resource of resources) {
      await access(resolve(root, dirname(file), resource));
    }
  }
});

test('CV remains the final main section and iframe authority stays narrow', async () => {
  const [html, embed] = await Promise.all([read('index.html'), read('cv/embed.js')]);
  const main = html.slice(html.indexOf('<main'), html.indexOf('</main>'));
  assert.ok(main.lastIndexOf('class="cv-section"') > main.lastIndexOf('class="notes-section"'));
  assert.match(embed, /sandbox = 'allow-scripts allow-modals'/);
  assert.doesNotMatch(embed, /allow-same-origin/);
  assert.match(embed, /portfolio-cv:language/);
  assert.match(embed, /portfolio-cv:height/);
  assert.match(embed, /portfolio-cv:print/);
});

test('responsive, reduced-motion, and fixed A4 contracts remain explicit', async () => {
  const [portfolioCss, cvCss] = await Promise.all([read('styles.css'), read('cv/styles.css')]);
  assert.match(portfolioCss, /@media \(max-width: 800px\)/);
  assert.match(portfolioCss, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(portfolioCss, /\.paper-document\.paper-open/);
  assert.match(cvCss, /@page\s*{[^}]*size:\s*A4/s);
  assert.match(cvCss, /@media print/);
  assert.match(cvCss, /width:\s*210mm/);
  assert.match(cvCss, /min-height:\s*297mm/);
});

test('CV export route rejects repository destinations before launching a browser', () => {
  const result = spawnSync(process.execPath, [
    'tools/export-cv.mjs', '--lang', 'en', '--output', resolve(root, 'forbidden.pdf'),
  ], { cwd: root, encoding: 'utf8' });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /below \/tmp/);
});

test('repository CV skill has valid trigger metadata and no unfinished placeholders', async () => {
  const [skill, metadata] = await Promise.all([
    read('.agents/skills/cv-editor/SKILL.md'),
    read('.agents/skills/cv-editor/agents/openai.yaml'),
  ]);
  assert.match(skill, /^---\nname: cv-editor\ndescription: .+\n---/);
  assert.doesNotMatch(skill, /TODO|\[TODO/);
  assert.match(metadata, /\$cv-editor/);
  assert.match(skill, /npm run cv:export/);
});
