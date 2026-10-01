import { defineConfig } from 'astro/config';
import { existsSync } from 'node:fs';
import { createCampaignHandler } from './server/campaign-forms.mjs';
if (existsSync('.env')) process.loadEnvFile('.env');
const site = new URL(process.env.PUBLIC_SITE_URL || 'https://www.pfdno.com');
if (site.protocol !== 'https:' || site.pathname !== '/' || site.search || site.hash || site.username || site.password) {
  throw new Error('PUBLIC_SITE_URL must be an HTTPS origin, without a path, query, or credentials.');
}
export default defineConfig({
  site: site.origin,
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  integrations: [{
    name: 'campaign-forms-local',
    hooks: {
      'astro:server:setup': ({ server }) => {
        const handler = createCampaignHandler();
        server.middlewares.use((req, res, next) => {
          const path = req.url?.split('?')[0];
          if (path !== '/api/forms' && path !== '/api/forms/') return next();
          void handler(req, res);
        });
      },
    },
  }],
});
