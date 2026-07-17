# Handoff for the next agent

Read these files in order before changing the project:

1. `00-product-brief.md`
2. `01-content-inventory.md`
3. `02-design-direction.md`
4. `03-implementation-roadmap.md`

## Non-negotiable decisions from the user

- The page begins by asking the visitor to choose Portuguese or English.
- The experience should be genuinely interactive, not a conventional static portfolio.
- The professional tone remains serious; interaction demonstrates systems thinking.
- Alex Tavern stays in the system constellation. Papers and engineering case studies appear in a
  separate section lower on the page.
- English is the canonical content pass. Perform final Portuguese copy editing after the English
  information architecture is stable.
- Plans, source facts, unresolved questions, and decisions stay documented in `.plan/` so work can
  continue in another session.

## Current implementation intent

- Dependency-free static site for GitHub Pages.
- One-page experience with a language gate, project constellation, and inspection panel.
- Six initial projects: Alex Tavern, SceneQueue, PromptNest, Crime Alley CV, Alex Tavern Plugins,
  and ReImagineX.
- No invented metrics or contact details.
- No generic skill bars, fake terminal, particle field, or excessive motion.

## Implemented in the first pass

- `index.html`, `styles.css`, and `app.js` form a complete dependency-free experience.
- The language choice is persisted locally and can be changed from the header or footer.
- The constellation preserves the selected project while switching language and supports arrow-key
  navigation.
- A separate lower publication area currently indexes four Alex Tavern works: token economics,
  speech audiences, secret-handling guards, and multi-character memory.
- The publication labels are deliberately precise (`CASE STUDY`, `VALIDATION REPORT`, and
  `CONTROLLED EXPERIMENT`); the page explicitly avoids presenting them as peer-reviewed papers.
- Static JavaScript, HTML parsing, translation-key coverage, and desktop/mobile first-pass visual
  checks were completed. Repeat screenshots before publication because the later Firefox headless
  process became unstable in this workspace.

## Mobile audit completed

- `.plan/04-mobile-audit.md` contains the baseline defects, implementation decisions, exact
  viewport matrix, and final browser evidence.
- Mobile uses the same semantic page and content, but the constellation becomes a horizontal
  snap-aligned system route connected directly to the inspection panel.
- Portrait widths 360/390/430 and 844 × 390 landscape have no page overflow or undersized visible
  controls. English and Portuguese were exercised across all six systems.
- The language gate is one viewport tall, reduced motion is verified, and the no-JavaScript
  fallback is reachable.

## CV and paper documents completed

- `.plan/06-cv-paper-documents.md` records the implemented interaction and browser evidence.
- The final CV is an isolated mini-application under `cv/`; ordinary career edits belong only in
  `cv/content.js`.
- Mobile screen rendering is vertical, while printing always uses the standalone two-column A4
  layout. Both languages were verified as one-page A4 PDFs.
- Four article cards and the CV share the one-shot paper-unfold motion, with reduced-motion and
  no-JavaScript fallbacks.

## Local article reader and strict quality suite

- The four publication cards open bilingual curated routes under `articles/`; GitHub is the
  explicit original-source action inside each article.
- `.plan/05-localized-article-reader.md` records the boundary between the compact curated edition
  and an optional future verbatim import.
- `.plan/07-strict-quality-suite.md` records the lint, unit, browser, accessibility, and PDF gate.
- `cv/AGENTS.md` and `.agents/skills/cv-editor/` constrain future CV work to verified content.
- `npm run cv:export -- --lang <en|pt-BR>` creates a validated PDF and preview only in `/tmp`.
- On mobile, the CV action is a compact bottom dock while the CV section is visible. It expands on
  request or automatically when the reader reaches the section end.

## Before publishing

- Confirm the LinkedIn URL and preferred contact method with Alexsandro.
- Confirm whether the root page will use `al4xdev.github.io` or a project Pages URL.
- Push the Alex Tavern history before relying on its article link.
- Select media assets deliberately and record their original repository paths here.

## Next task

Finish verification of remaining CV draft fields. Content work belongs only in `cv/content.js`;
do not redesign the portfolio while filling it.

## Working convention

Update this handoff and the roadmap after each material increment. Put exploration reports and
content decisions in `.plan/`; keep production HTML/CSS/JavaScript outside it. Do not silently
replace evidence-backed project claims with marketing language.
