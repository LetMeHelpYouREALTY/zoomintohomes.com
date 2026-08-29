/**
 * Retired WordPress / early-site URLs still in Google Search Console as 404s.
 * Permanent redirects so crawlers consolidate to live Zoom Into Homes pages.
 *
 * @type {Array<{ source: string, destination: string, permanent?: boolean }>}
 */
const legacyWordpressRedirects = [
  // GSC "Not found (404)" examples (crawled Feb 2026)
  {
    source: "/mortgage-forbearance-a-helpful-option-for-homeowners-facing-challenges",
    destination: "/",
  },
  {
    source: "/mortgage-forbearance-a-helpful-option-for-homeowners-facing-challenges/",
    destination: "/",
  },
  {
    source: "/investors-are-not-buying-up-all-the-homes",
    destination: "/contact",
  },
  {
    source: "/investors-are-not-buying-up-all-the-homes/",
    destination: "/contact",
  },
  {
    source: "/the-5-year-rule-for-home-prices",
    destination: "/",
  },
  {
    source: "/the-5-year-rule-for-home-prices/",
    destination: "/",
  },
  {
    source: "/why-experts-say-mortgage-rates-should-ease-over-the-next-year",
    destination: "/",
  },
  {
    source: "/why-experts-say-mortgage-rates-should-ease-over-the-next-year/",
    destination: "/",
  },
  // GSC "Crawled - currently not indexed" (crawled Jul 2025)
  {
    source: "/the-big-difference-between-a-homeowners-and-a-renters-net-worth",
    destination: "/contact",
  },
  {
    source: "/the-big-difference-between-a-homeowners-and-a-renters-net-worth/",
    destination: "/contact",
  },
  {
    source: "/home-4",
    destination: "/",
  },
  {
    source: "/home-4/",
    destination: "/",
  },
  // WordPress date archives (e.g. /2018/12/)
  {
    source: "/:year(\\d{4})/:month(\\d{2})",
    destination: "/",
  },
  {
    source: "/:year(\\d{4})/:month(\\d{2})/",
    destination: "/",
  },
  {
    source: "/:year(\\d{4})",
    destination: "/",
  },
  {
    source: "/:year(\\d{4})/",
    destination: "/",
  },
  // Old WP "home-N" landing variants
  {
    source: "/home-:num(\\d+)",
    destination: "/",
  },
  {
    source: "/home-:num(\\d+)/",
    destination: "/",
  },
];

module.exports = { legacyWordpressRedirects };
