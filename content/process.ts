import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    order: 1,
    title: "Intake: write down the constraints",
    body: "We record the access features that are required, the ones that are useful, and the ones that are irrelevant for this search. The glossary on this site is the checklist. The output is a one-page brief you can reuse with a lender, an occupational therapist, or a discharge planner.",
    clientEffort:
      "One call or a short written list. Photos of current equipment help. In-person meeting is optional.",
  },
  {
    order: 2,
    title: "Remote tour first",
    body: "Listings are toured on video before anyone spends energy on a showing. We walk the arrival route, door widths, bathrooms, and kitchen on camera, pause at measurements, and save stills against the brief. If a listing fails a required item, it does not get a drive-out.",
    clientEffort:
      "Watch the recording or join live. You do not have to leave home.",
  },
  {
    order: 3,
    title: "Verify features against the glossary",
    body: "Each remaining listing gets a feature sheet: measured door clearances, threshold heights, shower curb, route widths, and notes on lighting. We do not describe who should live there. We describe what the building does.",
    clientEffort:
      "Nothing required. Review the sheet if you want to drop or keep a listing.",
  },
  {
    order: 4,
    title: "Shortlist two or three finalists",
    body: "The list is cut to the properties that already passed the required items. That is the set worth an in-person visit—not a dozen maybes.",
    clientEffort: "A yes/no on the shortlist. Often a single reply.",
  },
  {
    order: 5,
    title: "Visit only the finalists",
    body: "In-person time is reserved for confirmation: maneuvering a specific device, checking a transfer in the actual bathroom, and confirming the arrival sequence. Showings are scheduled with extra time and a known rest point.",
    clientEffort: "Travel to two or three addresses, not twelve.",
  },
  {
    order: 6,
    title: "Offer, access notes, close",
    body: "Offers can include repair or modification notes tied to the feature sheet. After acceptance, we keep the same checklist through inspection so a missed curb or a 28-inch door does not appear at walkthrough.",
    clientEffort: "Standard purchase decisions. No extra showing circuit.",
  },
];
