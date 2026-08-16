# Google Search Console setup — zoomintohomes.com

Site prep in this repo (as of Aug 2026). Verification and property creation happen in Google’s UI; Claude/ops sets the env token after GSC issues it.

## What the codebase already does

| Item                     | Location                              | Notes                                                      |
| ------------------------ | ------------------------------------- | ---------------------------------------------------------- |
| Canonical host           | `lib/site-url.ts`                     | `https://www.zoomintohomes.com` (apex 308 → www on Vercel) |
| `sitemap.xml`            | `app/sitemap.ts`                      | Nine indexable routes only                                 |
| `robots.txt`             | `app/robots.ts`                       | Allows crawl; points at www sitemap; `host` = www          |
| Stale static robots      | removed `public/robots.txt`           | Old heyberkshire.com file would override App Router output |
| Per-page canonical + OG  | `lib/seo.ts` + each `app/**/page.tsx` | Absolute www URLs                                          |
| Default social image     | `app/opengraph-image.jpg`             | Home hero                                                  |
| Google verification meta | `app/layout.tsx`                      | Emits only when `GOOGLE_SITE_VERIFICATION` is set          |
| Retired funnel URLs      | `next.config.js`                      | Permanent redirects → `/`                                  |
| JSON-LD                  | commented slot in `app/layout.tsx`    | Claude-only; do not invent schema here                     |

## Claude / ops steps (after this PR is on production)

1. Open [Google Search Console](https://search.google.com/search-console).
2. Prefer a **Domain** property for `zoomintohomes.com` (covers apex + www) via DNS TXT at the registrar. DNS edits are Claude-side — do not change Cloudflare from this repo.
3. Or add a **URL prefix** property for `https://www.zoomintohomes.com/` and verify with the HTML meta tag:
   - Copy the `content` value from the Google meta tag.
   - Set Vercel env `GOOGLE_SITE_VERIFICATION` to that value (no quotes).
   - Redeploy; confirm homepage source contains `google-site-verification`.
   - Click **Verify** in GSC.
4. Alternate URL-prefix method: upload Google’s HTML file into `public/` with the exact filename Google provides, commit, deploy, verify.
5. In GSC → **Sitemaps**, submit: `https://www.zoomintohomes.com/sitemap.xml`
6. Request indexing on `/` after the first crawl if needed.
7. Confirm **Page indexing** does not list the nine routes as “Excluded by ‘noindex’” or blocked by robots.
8. After NAP placeholders are replaced, Claude injects validated JSON-LD into the layout slot (LocalBusiness / RealEstateAgent).

## Env var added by this work

```env
# Optional until GSC issues a token. Server-side metadata only.
GOOGLE_SITE_VERIFICATION=
```

List this in Vercel project env when verifying via the HTML tag method.

## Do not invent

- Verification token / DNS TXT value
- Google Analytics / Tag Manager IDs for GSC verification
- Schema.org JSON-LD properties
- NAP, license numbers, or grant amounts
