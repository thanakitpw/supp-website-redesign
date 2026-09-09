# SUPP — Website Redesign

Next.js 15 (App Router) rebuild of the approved SUPP design prototype.
Every page is statically prerendered.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static prerender of all routes
npm start
```

## Structure

```
app/
  layout.tsx          Fonts, header/footer, site-wide metadata, Organization JSON-LD
  globals.css         The design's stylesheet, expanded 1:1 (see design/reference/)
  page.tsx            Home
  about/              About + team roster with flip cards and profile dialogs
  services/           Services, pricing, process
  blog/               SUPP Insights index
  contact/            Contact details + enquiry composer
  join-us/            Financial Life Partner recruitment
  sitemap.ts robots.ts manifest.ts not-found.tsx
components/           Header, footer, CTA, team card, advisor dialog, contact form, icons
lib/
  site.ts             Company details and navigation — single source of truth
  content.ts          Services, pricing plans, process steps, article teasers
  team.ts             Advisor roster and full biographies
  seo.ts              Per-page metadata + JSON-LD builders
public/images/        Photography and logos from the design
design/reference/     The prototype's original CSS and HTML, for re-verifying fidelity
```

## Design fidelity

The build was verified against the prototype by measuring the bounding box of
every element on both sites at a 1920px viewport and diffing them:

| Page | Prototype height | This build | Elements off by > 2px |
|---|---|---|---|
| `/` | 4299px | 4299px | 0 |
| `/about` | 6061px | 6061px | 0 |
| `/services` | 4965px | 4965px | 0 |
| `/blog` | 3449px | 3449px | 0 |
| `/contact` | 1978px | 1978px | 0 |
| `/join-us` | 6196px | 6196px | 0 |

Responsive behaviour was checked at 390 / 768 / 1024 / 1440px — no horizontal
overflow, and every grid collapses at the same breakpoints as the design.

Fonts are **DM Sans** (Latin) paired with **Noto Sans Thai**, self-hosted through
`next/font` and exposed as `--font-dm` / `--font-thai`, which is what the
stylesheet expects.

## SEO

Already in place:

- Unique `<title>` and meta description per page; one `<h1>` per page.
- Canonical URL, Open Graph and Twitter card on every page.
- JSON-LD: `FinancialService` + `WebSite` site-wide, plus `AboutPage` with the
  team as `Person` entries, `ItemList` of services, `OfferCatalog` for the
  pricing plans, `ContactPage`, `Blog`, `JobPosting` for the Financial Life
  Partner role, and `BreadcrumbList` on every sub-page.
- `/sitemap.xml`, `/robots.txt` (answer-engine crawlers allowed explicitly) and
  a web app manifest.
- `lang="th"`, semantic landmarks, a skip link, and `next/image` on all
  photography for Core Web Vitals.

**Before going live**, set the production origin in `lib/site.ts`:

```ts
url: "https://www.suppth.com",   // ← change if the domain differs
```

Everything else — canonicals, sitemap, JSON-LD `@id`s, OG URLs — derives from it.

Still to do once content exists:
- Blog posts are teasers only ("เร็ว ๆ นี้"). When articles are written, give each
  a route and `Article` JSON-LD, then add them to `app/sitemap.ts`.
- Add Google Search Console + Analytics, and submit the sitemap.
- Supply a purpose-made 1200×630 OG image; pages currently share the photography.

## Notes

- The contact form composes the enquiry as text and hands it to the visitor's own
  mail app — nothing is sent from the page, matching the prototype. Wiring it to
  a real endpoint is a separate task.
- `/join-us` links out to the existing Google Form.
- Six advisor cards are intentional placeholders for advisors still to be added;
  their copy lives in `lib/team.ts`.
