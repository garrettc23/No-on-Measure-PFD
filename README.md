# No on Measure PFD

A local Astro website for review. Home, Facts & FAQ, Join Us, Privacy, photography credits, and printable FAQs.

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
npm run preview
```

`dist/` is the static output. Form previews validate in the browser, display an explicit non-submission message, and clear fields. They send no requests, collect no consent, and use no browser storage. Buttons are disabled until the preview handler is attached. Fonts and photographs are local. No analytics are installed.

## Content and integrations

- `src/data/campaign.ts`: shared facts, FAQs, sources, contact details, and optional donation/domain settings.
- `src/styles/global.css`: responsive design and reusable styles.
- `docs/content-review.md`: source verification, corrections to the brief, photo licensing, and launch dependencies.

The local build is deliberately marked `noindex`. No production domain is invented. Donate appears only after `donationUrl` is configured. Live form handling, SMS consent, public hosting, and final campaign disclosures remain launch tasks.

## Fact sheet, FAQ PDF, and social image

The client’s approved fact-sheet PDF is pending. Place it in `public/downloads/` and set `campaign.factSheetUrl` to its public path when ready; links remain hidden while that setting is empty. The previous generated fact sheet has been withdrawn.

The FAQ print route reads the same shared content as the Facts page. Its substantive content is awaiting the client’s briefing. Run the dev server, then:

```sh
BROWSE_BIN="$HOME/.agents/skills/gstack/browse/dist/browse" node scripts/generate-downloads.mjs
```

This uses gstack browse to generate the two-page FAQ and 1200 × 630 social image in `public/`. Rebuild after generation so `dist/` contains the updated files. Do not edit the PDFs directly.

## Browser verification

```sh
BROWSE_BIN="$HOME/.agents/skills/gstack/browse/dist/browse" node scripts/browser-audit.mjs
BROWSE_BIN="$HOME/.agents/skills/gstack/browse/dist/browse" node scripts/interaction-audit.mjs
```

Checks each main page at 390, 768, and 1440 pixels, and saves screenshots plus results under `.context/`. `PREVIEW_URL` can override the local URL. Browser interaction checks cover menu keyboard behavior, FAQ expansion, invalid and valid form previews, the five-field signup and optional phone validation, and sharing. Results and screenshots in `.context/` are generated locally and are not committed.
