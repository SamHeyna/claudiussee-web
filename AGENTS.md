# AGENTS.md – Claudiussee Web

Community website for the "Neubaugebiet Claudiussee" residential area (Bad Oldesloe, Germany). Static HTML/CSS/JS — no build pipeline, no framework, no package manager.

## Architecture

- **Theme**: Based on [HTML5 UP "Stellar"](https://html5up.net/stellar) (CCA 3.0 license, see `licences/`). Bright, light-background theme. All styling is in `assets/css/main.css` — edit CSS directly, no build tools needed.
- **Pages**: `index.html` (single page: gallery + documents + participation).
- **Deployment**: GitHub Pages with custom domain — configured via `CNAME` (`claudiussee.de`).
- **Content language**: German throughout.

## Page Structure (Stellar)

Stellar uses a different structure from older HTML5 UP templates:
- Top-level wrapper is `<div id="wrapper">` (not `#page-wrapper`)
- `<body class="is-preload">` on all pages (no `landing` class)
- Fixed sticky nav `<nav id="nav">` appears *below* the header, not inside it
- Hero header uses `<header id="header" class="alt">` on landing page; omit `.alt` on subpages
- Content lives in `<div id="main">` containing `<section>` elements
- Sections use `<section id="..." class="main special">` for centred content

## Image Folders

| Folder | Purpose | Examples |
|---|---|---|
| `images/` | **All photos** — referenced from HTML `<img src="...">` | `claudiussee-neutral.png`, `claudiussee-winter.jpg`, `luftbild.JPG` |

All content images live in `images/`. There is no `assets/images/` folder — it has been removed.

## Documents

PDFs live in `documents/` with short, human-readable German filenames (ASCII-safe, no special characters):
- `Bebauungsplan.pdf`, `Begruenungsplan.pdf`, `Lageplan.pdf`, `Kampfmittelraeumung.pdf`

Link to them from HTML as `documents/Filename.pdf` with `target="_blank"`.

## JS Stack (all local, no CDN except Google Fonts)

Scripts loaded in this order on every page:
```
jquery.min.js → jquery.scrollex.min.js → jquery.scrolly.min.js → browser.min.js → breakpoints.min.js → util.js → main.js
```
`main.js` is Stellar's vendored script. `lightbox.js` is the custom lightbox for the gallery (see `assets/js/lightbox.js`). All scripts are in `assets/js/`.

## Key Patterns

### Page structure and initialization
Every HTML page wraps content in `<div id="wrapper">`. Use `<body class="is-preload">` on all pages. The `is-preload` class is removed by `main.js` on load, triggering entrance animations.

### Sections (Gallery / Documents)
Content sections use `<section id="..." class="main special">`. The `.special` class centres content. Example:
```html
<section id="galerie" class="main special">
  <header class="major">
    <h2>Galerie</h2>
    <p>Unterzeile</p>
  </header>
  <!-- content -->
</section>
```

### Image gallery grid
Use the HTML5 UP grid inside `.box.alt` for a responsive photo grid:
```html
<div class="box alt">
  <div class="row gtr-uniform">
    <div class="col-4 col-6-medium col-12-xsmall">
      <span class="image fit"><img src="images/photo.jpg" alt="" /></span>
    </div>
    ...
  </div>
</div>
```

### Navigation
The `<nav id="nav">` block is **copy-pasted** into every HTML file. Current nav items: `Galerie` | `Dokumente` | `Mitmachen`. Mobile nav is handled automatically by `main.js`.

### Footer
The `<footer id="footer">` is shared across all pages. Contains two `<section>` columns (welcome text + contact) and icon links (GitHub, email). Copy-paste footer into new pages.

### Responsive grid
`col-N` (desktop), `col-N-medium`, `col-N-xsmall`. Breakpoints: `xlarge` ≥1281px, `large` 981–1280px, `medium` 737–980px, `small` 481–736px, `xsmall` ≤480px.

## No Build / Dev Server

There is no `package.json` or Makefile. To preview locally:
```sh
python3 -m http.server 8080
# then open http://localhost:8080
```

Edit `assets/css/main.css` directly for styling changes — no build step, no compilation, no external tools required.

## Adding New Pages

Copy `index.html` as a starting template. Keep the identical `<head>` block, `<nav>`, footer, and script tags. Use `<header id="header">` (without `.alt`) on subpages. Place new content images in `images/`.
