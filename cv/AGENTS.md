# CV editing contract for agents

This directory is an isolated bilingual CV renderer. For ordinary résumé updates, edit only
`content.js`. Do not modify `index.html`, `render.js`, `styles.css`, `embed.js`, the parent
portfolio, or the iframe message protocol unless the user explicitly requests a structural or
design change.

Mentor identity is intentionally shared with the portfolio and lives in `../mentors/content.js`.
It is hidden in mobile/screen CV rendering and appears only in the A4 print composition. Follow
`../mentors/AGENTS.md` when the user explicitly asks to replace those two mocks.

## Content rules

- Use verified facts supplied by the user or already present in the repository.
- Never infer employers, dates, education, certifications, contact details, or proficiency levels.
- Keep `en` and `pt-BR` structurally aligned. Translate meaning; do not invent different claims.
- Preserve every key and value type documented in
  `../.agents/skills/cv-editor/references/fields.md`.
- Keep verification status in the footnote until all placeholder fields have been verified. The
  portfolio intentionally does not render a prominent draft/mock banner.
- Public URLs must use HTTPS.

## Required workflow

1. Edit `content.js` only.
2. Run `npm run test:unit` from the repository root.
3. Export each changed language with `npm run cv:export -- --lang en` and/or `--lang pt-BR`.
4. Inspect the reported PDF and `/tmp/*-preview.png`; confirm one A4 page with no clipping.
5. Run `npm test` before handing off a publishable change.

The export command rejects destinations outside `/tmp` by design.
