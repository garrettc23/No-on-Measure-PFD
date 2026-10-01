import type { APIRoute } from 'astro';
import { absoluteUrl, allowIndexing } from '../utils/seo';

export const GET: APIRoute = () => new Response(
  allowIndexing
    ? `# Public content is available to search and AI crawlers, including OAI-SearchBot.\nUser-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`
    : 'User-agent: *\nDisallow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
