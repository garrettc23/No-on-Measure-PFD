# Measure PFD keyword update

Prepared October 27, 2026. Local changes only; not deployed. The subsequent workbook fixes in `site-audit-20261028.md` update the indexing policy to 16 canonical pages and give the voting guide a distinct SEO title.

## Screenshot baseline

The user supplied two third-party keyword-report screenshots on October 27. The report date, search location, device, ranking URLs, and reporting windows are not visible. Treat these as undated observations, not a verified current Google baseline. Google blocked the automated ranking check.

| Query | Reported position | Planned primary page |
| --- | --- | --- |
| no on measure pfd | 1 | `/` |
| yes on measure pfd | 6 | `/measure-pfd-pass-or-fail/` |
| measure pfd | 21 | `/facts/` |
| pasadena firefighters | 32 | `/measure-pfd-fire-station-funding/` |
| firefighter pasadena | 38, 39, 60 in separate rows | `/measure-pfd-fire-station-funding/` |

The three repeated firefighter rows cannot be attributed to different pages without the underlying report. The planned primary pages are editorial targets, not inferred ranking URLs. Ballot queries take priority over broad firefighter searches.

## Implementation

- Preserve the homepage title, hero, two-card resource layout, campaign disclosures, URLs, anchors, and supplied PDFs. Feature the voting guide alongside the calculator; the property-tax guide remains in the resource library.
- Clarify the facts page title, H1, proposal overview, voting choices, and descriptive internal links.
- Use the H1 “Yes or No on Measure PFD: What Your Vote Means” on the existing pass/fail guide and explain each vote in its existing outcome cards. Retain the campaign's opposition identity and distinguish a vote from the eventual election outcome.
- Expand the existing funding guide with a focused Pasadena firefighters section. Synchronize its search metadata and shared resource-card description.
- Update modification dates only for the homepage, facts page, resource library, and two reviewed guides. Other guides retain their prior dates.

## Factual review

Reviewed the [City Measure PFD page](https://www.cityofpasadena.net/fire/measure-pfd/) and [proposed ordinance](https://www.cityofpasadena.net/fire/wp-content/uploads/sites/25/MEASURE-PFD-RESOLUTION-PARCEL-TAX-MEASURE.pdf).

- Resolution page 3: Yes/No ballot question and two-thirds passage requirement.
- Ordinance sections 4.110.130 and 4.110.170: exemptions and proposed tax rate.
- Sections 4.110.150 and 4.110.160, PDF pages 10–12: facilities, equipment, recruitment, training, service enhancements, and capital-project priority. These provisions do not promise a specific number of hires or emergency-response time.
- Section 4.110.220: tax depends on approval by at least two-thirds of votes cast on the proposal.

Existing disputed campaign claims remain in `seo-content-review.md`; this update does not apply those proposed corrections.

## Local validation completed

- Astro check: 83 files, no errors, warnings, or hints. Production and Vercel preview builds passed.
- Production and preview SEO audits passed: 17 canonical pages, 13 matching FAQ answers, schema, crawler files, and environment-specific indexing rules.
- Copy audit passed for 20 rendered pages; new wording also received a manual readability review. Link audit passed for 460 links and 187 asset references.
- All 13 existing property-tax, rent-scenario, and exemption tests passed. Browser calculator check returned $304 annually and $4,256 over 14 years for 1,600 square feet.
- All four changed pages reviewed at 1440px and 390px, with screenshots under `.context/`; no horizontal overflow or broken images observed. Mobile menu opened and closed with Escape. Homepage and facts-overview links reached the voting guide.
- Original page anchors, homepage H1/title/video, and public assets remain unchanged. Only the five intended page modification dates advanced. The property-tax guide remains available in the resource library.

## Measurement and release

Search Console credentials were unavailable during implementation. No authenticated query metrics, indexed-page reports, or indexing requests were obtained. No account settings or analytics flags changed.

After an approved deployment, verify all four target pages, their canonical URLs, robots directives, and sitemap entries. With authenticated access, inspect these URLs in the existing Search Console property and request indexing for the updated pages. Keep request submission distinct from successful indexing.

For each target query and landing page, record impressions, clicks, CTR, and average position with the report dates, device, country, and search-type filters. Review available finalized data through election week, then compare the next complete reporting period with an equal prior period. Retain the same rank-tracker location/device settings when available; do not equate its positions with Search Console's average position.

Use `docs/seo-measurement.md` for the existing private export procedure. This document defines a review cadence, not an automated monitoring job. Election interest can change traffic independently of these edits; validation or deployment does not establish ranking gains.
