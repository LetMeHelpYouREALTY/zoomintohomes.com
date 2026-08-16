/**
 * Canonical public origin for sitemap, robots, metadataBase, and Open Graph.
 * Live DNS: apex 308 → https://www.zoomintohomes.com (Vercel, Aug 2026).
 */
export const SITE_ORIGIN = "https://www.zoomintohomes.com" as const;

export const SITE_HOST = "www.zoomintohomes.com" as const;

export const indexablePaths = [
  "/",
  "/how-it-works",
  "/accessibility-features",
  "/veterans",
  "/aging-in-place",
  "/referral-partners",
  "/about",
  "/contact",
  "/accessibility-statement",
] as const;

export type IndexablePath = (typeof indexablePaths)[number];

export function absoluteUrl(path: string = "/"): string {
  if (path === "/" || path === "") {
    return SITE_ORIGIN;
  }
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
