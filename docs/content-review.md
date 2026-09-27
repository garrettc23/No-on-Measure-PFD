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

1. Clear the user-supplied City Hall hero image for public use and obtain a high-resolution original. Confirm the committee's exact legal disclosure, FPPC ID, and any top-contributor disclosures. Footer language currently follows the supplied brief; this is not a determination of legal sufficiency.
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
