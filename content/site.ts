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
  { href: "/va-sah-grant-nevada", label: "VA SAH grant" },
  { href: "/aging-in-place", label: "Aging in place" },
  { href: "/referral-partners", label: "Referral partners" },
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
    title: "Virtual-first home search in Las Vegas | Zoom Into Homes",
    description:
      "Zoom Into Homes tours Las Vegas and Henderson listings remotely, verifies access features against a published glossary, and limits in-person visits to two or three finalists.",
  },
  howItWorks: {
    title: "How the reduced-showing process works | Zoom Into Homes",
    description:
      "Six steps: intake of required features, remote video tour, glossary verification, a shortlist of two or three finalists, in-person visits only to those homes, then offer and close.",
  },
  virtualTourProcess: {
    title: "Virtual-first touring process | Zoom Into Homes",
    description:
      "Remote video tours and measured feature sheets before drive-outs. Visit two or three finalists—not a dozen maybes—in Las Vegas and Henderson.",
  },
  whatWeMeasure: {
    title: "What we measure on every tour | Zoom Into Homes",
    description:
      "Door clear widths, thresholds, shower curbs, route widths, and related building attributes recorded with provenance—not a vague accessible checkbox.",
  },
  features: {
    title: "Accessibility feature glossary | Zoom Into Homes",
    description:
      "Measurable entry, circulation, bathroom, kitchen, sensory, and systems features used to pre-verify Las Vegas listings. Features are measured; people are not described.",
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
      "How Special Housing Adaptation (SHA) can sequence with a Nevada purchase. Feature sheets use building measurements, not diagnoses.",
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
    title: "Referral partners | Zoom Into Homes",
    description:
      "Written handoff for discharge planners, OT/PT, VA loan officers, elder law attorneys, and contractors: remote tours, feature sheets, and dated shortlists.",
  },
  about: {
    title: "About Dr. Gene Boyle | Zoom Into Homes",
    description:
      "Dr. Gene Boyle plans virtual-first touring with Berkshire Hathaway HomeServices Nevada Properties coordination in Las Vegas and Henderson. Fair Housing copy rule: features, not people.",
  },
  contact: {
    title: "Request a consultation | Zoom Into Homes",
    description:
      "Request a virtual-first home search or referral handoff in Las Vegas and Henderson. Call (702) 222-1964 or use the form—no twelve-house tour required.",
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
    title: "Example accessibility feature sheet | Zoom Into Homes",
    description:
      "Redacted sample of how measured building attributes are recorded after a remote or on-site tour—with provenance and date.",
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
      "Editorial guide to measured access features in Summerlin and northwest Las Vegas, linked to the virtual-first touring process.",
  },
};
