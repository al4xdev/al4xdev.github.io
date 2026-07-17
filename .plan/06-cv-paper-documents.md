# CV renderer and paper-document motion

**Created:** 2026-07-17  
**Status:** Complete and browser-validated

## User request

Add a full mock CV at the end of the portfolio so a visitor encounters the systems, principles,
and writing before reaching the résumé. Render the CV inside the page and provide a download path.
Treat article cards and the CV as designed documents that animate from crumpled paper into an open,
readable sheet.

## Product interpretation

The CV is the final evidence index, not the hero and not a second portfolio. Its location creates a
deliberate reading sequence without blocking direct URLs, accessibility navigation, or printing.
The initial copy is explicitly labeled as a mock so placeholder career content cannot be mistaken
for a public factual claim.

## Interaction contract

- The four article cards and the CV sheet share one `paper-document` motion language.
- Documents begin as irregular compressed sheets and unfold once when they enter the viewport.
- Crease highlights fade as the document becomes readable.
- Article links remain usable throughout; motion never delays navigation.
- The CV is fully visible in the page, then printable through the browser's native Save as PDF
  flow.
- Printing renders only the selected-language CV on an A4-like white sheet.
- Reduced-motion users receive the final open state immediately.
- Without JavaScript, every document is already open and all content remains available.

## Isolation contract

The CV is a sandboxed mini-application embedded at the end of the portfolio:

- `cv/content.js` is the only career-content source and the preferred file for future AI edits;
- `cv/render.js` owns CV markup, language selection, resize reporting, and print behavior;
- `cv/styles.css` owns screen and A4 presentation;
- `cv/index.html` is a standalone renderer and direct fallback URL;
- `cv/embed.js` is the narrow parent bridge implemented as a custom element;
- the portfolio only sets `language`, receives document height, and requests print;
- the iframe uses `sandbox="allow-scripts allow-modals"` and receives no access to portfolio state,
  local storage, or parent DOM.

Future content edits must not require changes to `index.html`, `app.js`, or the fieldboard CSS.

## CV mock sections

- Identity and positioning.
- Short profile.
- Selected systems/practice.
- Mock experience structure.
- Technical focus.
- Languages and public links.
- A visible `FULL MOCK` marker inside both screen and print output.

## Design direction

The paper effect should feel like a technical document recovered from a workbench, not a novelty
origami animation. It uses clip-path, shallow 3D rotation, irregular scale, crease gradients, and a
single controlled unfold. The fieldboard remains quiet around it.

## Acceptance criteria

- CV is the final main-content section before the footer.
- English and Portuguese render from the existing language state.
- Print/Save as PDF is reachable with a 44 px control and prints only the CV.
- A 360 px visitor can read the CV without page-level horizontal scrolling.
- Article cards still behave as links and expose keyboard focus.
- Paper motion runs once, does not block content, and disappears under reduced motion.
- The mock label is impossible to miss.

## Implementation and evidence

- The CV renderer is an isolated custom element backed by a sandboxed iframe. Its only bridge
  messages are language, measured height, and print.
- `cv/content.js` contains all mock career content in both languages. `cv/README.md` documents the
  edit boundary for a future AI session.
- The embedded screen layout becomes a single readable column below 600 px. The print stylesheet
  independently restores a fixed two-column desktop composition.
- The native print request was exercised through the parent control and arrived inside the
  sandboxed iframe in every audited viewport.
- Chromium-generated English and Portuguese outputs were each exactly one 595.92 × 842.88 pt A4
  page, including when initiated from a 390 px mobile viewport.
- Touch audits at 360, 390, 430, and 844 × 390 found no visible target below 44 px and no root
  horizontal overflow.
- All five paper documents opened once during the reading journey; reduced-motion opened all five
  immediately. The no-JavaScript route keeps a direct standalone-CV link.
