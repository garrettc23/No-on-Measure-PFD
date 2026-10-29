import type { APIRoute } from 'astro';
import { campaign, faqs, factSheetSections, paragraphText } from '../data/campaign';
import { campaignCopyReviewedDate } from '../data/campaignDocuments';
import { referenceSources } from '../data/guides';
import { absoluteUrl, publicPages } from '../utils/seo';

// An optional reading guide for tools; this is not a search-engine ranking requirement.
export const GET: APIRoute = () => new Response([
  '# No on Measure PFD',
  '',
  '> A Pasadena campaign opposing Measure PFD on the November 3, 2026 ballot. This is a campaign website, not an official election authority.',
  '',
  '## Website pages',
  ...publicPages.map(page => `- [${page.name}](${absoluteUrl(page.path)}): ${page.description}`),
  `- [Printable FAQ](${absoluteUrl(campaign.faqUrl)}): Original campaign FAQ PDF; does not incorporate subsequent website factual corrections.`,
  `- [Campaign fact sheet](${absoluteUrl(campaign.factSheetUrl)}): Original campaign fact sheet PDF; does not incorporate subsequent website factual corrections.`,
  '',
  '## Sources for website factual corrections',
  `Website FAQ and fact sheet reviewed ${campaignCopyReviewedDate}. Original PDFs retain their supplied wording.`,
  ...['ordinance', 'capitalFacilities', 'capitalFuture', 'measureI'].map(key => {
    const source = referenceSources[key as keyof typeof referenceSources];
    return `- [${source.title}](${source.url})`;
  }),
  '',
  '## Campaign fact sheet',
  ...factSheetSections.flatMap(section => ['', `### ${section.title}`, ...section.paragraphs.map(p => p.text)]),
  '',
  '## Questions and answers',
  ...faqs.flatMap(faq => [
    '', `### ${faq.question}`, paragraphText(faq.paragraphs),
    'Source: No on Measure PFD website FAQ. See the source documents for reviewed factual corrections above.',
  ]),
  '', '## Publisher disclosure', campaign.disclosure, campaign.topFunderLabel, campaign.topFunder,
  '',
].join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
