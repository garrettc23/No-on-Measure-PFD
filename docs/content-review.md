# Content review and launch inputs

The attached brief is the editorial starting point. Public copy has been reviewed using blader/humanizer v3.0.0 and the user's additional wording restrictions. Polling, demographic targeting notes, and internal instructions are excluded.

## Primary-source verification

Verified September 22, 2026 against:

- City of Pasadena, Resolution 10203 and proposed ordinance, adopted August 3, 2026: https://www.cityofpasadena.net/city-clerk/wp-content/uploads/sites/21/2026-General-Election-Ballot-Measure-Information.pdf
- City election information: https://www.cityofpasadena.net/city-clerk/general-election-2026/
- LA County ballot measure list, page 10: https://content.lavote.gov/docs/rrcc/documents/measures-appearing-on-the-ballot---november-3-2026-rev-8-14-2026-v-4.pdf

Confirmed: November 3 election; designation PFD; two-thirds passage threshold; $0.19 per improved square foot annually; approximately $22.1 million in annual revenue; 14-year sunset. $304, $4,256 and $3,800 are arithmetic examples, expressly subject to actual taxable footage and exemptions.

Corrections to the supplied brief:

- Exemptions are broader than qualifying low-income seniors. Section 4.110.130 includes very-low-income owners, owners receiving senior/disability utility-user-tax exemptions, government agencies, and qualifying religious/community-service properties.
- Section 4.110.150 names reconstruction of Fire Stations 33 and 37 within ten years. The site does not claim there are no project timeframes.
- Section 4.110.190 includes an annual independent audit, a public annual report with capital project status and baseline verification, and Council oversight. The site does not claim there is no accountability.
- Sections 4.110.120 and 4.110.160 define a service baseline. Section 4.110.160(B) says capital prioritization does not require a specific General Fund appropriation. Both provisions are described in the FAQ.
- The ordinance addresses Fire Department and emergency services. No claim that it funds police is included.
- A failed measure would not automatically enact an alternative funding plan. The campaign's request for a new proposal is labeled as its position.
- Rental-property taxation is described without predicting rent increases or promising a direct pass-through.

Excluded pending verification: grocery equivalence; county sales-tax increase; Eaton Fire causation; housing-impact-study claims; mail-ballot rejection statistics. No missing filed arguments or unconfirmed endorsements are presented as available resources. Published commentary is attributed separately from endorsements.

## Required before launch

1. Clear the user-supplied City Hall hero image for public use and obtain a high-resolution original. Footer disclosure now follows counsel's September 25, 2026 website requirements (FPPC ID 1497201; top funder California Association of REALTORS®). Update it when the National Association of REALTORS® becomes a top funder, and keep the site online until 30 days after the election.
2. Supply an approved domain, set `campaign.siteUrl`, and configure canonical/Open Graph URLs. Remove local `noindex` metadata and add production indexing assets only at launch.
3. Select hosting and a real submission service. Replace preview handlers with server-side validation, abuse protection, delivery handling, retention rules, and tested submission receipts.
4. Finalize privacy language for the chosen services. Have campaign counsel/provider approve any SMS consent before enabling text enrollment. Preview checkboxes collect no consent.
5. Supply a donation URL to enable Donate. Payment processing belongs to the approved provider.
6. Confirm endorsement permissions and contact details. No endorsements or promised media response times are published in the preview.
7. Recheck ordinance/source versions before public release and regenerate PDFs after content changes.

## Photography

Hero: User-supplied aerial of Pasadena City Hall, from `.context/attachments/UKu6dn/image.png`, 480 × 270 pixels. Used for the local preview at the user’s request. Photographer and license are unverified. Before public launch, obtain a high-resolution original and usage permission or replace it with a cleared equivalent. No Creative Commons license is claimed for this image.

Supporting housing photograph: Ken Lund’s street view of homes at Del Rosa Road and Grand Avenue in Pasadena, taken June 26, 2014. Wikimedia Commons, CC BY-SA 2.0. Source: https://commons.wikimedia.org/wiki/File:Neighborhood_Surrounding_Richard_H._Chambers_United_States_Court_of_Appeals,_Pasadena,_California_(14516428984).jpg

Source links, author credits, dates, and licenses are public at `/credits/`. Originals are retained in `src/assets/`. Responsive derivatives are resized/converted/cropped and retain each original's license. No photographer or resident endorsement is implied.

## Production privacy draft outline

Before collection begins, identify the campaign data controller, collection purpose for each form field, service providers and recipient categories, retention period, security practices, rights/request contact, and how changes are announced. Explain email consent separately from optional SMS consent. List actual analytics/cookie tools if added. Do not publish generic promises that have not been implemented.

## Source presentation

At the user’s request, public factual citations are consolidated in the Facts page resources section. Each standalone PDF has one source link. Per-provision references remain in the central data file for editorial verification. Photo attribution remains on the credits page. The client requested removal of the caption link beside the neighborhood photograph. Repeated inline citations were an editorial choice, not a legal requirement established during this build.

## September 24 client revisions

Applied the supplied campaign language to Home, the shared closing section, and Join Us. Support language includes police without stating that Measure PFD funds police. The housing-affordability and broader-funding statements are campaign arguments supplied by the client. Facts and FAQ provisions remain unchanged pending the Friday briefing.

Signup now has five inputs: first name, last name, phone (optional), email, and ZIP code. Role, interest, endorsement, and SMS checkboxes have been removed; the separate contact form remains available. Forms remain local previews with no transmission or persistence.

The client will supply the approved fact-sheet PDF. The previous generated PDF and print route have been removed; `campaign.factSheetUrl` controls all fact-sheet links and remains empty until the new document arrives. The FAQ PDF and social image use the new campaign-sign logo.

## September 27 client revisions

Added the campaign's $1,700 figure at the client's direction: the typical Pasadena homeowner already pays about $1,700 a year in local Pasadena taxes. It appears as the lead home-page stat and as a Facts table row, each labeled as City of Pasadena taxes only, excluding Los Angeles County taxes. It is attributed as a campaign estimate; the client should supply the calculation basis before launch.

Replaced the campaign-sign mark with the new square "Vote NO on Measure PFD" logo (`src/assets/campaign-logo.png`) and moved the palette from green and rust to the logo's navy (#012755) and red on white.

## September 27 Paparian page and presentation updates

Added `/bill-paparian/` with three verbatim excerpts from the full commentary supplied by the client. The article link, byline, publication, and September 25 date were confirmed on the public Star-News page; its full text requires a subscription. Full excerpts use the client-supplied text. At the client’s request, the visible non-endorsement sentence was removed from the homepage feature and article page. Neither page claims a campaign endorsement. The page attributes his arguments to him and separates campaign commentary.

Moved the vote-by date beneath the City Hall photo, replaced the star favicon with a NO / on PFD mark, and updated the top banner to Vote No on November 3, 2026. Removed the footer preview label and photography row; the credits page is retained; the client subsequently requested removal of the neighborhood photo caption link. Launch settings and preview form behavior are unchanged.

Logo sharpness: retained the supplied high-resolution artwork and replaced lossy WebP logo derivatives with lossless PNGs at 124, 176, 300, and 600 pixels. Verified desktop at 2x and mobile at 3x pixel density; regenerated the FAQ PDF and social card with the updated shared logo component.

Footer follow-up: removed the election date and Pasadena location. The disclosure uses the full footer width and stays on one line on desktop, with readable wrapping on small screens. The shared logo now uses `/campaign-logo.png`, a stable 600 × 585 lossless PNG copied from the Astro-generated derivative of the supplied original; preview rebuilds no longer invalidate its URL before a lazy footer image loads.

City-tax clarification: the $1,700 homepage stat now leads with “Pasadena city taxes only” and explicitly excludes Los Angeles County taxes. A full-width homepage callout repeats the exclusion and identifies the number as a campaign estimate. Strengthened the Facts table row and added a dedicated county-tax FAQ, including in the regenerated two-page downloadable FAQ. No estimate amount or calculation basis was changed.

Homepage tax-strip refinement: removed the $1,700 stat and separate explanatory box from the ballot section. A single marquee-style strip now sits directly below the hero, carrying the city-only amount, county-tax exclusion, and campaign-estimate attribution. The ballot section returns to three measure figures. Motion pauses on hover/focus or through its toggle, and reduced-motion users receive a static, wrapping message without the duplicate visual loop. The Facts page and printable FAQ clarifications remain.

Static tax-increase callout: replaced the marquee below the hero with a single stationary callout headed “Measure PFD would raise property taxes.” It explains the existing $1,700 city-tax estimate, explicitly excludes Los Angeles County taxes, and says the measure adds another tax subject to exemptions. Removed all marquee duplication, animation, and pause controls. The three ballot statistics and Facts/FAQ clarifications remain.

Callout amount clarification: the client requested a $17,000 annual increase, differing from the earlier $1,700 existing-tax estimate. No supporting calculation was supplied when clarification was requested. Removed the callout link and dollar amount; it now states that Measure PFD would raise property taxes through an additional Pasadena city tax, separate from Los Angeles County taxes, with exemptions. The earlier $1,700 campaign estimate remains in the Facts/FAQ pending source verification as noted above.

Design direction: no decorative eyebrow or kicker labels on website pages. Removed the visible “What’s on the ballot,” “In the news,” commentary labels, and Join-page labels; section names needed for accessibility remain screen-reader-only. Keep functional form labels and document metadata. Homepage links have no underlines, including hover and the active navigation underline. Removed the ballot-header rule and the two rules above the accountability section shown in the client screenshots; spacing now separates these sections.

Footer sharing and ballot heading: moved the shared neighbor-sharing control from the closing CTA into the sitewide footer. Restored “What’s on the ballot” as a normal sentence-case section heading (not a decorative label) and placed the breakdown link below the figures. Checked mobile/desktop placement and the clipboard fallback.

Client-supplied cumulative-tax messaging supersedes the earlier $1,700 interpretation: the homepage callout now uses the supplied statement about city and school-district tax/bond measures approved since 2020, another proposed parcel tax, and a combined cost exceeding $1,700 per household in new taxes over the last five years. “Pasadena families have done their part. Enough is enough.” is the callout headline. Facts and FAQ, including the regenerated PDF, now describe the figure as a campaign estimate of the combined cost including proposed PFD, not an existing $1,700 annual city-only bill or PFD’s standalone increase. No supporting calculation or measure-by-measure breakdown has been supplied; this is client-authored messaging, not independent verification of the amount or timeframe.

Facts/Join cleanup: removed the public-documents description, the standalone “Download these FAQs” link, and the assessment note under the facts table. Removed the Join intro’s campaign/date block, the pledge-side contact link, and the contact-side Questions & answers download. Empty download containers are no longer rendered. Button-style links and navigation have no underlines across website pages; keyboard focus indicators remain. The ballot breakdown link is again beside its heading at the top right on desktop.


## Campaign typography refresh — September 27, 2026

Replaced Georgia headings and DM Sans body text with self-hosted Archivo and Public Sans. Archivo uses stronger headline and statistic weights to complement the campaign logo; Public Sans covers navigation, body copy, forms, and buttons. Updated font licenses and credits, and regenerated the FAQ PDF and social image with the same pairing. Campaign wording and preview behavior are unchanged.

Validation: Astro check (zero errors/warnings), production build, copy audit, and 21 browser page/viewport checks passed. Additional 320px, 801px, and 1024px checks confirm no horizontal overflow and the voting date fits on one line. Both actual font families loaded in the browser. The regenerated FAQ remains two pages. Screenshots are in `.context/screenshots/`, including `typography-desktop.png` and `typography-mobile.png`.


## Final presentation and PR verification — September 27, 2026

The hero’s supporting sentence uses regular weight while the vote message stays bold. The $1,700 headline and homepage Paparian headline are vertically centered beside their supporting copy on desktop. Paparian’s name, publication date, and explicitly labeled source are consolidated at the top of his page; repeated quote captions and the duplicate article link are removed. The Facts heading reads “The details behind the measure.”

Fresh PR checks passed: Astro check, production build, copy audit, all 21 page/viewport checks, and all 18 interaction checks. No deployment is included. The combined $1,700 figure remains campaign-supplied messaging with the supporting calculation pending.

## Browser tab title and icon — September 27, 2026

The homepage tab now reads “No On Measure PFD | Increasing Pasadena’s Property Taxes”; every tab title capitalizes each word (for example “Facts & FAQ | No On Measure PFD”). The NO / on PFD favicon fits both lines inside the tile, with the red rule spanning the full width of “on PFD”, and PNG fallbacks (32px favicon, 180px Apple touch icon) cover browsers that ignore SVG icons.

## Website disclaimer — September 27, 2026

Per counsel’s September 25, 2026 disclaimer requirements, every page footer and the FAQ PDF now read: “Paid for by Committee for Responsible Property Taxation – Opposing Measure PFD, Sponsored by REALTORS®. Committee’s Top Funder: California Association of REALTORS®.” The footer disclosure sits on one line at 15px on screens 1400px and wider; narrower screens show it at 16px with the top funder on its own line. It never drops below the 11-point minimum or appears in all capitals. The PDF disclosure is 11pt on two lines, and the PDF footer no longer carries the “Local preview · Campaign material · September 2026” label.

## Vercel Web Analytics — September 28, 2026

Added Vercel Web Analytics to the main site layout. It counts visits and page views without cookies; the privacy notice and README now say so. Print pages used to generate the FAQ PDF and social image are not tracked.

## Counsel edits — September 30, 2026

The supplied screenshot and client-approved plan supersede the earlier tax wording and single-line disclosure presentation above. The homepage uses counsel’s sentence: “Now Measure PFD adds one more -- $304 a year on a typical home, resulting in more than $1,700 in new taxes since 2020 for many households.” The headline, Facts table, and FAQ use “since 2020” and “for many households”; the $1,700 campaign estimate expressly includes the proposed $304 annual PFD charge. Each explanation includes “Estimate based on the median sales price for a Pasadena home.” The basis is supplied by counsel; no calculation or measure-by-measure breakdown has been independently verified.

The client subsequently clarified that the ad-specific disclaimer treatment should not apply to the website and requested the previous footer be restored. The website and FAQ PDF again use the original “Paid for by” and “Committee’s Top Funder” wording and their original light-background presentation. The black ad disclosure area, added underlining, and ad-specific spacing have been removed. The payer and top-funder statements remain separate blocks, centered between the logo and navigation on desktop and stacked below them on smaller screens. The navigation is vertically aligned with the logo and disclosure; the footer share button has been removed.

The refined homepage tax section remains: the prominent $1,700 amount has a smaller qualifier, and linked superscript asterisks lead to one 13px footnote below a divider. All approved tax qualifications and median-home-price notes remain in the homepage, Facts table, FAQ, and regenerated two-page download.

## Expanded FAQ, PDF, and search discovery — September 30, 2026

The client confirmed `https://www.pfdno.com/` as the public domain and clarified that the PDF request concerns removing Matt's contact details, not sending a message. The downloadable FAQ retains the full “Paid for by Committee for Responsible Property Taxation – Opposing Measure PFD, Sponsored by REALTORS®.” and “Committee’s Top Funder: California Association of REALTORS®.” statements. Campaign contact details are omitted from the PDF only.

Expanded the shared FAQ to 18 questions in three groups: measure basics, costs and exemptions, and funding and accountability. The website provides direct answers and per-question source references; the PDF now uses three pages to accommodate the expanded content at readable sizes. This supersedes the earlier two-page layout. Rechecked the City's ballot-measure packet and general-election page for the November 3 date, city voter eligibility, two-thirds threshold, $0.19 rate, 14-year term, rate-increase restrictions, collection, exemptions, authorized spending, audits, and baseline-funding language. The answers distinguish ordinance facts, arithmetic examples, and campaign positions. The $1,700 calculation remains campaign-supplied and unverified, includes proposed PFD, and retains the median-sales-price note.

Added canonical URLs, unique search/social metadata, a production sitemap, robots rules, shared structured data, and an optional plain-text AI reading guide. Local development and Vercel previews remain excluded from indexing. The FAQ structured data matches the visible answers; it does not claim Google FAQ rich-result eligibility. No search-volume, ranking, indexing, or AI-citation result is asserted. See `docs/seo-readiness.md` for sources, verification, and post-deployment webmaster steps. The privacy notice no longer references the removed share button.

Validation passed: Astro check (zero errors, warnings, or hints), production build, copy audit, both production and preview SEO audits, 21 responsive page checks, and 19 interaction checks. Visually reviewed all three PDF pages and confirmed the full disclosure, absence of campaign contact details, no text overflow, and byte-for-byte parity between the source and built download. Screenshots are saved under `.context/`.

## Shared-link preview — September 30, 2026

The homepage title and its Open Graph/Twitter titles now read “Vote No on Measure PFD.” Replaced the text-heavy social card with the client's supplied transparent logo centered on white, preserving the original artwork. The generated image remains 1200 × 630 and uses a new URL, `/vote-no-measure-pfd-social.png`; the previous image URL is also updated for compatibility. The generation script waits for images to decode before capturing the card. Astro check, production build, copy audit, and SEO audit passed; the generated card and rendered metadata were verified locally. Previously sent messages may retain their platform-cached preview.

Follow-up: the shared-link image now places the supplied logo over the existing Pasadena City Hall photograph, with a cream fade for contrast, a small Pasadena/election-date line, and a navy/red lower rule. The 1200 × 630 composition is maintained as editable HTML/CSS at `/print/social/` and generated at `/vote-no-pasadena-city-hall.png`; both older image URLs receive the same artwork. The original logo is unchanged. The City Hall source and resolution notes above still apply. The Facts & FAQ tab now reads “Facts & FAQ | Vote No on Measure PFD”; all 18 FAQ items start collapsed and use down/up chevrons, verified with mouse and keyboard on desktop and mobile.

FAQ presentation follow-up: removed the sidebar topic shortcuts and review-date/publisher block at the client's request. Official citations are consolidated in “Read it firsthand” rather than repeated under each answer; the underlying source references, campaign attribution, and tax-estimate qualifications remain. All three external source links open in new tabs with `noopener noreferrer` and an accessible new-tab notice. The FAQ PDF download remains a download link.

External-link follow-up: applied the same new-tab behavior to the full Paparian commentary, external photography/license credits, the optional donation link, and source links on the HTML print route. Verified all 12 rendered external links across nine pages have `_blank` and `noopener noreferrer`; internal navigation, email, telephone, and download behavior remain unchanged. Browser/PDF viewer behavior for links inside an already downloaded PDF is controlled by the viewer.

Final shared-link composition: restored the logo in the left half and centered City Hall’s tower within a dedicated right-hand photo tile. The cream fade joins the two halves; the Pasadena/election-date line remains removed. Regenerated all three compatible preview-image URLs and verified the 1200 × 630 composition.

Landing-page photo: adjusted the hero crop with a small, right-anchored enlargement so City Hall’s tower is centered in the photo. Verified the result at desktop, tablet, and mobile widths without overflow; production build passed.

FAQ scrolling: the left “Answers about Measure PFD” heading now stays below the navigation while the right-hand FAQs scroll, bounded by the FAQ section. The stacked mobile layout keeps normal scrolling. Verified the sticky position and section boundary at 1440px and 1024px, and the mobile behavior at 390px; production build passed.

Applied the same section-bounded sticky behavior to “What the measure says” beside the provisions table. The headers now read “Provision” and “Details.” Confirmed desktop/tablet scrolling and normal mobile stacking; production build passed.

Pledge-page scrolling: applied sticky left-hand content beside the signup and contact forms. The behavior is bounded by each section and enabled only for two-column layouts with at least 700px of viewport height, keeping all sidebar content reachable on smaller screens. Confirmed at desktop/tablet widths and normal scrolling on mobile/short windows; production build passed.

## How-to-vote guide — September 30, 2026

Added `/vote/` with four direct actions: check registration, return a ballot, find a vote center, and track a ballot. Official tools open in new tabs and require no campaign signup. The guide clearly identifies itself as campaign content and directs visitors to County/City election resources. “How to vote” is now the main header, homepage, and mobile action, with links from the footer, closing sections, and Join page; campaign signup remains available separately.

Added “How do I vote on Measure PFD?” to the shared FAQ, bringing it to 19 answers, and regenerated the three-page PDF with an absolute link to the guide. The guide is included in the sitemap, canonical metadata, structured data, and AI reading-guide page list. Existing FAQ collapse behavior, tax-estimate qualifications, and full payer/funder disclosures are preserved.

Verified September 30 against the [County election calendar](https://content.lavote.gov/docs/rrcc/documents/calendar-of-events-v-7-(002).pdf), [mail-ballot instructions](https://www.lavote.gov/home/voting-elections/voting-options/vote-by-mail/how-to-vote-by-mail), [drop-box instructions](https://www.lavote.gov/home/voting-elections/voting-options/vote-by-mail/vbm-ballot-drop-off), [in-person voting information](https://www.lavote.gov/home/voting-elections/voting-options/voting-in-person), and [conditional registration guidance](https://www.lavote.gov/home/voting-elections/voter-registration/conditional-voter-registration). The regular registration deadline is October 19; eligible voters can conditionally register and vote through Election Day. Election Day is November 3, with voting from 7 a.m. to 8 p.m. and drop boxes closing at 8 p.m. Mailed ballots must be postmarked by Election Day and received within seven days; the County recommends mailing at least seven days ahead. The guide directs voters to the live official locators for current opening dates and hours rather than inventing local locations or claiming that all vote centers are already open.

The official registration-status, registration, drop-box locator, vote-center locator, and ballot-status destinations all returned successful pages during the review. No personal information was entered and no forms were submitted to election services.

Voting-guide validation passed: Astro check, production build, copy audit, production and preview SEO audits, 24 page/viewport checks, and 26 interaction checks. Additional widths from 320px through 1440px showed no horizontal overflow. The three-page PDF contains the new FAQ and guide link, retains the payer/funder disclosure, omits Matt’s contact information, and matches the built download. Screenshots and source-review evidence are saved under `.context/`.

## Primary campaign action — October 1, 2026

At the client's request, “Vote No” supersedes “How to vote” as the primary action in the header, homepage hero, closing sections, and mobile bottom bar. These buttons lead to `/join/#pledge`. The mobile bar labels the measure as “Measure PFD” instead of showing the election date and city. The voting guide remains available through the footer and the voting FAQ; its prominent Join-page link has been removed. The existing preview-only form behavior is unchanged.

Validation passed: Astro check, production build, copy and SEO audits, 24 responsive page checks, and 28 interaction checks, including the Vote No pledge links and footer/FAQ routes to the voting guide. The 320px mobile bar also fits without horizontal overflow. Local development remains running on port 4321; these changes have not been deployed.

Footer layout follow-up: the centered disclosure now remains between the logo and links down to 1001px, with the payer statement fitting on two lines. At 1000px and below it moves to a full-width row, leaving breathing room before the text would require a third line in the middle column. Confirmed wrapping and no horizontal overflow at nine widths from 320px through 1440px; production build passed. Disclosure wording and type sizes remain unchanged.

Signup/footer follow-up: added “Mayor’s Take” to the footer. Vote NO actions now target the signup form directly at `/join/#signup`, with header clearance on desktop and mobile; the older pledge section anchor remains available. Changed the signup action to “Sign Up” and removed the static privacy footnotes beneath both form buttons. Functional preview feedback and JavaScript fallback instructions appear above the actions when needed. Forms still do not send or save entries. Astro check, production build, copy audit, 31 interaction checks, responsive footer wrapping, and desktop/mobile signup positioning passed.

How-to-vote design follow-up: replaced the long sidebar-and-text layout with a concise registration row, two clearly separated voting choices, and a ballot-tracking row. Election Day and key deadlines remain prominent; same-day registration, mailing requirements, and early-voting details are available in collapsed expanders. Removed repeated explanations and redundant campaign links. Main text is 18px and action buttons are at least 56px tall. Official links retain new-tab behavior. Rechecked the County's mail-ballot instructions October 1; preserved postmark/receipt requirements and its mailing recommendation. Astro check, production build, copy/SEO audits, and responsive checks at 320, 390, 768, 1024, and 1440px passed.

Form-clarity follow-up: replaced the vague section headings with “Join the campaign” and “Contact our campaign,” and made form titles/action explanations explicit. Preview feedback now distinguishes an unsubmitted signup from an unsent message and points to Matt's working email/phone links. Preview explanations sit above the fields; no callouts were restored beneath the buttons. Actual delivery remains unconfigured, and the submission destination has been requested from the client. Astro check, build, copy audit, 31 interaction checks, and desktop/mobile signup positioning passed.

## Email form integration — October 1, 2026

The client directed all signup and contact submissions to Matt Klink at `matt@klinkcampaigns.com`. Added a Vercel server function and matching local Astro middleware that validate submissions and send text emails through Resend. The recipient is fixed; the visitor's email becomes the reply-to address. The buttons now read “Sign Up” and “Send Message,” with concise explanations of where the information goes. Success appears only after provider acceptance; failures preserve entries and retries reuse a provider idempotency key. Updated the privacy page to describe email delivery, service providers, and privacy contact information.

The handler includes origin checks, server validation, a body-size limit, a honeypot, timeouts, and a per-instance request limit. It does not deliberately log personal information or credentials. Production-wide rate limiting remains a hosting configuration step; the local limiter is not distributed.

No email credentials or verified sender are configured in this checkout, and the local Vercel CLI has no authenticated account. Delivery is therefore not active, no real emails were sent during testing, and no deployment was performed. Activation requires `RESEND_API_KEY` and a verified `CAMPAIGN_FROM_EMAIL` in the environment, then an inbox-delivery check. See README and `.env.example`. The live local endpoint correctly returns an unavailable response when configuration is missing.

Email-integration verification passed: eight server test groups, 34 browser interaction checks with mocked transport, 24 responsive page checks, Astro check, production build, copy audit, and SEO audit. Local development is running on port 4321. Tests sent no email to Matt; successful inbox delivery remains unverified until credentials are configured.

## PR verification — October 1, 2026

Final form actions are “Join the Campaign” and “Send Message,” with explanations that submissions go to Matt Klink. The client reports connecting the sending domain; the supplied Vercel screenshot shows production settings for `RESEND_API_KEY` and `CAMPAIGN_FROM_EMAIL`, using `Vote NO on Measure PFD <forms@pfdno.com>`. The secret's validity and inbox delivery have not been independently verified. No credentials are committed.

Re-ran Astro check (zero diagnostics), all eight server test groups, production build, copy audit, production and preview SEO audits, 34 mocked browser interaction checks, and 24 responsive page checks. The FAQ PDF has three pages, includes the voting answer and committee disclosure, omits campaign contact details, and keeps text inside page bounds. Screenshots are saved under `.context/screenshots/`.

Security/API, testing/maintainability, design/performance, and adversarial reviews found no blocking issues. Additional Codex CLI review was unavailable because the installed CLI does not support its configured model. Production deployment and an actual inbox-delivery check remain separate follow-up steps; this PR verification sent no email.

## Footer disclaimer placement — October 1, 2026

The disclaimer now appears in its own centered row below the footer logo and navigation at every width, superseding the earlier desktop layout notes. The upper row uses two columns with 28px spacing before the disclosure. Legal wording, typography, and mobile bottom clearance remain unchanged.

Astro check, all eight form tests, production build, copy audit, and SEO audit passed. Browser checks at 320, 375, 768, and 1440px confirmed the disclaimer sits below the footer information without horizontal overflow or overlap with the fixed mobile button. These checks were local; production deployment remains separate.

## Pasadena Star-News editorial, October 6, 2026

Added `/pasadena-star-news/` with the five paragraphs supplied by the client, grouped into the public-safety argument and the editorial board’s concluding recommendation. The original article’s title, Editorial Board byline, and September 9, 2026 publication date were confirmed on its public page during planning. The full article requires a subscription; the excerpts come from the client’s supplied text. Wording and punctuation are preserved, including the editorial’s rounded “about $300” example. HTML normalizes incidental spacing.

Source: https://www.pasadenastarnews.com/2026/09/09/endorsement-no-on-measure-pfd-pasadenas-newest-parcel-tax/

The page shares the mayor commentary’s editorial styles and closing Vote NO action, with smaller type for the longer quotations. It is linked as “Star-News Says Vote No” before the former mayor’s link in the main desktop/mobile navigation; the homepage feature and footer links are unchanged. Both article headers show only the heading and original-article link, with publication dates removed from their descriptions as well. Source metadata remains recorded internally and the Star-News quotations retain their captions. The shared public-page registry includes it in the sitemap, breadcrumbs, and reading guide. The copy audit exempts only blockquotes explicitly marked `data-attributed-quote` with an HTTP(S) `cite` URL, so quotations retain their source wording while attribution and campaign-written text remain checked.

Validation: Astro check completed with zero errors, warnings, or hints; production build, copy audit, SEO audit (eight canonical pages), and `git diff --check` passed. Gstack browse and targeted copy-audit fixtures passed 32 checks covering all five paragraphs, attribution, source link, source-only header, active navigation, desktop/mobile routing, keyboard skip/menu behavior, signup destination, unchanged homepage/footer promotion, and horizontal overflow at 320, 390, 768, 800, 801, 900, 1024, and 1440px. The new page had no browser console errors. Before/after screenshots confirmed the shared styles preserve the mayor’s page appearance; the subsequent removal of its header byline and date is intentional. Screenshots and the detailed validation record are under `.context/`. This validates the local implementation; no deployment was performed.
