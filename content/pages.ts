export const homeCopy = {
  h1: "Tour the listing first. Visit only the finalists.",
  lede: "Virtual-first touring is the accommodation. We pre-verify access features against a published glossary, then spend in-person time on two or three properties—not twelve.",
  audienceLabel: "Who is this practice built for?",
  audiences: [
    {
      title: "Buyers whose bodies constrain the search",
      body: "Wheelchair users, post-stroke and post-surgical recovery, ALS and MS, and low vision. The work is remote touring and measured features, not a motivational speech.",
    },
    {
      title: "Aging-in-place downsizers",
      body: "Sun City Summerlin, Sun City Anthem, Solera, Siena, and Del Webb searches, started before stairs become the deciding room in the house.",
    },
    {
      title: "Purchase searches paired with VA adapted-housing grants",
      body: "Nevada has a large veteran population. Specially Adapted Housing (SAH) and Special Housing Adaptation (SHA) are often poorly sequenced with purchase teams. We sequence the housing search; we do not quote unverified grant amounts.",
    },
  ],
  promiseTitle: "What is the reduced-showing promise?",
  promiseBody:
    "A hospital discharge planner, an occupational therapist, a VA loan officer, or an elder law attorney should be able to send a client here and see the process in writing. Listing browse uses a RealScout portal for live inventory; this site focuses on the measured tour process. Feature language, not persona language.",
};

export const howItWorksCopy = {
  h1: "The reduced-showing process",
  lede: "Each step exists to spend the client's physical energy only on listings that already passed a documented check.",
  stepsHeading: "What are the six steps?",
};

export const whatWeMeasureCopy = {
  h1: "What we measure",
  lede: "Every attribute is a building fact with a date and an evidence level. We do not collapse dimensional data into a single undefined checkbox.",
  provenanceHeading: "How is provenance recorded?",
  provenanceBody:
    "Each measurement carries evidence such as measured onsite, photo verified, agent reported, or floorplan derived—plus who verified it and when. That record is the product.",
};

export const featuresCopy = {
  h1: "Accessibility feature glossary",
  lede: "This is the copy standard for listing notes. Features are measured. People are not described. Where a figure comes from the 2010 ADA Standards, the citation is on the row. RESO AccessibilityFeatures enums are the shared vocabulary.",
  categoriesHeading: "Which feature categories are covered?",
};

export const accessibleHomesCopy = {
  h1: "Homes with measured access features in Las Vegas and Henderson",
  lede: "This silo is editorial-first. MLS AccessibilityFeatures fill rates in GLVAR are too thin to power IDX-only neighborhood pages. We publish the measurement process, the RESO vocabulary, and geo guides—then attach inventory when it exists.",
};

export const veteransCopy = {
  h1: "VA SAH and SHA grants, paired with a purchase",
  lede: "Specially Adapted Housing (SAH) and Special Housing Adaptation (SHA) are VA grant programs. This page explains how a purchase search can run beside those programs. It is not a benefits determination.",
  officialSourceHref:
    "https://www.va.gov/housing-assistance/disability-housing-grants/",
  officialSourceLabel: "VA disability housing grants",
  sections: [
    {
      title: "What does this page not claim?",
      body: "Grant dollar amounts, eligibility grids, and remaining entitlement must be verified on VA.gov or with an accredited representative. Do not treat any figure on a third-party blog as current.",
    },
    {
      title: "How can the housing search run in parallel with a grant file?",
      body: "Remote tours and feature sheets can start while a lender or a VA-accredited representative works the grant file. The point is to avoid spending a showing day on a two-story plan that cannot take the adaptation the grant is meant to fund.",
    },
    {
      title: "What language goes in the purchase file?",
      body: "Door clear width, threshold height, shower curb, route width. Not diagnoses. Not claims about who the house is for.",
    },
  ],
};

export const agingInPlaceCopy = {
  h1: "Aging in place, Las Vegas and Henderson",
  lede: "The search is for a floor plan that still works when stairs, tub walls, and round knobs start to cost more energy than they used to.",
  communitiesTitle: "Which communities are checked often?",
  communities: [
    {
      name: "Sun City Summerlin",
      note: "Northwest Las Vegas. Confirm door widths and showers on the specific unit—community marketing is not a certificate.",
    },
    {
      name: "Sun City Anthem",
      note: "Henderson hillside inventory. Measure arrival routes and primary-bath clearances on the unit.",
    },
    {
      name: "Solera",
      note: "Henderson desert community of one-story plans. Still verify thresholds and shower curbs.",
    },
    {
      name: "Siena",
      note: "Gated Henderson community. Gate policy and unit measurements are separate questions.",
    },
    {
      name: "Del Webb communities",
      note: "Builder streets vary by phase. A 55+ label is an age policy, not an access certificate.",
    },
  ],
  universalHeading: "What does universal design mean here?",
  universalDesign:
    "Universal design on this site means features that reduce the number of required body movements for daily tasks: zero-step entry, lever hardware, a roll-in or transferable shower, and a single finished level for sleep, food, and bathing. We record those items. We do not assign them to a type of person.",
};

export const aboutCopy = {
  h1: "Dr. Gene Boyle",
  lede: "Berkshire Hathaway HomeServices Nevada Properties coordination in Las Vegas and Henderson. Virtual-first touring for buyers and sellers whose search is constrained by the body they have to live in.",
  practiceHeading: "What does this practice publish in writing?",
  body: [
    "Dr. Gene Boyle (California DRE #02282581) plans virtual-first touring and cross-market coordination. Las Vegas Valley showings and Nevada brokerage compliance run with Dr. Jan Duffy, License S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties.",
    "Call (702) 222-1964. Zoom Into Homes documents the reduced-showing process and the feature glossary used in files so a referral source can evaluate the work without a sales call.",
    "The practice is built so a referral source can read the process, the glossary, and the Fair Housing rule (features, not people) without a sales call.",
  ],
};

export const accessibilityStatementCopy = {
  h1: "Accessibility statement",
  lede: "This site targets WCAG 2.2 Level AA in markup and testing. Formal legal conformance language remains subject to brokerage counsel review.",
  sections: [
    {
      title: "What is the accessibility commitment?",
      body: "Semantic HTML, visible focus (GOV.UK-style yellow fill with a dark bottom bar), 44×44 CSS px targets as a house rule, skip link, and prefers-reduced-motion support. Automated checks: axe-core, jsx-a11y, Lighthouse accessibility.",
    },
    {
      title: "What are the known limits?",
      body: "Third-party embeds (for example Calendly or Matterport) inherit their own accessibility exceptions. Every tour should ship with a written room-by-room measurement equivalent. Map views are enhancements—list views are canonical.",
    },
    {
      title: "How do you report a barrier?",
      body: "Use the contact form and describe the page, the browser or assistive technology, and the task that failed. Or call (702) 222-1964.",
    },
    {
      title: "What does this site not use?",
      body: "No accessibility overlay widgets (including accessiBe, UserWay, and AudioEye). Overlays are not a substitute for semantic HTML.",
    },
  ],
};

export const referralPartnersCopy = {
  h1: "Referral partners",
  lede: "For people whose job is to send a client to a housing process they can inspect in writing. Read the process, keep the recordings, and leave medical and legal decisions in your lane.",
  partnersHeading: "Who are the referral partner types?",
};

export const contactCopy = {
  h1: "Request a consultation",
  lede: "Tell us whether you are buying, selling, or referring. Call (702) 222-1964 or use the form. We will not ask you to tour twelve houses to prove you are serious.",
  formHeading: "How do you start the consultation request?",
  stubNotice:
    "Submissions go to our lead desk when Follow Up Boss is configured. You can also call (702) 222-1964.",
};
