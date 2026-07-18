---
name: cv-editor
description: Safely edit, translate, validate, and export the isolated portfolio CV. Use when an agent must add or update résumé facts, public links, experience, selected work, skills, languages, education, mentor records, or produce an A4 CV PDF without changing the portfolio page structure.
---

# Edit the portfolio CV

Work from the repository root and obey `cv/AGENTS.md`.

## Workflow

1. Read `cv/content.js` and [references/fields.md](references/fields.md).
2. Classify every requested value as verified, explicitly placeholder, or missing. Never invent a
   missing employer, date, credential, contact, proficiency, or metric.
3. Edit only `cv/content.js` unless the user explicitly requests layout, rendering, or integration
   changes.
4. Keep the `en` and `pt-BR` object shapes identical. Preserve meaning across translations.
5. Run `npm run test:unit`.
6. Export each changed language:

   ```bash
   npm run cv:export -- --lang en
   npm run cv:export -- --lang pt-BR
   ```

7. Inspect the JSON result and open each reported `/tmp/*-preview-*.png`. Confirm that the generated
   PDF is one or two A4 pages, readable, unclipped, and with no entry split across the page break.
8. Run `npm test` before declaring a publishable edit complete.

## Boundaries

- Keep exports below `/tmp`; the command rejects repository destinations.
- Keep unresolved verification status in `footnote`; the renderer intentionally omits a prominent
  status banner.
- Keep links HTTPS and public.
- Do not edit parent `index.html`, `app.js`, `styles.css`, or the iframe protocol for content work.
- Report unresolved fields rather than filling them by inference.
