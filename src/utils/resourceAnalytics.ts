import { track } from '@vercel/analytics';
import { publicPages } from './seo';
export type ResourceEvent = 'calculator_completed' | 'resource_downloaded' | 'official_source_clicked';
// No user inputs, query strings, personal information, or arbitrary URLs are sent.
export function recordResourceEvent(event: ResourceEvent, resource?: string) {
  // VERCEL_ENV is server-only: use the flag rendered by the shared layout.
  // Deployment must explicitly enable events after account support is confirmed.
  if (document.body.dataset.resourceAnalytics !== 'enabled') return;
  const page = publicPages.find(item => item.path === window.location.pathname)?.path;
  if (!page) return;
  try { track(event, resource ? { page, resource } : { page }); } catch { /* Analytics must not interrupt the resource. */ }
}
