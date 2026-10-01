import type { APIRoute } from 'astro';
import { campaign, faqs, sources } from '../data/campaign';
import { absoluteUrl, publicPages } from '../utils/seo';

// An optional reading guide for tools; this is not a search-engine ranking requirement.
export const GET: APIRoute = () => new Response([
  '# No on Measure PFD',
  '',
  '> A Pasadena campaign opposing Measure PFD on the November 3, 2026 ballot. This is a campaign website, not an official election authority.',
  '',
  '## Website pages',
  ...publicPages.map(page => `- [${page.name}](${absoluteUrl(page.path)}): ${page.description}`),
  `- [Printable FAQ](${absoluteUrl('/downloads/measure-pfd-faq.pdf')}): The same questions and answers in PDF format.`,
  '',
  '## Official sources',
  ...Object.values(sources).map(source => `- [${source.title}](${source.url})`),
  '',
  '## Questions and answers',
  ...faqs.flatMap(faq => [
    '', `### ${faq.question}`, faq.answer, ...(faq.note ? [faq.note] : []),
    `Source: ${faq.reference}${faq.sourceUrl ? ` (${faq.sourceUrl})` : ''}.`,
  ]),
  '', '## Publisher disclosure', campaign.disclosure, campaign.topFunder,
  '',
].join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
