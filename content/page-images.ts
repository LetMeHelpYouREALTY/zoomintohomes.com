import type { PageImageSet } from "./types";
import { PAGE_IMAGE_HEIGHT, PAGE_IMAGE_WIDTH } from "@/lib/images";

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
    width: PAGE_IMAGE_WIDTH,
    height: PAGE_IMAGE_HEIGHT,
  };
}

/**
 * Seven images per route. `hero` is the strongest match for the page H1.
 * Remaining images sit with the H2/H3 they support. Sources are 1200×800
 * JPEGs (3:2). Alt text describes the Zoom-tour scene and building features,
 * not who should live in a house.
 */
export const pageImages = {
  home: {
    hero: img(
      "home",
      "hero",
      "Zoom Into Homes: tour Las Vegas homes on video first",
      "Laptop on a Las Vegas kitchen island showing a live Zoom walkthrough of a home hallway, with a phone beside it ready for the call.",
    ),
    supporting: [
      img(
        "home",
        "audience",
        "Who is Zoom Into Homes for?",
        "Two adults on a sofa watching a live Zoom walkthrough of a Las Vegas living room on a laptop.",
      ),
      img(
        "home",
        "mobility",
        "When stairs or narrow doors are a hard stop",
        "Tape measure across a wide interior doorway while a laptop shows the same opening on a video call.",
      ),
      img(
        "home",
        "aging",
        "Aging-in-place downsizers",
        "Camera on a tripod filming a single-level Summerlin street from a covered porch at golden hour.",
      ),
      img(
        "home",
        "veterans",
        "Purchase searches paired with VA adapted-housing grants",
        "Photographer filming a luxury single-level Las Vegas home at sunset for a remote video tour.",
      ),
      img(
        "home",
        "promise",
        "What is the Zoom Into Homes reduced-tour promise?",
        "Three house keys on a numbered card beside a closed laptop, extra listing flyers stacked to the side.",
      ),
      img(
        "home",
        "finalists",
        "Zoom Into Homes: tour Las Vegas homes on video first",
        "Car in the driveway of a single-level Las Vegas home at golden hour — an in-person visit after the Zoom tours.",
      ),
    ],
  },
  howItWorks: {
    hero: img(
      "how-it-works",
      "hero",
      "How Zoom Into Homes keeps in-person tours short",
      "Phone showing a video-call join button beside a laptop playing a live Zoom tour of a luxury foyer.",
    ),
    supporting: [
      img(
        "how-it-works",
        "intake",
        "Intake: write down the constraints",
        "Handwritten access-feature list and a floor plan on a desk, with a four-person Zoom call on the phone.",
      ),
      img(
        "how-it-works",
        "remote-tour",
        "Remote tour first",
        "Agent filming a live Zoom walkthrough down a hallway toward an open bedroom and bathroom.",
      ),
      img(
        "how-it-works",
        "verify",
        "Verify features against the glossary",
        "Tape measure on a door jamb while a laptop shows the same doorway on a video call.",
      ),
      img(
        "how-it-works",
        "shortlist",
        "Shortlist two or three finalists",
        "Two listing photos of single-level desert homes beside a laptop paused on a Zoom interior tour.",
      ),
      img(
        "how-it-works",
        "visit",
        "Visit only the finalists",
        "Covered front walk to an open door where an agent films a live video tour at sunset.",
      ),
      img(
        "how-it-works",
        "close",
        "Offer, access notes, close",
        "Homeowner filming a staged kitchen on a gimbal while a laptop shows the same live Zoom listing tour.",
      ),
    ],
  },
  features: {
    hero: img(
      "accessibility-features",
      "hero",
      "Access features Zoom Into Homes measures",
      "Covered front walk and open door of a single-level Las Vegas home as an agent films a live video tour.",
    ),
    supporting: [
      img(
        "accessibility-features",
        "entry",
        "Entry",
        "Paved arrival walk to a covered front door with a shallow threshold, filmed on a live video tour.",
      ),
      img(
        "accessibility-features",
        "circulation",
        "Circulation",
        "Wide single-level hallway with a camera gimbal in the foreground filming a remote Zoom tour.",
      ),
      img(
        "accessibility-features",
        "bathroom",
        "Bathroom",
        "Residential curbless shower with a linear drain, brass fixtures, and a tablet showing the same bath on Zoom.",
      ),
      img(
        "accessibility-features",
        "kitchen",
        "Kitchen",
        "Open kitchen island with a brass lever faucet and a tablet playing a live Zoom walkthrough of the room.",
      ),
      img(
        "accessibility-features",
        "sensory",
        "Sensory",
        "Evenly lit covered porch and front walk at dusk, filmed for a remote video tour of the entry.",
      ),
      img(
        "accessibility-features",
        "systems",
        "Systems",
        "Brass lever door handle and a nearby light switch, with a phone showing the same doorway on a video call.",
      ),
    ],
  },
  veterans: {
    hero: img(
      "veterans",
      "hero",
      "VA SAH and SHA grants, paired with a Zoom Into Homes purchase",
      "Photographer filming a luxury single-level Las Vegas home at sunset for a remote video tour.",
    ),
    supporting: [
      img(
        "veterans",
        "will-not",
        "What does this page not claim?",
        "Access-feature list and floor plan beside a Zoom call. No dollar figures on the page or the screen.",
      ),
      img(
        "veterans",
        "parallel",
        "How can the housing search run in parallel with a grant file?",
        "Remote buyer at a desk joining a Zoom tour of a Las Vegas home, phone showing a video-call join button.",
      ),
      img(
        "veterans",
        "language",
        "What language goes in the purchase file?",
        "Tape measure reading door clear width on a live Zoom call, so the width is recorded in writing.",
      ),
      img(
        "veterans",
        "shower",
        "VA SAH and SHA grants, paired with a Zoom Into Homes purchase",
        "Curbless residential shower with a transfer space and a tablet showing the same bath on a video tour.",
      ),
      img(
        "veterans",
        "entry",
        "How can the housing search run in parallel with a grant file?",
        "Covered front door with a shallow threshold, filmed live so the arrival route is checked before anyone drives.",
      ),
      img(
        "veterans",
        "single-level",
        "What language goes in the purchase file?",
        "Two single-level listing photos beside a laptop paused on a Zoom interior, ready for a short written shortlist.",
      ),
    ],
  },
  agingInPlace: {
    hero: img(
      "aging-in-place",
      "hero",
      "Zoom Into Homes aging-in-place searches in Las Vegas and Henderson",
      "Camera on a tripod filming a single-level Summerlin street from a covered porch at golden hour.",
    ),
    supporting: [
      img(
        "aging-in-place",
        "summerlin",
        "Sun City Summerlin",
        "Northwest Las Vegas single-level homes with Red Rock in the distance, camera on the porch filming a remote tour.",
      ),
      img(
        "aging-in-place",
        "anthem",
        "Sun City Anthem",
        "Henderson hillside street of single-level homes at dusk, camera on the sidewalk filming a video tour.",
      ),
      img(
        "aging-in-place",
        "solera",
        "Solera",
        "Luxury Las Vegas pool patio at sunset with a tablet playing a live Zoom walkthrough of the same backyard.",
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
        "Covered zero-step-looking front walk filmed by an agent on a live video tour at sunset.",
      ),
      img(
        "aging-in-place",
        "universal",
        "What does universal design mean here?",
        "Curbless shower, wide bath doorway, and a tablet showing the same room on a Zoom walkthrough.",
      ),
    ],
  },
  referralPartners: {
    hero: img(
      "referral-partners",
      "hero",
      "Zoom Into Homes for hospitals and care teams",
      "Conference table with a tablet playing a Zoom doorway tour, listing photos, and a blank access checklist.",
    ),
    supporting: [
      img(
        "referral-partners",
        "discharge",
        "Hospital discharge planners",
        "Care-team conference table with a live Zoom home tour on a tablet, not a patient bedside scene.",
      ),
      img(
        "referral-partners",
        "therapy",
        "Occupational and physical therapists",
        "Residential curbless shower with a tape measure on the vanity and a tablet showing the bath on Zoom.",
      ),
      img(
        "referral-partners",
        "va-loan",
        "VA loan officers",
        "Out-of-area buyer on a Zoom tour of a Las Vegas home, phone ready to join the same video call.",
      ),
      img(
        "referral-partners",
        "elder-law",
        "Elder law attorneys",
        "Two homeowners on a Zoom listing consult with a lockbox and house keys on the dining table.",
      ),
      img(
        "referral-partners",
        "contractor",
        "Accessibility and remodeling contractors",
        "Open bathroom wall showing wood blocking for grab bars, tape measure on the tile lip, tablet nearby.",
      ),
      img(
        "referral-partners",
        "handoff",
        "Handoff",
        "Listing photos and a dated checklist beside a tablet playing a Zoom hallway walkthrough.",
      ),
    ],
  },
  about: {
    hero: img(
      "about",
      "hero",
      "What does Zoom Into Homes publish in writing?",
      "Dual monitors in a desert-view office: a paused home video tour on one screen and a calendar on the other.",
    ),
    supporting: [
      img(
        "about",
        "brokerage",
        "What does Zoom Into Homes publish in writing?",
        "Two homeowners on a Zoom listing consult with a lockbox and keys, Red Rock mountains in the window.",
      ),
      img(
        "about",
        "workstation",
        "Dr. Gene Boyle (California DRE #02282581) plans video-first touring and cross-market coordination. Las Vegas Valley showings and Nevada brokerage compliance run with Dr. Jan Duffy, License S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties.",
        "Homeowner filming a staged kitchen on a gimbal while a laptop shows buyers on the same live Zoom tour.",
      ),
      img(
        "about",
        "glossary",
        "The practice is built so a care team can read the process, the measurement list, and the Fair Housing rule (features, not people) without a sales call.",
        "Curbless shower photographed for a Zoom tour, tape measure on the vanity so bath details are written down.",
      ),
      img(
        "about",
        "henderson",
        "What does Zoom Into Homes publish in writing?",
        "Henderson hillside street of single-level homes at dusk, camera on the sidewalk filming a remote tour.",
      ),
      img(
        "about",
        "measure",
        "Call (702) 222-1964. Zoom Into Homes writes down how we keep in-person tours short and which access details we measure so a hospital or care team can evaluate the work without a sales call.",
        "Agent filming a live Zoom walkthrough down a hallway so doorway and bath details can be checked on camera.",
      ),
      img(
        "about",
        "eho",
        "The practice is built so a referral source can read the process, the glossary, and the Fair Housing rule (features, not people) without a sales call.",
        "Access-feature list and a floor plan on a desk during a Zoom intake call, so the work can be read without a sales pitch.",
      ),
    ],
  },
  contact: {
    hero: img(
      "contact",
      "hero",
      "Book a Zoom Into Homes Las Vegas video-tour call",
      "Phone showing a video-call join button beside a laptop playing a live Zoom tour of a luxury foyer.",
    ),
    supporting: [
      img(
        "contact",
        "buyer",
        "How do you start the consultation request?",
        "Two adults on a sofa watching a live Zoom walkthrough of a Las Vegas living room, ready to book the next call.",
      ),
      img(
        "contact",
        "seller",
        "How do you start the consultation request?",
        "Homeowner on a Zoom listing consult at a dining table with a lockbox and house keys, desert mountains behind.",
      ),
      img(
        "contact",
        "referral",
        "How do you start the consultation request?",
        "Conference table with a tablet playing a Zoom home tour, listing photos, and a blank access checklist.",
      ),
      img(
        "contact",
        "remote",
        "How do you start the consultation request?",
        "Out-of-area buyer joining a Zoom tour of a Las Vegas home, phone showing a video-call join button.",
      ),
      img(
        "contact",
        "shortlist",
        "How do you start the consultation request?",
        "Two listing photos of single-level homes beside a laptop paused on a Zoom interior — a two-or-three finalist list.",
      ),
      img(
        "contact",
        "desk",
        "How do you start the consultation request?",
        "Sellers on a Zoom consult with an agent on the laptop, lockbox and keys on the table at sunset.",
      ),
    ],
  },
  accessibilityStatement: {
    hero: img(
      "accessibility-statement",
      "hero",
      "Zoom Into Homes accessibility statement",
      "Remote buyer at a desk joining a Zoom tour of a Las Vegas home on a laptop, phone ready for the same call.",
    ),
    supporting: [
      img(
        "accessibility-statement",
        "commitment",
        "What is the accessibility commitment?",
        "Open kitchen with a lever faucet and a tablet playing a live Zoom walkthrough of the same room.",
      ),
      img(
        "accessibility-statement",
        "limits",
        "What are the known limits?",
        "Wide single-level hallway filmed with a camera gimbal for a remote Zoom tour, no overlay widget on screen.",
      ),
      img(
        "accessibility-statement",
        "report",
        "How do you report a barrier?",
        "Two adults watching a live Zoom home tour on a laptop — the same call used to report a barrier on the site.",
      ),
      img(
        "accessibility-statement",
        "no-overlay",
        "What does this site not use?",
        "Kitchen island laptop showing a live Zoom listing tour. No floating accessibility-widget button on the screen.",
      ),
      img(
        "accessibility-statement",
        "contrast",
        "What is the accessibility commitment?",
        "Brass lever door handle and light switch photographed for a video tour, high-contrast hardware against the door.",
      ),
      img(
        "accessibility-statement",
        "targets",
        "How do you report a barrier?",
        "Two adults on a sofa joining a Zoom home tour — large tap targets on the laptop and phone call controls.",
      ),
    ],
  },
} satisfies Record<string, PageImageSet>;
