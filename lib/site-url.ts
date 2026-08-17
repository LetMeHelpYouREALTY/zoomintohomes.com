/**
 * Canonical public origin for sitemap, robots, metadataBase, and Open Graph.
 * Live DNS: apex 308 → https://www.zoomintohomes.com (Vercel, Aug 2026).
 */
export const SITE_ORIGIN = "https://www.zoomintohomes.com" as const;

export const SITE_HOST = "www.zoomintohomes.com" as const;

export const indexablePaths = [
  "/",
  "/virtual-tour-process",
  "/what-we-measure",
  "/accessible-homes",
  "/glossary",
  "/henderson",
  "/summerlin",
  "/va-sah-grant-nevada",
  "/va-sha-grant-nevada",
  "/clark-county-disabled-veteran-property-tax-exemption",
  "/aging-in-place",
  "/referral-partners",
  "/referral-partners/one-pager",
  "/examples/feature-sheet",
  "/examples/walkthrough",
  "/about",
  "/contact",
  "/accessibility-statement",
  "/privacy",
  "/terms",
  "/accessibility-features",
  "/faq",
  "/buyers",
  "/sellers",
  "/listings",
  "/neighborhoods",
  "/services",
  "/home-valuation",
  "/security-policy",
] as const;

export type IndexablePath = (typeof indexablePaths)[number];

export function absoluteUrl(path: string = "/"): string {
  if (path === "/" || path === "") {
    return SITE_ORIGIN;
  }
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
