# Final SEO and AEO review

October 24, 2026. Reviewed the final local website in the Istanbul workspace. No commit, push, deployment, indexing submission, billing change, or outreach was performed.

## Changes in this pass

1. Added Pasadena to the tax-calculator, exemptions, and Measure I comparison search titles. Kept the approved visible headings and design.
2. Added CollectionPage and ItemList metadata to Tools & Guides, generated from the same ordered records as its visible cards. Metadata cannot silently drift from the directory.
3. Added Article images, article modification metadata, and Twitter image descriptions using the existing social preview. No invented publication dates or new visible attribution blocks.
4. Added `audit:links` to verify HTML destinations, fragments, downloaded assets, duplicate IDs, image alt attributes, and reachability from the homepage.
5. Applied the user-approved exemption answer to the website FAQ and matching HTML fact-sheet claim. The question now reads “Who is exempt from Measure PFD?” Existing fragment IDs remain unchanged. FAQPage, printable HTML, and llms.txt use that shared correction. Original PDF bytes were verified unchanged against HEAD.
6. Updated stale delivery documentation and the reading guide's description of the original PDF, which is no longer presented as identical to the corrected website FAQ.

## Search intent coverage

These are content targets, not measured keyword volumes or ranking claims.

| Destination | Search phrases served | Visitor task |
| --- | --- | --- |
| `/facts/` | Pasadena Measure PFD; what is the PFD measure | Get a direct overview and campaign FAQ |
| `/measure-pfd-calculator/` | Measure PFD calculator; Pasadena parcel tax calculator | Estimate added property tax and optional combined annual bill |
| `/measure-pfd-exemptions/` | PFD exemptions; Measure PFD tax exemption | Check possible exemptions against personal/property answers |
| `/measure-pfd-renters/` | Measure PFD rent increase; PFD renter calculator | Model a full-tax pass-through for entered square footage |
| `/measure-pfd-vs-measure-i/` | Measure PFD vs Measure I; Pasadena sales tax vs parcel tax | Compare what each tax applies to |
| `/measure-pfd-fire-station-funding/` | what does Measure PFD fund; Pasadena Stations 33 and 37 | Understand proposed uses and spending rules |
| `/pasadena-property-tax-guide/` | Pasadena property taxes; Pasadena property-tax bill | Understand assessed-value taxes and separate charges |
| `/measure-pfd-pass-or-fail/` | what happens if PFD fails; PFD vote requirement | Understand both outcomes and next steps |
| `/pasadena-city-limits/` | Pasadena city limits; is my property in Pasadena | Find the City address lookup and boundary-confirmation route |
| `/vote/` | how to vote on PFD; Pasadena voting locations | Reach official registration, voting, and tracking tools |

## Validation evidence

| Check | Result |
| --- | --- |
| Astro diagnostics | 0 errors, warnings, or hints |
| Production build | 20 HTML pages, including 17 public canonical pages |
| Metadata and schema | Unique titles/descriptions, one H1, absolute canonicals, valid JSON-LD, resource-list parity, approved FAQ parity |
| Production crawler files | Allow crawling; 17 canonical sitemap URLs |
| Vercel preview build | noindex, disallowed crawling, empty sitemap |
| Original downloads | PDF bytes unchanged; noindex headers configured for deployment |
| Copy audit | 20 rendered HTML pages passed |
| Internal links and assets | 456 links and 187 asset references resolve; all public resources reachable |
| Responsive browser audit | 72 page/viewport combinations passed at 390, 768, 1440, and 1920 pixels |
| Resource interactions | 62 browser checks passed, including keyboard use, validation, announcements, static fallback, and privacy guards |
| Tool/report utility tests | 19 tests passed |
| Local preview | http://127.0.0.1:4392/ |

Credits remains reachable by its URL and sitemap, but has no navigation link at the user's explicit request. The failed release checks below are deployment differences, not local validation failures.

Evidence: `.context/link-audit.json`, `.context/browser-audit.json`, `.context/reference-browser-audit-4396.json`, `.context/release-audit.json`, and `.context/screenshots/`.

## Production boundary

A fresh read-only audit of https://www.pfdno.com passed 11 of 25 intended-release checks. Production still serves the previous version. The nine new library/resource routes, expanded sitemap, two ad-alias redirects, and PDF indexing headers are not live. Do not request indexing of the new pages until they are deployed and this audit passes.

After deployment:

1. Run `SITE_UNDER_TEST=https://www.pfdno.com npm run audit:release` with the gstack browser binary available.
2. Inspect the homepage, Facts, resource library, calculator, exemptions, and renter guide in Search Console. Confirm Google's selected canonical and rendered HTML.
3. Submit `https://www.pfdno.com/sitemap.xml` in the existing Google and Bing properties. Request indexing for priority new pages where appropriate.
4. Review query/page reports weekly through the election. Keep paid custom-event reporting disabled as requested.

Authenticated Search Console/Bing data, search volumes, backlinks, field Core Web Vitals, and ChatGPT citation performance remain unverified. Generic browser access does not prove that a hosting firewall accepts every crawler IP. No field-performance or ranking improvement is inferred from a local test.

## Content and AEO boundaries

The exemption correction is approved and applied. Other claims listed in `seo-content-review.md`, including the $1,700 combined-tax figure and categorical future-service statements, still need evidence or separate approval. Original PDFs intentionally preserve their supplied content, including the old exemption claim; replacement artwork was not authorized.

The site retains direct answers, readable static HTML, descriptive internal links, accessible calculators, and consistent metadata. No extra blog pages, visible sources, breadcrumbs, eyebrows, transcript blocks, or paid analytics were added. FAQ schema is kept in sync with visible answers; no Google FAQ rich-result promise is made. llms.txt is maintained as a reading guide, not treated as a ranking mechanism.

Google's [AI features guidance](https://developers.google.com/search/docs/appearance/ai-features) recommends the same crawlability, useful content, internal linking, and content/schema consistency used for ordinary search. [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots) distinguishes OAI-SearchBot discovery from GPTBot training; the current wildcard robots policy permits both. [Google Article guidance](https://developers.google.com/search/docs/appearance/structured-data/article) informed the applicable article metadata improvements. These documents were checked during this pass.
