import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { PDFDocument } from 'pdf-lib';
import { readFile } from 'node:fs/promises';

const siteMetadata = JSON.parse(await readFile(new URL('../../site-meta.json', import.meta.url), 'utf8'));

const projects = ['PromptNest', 'Alex Tavern', 'Tavern Plugins', 'Crime Alley CV', 'SceneQueue', 'ReImagineX'];

test('language entrance is exactly one viewport and enters the site', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await expect(page.locator('#language-gate')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBe(720);

  await page.locator('[data-choose-language="en"]').click();
  await expect(page.locator('.site-shell')).toBeVisible();
  await expect(page.locator('#language-gate')).toBeHidden();
});

test('constellation selection and language switching preserve state', async ({ page }) => {
  await page.goto('/?lang=en');
  for (const name of projects) {
    await page.getByRole('button', { name }).click();
    await expect(page.locator('#project-name')).toHaveText(name);
  }

  await page.locator('[data-project="crime-alley"]').click();
  await page.locator('[data-set-language="pt-BR"]').click();
  await expect(page.locator('[data-project="crime-alley"]')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#project-name')).toHaveText('Crime Alley CV');
  await expect(page.locator('#project-problem')).toContainText('Agentes');
});

test('identity, mentor mocks, and live quality proof close the portfolio', async ({ page }) => {
  await page.route('https://api.github.com/repos/al4xdev/al4xdev.github.io/actions/runs?*', async (route) => {
    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify({
        workflow_runs: [{
          name: 'pages-build-deployment',
          path: 'dynamic/pages/pages-build-deployment',
          html_url: 'https://github.com/al4xdev/al4xdev.github.io/actions/runs/123456',
        }],
      }),
    });
  });
  await page.goto('/?lang=en');
  await expect(page.locator('.identity-name')).toHaveText('Alexsandro Pessoa');
  await expect(page.locator('.mentor-record')).toHaveCount(2);
  await expect(page.locator('.mentor-record').first()).toHaveAttribute('href', /^https:\/\/www\.linkedin\.com\//);
  await page.locator('[data-quality-proof]').scrollIntoViewIfNeeded();
  await expect(page.locator('[data-test-count]')).toHaveText(String(siteMetadata.totalTests));
  await expect(page.locator('[data-latest-deploy]')).toHaveAttribute(
    'href',
    'https://github.com/al4xdev/al4xdev.github.io/actions/runs/123456',
  );
});

test('field-note cards open the local bilingual reader and keep GitHub as provenance', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/?lang=pt-BR');
  const cards = page.locator('[data-article-id]');
  await expect(cards).toHaveCount(4);
  for (const card of await cards.all()) {
    await expect(card).toHaveAttribute('href', /^articles\/\?article=.+&lang=pt-BR$/);
  }

  await cards.first().click();
  await expect(page).toHaveURL(/\/articles\/\?article=token-economics&lang=pt-BR$/);
  await expect(page.locator('h1')).toContainText('Economia de tokens');
  await expect(page.getByRole('link', { name: /fonte original/i })).toHaveAttribute(
    'href',
    /^https:\/\/github\.com\/al4xdev\/alex-tavern\//,
  );
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  expect(results.violations).toEqual([]);
});

for (const viewport of [
  { width: 360, height: 800 },
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 844, height: 390 },
]) {
  test(`mobile geometry and paper journey pass at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/?lang=en');
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(viewport.width);

    const smallTargets = await page.locator('a, button').evaluateAll((elements) => elements
      .filter((element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
      })
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        return rect.width < 44 || rect.height < 44;
      })
      .map((element) => element.textContent.trim()));
    expect(smallTargets).toEqual([]);

    for (const publication of await page.locator('.publication').all()) {
      await publication.scrollIntoViewIfNeeded();
    }
    await page.locator('#cv-document').scrollIntoViewIfNeeded();
    await expect(page.locator('#cv-document')).toHaveClass(/paper-open/);
    await expect(page.locator('.paper-document.paper-open')).toHaveCount(5);
    if (viewport.width <= 430) {
      await expect(page.locator('.cv-controls')).toHaveCSS('position', 'fixed');
      await expect(page.locator('.cv-controls')).toHaveClass(/is-active/);
      await expect(page.locator('[data-cv-toggle]')).toBeInViewport();
      await expect(page.locator('[data-cv-controls]')).toHaveAttribute('data-expanded', 'false');
      await expect(page.locator('[data-print-cv]')).toBeHidden();
      await page.locator('[data-cv-toggle]').click();
      await expect(page.locator('[data-print-cv]')).toBeVisible();
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(viewport.width);
  });
}

test('mobile CV dock expands at the section end and disappears outside the CV', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/?lang=en');
  await expect(page.locator('.cv-controls')).not.toHaveClass(/is-active/);
  await page.locator('#cv-document').scrollIntoViewIfNeeded();
  await expect(page.locator('#cv-document')).toHaveClass(/cv-ready/);
  await expect(page.locator('.cv-controls')).toHaveClass(/is-active/);
  await expect(page.locator('[data-cv-controls]')).toHaveAttribute('data-expanded', 'false');
  await page.locator('.site-footer').scrollIntoViewIfNeeded();
  await expect(page.locator('[data-cv-controls]')).toHaveAttribute('data-expanded', 'true');
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
  });
  await expect(page.locator('.cv-controls')).not.toHaveClass(/is-active/);
});

test('CV language and print request cross only the sandbox message bridge', async ({ page }) => {
  await page.goto('/?lang=en');
  await page.locator('#cv').scrollIntoViewIfNeeded();
  const frame = page.frameLocator('portfolio-cv iframe');
  await expect(frame.locator('.cv-page')).toBeVisible();
  await page.locator('[data-set-language="pt-BR"]').click();
  await expect(frame.locator('.cv-block').first()).toContainText('Perfil');

  const child = page.frames().find((candidate) => candidate.url().includes('/cv/index.html'));
  expect(child).toBeTruthy();
  await child.evaluate(() => {
    window.__printCalled = false;
    window.print = () => { window.__printCalled = true; };
  });
  await page.locator('[data-print-cv]').click();
  await expect.poll(() => child.evaluate(() => window.__printCalled)).toBe(true);
  await expect(page.locator('portfolio-cv iframe')).toHaveAttribute('sandbox', 'allow-scripts allow-modals');
});

for (const language of ['en', 'pt-BR']) {
  test(`standalone ${language} CV exports as up to two A4 pages`, async ({ page }) => {
    await page.goto(`/cv/index.html?lang=${language}`);
    await expect(page.locator('.mock-badge')).toHaveCount(0);
    await expect(page.locator('.cv-mentors')).toBeVisible();
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.locator('.cv-mentors')).toBeHidden();
    await page.setViewportSize({ width: 1280, height: 720 });
    const accessibility = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    expect(accessibility.violations).toEqual([]);
    await page.emulateMedia({ media: 'print' });
    await expect(page.locator('.cv-mentors')).toBeVisible();
    const bytes = await page.pdf({ format: 'A4', printBackground: true });
    const document = await PDFDocument.load(bytes);
    const pageCount = document.getPageCount();
    expect(pageCount).toBeGreaterThanOrEqual(1);
    expect(pageCount).toBeLessThanOrEqual(2);
    const { width, height } = document.getPage(0).getSize();
    expect(Math.abs(width - 595.28)).toBeLessThan(2);
    expect(Math.abs(height - 841.89)).toBeLessThan(2);
  });
}

test('reduced motion opens documents immediately', async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto('/?lang=en');
  await expect(page.locator('.paper-document.paper-open')).toHaveCount(5);
  expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true);
  await context.close();
});

test('no-JavaScript fallback remains readable', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 360, height: 800 } });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.locator('.noscript-content')).toBeVisible();
  await expect(page.locator('.language-gate')).toBeHidden();
  await expect(page.locator('#cv')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(360);
  await context.close();
});

test('primary English and Portuguese states have no WCAG A/AA violations', async ({ page }) => {
  for (const language of ['en', 'pt-BR']) {
    await page.goto(`/?lang=${language}`);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    expect(results.violations).toEqual([]);
  }
});
