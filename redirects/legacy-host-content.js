/**
 * Retired HeyBerkshire / Jan Duffy marketing URLs that were copied onto
 * zoomintohomes.com. Google's site reputation policy (Search Central,
 * 28 Aug 2026; enforcement split EEA vs non-EEA from 30 Aug 2026) treats
 * third-party or duplicate-brand sections on a host domain as a ranking
 * risk for users outside the EEA — this site's Las Vegas traffic.
 *
 * These paths are not first-party Zoom Into Homes. They duplicate
 * heyberkshire.com (different brand, authorship, and often the same copy).
 * Permanent redirects send crawlers to first-party Zoom pages, except
 * /google-business which belongs on heyberkshire.com.
 *
 * Keep destinations on indexable Zoom paths (or the other first-party
 * domain). Never chain leftover → leftover.
 *
 * @type {Array<{ source: string, destination: string, permanent: true }>}
 */
const HEYBERKSHIRE_ORIGIN = "https://www.heyberkshire.com";

const leftoverHostRedirects = [
  { source: "/buyers", destination: "/contact", permanent: true },
  { source: "/buyers/:path*", destination: "/contact", permanent: true },
  { source: "/sellers", destination: "/contact", permanent: true },
  { source: "/sellers/:path*", destination: "/contact", permanent: true },
  { source: "/services", destination: "/virtual-tour-process", permanent: true },
  { source: "/faq", destination: "/contact", permanent: true },
  { source: "/listings", destination: "/", permanent: true },
  { source: "/listings/:path*", destination: "/", permanent: true },
  { source: "/luxury-homes", destination: "/accessible-homes", permanent: true },
  { source: "/investment-properties", destination: "/contact", permanent: true },
  { source: "/new-construction", destination: "/contact", permanent: true },
  { source: "/relocation", destination: "/contact", permanent: true },
  { source: "/home-valuation", destination: "/contact", permanent: true },
  { source: "/market-insights", destination: "/", permanent: true },
  { source: "/market-report", destination: "/", permanent: true },
  { source: "/market-update", destination: "/", permanent: true },
  { source: "/why-berkshire-hathaway", destination: "/about", permanent: true },
  {
    source: "/google-business",
    destination: `${HEYBERKSHIRE_ORIGIN}/google-business`,
    permanent: true,
  },
  {
    source: "/neighborhoods/henderson",
    destination: "/henderson",
    permanent: true,
  },
  {
    source: "/neighborhoods/summerlin",
    destination: "/summerlin",
    permanent: true,
  },
  { source: "/neighborhoods", destination: "/accessible-homes", permanent: true },
  {
    source: "/neighborhoods/:path*",
    destination: "/accessible-homes",
    permanent: true,
  },
  {
    source: "/55-plus-communities",
    destination: "/aging-in-place",
    permanent: true,
  },
  {
    source: "/55-plus-communities/:path*",
    destination: "/aging-in-place",
    permanent: true,
  },
];

/** Path prefixes that must not remain indexable on this host. */
const leftoverHostPrefixes = [
  "/buyers",
  "/sellers",
  "/services",
  "/faq",
  "/listings",
  "/luxury-homes",
  "/investment-properties",
  "/new-construction",
  "/relocation",
  "/home-valuation",
  "/market-insights",
  "/market-report",
  "/market-update",
  "/why-berkshire-hathaway",
  "/google-business",
  "/neighborhoods",
  "/55-plus-communities",
];

module.exports = {
  leftoverHostRedirects,
  leftoverHostPrefixes,
  HEYBERKSHIRE_ORIGIN,
};
