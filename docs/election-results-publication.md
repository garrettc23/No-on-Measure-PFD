# Publishing Measure PFD election results

The results page is implemented at `src/pages/measure-pfd-results/[...entry].astro`. With the current empty `reports` array in `src/data/election-results.json`, Astro emits no results route. It is absent from the sitemap, reading guide, and related-resource links. Do not populate it with forecasts or sample numbers.

After polls close on November 3, 2026 at 8 p.m. Pacific:

1. Open the [County results service](https://results.lavote.gov/) or the [City election page](https://www.cityofpasadena.net/city-clerk/general-election-2026/). Select the November 3 election and the exact Pasadena Measure PFD contest. Save the source report in `.context/` and record its precise URL and update timestamp. The generic results service can show another election, so its landing-page text alone is not evidence.
2. Add a report with `status` (`preliminary` or `certified`), `yesVotes`, `noVotes`, `sourceUrl`, `sourceLabel`, `sourceUpdatedAt`, and `reviewedAt`. Use genuine ISO timestamps with timezones. A certified report must also include `outcome` (`passed` or `failed`) copied from the official determination. Preliminary reports cannot declare an outcome.
3. Append later reports in chronological review order. Do not erase earlier reports. The route displays the newest report and a source-linked reporting history. A recount or corrected report should be preserved in that history.
4. Before release, update the homepage title/hero, election banner, Vote NO action buttons, closing section, voting page, and reading-guide introduction to describe the election in the past tense. Keep campaign statements as clearly labeled historical material; do not rewrite quotations or transcripts. Review all date-sensitive messaging as a separate editorial pass.
5. If PFD fails, label the calculator as a historical proposal illustration. If it passes, keep the proposal assumptions explicit until adopted implementation documents are verified; do not infer application rules from passage alone. Change guide review dates only when actually reviewed.
6. Extend `scripts/audit-seo.mjs`'s expected public paths with `/measure-pfd-results/` and add it to the browser viewport audit. Run all build, SEO, copy, calculator, and results checks. Inspect preliminary and certified layouts using actual approved source records.
7. Deploy through the normal release process. Run `SITE_UNDER_TEST=https://www.pfdno.com npm run audit:release`, then inspect the new URL in Search Console and submit the updated sitemap if necessary.

The validator rejects pre-poll-close publication, future or out-of-order timestamps, non-official sources, invalid vote totals, and premature outcome declarations. It cannot determine whether a typed vote total matches its source or whether certification actually occurred; the source review in steps 1–2 remains necessary.
