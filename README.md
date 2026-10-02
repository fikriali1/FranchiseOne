# Franchise One – static website

Plain HTML/CSS/JS. No build step.

## Publish on GitHub Pages
1. Push this folder's contents to a repo (files at the repo root).
2. Settings → Pages → Deploy from branch → `main` / root.
3. Custom domain: add `franchise.one` in Pages settings (it creates a `CNAME` file) and point DNS to GitHub.

## Edit content
- Brands, services, testimonials, media cards: top of `js/main.js`.
- Brand logos: put PNGs in `assets/brands/` named like the brand in lowercase with dashes (e.g. `bebek-terminal.png`). Missing files show the brand name as text.
- Colors, text color, hover distances: variables/rules at the top of `css/style.css`.
- Placeholders to replace: stats (`index.html`), `#` links (Location/Commerce, Read more, Terms, Privacy).
