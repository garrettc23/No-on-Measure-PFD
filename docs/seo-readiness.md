# Search and AI discovery

## Implemented

- Public origin: `https://www.pfdno.com/`, confirmed by the client. `PUBLIC_SITE_URL` can override it in the build environment; only an HTTPS origin is accepted.
- Seven public pages have unique titles/descriptions, absolute canonical URLs, Open Graph/Twitter metadata, and Organization, WebSite, and page structured data. Interior pages include breadcrumbs in the structured data.
- `/facts/` contains 19 server-rendered FAQs, grouped by topic, with stable anchors and links to official sources. FAQPage answers come from the same data as the visible answers and the PDF. Campaign positions and estimates remain attributed.
- `/sitemap.xml` lists the seven canonical public pages. Print routes and the 404 page are excluded and marked `noindex`.
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

The existing public site returned `noindex, nofollow` during the September 30 review. Repository changes alone do not change the live site; these settings take effect after deployment. No rankings, indexing, AI citations, or traffic outcomes are claimed.

## Research basis

Reviewed September 30, 2026:

- [City of Pasadena ballot-measure packet](https://www.cityofpasadena.net/city-clerk/wp-content/uploads/sites/21/2026-General-Election-Ballot-Measure-Information.pdf): ballot question, Resolution 10203, proposed ordinance, rates, exemptions, duration, and oversight.
- [City of Pasadena 2026 general election](https://www.cityofpasadena.net/city-clerk/general-election-2026/): election date and voter-resource links.
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): standard SEO and accessible, useful content apply to AI search; no special AI file or schema is required.
- [Google Search documentation updates](https://developers.google.com/search/updates): FAQ rich results were removed in May 2026. FAQPage is used for semantic clarity, without promising a Google rich-result feature.
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots): OAI-SearchBot supports search discovery; GPTBot training controls are separate. The public wildcard allow policy permits both.

FAQ topics reflect common informational questions supported by the ordinance, not measured search-volume research. The campaign's combined $1,700 estimate still lacks an independently verified calculation; adding schema does not change its evidentiary status.
