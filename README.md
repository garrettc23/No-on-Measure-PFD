# No on Measure PFD

An Astro campaign website with email signup and contact forms. Home, Facts & FAQ, How to vote, former Mayor Bill Paparian’s commentary, Join Us, Privacy, photography credits, and printable FAQs.

## Run locally

Requires Node 22.12+ and npm 9.6.5+.

```sh
npm ci
npm run dev
```

Open http://localhost:4321. The server binds to the local machine only.

```sh
npm run check
npm run build
npm run audit:copy
npm run audit:seo
npm run preview
```

`dist/` is the static page output. The Vercel function at `api/forms.mjs` validates form submissions and emails them to Matt Klink through Resend. Form buttons stay disabled until the browser handler attaches. Entries are cleared only after the email provider accepts the request; failures preserve them for retry. Submissions are not stored in a website database or browser storage. Fonts and photographs are local. Vercel Web Analytics (`@vercel/analytics`) counts page views without cookies; enable it under the project’s Analytics tab in Vercel.

## Content and integrations

- `src/data/campaign.ts`: shared facts, FAQs, sources, contact details, and optional donation settings.
- `src/data/voting.ts`: verified official voting tools and instructions for the ungated `/vote/` guide.
- `src/data/paparian.ts`: client-supplied commentary excerpts, publication date, and original source link.
- `src/data/starNews.ts`: client-supplied editorial excerpts and original article metadata for `/pasadena-star-news/`.
- `src/styles/global.css`: responsive design and reusable styles, with self-hosted Archivo headings and Public Sans body text.
- `docs/content-review.md`: source verification, corrections to the brief, photo licensing, and launch dependencies.

Production builds use `https://www.pfdno.com/` for canonical URLs, social metadata, structured data, and the sitemap. Set `PUBLIC_SITE_URL` in the build environment to change that origin. Local development and Vercel preview/development builds remain `noindex` with crawling disabled; production builds allow search and AI crawlers. See `docs/seo-readiness.md` for validation and post-deployment steps. Donate appears only after `donationUrl` is configured. Email delivery requires the environment settings below. There is no SMS integration or automated text signup.

## Fact sheet, FAQ PDF, and social image

The client’s approved fact-sheet PDF is pending. Place it in `public/downloads/` and set `campaign.factSheetUrl` to its public path when ready; links remain hidden while that setting is empty. The previous generated fact sheet has been withdrawn.

The FAQ print route reads the same 19 questions and answers as the Facts page, with official sources and clearly attributed campaign estimates. The download retains the committee and top-funder disclosure but omits campaign contact details. Run the dev server, then:

```sh
BROWSE_BIN="$HOME/.agents/skills/gstack/browse/dist/browse" node scripts/generate-downloads.mjs
```

This uses gstack browse to generate the three-page FAQ and 1200 × 630 social image in `public/`. The expanded FAQ has one page each for basics, costs/exemptions, and funding/accountability. Rebuild after generation so `dist/` contains the updated files. Do not edit the PDFs directly.

## Browser verification

```sh
BROWSE_BIN="$HOME/.agents/skills/gstack/browse/dist/browse" node scripts/browser-audit.mjs
BROWSE_BIN="$HOME/.agents/skills/gstack/browse/dist/browse" node scripts/interaction-audit.mjs
```

Checks each main page at 390, 768, and 1440 pixels, and saves screenshots plus results under `.context/`. `PREVIEW_URL` can override the local URL. Browser interaction checks cover menu keyboard behavior, FAQ expansion, invalid entries, mocked email success/failure, retry behavior, the five-field signup and optional phone validation, and the tax-estimate footnote link. Results and screenshots in `.context/` are generated locally and are not committed.

## Email submissions to Matt

Both forms send only to `matt@klinkcampaigns.com`, with the visitor's validated email as `reply_to`. The recipient is fixed on the server and cannot be supplied by the browser. Emails contain the submitted fields, with a distinct subject for signup versus contact.

1. Verify a sending domain in Resend and create an API key with sending access.
2. Set `RESEND_API_KEY` and `CAMPAIGN_FROM_EMAIL` in Vercel's production environment. The latter must be a verified sender, for example `Vote NO on Measure PFD <forms@pfdno.com>` **after that domain is verified**. Never use a `PUBLIC_` prefix for credentials.
3. For localhost, copy `.env.example` to `.env`, add the same settings, and restart `npm run dev`. Astro's local middleware serves the same handler at `/api/forms/`. `astro preview` serves static files only and does not run the email endpoint.
4. Deploy through the normal review flow. A plain static-file host cannot deliver forms; Vercel must deploy `api/forms.mjs` alongside the Astro output.
5. Verify a clearly labeled test submission arrives in Matt's inbox and that replying addresses the visitor. Provider acceptance is not proof of inbox delivery. Review the provider delivery log for failures/bounces.

Missing configuration returns a failure, never a false success. The handler uses server validation, origin checks, a hidden spam field, a 16 KB body limit, a provider timeout, and Resend idempotency keys for retries. Its five-attempts-per-ten-minutes rate limit is **per running instance**; use Vercel Firewall rate limiting for distributed production abuse protection. No personal information or credentials are deliberately logged by the handler.

Run `npm run test:forms` for mocked server tests. The browser interaction audit also mocks form transport and never emails Matt. Real credentials are not needed for either test suite. Keep credentials out of git and chat.
