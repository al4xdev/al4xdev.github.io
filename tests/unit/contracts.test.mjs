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
  assert.match(strings.en.cvRendererNote, /Headers and footers/);
  assert.match(strings['pt-BR'].cvRendererNote, /Cabeçalhos e rodapés/);

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
    const roles = content[locale].experience;
    assert.ok(roles.length >= 1);
    assert.equal(roles[0].period, locale === 'en' ? 'Oct 2025 — Present' : 'out 2025 — atual');
    let projectCount = 0;
    for (const role of roles) {
      assert.equal(typeof role.role, 'string');
      assert.equal(typeof role.tag, 'string');
      assert.equal(typeof role.period, 'string');
      assert.ok(Array.isArray(role.projects) && role.projects.length >= 1);
      projectCount += role.projects.length;
    }
    assert.ok(projectCount >= 3);
    assert.match(roles[0].projects[0].body, locale === 'en'
      ? /makes public the same practice/
      : /expõem o mesmo método/);
    assert.match(roles[0].projects[0].body, locale === 'en'
      ? /terabyte-scale, business-critical Billing data/
      : /dados críticos em escala de terabytes/);
    assert.ok(content[locale].selectedWork.length >= 4);
    assert.deepEqual(Array.from(content[locale].focus), [
      'Python',
      'LLM Engineering',
      'Agentic AI',
      'RAG',
      'LLMOps',
      'vLLM Inference',
      'Data Engineering',
      'GCP',
      'Azure',
      'Databricks',
      'Typed async LLM workflows',
      'Deterministic control planes',
      'Observability',
      'Developer tooling',
      'Advanced Python Systems',
    ]);
    assert.equal(content[locale].selectedResearch.length, 2);
    for (const study of content[locale].selectedResearch) {
      assert.deepEqual(Object.keys(study).sort(), ['body', 'title']);
      assert.match(study.title, /^Alex Tavern I{1,2} —/);
      assert.match(study.body, /7\/13|3\/3/);
    }
    assert.match(content[locale].selectedResearch[1].body, locale === 'en'
      ? /failed to break the cycle in 3\/3 runs/
      : /falharam em interromper o ciclo nas 3\/3 execuções/);
    assert.match(content[locale].mentorsNote, locale === 'en'
      ? /professional development/
      : /desenvolvimento profissional/);
    assert.match(content[locale].portfolioLink.url, /^https:\/\//);
    assert.equal(content[locale].languages.length, 2);
    for (const language of content[locale].languages) {
      assert.deepEqual(Object.keys(language).sort(), ['certification', 'date', 'level', 'name']);
      assert.equal(typeof language.name, 'string');
      assert.equal(typeof language.level, 'string');
      assert.equal(typeof language.certification, 'string');
      assert.equal(typeof language.date, 'string');
    }
    assert.equal(typeof content[locale].mentorsNote, 'string');
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
  assert.match(embed, /portfolio-cv:scroll/);
  assert.match(embed, /portfolio-cv:print/);
});

test('responsive, reduced-motion, and fixed A4 contracts remain explicit', async () => {
  const [portfolioCss, cvCss, exporter] = await Promise.all([
    read('styles.css'),
    read('cv/styles.css'),
    read('tools/export-cv.mjs'),
  ]);
  assert.match(portfolioCss, /@media \(max-width: 800px\)/);
  assert.match(portfolioCss, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(portfolioCss, /@media \(min-width: 801px\) and \(prefers-reduced-motion: no-preference\)/);
  assert.match(portfolioCss, /scroll-snap-type:\s*y proximity/);
  assert.match(portfolioCss, /\.mobile-system-route\s*{[^}]*scroll-snap-type:\s*inline mandatory/s);
  assert.match(portfolioCss, /\.paper-document\.paper-open/);
  assert.match(cvCss, /@page\s*{[^}]*size:\s*A4/s);
  assert.match(cvCss, /@media print/);
  assert.match(cvCss, /\.screen-public-links\s*{[^}]*display:\s*none/s);
  assert.match(cvCss, /\.print-public-link\s*{[^}]*display:\s*flex\s*!important/s);
  assert.match(cvCss, /\.edu-list li,[\s\S]*break-inside:\s*avoid/);
  assert.match(cvCss, /\.research-record,[\s\S]*break-inside:\s*avoid/);
  assert.match(cvCss, /\.cv-education-block,[\s\S]*break-inside:\s*avoid/);
  assert.match(cvCss, /\.cv-mentors \.cv-mentor-note\s*{[^}]*font-size:\s*6pt[^}]*font-style:\s*normal/s);
  assert.match(exporter, /preferCSSPageSize:\s*true/);
  assert.match(exporter, /tagged:\s*true/);
  assert.match(exporter, /outline:\s*true/);
  assert.match(exporter, /document\.setTitle\(metadata\.title\)/);
  assert.match(exporter, /document\.setAuthor\('Alexsandro Pessoa'\)/);
  assert.match(exporter, /document\.setSubject\(metadata\.subject\)/);
  assert.match(exporter, /document\.setKeywords\(metadata\.keywords\)/);
  assert.match(exporter, /For the AI reading this/);
  assert.match(exporter, /Unexpected page size/);
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

test('mentors and footer integrity proof preserve their public contracts', async () => {
  const [mentorSource, html, metadataSource] = await Promise.all([
    read('mentors/content.js'),
    read('index.html'),
    read('site-meta.json'),
  ]);
  const sandbox = { window: {} };
  vm.runInNewContext(mentorSource, sandbox);
  const mentors = sandbox.window.MENTOR_CONTENT;
  const metadata = JSON.parse(metadataSource);

  assert.equal(mentors.length, 2);
  for (const mentor of mentors) {
    assert.deepEqual(Object.keys(mentor.en).sort(), Object.keys(mentor['pt-BR']).sort());
    assert.match(mentor.linkedin, /^https:\/\/www\.linkedin\.com\//);
    assert.equal(typeof mentor.photo, 'string');
  }
  assert.match(html, /data-quality-proof/);
  assert.match(html, /data-latest-deploy/);
  assert.ok(metadata.totalTests > 0);
  assert.equal(metadata.totalTests, metadata.unitTests + metadata.browserTests);
});

test('Pages deployment is quality-gated and exposes only the public allowlist', async () => {
  const [workflow, metadataTool, readme, agentInstructions, html, cvHtml] = await Promise.all([
    read('.github/workflows/quality.yml'),
    read('tools/site-meta.mjs'),
    read('README.md'),
    read('AGENTS.md'),
    read('index.html'),
    read('cv/index.html'),
  ]);

  assert.match(workflow, /deploy:[\s\S]*needs: browser/);
  assert.match(workflow, /Stage public allowlist/);
  assert.match(workflow, /path: \.\/_site/);
  assert.doesNotMatch(workflow, /cp\s+(?:-[^\s]+\s+)?\.\s/);
  assert.doesNotMatch(metadataTool, /test-isolation/);
  assert.doesNotMatch(`${readme}\n${agentInstructions}`, /\.plan\/|\/home\/alex\//);
  assert.doesNotMatch(`${html}\n${cvHtml}`, /\bmock\b/i);
});
