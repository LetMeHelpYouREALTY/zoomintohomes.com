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
    title: "How we keep in-person tours short | Zoom Into Homes",
    description:
      "Six steps: list what the home must have, tour on video, check measurements, pick two or three finalists, visit only those homes, then offer and close.",
  },
  virtualTourProcess: {
    title: "How video-first home tours work | Zoom Into Homes",
    description:
      "Tour Las Vegas and Henderson homes on video and get a written access checklist before anyone drives. Visit two or three finalists—not a dozen maybes.",
  },
  whatWeMeasure: {
    title: "What we measure on every tour | Zoom Into Homes",
    description:
      "Door widths, step heights, shower curbs, and hall widths written down with the date—not a vague accessible checkbox.",
  },
  features: {
    title: "Accessibility feature glossary | Zoom Into Homes",
    description:
      "Doorways, bathrooms, kitchens, and paths we can measure on Las Vegas and Henderson homes before you drive out.",
  },
  accessibleHomes: {
    title: "Homes with measured access features | Las Vegas & Henderson",
    description:
      "Editorial guide to zero-step entry, roll-in showers, widened doorways, and single-story plans in Las Vegas and Henderson—paired with a published measurement process.",
  },
  veterans: {
    title: "VA SAH and SHA grants with a home purchase | Zoom Into Homes",
    description:
      "How VA Specially Adapted Housing (SAH) and Special Housing Adaptation (SHA) can run beside a purchase search. Not a benefits determination. Verify rules on VA.gov.",
  },
  vaSah: {
    title: "VA SAH grant and a Nevada home purchase | Zoom Into Homes",
    description:
      "How Specially Adapted Housing (SAH) can sequence with a Las Vegas or Henderson purchase search. Not a VA benefits determination—verify current rules on VA.gov.",
  },
  vaSha: {
    title: "VA SHA grant and a Nevada home purchase | Zoom Into Homes",
    description:
      "How Special Housing Adaptation (SHA) can sequence with a Nevada purchase. Written access checklists use building measurements, not diagnoses.",
  },
  clarkCountyExemption: {
    title: "Clark County disabled-veteran property tax exemption tiers",
    description:
      "Assessed-value exemption tiers published by the Clark County Assessor for veterans and disabled veterans, with links to apply. Figures change with CPI—confirm on the Assessor site.",
  },
  agingInPlace: {
    title: "Aging in place and 55+ housing, Las Vegas | Zoom Into Homes",
    description:
      "Aging-in-place searches in Las Vegas and Henderson check single-level plans, zero-step entries, and showers in Sun City Summerlin, Anthem, Solera, Siena, and Del Webb communities.",
  },
  referralPartners: {
    title: "For hospitals and care teams | Zoom Into Homes",
    description:
      "A written handoff for discharge planners, therapists, VA loan officers, elder law attorneys, and contractors: video tours, access checklists, and dated shortlists.",
  },
  about: {
    title: "About Dr. Gene Boyle | Zoom Into Homes",
    description:
      "Dr. Gene Boyle helps Las Vegas and Henderson buyers tour homes on video first with Berkshire Hathaway HomeServices Nevada Properties. We describe building features, not people.",
  },
  contact: {
    title: "Book a Las Vegas video-tour call | Zoom Into Homes",
    description:
      "Schedule a Las Vegas or Henderson video-tour planning call. We check doorway and bathroom access on camera, then visit two or three finalists. Call (702) 222-1964.",
  },
  accessibilityStatement: {
    title: "Accessibility statement | Zoom Into Homes",
    description:
      "WCAG 2.2 Level AA target, no accessibility overlay widgets, and how to report barriers on www.zoomintohomes.com.",
  },
  privacy: {
    title: "Privacy policy | Zoom Into Homes",
    description:
      "How Zoom Into Homes collects, uses, and retains consultation and referral information, including mobility-related notes you choose to share.",
  },
  terms: {
    title: "Terms of use | Zoom Into Homes",
    description:
      "Terms for using www.zoomintohomes.com. Not legal, medical, or VA benefits advice. Brokerage advertising disclosures apply.",
  },
  featureSheetExample: {
    title: "Example home access checklist | Zoom Into Homes",
    description:
      "Redacted sample of how doorway, bathroom, and path measurements are written down after a video or on-site tour—with date and source.",
  },
  walkthroughExample: {
    title: "Example virtual walkthrough | Zoom Into Homes",
    description:
      "Sample walkthrough presentation with a written room-by-room measurement equivalent. Tours never autoplay.",
  },
  henderson: {
    title: "Homes with access features in Henderson, NV | Zoom Into Homes",
    description:
      "Editorial guide to measured access features in Henderson—process first, inventory second. Neighborhood pages stay editorial when listing counts are thin.",
  },
  summerlin: {
    title: "Homes with access features in Summerlin | Zoom Into Homes",
    description:
      "Editorial guide to measured access features in Summerlin and northwest Las Vegas, linked to our video-first tour process.",
  },
};
