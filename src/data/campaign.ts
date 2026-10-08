export { faqs, factSheetSections, paragraphText } from './campaignDocuments';

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
  // Original client-supplied PDFs; do not regenerate these from HTML.
  factSheetUrl: '/downloads/measure-pfd-fact-sheet.pdf',
  faqUrl: '/downloads/measure-pfd-faq.pdf',
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
