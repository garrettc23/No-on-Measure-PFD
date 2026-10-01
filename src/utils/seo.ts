export const siteUrl = import.meta.env.SITE;
// Vercel previews and local development stay out of search; production builds are crawlable.
export const allowIndexing = import.meta.env.PROD
  && import.meta.env.VERCEL_ENV !== 'preview'
  && import.meta.env.VERCEL_ENV !== 'development';

export const publicPages = [
  { path: '/', name: 'No on Measure PFD', description: 'The campaign opposing Pasadena’s proposed Measure PFD parcel tax.' },
  { path: '/facts/', name: 'Measure PFD facts and FAQ', description: 'What PFD is, costs, exemptions, voting, funding, and official sources.' },
  { path: '/bill-paparian/', name: 'Bill Paparian commentary', description: 'Excerpts from the former Pasadena mayor’s published commentary.' },
  { path: '/join/', name: 'Join the campaign', description: 'Campaign contacts and ways to get involved.' },
  { path: '/privacy/', name: 'Privacy notice', description: 'How the website handles visitor information.' },
  { path: '/credits/', name: 'Photography credits', description: 'Image sources and usage information.' },
] as const;

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).href;
}

export function serializeSchema(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
