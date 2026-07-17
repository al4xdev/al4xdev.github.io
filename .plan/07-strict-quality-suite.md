# Strict quality suite and agent-safe CV editing

**Created:** 2026-07-17  
**Status:** Complete; local and GitHub Actions gates green

## User request

Turn the existing validation work into a strict GitHub Actions suite. In parallel, provide a
repository-local agent contract and skill that can fill the isolated CV without changing the
portfolio structure, plus an internal command that exports the generated A4 PDF to `/tmp` for
inspection.

## Test architecture

1. Static lint with zero warnings for JavaScript, CSS, and HTML.
2. Node unit tests for bilingual content parity, project/CV schemas, local resources, document
   ordering, sandbox boundaries, reduced motion, and A4 CSS contracts.
3. Chromium browser tests for language entrance, constellation behavior, mobile geometry, touch
   targets, paper motion, reduced motion, no-JavaScript fallback, iframe messaging, accessibility,
   and one-page A4 output.
4. GitHub Actions runs the whole suite on pull requests and pushes to `main`, with read-only token
   permissions, locked dependencies, concurrency cancellation, explicit timeouts, and failure
   artifacts.

## CV agent boundary

- `cv/AGENTS.md` is the local authority for agents working below `cv/`.
- `.agents/skills/cv-editor/` provides the reusable editing workflow and field reference.
- Ordinary CV work edits only `cv/content.js` and keeps `en` and `pt-BR` aligned.
- Unverified facts remain visibly marked rather than inferred.
- `npm run cv:export -- --lang en` and `--lang pt-BR` write only to `/tmp`, validate one-page A4,
  and create a PNG preview when `pdftoppm` is available.

## Acceptance criteria

- `npm test` is green locally from a clean install.
- CI uses `npm ci` and fails on every lint warning, unit failure, accessibility violation, browser
  regression, or invalid PDF contract.
- Runtime remains dependency-free; all packages are development-only.
- The export command cannot overwrite repository files.
- The skill passes the official skill validator.

## Local evidence

- ESLint, Stylelint, and html-validate pass with zero warnings.
- Nine contract tests cover interface/project/CV/article parity, local resources, sandbox and
  print contracts, export destination safety, and repository skill metadata.
- Fourteen Chromium scenarios pass across desktop, four mobile/landscape viewports, both CV
  languages, local article routing, accessibility, reduced motion, no JavaScript, and print.
- English and Portuguese export commands each produced one validated A4 PDF and a PNG preview in
  `/tmp`.
- The official `quick_validate.py` accepted `.agents/skills/cv-editor`.
- Strict accessibility runs found seven portfolio contrast defects and one isolated-CV contrast
  defect; colors were corrected and repeated WCAG A/AA scans passed in English and Portuguese.

## Remote evidence

- GitHub Actions run `29579667859` passed both required jobs on 2026-07-17.
- `Lint, contracts, and dependency audit` passed locked install, zero-vulnerability audit, zero-
  warning lint, and all contract tests.
- `Chromium behavior, accessibility, and A4` installed the pinned browser and passed all fourteen
  scenarios.
- Workflow actions are pinned by full commit SHA. Checkout and Node setup use their Node 24-based
  V5 releases, leaving the final run without the Node 20 deprecation annotation found in the first
  trial.
