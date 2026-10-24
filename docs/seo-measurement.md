# Search and AI discovery measurement

## Baseline as of October 24, 2026

Public audit: eight live canonical pages, crawlable production robots and sitemap, working internal destinations, and Bing visibility for “Measure PFD.” Google automated search encountered a challenge. The audit browser reached the Search Console public landing page rather than an authenticated property. The initial public audit did not obtain traffic totals, query volumes, Google rankings, backlinks, field Core Web Vitals, or AI citation counts. A subsequent authenticated Vercel baseline is recorded below; Search Console data is still pending. Account access is available to the owner but has not been verified in this agent session.

The final implementation includes eight reference routes and a dedicated resource library locally, plus an unpublished results template. Build and browser validation are not deployment or indexing evidence.

## Before publication: authenticated baseline

Use the existing domain property for pfdno.com rather than creating a duplicate. Export the available Search Console Web performance history, plus the last 28 days and the previous comparable period. Save date range, timezone, extraction time, and filters with the results. Separate branded/navigation queries (pfdno, exact campaign/domain names) from generic measure/cost/exemption questions. Inspect the homepage, Facts page, and any new URL after deployment: coverage status, selected canonical, last crawl, and rendered HTML. Review sitemap status and Core Web Vitals when data is available. In Bing Webmaster Tools, record verified property, sitemap state, indexing errors, and available query/click data. Missing data is unknown, never zero.

| Metric | Baseline | Source |
| --- | --- | --- |
| Organic impressions, clicks, CTR, average position | Not obtained | Search Console, by page/query/device |
| Indexed URLs and selected canonicals | Not obtained | Search Console URL Inspection / Pages |
| Bing queries and clicks | Not obtained | Bing Webmaster Tools |
| AI referral visits | No rows for the explicitly queried AI-host list in the Sept 26–Oct 23 export; not proof of zero AI-driven traffic | Vercel Analytics, filtered referrer report |
| Field LCP, INP, CLS | Not obtained | Search Console / CrUX if sufficient samples |
| Resource events | Built and tested; disabled by default because API reporting returned HTTP 402 requiring Pro/Enterprise | Vercel Web Analytics |

## Event contract

- `calculator_completed`: a valid submitted calculation; repeat submissions count as repeat uses, not unique people.
- `resource_downloaded`: click on an approved fact-sheet or FAQ download link; this measures intent, not completed file delivery.
- `official_source_clicked`: click on a known official source or voting-tool link; this does not prove the external page loaded.
- Properties: canonical site `page`; fixed `resource` identifier for download/source events. No square footage, calculated amounts, form values, addresses, ZIP codes, income, email, arbitrary URLs, or query strings.
- Events require `PUBLIC_RESOURCE_ANALYTICS_ENABLED=true` and an indexable production page. They are disabled by default and in development and Vercel preview/development builds. Local production-preview tests intercept the analytics function; do not send test events to production.
- Verify that the deployed Vercel project has Web Analytics and custom-event capability. Confirm actual receipt after deployment. No paid account settings were changed.

Use organic visits to relevant resources and their useful actions as outcome measures. Rising election interest is a confounder; a pre/post change does not establish causation or monetary ROI.

## Repeatable AI citation sample

Run each question in a fresh, non-personalized search-enabled session. Record product/model, mode, date/time, exact prompt, answer, all cited URLs, and whether pfdno.com is cited accurately. Repeat the same sample before release, weekly through the election, and monthly afterward. A citation in one sample is not a stable ranking. Do not automate sessions or claim samples have been run when they have not.

1. What is Pasadena Measure PFD on the November 2026 ballot?
2. How much would Measure PFD cost for 1,600 square feet?
3. What exemptions are included in Pasadena Measure PFD?
4. How does Measure PFD differ from Pasadena Measure I?
5. What does Measure PFD say about Stations 33 and 37?
6. What audits and public reports would Measure PFD require?
7. Where can I read the official Measure PFD ordinance?
8. Where are the official voting resources for Pasadena’s November 2026 election?

The initial AI sample is pending; no ChatGPT citation result is claimed.

## Reference outreach shortlist (not contacted)

- Pasadena Now: a local election/funding explainer could reference a sourced comparison or calculation methodology. https://www.pasadenanow.com/
- Pasadena Star-News: existing measure coverage provides a relevant context for factual resource links. https://www.pasadenastarnews.com/
- AAGLA: already publishes a Measure PFD calculator; offer complementary source/exemption documentation, not a duplicate calculator pitch. https://aagla.org/pasadena-pfd/
- Pasadena Media: candidate for a factual civic-resource reference; confirm editorial fit before any approach. https://www.pasadenamedia.tv/

No messages sent, placements promised, or backlinks purchased. Campaign affiliation must be disclosed in any future outreach.

## After the election

Do not publish an empty results route in advance. When official results exist, create `/measure-pfd-results/`, distinguish preliminary from certified results, cite the official timestamp, and preserve the reporting history. Refresh expired sitewide election copy. If PFD fails, retain the calculator as a historical proposal illustration. If it passes, check adopted implementation guidance before changing eligibility/application details. The property-tax guide is now built, using the County’s annotated bill and the official PFD and Measure I texts. It explains categories rather than listing every local levy. No current consolidated tax burden is inferred from the campaign’s $1,700 estimate.

## Repeatable private Search Console export

`scripts/search-baseline.mjs` uses the official [Search Analytics query API](https://developers.google.com/webmaster-tools/v1/searchanalytics/query), sitemap listing, and [URL Inspection API](https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect). URL Inspection reports Google's indexed version; it is not a live test or an indexing request. Use an authorized OAuth credential with the `webmasters.readonly` scope through a secure environment or credential manager. Never paste the token into chat, shell arguments, tracked files, or reports.

After the credential is available as `GSC_ACCESS_TOKEN` in the environment:

```sh
GSC_END_DATE=2026-10-21 GSC_DAYS=28 npm run seo:baseline
```

Choose an end date with finalized data. The script compares the selected inclusive window with the immediately preceding window and exports daily, page, query, and device rows, property totals, sitemap status, and homepage/Facts indexed status. It saves JSON plus a readable summary only under gitignored `.context/search-baseline/` with restricted file permissions. Up to 180 days per comparison window is supported. Export remaining available history from the Search Console UI as part of account review; this script does not claim to retrieve all available history by default.

Branded groups match the domain/campaign name. “Measure PFD” alone remains an informational query. API query rows exclude anonymized data and may be incomplete; groups are labeled observed-row summaries, never substituted for property totals. Empty results are marked unknown, and a local row cap is recorded explicitly. No fabricated sample data is mixed with a real baseline. The exporter has been tested with fixtures; an authenticated baseline is still pending access.

For weekly review through November 3, compare actual impressions/clicks by landing page and informational query, then check AI referrers in Vercel. Review resource events only if separately enabled later; they remain disabled in this release. After the election, review monthly and after each official result or implementation update. Record which changes coincide with rising election interest rather than attributing all changes to SEO. This document defines a review cadence; it does not create an unattended scheduled job or promise future monitoring.

## Authenticated Vercel baseline collected October 24

The existing CLI account can read the Firebay Studios `no-on-measure-pfd` project. Web Analytics is enabled and has data. Speed Insights reports no data. Deployment protection is set to `all_except_custom_domains`; the project’s WAF endpoint returned no active custom configuration. These settings are not proof of successful Googlebot or OAI-SearchBot fetches.

For September 26–October 23, 2026 (UTC days, production filter), the API returned **1,812 visitors and 3,145 page views**. The API rounded the requested upper bound to October 24 at 00:00 UTC; the private export preserves its exact query boundaries. These are total analytics figures, not organic-search totals. Google and Bing referrers alone do not distinguish paid from organic traffic. The named-AI-referrer query returned an empty array; missing referrers and other AI products prevent interpreting that as proof of zero AI referrals or citations.

The custom-events endpoint returned HTTP 402: “Accessing Analytics custom events requires an Enterprise or Pro plan.” No account upgrade or billing change was made. Resource-event code is ready but disabled by default until a supported measurement route is chosen. The privacy notice reflects the deployed feature flag. After enabling supported event reporting, set `PUBLIC_RESOURCE_ANALYTICS_ENABLED=true`, rebuild, and verify actual dashboard receipt.

Private raw reports and a readable summary: `.context/vercel-baseline/2026-10-24T16-59-20-312Z/`. Six of seven queries succeeded; the custom-event query is explicitly marked unavailable. Repeat the read-only export through the existing authenticated CLI:

```sh
MEASUREMENT_SINCE=2026-09-26T00:00:00Z MEASUREMENT_UNTIL=2026-10-23T23:59:59Z npm run seo:vercel-baseline
```

This obtains totals, paths, referrers, devices, daily observations, named AI referrers, and events if supported. It never changes account settings. Referrer and path groups are aggregate reports, not visitor-level records. They stay in gitignored `.context/`.
