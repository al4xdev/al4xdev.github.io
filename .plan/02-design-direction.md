# Design direction: Systems Fieldboard

## Subject, audience, and job

- Subject: Alexsandro's connected body of agentic and visual systems.
- Audience: technical hiring managers, engineering peers, and collaborators.
- Job: make the relationship between the projects understandable and invite evidence inspection.

## Chosen direction

The page behaves like a **systems fieldboard**: a calm engineering surface where projects are
connected instruments rather than marketing cards. It borrows from control-room schematics and
industrial labeling, but avoids fake terminal chrome and cyberpunk neon.

### Palette

| Token | Hex | Purpose |
|---|---|---|
| Porcelain | `#F3F5F2` | Main field, quiet and bright |
| Carbon | `#17201E` | Primary type and deepest surfaces |
| Cobalt | `#315CF4` | Active paths, links, selected nodes |
| Copper | `#C65F3A` | Human decisions and high-value evidence |
| Mineral | `#A8B5B0` | Structural lines and secondary information |
| Mist | `#DCE3DF` | Panels, separators, inactive states |

This is deliberately not the common cream/serif/terracotta portfolio, black/acid dashboard, or
newspaper-grid template. Copper is a small semantic accent; cobalt owns interaction.

### Typography

- Display: condensed industrial sans stack (`Arial Narrow`, `Roboto Condensed`,
  `Liberation Sans Narrow`). Used only for the thesis and large project names.
- Body: variable system sans stack for clarity and zero font-loading dependency.
- Utility/data: system monospace for evidence, state, labels, and controls.

Typography should feel like an engineered instrument panel with editorial breathing room, not a
terminal emulator.

### Layout

Desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│ AP / SYSTEMS                              PT · EN   GITHUB   │
├───────────────────────────┬──────────────────────────────────┤
│ Thesis                    │ Interactive project constellation│
│ Identity + short proof    │ nodes + meaningful edges         │
│ [Explore systems]         │ selection travels through paths  │
├───────────────────────────┴──────────────────────────────────┤
│ Selected system inspection                                  │
│ problem / decision / evidence / repository                   │
├───────────────────────────┬──────────────────────────────────┤
│ Engineering principles    │ Field note                       │
└───────────────────────────┴──────────────────────────────────┘
```

Mobile:

```text
┌───────────────────────┐
│ AP / SYSTEMS   PT·EN  │
│ Thesis                │
│ horizontally scrollable│
│ system route           │
│ selected inspection   │
│ principles             │
│ note + contact         │
└───────────────────────┘
```

## Signature interaction

The memorable element is the **living system constellation**. It encodes actual relationships:

- Alex Tavern connects to its plugin ecosystem.
- SceneQueue connects to ReImagineX through visual lineage.
- PromptNest connects to agentic systems through typed orchestration.
- Crime Alley connects to Alex Tavern through deterministic agent boundaries and evidence.

Selecting a node highlights only its meaningful connections and updates the inspection panel. A
single route animation plays after language selection. There are no ambient floating particles or
decorative cursor effects.

## Language entrance

The language gate is a deliberate first chapter:

- two equal choices, Português and English;
- keyboard focus enters the choices immediately;
- selection is persisted locally;
- a returning visitor bypasses the gate but can reopen it from the header;
- the content changes in place without resetting project selection or scroll.

## Motion

- One orchestrated entrance: field lines draw, then project nodes settle.
- Project selection highlights edges and crossfades inspection content.
- Small state transitions on buttons and labels.
- `prefers-reduced-motion` removes drawing, settling, and crossfades.

## Self-critique and revision

Initial risk: a dark blueprint with neon paths would be visually obvious but indistinguishable from
many AI portfolios. Revision: use a bright porcelain field, mineral construction lines, and a
single cobalt interaction signal. The engineering identity comes from real topology and copy, not
from terminal decoration.

Second risk: six project cards would be easy but would hide the central insight that these projects
form one exploration. Revision: the constellation is the primary navigation, while cards are
reserved for mobile fallback and semantic structure.

