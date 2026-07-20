# Isolated CV renderer

This directory is a standalone, sandboxed CV mini-application embedded by the
portfolio. It deliberately does not depend on the portfolio's page state or
styles.

## Editing contract

For ordinary career-content updates, edit only `content.js`. It is the single
source for both English and Brazilian Portuguese content and is intentionally
kept as plain structured data so a future AI session can revise the CV without
touching the portfolio application.

- `content.js`: identity, experience, projects, skills, links, and translations.
- `render.js`: deterministic HTML rendering, language messages, and height messages.
- `styles.css`: responsive screen presentation and the fixed A4 print layout.
- `index.html`: standalone renderer entry point.
- `embed.js`: narrow parent-page custom element and iframe bridge.

Preview the renderer directly at `cv/index.html?lang=en` or
`cv/index.html?lang=pt-BR`. On a narrow screen the embedded document uses a
single-column reading layout. Printing always switches to the two-column A4
layout, independently of the screen viewport.

The iframe uses `sandbox="allow-scripts"`. Keep the message contract limited to
language, measured height, and validated scroll deltas.

The public PDFs are generated for both languages by GitHub Actions, validated as
tagged one- or two-page A4 documents with required metadata, and added to the
Pages artifact at stable paths. PDFs and preview PNGs are not versioned in this
repository.
