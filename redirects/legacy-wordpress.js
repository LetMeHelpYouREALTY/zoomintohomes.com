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
    destination: "/market-insights",
  },
  {
    source: "/mortgage-forbearance-a-helpful-option-for-homeowners-facing-challenges/",
    destination: "/market-insights",
  },
  {
    source: "/investors-are-not-buying-up-all-the-homes",
    destination: "/investment-properties",
  },
  {
    source: "/investors-are-not-buying-up-all-the-homes/",
    destination: "/investment-properties",
  },
  {
    source: "/the-5-year-rule-for-home-prices",
    destination: "/market-report",
  },
  {
    source: "/the-5-year-rule-for-home-prices/",
    destination: "/market-report",
  },
  {
    source: "/why-experts-say-mortgage-rates-should-ease-over-the-next-year",
    destination: "/market-insights",
  },
  {
    source: "/why-experts-say-mortgage-rates-should-ease-over-the-next-year/",
    destination: "/market-insights",
  },
  // GSC "Crawled - currently not indexed" (crawled Jul 2025)
  {
    source: "/the-big-difference-between-a-homeowners-and-a-renters-net-worth",
    destination: "/buyers",
  },
  {
    source: "/the-big-difference-between-a-homeowners-and-a-renters-net-worth/",
    destination: "/buyers",
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
    destination: "/market-insights",
  },
  {
    source: "/:year(\\d{4})/:month(\\d{2})/",
    destination: "/market-insights",
  },
  {
    source: "/:year(\\d{4})",
    destination: "/market-insights",
  },
  {
    source: "/:year(\\d{4})/",
    destination: "/market-insights",
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
