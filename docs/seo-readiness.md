# Search and AI discovery

This document preserves earlier implementation milestones. For the final 17-page implementation, accepted presentation changes, approved exemption correction, and current validation counts, use [final SEO audit](final-seo-audit.md) and [delivery status](seo-delivery-status.md). Historical counts and descriptions below are superseded by those reports.

## Implemented

- Public origin: `https://www.pfdno.com/`, confirmed by the client. `PUBLIC_SITE_URL` can override it in the build environment; only an HTTPS origin is accepted.
- Thirteen public pages have unique titles/descriptions, absolute canonical URLs, Open Graph/Twitter metadata, and Organization, WebSite, and page structured data. Interior pages include breadcrumbs in the structured data.
- `/facts/` contains 13 server-rendered campaign FAQs, preceded by a sourced overview and reference-guide links, with stable anchors and links to official sources. FAQPage answers come from the same data as the visible answers, printable HTML, and reading guide. Supplied PDFs are preserved separately. Campaign positions and estimates remain attributed.
- `/sitemap.xml` lists the thirteen canonical public pages. Print routes and the 404 page are excluded and marked `noindex`.
- Production `/robots.txt` allows public search and AI crawlers and advertises the sitemap. Local development and Vercel preview/development builds disallow crawling and use `noindex` metadata; preview sitemaps are empty.
- `/llms.txt` is an optional plain-text reading guide containing canonical links, source links, campaign identity, and the same FAQ answers. It is not required by search engines and does not guarantee AI citations.
- The three-page downloadable FAQ has selectable text and source links, retains the full committee/top-funder disclosure, and omits Matt's contact details. The website's contact page remains available.

## Verification

```sh
npm run check
npm run build
npm run audit:copy
npm run audit:seo
VERCEL_ENV=preview npm run build -- --outDir .context/preview-seo-build
VERCEL_ENV=preview SEO_BUILD_DIR=.context/preview-seo-build npm run audit:seo
```

The SEO audit checks canonical origins, unique metadata, production/preview indexing, sitemap coverage, structured-data validity, FAQ parity with visible HTML, and the PDF source's disclosure/contact treatment. Browser audits cover responsive layout and interactions; PDF rendering is reviewed separately.

## After deployment

1. Confirm the production domain serves the updated indexable pages and crawler files without an access challenge, and that alternate domains redirect to the preferred domain.
2. Verify ownership in Google Search Console and Bing Webmaster Tools, then submit `https://www.pfdno.com/sitemap.xml`. Account access and submission are outside this repository change.
3. Inspect the homepage and Facts URL, monitor indexing and crawl errors, and check that any hosting/WAF bot settings permit the intended search crawlers.

The October 24 public audit verified indexable production pages. Repository changes alone do not change the live site; these settings take effect after deployment. No improved rankings, new-page indexing, AI citations, or traffic outcomes are claimed.

## Research basis

Reviewed September 30, 2026:

- [City of Pasadena ballot-measure packet](https://www.cityofpasadena.net/city-clerk/wp-content/uploads/sites/21/2026-General-Election-Ballot-Measure-Information.pdf): ballot question, Resolution 10203, proposed ordinance, rates, exemptions, duration, and oversight.
- [City of Pasadena 2026 general election](https://www.cityofpasadena.net/city-clerk/general-election-2026/): election date and voter-resource links.
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): standard SEO and accessible, useful content apply to AI search; no special AI file or schema is required.
- [Google Search documentation updates](https://developers.google.com/search/updates): FAQ rich results were removed in May 2026. FAQPage is used for semantic clarity, without promising a Google rich-result feature.
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots): OAI-SearchBot supports search discovery; GPTBot training controls are separate. The public wildcard allow policy permits both.

FAQ topics reflect common informational questions supported by the ordinance, not measured search-volume research. The campaign's combined $1,700 estimate still lacks an independently verified calculation; adding schema does not change its evidentiary status.


## October 24 reference-resource implementation

Five static guides add a browser-only calculator, ordinance-based exemptions, a Measure I comparison, a station-funding/oversight explanation, and a County-sourced property-tax guide. Shared source records and genuine review dates feed the guides, Article schema, and sitemap modification dates. Publication dates are not invented: set datePublished only when the first public publication date is known. New content preserves the existing campaign FAQ and supplied PDFs pending editorial review; see `docs/seo-content-review.md`.

The Facts overview and jump links precede the campaign FAQ and fact sheet. Reference guides are linked from the homepage, Facts hub, and commentary pages. Visible breadcrumbs mirror structured data. At the user’s request, underneath-video transcript blocks have been removed. In-player caption tracks remain available. VideoObject markup covers the two captioned videos, with duration, content URLs, thumbnails, and verified publication dates. See the evidence below.

The shared logo has a lossless WebP alternative with identical decoded RGBA pixels. The original PNG remains available for external metadata. Aggregate events and the privacy notice describe calculator use, download clicks, and known official-source clicks. See `docs/seo-measurement.md` for the account-dependent baseline, event semantics, citation sample, outreach candidates, and post-election workflow.

The two supplied PDFs remain byte-for-byte unchanged and downloadable. Vercel response headers now specify `X-Robots-Tag: noindex, follow` to keep the maintained HTML resources as the search destinations. No canonical equivalence is asserted between a full campaign document and the factual overview. Hosting headers require deployment and a live response check.

Validation: `npm run test:calculator`, `npm run check`, `npm run build`, `npm run audit:seo`, `npm run audit:copy`, browser checks, and preview indexing audit. A successful automated copy audit is a style check, not independent factual verification.


### Local verification recorded October 24

- Astro check: zero diagnostics; production build, copy audit, and 12-page SEO audit passed.
- Preview build: 12-page SEO audit passed, including disabled resource-event flag and empty sitemap.
- Calculator tests: three groups covering official examples, malformed/unsafe inputs, and decimal rounding.
- Existing form server tests: eight groups passed; existing browser interactions: 34 passed with mocked email transport.
- Responsive audit: 39 page/viewport checks at 390, 768, and 1440 pixels; representative desktop/mobile screenshots visually reviewed.
- Reference browser audit: keyboard calculations, error focus/announcements, input privacy, aggregate event payloads, 320px layouts, source/download actions, caption availability, and initial HTML fallback. For event-transport coverage, build with `PUBLIC_RESOURCE_ANALYTICS_ENABLED=true` and run with `EXPECT_EVENTS=true`; leave both disabled for default production, development, and Vercel-preview builds. Event transport is intercepted in the test, so this does not establish receipt in the Vercel dashboard.
- Static link crawl: 305 internal links/fragments across 12 public pages resolved.
- Original campaign document data, caption tracks, and supplied PDFs remain unchanged.

Commands (after starting the relevant local server):

```sh
PREVIEW_URL=http://127.0.0.1:4392 node scripts/reference-browser-audit.mjs
PREVIEW_URL=http://127.0.0.1:4393 node scripts/reference-browser-audit.mjs
BROWSE_BIN="$HOME/.codex/skills/gstack/browse/dist/browse" PREVIEW_URL=http://127.0.0.1:4392 node scripts/browser-audit.mjs
```

Browser script disabling is not exposed by the installed gstack CDP allowlist. The no-JavaScript fallback was verified in the initial HTML (static examples, formula, noscript notice, disabled unhydrated submit), not through an interactive JavaScript-disabled browser session. No deployment, Search Console changes, outreach, or account-setting changes were performed.

## Completion pass: homepage order, video evidence, and release tooling

- “Understand the proposal” follows the Paparian feature and precedes “Another bill lands at home.”
- `/pasadena-property-tax-guide/` explains bill categories using the County's annotated bill, distinguishes PFD from Measure I, and explicitly avoids a total-household-tax estimate.
- The first commit containing both captioned videos is `69dc6367ab2ef6362596146cf3e831eabe1c65d9`. GitHub deployment `7256359021` for that exact commit is Production; its successful status is timestamped `2026-10-22T15:30:54Z`. This is the publication time on this website, not an inferred filming date. Both MP4 files measure 30.016 seconds using ffprobe. Public matching poster files remain available. Shared video records feed VideoObject markup. Google's [VideoObject documentation](https://developers.google.com/search/docs/appearance/structured-data/video) informed the fields; markup alone does not guarantee video indexing or a rich result.
- `npm run seo:baseline` collects read-only authenticated Search Console evidence when an OAuth credential is available. `npm run test:measurement` tests date windows, query classification, weighted metrics, and pagination.
- `npm run audit:release` uses gstack to compare actual hosting responses with the intended production sitemap, checking canonicals, indexability, robots, PDF headers, print exclusions, and both ad aliases with synthetic query parameters. It does not deploy or submit URLs for indexing. Run `SITE_UNDER_TEST=https://www.pfdno.com npm run audit:release` after deployment.
- The results route is implemented but generates no page, links, or sitemap entry while `src/data/election-results.json` contains no reports. `npm run test:results` verifies the publication gate. Follow `docs/election-results-publication.md` when official results exist.

Authenticated account checks subsequently confirmed Web Analytics data, but custom-event reporting requires a paid plan unavailable to this project (HTTP 402). Event instrumentation is now opt-in via `PUBLIC_RESOURCE_ANALYTICS_ENABLED=true`; ordinary page views remain enabled. The privacy notice follows that flag. No billing changes were made.

The first live release check intentionally ran before deployment: 11/21 checks passed. The five new routes, expanded sitemap, ad aliases, and PDF headers are absent on the current production release, as expected. Evidence is `.context/release-audit.json`. This is a release-state difference, not a failed local build. Re-run after deployment; do not request indexing while the live checks fail.

Current resource presentation: the homepage features the calculator and property-tax guide, with Learn more linking to `/resources/`. Tools & Guides appears in the header and footer. The library contains eight guides and How to vote; FAQ and commentary remain in the main navigation rather than tiles. Campaign PDFs sit in quieter rows below the primary tiles. Visible breadcrumbs, section shortcuts, and citation blocks are removed from all guides. The calculator includes optional annual-bill comparison and square-footage help, and the exemptions guide includes a local-only checklist. See `docs/resource-tool-verification.md` for the additional tools and verified reference material.

Facts page presentation: removed the jump-link row, overview citations and review note, and source-list section at the user’s request. Detailed resource guides also omit visible citations; downloads remain in the dedicated resource library.

Presentation update: removed publication/date bylines, visible publisher/review labels, repeated editorial attribution captions, and campaign-versus-endorsement disclaimers across the public pages. Article dates remain in metadata; substantive election deadlines and official report timestamps remain in content.

Layout refinement: intro paragraphs and subheaders use their full container width. Shared desktop/mobile spacing tokens separate headings, copy, sections, and panel content. All 14 public pages plus the 404 page passed four-viewport margin and overflow checks (60 combinations) against the current static build.
