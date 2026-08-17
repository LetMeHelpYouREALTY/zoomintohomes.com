import { pageImages } from "./page-images";
import {
  aboutCopy,
  accessibilityStatementCopy,
  accessibleHomesCopy,
  agingInPlaceCopy,
  contactCopy,
  featuresCopy,
  howItWorksCopy,
  referralPartnersCopy,
  veteransCopy,
  whatWeMeasureCopy,
} from "./pages";
import { pageSeoEnhance } from "./seo-enhance";
import { pageMeta } from "./site";
import type { PageImage } from "./types";

export type PageHeroSpec = {
  image: PageImage;
  headline: string;
  support: string;
  explanation: string;
  servicePoints: readonly string[];
};

export type PageHeroOverrides = {
  image?: PageImage;
  headline?: string;
  support?: string;
  explanation?: string;
  servicePoints?: readonly string[];
};

export const DEFAULT_SERVICE_POINTS = [
  "Tour Las Vegas and Henderson homes on video first",
  "Write down doorway widths, step heights, and shower curbs",
  "Visit two or three finalists in person, not a dozen",
] as const;

function hero(
  image: PageImage,
  headline: string,
  support: string,
  explanation: string,
  servicePoints: readonly string[] = DEFAULT_SERVICE_POINTS,
): PageHeroSpec {
  return { image, headline, support, explanation, servicePoints };
}

function areaExplanation(place: string): string {
  return `${place} listings still need doorway widths, step heights, and shower curbs checked on the specific unit. Zoom Into Homes tours the home on video first, writes those numbers down, and schedules in-person visits for two or three finalists only.`;
}

function communityExplanation(name: string): string {
  return `${name} is a 55+ community in the Las Vegas Valley. A community label is not an access certificate. We tour the unit on video, measure doors and showers, and visit only the finalists that already pass the written list.`;
}

/**
 * Split-hero copy keyed by pathname. Dynamic routes use resolvePageHero()
 * with headline/support overrides from the page.
 */
export const pageHeroByPath: Record<string, PageHeroSpec> = {
  "/virtual-tour-process": hero(
    pageImages.howItWorks.hero,
    howItWorksCopy.h1,
    howItWorksCopy.lede,
    pageSeoEnhance.howItWorks.answerBlock,
  ),
  "/how-it-works": hero(
    pageImages.howItWorks.hero,
    howItWorksCopy.h1,
    howItWorksCopy.lede,
    pageSeoEnhance.howItWorks.answerBlock,
  ),
  "/what-we-measure": hero(
    pageImages.features.hero,
    whatWeMeasureCopy.h1,
    whatWeMeasureCopy.lede,
    "We write down door widths, step heights, shower curbs, hall widths, and control heights against the published access glossary. Each row has a date and notes how the number was checked.",
  ),
  "/accessibility-features": hero(
    pageImages.features.hero,
    featuresCopy.h1,
    featuresCopy.lede,
    pageSeoEnhance.features.answerBlock,
  ),
  "/glossary": hero(
    pageImages.features.hero,
    "Home access features glossary",
    "Thirty-five home features we write on access checklists.",
    "This glossary names doorway, bathroom, entry, and path features we can measure on Las Vegas and Henderson homes. Each term is a building claim with a date—not a label for who should live there.",
  ),
  "/accessible-homes": hero(
    pageImages.features.hero,
    accessibleHomesCopy.h1,
    accessibleHomesCopy.lede,
    "Zoom Into Homes publishes measured access features for Las Vegas and Henderson searches. We write doorway widths, shower curbs, and path widths on a dated checklist, then attach homes when inventory matches.",
  ),
  "/henderson": hero(
    pageImages.agingInPlace.hero,
    "Homes with measured access features in Henderson",
    pageMeta.henderson.description,
    areaExplanation("Henderson"),
  ),
  "/summerlin": hero(
    pageImages.agingInPlace.hero,
    "Homes with measured access features in Summerlin",
    pageMeta.summerlin.description,
    areaExplanation("Summerlin"),
  ),
  "/va-sah-grant-nevada": hero(
    pageImages.veterans.hero,
    "Buying a home with a VA SAH grant in Nevada",
    veteransCopy.lede,
    pageSeoEnhance.veterans.answerBlock,
  ),
  "/veterans": hero(
    pageImages.veterans.hero,
    veteransCopy.h1,
    veteransCopy.lede,
    pageSeoEnhance.veterans.answerBlock,
  ),
  "/va-sha-grant-nevada": hero(
    pageImages.veterans.hero,
    "Buying a home with a VA SHA grant in Nevada",
    "Special Housing Adaptation (SHA) is a VA adaptive housing grant program. This page explains how a Nevada purchase search can run beside SHA. It is not a benefits determination.",
    "SHA can fund adaptations that make a home safer or more usable for certain veterans. Current eligibility and amounts come from the VA. Zoom Into Homes sequences video tours and access checklists so showing time is not spent on plans that cannot take the needed work.",
  ),
  "/clark-county-disabled-veteran-property-tax-exemption": hero(
    pageImages.veterans.hero,
    "Clark County disabled-veteran property tax exemption tiers",
    pageMeta.clarkCountyExemption.description,
    "Clark County publishes assessed-value exemption tiers for veterans. These are local tax figures, not VA housing-grant amounts. Confirm current numbers on the Assessor site before you file. Housing search work still uses video tours and written doorway and bathroom measurements.",
  ),
  "/aging-in-place": hero(
    pageImages.agingInPlace.hero,
    agingInPlaceCopy.h1,
    agingInPlaceCopy.lede,
    pageSeoEnhance.agingInPlace.answerBlock,
  ),
  "/referral-partners": hero(
    pageImages.referralPartners.hero,
    referralPartnersCopy.h1,
    referralPartnersCopy.lede,
    pageSeoEnhance.referralPartners.answerBlock,
  ),
  "/referral-partners/one-pager": hero(
    pageImages.referralPartners.hero,
    "Care team one-pager",
    "Print or save this page for a folder. It is the written handoff Zoom Into Homes already describes for hospitals and care teams.",
    "Hospital and care teams get video tour recordings, dated access checklists, and a shortlist of two or three finalists. Send location constraints, required doorway and bathroom features, timeline, and consent to introduce the client.",
  ),
  "/examples/feature-sheet": hero(
    pageImages.features.hero,
    "Example home access checklist (redacted)",
    pageMeta.featureSheetExample.description,
    "This sample shows how doorway, bathroom, and path measurements are written after a video or on-site tour. Each row has a date and a source. Figures describe the building. They do not describe who should live there.",
  ),
  "/examples/walkthrough": hero(
    pageImages.howItWorks.hero,
    "Example virtual walkthrough",
    pageMeta.walkthroughExample.description,
    "Zoom Into Homes is built around remote video touring with measurement pauses. A sample walkthrough—or the written room-by-room equivalent—covers arrival, hall width, the primary bath, and kitchen clearances. Tours never autoplay.",
  ),
  "/about": hero(
    pageImages.about.hero,
    aboutCopy.h1,
    aboutCopy.lede,
    pageSeoEnhance.about.answerBlock,
  ),
  "/contact": hero(
    pageImages.contact.hero,
    contactCopy.h1,
    contactCopy.lede,
    pageSeoEnhance.contact.answerBlock,
  ),
  "/accessibility-statement": hero(
    pageImages.accessibilityStatement.hero,
    accessibilityStatementCopy.h1,
    accessibilityStatementCopy.lede,
    pageSeoEnhance.accessibilityStatement.answerBlock,
  ),
  "/privacy": hero(
    pageImages.accessibilityStatement.hero,
    "Privacy policy",
    pageMeta.privacy.description,
    "Zoom Into Homes collects name, email, phone, and notes you choose to share so we can check doorway and bathroom measurements. We use that information to respond, schedule video tours, and keep access checklists accurate. We do not sell personal information.",
  ),
  "/terms": hero(
    pageImages.home.hero,
    "Terms of use",
    pageMeta.terms.description,
    "This site is advertising for a Las Vegas and Henderson real-estate practice, not legal, medical, tax, or VA benefits advice. Access checklists describe measured home features on a stated date. Housing is offered without regard to protected classes under federal, Nevada, or local law.",
  ),
  "/security-policy": hero(
    pageImages.accessibilityStatement.hero,
    "Security policy",
    "How Berkshire Hathaway HomeServices Nevada Properties handles security reports for zoomintohomes.com.",
    "This page explains how to report a security issue on Zoom Into Homes. Do not include client names, medical notes, or listing credentials in a public report. Call (702) 222-1964 or use the contact form for a private handoff.",
  ),
  "/sellers": hero(
    pageImages.home.hero,
    "Sell your Las Vegas home",
    "List with Berkshire Hathaway HomeServices Nevada Properties. We still tour buyer traffic on video and write access details before a long showing day.",
    "Selling in Las Vegas or Henderson starts with a valuation call, then photos and a listing plan. Buyers who work with this practice see the home on video first, with doorway and bathroom measurements written down, so in-person showings stay short.",
  ),
  "/sellers/downsizing": hero(
    pageImages.agingInPlace.hero,
    "Downsizing in Las Vegas and Henderson",
    "Sell the current house and search the next floor plan on video before anyone packs a showing day.",
    "Downsizing here means measuring the next home’s doors, steps, and showers on video while the current house is prepared for sale. Zoom Into Homes writes those numbers down and visits two or three finalists in person.",
  ),
  "/sellers/relocation": hero(
    pageImages.home.hero,
    "Selling because you are relocating",
    "List the Las Vegas or Henderson house while the next search runs on video.",
    "Relocation sales still need a priced listing and a buyer plan. This practice tours incoming homes on video, checks doorway and bathroom access in writing, and keeps in-person visits to the shortlist.",
  ),
  "/sellers/move-up": hero(
    pageImages.home.hero,
    "Selling to buy the next Las Vegas home",
    "Sequence the sale and the purchase so showing days stay short on both sides.",
    "Move-up searches in Las Vegas and Henderson use the same video-tour process: measure doors and showers remotely, write the numbers, then visit two or three finalists. The current house is listed with Berkshire Hathaway HomeServices Nevada Properties.",
  ),
  "/sellers/divorce-probate": hero(
    pageImages.about.hero,
    "Divorce and probate home sales",
    "A written listing plan when more than one party has to agree.",
    "Divorce and probate sales still need photos, pricing, and a showing plan. Buyers who ask for access details get video tours and a dated doorway and bathroom checklist before anyone drives.",
  ),
  "/buyers": hero(
    pageImages.home.hero,
    "Buy your Las Vegas home",
    "Tour listings on video, check doorway and bathroom access in writing, then visit only the finalists.",
    "Buying in Las Vegas or Henderson with Zoom Into Homes means a video tour first, a written access checklist, and two or three in-person visits—not a dozen maybes. Call (702) 222-1964 to start intake.",
  ),
  "/buyers/first-time-buyers": hero(
    pageImages.home.hero,
    "Your first home in Las Vegas",
    "Learn the process in writing before you spend a day driving.",
    "First-time buyers in Las Vegas and Henderson still get video tours, written doorway and bathroom measurements, and a short in-person list. Financing questions go to a lender; this practice sequences the housing search.",
  ),
  "/buyers/california-relocator": hero(
    pageImages.home.hero,
    "Relocating from California to Las Vegas",
    "Remote video tours so you do not have to fly in for every listing.",
    "California-to-Nevada moves can start on video. We check doorway widths, step heights, and shower curbs against a written list, then schedule in-person visits for two or three finalists when you are in town.",
  ),
  "/buyers/luxury-homes-las-vegas": hero(
    pageImages.home.hero,
    "Las Vegas luxury real estate",
    "Higher-priced listings still get the same video-tour and measurement process.",
    "Luxury searches in Las Vegas, Summerlin, and Henderson still start on video. We write doorway, bathroom, and path measurements, then visit only the finalists. Price does not replace a dated access checklist.",
  ),
  "/listings": hero(
    pageImages.home.hero,
    "Las Vegas homes for sale",
    "Browse live listings, then use the video-tour process before you drive.",
    "This page is the live home search for Las Vegas and Henderson. Zoom Into Homes still tours serious matches on video, writes doorway and bathroom measurements, and keeps in-person visits to two or three finalists.",
  ),
  "/neighborhoods": hero(
    pageImages.agingInPlace.hero,
    "Las Vegas and Henderson neighborhoods",
    "Editorial guides to valley areas, paired with video tours and written access checklists.",
    "Neighborhood pages describe streets, inventory ranges, and commute notes. Access still has to be measured on the unit: doorway width, step height, and shower curb, written down after a video tour.",
  ),
  "/neighborhoods/summerlin": hero(
    pageImages.agingInPlace.hero,
    "Berkshire Hathaway HomeServices Summerlin",
    "Summerlin listings with video tours and written doorway and bathroom measurements.",
    areaExplanation("Summerlin"),
  ),
  "/neighborhoods/henderson": hero(
    pageImages.agingInPlace.hero,
    "Berkshire Hathaway HomeServices Henderson",
    "Henderson listings with video tours and written access checklists.",
    areaExplanation("Henderson"),
  ),
  "/neighborhoods/green-valley": hero(
    pageImages.agingInPlace.hero,
    "Berkshire Hathaway HomeServices Green Valley",
    "Green Valley listings checked on video before a showing day.",
    areaExplanation("Green Valley"),
  ),
  "/neighborhoods/the-ridges": hero(
    pageImages.home.hero,
    "Berkshire Hathaway HomeServices The Ridges",
    "The Ridges listings still need unit-level doorway and bathroom measurements.",
    areaExplanation("The Ridges"),
  ),
  "/neighborhoods/centennial-hills": hero(
    pageImages.home.hero,
    "Berkshire Hathaway HomeServices Centennial Hills",
    "Centennial Hills listings with video tours first.",
    areaExplanation("Centennial Hills"),
  ),
  "/neighborhoods/southern-highlands": hero(
    pageImages.home.hero,
    "Berkshire Hathaway HomeServices Southern Highlands",
    "Southern Highlands listings with written access checklists.",
    areaExplanation("Southern Highlands"),
  ),
  "/neighborhoods/north-las-vegas": hero(
    pageImages.home.hero,
    "Berkshire Hathaway HomeServices North Las Vegas",
    "North Las Vegas listings toured on video before anyone drives.",
    areaExplanation("North Las Vegas"),
  ),
  "/neighborhoods/mountains-edge": hero(
    pageImages.home.hero,
    "Berkshire Hathaway HomeServices Mountains Edge",
    "Mountains Edge listings with doorway and shower measurements on a dated list.",
    areaExplanation("Mountains Edge"),
  ),
  "/neighborhoods/inspirada": hero(
    pageImages.agingInPlace.hero,
    "Berkshire Hathaway HomeServices Inspirada",
    "Inspirada listings in Henderson, checked on video first.",
    areaExplanation("Inspirada"),
  ),
  "/neighborhoods/skye-canyon": hero(
    pageImages.home.hero,
    "Berkshire Hathaway HomeServices Skye Canyon",
    "Skye Canyon listings with video tours and written access notes.",
    areaExplanation("Skye Canyon"),
  ),
  "/55-plus-communities": hero(
    pageImages.agingInPlace.hero,
    "55+ communities in Las Vegas",
    "Sun City, Del Webb, Heritage, Solera, and Trilogy searches still measure the unit.",
    "A 55+ label is an age policy, not an access certificate. Zoom Into Homes tours units on video, writes doorway widths and shower curbs, and visits two or three finalists in person.",
  ),
  "/55-plus-communities/sun-city-summerlin": hero(
    pageImages.agingInPlace.hero,
    "Sun City Summerlin",
    "Northwest Las Vegas 55+ streets. Confirm doors and showers on the unit.",
    communityExplanation("Sun City Summerlin"),
  ),
  "/55-plus-communities/sun-city-anthem": hero(
    pageImages.agingInPlace.hero,
    "Sun City Anthem",
    "Henderson hillside 55+ inventory. Measure arrival routes and primary baths.",
    communityExplanation("Sun City Anthem"),
  ),
  "/55-plus-communities/sun-city-aliante": hero(
    pageImages.agingInPlace.hero,
    "Sun City Aliante",
    "North Las Vegas 55+ community. Video-tour the unit before a showing day.",
    communityExplanation("Sun City Aliante"),
  ),
  "/55-plus-communities/solera-anthem": hero(
    pageImages.agingInPlace.hero,
    "Solera at Anthem",
    "Henderson one-story plans. Still verify thresholds and shower curbs.",
    communityExplanation("Solera at Anthem"),
  ),
  "/55-plus-communities/heritage-stonebridge": hero(
    pageImages.agingInPlace.hero,
    "Heritage at Stonebridge",
    "55+ streets in the southwest valley. Measure the specific unit.",
    communityExplanation("Heritage at Stonebridge"),
  ),
  "/55-plus-communities/del-webb-lake-las-vegas": hero(
    pageImages.agingInPlace.hero,
    "Del Webb at Lake Las Vegas",
    "Henderson Del Webb inventory. Builder streets vary by phase.",
    communityExplanation("Del Webb at Lake Las Vegas"),
  ),
  "/55-plus-communities/trilogy-summerlin": hero(
    pageImages.agingInPlace.hero,
    "Trilogy at Summerlin",
    "Summerlin 55+ community. Confirm doors, steps, and showers on the unit.",
    communityExplanation("Trilogy at Summerlin"),
  ),
  "/luxury-homes": hero(
    pageImages.home.hero,
    "Las Vegas luxury real estate",
    "Higher-priced homes still get video tours and written access checklists.",
    "Luxury listings in Las Vegas and Henderson are still walked on video first. We write doorway, bathroom, and path measurements, then visit two or three finalists. A high list price is not a substitute for those numbers.",
  ),
  "/new-construction": hero(
    pageImages.howItWorks.hero,
    "New construction in Las Vegas",
    "Builder plans still need doorway and bathroom measurements on the finished unit.",
    "New construction in Las Vegas and Henderson can look wide on a brochure and still miss a shower curb or a hall width. We tour the model or the finished unit on video, write the numbers, and keep in-person visits short.",
  ),
  "/investment-properties": hero(
    pageImages.home.hero,
    "Las Vegas investment properties",
    "Income searches still use video tours before a long showing day.",
    "Investment listings in Las Vegas and Henderson are toured on video first. Access notes still describe doors, steps, and showers—the building, not a type of tenant. Call (702) 222-1964 to sequence a shortlist.",
  ),
  "/relocation": hero(
    pageImages.home.hero,
    "Relocating to Las Vegas",
    "Start the search on video before you book a flight of twelve showings.",
    "Relocation to Las Vegas or Henderson can begin with video tours and a written doorway and bathroom list. In-person visits are for two or three finalists when you are in town.",
  ),
  "/home-valuation": hero(
    pageImages.contact.hero,
    "What is your Las Vegas home worth?",
    "Request a valuation call. Selling still pairs with the same video-tour buyer process.",
    "A valuation call covers recent sales, condition, and a listing plan for Las Vegas or Henderson. Buyers who work with this practice still see homes on video first, with access measurements written down before a showing day.",
  ),
  "/market-report": hero(
    pageImages.home.hero,
    "Las Vegas real estate market report",
    "Market context for buyers and sellers, plus the video-tour process this practice uses.",
    "Market figures change. Use this page for context, then tour specific homes on video and write doorway and bathroom measurements before anyone drives. Call (702) 222-1964 to apply the numbers to a shortlist.",
  ),
  "/market-update": hero(
    pageImages.home.hero,
    "Las Vegas market update",
    "Current valley context from Berkshire Hathaway HomeServices Nevada Properties.",
    "A market update is not a substitute for measuring a house. Zoom Into Homes still tours listings on video, writes access details, and visits two or three finalists in person.",
  ),
  "/market-insights": hero(
    pageImages.home.hero,
    "Las Vegas market insights",
    "Editorial market notes paired with a written touring process.",
    "Insights here are for planning. Homes you actually want still get a video tour, a dated doorway and bathroom checklist, and a short in-person list.",
  ),
  "/services": hero(
    pageImages.about.hero,
    "Las Vegas real estate services",
    "Buying, selling, and video touring through Berkshire Hathaway HomeServices Nevada Properties.",
    "Services on this site are a Las Vegas and Henderson housing search that starts on video, a written access checklist, and in-person visits only for finalists. Call (702) 222-1964 to start.",
  ),
  "/why-berkshire-hathaway": hero(
    pageImages.about.hero,
    "Why Berkshire Hathaway HomeServices",
    "Brokerage identification for Zoom Into Homes in Las Vegas and Henderson.",
    "Zoom Into Homes works with Berkshire Hathaway HomeServices Nevada Properties. The touring method is still the same: video first, written doorway and bathroom measurements, two or three in-person finalists.",
  ),
  "/faq": hero(
    pageImages.contact.hero,
    "Frequently asked questions",
    "Buying, selling, and video touring in Las Vegas and Henderson.",
    "These questions cover how Zoom Into Homes tours listings on video, what we measure, and how to start a call. For a specific house, we still write doorway widths, step heights, and shower curbs before anyone drives.",
  ),
  "/google-business": hero(
    pageImages.about.hero,
    "Dr. Jan Duffy",
    "Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964.",
    "Dr. Jan Duffy coordinates Las Vegas and Henderson showings for Zoom Into Homes. The practice tours homes on video, writes doorway and bathroom measurements, and visits two or three finalists in person.",
  ),
};

const PREFIX_FALLBACKS: { prefix: string; spec: PageHeroSpec }[] = [
  {
    prefix: "/glossary/",
    spec: hero(
      pageImages.features.hero,
      "Access feature glossary",
      "A home feature we can measure and write on a dated checklist.",
      "This glossary term is a building feature we can measure on a Las Vegas or Henderson home. Zoom Into Homes records a dated value from video or an on-site check. We do not use the term to describe who should live in a property.",
    ),
  },
  {
    prefix: "/accessible-homes/",
    spec: hero(
      pageImages.features.hero,
      "Measured access feature in Las Vegas and Henderson",
      "Verified on the unit with a dated access checklist.",
      "This feature is checked on the specific unit. Zoom Into Homes tours the listing on video first, writes doorway and bathroom measurements, then visits two or three finalists in person.",
    ),
  },
  {
    prefix: "/listings/",
    spec: hero(
      pageImages.home.hero,
      "Listing details",
      "Tour this home on video and write doorway and bathroom measurements before you drive.",
      "Listing pages show the advertised home. Zoom Into Homes still tours matches on video, writes access details on a dated checklist, and keeps in-person visits to two or three finalists.",
    ),
  },
  {
    prefix: "/neighborhoods/",
    spec: hero(
      pageImages.agingInPlace.hero,
      "Las Vegas Valley neighborhood",
      "Editorial area notes plus unit-level video tours and access measurements.",
      "Neighborhood listings in the Las Vegas Valley still need doorway widths, step heights, and shower curbs checked on the specific unit. Zoom Into Homes tours the home on video first, writes those numbers down, and schedules in-person visits for two or three finalists only.",
    ),
  },
  {
    prefix: "/55-plus-communities/",
    spec: hero(
      pageImages.agingInPlace.hero,
      "55+ community in the Las Vegas Valley",
      "A community label is not an access certificate.",
      "55+ communities still need doorway widths, step heights, and shower curbs measured on the unit. We tour on video first and visit only the finalists that pass the written list.",
    ),
  },
  {
    prefix: "/sellers/",
    spec: pageHeroByPath["/sellers"],
  },
  {
    prefix: "/buyers/",
    spec: pageHeroByPath["/buyers"],
  },
];

export function resolvePageHero(
  path: string,
  overrides: PageHeroOverrides = {},
): PageHeroSpec {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base =
    pageHeroByPath[normalized] ??
    PREFIX_FALLBACKS.find((entry) => normalized.startsWith(entry.prefix))?.spec ??
    hero(
      pageImages.home.hero,
      "Zoom Into Homes",
      "Las Vegas and Henderson video tours with written access checklists.",
      "Zoom Into Homes tours homes on video, checks doorway and bathroom access against a written list, and schedules in-person visits for two or three finalists only.",
    );

  return {
    image: overrides.image ?? base.image,
    headline: overrides.headline ?? base.headline,
    support: overrides.support ?? base.support,
    explanation: overrides.explanation ?? base.explanation,
    servicePoints: overrides.servicePoints ?? base.servicePoints,
  };
}
