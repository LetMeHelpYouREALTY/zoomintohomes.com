import type { AccessibilityFeature } from "./types";

/**
 * Feature glossary is the copy standard for listing notes and partner briefs.
 * Measurements cite the 2010 ADA Standards for Accessible Design where a
 * published figure exists. Residential listings often exceed or fall short
 * of those figures; the glossary records what was measured, not who should live there.
 */
export const accessibilityFeatures: AccessibilityFeature[] = [
  {
    slug: "zero-step-entry",
    name: "Zero-step entry",
    category: "entry",
    factualDescription:
      "A route from the arrival point to the primary entrance with no stair and no abrupt level change. Thresholds, if present, are low and beveled.",
    measurement:
      "Vertical change up to 1/4 in. may be untreated; 1/4–1/2 in. requires a bevel (ADA 303.2–303.3).",
    whyItMatters:
      "Removes the need to lift a wheeled device or take a step at the door.",
    standardCitation: "2010 ADA Standards §§303.2–303.3",
  },
  {
    slug: "covered-landing",
    name: "Covered landing at entry",
    category: "entry",
    factualDescription:
      "A weather-protected floor surface immediately outside the primary door, large enough to wait, unlock, and maneuver while the door swings.",
    measurement:
      "Record landing depth and door swing direction on each listing.",
    whyItMatters:
      "Keeps the transfer and keying sequence out of rain and direct sun.",
  },
  {
    slug: "door-clear-width",
    name: "Door clear width",
    category: "circulation",
    factualDescription:
      "The open width of the doorway measured between the face of the door and the stop, with the door open 90 degrees.",
    measurement:
      "32 in. minimum clear width (ADA 404.2.3). 36 in. is recorded when present.",
    whyItMatters:
      "Determines whether a wheeled device and its user can pass the opening without angling or removing doors.",
    standardCitation: "2010 ADA Standards §404.2.3",
  },
  {
    slug: "accessible-route-width",
    name: "Interior route width",
    category: "circulation",
    factualDescription:
      "Clear width of hallways and other interior routes used to reach bedrooms, bathrooms, and the kitchen.",
    measurement: "36 in. minimum on an accessible route (ADA 403.5.1).",
    whyItMatters:
      "Sets whether a person can travel between rooms without removing furniture as a workaround.",
    standardCitation: "2010 ADA Standards §403.5.1",
  },
  {
    slug: "turning-space",
    name: "Turning space",
    category: "circulation",
    factualDescription:
      "A clear floor area that allows a 180-degree turn, typically in kitchens, bathrooms, and at the end of a hall.",
    measurement:
      "60 in. diameter circle, or a T-turn as described in ADA 304.3.",
    whyItMatters:
      "Avoids having to reverse an entire hallway to change direction.",
    standardCitation: "2010 ADA Standards §304.3",
  },
  {
    slug: "single-level-plan",
    name: "Single-level floor plan",
    category: "circulation",
    factualDescription:
      "Primary living, cooking, sleeping, and bathing rooms on one finished floor, with no interior stair between them.",
    whyItMatters: "Eliminates repeated stair use for daily routines.",
  },
  {
    slug: "ramp-slope",
    name: "Ramp slope",
    category: "entry",
    factualDescription:
      "Running slope of any ramp used in place of stairs on the arrival route.",
    measurement: "Maximum 1:12 running slope (ADA 405.2).",
    whyItMatters:
      "A steeper run requires more force to ascend and more control to descend.",
    standardCitation: "2010 ADA Standards §405.2",
  },
  {
    slug: "roll-in-shower",
    name: "Roll-in shower",
    category: "bathroom",
    factualDescription:
      "A shower compartment with no curb, or a low transferable threshold, and clear floor space to enter.",
    measurement:
      "Transfer and roll-in dimensions vary; record curb height and clear floor space.",
    whyItMatters: "Allows bathing without stepping over a standard tub wall.",
  },
  {
    slug: "grab-bars",
    name: "Grab bars at toilet and shower",
    category: "bathroom",
    factualDescription:
      "Fixed bars at the toilet and in the shower or tub, mounted to blocking in the wall—not tension rods.",
    measurement:
      "ADA 609 describes bar diameter and clearance from the wall when present.",
    whyItMatters:
      "Provides a stable handhold during transfers. Decorative towel bars are not a substitute.",
    standardCitation: "2010 ADA Standards §609",
  },
  {
    slug: "toilet-clear-floor",
    name: "Toilet clear floor space",
    category: "bathroom",
    factualDescription:
      "Clear floor area beside and in front of the toilet for a transfer.",
    measurement:
      "Record clearance to the nearest obstruction on each side and in front.",
    whyItMatters:
      "Sets whether a transfer from a wheeled device is possible without relocating fixtures.",
  },
  {
    slug: "knee-clearance-sink",
    name: "Knee clearance at sink",
    category: "bathroom",
    factualDescription:
      "Open space under a lavatory or kitchen sink so a seated person can roll forward to the bowl or basin.",
    measurement:
      "ADA 306 describes knee and toe clearance when the standard applies.",
    whyItMatters: "Allows use of the fixture from a seated position.",
    standardCitation: "2010 ADA Standards §306",
  },
  {
    slug: "lever-hardware",
    name: "Lever door hardware",
    category: "systems",
    factualDescription:
      "Door and faucet controls operable with a closed fist, without tight grasping, pinching, or twisting of the wrist.",
    measurement:
      "Operable with 5 pounds of force maximum where ADA 309.4 applies.",
    whyItMatters:
      "Round knobs require grip and rotation that many hands cannot produce.",
    standardCitation: "2010 ADA Standards §309.4",
  },
  {
    slug: "work-surface-height",
    name: "Work surface height",
    category: "kitchen",
    factualDescription:
      "Counter or table height and whether a portion of the work surface has knee clearance.",
    measurement:
      "Record finished height from the floor and any open below-counter span.",
    whyItMatters:
      "Standard 36 in. counters may be unusable from a seated position without a lowered section.",
  },
  {
    slug: "lighting-contrast",
    name: "Lighting and contrast at changes of level",
    category: "sensory",
    factualDescription:
      "Illumination and visual contrast at stairs, ramps, thresholds, and task surfaces. Notes glare from uncovered windows on glossy floors.",
    whyItMatters:
      "Low vision and depth-perception changes make unmarked level changes easy to miss.",
  },
  {
    slug: "electrical-reach",
    name: "Electrical outlet and switch reach",
    category: "systems",
    factualDescription:
      "Height of frequently used switches, thermostats, and outlets above the finished floor.",
    measurement:
      "Reach ranges in ADA 308 when the standard applies; otherwise record the measured height.",
    whyItMatters:
      "Controls above a seated reach require a second person or a tool for daily use.",
    standardCitation: "2010 ADA Standards §308",
  },
];

export const featureCategories: {
  id: AccessibilityFeature["category"];
  label: string;
}[] = [
  { id: "entry", label: "Entry" },
  { id: "circulation", label: "Circulation" },
  { id: "bathroom", label: "Bathroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "sensory", label: "Sensory" },
  { id: "systems", label: "Systems" },
];
