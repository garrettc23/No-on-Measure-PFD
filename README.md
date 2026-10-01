# No on Measure PFD

A local Astro website for review. Home, Facts & FAQ, former Mayor Bill Paparian’s commentary, Join Us, Privacy, photography credits, and printable FAQs.

## Run locally

Requires Node 22.12+ and npm 9.6.5+.

```sh
npm ci
npm run dev
```

Open http://localhost:4321. The server binds to the local machine only.

```sh
npm run check
npm run build
npm run audit:copy
npm run audit:seo
npm run preview
```

`dist/` is the static output. Form previews validate in the browser, display an explicit non-submission message, and clear fields. They send no requests, collect no consent, and use no browser storage. Buttons are disabled until the preview handler is attached. Fonts and photographs are local. Vercel Web Analytics (`@vercel/analytics`) counts page views without cookies; enable it under the project’s Analytics tab in Vercel.

## Content and integrations

- `src/data/campaign.ts`: shared facts, FAQs, sources, contact details, and optional donation settings.
- `src/data/paparian.ts`: client-supplied commentary excerpts, publication date, and original source link.
- `src/styles/global.css`: responsive design and reusable styles, with self-hosted Archivo headings and Public Sans body text.
- `docs/content-review.md`: source verification, corrections to the brief, photo licensing, and launch dependencies.

Production builds use `https://www.pfdno.com/` for canonical URLs, social metadata, structured data, and the sitemap. Set `PUBLIC_SITE_URL` in the build environment to change that origin. Local development and Vercel preview/development builds remain `noindex` with crawling disabled; production builds allow search and AI crawlers. See `docs/seo-readiness.md` for validation and post-deployment steps. Donate appears only after `donationUrl` is configured. Live form handling and SMS consent remain launch tasks.

## Fact sheet, FAQ PDF, and social image

The client’s approved fact-sheet PDF is pending. Place it in `public/downloads/` and set `campaign.factSheetUrl` to its public path when ready; links remain hidden while that setting is empty. The previous generated fact sheet has been withdrawn.

The FAQ print route reads the same 18 questions and answers as the Facts page, with official sources and clearly attributed campaign estimates. The download retains the committee and top-funder disclosure but omits campaign contact details. Run the dev server, then:

```sh
BROWSE_BIN="$HOME/.agents/skills/gstack/browse/dist/browse" node scripts/generate-downloads.mjs
```

This uses gstack browse to generate the three-page FAQ and 1200 × 630 social image in `public/`. The expanded FAQ has one page each for basics, costs/exemptions, and funding/accountability. Rebuild after generation so `dist/` contains the updated files. Do not edit the PDFs directly.

## Browser verification

```sh
BROWSE_BIN="$HOME/.agents/skills/gstack/browse/dist/browse" node scripts/browser-audit.mjs
BROWSE_BIN="$HOME/.agents/skills/gstack/browse/dist/browse" node scripts/interaction-audit.mjs
```

Checks each main page at 390, 768, and 1440 pixels, and saves screenshots plus results under `.context/`. `PREVIEW_URL` can override the local URL. Browser interaction checks cover menu keyboard behavior, FAQ expansion, invalid and valid form previews, the five-field signup and optional phone validation, and the tax-estimate footnote link. Results and screenshots in `.context/` are generated locally and are not committed.
