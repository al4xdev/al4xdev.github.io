# CV content fields

`cv/content.js` assigns `window.CV_CONTENT` with exactly two locale objects: `en` and `pt-BR`.
Both objects must have the same keys and value types.

| Field | Type | Rule |
|---|---|---|
| `documentTitle` | string | Browser/PDF title. |
| `name` | string | Verified public name. |
| `role` | string | Verified positioning, translated without inflating seniority. |
| `links` | array of `{label,url}` | Public HTTPS links only. |
| `portfolioLink` | `{label,url}` | Canonical portfolio URL shown as the primary header link in print. |
| `profile` | `{label,body}` | Short factual summary. |
| `experienceLabel` | string | Localized section label. |
| `experience` | array of `{role,tag,period,projects[]}` | Role-periods, newest first. `tag` is an optional short qualifier and remains empty when none applies. `projects` is an array of `{title,body}`. Same shape and order across locales. |
| `selectedWorkLabel` | string | Localized section label. |
| `selectedWork` | array of `{name,body}` | Same projects and order across locales. |
| `selectedResearchLabel` | string | Localized engineering-research section label. |
| `selectedResearch` | array of `{title,body}` | Verified studies, with the same order and evidence across locales. |
| `focusLabel` | string | Localized section label. |
| `focus` | string array | Verifiable technical areas, not proficiency claims. |
| `languagesLabel` | string | Localized section label. |
| `languages` | array of `{name,level,certification,date}` | Use verified proficiency and certification data only. Keep empty strings when no certification applies. |
| `educationLabel` | string | Localized section label. |
| `education` | string | Verified facts or an explicit placeholder. Rendered as a list, split on ` · `. |
| `mentorsNote` | string | Short attribution line under the mentors, in Alexsandro's own words. |
| `footnote` | string | Verification status and limitations. |

Do not add display markup to values. `cv/render.js` escapes every field and owns the HTML.
