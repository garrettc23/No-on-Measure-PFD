# Publishing Measure PFD election results

The results data is empty and the results route is absent before official reports exist. Do not create a speculative placeholder result, imply a winner from preliminary counts, or publish before polls close at 8 p.m. Pacific on November 3, 2026 (November 4 at 04:00 UTC).

1. Open the [LA County results service](https://results.lavote.gov/) from an official County election link, or the City's published election information. Confirm the contest is Pasadena Measure PFD for November 3, 2026. Save the exact contest URL and a screenshot privately under `.context/`.
2. Transcribe Yes and No counts and the source's actual update time. Record the current review time separately. Use `preliminary` until the source explicitly certifies the result. A displayed percentage or news projection is not certification.
3. Create a private JSON object with `status`, `yesVotes`, `noVotes`, `sourceUrl`, `sourceLabel`, `sourceUpdatedAt`, and `reviewedAt`. Timestamps must include an explicit timezone. For a certified report only, add `outcome` (`passed` or `failed`) copied from the source. Do not invent values to fill this template.
4. Run `npm run results:import -- .context/verified-report.json`. This is a dry run. The validator rejects premature publication, unapproved source hosts, bad totals/timestamps, preliminary outcomes, and certified outcomes inconsistent with the two-thirds threshold.
5. Independently compare the displayed draft totals with the source. Append locally using `npm run results:import -- .context/verified-report.json --write`. Preserve earlier reports; never overwrite reporting history to conceal a correction.
6. Run `npm run test:results`, `npm run check`, `npm run build`, `npm run audit:seo`, `npm run audit:copy`, and `npm run audit:links`. Review the results page and resource library at desktop and phone widths. The route, sitemap, and resource links are generated from actual report data.
7. Review the diff and publish through the normal Git/Vercel workflow. Then run `SITE_UNDER_TEST=https://www.pfdno.com npm run audit:release` and `npm run seo:indexnow -- --submit https://www.pfdno.com/measure-pfd-results/ https://www.pfdno.com/resources/`. Use authenticated Search Console for URL inspection/indexing requests if available.
8. Repeat when a meaningful official count update is published. Clearly retain preliminary status until certification. Update affected explanatory copy after the outcome is certified; retain historical proposal context and campaign disclosures.

This workflow validates data structure and arithmetic. A human must still verify the official source, contest, timestamps, and certification. It neither predicts results nor schedules unattended publication.
