# Mobile experience audit

**Created:** 2026-07-17  
**Status:** Complete locally; included in the publication candidate

## User request

Audit the complete portfolio in a browser and make the experience fluid on phones. A separate
mobile experience is allowed if one responsive structure cannot preserve the site's identity and
usability.

## Decision gate

Keep one semantic document unless browser evidence shows an irreconcilable interaction conflict.
The constellation may have a mobile-specific presentation, but project data, language state,
selection, links, and accessibility contracts remain shared. Duplicating the whole page would
create content drift without adding visitor value.

## Viewports

- 360 × 800: small Android baseline.
- 390 × 844: current compact-phone baseline.
- 430 × 932: large-phone baseline.
- Portrait is the primary path; landscape must remain usable without horizontal page overflow.

## Audit route

1. Fresh language entrance in both languages.
2. Returning-visitor entrance and language switching.
3. Hero thesis, primary action, and first-scroll affordance.
4. Every project control and the inspection panel.
5. Principles, all four publications, archive link, and footer.
6. Keyboard focus, touch target sizes, reduced motion, and no-JavaScript fallback.

## Acceptance criteria

- No page-level horizontal scrolling from 360 px upward.
- No clipped words in English or Portuguese.
- Primary controls are at least 44 px tall or have equivalent touch area.
- A mobile visitor can compare and select projects without scanning six oversized cards.
- The selected project and its details remain visually connected.
- Header controls remain reachable without covering anchored content.
- Dense evidence copy remains readable without shrinking body text below 16 px.
- Language switching preserves the selected project and current section.
- Decorative geometry never competes with the next actionable content.
- Reduced-motion mode removes nonessential transitions.

## Findings and implementation

### Baseline browser findings

The first full-page Chromium pass found structural issues that were not visible in the earlier
single-viewport screenshot:

- page width expanded to 413 px at 360/390 px and to 461 px in Portuguese at 390 px;
- the language overlay visually occupied one screen, but the hidden site kept document height at
  7,483 px;
- header language controls, project links, archive links, and footer actions had touch areas below
  44 px;
- six vertically stacked project cards made the system selector unnecessarily long;
- Portuguese hero copy created the largest min-content overflow;
- without JavaScript, the fixed language gate prevented access to the fallback content.

### Implemented mobile mode

- Kept one semantic experience and one content source. A separate mobile page was rejected because
  it would duplicate translations, project state, and article navigation.
- Replaced the mobile constellation presentation with a horizontally scrollable, snap-aligned
  system route. The desktop topology remains unchanged.
- Kept the legend outside the scroll track so `Swipe to inspect` / `Deslize para inspecionar`
  remains stable.
- Constrained grid children and long display text, eliminating page-level horizontal overflow.
- Reduced decorative board and publication height while preserving the fieldboard identity.
- Made the mobile header opaque over dense content and added anchor scroll margins.
- Expanded every visible link and button to a minimum 44 px touch height.
- Bound first focus in the language gate to the visitor's detected language.
- Hid the inactive site shell while the language gate is open, making the gate exactly one
  viewport high.
- Added a no-JavaScript style escape that hides the unusable gate and exposes the bilingual
  repository fallback.

### Final browser evidence

Playwright Chromium audited local production files with touch emulation:

| Case | Root width | Small targets | Projects exercised | Selection survived language switch |
|---|---:|---:|---:|---|
| English 360 × 800 | 360 | 0 | 6/6 | yes |
| English 390 × 844 | 390 | 0 | 6/6 | yes |
| Portuguese 390 × 844 | 390 | 0 | 6/6 | yes |
| English 430 × 932 | 430 | 0 | 6/6 | yes |
| English landscape 844 × 390 | 844 | 0 | 6/6 | yes |

Additional checks:

- language gate: 360 px document width and exactly 800 px document height;
- reduced-motion media emulation matched and collapsed animations/transitions to `0.01ms`;
- JavaScript route scrolling switches from smooth to immediate when reduced motion is requested;
- no-JavaScript fallback was visible, gate hidden, and root width matched 360 px;
- language-induced reflow stayed within 111 px and preserved the current project and section.
- a 1440 × 1000 regression smoke retained all six desktop nodes, the visible topology, the
  `display: contents` desktop wrapper, and an exact 1440 px root width.
- the later isolated-CV audit kept exact root widths at all five mobile/landscape cases, opened all
  five paper documents, and delivered the print request through the sandbox boundary.

Temporary browser artifacts and the audit harness live only in `/tmp/mobile-audit-tools` and
`/tmp/mobile-*.png`; no Playwright dependency was added to the portfolio.
