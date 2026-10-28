# SEO and AEO delivery, October 27, 2026

## Implemented

The existing ballot-search pages now have distinct search intent, clearer titles and internal links. The homepage hero is preserved. The eight explanatory guides include visible official-source links mirrored in Article citations. The Measure I comparison now includes a funding timeline distinguishing appropriations, completed renovations, estimates, and unfunded station replacements. No additional competing article or dependency was added.

Primary funding evidence reviewed:

- [Adopted FY 2027 to 2031 municipal facilities](https://www.cityofpasadena.net/public-works/wp-content/uploads/sites/29/Tab-03-Municipal-Building-and-Facilites.pdf), PDF page 4, printed page 1.2: project 71911 has $7.675 million appropriated through FY 2026, $1.95 million unfunded, and histories of completed improvements. These are not actual expenditure totals.
- [Future projects](https://www.cityofpasadena.net/public-works/wp-content/uploads/sites/29/Tab-17-Future-Projects-1.pdf), PDF pages 6–7, printed pages 1.19–1.20: full Station 37 and 33 replacements are unfunded, with planning estimates of $30 million and $60 million respectively. The scopes and estimates must not be conflated with the different figures on the City's PFD outreach page.
- [Proposed ordinance](https://www.cityofpasadena.net/fire/wp-content/uploads/sites/25/MEASURE-PFD-RESOLUTION-PARCEL-TAX-MEASURE.pdf), sections 4.110.130–190: exemptions, uses, station reconstruction, baseline and reporting requirements.

Disputed campaign-document edits remain separately reviewable in `docs/seo-content-review.md`, per the user's explicit scope. The original PDFs, quotations, captions, and homepage hero are unchanged. New source links do not independently verify every historical campaign claim. The $1,700 estimate and other flagged assertions should be resolved before further syndication of those materials.

## Measurement available now

Vercel production export, collected October 28 at 01:14 UTC (October 27 Pacific), requested September 29 00:00 UTC through October 27 00:00 UTC:

- 2,278 reported visitors; 4,179 pageviews.
- Facts: 283 visitors / 414 pageviews. Calculator: 17 / 20. Voting-outcome guide: 4 / 6. Funding guide: 2 / 2.
- Six of seven API reports returned; custom events were unavailable. No paid analytics upgrade was made.
- No named AI referrers were returned. This is not proof of zero AI referrals or citations.
- Traffic includes advertising and unattributed visits. It cannot establish organic-search growth. Page visitor counts are not additive.
- Private exports: `.context/vercel-baseline/2026-10-28T01-14-14-907Z/`.

Search Console opened its public landing page rather than an authenticated property. No GSC token is available. URL inspection and Google indexing requests were not performed. The export script now inspects all four target pages and retains query-by-page rows, so the ranking page can be observed rather than assumed from screenshots.

An anonymous Perplexity query for “What is Pasadena Measure PFD?” returned HTTP 403. No answer or citation result was collected; do not score this as an absence of citation.

## IndexNow

`npm run seo:indexnow` is a dry run using the production sitemap. After deployment, `npm run seo:indexnow -- --submit <canonical URLs>` checks the live public key, robots directives, and self-referencing canonicals before notifying participating search engines. The verification key is public by design. Submit after meaningful changes, not repeatedly on a timer. A 200/202 response acknowledges the notification; it does not prove indexing. Google indexing still requires its own Search Console workflow.

## Monitoring through election week

When Search Console authorization is available, run `GSC_END_DATE=YYYY-MM-DD GSC_DAYS=7 npm run seo:baseline` with credentials supplied securely in the environment. Use the latest complete reporting day. Compare the exact queries “measure pfd,” “no on measure pfd,” and “yes on measure pfd,” plus Pasadena firefighter variants, across query/page rows, devices, clicks, impressions, CTR, and impression-weighted position. Preserve all periods; do not overwrite the undated third-party screenshot baseline or infer its ranking URLs.

Use November 2–8 as election week and November 9–15 as the next full Monday–Sunday period, once finalized. Compare to October 26–November 1 and annotate election-driven changes in demand. Afterward maintain the same cadence if useful; increased visibility or election outcomes are not guaranteed by these changes.

For a manual AI sample, record the date, engine/model, login state, exact question, answer evidence, and cited URLs for: “What is Pasadena Measure PFD?”, “What does a yes or no vote on Measure PFD mean?”, “How much would Measure PFD cost a 1,600-square-foot home?”, and “What would Measure PFD fund?” Use the same questions on subsequent samples. Never report a blocked or missing answer as a negative citation result.

Google's [AI-feature guidance](https://developers.google.com/search/docs/appearance/ai-features) describes the same core SEO requirements and no special AI schema requirement. Priorities remain accurate, crawlable answers, meaningful original research, clear campaign ownership, and legitimate editorial references.
