import { guides } from './guides';
import { latestElectionReport } from './electionResults';

// Shared by the visible resource tiles and their CollectionPage metadata.
const featured = ['/measure-pfd-calculator/', '/measure-pfd-pass-or-fail/'];
const orderedGuides = [...featured.flatMap(path => guides.filter(guide => guide.path === path)), ...guides.filter(guide => !featured.includes(guide.path))];
export const libraryResources = [
  ...orderedGuides.map(guide => ({ href: guide.path, title: guide.name, text: guide.summary, action: guide.action })),
  { href: '/vote/', title: 'How do I vote on Measure PFD?', text: 'Check your registration, find somewhere to vote, and track your ballot.', action: 'Find voting options' },
  ...(latestElectionReport ? [{ href: '/measure-pfd-results/', title: 'Election results', text: 'Check vote totals and whether results are preliminary or certified.', action: 'View results' }] : []),
];
