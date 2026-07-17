# Alexsandro Pessoa — interactive systems portfolio

A bilingual, dependency-free portfolio for GitHub Pages. The site presents selected work as an
interactive system constellation rather than a conventional project-card grid.

## Local preview

```fish
cd /home/alex/git/my/porf_page
python3 -m http.server 8080
```

Open <http://127.0.0.1:8080>.

## Project structure

- `index.html`: semantic page and language entrance.
- `styles.css`: Systems Fieldboard visual system and responsive behavior.
- `app.js`: bilingual content, project data, language persistence, and constellation interaction.
- `cv/`: isolated bilingual CV mini-application with responsive screen rendering and fixed A4
  printing. Ordinary career-content edits belong in `cv/content.js`.
- `articles/`: bilingual curated field-note reader; original GitHub documents remain linked as
  provenance.
- `tests/`: strict contract and Chromium suite used locally and by GitHub Actions.
- `.agents/skills/cv-editor/`: repository skill for verified content-only CV updates and exports.
- `.plan/`: product brief, verified content inventory, design direction, roadmap, and continuation
  handoff. Future agents must read this first.
- `.nojekyll`: serve the static tree unchanged through GitHub Pages.

## Publication

GitHub Pages publishes `main` directly at <https://al4xdev.github.io/> without a build step. The
strict quality workflow runs independently on every pull request and push to `main`.

The footer's integrity counter is generated from the tests discovered by Node and Playwright.
After adding or removing tests, refresh the committed static metadata with:

```fish
npm run meta:generate
```

## Quality gate

```fish
npm ci --ignore-scripts
npx playwright install chromium
npm test
```

Export an inspectable CV (up to two A4 pages) and per-page PNG previews to `/tmp` with:

```fish
npm run cv:export -- --lang en
npm run cv:export -- --lang pt-BR
```
