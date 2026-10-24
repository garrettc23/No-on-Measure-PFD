import type { APIRoute } from 'astro';
import { campaign, faqs, factSheetSections, paragraphText } from '../data/campaign';
import { absoluteUrl, publicPages } from '../utils/seo';

// An optional reading guide for tools; this is not a search-engine ranking requirement.
export const GET: APIRoute = () => new Response([
  '# No on Measure PFD',
  '',
  '> A Pasadena campaign opposing Measure PFD on the November 3, 2026 ballot. This is a campaign website, not an official election authority.',
  '',
  '## Website pages',
  ...publicPages.map(page => `- [${page.name}](${absoluteUrl(page.path)}): ${page.description}`),
  `- [Printable FAQ](${absoluteUrl(campaign.faqUrl)}): Original campaign FAQ PDF. The website FAQ includes an approved exemption correction.`,
  `- [Campaign fact sheet](${absoluteUrl(campaign.factSheetUrl)}): Download the original fact sheet PDF.`,
  '',
  '## Campaign fact sheet',
  ...factSheetSections.flatMap(section => ['', `### ${section.title}`, ...section.paragraphs.map(p => p.text)]),
  '',
  '## Questions and answers',
  ...faqs.flatMap(faq => [
    '', `### ${faq.question}`, paragraphText(faq.paragraphs),
    faq.id === 'who-is-exempt' ? 'Source: Website exemption correction approved October 24, 2026.' : 'Source: No on Measure PFD campaign FAQ supplied October 8, 2026.',
  ]),
  '', '## Publisher disclosure', campaign.disclosure, campaign.topFunderLabel, campaign.topFunder,
  '',
].join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
