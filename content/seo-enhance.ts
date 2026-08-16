export type FaqItem = {
  question: string;
  answer: string;
};

export type PageSeoEnhance = {
  /** Direct answer for AI extraction — place in the first ~150 words. */
  answerBlock: string;
  keyFacts: string[];
  faqs: FaqItem[];
  entityPhrases: string[];
};

export const pageSeoEnhance = {
  home: {
    answerBlock:
      "Zoom Into Homes is a Las Vegas and Henderson real estate practice that tours listings remotely, verifies access features against a published glossary, and schedules in-person visits for two or three finalists only. Virtual-first touring is the accommodation.",
    keyFacts: [
      "Service area: Las Vegas and Henderson, Nevada",
      "Brokerage: Berkshire Hathaway HomeServices Nevada Properties",
      "Method: remote tour → feature sheet → shortlist → two or three finalists",
      "Copy rule: describe building features, not who should live there",
      "No IDX search grid and no accessibility overlay widgets on this site",
    ],
    faqs: [
      {
        question: "What is virtual-first home touring?",
        answer:
          "Virtual-first touring means listings are walked on video and checked against a written access-feature list before anyone spends a showing day on the road. Only properties that already pass required items become in-person finalists.",
      },
      {
        question: "How many homes do clients visit in person?",
        answer:
          "The process is built to visit two or three finalists, not a dozen maybes. Exact count depends on the shortlist after remote verification.",
      },
      {
        question: "Is this an MLS or IDX search site?",
        answer:
          "No. This is a credibility and referral site that documents the process and the feature glossary. Listing search is handled outside this site.",
      },
      {
        question: "Who refers clients here?",
        answer:
          "Hospital discharge planners, occupational and physical therapists, VA loan officers, elder law attorneys, and accessibility contractors use the written process and feature sheets.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "Berkshire Hathaway HomeServices Nevada Properties",
      "Las Vegas accessible home search",
      "virtual-first touring Las Vegas",
    ],
  },
  howItWorks: {
    answerBlock:
      "The reduced-showing process has six steps: intake of required access features, remote video tour, glossary verification, a shortlist of two or three finalists, in-person visits only to those finalists, then offer and close with the same feature checklist.",
    keyFacts: [
      "Step 1 — Intake: write required, useful, and irrelevant features",
      "Step 2 — Remote tour first on video",
      "Step 3 — Measure against the published glossary",
      "Step 4 — Shortlist two or three finalists",
      "Step 5 — Visit only the finalists",
      "Step 6 — Offer, access notes, and close",
    ],
    faqs: [
      {
        question: "What is the reduced-showing process?",
        answer:
          "It is a written sequence that spends physical energy only on listings that already passed a documented access-feature check. Remote work comes first; in-person time is reserved for confirmation.",
      },
      {
        question: "Do clients have to leave home for every listing?",
        answer:
          "No. Remote tours and feature sheets happen before drive-outs. Clients travel for the shortlist, not for every active listing.",
      },
      {
        question: "What does the client have to prepare for intake?",
        answer:
          "A short list of required access features, optional photos of current equipment, and one call or written note. An in-person intake meeting is optional.",
      },
      {
        question: "How are features recorded?",
        answer:
          "Each remaining listing gets a feature sheet with measured door clearances, threshold heights, shower curb, route widths, and lighting notes. The sheet describes the building, not a diagnosis.",
      },
    ],
    entityPhrases: [
      "reduced-showing process",
      "remote property tour Las Vegas",
      "accessibility feature sheet",
    ],
  },
  features: {
    answerBlock:
      "The accessibility feature glossary is the copy standard for listing notes on this site. Each row records a measurable building feature—such as zero-step entry or door clear width—often with a 2010 ADA Standards citation. Features are measured. People are not described.",
    keyFacts: [
      "Categories: entry, circulation, bathroom, kitchen, sensory, systems",
      "Example measurement: 32 in. minimum door clear width (ADA 404.2.3)",
      "Example measurement: 36 in. minimum accessible route width (ADA 403.5.1)",
      "Example measurement: maximum 1:12 ramp running slope (ADA 405.2)",
      "Fair Housing rule on this site: features, not personas",
    ],
    faqs: [
      {
        question: "What is an accessibility feature glossary in real estate?",
        answer:
          "It is a published list of objective building attributes used to pre-verify listings. Each item has a factual description, an optional measurement, and a note on why the measurement matters for daily use of the building.",
      },
      {
        question: "Do you describe who a house is for?",
        answer:
          "No. Copy and feature sheets describe door widths, thresholds, showers, and routes. They do not claim a property fits a type of person.",
      },
      {
        question: "Where do the measurements come from?",
        answer:
          "Where a published figure exists, rows cite the 2010 ADA Standards for Accessible Design. Residential listings may exceed or fall short of those figures; the glossary records what was measured on the unit.",
      },
      {
        question: "What is zero-step entry?",
        answer:
          "A route from the arrival point to the primary entrance with no stair and no abrupt level change. Thresholds, if present, are low and beveled per the cited standard.",
      },
    ],
    entityPhrases: [
      "accessibility feature glossary",
      "2010 ADA Standards",
      "zero-step entry",
      "door clear width",
    ],
  },
  veterans: {
    answerBlock:
      "Specially Adapted Housing (SAH) and Special Housing Adaptation (SHA) are U.S. Department of Veterans Affairs grant programs. This page explains how a Las Vegas or Henderson purchase search can run beside those programs. It is not a benefits determination and does not quote unverified grant amounts.",
    keyFacts: [
      "Programs named: VA Specially Adapted Housing (SAH) and Special Housing Adaptation (SHA)",
      "Official program information: va.gov housing-assistance disability housing grants",
      "This site sequences remote tours and feature sheets; it does not decide entitlement",
      "Purchase files use feature language: width, threshold, curb, route—not diagnoses",
      "PLACEHOLDER: dollar amounts and eligibility grids pending source-verified VA materials",
    ],
    faqs: [
      {
        question: "What are VA SAH and SHA grants?",
        answer:
          "They are VA adaptive housing grant programs that can help certain veterans pay for adaptations or adapted housing. Current eligibility and amounts come from the VA, not from this website.",
      },
      {
        question: "Can a home search run while a grant file is open?",
        answer:
          "Yes. Remote tours and feature sheets can start while a lender or VA-accredited representative works the grant file, so showing time is not spent on plans that cannot take the needed adaptation.",
      },
      {
        question: "Does Zoom Into Homes decide VA eligibility?",
        answer:
          "No. This practice handles housing logistics and feature verification. Benefits decisions stay with the VA and accredited representatives.",
      },
      {
        question: "Where should veterans verify current grant rules?",
        answer:
          "Use the VA’s disability housing grants pages and accredited counselors. Third-party blogs are not treated as current source documents on this site.",
      },
    ],
    entityPhrases: [
      "VA Specially Adapted Housing",
      "Special Housing Adaptation",
      "disabled veteran home purchase Nevada",
      "U.S. Department of Veterans Affairs",
    ],
  },
  agingInPlace: {
    answerBlock:
      "Aging-in-place searches in Las Vegas and Henderson focus on floor plans that still work when stairs, tub walls, and round knobs cost more energy. Communities often reviewed include Sun City Summerlin, Sun City Anthem, Solera, Siena, and Del Webb locations. A 55+ label is an age policy, not an access certificate.",
    keyFacts: [
      "Markets: Las Vegas and Henderson, Nevada",
      "Communities often checked: Sun City Summerlin, Sun City Anthem, Solera, Siena, Del Webb",
      "Universal design here means zero-step entry, lever hardware, roll-in or transferable shower, single finished level",
      "Community marketing is not a substitute for measuring the unit",
      "Copy describes features, not a type of resident",
    ],
    faqs: [
      {
        question: "What does aging in place mean on this site?",
        answer:
          "It means choosing a plan that reduces required body movements for daily tasks—single finished level, zero-step entry, lever hardware, and a workable shower—verified on the specific unit.",
      },
      {
        question: "Is a 55+ community automatically accessible?",
        answer:
          "No. Age policy and access features are different. Doors, thresholds, and showers are still measured on the unit you will occupy.",
      },
      {
        question: "Which Las Vegas Valley communities do you check often?",
        answer:
          "Sun City Summerlin, Sun City Anthem, Solera, Siena, and Del Webb communities across the valley. Inventory changes; each search starts with the glossary checklist.",
      },
      {
        question: "What is universal design as used here?",
        answer:
          "Features that reduce the number of required body movements for daily tasks. We record those features. We do not assign them to a type of person.",
      },
    ],
    entityPhrases: [
      "aging in place Las Vegas",
      "Sun City Summerlin",
      "Sun City Anthem",
      "universal design Henderson",
    ],
  },
  referralPartners: {
    answerBlock:
      "Referral partners—hospital discharge planners, occupational and physical therapists, VA loan officers, elder law attorneys, and accessibility contractors—can inspect the housing process in writing, keep dated shortlists and recordings, and leave medical and legal decisions in their own lane.",
    keyFacts: [
      "Partner types: discharge planners, OT/PT, VA loan officers, elder law, contractors",
      "Deliverables: remote tours, feature sheets, dated shortlists",
      "Partners keep clinical or legal decisions; this practice keeps housing logistics",
      "Handoff starts with location constraints and required features",
    ],
    faqs: [
      {
        question: "How does a discharge planner hand off a housing search?",
        answer:
          "Send location constraints and required features, or ask for intake. The return is a dated shortlist and recordings. Medical decisions stay with the clinical team.",
      },
      {
        question: "What do occupational therapists receive?",
        answer:
          "Measurements aligned to home-evaluation categories, optional video of arrival route, bathroom, and kitchen, and in-person visits only after the remote pass.",
      },
      {
        question: "Do you quote SAH or SHA dollar amounts to loan officers?",
        answer:
          "No. Grant amounts are not quoted from this site. Early remote screening and written feature sheets are what attach to the purchase file.",
      },
      {
        question: "When should a remodeling contractor get involved?",
        answer:
          "After pre-purchase video and measurements show whether required features or wall blocking can support the work—before a truck rolls for a listing that cannot take the adaptation.",
      },
    ],
    entityPhrases: [
      "hospital discharge planner housing referral",
      "occupational therapist home search Las Vegas",
      "VA loan officer feature sheet",
      "elder law housing handoff",
    ],
  },
  about: {
    answerBlock:
      "PLACEHOLDER: Dr. Gene Boyle practices with Berkshire Hathaway HomeServices Nevada Properties in Las Vegas and Henderson. Zoom Into Homes documents a virtual-first touring process and a Fair Housing copy rule—features, not people—so referral sources can evaluate the work in writing.",
    keyFacts: [
      "Brand: Zoom Into Homes",
      "Agent name: PLACEHOLDER: Dr. Gene Boyle",
      "Brokerage: Berkshire Hathaway HomeServices Nevada Properties",
      "Markets: Las Vegas and Henderson, Nevada",
      "Public artifacts: process page, feature glossary, accessibility statement",
      "PLACEHOLDER: credentials and biography pending source documents",
    ],
    faqs: [
      {
        question: "Who runs Zoom Into Homes?",
        answer:
          "PLACEHOLDER: Dr. Gene Boyle, affiliated with Berkshire Hathaway HomeServices Nevada Properties. License numbers appear as placeholders until sourced.",
      },
      {
        question: "What makes this practice different from a listing portal?",
        answer:
          "The site publishes the reduced-showing process and the feature glossary used in files. It is built for referral inspection, not for browsing an IDX grid.",
      },
      {
        question: "How do you handle Fair Housing in marketing copy?",
        answer:
          "Copy describes measurable building features. It does not describe who should live in a property. A banned-phrase scan runs over content files in continuous integration.",
      },
      {
        question: "Where is the brokerage identified?",
        answer:
          "On every page footer: agent name placeholder, Nevada license placeholder, Berkshire Hathaway HomeServices Nevada Properties, and Equal Housing Opportunity.",
      },
    ],
    entityPhrases: [
      "PLACEHOLDER: Dr. Gene Boyle",
      "Berkshire Hathaway HomeServices Nevada Properties",
      "Zoom Into Homes Las Vegas",
    ],
  },
  contact: {
    answerBlock:
      "Request a consultation for a virtual-first home search or a referral handoff in Las Vegas and Henderson. The form collects name, email, phone, role, and a short note. Submissions are validated in the browser; the backend endpoint is not connected yet.",
    keyFacts: [
      "Form fields: name, email, phone, role, message",
      "Roles: Buyer, Seller, Referral partner, Other",
      "Purpose: start intake without a twelve-house tour",
      "PLACEHOLDER: submission endpoint not connected",
    ],
    faqs: [
      {
        question: "How do I request a consultation?",
        answer:
          "Use the form on this page. Include whether you are buying, selling, or referring, plus required features and timeline when known.",
      },
      {
        question: "Is the contact form live?",
        answer:
          "Client-side validation is live. The submission handler is a typed stub until a backend endpoint is connected (PLACEHOLDER).",
      },
      {
        question: "What should referral partners include?",
        answer:
          "Location constraints, required access features, timeline, and consent to introduce the client. Medical and legal advice stays with the partner.",
      },
      {
        question: "Do I need to tour twelve homes first?",
        answer:
          "No. The practice is built so remote verification happens before a long showing circuit.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes consultation",
      "Las Vegas virtual home tour request",
    ],
  },
  accessibilityStatement: {
    answerBlock:
      "This accessibility statement is a scaffold pending legal review. The site targets WCAG 2.2 Level AA in code and testing, does not use accessibility overlay widgets, and asks users to report barriers through the contact form with page, browser or assistive technology, and failed task.",
    keyFacts: [
      "Target: WCAG 2.2 Level AA (PLACEHOLDER: formal conformance statement pending legal review)",
      "Automated checks: axe-core, jsx-a11y, Lighthouse accessibility",
      "No accessiBe, UserWay, or AudioEye overlays",
      "Report barriers via the contact form",
      "PLACEHOLDER: dedicated accessibility email and response-time SLA",
    ],
    faqs: [
      {
        question: "What accessibility standard does this site target?",
        answer:
          "WCAG 2.2 Level AA. The formal conformance statement and review date remain PLACEHOLDER pending legal review.",
      },
      {
        question: "Does the site use an accessibility overlay?",
        answer:
          "No. Overlay widgets are not installed. Semantic HTML, contrast, focus, and keyboard support are built into the pages.",
      },
      {
        question: "How do I report an accessibility barrier?",
        answer:
          "Use the contact form. Name the page URL, the browser or assistive technology, and the task that failed. PLACEHOLDER: dedicated email and response-time commitment pending operations.",
      },
      {
        question: "What automated tests run in continuous integration?",
        answer:
          "Fair Housing copy scan, axe-core Playwright checks on every route, jsx-a11y lint on the site shell, and Lighthouse accessibility score gates.",
      },
    ],
    entityPhrases: [
      "WCAG 2.2 Level AA",
      "Zoom Into Homes accessibility statement",
    ],
  },
} satisfies Record<string, PageSeoEnhance>;
