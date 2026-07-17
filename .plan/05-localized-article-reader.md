# Localized article reader

**Created:** 2026-07-17  
**Status:** Local curated reader complete; full source-faithful editions remain optional

## User request

Bring the featured engineering articles into the portfolio repository and render them inside the
portfolio instead of sending visitors directly to GitHub. Provide English and Portuguese versions,
while keeping a visible link to each original source.

## Product goal

Preserve the portfolio's language, navigation, and visual context while a visitor reads the
evidence behind a project. The local article is a curated reading surface; the original repository
remains the provenance boundary.

## Proposed contract

- Store article source in a dedicated content directory using one stable article identifier.
- Keep explicit `en` and `pt-BR` variants rather than translating at runtime.
- Render articles through a shared article layout that preserves the current language and provides
  a clear route back to Field Notes.
- Show title, article type, date, reading time, source project, and original-source URL.
- Add a persistent `View original source ↗` / `Ver fonte original ↗` action.
- Preserve headings, tables, code, diagrams, citations, limitations, and evidence links.
- Do not silently diverge from the original: record source path and source commit when importing or
  refreshing an article.
- Keep the static GitHub Pages deployment and avoid runtime translation or remote Markdown fetches.

## Initial article set

1. Token economics as an architectural enabler.
2. Structural audience model for speech.
3. Character output guard and secret handling.
4. Multi-character memory retention under shifting focus.

## Acceptance criteria

- Opening and closing an article does not lose selected language or portfolio position.
- Articles are readable at 360 px without horizontal page scrolling.
- English and Portuguese are editorial files that can be reviewed independently.
- Every imported article identifies and links its original GitHub source.
- Code blocks and wide tables have contained horizontal scrolling, never page-level overflow.
- Direct article URLs work on GitHub Pages and remain useful without JavaScript where practical.

## Implemented increment

- All four field-note cards now open `articles/?article=<id>&lang=<locale>` inside the portfolio
  instead of navigating directly to GitHub.
- Each route has aligned English and Portuguese curated editions covering question/failure,
  architecture or method, evidence, and limitations.
- The reader preserves the Systems Fieldboard language and visual identity, is responsive at
  390 px, passes WCAG A/AA automation, and links back to the selected-language field-note section.
- GitHub is now the secondary provenance action, labeled `Inspect original source` / `Inspecionar
  fonte original`.
- The pages explicitly say `CURATED PORTFOLIO EDITION`; they do not pretend to be verbatim copies
  of the substantially longer source documents.
- Unit and browser tests reject publication-card regressions back to external URLs.

The original proposal to import every table, code block, diagram, and citation verbatim is not
part of this compact reader increment. It can be added later without changing public URLs.
