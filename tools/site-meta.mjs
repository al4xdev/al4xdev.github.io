import { readFile, readdir, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = resolve(root, 'site-meta.json');
const checkOnly = process.argv.includes('--check');

function run(command, args) {
  const result = spawnSync(command, args, { cwd: root, encoding: 'utf8' });
  if (result.status !== 0) {
    process.stderr.write(result.stdout || '');
    process.stderr.write(result.stderr || '');
    process.exit(result.status || 1);
  }
  return `${result.stdout}\n${result.stderr}`;
}

const unitDirectory = resolve(root, 'tests/unit');
const unitFiles = (await readdir(unitDirectory))
  .filter((file) => file.endsWith('.test.mjs'))
  .map((file) => resolve(unitDirectory, file));
const unitOutput = run(process.execPath, [
  '--test',
  '--test-isolation=none',
  '--test-reporter=tap',
  ...unitFiles,
]);
const unitPlans = [...unitOutput.matchAll(/^1\.\.(\d+)$/gm)];
const unitTests = Number.parseInt(unitPlans.at(-1)?.[1] || '0', 10);

const playwrightCli = resolve(root, 'node_modules/@playwright/test/cli.js');
const browserOutput = run(process.execPath, [playwrightCli, 'test', '--list']);
const browserMatch = browserOutput.match(/Total:\s+(\d+)\s+tests?/i);
const browserTests = Number.parseInt(browserMatch?.[1] || '0', 10);

if (unitTests < 1 || browserTests < 1) {
  process.stderr.write('Could not discover both unit and browser tests.\n');
  process.exit(1);
}

const metadata = `${JSON.stringify({
  schemaVersion: 1,
  unitTests,
  browserTests,
  totalTests: unitTests + browserTests,
}, null, 2)}\n`;

if (checkOnly) {
  const current = await readFile(outputPath, 'utf8').catch(() => '');
  if (current !== metadata) {
    process.stderr.write('site-meta.json is stale. Run `npm run meta:generate`.\n');
    process.exit(1);
  }
  process.stdout.write(`Site metadata is current: ${unitTests + browserTests} tests.\n`);
} else {
  await writeFile(outputPath, metadata);
  process.stdout.write(`Generated site-meta.json from ${unitTests + browserTests} discovered tests.\n`);
}
