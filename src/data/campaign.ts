export const campaign = {
  name: 'No on Measure PFD',
  title: 'Support Pasadena’s firefighters. Vote NO on Measure PFD.',
  tagline: 'Support public safety. Keep Pasadena affordable.',
  description: 'We stand with our firefighters, police, and paramedics. We are asking for a fairer way to fund public safety. Read the measure, understand the cost, and get involved.',
  electionDate: 'Tuesday, November 3, 2026',
  contact: { name: 'Matt Klink', phone: '310-283-6267', telephone: '+13102836267', email: 'matt@klinkcampaigns.com' },
  // Website disclaimer per counsel's Sept. 25, 2026 requirements: top or bottom of every page, 11pt+ (15px+), contrasting color, never all caps. Update when the National Association of REALTORS® becomes a top funder.
  disclosure: 'Paid for by Committee for Responsible Property Taxation – Opposing Measure PFD, Sponsored by REALTORS®.',
  topFunder: 'Committee’s Top Funder: California Association of REALTORS®.',
  // Set only after campaign confirmation. No donation control is rendered without a URL.
  donationUrl: '',
  // Add the client-approved PDF here when it is ready.
  factSheetUrl: '',
};

export const sources = {
  ordinance: {
    title: 'City of Pasadena: ballot measure and proposed ordinance',
    url: 'https://www.cityofpasadena.net/city-clerk/wp-content/uploads/sites/21/2026-General-Election-Ballot-Measure-Information.pdf',
    description: 'Resolution 10203 and the complete proposed ordinance. Adopted August 3, 2026.',
  },
  election: {
    title: 'City of Pasadena: November 2026 election information',
    url: 'https://www.cityofpasadena.net/city-clerk/general-election-2026/',
    description: 'Official election information, voter resources, and ballot documents.',
  },
  county: {
    title: 'Los Angeles County: measures appearing on the ballot',
    url: 'https://content.lavote.gov/docs/rrcc/documents/measures-appearing-on-the-ballot---november-3-2026-rev-8-14-2026-v-4.pdf',
    description: 'The county’s ballot measure list, including Pasadena’s Measure PFD.',
  },
};

export const taxEstimateNote = 'Estimate based on the median sales price for a Pasadena home.';

export const facts = [
  { label: 'Election', value: 'Tuesday, November 3, 2026', ref: 'Resolution 10203, §2' },
  { label: 'Annual rate', value: '$0.19 per square foot of improved property', ref: '§4.110.170' },
  { label: 'Duration', value: '14 years after the ordinance takes effect', ref: '§4.110.240' },
  { label: 'Estimated revenue', value: 'Approximately $22.1 million annually', ref: 'Ballot question' },
  { label: '1,600-square-foot example', value: '$304 a year; $4,256 over 14 years', ref: '1,600 × $0.19; before exemptions' },
  { label: 'Combined household tax cost (campaign estimate)', value: 'More than $1,700 in new taxes since 2020 for many households, combining city and school-district tax and bond measures with proposed Measure PFD. This campaign estimate includes the proposed $304 annual PFD charge on a typical home.', note: taxEstimateNote, ref: 'Campaign-supplied messaging; supporting calculation pending' },
  { label: 'Vote required', value: 'Two-thirds of votes cast on the measure', ref: 'Resolution 10203, §6' },
  { label: 'Exemptions', value: 'Qualifying very-low-income owners; owners with senior or disability utility-tax exemptions; certain government, religious, and community-service properties', ref: '§4.110.130' },
  { label: 'Oversight', value: 'Annual independent financial audit, public annual report, and City Council oversight', ref: '§4.110.190' },
];

export const faqGroups = [
  { id: 'basics', title: 'Measure PFD basics' },
  { id: 'cost', title: 'Costs and exemptions' },
  { id: 'funding', title: 'Funding and accountability' },
] as const;

export interface CampaignFaq {
  id: string;
  group: typeof faqGroups[number]['id'];
  question: string;
  answer: string;
  reference: string;
  sourceUrl?: string;
  note?: string;
}

export const faqs: CampaignFaq[] = [
  {
    id: 'what-is-measure-pfd', group: 'basics',
    question: 'What is Measure PFD in Pasadena?',
    answer: 'Measure PFD is a proposed Pasadena parcel tax on the November 3, 2026 ballot to fund Fire Department facilities, equipment, and emergency-response services. It would charge $0.19 per square foot of improved property each year for 14 years, subject to exemptions. The measure needs two-thirds of votes cast on it to pass.',
    reference: 'Resolution 10203, §§2 and 6; ordinance §§4.110.170 and 4.110.240', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'when-is-the-election', group: 'basics',
    question: 'When is the vote on Measure PFD?',
    answer: 'Measure PFD is on Pasadena’s November 3, 2026 general-election ballot. The City Clerk’s election page links to official voter-registration information, vote-by-mail instructions, and Los Angeles County voting resources.',
    reference: 'City of Pasadena, November 2026 election information', sourceUrl: sources.election.url,
  },
  {
    id: 'who-can-vote', group: 'basics',
    question: 'Who can vote on Measure PFD?',
    answer: 'The measure goes before eligible registered voters in the City of Pasadena. It is not a countywide ballot measure, and voting is not limited to property owners. Registered Pasadena voters who rent their homes can also vote on it.',
    reference: 'Resolution 10203, §§1 and 6', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'what-does-yes-mean', group: 'basics',
    question: 'What does a YES vote on Measure PFD mean?',
    answer: 'A YES vote supports creating the proposed parcel tax for Pasadena fire protection and emergency-response services. If at least two-thirds of votes cast on the measure are YES, the tax is authorized at $0.19 per square foot of improved property annually, subject to exemptions.',
    reference: 'Resolution 10203, §6; ordinance §§4.110.130 and 4.110.170', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'what-does-no-mean', group: 'basics',
    question: 'What does a NO vote on Measure PFD mean?',
    answer: 'A NO vote opposes this proposed parcel tax. The measure needs two-thirds approval to pass. Its defeat would not enact an alternative funding plan. Our campaign would ask City Hall to return with a proposal that shares the cost more broadly.',
    reference: 'Resolution 10203, §6; campaign position', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'how-long-does-it-last', group: 'basics',
    question: 'How long would the Measure PFD tax last?',
    answer: 'The proposed tax expires 14 years after its effective date unless Pasadena voters approve an extension. After expiration, any remaining money must still be spent on the purposes authorized by the ordinance.',
    reference: 'Ordinance §4.110.240', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'how-much-would-it-cost', group: 'cost',
    question: 'How much would Measure PFD cost a homeowner?',
    answer: 'Multiply the taxable square footage of improved property by $0.19 to estimate the annual tax. For 1,600 taxable square feet, that is $304 a year, or $4,256 over 14 years. For 2,000 taxable square feet, it is $380 a year. These examples are before exemptions; the taxable footage used by the City determines the actual bill.',
    reference: 'Ordinance §4.110.170; arithmetic examples', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'property-value-or-square-footage', group: 'cost',
    question: 'Is Measure PFD based on home value or square footage?',
    answer: 'The proposed tax is based on square feet of improved property, not the home’s market value or purchase price. The annual rate is $0.19 per taxable square foot. The median-home-price basis mentioned in this campaign’s $1,700 combined-tax estimate is separate from PFD’s square-footage calculation.',
    reference: 'Ordinance §4.110.170; campaign estimate methodology', sourceUrl: sources.ordinance.url,
    note: taxEstimateNote,
  },
  {
    id: 'does-the-rate-increase', group: 'cost',
    question: 'Would the Measure PFD tax rate increase automatically each year?',
    answer: 'The ordinance sets the rate at $0.19 per square foot for each fiscal year and does not include an automatic annual inflation increase. An increase beyond the maximum rate authorized by the ordinance would require a vote of Pasadena voters.',
    reference: 'Ordinance §§4.110.170 and 4.110.200', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'how-is-the-tax-collected', group: 'cost',
    question: 'How would the Measure PFD tax be collected?',
    answer: 'The ordinance makes the annual tax due in two equal installments under Los Angeles County Tax Collector procedures. It also provides a process for correcting calculation errors and requesting refunds through the City.',
    reference: 'Ordinance §§4.110.170 and 4.110.180', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'who-is-exempt', group: 'cost',
    question: 'Who is exempt from Measure PFD? Are seniors exempt?',
    answer: 'Exemptions include owners who receive a Pasadena senior or disability utility-user-tax exemption, and owners whose annual household income does not exceed the applicable HUD Very Low Income Limit. Age alone is not the exemption described in the ordinance. Certain government, religious, and community-service properties are also exempt. The City administers eligibility.',
    reference: 'Ordinance §4.110.130', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'does-it-affect-renters', group: 'cost',
    question: 'Does Measure PFD affect renters and apartment buildings?',
    answer: 'Rental properties are included in the tax on improved property, subject to exemptions. For 20,000 taxable square feet, the proposed charge is $3,800 a year for the building’s owner. That is not a prediction of a rent increase: the measure does not itself authorize a direct rent pass-through. Our campaign is concerned about the added cost of operating housing.',
    reference: 'Ordinance §§4.110.130 and 4.110.170; campaign position', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'what-would-it-fund', group: 'funding',
    question: 'What would Measure PFD pay for?',
    answer: 'The measure would fund Fire Department facilities, equipment, and emergency services. Eligible uses include fire stations, paramedic response, wildfire readiness, communications, and debt service for capital improvements. It also covers tax administration costs. The ballot question estimates approximately $22.1 million in annual revenue.',
    reference: 'Resolution 10203, §2; ordinance §§4.110.150 and 4.110.160', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'what-oversight-is-required', group: 'funding',
    question: 'What oversight and audits would Measure PFD require?',
    answer: 'The ordinance requires an annual independent financial audit, a public annual report, and City Council oversight. Reports must show revenue, spending, capital-project progress, and whether funds enhanced services above the established baseline. The ordinance names reconstruction of Fire Stations 33 and 37 within the first ten years.',
    reference: 'Ordinance §§4.110.150 and 4.110.190', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'does-it-protect-existing-funding', group: 'funding',
    question: 'Does Measure PFD protect existing Fire Department funding?',
    answer: 'The measure defines a baseline using the preceding three fiscal years’ average Fire Department budget and existing front-line services. It funds service enhancements above that baseline. It also states that prioritizing capital improvements does not require the City to maintain a specific General Fund appropriation.',
    reference: 'Ordinance §§4.110.120 and 4.110.160', sourceUrl: sources.ordinance.url,
  },
  {
    id: 'what-is-the-1700-estimate', group: 'funding',
    question: 'What does the campaign’s $1,700 tax figure include?',
    answer: 'The campaign estimates more than $1,700 in new taxes since 2020 for many households, combining city and school-district tax and bond measures with proposed Measure PFD. That total includes the proposed $304 annual PFD charge on a typical home. The $304 is not added on top of the $1,700 estimate.',
    note: taxEstimateNote, reference: 'Campaign estimate; supporting calculation pending',
  },
  {
    id: 'why-vote-no', group: 'funding',
    question: 'Why does this campaign oppose Measure PFD?',
    answer: 'We support Pasadena’s firefighters and paramedics. Our campaign opposes this additional parcel tax and believes the City should develop a funding plan that shares the cost more broadly and gives residents a clearer picture of what they will pay.',
    reference: 'Campaign position',
  },
  {
    id: 'where-is-the-official-text', group: 'funding',
    question: 'Where can I read the official Measure PFD ballot text?',
    answer: 'The City Clerk’s ballot-measure packet includes Resolution 10203, the ballot question, and the full proposed parcel-tax ordinance. The City’s November 2026 election page provides voting resources. This website represents the No on Measure PFD campaign and is not an official City election website.',
    reference: 'City of Pasadena, official ballot-measure packet and election information', sourceUrl: sources.ordinance.url,
  },
];

export const photoCredits = [
  {
    title: 'Pasadena City Hall',
    file: 'pasadena-city-hall.png',
    url: '',
    author: '',
    date: '',
    description: 'An aerial view of Pasadena City Hall, supplied for this local preview.',
    license: '',
    licenseUrl: '',
    sourceNote: 'Photographer and usage permission have not been confirmed. A high-resolution version and permission are needed before public launch.',
  },
  {
    title: 'Neighborhood Surrounding Richard H. Chambers United States Court of Appeals, Pasadena, California',
    file: 'pasadena-del-rosa-homes.jpg',
    url: 'https://commons.wikimedia.org/wiki/File:Neighborhood_Surrounding_Richard_H._Chambers_United_States_Court_of_Appeals,_Pasadena,_California_(14516428984).jpg',
    author: 'Ken Lund',
    date: 'June 26, 2014',
    description: 'Homes at Del Rosa Road and Grand Avenue in Pasadena.',
    license: 'Creative Commons Attribution-ShareAlike 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
  },
];
