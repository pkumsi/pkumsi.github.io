# Prerana Kumsi — GitHub Pages Portfolio

This is a Jekyll-powered portfolio tailored for GitHub Pages. It ships with custom layouts, dark mode, and structured data for projects.

## Local setup
```bash
bundle install
bundle exec jekyll serve
```
Then open `http://localhost:4000`.

## Deploying to GitHub Pages
1) Push this repository to GitHub (e.g., `pkumsi/pkumsi.github.io` or a project repo).  
2) In the repo settings, enable GitHub Pages using the `main` branch.  
3) Pages will build automatically with the default Jekyll configuration (no extra steps needed).

## Content editing
- Projects live in `_data/projects.yml`; detail pages use the collection in `_projects/`.
- Navigation links are defined in `_config.yml` under `nav_links`.
- Global styling is in `assets/css/style.css`; behavior in `assets/js/main.js`.
- Resume link points to `assets/Prerana_Kumsi_Resume.pdf` (placeholder included).

## Accessibility & SEO
- Responsive, mobile-first layout with accessible contrast.
- SEO and OpenGraph tags via `jekyll-seo-tag` (config in `_config.yml`).
