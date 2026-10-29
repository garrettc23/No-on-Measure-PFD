# Measure PFD keyword coverage, October 29, 2026

Status: approved for release on October 29, 2026. Validation below describes the release candidate; production verification is recorded separately after deployment.

| Search question or phrase | Existing destination | Change |
| --- | --- | --- |
| Pasadena fire tax; Pasadena parcel tax 2026 | `/facts/` | Direct definition, 2026 search title, cost and exemption questions |
| Measure PFD cost; tax calculator; 19 cents per square foot Pasadena | `/measure-pfd-calculator/` | Cost answer before the calculator, formula heading, shorter page heading |
| Measure PFD exemptions; senior exemption | `/measure-pfd-exemptions/` | Eligibility answer first; senior and income questions; age-alone limitation retained |
| Measure PFD pros and cons; arguments for and against | `/measure-pfd-pass-or-fail/` | Pros-and-cons heading and search title; City rationale and campaign position distinguished |
| Will Measure PFD raise my rent?; Measure PFD renters | `/measure-pfd-renters/` | Direct conditional answer before the tool; scenario labels distinguish owner tax from tenant rent |
| Pasadena fire station funding; Measure PFD Station 33 / Station 37 | `/measure-pfd-fire-station-funding/` | Shorter main heading, station question, funding timeline, comparison tool and FAQ |
| Measure PFD vs Measure I; does Measure I fund firefighters | `/measure-pfd-vs-measure-i/` | Short comparison answer and firefighter-funding question |
| Measure PFD results; did Measure PFD pass | `/measure-pfd-results/` (gated) | Question added to results template; no route or sitemap entry until an official report is imported |

These are topic hypotheses, not measured keyword-volume estimates. The October 28 Search Console baseline covers September 29 through October 26 and does not establish current positions for these additional phrases. Rankings and AI citations have not been verified by this work, and first place cannot be guaranteed.

Navigation now puts Measure PFD immediately after Home. The two requested introductory passages on the facts page are removed. Source citations remain in supporting content. Existing routes and section anchors are preserved; no overlapping keyword pages were added. Guide metadata feeds resource cards, structured data, crawler summaries, and sitemap modification dates.

## Validation

- Astro check: 88 files, zero errors or warnings.
- Build: 20 pages; results remain unpublished with an empty reports list.
- SEO audit: 16 canonical pages and 13 visible FAQ answers passed.
- Copy and link audits passed: 555 links and 242 asset references checked locally. This is not a fresh external crawler audit.
- Full repository unit suite: 29 passed, including calculator, renter scenario, exemption, and results tests.
- Browser checks: 24 responsive page checks and both calculator flows passed; mobile menu order verified. Screenshots and detailed evidence are in `.context/keyword-expansion/`.

After deployment, compare Search Console impressions, clicks, CTR, and landing pages against the saved baseline. Repeat the same AI-answer prompts and record actual citations. Publishing changes alone does not establish search or AI visibility.
