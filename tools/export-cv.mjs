import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { basename, dirname, extname, resolve } from 'node:path';
import { chromium } from '@playwright/test';
import { PDFDocument } from 'pdf-lib';
import { startStaticServer } from './static-server.mjs';

function readArgument(name) {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? null : process.argv[index + 1];
}

function runPreview(pdfPath, previewBase) {
  return new Promise((resolvePreview, reject) => {
    const processHandle = spawn('pdftoppm', [
      '-png', '-f', '1', '-singlefile', '-r', '120', pdfPath, previewBase,
    ], { stdio: 'ignore' });
    processHandle.once('error', (error) => {
      if (error.code === 'ENOENT') {
        resolvePreview(null);
        return;
      }
      reject(error);
    });
    processHandle.once('exit', (code) => {
      if (code === 0) resolvePreview(`${previewBase}.png`);
      else reject(new Error(`pdftoppm exited with code ${code}.`));
    });
  });
}

const requestedLanguage = readArgument('lang') || 'en';
const language = requestedLanguage === 'pt' ? 'pt-BR' : requestedLanguage;
if (!['en', 'pt-BR'].includes(language)) throw new Error('Use --lang en or --lang pt-BR.');

const suffix = language === 'en' ? 'en' : 'pt-BR';
const output = resolve(readArgument('output') || `/tmp/alexsandro-pessoa-cv-${suffix}.pdf`);
if (!output.startsWith('/tmp/') || extname(output).toLowerCase() !== '.pdf') {
  throw new Error('CV exports must be PDF files below /tmp/.');
}

await mkdir(dirname(output), { recursive: true });
const server = await startStaticServer();
const browser = await chromium.launch({ headless: true });

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(`${server.origin}/cv/index.html?lang=${encodeURIComponent(language)}`, {
    waitUntil: 'networkidle',
  });
  const bytes = await page.pdf({ path: output, format: 'A4', printBackground: true });
  const document = await PDFDocument.load(bytes);
  const pages = document.getPageCount();
  const { width, height } = document.getPage(0).getSize();
  const previewBase = resolve(dirname(output), `${basename(output, '.pdf')}-preview`);
  const preview = await runPreview(output, previewBase);
  console.log(JSON.stringify({ language, pdf: output, preview, pages, format: 'A4' }, null, 2));

  if (pages !== 1) throw new Error('CV export must contain exactly one page.');
  if (Math.abs(width - 595.28) > 2 || Math.abs(height - 841.89) > 2) {
    throw new Error(`Unexpected page size: ${width} × ${height} pt.`);
  }
} finally {
  await browser.close();
  await server.close();
}
