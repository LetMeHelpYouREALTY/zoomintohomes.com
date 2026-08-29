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
      "Zoom Into Homes is a Las Vegas and Henderson real estate practice that tours homes on video, checks doorway and bathroom access against a written list, and schedules in-person visits for two or three finalists only. Video touring is how we keep showings short.",
    keyFacts: [
      "Brand: Zoom Into Homes",
      "Service area: Las Vegas and Henderson, Nevada",
      "Brokerage: Berkshire Hathaway HomeServices Nevada Properties",
      "Method: video tour → written access checklist → shortlist → two or three finalists",
      "Copy rule: describe building features, not who should live there",
      "Browse live homes for sale here; this site explains the measured tour process",
    ],
    faqs: [
      {
        question: "What is Zoom Into Homes?",
        answer:
          "Zoom Into Homes is a Las Vegas and Henderson real estate practice that tours homes on video, checks doorway and bathroom access against a written list, then visits only two or three finalists in person. Call (702) 222-1964.",
      },
      {
        question: "What does it mean to zoom into homes in Las Vegas?",
        answer:
          "Zoom into homes means Zoom Into Homes walks the listing on video first so buyers and sellers can check doorways and bathrooms in writing before anyone drives. In-person visits stay limited to two or three finalists.",
      },
      {
        question: "How many homes do buyers visit in person?",
        answer:
          "The process is built to visit two or three finalists, not a dozen maybes. Exact count depends on the shortlist after remote verification.",
      },
      {
        question: "Is this a full home-search website?",
        answer:
          "You can browse live listings here. This site also explains how we measure access and keep in-person tours short—so you know the process before you spend a day driving.",
      },
      {
        question: "Who usually sends people here?",
        answer:
          "Hospital discharge planners, occupational and physical therapists, VA loan officers, elder law attorneys, and accessibility contractors use the written process and access checklists.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "zoom into homes Las Vegas",
      "Zoom Into Homes Henderson",
      "Berkshire Hathaway HomeServices Nevada Properties",
      "video home tours Las Vegas",
    ],
  },
  howItWorks: {
    answerBlock:
      "Zoom Into Homes keeps in-person tours short in six steps: list required access details, tour on video, check the written measurement list, shortlist two or three finalists, visit only those homes, then offer and close with the same checklist.",
    keyFacts: [
      "Step 1 — Intake: write required, useful, and irrelevant features",
      "Step 2 — Remote tour first on video",
      "Step 3 — Measure against the published list",
      "Step 4 — Shortlist two or three finalists",
      "Step 5 — Visit only the finalists",
      "Step 6 — Offer, access notes, and close",
    ],
    faqs: [
      {
        question: "How does Zoom Into Homes keep in-person tours short?",
        answer:
          "Zoom Into Homes uses a written sequence that spends physical energy only on homes that already passed a documented access check. Video work comes first; in-person time is reserved for confirmation.",
      },
      {
        question: "Do buyers have to leave home for every listing?",
        answer:
          "No. Video tours and written access checklists happen before drive-outs. Buyers travel for the shortlist, not for every active listing.",
      },
      {
        question: "What does a buyer prepare for intake?",
        answer:
          "A short list of required access details, optional photos of current equipment, and one call or written note. An in-person intake meeting is optional.",
      },
      {
        question: "How are access details recorded?",
        answer:
          "Each remaining home gets a written checklist with measured door clearances, threshold heights, shower curb, path widths, and lighting notes. The sheet describes the building, not a diagnosis.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "How Zoom Into Homes video tours work",
      "video-first home tours Las Vegas",
      "remote property tour Las Vegas",
      "home access checklist",
    ],
  },
  features: {
    answerBlock:
      "Zoom Into Homes lists home features we can measure, such as a zero-step entry or a 32-inch doorway. When a published figure exists, we note the 2010 ADA Standards number on that row. We do not describe who a home is for.",
    keyFacts: [
      "Categories: entry, hallways, bathroom, kitchen, lighting and sound, and home systems",
      "Example measurement: 32 in. minimum door clear width (ADA 404.2.3)",
      "Example measurement: 36 in. minimum accessible route width (ADA 403.5.1)",
      "Example measurement: maximum 1:12 ramp running slope (ADA 405.2)",
      "We describe doors, showers, and paths—not people",
    ],
    faqs: [
      {
        question: "What home features are on the glossary?",
        answer:
          "A list of things we can measure before you visit, like doorway width and shower curb height, plus why that number matters day to day.",
      },
      {
        question: "Do you describe who a house is for?",
        answer:
          "No. Copy and written access checklists describe door widths, thresholds, showers, and routes. They do not claim a property fits a type of person.",
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
      "Zoom Into Homes",
      "Zoom Into Homes access-feature glossary",
      "2010 ADA Standards",
      "zero-step entry",
      "door clear width",
    ],
  },
  veterans: {
    answerBlock:
      "Zoom Into Homes sequences a Las Vegas or Henderson purchase search beside VA Specially Adapted Housing (SAH) and Special Housing Adaptation (SHA). This page is not a benefits determination and does not quote unverified grant amounts. Official program rules live on VA.gov.",
    keyFacts: [
      "Programs named: VA Specially Adapted Housing (SAH) and Special Housing Adaptation (SHA)",
      "Official program information: va.gov housing-assistance disability housing grants",
      "This site sequences video tours and written access checklists; it does not decide entitlement",
      "Purchase files use feature language: width, threshold, curb, route—not diagnoses",
      "Grant amounts and eligibility: verify on VA.gov — not quoted from this site",
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
          "Yes. Video tours and written access checklists can start while a lender or VA-accredited representative works the grant file, so showing time is not spent on plans that cannot take the needed adaptation.",
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
      "Zoom Into Homes",
      "VA Specially Adapted Housing",
      "Special Housing Adaptation",
      "disabled veteran home purchase Nevada",
      "U.S. Department of Veterans Affairs",
    ],
  },
  agingInPlace: {
    answerBlock:
      "Zoom Into Homes aging-in-place searches in Las Vegas and Henderson focus on floor plans that still work when stairs, tub walls, and round knobs cost more energy. Communities often reviewed include Sun City Summerlin, Sun City Anthem, Solera, Siena, and Del Webb locations. A 55+ label is an age policy, not an access certificate.",
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
      "Zoom Into Homes",
      "Zoom Into Homes aging-in-place searches",
      "aging in place Las Vegas",
      "Sun City Summerlin",
      "Sun City Anthem",
    ],
  },
  referralPartners: {
    answerBlock:
      "Zoom Into Homes is the written housing handoff for hospital discharge planners, occupational and physical therapists, VA loan officers, elder law attorneys, and accessibility contractors. Care teams keep dated shortlists and recordings, and leave medical and legal decisions in their own lane.",
    keyFacts: [
      "Care teams: discharge planners, OT/PT, VA loan officers, elder law, contractors",
      "Deliverables: video tours, written access checklists, dated shortlists",
      "Care teams keep clinical or legal decisions; this practice keeps housing logistics",
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
          "No. Grant amounts are not quoted from this site. Early video screening and written access checklists are what attach to the purchase file.",
      },
      {
        question: "When should a remodeling contractor get involved?",
        answer:
          "After pre-purchase video and measurements show whether required features or wall blocking can support the work—before a truck rolls for a home that cannot take the adaptation.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "Zoom Into Homes for hospitals and care teams",
      "hospital discharge planner housing handoff",
      "occupational therapist home search Las Vegas",
      "VA loan officer access checklist",
    ],
  },
  about: {
    answerBlock:
      "Dr. Gene Boyle (California DRE #02282581) runs Zoom Into Homes with Berkshire Hathaway HomeServices Nevada Properties coordination in Las Vegas and Henderson via Dr. Jan Duffy (S.0197614.LLC). The site documents a video-first touring process and a Fair Housing copy rule—features, not people.",
    keyFacts: [
      "Brand: Zoom Into Homes",
      "Agent: Dr. Gene Boyle, California DRE #02282581",
      "Nevada partner: Dr. Jan Duffy, License S.0197614.LLC",
      "Brokerage: Berkshire Hathaway HomeServices Nevada Properties",
      "Phone: (702) 222-1964",
      "Markets: Las Vegas and Henderson, Nevada",
    ],
    faqs: [
      {
        question: "Who runs Zoom Into Homes?",
        answer:
          "Dr. Gene Boyle, California DRE #02282581, with Las Vegas coordination through Dr. Jan Duffy, License S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties.",
      },
      {
        question: "What makes this practice different from a listing portal?",
        answer:
          "The site publishes how we keep in-person tours short and the measurement list used in files. It is built so care teams can read the process—and so buyers can browse homes for sale without industry jargon.",
      },
      {
        question: "How do you handle Fair Housing in marketing copy?",
        answer:
          "Copy describes measurable building features. It does not describe who should live in a property. A banned-phrase scan runs over content files in continuous integration.",
      },
      {
        question: "Where is the brokerage identified?",
        answer:
          "In the site footer on every page: agent licenses, Berkshire Hathaway HomeServices Nevada Properties, franchise independently-owned disclaimer, and Equal Housing Opportunity.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "Zoom Into Homes Las Vegas",
      "Dr. Gene Boyle",
      "Berkshire Hathaway HomeServices Nevada Properties",
    ],
  },
  contact: {
    answerBlock:
      "Zoom Into Homes books Las Vegas and Henderson video-tour planning calls on this page. We tour the listing on camera, write doorway widths, step heights, and shower curbs, then visit two or three finalists in person. Pick a time on the calendar or call (702) 222-1964.",
    keyFacts: [
      "Phone: (702) 222-1964",
      "Book a time on the calendar on this page",
      "Markets: Las Vegas and Henderson, Nevada",
      "Method: video tour → written access checklist → two or three finalists",
    ],
    faqs: [
      {
        question: "How do I book a Zoom Into Homes Las Vegas video-tour call?",
        answer:
          "Pick a time on the calendar on this page, or call (702) 222-1964. Tell us whether you are buying, selling, or introducing a client, plus required doorway and bathroom features when known.",
      },
      {
        question: "What happens on the planning call?",
        answer:
          "We confirm the search area, the access details that must be measured, and which listings to tour on video first. In-person visits stay limited to two or three finalists.",
      },
      {
        question: "What should care teams include when introducing a client?",
        answer:
          "Location constraints, required access features, timeline, and consent to introduce the client. Medical and legal advice stays with the care team.",
      },
      {
        question: "Do I need to tour twelve homes first?",
        answer:
          "No. The practice is built so video checks happen before a long showing day.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "Book a Zoom Into Homes Las Vegas video-tour call",
      "Las Vegas video home tour",
      "Henderson video-tour planning call",
    ],
  },
  accessibilityStatement: {
    answerBlock:
      "The Zoom Into Homes site targets WCAG 2.2 Level AA in code and testing, does not use accessibility overlay widgets, and asks users to report barriers by calling (702) 222-1964 or booking a time on the contact page.",
    keyFacts: [
      "Target: WCAG 2.2 Level AA",
      "Automated checks: axe-core, jsx-a11y, Lighthouse accessibility",
      "No accessiBe, UserWay, or AudioEye overlays",
      "Report barriers by calling (702) 222-1964 or booking a time on the contact page",
    ],
    faqs: [
      {
        question: "What accessibility standard does this site target?",
        answer:
          "WCAG 2.2 Level AA in markup and automated testing. Brokerage counsel may refine formal conformance language.",
      },
      {
        question: "Does the site use an accessibility overlay?",
        answer:
          "No. Overlay widgets are not installed. Semantic HTML, contrast, focus, and keyboard support are built into the pages.",
      },
      {
        question: "How do I report an accessibility barrier?",
        answer:
          "Call (702) 222-1964 or book a time on the contact page. Name the page URL, the browser or assistive technology, and the task that failed.",
      },
      {
        question: "What automated tests run in continuous integration?",
        answer:
          "Fair Housing copy scan, axe-core Playwright checks on every route, jsx-a11y lint on the site shell, and Lighthouse accessibility score gates.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "Zoom Into Homes accessibility statement",
      "WCAG 2.2 Level AA",
    ],
  },
  whatWeMeasure: {
    answerBlock:
      "Zoom Into Homes writes door widths, step heights, shower curbs, hall widths, and control heights against a published access glossary. Each row has a date and notes how the number was checked. The sheet describes the building, not who should live there.",
    keyFacts: [
      "Measurements: door width, step height, shower curb, hall width, control height",
      "Each row has a date and a source note",
      "Numbers stay in a labeled box, separate from the listing's own feature list",
      "Call (702) 222-1964 to apply the list to a Las Vegas or Henderson search",
    ],
    faqs: [
      {
        question: "What does Zoom Into Homes measure on a tour?",
        answer:
          "Door widths, step heights, shower curbs, hall widths, and control heights. Zoom Into Homes writes the date and how the number was checked.",
      },
      {
        question: "Where do the numbers come from?",
        answer:
          "Each row notes whether it was measured on site, checked from a photo, reported by an agent, or taken from a floor plan—plus who checked it and when.",
      },
      {
        question: "Do the measurements describe who should live in the house?",
        answer:
          "No. Zoom Into Homes records building features only. Copy does not claim a home fits a type of person.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "What Zoom Into Homes measures",
      "doorway width Las Vegas",
      "shower curb measurement Henderson",
    ],
  },
  accessibleHomes: {
    answerBlock:
      "Zoom Into Homes publishes measured access features for Las Vegas and Henderson searches. Filters and copy use published access-feature names and numeric dimensions—not an undefined accessible checkbox. Video tours still write doorway and bathroom numbers on the specific unit.",
    keyFacts: [
      "Market: Las Vegas and Henderson",
      "Feature language: published access-feature names plus measured numbers",
      "Process: video tour, written checklist, two or three in-person finalists",
      "Call (702) 222-1964 to start a measured search",
    ],
    faqs: [
      {
        question: "What is a Zoom Into Homes measured-access search?",
        answer:
          "A Las Vegas or Henderson housing search that records doorway, bathroom, and path numbers on video before anyone drives, then visits two or three finalists.",
      },
      {
        question: "Is an accessible listing checkbox enough?",
        answer:
          "No. Zoom Into Homes still measures the unit. A marketing checkbox is not a dated doorway or shower-curb figure.",
      },
      {
        question: "Which valley areas have editorial guides?",
        answer:
          "Henderson and Summerlin have first-party Zoom Into Homes guides. Access still has to be measured on the specific home.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "Zoom Into Homes measured-access homes in Las Vegas",
      "Henderson measured access features",
    ],
  },
  glossary: {
    answerBlock:
      "The Zoom Into Homes glossary defines doorway, bathroom, entry, and related access features used on written checklists in Las Vegas and Henderson. Each term is a building feature we can measure. We do not use the terms to describe who should live in a property.",
    keyFacts: [
      "Source lookup: published access-feature names used on checklists",
      "Use: dated checklists after a video or on-site tour",
      "Language: building features, not people",
      "Call (702) 222-1964 to apply a term to a specific house",
    ],
    faqs: [
      {
        question: "What is the Zoom Into Homes access glossary?",
        answer:
          "Plain-language definitions for doorway, bathroom, and entry features Zoom Into Homes records on Las Vegas and Henderson checklists.",
      },
      {
        question: "Where do the technical names come from?",
        answer:
          "Feature names follow the published access-feature list used on this site. Zoom Into Homes still writes a dated number for the unit.",
      },
      {
        question: "Does a glossary term mean a house is approved for someone?",
        answer:
          "No. Terms describe building features. Zoom Into Homes does not use them to describe who should live there.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "Zoom Into Homes access-features glossary",
      "Zoom Into Homes access-feature glossary",
    ],
  },
  henderson: {
    answerBlock:
      "Zoom Into Homes treats Henderson searches the same as the rest of the valley: tour the unit on video, write doorway widths and shower curbs, then visit two or three finalists. Community marketing is not an access certificate.",
    keyFacts: [
      "City: Henderson, Nevada",
      "Method: video tour plus dated access checklist",
      "Communities often reviewed: Sun City Anthem, Solera, Siena",
      "Call (702) 222-1964 to sequence a Henderson shortlist",
    ],
    faqs: [
      {
        question: "How does Zoom Into Homes search Henderson homes?",
        answer:
          "Video first, then a written doorway and bathroom list, then two or three in-person finalists. A community brochure is not a unit measurement.",
      },
      {
        question: "Which Henderson communities come up often?",
        answer:
          "Sun City Anthem, Solera, and Siena appear often in Henderson searches. Zoom Into Homes still measures the specific unit.",
      },
      {
        question: "Does a 55+ label replace an access checklist?",
        answer:
          "No. An age policy is not a doorway or shower-curb measurement. Zoom Into Homes still writes those numbers.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "Zoom Into Homes Henderson",
      "Henderson video home tours",
    ],
  },
  summerlin: {
    answerBlock:
      "Zoom Into Homes still measures Summerlin homes unit by unit: door widths, thresholds, and shower curbs on video before a showing day. A master-plan amenity list is not a substitute for that checklist.",
    keyFacts: [
      "Area: Summerlin and northwest Las Vegas",
      "Method: video tour plus dated access checklist",
      "Often paired with Sun City Summerlin and single-level plans",
      "Call (702) 222-1964 to sequence a Summerlin shortlist",
    ],
    faqs: [
      {
        question: "How does Zoom Into Homes search Summerlin homes?",
        answer:
          "Tour on video, write doorway and bathroom numbers, then visit two or three finalists. Amenity lists do not replace those numbers.",
      },
      {
        question: "Is Sun City Summerlin automatically measured?",
        answer:
          "No. Zoom Into Homes still checks the specific unit. A community label is not an access certificate.",
      },
      {
        question: "Do luxury Summerlin listings skip the video tour?",
        answer:
          "No. Price does not replace a dated Zoom Into Homes access checklist.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "Zoom Into Homes Summerlin",
      "Summerlin video home tours",
    ],
  },
  vaSha: {
    answerBlock:
      "Zoom Into Homes sequences a Nevada purchase search beside VA Special Housing Adaptation (SHA). SHA can fund adaptations that make a home safer or more usable for certain veterans. Eligibility and amounts come from the VA, not from this site.",
    keyFacts: [
      "Program: VA Special Housing Adaptation (SHA)",
      "Official rules: VA.gov disability housing grants",
      "Purchase file language: door width, threshold, shower curb, route width",
      "This page is not a benefits determination",
    ],
    faqs: [
      {
        question: "How does Zoom Into Homes pair SHA with a home search?",
        answer:
          "Video tours and written access checklists run so showing time is not spent on plans that cannot take the needed work. The VA decides SHA eligibility.",
      },
      {
        question: "How does SHA differ from SAH on a purchase file?",
        answer:
          "Both are VA programs. Zoom Into Homes uses the same building-feature language either way. Confirm current rules on VA.gov.",
      },
      {
        question: "Does Zoom Into Homes quote SHA dollar amounts?",
        answer:
          "No. Amounts and remaining entitlement must be verified with the VA or an accredited representative.",
      },
    ],
    entityPhrases: [
      "Zoom Into Homes",
      "VA SHA grant Nevada",
      "Zoom Into Homes veteran housing search",
    ],
  },
} satisfies Record<string, PageSeoEnhance>;
