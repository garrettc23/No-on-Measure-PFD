import { guides } from '../data/guides';
import { campaignCopyReviewedDate } from '../data/campaignDocuments';
import { latestElectionReport } from '../data/electionResults';
export const siteUrl = import.meta.env.SITE;
// Vercel previews and local development stay out of search; production builds are crawlable.
export const allowIndexing = import.meta.env.PROD
  && import.meta.env.VERCEL_ENV !== 'preview'
  && import.meta.env.VERCEL_ENV !== 'development';

export const publicPages = [
  { modified: campaignCopyReviewedDate, path: '/', name: 'No on Measure PFD', description: 'The campaign opposing Pasadena’s proposed Measure PFD parcel tax.' },
  { modified: campaignCopyReviewedDate, path: '/facts/', name: 'Pasadena Measure PFD: What It Is, Costs & FAQ', description: 'What Measure PFD is, what Yes and No votes mean, proposed costs, exemptions, fire funding, and campaign FAQs.' },
  { modified: campaignCopyReviewedDate, path: '/resources/', name: 'Measure PFD tools & guides', description: 'Property-tax and rent calculators, PFD exemption checklist, Pasadena tax guides, voting resources, and downloadable documents.' },
  { path: '/vote/', name: 'How to vote on Measure PFD', description: 'Official registration, ballot-return, vote-center, and ballot-tracking tools.' },
  { path: '/bill-paparian/', name: 'Bill Paparian commentary', description: 'The former Pasadena mayor’s Pasadena Now and Pasadena Star-News commentaries on Measure PFD.' },
  { path: '/pasadena-star-news/', name: 'Pasadena Star-News editorial', description: 'Excerpts from the editorial board’s recommendation to vote No on Measure PFD.' },
  { modified: '2026-10-28', path: '/join/', name: 'Join the campaign', description: 'Campaign contacts and ways to get involved.' },
  { path: '/privacy/', name: 'Privacy notice', description: 'How the website handles visitor information.' },
  ...guides.map(guide => ({ path: guide.path, name: guide.name, description: guide.description, modified: guide.reviewed })),
  ...(latestElectionReport ? [{path:'/measure-pfd-results/',name:'Measure PFD election results',description:'Sourced election results, official status, and reporting history.',modified:latestElectionReport.reviewedAt}] : []),
] as const;

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).href;
}

export function serializeSchema(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
