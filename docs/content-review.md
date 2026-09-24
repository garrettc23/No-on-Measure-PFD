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

Excluded pending verification: $1,700 in cumulative prior taxes; grocery equivalence; county sales-tax increase; Eaton Fire causation; housing-impact-study claims; mail-ballot rejection statistics. No outside news headlines, missing filed arguments, or unconfirmed endorsements are presented as available resources.

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

At the user’s request, public factual citations are consolidated in the Facts page resources section. Each standalone PDF has one source link. Per-provision references remain in the central data file for editorial verification. Photo attribution remains on the footer-linked credits page. Repeated inline citations were an editorial choice, not a legal requirement established during this build.

## September 24 client revisions

Applied the supplied campaign language to Home, the shared closing section, and Join Us. Support language includes police without stating that Measure PFD funds police. The housing-affordability and broader-funding statements are campaign arguments supplied by the client. Facts and FAQ provisions remain unchanged pending the Friday briefing.

Signup now has five inputs: first name, last name, phone (optional), email, and ZIP code. Role, interest, endorsement, and SMS checkboxes have been removed; the separate contact form remains available. Forms remain local previews with no transmission or persistence.

The client will supply the approved fact-sheet PDF. The previous generated PDF and print route have been removed; `campaign.factSheetUrl` controls all fact-sheet links and remains empty until the new document arrives. The FAQ PDF and social image use the new campaign-sign logo.
