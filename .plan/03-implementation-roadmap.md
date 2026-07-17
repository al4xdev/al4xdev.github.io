# Implementation roadmap

## Increment 1: experiential static foundation

- [x] Product brief and bilingual requirement.
- [x] Verified project inventory.
- [x] Design system and interaction signature.
- [x] Semantic HTML shell.
- [x] Language gate with persisted choice.
- [x] Interactive project constellation.
- [x] Bilingual inspection content.
- [x] Responsive layout and reduced-motion behavior.
- [x] Keyboard and screen-reader states.
- [x] GitHub Pages README and deployment notes.
- [x] First browser screenshot review at 1440px and 390px widths.

The first visual pass found and corrected two oversized-word clipping issues: the desktop language
choice and the hero's `deterministic control` line. Firefox headless later became unstable in the
workspace, so repeat the final screenshots in a clean browser session before publication.

The complete mobile browser audit is recorded in `.plan/04-mobile-audit.md`. Chromium touch
emulation now passes at 360, 390, and 430 px portrait plus 844 × 390 landscape with zero page-level
overflow, zero sub-44 px visible controls, all six project interactions, reduced motion, and a
usable no-JavaScript fallback.

The CV and paper-document increment is complete in `.plan/06-cv-paper-documents.md`: the final
document runs in a sandboxed iframe, has a mobile reading layout, prints as one desktop A4 page in
both languages, and keeps career content isolated in `cv/content.js`.

The publication footer now closes with a live integrity proof: its test total is generated from
Node and Playwright discovery, while its link resolves the newest successful GitHub Pages deploy.
Two deliberately unfinished mentor records share one content source between the hero and the
print-only A4 CV; mobile CV rendering omits them.

## Increment 2: real project media

The first `.plan/05-localized-article-reader.md` increment is complete: four bilingual curated
reading routes stay inside the portfolio and expose GitHub as source provenance. A verbatim import
of every long-form table, code block, and citation remains optional.

- Select one representative asset per visual project with explicit source paths.
- Optimize to AVIF/WebP with width/height metadata and useful alt text.
- Add a media mode to the inspection panel without turning it into a carousel.
- Consider a short SceneQueue workflow clip and an Alex Tavern architecture animation.

## Increment 3: deeper evidence routes

- Project detail pages or client-side routes for architecture and measured evidence.
- The field-notes index currently links four Alex Tavern studies. Confirm those links after the
  relevant repository history is pushed.
- Add PromptNest PyPI version and package link.
- Add CI/release signals from static, periodically refreshed data rather than runtime GitHub API
  calls on every visit.

## Increment 4: publication

- Create or rename repository to `al4xdev.github.io` if the root user page is desired.
- Enable GitHub Pages from `master`/`main` or a Pages workflow.
- Confirm canonical URL, Open Graph metadata, favicon, sitemap, and robots policy.
- Add custom domain only after ownership and preferred name are settled.
- Verify every external link in a clean browser.
- Run Lighthouse/accessibility review.

## Acceptance checks

- A visitor can identify Alexsandro's technical thesis within 10 seconds.
- Every selected project explains one problem, one distinctive decision, and one evidence signal.
- Portuguese and English cover all visible interface strings.
- Language switching preserves selection and location.
- All functionality works without a framework or build step.
- The page remains useful when JavaScript is unavailable: identity and project links stay visible.
- The site is usable at 360px width and with keyboard only.
- Reduced-motion mode contains no route-drawing animation.
- Claims stay aligned with public repositories.
