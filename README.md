# Alexsandro Pessoa — interactive systems portfolio

A bilingual, dependency-free portfolio for GitHub Pages. The site presents selected work as an
interactive system constellation rather than a conventional project-card grid.

## Local preview

```fish
cd /home/alex/git/my/porf_page
python3 -m http.server 8080
```

Open <http://127.0.0.1:8080>.

## Project structure

- `index.html`: semantic page and language entrance.
- `styles.css`: Systems Fieldboard visual system and responsive behavior.
- `app.js`: bilingual content, project data, language persistence, and constellation interaction.
- `.plan/`: product brief, verified content inventory, design direction, roadmap, and continuation
  handoff. Future agents must read this first.
- `.nojekyll`: serve the static tree unchanged through GitHub Pages.

## Publication

The site can be published from a repository Pages branch without a build step. Before publishing,
complete the unresolved items in `.plan/HANDOFF.md`, especially the preferred contact method,
canonical URL, project media, and final Alex Tavern status language.

