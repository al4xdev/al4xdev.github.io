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

## Before publishing

- Confirm the LinkedIn URL and preferred contact method with Alexsandro.
- Confirm whether the root page will use `al4xdev.github.io` or a project Pages URL.
- Push the Alex Tavern history before relying on its article link.
- Select media assets deliberately and record their original repository paths here.

## Working convention

Update this handoff and the roadmap after each material increment. Put exploration reports and
content decisions in `.plan/`; keep production HTML/CSS/JavaScript outside it. Do not silently
replace evidence-backed project claims with marketing language.
