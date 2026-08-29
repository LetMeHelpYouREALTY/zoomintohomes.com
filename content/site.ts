import type { NavItem, PageMeta, SiteIdentity } from "./types";

/**
 * Identity sourced 17 Aug 2026 from geneboyle.com (public).
 * GBP: service-area business — do not publish a BHHS branch as this practice's street address.
 * Phone CTA matches the published Las Vegas coordination line.
 */
export const siteIdentity: SiteIdentity = {
  siteName: "Zoom Into Homes",
  domain: "www.zoomintohomes.com",
  agentName: "Dr. Gene Boyle",
  agentLicense: "California DRE #02282581",
  brokerageName: "Berkshire Hathaway HomeServices Nevada Properties",
  brokerageLicense: "Partner: Dr. Jan Duffy, License S.0197614.LLC",
  serviceArea:
    "Las Vegas, Henderson, North Las Vegas, Summerlin, Enterprise, Spring Valley, Paradise",
  phoneDisplay: "(702) 222-1964",
  phoneTel: "+17022221964",
  email: process.env.NEXT_PUBLIC_AGENT_EMAIL?.trim() || "",
  officeAddress:
    "Service-area practice (Las Vegas Valley). Planning office: 320 Junco, Irvine, CA 92618",
};

/** Planning office NAP (Irvine). Not a Las Vegas storefront — service-area practice. */
export const planningOffice = {
  streetAddress: "320 Junco",
  addressLocality: "Irvine",
  addressRegion: "CA",
  postalCode: "92618",
  addressCountry: "US",
} as const;

/** Spoken and AI-citation variants. Canonical visible name is siteIdentity.siteName. */
export const brandVariations = [
  "Zoom into Homes",
  "Zoom Into Homes Las Vegas",
  "Zoom Into Homes Henderson",
  "zoomintohomes.com",
] as const;

export const primaryNav: NavItem[] = [
  { href: "/virtual-tour-process", label: "How touring works" },
  { href: "/what-we-measure", label: "What we measure" },
  { href: "/accessible-homes", label: "Accessible homes" },
  { href: "/va-sah-grant-nevada", label: "VA housing grant" },
  { href: "/aging-in-place", label: "Aging in place" },
  { href: "/referral-partners", label: "For care teams" },
  { href: "/contact", label: "Contact" },
];

export const helpNav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/accessibility-statement", label: "Accessibility statement" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "Tour Las Vegas homes on video first | Zoom Into Homes",
    description:
      "Zoom Into Homes helps Las Vegas and Henderson buyers tour homes on video, check doorway and bathroom access details in writing, then visit only two or three finalists in person.",
  },
  howItWorks: {
    title: "How we keep in-person tours short",
    description:
      "Six steps: list what the home must have, tour on video, check measurements, pick two or three finalists, visit only those homes, then offer and close.",
  },
  virtualTourProcess: {
    title: "How Zoom Into Homes video tours work",
    description:
      "Tour Las Vegas and Henderson homes on video and get a written access checklist before anyone drives. Visit two or three finalists—not a dozen maybes.",
  },
  whatWeMeasure: {
    title: "What Zoom Into Homes measures on every tour",
    description:
      "Door widths, step heights, shower curbs, and hall widths written down with the date—not a vague accessible checkbox.",
  },
  features: {
    title: "Zoom Into Homes access-feature glossary",
    description:
      "Doorways, bathrooms, kitchens, and paths we can measure on Las Vegas and Henderson homes before you drive out.",
  },
  accessibleHomes: {
    title: "Homes with measured access features in Las Vegas",
    description:
      "Editorial guide to zero-step entry, roll-in showers, widened doorways, and single-story plans in Las Vegas and Henderson—paired with a published measurement process.",
  },
  veterans: {
    title: "VA SAH and SHA grants with a Zoom Into Homes purchase search",
    description:
      "How VA Specially Adapted Housing (SAH) and Special Housing Adaptation (SHA) can run beside a purchase search. Not a benefits determination. Verify rules on VA.gov.",
  },
  vaSah: {
    title: "VA SAH grant and a Zoom Into Homes Nevada purchase",
    description:
      "How Specially Adapted Housing (SAH) can sequence with a Las Vegas or Henderson purchase search. Not a VA benefits determination—verify current rules on VA.gov.",
  },
  vaSha: {
    title: "VA SHA grant and a Zoom Into Homes Nevada purchase",
    description:
      "How Special Housing Adaptation (SHA) can sequence with a Nevada purchase. Written access checklists use building measurements, not diagnoses.",
  },
  clarkCountyExemption: {
    title: "Clark County disabled-veteran property tax exemption tiers",
    description:
      "Assessed-value exemption tiers published by the Clark County Assessor for veterans and disabled veterans, with links to apply. Figures change with CPI—confirm on the Assessor site.",
  },
  agingInPlace: {
    title: "Zoom Into Homes aging-in-place searches in Las Vegas",
    description:
      "Aging-in-place searches in Las Vegas and Henderson check single-level plans, zero-step entries, and showers in Sun City Summerlin, Anthem, Solera, Siena, and Del Webb communities.",
  },
  referralPartners: {
    title: "Zoom Into Homes for hospitals and care teams",
    description:
      "A written handoff for discharge planners, therapists, VA loan officers, elder law attorneys, and contractors: video tours, access checklists, and dated shortlists.",
  },
  about: {
    title: "About Zoom Into Homes and Dr. Gene Boyle",
    description:
      "Dr. Gene Boyle helps Las Vegas and Henderson buyers tour homes on video first with Berkshire Hathaway HomeServices Nevada Properties. We describe building features, not people.",
  },
  contact: {
    title: "Book a Zoom Into Homes Las Vegas video-tour call",
    description:
      "Schedule a Las Vegas or Henderson video-tour planning call. We check doorway and bathroom access on camera, then visit two or three finalists. Call (702) 222-1964.",
  },
  accessibilityStatement: {
    title: "Zoom Into Homes accessibility statement",
    description:
      "WCAG 2.2 Level AA target, no accessibility overlay widgets, and how to report barriers on www.zoomintohomes.com.",
  },
  privacy: {
    title: "Zoom Into Homes privacy policy",
    description:
      "How Zoom Into Homes collects, uses, and retains information from scheduled calls and messages, including mobility-related notes you choose to share.",
  },
  terms: {
    title: "Zoom Into Homes terms of use",
    description:
      "Terms for using www.zoomintohomes.com. Not legal, medical, or VA benefits advice. Brokerage advertising disclosures apply.",
  },
  featureSheetExample: {
    title: "Zoom Into Homes example access checklist",
    description:
      "Redacted sample of how doorway, bathroom, and path measurements are written down after a video or on-site tour—with date and source.",
  },
  walkthroughExample: {
    title: "Zoom Into Homes example virtual walkthrough",
    description:
      "Sample walkthrough presentation with a written room-by-room measurement equivalent. Tours never autoplay.",
  },
  henderson: {
    title: "Zoom Into Homes access-feature homes in Henderson, NV",
    description:
      "Editorial guide to measured access features in Henderson—process first, inventory second. Neighborhood pages stay editorial when listing counts are thin.",
  },
  summerlin: {
    title: "Zoom Into Homes access-feature homes in Summerlin",
    description:
      "Editorial guide to measured access features in Summerlin and northwest Las Vegas, linked to our video-first tour process.",
  },
};
