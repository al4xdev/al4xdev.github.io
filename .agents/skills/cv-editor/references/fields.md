# CV content fields

`cv/content.js` assigns `window.CV_CONTENT` with exactly two locale objects: `en` and `pt-BR`.
Both objects must have the same keys and value types.

| Field | Type | Rule |
|---|---|---|
| `documentTitle` | string | Browser/PDF title; identify mock status while applicable. |
| `mockBadge` | string | Legacy content status field; retained for shape parity but not rendered. |
| `name` | string | Verified public name. |
| `role` | string | Verified positioning, translated without inflating seniority. |
| `links` | array of `{label,url}` | Public HTTPS links only. |
| `profile` | `{label,body}` | Short factual summary. |
| `experienceLabel` | string | Localized section label. |
| `experience` | array of `{title,meta,body}` | Preserve entry order across locales; placeholders stay explicit. |
| `selectedWorkLabel` | string | Localized section label. |
| `selectedWork` | array of `{name,body}` | Same projects and order across locales. |
| `focusLabel` | string | Localized section label. |
| `focus` | string array | Verifiable technical areas, not proficiency claims. |
| `languagesLabel` | string | Localized section label. |
| `languages` | string array | Do not infer proficiency. |
| `educationLabel` | string | Localized section label. |
| `education` | string | Verified facts or an explicit placeholder. |
| `footnote` | string | Verification status and limitations. |

Do not add display markup to values. `cv/render.js` escapes every field and owns the HTML.
