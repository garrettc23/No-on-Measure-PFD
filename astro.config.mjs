import { defineConfig } from 'astro/config';
const site = new URL(process.env.PUBLIC_SITE_URL || 'https://www.pfdno.com');
if (site.protocol !== 'https:' || site.pathname !== '/' || site.search || site.hash || site.username || site.password) {
  throw new Error('PUBLIC_SITE_URL must be an HTTPS origin, without a path, query, or credentials.');
}
export default defineConfig({ site: site.origin, output: 'static', devToolbar: { enabled: false }, trailingSlash: 'always' });
