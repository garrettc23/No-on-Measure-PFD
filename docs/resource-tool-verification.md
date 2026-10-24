# Additional resource tools

Implemented and reviewed October 24, 2026. Local changes only.

## Delivered

- Optional annual property-tax bill comparison in the existing PFD calculator. Adds the estimated annual PFD charge to the amount entered; does not forecast other taxes or assess exemption eligibility.
- Expandable square-footage walkthrough next to the calculator. The illustrated record uses invented example numbers, not a real property record.
- An exemption checklist on the existing exemptions guide. Recommendations identify categories to investigate; they never approve an exemption or conclusively deny eligibility.
- `/measure-pfd-pass-or-fail/`, covering the vote threshold, both outcomes, billing uncertainty, duration, projects, and post-election steps.

Inputs remain in page memory. Neither tool stores answers, puts them in URLs, submits them, or reports them in analytics. Custom-event reporting remains disabled. No address, income amount, email, or signup is requested.

## Factual verification

The [proposed resolution and ordinance](https://www.cityofpasadena.net/fire/wp-content/uploads/sites/25/MEASURE-PFD-RESOLUTION-PARCEL-TAX-MEASURE.pdf) supplied the following:

- Pages 1–3 and 14: at least two-thirds of votes cast on the proposal are needed.
- Pages 9–10, 4.110.130: constitutional, government, qualifying religious/community-service property, specified Pasadena utility-tax, and income-based exemptions.
- Page 10, 4.110.150: reconstruction of Stations 33 and 37 within the first ten years.
- Pages 11–13: authorized uses, special fund, installments, audits, and reports.
- Pages 14–15: effective-date language, debt-service protection on repeal or amendment, and 14-year sunset. The text does not name a first billing year; none is invented in the guide.

The [City’s measure overview](https://www.cityofpasadena.net/fire/measure-pfd/) links to the County Assessor to find building square footage. The [Assessor search page](https://assessor.lacounty.gov/homeowners/property-search) links to the [Assessor Portal](https://portal.assessor.lacounty.gov/). Live browser inspection confirmed Basic Search by AIN or address, parcel address/status, “Building & Land Overview,” “Building SqFt,” and “Land SqFt.” Missing, zero, multi-building, or mismatched records require confirmation rather than a guessed area.

The exemption tool uses no fixed income thresholds. The ordinance specifies the applicable calendar year's HUD Very Low (50%) Income Limit for Los Angeles-Long Beach-Glendale. Visitors who have not checked their threshold can select “I need to check.”

## Presentation

Keep the original single square-footage input and calculation action. The annual-bill input is optional and collapsed initially; square-footage help also expands only when requested. Keep results below the action, card buttons aligned left, centered button labels, square panels, and no breadcrumbs, shortcut menus, eyebrows, or visible citation blocks. Official property lookup is a functional action, not a source list.

## Release boundary

The results template remains unpublished until official election reports exist. Search Console/Bing access, deployment, live response checks, and indexing submissions remain separate from local implementation. No ranking or ROI claim is established by these changes.

## City-limits and renter guides

Added October 24, 2026:

- `/pasadena-city-limits/`: guided address/parcel lookup, not an automated eligibility result. The City Clerk links to [Find My District](https://www.cityofpasadena.net/find-my-district/), whose instructions confirm address/intersection search, expandable property information, and map layers. Its embedded ArcGIS app loaded an address-search interface; WebGL was unavailable in the audit browser, so a returned boundary result was not verified. The guide includes the City Service Center number shown on that official page, 626-744-7311, for unresolved parcels or map failures. The general GIS gallery returned no usable listings and is not a primary action. Ordinance §4.110.140 confines the tax to parcels within Pasadena.
- `/measure-pfd-renters/`: distinguishes the property owner's proposed charge from a tenant's rent. Now includes a conditional full-pass-through calculator, without an automatic pass-through claim. [Rent Stabilization Overview](https://www.cityofpasadena.net/rent-stabilization/rent-stabilization-overview/) confirms the general pre-February 1, 1995 multi-unit coverage, with exceptions. Its numerical annual adjustment was for an expired period, so no annual cap is repeated. [Petitions and Hearings](https://www.cityofpasadena.net/rent-stabilization/petitions-hearings/) lists landlord fair-return petitions and property-tax increase/decrease documentation. The [Rental Registry](https://www.cityofpasadena.net/rentalregistry) explicitly permits public address or parcel searches without an account. The [housing counselor page](https://www.cityofpasadena.net/rent-stabilization/contact-housing-counselor/) confirms help with rent increases, coverage, and petitions; no contact request was submitted.

Both guides are static HTML with direct actions to official tools. No addresses or tenancy details are collected on this website. Their titles, cards, related links, sitemap entries, and reading-guide links come from the shared guide registry.

### Rental cost scenario

The renter guide models 100% of the proposed annual property tax for the entered building area. Building area × $0.19 gives the annual scenario; dividing by 12 gives the monthly scenario. The single input is building size, with no storage, transmission, or analytics. A 1,200-square-foot example yields $228 annually and $19 monthly. The result heading makes the full pass-through condition explicit. The guide explains that entering a whole apartment building returns its building-wide cost, not an individual tenant allocation. No number of rental units is requested.
