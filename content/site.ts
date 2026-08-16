import type { NavItem, PageMeta, SiteIdentity } from "./types";

export const siteIdentity: SiteIdentity = {
  siteName: "Zoom Into Homes",
  domain: "www.zoomintohomes.com",
  agentName: "PLACEHOLDER: Dr. Gene Boyle",
  agentLicense: "PLACEHOLDER: NV license number",
  brokerageName: "Berkshire Hathaway HomeServices Nevada Properties",
  brokerageLicense: "PLACEHOLDER: brokerage license number",
  serviceArea: "Las Vegas and Henderson, Nevada",
  phoneDisplay: "PLACEHOLDER: phone number",
  phoneTel: "",
  email: "PLACEHOLDER: email address",
  officeAddress: "PLACEHOLDER: office address",
};

export const primaryNav: NavItem[] = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/accessibility-features", label: "Features" },
  { href: "/veterans", label: "Veterans" },
  { href: "/aging-in-place", label: "Aging in place" },
  { href: "/referral-partners", label: "Referral partners" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const helpNav: NavItem[] = [
  { href: "/contact", label: "Contact" },
  { href: "/accessibility-statement", label: "Accessibility statement" },
];

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "Virtual-first home search in Las Vegas | Zoom Into Homes",
    description:
      "Remote touring and documented accessibility-feature checks for home buyers and sellers in Las Vegas and Henderson. Visit only the finalists.",
  },
  howItWorks: {
    title: "How the reduced-showing process works | Zoom Into Homes",
    description:
      "A step-by-step virtual-first process: intake, remote tours, feature verification, then in-person visits limited to two or three finalists.",
  },
  features: {
    title: "Accessibility feature glossary | Zoom Into Homes",
    description:
      "Objective measurements for entry, circulation, bathrooms, kitchens, sensory, and building systems used to pre-verify Las Vegas listings.",
  },
  veterans: {
    title: "VA SAH and SHA grants with a home purchase | Zoom Into Homes",
    description:
      "How Specially Adapted Housing and Special Housing Adaptation grants can pair with a purchase. PLACEHOLDER: eligibility and amounts pending source review.",
  },
  agingInPlace: {
    title: "Aging in place and 55+ housing, Las Vegas | Zoom Into Homes",
    description:
      "Single-level plans, zero-step entries, and universal-design checks in Sun City Summerlin, Sun City Anthem, Solera, Siena, and Del Webb communities.",
  },
  referralPartners: {
    title: "Referral partners | Zoom Into Homes",
    description:
      "Handoff process for hospital discharge planners, occupational therapists, VA loan officers, elder law attorneys, and contractors.",
  },
  about: {
    title: "About PLACEHOLDER: Dr. Gene Boyle | Zoom Into Homes",
    description:
      "PLACEHOLDER: Dr. Gene Boyle, Berkshire Hathaway HomeServices Nevada Properties, serving Las Vegas and Henderson with a virtual-first touring practice.",
  },
  contact: {
    title: "Request a consultation | Zoom Into Homes",
    description:
      "Request a consultation for a virtual-first home search or a referral handoff in Las Vegas and Henderson.",
  },
  accessibilityStatement: {
    title: "Accessibility statement | Zoom Into Homes",
    description:
      "PLACEHOLDER: accessibility statement pending legal review. How to report barriers on www.zoomintohomes.com.",
  },
};
