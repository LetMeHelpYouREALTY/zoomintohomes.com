export type FeatureCategory =
  | "entry"
  | "circulation"
  | "bathroom"
  | "kitchen"
  | "sensory"
  | "systems";

export type AccessibilityFeature = {
  slug: string;
  name: string;
  category: FeatureCategory;
  factualDescription: string;
  measurement?: string;
  whyItMatters: string;
  standardCitation?: string;
};

export type ProcessStep = {
  order: number;
  title: string;
  body: string;
  clientEffort: string;
};

export type ReferralPartnerType = {
  slug: string;
  audience: string;
  theirProblem: string;
  whatWeHandle: string[];
  handoffProcess: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export type SiteIdentity = {
  siteName: string;
  domain: string;
  agentName: string;
  agentLicense: string;
  brokerageName: string;
  brokerageLicense: string;
  serviceArea: string;
  phoneDisplay: string;
  phoneTel: string;
  email: string;
  officeAddress: string;
};

export type PageMeta = {
  title: string;
  description: string;
};

export type PageImage = {
  id: string;
  src: string;
  alt: string;
  supportsHeading: string;
  width: number;
  height: number;
};

export type PageImageSet = {
  hero: PageImage;
  supporting: PageImage[];
};
