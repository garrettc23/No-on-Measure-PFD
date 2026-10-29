import { referenceSources } from './guides';

const ordinance = (page: number) => `${referenceSources.ordinance.url}#page=${page}`;
const facilities = `${referenceSources.capitalFacilities.url}#page=4`;
const future = `${referenceSources.capitalFuture.url}#page=6`;

export const fundingComparisons = [
  {
    id: 'firefighters', label: 'Firefighters',
    heading: 'Firefighter staffing and training',
    existing: 'The City already funds fire and emergency services through available resources. Rejecting PFD would leave the City relying on those resources; it would not itself enact a new staffing plan.',
    proposed: 'PFD would allow spending on staffing, training, recruitment, and retention above a defined baseline. Operating allocations could vary each year with City Council approval.',
    limit: 'Eligible spending is not a commitment to a particular number of hires or a guaranteed response time.',
    sources: [{ label: 'City Attorney’s analysis', url: referenceSources.impartialAnalysis.url }, { label: 'Ordinance, pages 11 to 12', url: ordinance(11) }],
  },
  {
    id: 'stations', label: 'Stations',
    heading: 'Fire Stations 33 and 37',
    existing: 'The City’s FY 2027 to 2031 plan records funded renovations under project 71911. It separately lists full replacements of Stations 33 and 37 as unfunded future projects.',
    proposed: 'PFD names reconstruction of Stations 33 and 37 within its first ten years. It directs the City to prioritize fire capital improvements until completion.',
    limit: 'Renovation funding does not mean full replacements are paid for. Approval would not itself announce a construction start date.',
    sources: [{ label: 'Renovation program, page 1.2', url: facilities }, { label: 'Replacement projects, pages 1.19 to 1.20', url: future }, { label: 'Ordinance, pages 10 to 11', url: ordinance(10) }],
  },
  {
    id: 'equipment', label: 'Equipment',
    heading: 'Equipment and emergency communications',
    existing: 'Without PFD, the City would continue using available resources for fire and emergency services. The City Attorney’s analysis says the absence of this additional funding may limit capital improvements and wildfire mitigation.',
    proposed: 'Authorized uses include fire apparatus, rescue ambulances, emergency medical equipment, communications and alert systems, and brush-removal equipment. Capital-related debt service is also allowed.',
    limit: 'The ordinance identifies eligible uses; it does not set a purchase quantity or delivery date for each item.',
    sources: [{ label: 'City Attorney’s analysis', url: referenceSources.impartialAnalysis.url }, { label: 'Ordinance, pages 9 to 11', url: ordinance(9) }],
  },
  {
    id: 'taxes', label: 'Taxes',
    heading: 'What property owners would pay',
    existing: 'A No outcome would not create the proposed PFD charge. Existing property taxes and assessments would remain separate obligations.',
    proposed: 'PFD would add $0.19 per taxable square foot of improved property each year, subject to exemptions, for a 14-year term. A property with 1,600 taxable square feet would owe $304 a year.',
    limit: 'An individual bill depends on taxable building area and exemption eligibility. The ordinance does not specify a calendar date for the first bill.',
    sources: [{ label: 'Ordinance: exemptions, pages 9 to 10', url: ordinance(9) }, { label: 'Tax rate, page 12', url: ordinance(12) }, { label: 'Term, page 15', url: ordinance(15) }],
  },
];

export const firefighterFaqs = [
  {
    question: 'Would Measure PFD hire more Pasadena firefighters?',
    answer: 'It would authorize funding for staffing, recruitment, retention, and training above the ordinance’s baseline. It does not specify a guaranteed number of new firefighters. Annual operating allocations would depend on City Council priorities and approval.',
    source: ordinance(11), label: 'Ordinance, section 4.110.160',
  },
  {
    question: 'Does a No vote cut existing fire funding?',
    answer: 'A No outcome would reject this new parcel tax; it would not itself enact a cut to the existing fire budget. The City would continue relying on available resources. The City Attorney warns that without additional funding, wildfire mitigation and capital improvements may face limits. Neither outcome guarantees future service levels.',
    source: referenceSources.impartialAnalysis.url, label: 'City Attorney’s impartial analysis',
  },
  {
    question: 'Are replacements of Stations 33 and 37 already funded?',
    answer: 'The adopted FY 2027 to 2031 capital plan lists both full replacements as unfunded. Completed tenant improvements at Station 33 and appropriations for the broader renovation program are separate from financing a full replacement.',
    source: future, label: 'Capital plan, pages 1.19 to 1.20',
  },
  {
    question: 'Would Measure PFD guarantee faster emergency responses?',
    answer: 'The proposal allows investments intended to improve emergency response, including staffing, training, facilities, and communications. It does not promise a specific response time. Annual reports would document spending, project status, and service enhancements above the baseline.',
    source: ordinance(11), label: 'Ordinance, sections 4.110.160 and 4.110.190',
  },
  {
    question: 'Does Measure PFD protect the existing General Fund contribution?',
    answer: 'It defines a baseline using the average annual Fire Department budget for the prior three fiscal years and front-line services at its effective date. It also says that prioritizing capital improvements does not obligate the City to maintain a specific General Fund appropriation. That is not a guarantee of an unchanged future budget.',
    source: ordinance(9), label: 'Ordinance, sections 4.110.120 and 4.110.160',
  },
];
