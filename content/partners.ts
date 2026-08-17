import type { ReferralPartnerType } from "./types";

export const referralPartnerTypes: ReferralPartnerType[] = [
  {
    slug: "discharge-planners",
    audience: "Hospital discharge planners",
    theirProblem:
      "A patient needs a different unit before a stair-only house becomes the reason for a bounce-back. Housing search is not in the discharge timeline.",
    whatWeHandle: [
      "Video tours while the patient is still admitted or in rehab",
      "Written access checklists that a case manager can file without a site visit",
      "A shortlist timed to a realistic discharge window",
    ],
    handoffProcess:
      "Send the patient's location constraints and required features (or ask us to take the intake). We return a dated shortlist and recordings. You keep medical decisions; we keep the housing logistics.",
  },
  {
    slug: "occupational-therapy",
    audience: "Occupational and physical therapists",
    theirProblem:
      "Home evaluations describe barriers in a house the client already has. Buying the next house without those barriers is a different workflow, and most listing photos hide door widths.",
    whatWeHandle: [
      "Measurements aligned to the same categories used in a home eval",
      "Video of the arrival route, bathroom, and kitchen on request",
      "Scheduling in-person visits only after the remote pass",
    ],
    handoffProcess:
      "Share the eval's environmental limits (with client consent). We map them onto the feature glossary and send listings that already match, plus the ones that fail and why.",
  },
  {
    slug: "va-loan-officers",
    audience: "VA loan officers",
    theirProblem:
      "SAH and SHA are grant programs, not a line item most purchase files already know how to sequence. Clients get sent to agents who then discover stairs on the first showing.",
    whatWeHandle: [
      "Early remote screening so a pre-approval is not spent on a stair-only plan",
      "A written access checklist a processor can attach to the file",
      "Share required features early; verify SAH/SHA rules on VA.gov with an accredited representative",
    ],
    handoffProcess:
      "Introduce the veteran (with consent). We run intake and remote tours, then coordinate showing dates with your underwriting calendar. Grant dollar amounts are not quoted from this site.",
  },
  {
    slug: "elder-law",
    audience: "Elder law attorneys",
    theirProblem:
      "A sale or purchase timed to a conservatorship, a Medicaid plan, or a move from a two-story house can stall if the next unit fails a basic access check after the client has already traveled.",
    whatWeHandle: [
      "Remote documentation counsel can keep in the file",
      "Fewer in-person trips for the client",
      "Feature language that describes the building, not the person",
    ],
    handoffProcess:
      "Send the timeline and any court or trustee constraints that affect showing access. We report in writing. We do not give legal advice.",
  },
  {
    slug: "contractors",
    audience: "Accessibility and remodeling contractors",
    theirProblem:
      "Bids written after a client falls in love with a listing that cannot take a 36-inch door or a roll-in shower waste everyone's calendar.",
    whatWeHandle: [
      "Pre-purchase video of the walls, floors, and wet rooms that would be in a bid",
      "A pass/fail on required features before you roll a truck",
      "Introductions only on listings that survived the remote screen",
    ],
    handoffProcess:
      "If a modification is the path, we send stills and measurements first. You decide whether the structure supports the work. We do not mark up contractor invoices.",
  },
];
