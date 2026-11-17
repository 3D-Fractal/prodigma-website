// Bygger hela ProDigma-webbplatsen (svenska + norska) till prodigma-local/.
//
//   node build-site.mjs
//
// Innehåll:   content/sv.mjs och content/nb.mjs
// Stil:       prodigma-local/site.css (alla sidor) och prodigma-local/home.css (startsidan)
//
// SEO:        Sätt INDEXABLE = true när sajten ska synas i sökmotorer. Då tas
//             noindex bort från alla sidor. SITE_URL används för canonical,
//             hreflang, Open Graph och sitemap.xml.

import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sv from "./content/sv.mjs";
import nb from "./content/nb.mjs";

const SITE_URL = "https://prodigma.se";
const INDEXABLE = false;
const OUT = path.resolve("prodigma-local");
const LANGS = [sv, nb];
const DEFAULT_LANG = sv;
const PARTNER = { name: "3D Fractal", url: "https://3dfractal.no/" };

const people = {
  lovisa: { name: "Lovisa Mellgren", email: "lovisa.mellgren@ProDigma.se", phone: "+46 (0)766-29 90 29", tel: "+46766299029" },
  marianne: { name: "Marianne Fröberg", email: "marianne.froberg@ProDigma.se", phone: "+39 335 183 5860", tel: "+393351835860" },
};

// Gamla adresser på prodigma.se → nya sidor (301). Används av _redirects (Netlify/Cloudflare Pages).
const legacyRedirects = {
  "/vad-vi-gör/erbjudanden-41445087": "erbjudanden",
  "/vad-vi-gör/stressförebyggande-greenlight-map-41397901": "greenlight-map",
  "/vad-vi-gör/vad-vi-gör-35536173": "vad-vi-gor",
  "/vad-vi-gör-35536173": "vad-vi-gor",
  "/vad-vi-gör": "vad-vi-gor",
  "/vilka-vi-är-34841564": "vilka-vi-ar",
  "/media-39298435": "media",
  "/kontakt-44099785": "kontakt",
  "/yogaretreat-för-ledare": "retreat",
  "/yogaretreat-för-ledare/yogaretreat-på-sicilien-44099090": "retreat-sicilien",
  "/yogaretreat-för-ledare/yogaretreat-och-skogsbad-44099124": "retreat-skogsbad",
  "/yogaretreat-för-ledare/anmälan-yogaretreat-och-skogsbad-34841570": "anmalan-skogsbad",
  "/yogaretreat-för-ledare/anmälan-till-yogaretreat-för-ledare-på-sicilien-44099848": "anmalan-sicilien",
  "/anmälan-yogaretreat-och-skogsbad-34841570": "anmalan-skogsbad",
};

// ---------------------------------------------------------------------------
// Hjälpfunktioner

let L = sv; // språket som byggs just nu
let ROOT = "./"; // relativ väg till webbplatsens rot från aktuell sida

const esc = (v) => String(v).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const fileOf = (lang, id) => (id === "home" ? "index.html" : `${lang.pages[id].slug}.html`);
const relPath = (lang, id) => (lang.dir ? `${lang.dir}/` : "") + fileOf(lang, id);
const absUrl = (lang, id) => `${SITE_URL}/${relPath(lang, id).replace(/(^|\/)index\.html$/, "$1")}`;
const href = (id) => `./${fileOf(L, id)}`; // länk inom samma språk
const asset = (p) => `${ROOT}${p}`;
const mailto = (email, subject, body = "") =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
const person = (key) => ({ ...people[key], ...L.people[key] });

function img(name, alt, sizes, { eager = false } = {}) {
  return `<img src="${asset(`images/${name}.jpg`)}" srcset="${asset(`images/${name}-900.jpg`)} 900w, ${asset(`images/${name}.jpg`)} 1800w" sizes="${sizes}" alt="${esc(alt)}"${eager ? ` fetchpriority="high"` : ` loading="lazy"`} decoding="async">`;
}

// ---------------------------------------------------------------------------
// Head, meny och sidfot

function head({ id, title, description, image }) {
  const alternates = LANGS.map((lang) => `<link rel="alternate" hreflang="${lang.hreflang}" href="${absUrl(lang, id)}">`).join("\n  ");
  const others = LANGS.filter((lang) => lang !== L).map((lang) => `<meta property="og:locale:alternate" content="${lang.locale}">`).join("\n  ");
  return `<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="${INDEXABLE ? "index, follow" : "noindex, nofollow"}">
  <link rel="canonical" href="${absUrl(L, id)}">
  ${alternates}
  <link rel="alternate" hreflang="x-default" href="${absUrl(DEFAULT_LANG, id)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="ProDigma">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${absUrl(L, id)}">
  <meta property="og:image" content="${SITE_URL}/images/${image}.jpg">
  <meta property="og:locale" content="${L.locale}">
  ${others}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#fbf8f3">
  <link rel="icon" href="${asset("images/favicon.svg")}" type="image/svg+xml">
  <link rel="stylesheet" href="${asset("site.css")}">${id === "home" ? `\n  <link rel="stylesheet" href="${asset("home.css")}">` : ""}
  <script>document.documentElement.classList.remove("no-js")</script>
  <script src="${asset("site.js")}" defer></script>`;
}

function langSwitch(id) {
  const links = LANGS.map((lang) => {
    const target = lang === L ? href(id) : `${ROOT}${relPath(lang, id)}`;
    const current = lang === L ? ` aria-current="true"` : "";
    return `<a href="${target}" hreflang="${lang.hreflang}" lang="${lang.hreflang}"${current} title="${lang.label}">${lang.short}</a>`;
  }).join(`<span aria-hidden="true">/</span>`);
  return `<nav class="lang-switch" aria-label="${L.ui.langNav}">${links}</nav>`;
}

function header(id) {
  const links = L.nav.map((item) => {
    const active = (item.match || [item.id]).includes(id) ? ` aria-current="page"` : "";
    return `<a href="${href(item.id)}"${item.cta ? ` class="nav-cta"` : ""}${active}>${item.label}</a>`;
  }).join("\n        ");
  return `<a class="skip-link" href="#innehall">${L.ui.skip}</a>
  <header class="site-header">
    <div class="nav">
      <a class="brand" href="${href("home")}" aria-label="${L.ui.homeLabel}">
        <strong>ProDigma</strong>
        <span>${L.ui.tagline}</span>
      </a>
      <nav class="nav-links" id="nav-links" aria-label="${L.ui.mainNav}">
        ${links}
      </nav>
      ${langSwitch(id)}
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links" data-open="${L.ui.menu}" data-close="${L.ui.close}">
        <span class="menu-icon" aria-hidden="true"><span></span></span>
        <span class="menu-label">${L.ui.menu}</span>
      </button>
    </div>
  </header>`;
}

function footer() {
  const lovisa = person("lovisa");
  const groups = L.footer.map(([title, links]) => `
        <nav class="footer-col" aria-label="${title}">
          <p class="footer-title">${title}</p>
          ${links.map(([id, label]) => `<a href="${href(id)}">${label}</a>`).join("\n          ")}
        </nav>`).join("");
  return `<footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-about">
        <a class="footer-brand" href="${href("home")}">ProDigma</a>
        <p>${L.ui.footerAbout}</p>
        <p><a href="mailto:${lovisa.email}">${lovisa.email}</a><br><a href="tel:${lovisa.tel}">${lovisa.phone}</a></p>
      </div>${groups}
    </div>
    <div class="footer-bottom">
      <span>© 2026 ProDigma AB</span>
      <span>${L.ui.credit} <a href="${PARTNER.url}" target="_blank" rel="noopener">${PARTNER.name}</a></span>
    </div>
  </footer>`;
}

function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function organization() {
  const lovisa = person("lovisa");
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "ProDigma AB",
    url: absUrl(L, "home"),
    logo: `${SITE_URL}/images/favicon.svg`,
    image: `${SITE_URL}/images/leadership-workshop.jpg`,
    description: L.home.description,
    email: lovisa.email,
    telephone: lovisa.tel,
    areaServed: ["SE", "NO"],
    knowsLanguage: ["sv", "nb"],
    founder: { "@type": "Person", name: lovisa.name, jobTitle: lovisa.role },
  };
}

function breadcrumb(id) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ProDigma", item: absUrl(L, "home") },
      { "@type": "ListItem", position: 2, name: L.pages[id].name, item: absUrl(L, id) },
    ],
  };
}

function documentHtml({ id, title, description, image, bodyClass, main, structured }) {
  return `<!doctype html>
<html lang="${L.hreflang}" class="no-js">
<head>
  ${head({ id, title, description, image })}
  ${structured.map(jsonLd).join("\n  ")}
</head>
<body class="${bodyClass}">
  ${header(id)}
  <main id="innehall">${main}
  </main>
  ${footer()}
</body>
</html>
`;
}

// ---------------------------------------------------------------------------
// Sektioner på undersidorna

function sectionHead(s, center = false) {
  if (!s.kicker && !s.heading) return "";
  return `
        <div class="pg-head${center ? " center" : ""}">
          ${s.kicker ? `<p class="pg-kicker">${s.kicker}</p>` : ""}
          ${s.heading ? `<h2>${s.heading}</h2>` : ""}
          ${s.intro ? `<p class="pg-intro">${s.intro}</p>` : ""}
        </div>`;
}

function wrap(s, inner) {
  return `
    <section class="pg-section sec-${s.type}${s.tone ? ` tone-${s.tone}` : ""}">
      <div class="pg-wrap">${inner}
      </div>
    </section>`;
}

const ticks = (items) => `<ul class="pg-ticks">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
const textLink = ([id, label]) => `<a class="pg-link" href="${href(id)}">${label} <span aria-hidden="true">→</span></a>`;
const external = (url, label) => `<a class="pg-link" href="${url}" target="_blank" rel="noopener">${label} <span aria-hidden="true">↗</span><span class="sr-only"> (${L.ui.newTab})</span></a>`;

const render = {
  prose: (s) => wrap(s, `
        <div class="pg-prose">
          <div>
            <p class="pg-kicker">${s.kicker}</p>
            <h2>${s.heading}</h2>
          </div>
          <div class="pg-body">
            ${s.body.map((p) => `<p>${p}</p>`).join("\n            ")}
            ${s.list ? ticks(s.list) : ""}
            ${s.aside ? `<p class="pg-aside">${s.aside}</p>` : ""}
          </div>
        </div>`),

  grid: (s) => wrap(s, `${sectionHead(s)}
        <div class="pg-grid">${s.items.map(([h, t]) => `
          <article class="pg-item">
            <h3>${h}</h3>
            <p>${t}</p>
          </article>`).join("")}
        </div>`),

  steps: (s) => wrap(s, `${sectionHead(s)}
        <ol class="pg-steps count-${s.items.length}">${s.items.map(([h, t], i) => `
          <li>
            <span class="pg-step-num">${String(i + 1).padStart(2, "0")}</span>
            <h3>${h}</h3>
            <p>${t}</p>
          </li>`).join("")}
        </ol>`),

  split: (s) => wrap(s, `
        <div class="pg-split">
          <figure class="pg-figure">${img(s.image, s.alt, "(max-width: 900px) 100vw, 50vw")}</figure>
          <div class="pg-split-text">
            <p class="pg-kicker">${s.kicker}</p>
            <h2>${s.heading}</h2>
            ${s.body.map((p) => `<p>${p}</p>`).join("\n            ")}
            ${s.list ? ticks(s.list) : ""}
            ${s.link ? textLink(s.link) : ""}
          </div>
        </div>`),

  features: (s) => wrap(s, `
        <div class="pg-features">${s.items.map((f, i) => `
          <article class="pg-feature${i % 2 ? " reverse" : ""}">
            <figure class="pg-figure">${img(f.image, f.alt, "(max-width: 900px) 100vw, 50vw")}</figure>
            <div>
              <p class="pg-kicker">${f.kicker}</p>
              <h2>${f.heading}</h2>
              <p>${f.text}</p>
              ${textLink(f.link)}
            </div>
          </article>`).join("")}
        </div>`),

  checklist: (s) => wrap(s, `
        <div class="pg-checklist-grid">
          ${sectionHead(s)}
          ${ticks(s.items)}
        </div>`),

  offers: (s) => wrap(s, `${sectionHead(s)}
        <div class="pg-offers">${s.groups.map(([title, items]) => `
          <div class="pg-offer-group">
            <h3 class="pg-offer-title">${title}</h3>
            <dl>${items.map(([h, t]) => `
              <div class="pg-offer">
                <dt>${h}</dt>
                <dd>${t}</dd>
              </div>`).join("")}
            </dl>
          </div>`).join("")}
        </div>`),

  stats: (s) => wrap({ ...s, tone: "forest" }, `${sectionHead(s, true)}
        <dl class="pg-stats">${s.items.map(([n, l]) => `
          <div><dt>${n}</dt><dd>${l}</dd></div>`).join("")}
        </dl>
        <p class="pg-footnote">${s.note}</p>`),

  profile: (s) => {
    const p = person(s.person);
    return wrap(s, `
        <article class="pg-profile${s.reverse ? " reverse" : ""}">
          <div class="pg-monogram" aria-hidden="true"><span>${s.initials}</span></div>
          <div>
            <p class="pg-kicker">${s.role}</p>
            <h2>${s.heading}</h2>
            ${s.body.map((t) => `<p>${t}</p>`).join("\n            ")}
            <ul class="pg-tags">${s.credentials.map((c) => `<li>${c}</li>`).join("")}</ul>
            <p class="pg-contact-line"><a href="mailto:${p.email}">${p.email}</a><span aria-hidden="true">·</span><a href="tel:${p.tel}">${p.phone}</a></p>
          </div>
        </article>`);
  },

  people: (s) => wrap(s, `${sectionHead(s)}
        <div class="pg-people">${s.items.map(([name, org, text]) => `
          <article class="pg-person">
            <h3>${name}</h3>
            <p class="pg-org">${org}</p>
            <p>${text}</p>
          </article>`).join("")}
        </div>`),

  partner: (s) => wrap(s, `
        <article class="pg-partner">
          <a class="pg-partner-mark" href="${s.url}" target="_blank" rel="noopener"><img src="${asset("images/3d-fractal-logo.jpg")}" srcset="${asset("images/3d-fractal-logo-280.jpg")} 280w, ${asset("images/3d-fractal-logo.jpg")} 560w" sizes="(max-width: 900px) 200px, 280px" width="560" height="406" alt="${PARTNER.name}" loading="lazy" decoding="async"></a>
          <div class="pg-partner-text">
            <p class="pg-kicker">${s.kicker}</p>
            <h2>${s.heading}</h2>
            ${s.body.map((p) => `<p>${p}</p>`).join("\n            ")}
            <ul class="pg-tags">${s.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
            ${external(s.url, s.linkLabel)}
          </div>
        </article>`),

  press: (s) => wrap(s, `${sectionHead(s)}
        <ul class="pg-press">${s.items.map(([outlet, date, title, url]) => `
          <li>
            <span class="pg-press-meta">${outlet}<span>${date}</span></span>
            ${url
              ? `<a href="${url}" target="_blank" rel="noopener" lang="sv">${title}<span class="sr-only"> (${L.ui.newTab})</span> <span aria-hidden="true">↗</span></a>`
              : `<span class="pg-press-title" lang="sv">${title}</span>`}
          </li>`).join("")}
        </ul>`),

  quotes: (s) => wrap(s, `
        <div class="pg-quotes">${s.items.map(([q, who]) => `
          <figure>
            <blockquote>${L.lang === "sv" ? `”${q}”` : `«${q}»`}</blockquote>
            <figcaption>${who}</figcaption>
          </figure>`).join("")}
        </div>`),

  facts: (s) => wrap(s, `
        <div class="pg-facts-layout">
          ${sectionHead(s)}
          <dl class="pg-facts">${s.items.map(([k, v]) => `
            <div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
          </dl>
        </div>`),

  retreats: (s) => wrap(s, `${sectionHead(s)}
        <div class="pg-retreats">${s.items.map((r) => `
          <a class="pg-retreat" href="${href(r.id)}">
            <div class="pg-retreat-visual${r.tone ? ` visual-${r.tone}` : ""}">${r.image ? img(r.image, r.alt, "(max-width: 900px) 100vw, 50vw") : `<span aria-hidden="true">${L.ui.seaLabel}</span>`}</div>
            <div class="pg-retreat-text">
              <p class="pg-kicker">${r.kicker}</p>
              <h3>${r.heading}</h3>
              <p>${r.text}</p>
              <span class="pg-link">${L.ui.readMore} <span aria-hidden="true">→</span></span>
            </div>
          </a>`).join("")}
        </div>`),

  contacts: (s) => wrap(s, `${sectionHead(s)}
        <div class="pg-contacts">${s.items.map(([key, about]) => {
          const p = person(key);
          return `
          <article class="pg-contact-card">
            <h3>${p.name}</h3>
            <p class="pg-org">${p.role}</p>
            <p>${about}</p>
            <a class="pg-contact-row" href="mailto:${p.email}"><span>${L.ui.email}</span>${p.email}</a>
            <a class="pg-contact-row" href="tel:${p.tel}"><span>${L.ui.phone}</span>${p.phone}</a>
          </article>`;
        }).join("")}
        </div>`),

  signup: (s) => {
    const u = L.ui.signup;
    const lovisa = person("lovisa");
    return wrap(s, `
        <div class="pg-signup">
          <div>
            <p class="pg-kicker">${u.kicker}</p>
            <h2>${u.heading}</h2>
            <ol class="pg-mini-steps">${u.steps.map(([strong, text]) => `
              <li><strong>${strong}</strong> ${text}</li>`).join("")}
            </ol>
            <a class="button" href="${mailto(lovisa.email, `${u.subject}: ${s.retreat}`, u.body(s.retreat))}">${u.button}</a>
          </div>
          <aside class="pg-signup-aside">
            <p class="pg-kicker">${u.questions}</p>
            ${s.people.map(person).map((p) => `
            <div class="pg-signup-person">
              <h3>${p.name}</h3>
              <a href="mailto:${p.email}">${p.email}</a>
              <a href="tel:${p.tel}">${p.phone}</a>
            </div>`).join("")}
          </aside>
        </div>`);
  },
};

function related(page) {
  if (!page.related?.length) return "";
  return `
    <section class="pg-section pg-related">
      <div class="pg-wrap">
        <p class="pg-kicker">${L.ui.related}</p>
        <div class="pg-related-grid">${page.related.map((id) => {
          const target = L.pages[id];
          return `
          <a class="pg-related-card" href="${href(id)}">
            <span class="pg-kicker">${target.hero.kicker}</span>
            <h3>${target.name}</h3>
            <p>${target.description}</p>
            <span class="pg-link">${L.ui.readMore} <span aria-hidden="true">→</span></span>
          </a>`;
        }).join("")}
        </div>
      </div>
    </section>`;
}

function ctaBand(page) {
  if (page.hideCta) return "";
  const cta = page.cta || L.ui.defaultCta;
  return `
    <section class="pg-cta">
      <div class="pg-wrap">
        <div>
          <h2>${cta.heading}</h2>
          <p>${cta.text}</p>
        </div>
        <a class="button light" href="${href(cta.href)}">${cta.label}</a>
      </div>
    </section>`;
}

function hero(h) {
  return `
    <section class="pg-hero ${h.image ? "has-image" : `calm tone-${h.tone || "sand"}`}">
      ${h.image ? `<div class="pg-hero-media">${img(h.image, h.alt, "100vw", { eager: true })}</div>` : ""}
      <div class="pg-wrap">
        <p class="pg-hero-kicker">${h.kicker}</p>
        <h1>${h.title}</h1>
        <p class="pg-hero-lead">${h.lead}</p>
      </div>
    </section>`;
}

function subpage(id) {
  const page = L.pages[id];
  for (const s of page.sections) if (!render[s.type]) throw new Error(`Okänd sektionstyp "${s.type}" på ${L.lang}/${id}`);
  return documentHtml({
    id,
    title: `${page.name} | ProDigma`,
    description: page.description,
    image: page.hero.image || "reflection-retreat",
    bodyClass: "page",
    main: hero(page.hero) + page.sections.map((s) => render[s.type](s)).join("") + related(page) + ctaBand(page),
    structured: [breadcrumb(id)],
  });
}

// ---------------------------------------------------------------------------
// Startsidan

function home() {
  const h = L.home;
  const lovisa = person("lovisa");
  const main = `
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">${h.hero.eyebrow}</p>
          <h1>${h.hero.title}</h1>
          <p>${h.hero.lead}</p>
          <div class="hero-actions">
            <a class="button" href="#kontakt">${h.hero.primary}</a>
            <a class="button secondary" href="#results">${h.hero.secondary}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="results">
      <div class="wrap">
        <div class="section-head">
          <p class="kicker">${h.results.kicker}</p>
          <h2>${h.results.heading}</h2>
          <p class="lead">${h.results.lead}</p>
        </div>
        <div class="results">${h.results.items.map(([title, text], i) => `
          <article class="result">
            <span class="num">${String(i + 1).padStart(2, "0")}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section alt" id="metod">
      <div class="wrap split">
        <div>
          <p class="kicker">${h.method.kicker}</p>
          <h2>${h.method.heading}</h2>
          <p class="lead">${h.method.lead}</p>
        </div>
        <div class="visual-method">
          <figure class="section-image">
            ${img("reflection-retreat", h.method.alt, "(max-width: 900px) 100vw, 50vw")}
            <figcaption>${h.method.caption}</figcaption>
          </figure>
          <div class="warm-panel">
            <p>${h.method.panel}</p>
            <div class="method-list">${h.method.steps.map(([title, text], i) => `
              <div class="method">
                <span class="mark">${i + 1}</span>
                <div>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </div>
              </div>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="erbjudanden">
      <div class="wrap">
        <div class="section-head">
          <p class="kicker">${h.services.kicker}</p>
          <h2>${h.services.heading}</h2>
        </div>
        <div class="services">${h.services.items.map(([title, text, id, label]) => `
          <article class="service">
            <div>
              <h3>${title}</h3>
              <p>${text}</p>
            </div>
            <a href="${href(id)}">${label}</a>
          </article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section alt" id="lovisa">
      <div class="wrap founder">
        <div class="founder-mark" aria-hidden="true">LM</div>
        <div>
          <p class="kicker">${h.founder.kicker}</p>
          <h2>${h.founder.heading}</h2>
          ${h.founder.body.map((p) => `<p>${p}</p>`).join("\n          ")}
          <a class="text-link" href="${href("vilka-vi-ar")}">${h.founder.link} →</a>
        </div>
      </div>
    </section>

    <section class="press-strip" aria-label="${h.press.label}">
      <div class="wrap">
        <p class="kicker">${h.press.kicker}</p>
        <ul class="press-list">${h.press.items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        <a class="text-link" href="${href("media")}">${h.press.link} →</a>
      </div>
    </section>

    <section class="quote-band">
      <div class="wrap">
        <div class="quote">${h.quote.text}</div>
        <p>${h.quote.sub}</p>
      </div>
    </section>

    <section class="section" id="kontakt">
      <div class="wrap">
        <div class="contact">
          <div>
            <p class="kicker">${h.contact.kicker}</p>
            <h2>${h.contact.heading}</h2>
            <p>${h.contact.text}</p>
          </div>
          <a class="button" href="mailto:${lovisa.email}">${lovisa.email}</a>
        </div>
      </div>
    </section>`;
  return documentHtml({
    id: "home",
    title: h.title,
    description: h.description,
    image: "leadership-workshop",
    bodyClass: "home",
    main,
    structured: [organization(), { "@context": "https://schema.org", "@type": "WebSite", name: "ProDigma", url: absUrl(L, "home"), inLanguage: L.hreflang }],
  });
}

// ---------------------------------------------------------------------------
// Bygg

const ids = ["home", ...Object.keys(sv.pages)];
for (const lang of LANGS) {
  const missing = Object.keys(sv.pages).filter((id) => !lang.pages[id]);
  if (missing.length) throw new Error(`${lang.lang} saknar sidor: ${missing.join(", ")}`);
}

// Ta bort gamla genererade HTML-filer så att inga döda sidor ligger kvar.
for (const lang of LANGS) {
  const dir = path.join(OUT, lang.dir);
  await mkdir(dir, { recursive: true });
  for (const file of await readdir(dir)) if (file.endsWith(".html")) await rm(path.join(dir, file));
}

let count = 0;
for (const lang of LANGS) {
  L = lang;
  ROOT = lang.dir ? "../" : "./";
  for (const id of ids) {
    await writeFile(path.join(OUT, relPath(lang, id)), id === "home" ? home() : subpage(id), "utf8");
    count++;
  }
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.flatMap((lang) => ids.map((id) => `  <url>
    <loc>${absUrl(lang, id)}</loc>
    <lastmod>${today}</lastmod>
${LANGS.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${absUrl(alt, id)}"/>`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${absUrl(DEFAULT_LANG, id)}"/>
  </url>`)).join("\n")}
</urlset>
`;
await writeFile(path.join(OUT, "sitemap.xml"), sitemap, "utf8");

// robots.txt tillåter crawling så att sökmotorer kan läsa noindex-taggen på sidorna.
await writeFile(path.join(OUT, "robots.txt"), `# Sidorna har ${INDEXABLE ? "index" : "noindex"} i <meta name="robots">.\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, "utf8");

const redirects = Object.entries(legacyRedirects)
  .map(([from, id]) => `${encodeURI(from)}  /${relPath(sv, id)}  301`)
  .join("\n");
await writeFile(path.join(OUT, "_redirects"), `# Gamla adresser från tidigare prodigma.se → nya sidor\n${redirects}\n`, "utf8");

console.log(`${count} sidor byggda (${LANGS.map((l) => l.short).join(" + ")}), sitemap.xml, robots.txt, _redirects. Indexering: ${INDEXABLE ? "PÅ" : "AV (noindex)"}`);
