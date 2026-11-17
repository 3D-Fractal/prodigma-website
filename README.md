# ProDigma – webbplats

Statisk webbplats för ProDigma på svenska och norska (bokmål). Byggd och förvaltad av 3D Fractal.

## Struktur

| Sökväg | Innehåll |
| --- | --- |
| `content/sv.mjs` | Allt svenskt innehåll (texter, meny, sidfot, startsida) |
| `content/nb.mjs` | Allt norskt innehåll, samma struktur och samma sid-id:n |
| `build-site.mjs` | Bygger alla sidor, `sitemap.xml`, `robots.txt` och `_redirects` |
| `prodigma-local/` | Den färdiga sajten (svenska i roten, norska i `no/`) |
| `prodigma-local/site.css` | Gemensam stil för alla sidor |
| `prodigma-local/home.css` | Stil för startsidan |
| `originalbilder/` | Originalbilder i full storlek (publiceras inte) |

## Bygga och förhandsgranska

```bash
node build-site.mjs
node serve-local.mjs
```

Öppna sedan http://localhost:4174.

## Publicering

Varje push till `main` bygger sajten och publicerar den på GitHub Pages via `.github/workflows/pages.yml`:
https://3d-fractal.github.io/prodigma-website/

GitHub Pages används för granskning. `_redirects` fungerar inte där, utan först hos en värd som Netlify eller Cloudflare Pages.

## SEO

- Varje sida har `canonical`, `hreflang` (sv, nb, x-default), Open Graph och strukturerad data (JSON-LD).
- `sitemap.xml` listar alla sidor med språkalternativ.
- `_redirects` skickar gamla adresser från tidigare prodigma.se vidare med 301 (Netlify/Cloudflare Pages-format).
- **Just nu har alla sidor `noindex`.** Inför lansering: sätt `INDEXABLE = true` och kontrollera `SITE_URL` i `build-site.mjs`, och bygg om.
