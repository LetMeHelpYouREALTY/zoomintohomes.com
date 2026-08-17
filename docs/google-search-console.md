# Google Search Console setup — zoomintohomes.com

Site prep in this repo (as of Aug 17, 2026). Verification and property creation happen in Google’s UI.

## Current indexing status (Aug 17, 2026 live check)

Production serves:

```html
<meta name="robots" content="index, follow"/>
```

on `https://www.zoomintohomes.com/` (and key routes). There is **no** `noindex` and **no** `X-Robots-Tag: noindex` on the live homepage.

GSC “Excluded by ‘noindex’ tag” rows for `/`, `/about`, `/contact`, `/listings`, and `/home/` are from **older crawls** (May–early Aug 2026) before the Zoom Into Homes rebuild set `robots: { index: true }`. Click **Validate fix** in GSC after this deploy; request indexing on `https://www.zoomintohomes.com/`.

### URL notes from the GSC example list

| Example URL | What should happen |
| --- | --- |
| `http://zoomintohomes.com/` | 308 → `https://www.zoomintohomes.com/` (indexable) |
| `https://zoomintohomes.com/` | 308 → www (indexable) |
| `https://www.zoomintohomes.com/` | 200, `index, follow`, canonical www |
| `https://zoomintohomes.com/home/` | 308 → `/` |
| `/listings`, `/about`, `/contact` | 200 on www (content routes; not redirected to `/`) |

Only intentional `noindex`: `app/not-found.tsx` and placeholder `app/listings/[id]/page.tsx`.

## Not found (404) — retired WordPress URLs

GSC may list old blog/archive URLs (e.g. `/2018/12/`, `/home-4/`, mortgage-rate posts, homeowner-vs-renter net-worth). Those pages are gone. Permanent redirects live in `redirects/legacy-wordpress.js` (wired from `next.config.js`) to `/`, `/buyers`, `/market-insights`, `/market-report`, or `/investment-properties`.

After deploy: **Page indexing → Not found (404)** and **Crawled - currently not indexed** → **Validate fix**.

## Plain-language SEO / GEO / AEO (Aug 17, 2026)

Buyer- and seller-facing copy avoids realtor slang (RealScout, Follow Up Boss, IDX/MLS jargon, “referral partners,” “feature sheets”) in visible UI. Prefer “homes for sale,” “video tour,” “access checklist,” and “care teams.”

Structured data on Zoom core pages:

| Graph | Where |
| --- | --- |
| `RealEstateAgent` + `Organization` + `WebSite` | Root layout via `buildOrganizationSchemas()` |
| `FAQPage` | Emitted with visible FAQs in `PageSeoSections` closing slot |
| `BreadcrumbList` | Key routes (`/about`, `/contact`, `/virtual-tour-process`, grants, care teams) |

After deploy: submit sitemap, Validate fix on prior noindex/404 rows, and spot-check rich results with Google’s Rich Results Test on `/` and `/contact`.

## What the codebase does

| Item | Location | Notes |
| --- | --- | --- |
| Canonical host | `lib/site-url.ts` | `https://www.zoomintohomes.com` |
| `sitemap.xml` | `app/sitemap.ts` | Indexable www paths only (no alias redirects) |
| `robots.txt` | `app/robots.ts` | Allows `/`; sitemap + host = www |
| Per-page robots + canonical | `lib/seo.ts` + layout | Explicit `index, follow` |
| `/home` alias | `next.config.js` + `vercel.json` | Permanent → `/` |
| Google verification meta | `app/layout.tsx` | When `GOOGLE_SITE_VERIFICATION` is set |

## Claude / ops steps

1. Open [Google Search Console](https://search.google.com/search-console).
2. Prefer a **Domain** property for `zoomintohomes.com` (covers apex + www) via DNS TXT.
3. Or **URL prefix** `https://www.zoomintohomes.com/` + HTML meta:
   - Set Vercel env `GOOGLE_SITE_VERIFICATION` to the tag’s `content` value.
   - Redeploy; confirm homepage source contains `google-site-verification`.
   - Click **Verify**.
4. **Sitemaps** → submit `https://www.zoomintohomes.com/sitemap.xml`.
5. **Page indexing** → open “Excluded by ‘noindex’” → **Validate fix**.
6. **URL inspection** on `https://www.zoomintohomes.com/` → **Request indexing**.
7. Confirm apex/http variants are not separate URL-prefix properties fighting www (Domain property preferred).

## Env

```env
GOOGLE_SITE_VERIFICATION=
```

## Do not invent

- Verification token / DNS TXT value
- Analytics IDs for GSC verification
- Schema.org properties or NAP/license/grant numbers
