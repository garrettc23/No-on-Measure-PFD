# No on Measure PFD

An Astro campaign website with email signup and contact forms. Home, Facts & FAQ, How to vote, former Mayor Bill Paparian’s commentary, Join Us, Privacy, photography credits, printable FAQs, a parcel-tax calculator, and sourced exemption, comparison, and fire-funding guides.

## Run locally

Requires Node 22.12+ and npm 9.6.5+.

```sh
npm ci
npm run dev
```

Open the `http://127.0.0.1:<port>` address printed by Astro (normally `http://127.0.0.1:4321`). The server binds to the local machine only; use that address because `localhost` may reach another server through IPv6.

```sh
npm run check
npm run build
npm run audit:copy
npm run audit:seo
npm run preview
```

`dist/` is the static page output. The Vercel function at `api/forms.mjs` validates form submissions and emails them to Matt Klink through Resend. Form buttons stay disabled until the browser handler attaches. Entries are cleared only after the email provider accepts the request; failures preserve them for retry. Submissions are not stored in a website database or browser storage. Fonts and photographs are local. Vercel Web Analytics (`@vercel/analytics`) counts page views without cookies; enable it under the project’s Analytics tab in Vercel.

## Content and integrations

- `src/data/campaign.ts`: shared facts, FAQs, sources, contact details, and optional donation settings.
- `src/data/voting.ts`: verified official voting tools and instructions for the ungated `/vote/` guide.
- `src/data/paparian.ts`: client-supplied commentary excerpts, publication date, and original source link.
- `src/data/starNews.ts`: client-supplied editorial excerpts and original article metadata for `/pasadena-star-news/`.
- `src/components/CampaignVideo.astro`: shared click-to-play player with English captions and independent controls. Kitchen Table appears in the homepage hero; a still photograph of Pasadena homes appears beside “Another bill lands at home”. Bill Paparian’s video appears on the homepage and `/bill-paparian/`, sharing the gray portrait poster through `PaparianVideo.astro`. Video files and caption tracks are in `public/videos/`; the homes photograph and Paparian portrait poster are optimized from `src/assets/` through Astro.
- `src/styles/global.css`: responsive design and reusable styles, with self-hosted Archivo headings and Public Sans body text.
- `docs/content-review.md`: source verification, corrections to the brief, photo licensing, and launch dependencies.

Production builds use `https://www.pfdno.com/` for canonical URLs, social metadata, structured data, and the sitemap. Set `PUBLIC_SITE_URL` in the build environment to change that origin. Local development and Vercel preview/development builds remain `noindex` with crawling disabled; production builds allow search and AI crawlers. See `docs/seo-readiness.md` for validation and post-deployment steps. Donate appears only after `donationUrl` is configured. Email delivery requires the environment settings below. There is no SMS integration or automated text signup.

## Google Ads homepage URL

`https://www.pfdno.com/home` and `/home/` redirect permanently to `/` through `vercel.json`. The homepage remains the canonical URL; the alias is not a separate page or sitemap entry. Vercel [passes query parameters through redirects](https://vercel.com/docs/routing/redirects), preserving `gclid` and UTM parameters.

Astro's local dev server mirrors these redirects for testing at `/home/` (Astro enforces the trailing slash before custom middleware); the static preview server does not. The hosting rules for both paths take effect after deployment. Verify both paths with a test query string on the deployed site. If Google Ads uses a URL-based page-view conversion, configure it to match the final homepage URL, not only `/home`; a redirect does not itself configure or verify conversion tracking.

## Fact sheet, FAQ PDF, and social image

The original client-supplied PDFs are published at `/downloads/measure-pfd-fact-sheet.pdf` (two pages) and `/downloads/measure-pfd-faq.pdf` (three pages). Both are linked as downloads from Facts & FAQ; the fact sheet is also linked from the contact section. Replace these files only with supplied revisions, never with generated HTML exports.

`src/data/campaignDocuments.ts` preserves the October 8 document text and emphasis except for the exemption correction approved October 24. Its paragraph data feeds the fact sheet, 13 FAQ accordions, FAQ structured data, printable HTML FAQ, and `llms.txt`. The fact sheet's Paparian clipping is represented by the matching readable quotation from the FAQ. The HTML print route retains the website disclosure; the supplied PDFs remain unchanged.

To regenerate only the 1200 × 630 social images, run the dev server, then:

```sh
BROWSE_BIN="$HOME/.agents/skills/gstack/browse/dist/browse" node scripts/generate-downloads.mjs
```

This script leaves both campaign PDFs untouched. Rebuild after changing public assets so `dist/` includes them.

## Browser verification

```sh
BROWSE_BIN="$HOME/.agents/skills/gstack/browse/dist/browse" node scripts/browser-audit.mjs
BROWSE_BIN="$HOME/.agents/skills/gstack/browse/dist/browse" node scripts/interaction-audit.mjs
```

Checks each main page at 390, 768, 1440, and 1920 pixels, and saves screenshots plus results under `.context/`. `PREVIEW_URL` can override the local URL. Browser interaction checks cover menu keyboard behavior, FAQ expansion, invalid entries, mocked email success/failure, retry behavior, the five-field signup and optional phone validation, and the tax-estimate footnote link. Results and screenshots in `.context/` are generated locally and are not committed.

## Email submissions to Matt

Both forms send only to `matt@klinkcampaigns.com`, with the visitor's validated email as `reply_to`. The recipient is fixed on the server and cannot be supplied by the browser. Emails contain the submitted fields, with a distinct subject for signup versus contact.

1. Verify a sending domain in Resend and create an API key with sending access.
2. Set `RESEND_API_KEY` and `CAMPAIGN_FROM_EMAIL` in Vercel's production environment. The latter must be a verified sender, for example `Vote NO on Measure PFD <forms@pfdno.com>` **after that domain is verified**. Never use a `PUBLIC_` prefix for credentials.
3. For localhost, copy `.env.example` to `.env`, add the same settings, and restart `npm run dev`. Astro's local middleware serves the same handler at `/api/forms/`. `astro preview` serves static files only and does not run the email endpoint.
4. Deploy through the normal review flow. A plain static-file host cannot deliver forms; Vercel must deploy `api/forms.mjs` alongside the Astro output.
5. Verify a clearly labeled test submission arrives in Matt's inbox and that replying addresses the visitor. Provider acceptance is not proof of inbox delivery. Review the provider delivery log for failures/bounces.

Missing configuration returns a failure, never a false success. The handler uses server validation, origin checks, a hidden spam field, a 16 KB body limit, a provider timeout, and Resend idempotency keys for retries. Its five-attempts-per-ten-minutes rate limit is **per running instance**; use Vercel Firewall rate limiting for distributed production abuse protection. No personal information or credentials are deliberately logged by the handler.

Run `npm run test:forms` for mocked server tests. The browser interaction audit also mocks form transport and never emails Matt. Real credentials are not needed for either test suite. Keep credentials out of git and chat.

## Reference guides and analytics

Shared reference sources and review dates live in `src/data/guides.ts`. The calculator runs entirely in the browser, with server-rendered examples and no personal data collection. Run `npm run test:calculator` for arithmetic and invalid-input coverage. Campaign-copy proposals are in `docs/seo-content-review.md`; measurement, account-dependent launch checks, and post-election tasks are in `docs/seo-measurement.md`. No guide publication date or video upload date is inferred from file timestamps.

Additional tools: the calculator includes an optional current-bill comparison and expandable square-footage walkthrough. The exemptions guide includes a local-only checklist; run `npm run test:exemptions` for its recommendation logic. The pass-or-fail guide is `/measure-pfd-pass-or-fail/`. See `docs/resource-tool-verification.md` for source verification, privacy boundaries, and presentation rules.

Design preference: do not add eyebrow or kicker labels above headings. Use the heading directly.

Layout: use the shared `.container` width and gutters for page sections. Full-width guide panels, editorial quotes, and section dividers must align with that content edge; do not add narrower page or panel width caps.

Content and spacing: answer question headings directly before links to further reading. When removing a divider, collapse its stacked margin/padding into one section gap instead of leaving the former divider spacing behind.

Spacing scale: use `--space-copy` for heading/copy gaps, `--space-content` within content groups, `--space-section` between sections, and `--space-panel` inside panels. Intro text and subheaders use the full width of their container or grid column, with no separate text-width cap. Keep the resource library focused on tools first and preserve the homepage’s two-line firefighter headline.

Actions: use solid primary buttons and outlined secondary buttons (including Get the facts). Standalone editorial and op-ed actions use buttons. Do not add decorative arrow or external-link icons; retain functional icons such as download and disclosure chevrons.

Action shape: use the shared `--radius-action: 8px` token for every button, including Watch video, menu controls, and fullscreen controls. Use rounded rectangles, never pill-shaped actions.

Button labels are centered horizontally and vertically. Avoid trailing whitespace nodes after screen-reader-only labels inside flex buttons; these can create an invisible flex gap and shift the visible label off-center.

Resource tile buttons align to the left edge of the card's heading and description. Keep the text inside each button centered.

Guide names use natural questions people ask, such as “What are Pasadena’s current property taxes?” Keep the Tools & Guides tiles, related-resource tiles, homepage features, and guide headings synchronized through `src/data/guides.ts`. Use the official name Measure I, not Measure 1.

Google Ads: `src/components/GoogleTag.astro` installs the base tag `AW-18535242073` once in the head of both shared layouts and the standalone social-image page, including print pages. It runs only when Astro builds for production with `VERCEL_ENV=production`; local development and Vercel previews omit it. The homepage also sends the supplied “Page view (1)” conversion once per page load, immediately after the base tag, to `AW-18535242073/DwMFCImxo6kdENmypYZF` with value `1.0` and currency `USD`. Visits through `/home` and `/home/` count after redirecting to `/`; other pages do not send this conversion. This measures a homepage view, not a form submission or donation. No enhanced conversions or form/calculator values are sent. After deployment, verify the live conversion request and Google Ads/Tag Assistant status separately from dashboard attribution. Vercel custom events remain disabled independently.

Copy: address the reader directly and name the action or benefit (for example, “See your estimated tax increase”). Keep natural articles such as “the” where they help. Avoid generic instructions about reading provisions or assumptions. Preserve exact quotations, legal disclosure, supplied campaign documents, and distinctions between proposals and current taxes.

Resource-page presentation: do not render visible breadcrumbs, section shortcut menus, source lists, inline citation links, or Sources jump links on calculators and reference guides. Source records remain internal for factual maintenance. Keep functional voting tools and requested editorial-reading buttons.

Resource navigation: use `ResourceTiles.astro` for featured resources, related guides, and the resource library. Keep FAQ and commentary pages in the main navigation rather than resource tiles; retain How to vote in resource lists. Place campaign PDF downloads after the grid in a quieter “Learn more about Measure PFD.” section with compact white rows and right-aligned buttons. Preserve the calculator-first order and PDF download attributes.

Surface shape: use `--radius-surface: 0px` for sharp corners on cards, callout panels, calculator panels, form containers, tables, and media frames. Preserve the original 1–2px input corners. Buttons retain `--radius-action: 8px`. Full-width page bands and fullscreen video remain flush with the viewport.

The city-limits guide (`/pasadena-city-limits/`) links to Pasadena’s address lookup and a City Service Center fallback. The renter guide (`/measure-pfd-renters/`) includes a single-input rent scenario calculator using a 1,200-square-foot example, explains tax liability versus rental rules, and links to the public Rental Registry and housing counselors. Both use the shared guide registry for resource tiles, metadata, sitemap, and reading-guide links. Verification notes live in `docs/resource-tool-verification.md`.

Calculator copy: name Measure PFD in headings, search metadata, and entry points. State the visitor’s task directly: calculate your PFD property tax, check your PFD exemptions, or estimate your PFD rent increase. Keep exemption results conditional on City confirmation and rent figures conditional on the stated pass-through scenario. Shared guide titles and descriptions keep homepage, library, and related cards consistent.

Final SEO validation: after `npm run build`, run `npm run audit:seo`, `npm run audit:links`, and `npm run audit:copy`. The link audit checks local destinations/fragments, asset references, duplicate IDs, image alt attributes, and resource reachability. See `docs/final-seo-audit.md` for the final review and release boundaries.
