import type { APIRoute } from 'astro';
import { absoluteUrl, allowIndexing, publicPages } from '../utils/seo';

export const GET: APIRoute = () => {
  const urls = allowIndexing
    ? publicPages.map(page => `  <url><loc>${absoluteUrl(page.path)}</loc></url>`).join('\n')
    : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
