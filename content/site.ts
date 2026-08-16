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
      "Zoom Into Homes tours Las Vegas and Henderson listings remotely, verifies access features against a published glossary, and limits in-person visits to two or three finalists.",
  },
  howItWorks: {
    title: "How the reduced-showing process works | Zoom Into Homes",
    description:
      "Six steps: intake of required features, remote video tour, glossary verification, a shortlist of two or three finalists, in-person visits only to those homes, then offer and close.",
  },
  features: {
    title: "Accessibility feature glossary | Zoom Into Homes",
    description:
      "Measurable entry, circulation, bathroom, kitchen, sensory, and systems features used to pre-verify Las Vegas listings. Features are measured; people are not described.",
  },
  veterans: {
    title: "VA SAH and SHA grants with a home purchase | Zoom Into Homes",
    description:
      "How VA Specially Adapted Housing (SAH) and Special Housing Adaptation (SHA) can run beside a purchase search. Not a benefits determination. Verify rules on VA.gov.",
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
    title: "About PLACEHOLDER: Dr. Gene Boyle | Zoom Into Homes",
    description:
      "PLACEHOLDER: Dr. Gene Boyle with Berkshire Hathaway HomeServices Nevada Properties. Virtual-first touring and a published Fair Housing copy rule for Las Vegas and Henderson.",
  },
  contact: {
    title: "Request a consultation | Zoom Into Homes",
    description:
      "Request a virtual-first home search or referral handoff in Las Vegas and Henderson. Name, email, phone, role, and a short note—no twelve-house tour required.",
  },
  accessibilityStatement: {
    title: "Accessibility statement | Zoom Into Homes",
    description:
      "WCAG 2.2 Level AA target, no accessibility overlay widgets, and how to report barriers on www.zoomintohomes.com. PLACEHOLDER: formal statement pending legal review.",
  },
};
