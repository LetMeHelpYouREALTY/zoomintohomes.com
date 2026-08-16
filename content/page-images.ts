import type { PageImageSet } from "./types";

function img(
  page: string,
  id: string,
  supportsHeading: string,
  alt: string,
): PageImageSet["hero"] {
  return {
    id,
    src: `/images/pages/${page}/${id}.jpg`,
    alt,
    supportsHeading,
  };
}

/**
 * Seven images per route. `hero` is the strongest match for the page H1.
 * Remaining images sit with the H2/H3 they support. Alt text describes
 * building features and work tools, not who should live in a house.
 */
export const pageImages = {
  home: {
    hero: img(
      "home",
      "hero",
      "Tour the listing first. Visit only the finalists.",
      "Laptop on a table playing a video walkthrough of a Las Vegas hallway, with a tape measure paused on a doorway in the frame.",
    ),
    supporting: [
      img(
        "home",
        "audience",
        "Who this practice is built for",
        "Printed feature checklist, floor plan, and clipboard on a desk. No listing grid.",
      ),
      img(
        "home",
        "mobility",
        "Buyers whose bodies constrain the search",
        "Interior doorway with a tape measure showing roughly 36 inches of clear width in a single-level home.",
      ),
      img(
        "home",
        "aging",
        "Aging-in-place downsizers",
        "Single-level stucco ranch with a covered, zero-step front walk in a Las Vegas Valley 55-plus street.",
      ),
      img(
        "home",
        "veterans",
        "Disabled veterans",
        "Single-level desert home with a wide, paved route from driveway to a low-threshold front door.",
      ),
      img(
        "home",
        "promise",
        "The reduced-showing promise",
        "Three printed listing sheets on a table; two marked keep, the rest in a discard stack.",
      ),
      img(
        "home",
        "finalists",
        "Tour the listing first. Visit only the finalists.",
        "Handheld camera filming a zero-step front entry with a covered landing, late-day Nevada light.",
      ),
    ],
  },
  howItWorks: {
    hero: img(
      "how-it-works",
      "hero",
      "The reduced-showing process",
      "Tape measure, laptop with a paused interior video, and three house keys on a table.",
    ),
    supporting: [
      img(
        "how-it-works",
        "intake",
        "Intake: write down the constraints",
        "Open notebook with a handwritten access-feature list next to a floor plan and a phone.",
      ),
      img(
        "how-it-works",
        "remote-tour",
        "Remote tour first",
        "Gimbal camera pointed down a residential hallway toward a bathroom doorway.",
      ),
      img(
        "how-it-works",
        "verify",
        "Verify features against the glossary",
        "Tape measure on a door jamb with a clipboard noting threshold height and clear width.",
      ),
      img(
        "how-it-works",
        "shortlist",
        "Shortlist two or three finalists",
        "Three listing printouts side by side; a larger pile of rejected sheets set aside.",
      ),
      img(
        "how-it-works",
        "visit",
        "Visit only the finalists",
        "Two single-level house fronts on a quiet Las Vegas street, parked car at the nearer driveway.",
      ),
      img(
        "how-it-works",
        "close",
        "Offer, access notes, close",
        "Inspection flashlight and a feature sheet on a kitchen counter beside a lever faucet.",
      ),
    ],
  },
  features: {
    hero: img(
      "accessibility-features",
      "hero",
      "Accessibility feature glossary",
      "Tape measure stretched across an open doorway with a glossary clipboard on the floor.",
    ),
    supporting: [
      img(
        "accessibility-features",
        "entry",
        "Entry",
        "Zero-step front door with a covered landing and a low beveled threshold.",
      ),
      img(
        "accessibility-features",
        "circulation",
        "Circulation",
        "Clear 36-inch hallway to a bedroom and bathroom on one finished level, no interior stair.",
      ),
      img(
        "accessibility-features",
        "bathroom",
        "Bathroom",
        "Residential roll-in shower with no curb, grab bars on blocking, and clear floor space.",
      ),
      img(
        "accessibility-features",
        "kitchen",
        "Kitchen",
        "Kitchen work surface with an open knee-clearance span and lever faucet controls.",
      ),
      img(
        "accessibility-features",
        "sensory",
        "Sensory",
        "Well-lit threshold with a contrasting strip at a level change, no glare bloom on the floor.",
      ),
      img(
        "accessibility-features",
        "systems",
        "Systems",
        "Close-up of a lever door handle and a light switch at a seated reach height.",
      ),
    ],
  },
  veterans: {
    hero: img(
      "veterans",
      "hero",
      "VA SAH and SHA grants, paired with a purchase",
      "Single-level Nevada home with a wide paved arrival route and a zero-step covered door.",
    ),
    supporting: [
      img(
        "veterans",
        "will-not",
        "What we will not do on this page",
        "Closed document binder and a blank notepad. No dollar figures on screen or paper.",
      ),
      img(
        "veterans",
        "parallel",
        "What the housing search can do in parallel",
        "Laptop showing a paused remote tour beside a paper loan file, no amounts visible.",
      ),
      img(
        "veterans",
        "language",
        "Language we use in files",
        "Tape measure reading door clear width; handwritten notes say width, threshold, curb.",
      ),
      img(
        "veterans",
        "shower",
        "VA SAH and SHA grants, paired with a purchase",
        "Roll-in shower with a transfer space and wall blocking, residential bath, no hospital set.",
      ),
      img(
        "veterans",
        "entry",
        "What the housing search can do in parallel",
        "Arrival route from driveway to front door with no stair and a shallow threshold.",
      ),
      img(
        "veterans",
        "single-level",
        "Language we use in files",
        "Open floor from living room to kitchen and a bedroom hall, one finished level, no stair.",
      ),
    ],
  },
  agingInPlace: {
    hero: img(
      "aging-in-place",
      "hero",
      "Aging in place, Las Vegas and Henderson",
      "Single-level Las Vegas ranch with a covered zero-step entry and desert mountains behind.",
    ),
    supporting: [
      img(
        "aging-in-place",
        "summerlin",
        "Sun City Summerlin",
        "Northwest Las Vegas single-level homes on a wide street, Red Rock range in the distance.",
      ),
      img(
        "aging-in-place",
        "anthem",
        "Sun City Anthem",
        "Henderson hillside street of single-level stucco homes with a covered front walk.",
      ),
      img(
        "aging-in-place",
        "solera",
        "Solera",
        "Henderson desert community of one-story homes, gravel and palo verde in the parkway.",
      ),
      img(
        "aging-in-place",
        "siena",
        "Siena",
        "Staffed vehicle gatehouse at a Henderson community entrance, mountains beyond the wall.",
      ),
      img(
        "aging-in-place",
        "del-webb",
        "Del Webb communities",
        "Builder street of single-level Nevada homes with mailboxes and a flat sidewalk.",
      ),
      img(
        "aging-in-place",
        "universal",
        "Universal design, as used here",
        "Interior: lever hardware, a roll-in shower doorway, and a zero-step patio slider on one level.",
      ),
    ],
  },
  referralPartners: {
    hero: img(
      "referral-partners",
      "hero",
      "Referral partners",
      "Dated shortlist printout and a tablet playing a doorway video on a conference table.",
    ),
    supporting: [
      img(
        "referral-partners",
        "discharge",
        "Hospital discharge planners",
        "Hospital case-management desk with a housing feature brief, not a patient bedside scene.",
      ),
      img(
        "referral-partners",
        "therapy",
        "Occupational and physical therapists",
        "Tape measure and a home-evaluation form on a bathroom vanity beside a roll-in shower.",
      ),
      img(
        "referral-partners",
        "va-loan",
        "VA loan officers",
        "Loan processor desk with a written feature sheet clipped to a file, no grant amounts shown.",
      ),
      img(
        "referral-partners",
        "elder-law",
        "Elder law attorneys",
        "Legal file folder, house key, and a remote-tour still of a single-level floor plan.",
      ),
      img(
        "referral-partners",
        "contractor",
        "Accessibility and remodeling contractors",
        "Open bathroom wall showing wood blocking for grab bars, tape measure on the tile lip.",
      ),
      img(
        "referral-partners",
        "handoff",
        "Handoff",
        "Envelope of stills and a one-page feature sheet labeled with a date, not a diagnosis.",
      ),
    ],
  },
  about: {
    hero: img(
      "about",
      "hero",
      "PLACEHOLDER: Dr. Gene Boyle",
      "Las Vegas Valley residential street of single-level homes, desert mountains on the horizon.",
    ),
    supporting: [
      img(
        "about",
        "brokerage",
        "PLACEHOLDER: Dr. Gene Boyle",
        "Professional real-estate office interior, conference table and listing files, no nameplate.",
      ),
      img(
        "about",
        "workstation",
        "PLACEHOLDER: credentials, education, and years in practice pending source documents.",
        "Dual monitors showing a paused home video and a feature checklist, empty chair.",
      ),
      img(
        "about",
        "glossary",
        "The practice is built so a referral source can read the process, the glossary, and the Fair Housing rule (features, not people) without a sales call.",
        "Open binder of measured doorway and shower photos with width notes in the margin.",
      ),
      img(
        "about",
        "henderson",
        "PLACEHOLDER: Dr. Gene Boyle",
        "Henderson hillside homes at dusk, single-level roofs, no marketing skyline overlay.",
      ),
      img(
        "about",
        "measure",
        "PLACEHOLDER: biography. Do not invent military service, medical licenses, or awards.",
        "Hands of a working adult measuring a door clear width. No wheelchair prop in the frame.",
      ),
      img(
        "about",
        "eho",
        "The practice is built so a referral source can read the process, the glossary, and the Fair Housing rule (features, not people) without a sales call.",
        "Equal Housing Opportunity mark on a printed brokerage disclosure sheet on a desk.",
      ),
    ],
  },
  contact: {
    hero: img(
      "contact",
      "hero",
      "Request a consultation",
      "Blank consultation notepad, phone, and a laptop paused on a listing hallway video.",
    ),
    supporting: [
      img(
        "contact",
        "buyer",
        "Request a consultation",
        "House key and a three-item shortlist on a table, not a stack of twelve listing flyers.",
      ),
      img(
        "contact",
        "seller",
        "Request a consultation",
        "Single-level home exterior prepared for photos, lockbox on a lever-handle door.",
      ),
      img(
        "contact",
        "referral",
        "Request a consultation",
        "Handoff packet: feature sheet, dated shortlist, and a tablet with a saved tour.",
      ),
      img(
        "contact",
        "remote",
        "Request a consultation",
        "Laptop video call showing a bathroom doorway while a tape measure sits in the foreground.",
      ),
      img(
        "contact",
        "shortlist",
        "Request a consultation",
        "Two or three printed addresses circled on a map of the Las Vegas Valley.",
      ),
      img(
        "contact",
        "desk",
        "Request a consultation",
        "Office desk facing a window with desert mountains, consultation form in the foreground.",
      ),
    ],
  },
  accessibilityStatement: {
    hero: img(
      "accessibility-statement",
      "hero",
      "Accessibility statement",
      "Keyboard and a large-text webpage showing a visible skip-to-content control and one H1.",
    ),
    supporting: [
      img(
        "accessibility-statement",
        "commitment",
        "Commitment",
        "Printed WCAG 2.2 AA checklist next to a laptop displaying semantic heading outline.",
      ),
      img(
        "accessibility-statement",
        "limits",
        "Known limits",
        "Simple webpage with a gray map placeholder; no third-party overlay chrome on the screen.",
      ),
      img(
        "accessibility-statement",
        "report",
        "How to report a barrier",
        "Contact form on a large-text screen with labeled fields and a visible focus ring.",
      ),
      img(
        "accessibility-statement",
        "no-overlay",
        "What this site does not use",
        "Clean browser window of a text-heavy page. No floating accessibility-widget button.",
      ),
      img(
        "accessibility-statement",
        "contrast",
        "Commitment",
        "High-contrast dark text on a light page, 16-pixel body copy, left-aligned paragraphs.",
      ),
      img(
        "accessibility-statement",
        "targets",
        "How to report a barrier",
        "Phone screen with large 44-pixel tap targets on primary buttons, ample spacing.",
      ),
    ],
  },
} satisfies Record<string, PageImageSet>;
