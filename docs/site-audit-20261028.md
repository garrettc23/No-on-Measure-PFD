# Site-audit workbook remediation

Source: user-supplied `pfdno.com_issues_20261028.xlsx`, read from Downloads because its attachment path was unavailable. The workbook contains one sheet with aggregate issue counts, no affected URLs, and no crawl settings. It reports zero errors, three warning types, and five notice types. Changes below are local and have not been deployed or recrawled by the report provider.

## Findings and disposition

| Reported issue | Failed checks | Local finding and action |
| --- | ---: | --- |
| Duplicate content in H1 and title | 1 | Found the property-tax guide match and a second match introduced by the pending voting-guide update. Gave both distinct, descriptive SEO titles while retaining their H1s. No matches remain among the 16 indexable pages. |
| Low text-to-HTML ratio | 2 | Homepage and join page had substantial inline CSS. Configured Astro to emit cacheable stylesheet files. Homepage HTML source decreased from 37,880 to 31,124 characters before compression; the join page also sheds its inline styles. This is a local markup comparison, not a reproduction of the vendor's scoring method or a measured ranking gain. |
| Low word count | 1 | The credits utility page has little primary content and was the sitemap orphan. Excluded it from indexing. Added useful participation guidance and links to facts, voting information, and privacy on the join page, which also had little primary content. The report does not identify which page it flagged. |
| Orphaned sitemap pages | 1 | `/credits/` was the only unreachable sitemap page and an explicit exception in the old link audit. It remains available at its URL with `noindex, follow`, but is removed from the sitemap and public-page registry. Preserve the prior choice to keep it out of navigation. Removed the audit exception; every sitemap URL must now be reachable. |
| Pages with only one internal link | 1 | Not reproduced in the current build. Each indexable page already has incoming links from at least ten distinct other indexable pages after the keyword work. The workbook cannot identify its flagged URL. |
| Resources formatted as page links | 3 | Preserve useful PDFs and license files. Added explicit PDF/TXT labels, MIME types, and download attributes for same-origin downloads. The County calendar remains an external PDF link, clearly labeled. Non-HTML resource links may still be reported as informational notices. |
| Links with non-descriptive anchor text | 1 | Replaced the homepage's generic “Learn more” link with “Tools & guides.” |
| External pages/resources returning 403 | 4 | All 17 external HTML destinations linked from indexable pages loaded successfully in `/browse`; the County calendar downloaded successfully as a PDF. The workbook does not identify the four URLs. No broken link was reproduced; crawler-specific blocking remains possible. Keep valid official resources and original editorial citations. |

## Validation

- Astro check passed with no errors, warnings, or hints.
- Production build, copy audit, SEO audit, and internal-link/asset audit passed: 16 indexable canonical pages, 20 rendered HTML pages, 464 links, and 240 asset references.
- Vercel preview build and SEO audit passed with indexing disabled and an empty sitemap.
- Eight existing form-server tests passed using test fixtures; no real form message was sent.
- Audits now verify credits is excluded from indexing and enforce reachability for every sitemap entry without an orphan exception.
- Production-browser checks passed at 1440px and 390px for all 16 indexable pages plus credits: 34 checks with no horizontal overflow, missing stylesheets, or incorrect body font. Reviewed the changed homepage, join, and voting layouts visually at both widths.
- Screenshot and browser evidence is saved under `.context/`; external-link observations are in `.context/external-link-review.json`. These are local verification artifacts, not a new third-party crawl.

## After deployment

Run the same site-audit project again with the same crawl settings. Confirm the newly deployed HTML, CSS, sitemap, and indexing directives before comparing issue counts. If the provider still reports low word count, one-link pages, or external 403s, export those issue-specific URL lists. Valid download links and external bot restrictions may remain notices; do not remove useful source links merely to suppress them.

No deployment, sitemap submission, Google indexing request, or third-party audit rerun was performed.
