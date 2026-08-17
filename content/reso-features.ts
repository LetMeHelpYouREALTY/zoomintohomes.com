/**
 * RESO AccessibilityFeatures lookup (DD 2.1) — 35 enumerated values.
 * Source: https://dd.reso.org/DD2.1/lookups/AccessibilityFeatures/ (fetched 17 Aug 2026).
 * These enums are the vocabulary for glossary URLs, filters, and Fair Housing-safe copy
 * (building attributes, not occupants).
 */

export type ResoAccessibilityFeature = {
  slug: string;
  name: string;
  resoKey: string;
  definition: string;
  /** Prefer glossary-only until inventory frequency is verified county-wide. */
  landingEligible: boolean;
};

export const resoAccessibilityFeatures: ResoAccessibilityFeature[] = [
  {
    slug: "accessible-approach-with-ramp",
    name: "Accessible Approach with Ramp",
    resoKey: "AccessibleApproachWithRamp",
    definition:
      "A minimum of one entrance with a clear, evenly paved walkway from a parking or pedestrian arrival area.",
    landingEligible: true,
  },
  {
    slug: "accessible-bedroom",
    name: "Accessible Bedroom",
    resoKey: "AccessibleBedroom",
    definition:
      "Bedroom with adequate turnaround (often 60 in. or approved alternate) and closet doors with about 32 in. clearance.",
    landingEligible: false,
  },
  {
    slug: "accessible-central-living-area",
    name: "Accessible Central Living Area",
    resoKey: "AccessibleCentralLivingArea",
    definition:
      "Hard-surface or low-pile flooring with secure edges; entrances providing about 36 in. clear passage among primary rooms.",
    landingEligible: false,
  },
  {
    slug: "accessible-closets",
    name: "Accessible Closets",
    resoKey: "AccessibleClosets",
    definition:
      "Closet doors with about 32 in. clearance throughout the central living area.",
    landingEligible: false,
  },
  {
    slug: "accessible-common-area",
    name: "Accessible Common Area",
    resoKey: "AccessibleCommonArea",
    definition:
      "Level common area with about 36 in. passage through and around the space (often part of visitability).",
    landingEligible: false,
  },
  {
    slug: "accessible-doors",
    name: "Accessible Doors",
    resoKey: "AccessibleDoors",
    definition:
      "About 32 in. minimum clear passage; lever handle; low beveled threshold when present.",
    landingEligible: true,
  },
  {
    slug: "accessible-electrical-and-environmental-controls",
    name: "Accessible Electrical and Environmental Controls",
    resoKey: "AccessibleElectricalAndEnvironmentalControls",
    definition:
      "Controls located on the central living level; switches and thermostats in a reachable height band.",
    landingEligible: false,
  },
  {
    slug: "accessible-elevator-installed",
    name: "Accessible Elevator Installed",
    resoKey: "AccessibleElevatorInstalled",
    definition:
      "Elevator with about 32 in. door and minimum turning space roughly 36 in. by 48 in.",
    landingEligible: false,
  },
  {
    slug: "accessible-entrance",
    name: "Accessible Entrance",
    resoKey: "AccessibleEntrance",
    definition:
      "Entrance door about 32 in. wide or more; low beveled threshold; lever hardware. Often paired with zero-step arrival.",
    landingEligible: true,
  },
  {
    slug: "accessible-for-hearing-impairment",
    name: "Accessible for Hearing-Impairment",
    resoKey: "AccessibleForHearingImpairment",
    definition:
      "Home wired for flashing and/or vibrating alerts such as smoke alarm or doorbell signals.",
    landingEligible: false,
  },
  {
    slug: "accessible-full-bath",
    name: "Accessible Full Bath",
    resoKey: "AccessibleFullBath",
    definition:
      "Bathroom with adequate turnaround and an accessible bathing area such as a roll-in shower or shower-chair space.",
    landingEligible: true,
  },
  {
    slug: "accessible-hallways",
    name: "Accessible Hallway(s)",
    resoKey: "AccessibleHallways",
    definition:
      "Hallway about 36 in. wide minimum (42 in. preferred) with lighting that supports safe passage.",
    landingEligible: true,
  },
  {
    slug: "accessible-kitchen",
    name: "Accessible Kitchen",
    resoKey: "AccessibleKitchen",
    definition:
      "Clear turn space and roll-under or adaptable sink clearances unimpeded by fixtures.",
    landingEligible: true,
  },
  {
    slug: "accessible-kitchen-appliances",
    name: "Accessible Kitchen Appliances",
    resoKey: "AccessibleKitchenAppliances",
    definition:
      "Stove controls at front or side; oven and microwave at usable counter heights.",
    landingEligible: false,
  },
  {
    slug: "accessible-stairway",
    name: "Accessible Stairway",
    resoKey: "AccessibleStairway",
    definition:
      "Handrails on both sides where stairs exist, with lighting that supports safe use.",
    landingEligible: false,
  },
  {
    slug: "accessible-washer-dryer",
    name: "Accessible Washer/Dryer",
    resoKey: "AccessibleWasherDryer",
    definition:
      "Raised washer and/or dryer with front controls and side opening toward the center.",
    landingEligible: false,
  },
  {
    slug: "adaptable-bathroom-walls",
    name: "Adaptable Bathroom Walls",
    resoKey: "AdaptableBathroomWalls",
    definition:
      "Reinforced bathroom walls that can accept grab bars and related fixtures.",
    landingEligible: true,
  },
  {
    slug: "adaptable-for-elevator",
    name: "Adaptable For Elevator",
    resoKey: "AdaptableForElevator",
    definition:
      "Stacked closets in a multistory house planned for possible future elevator conversion.",
    landingEligible: false,
  },
  {
    slug: "ceiling-track",
    name: "Ceiling Track",
    resoKey: "CeilingTrack",
    definition: "Ceiling track installed for a lift chair (for example, a Hoyer lift).",
    landingEligible: false,
  },
  {
    slug: "central-living-area",
    name: "Central Living Area",
    resoKey: "CentralLivingArea",
    definition:
      "Includes common area, hallway(s), bath, kitchen, at least one bedroom, and access to environmental controls.",
    landingEligible: false,
  },
  {
    slug: "common-area",
    name: "Common Area",
    resoKey: "CommonArea",
    definition: "Portion of the home near an accessible entrance used for guests.",
    landingEligible: false,
  },
  {
    slug: "customized-wheelchair-accessible",
    name: "Customized Wheelchair Accessible",
    resoKey: "CustomizedWheelchairAccessible",
    definition:
      "Customized building adaptations for a specific wheelchair or scooter configuration.",
    landingEligible: false,
  },
  {
    slug: "electronic-environmental-controls",
    name: "Electronic Environmental Controls",
    resoKey: "ElectronicEnvironmentalControls",
    definition:
      "Programmable electronic controls for thermostat, lights, security, and automatic doors.",
    landingEligible: false,
  },
  {
    slug: "enhanced-accessible",
    name: "Enhanced Accessible",
    resoKey: "EnhancedAccessible",
    definition:
      "Central living area configured for lifelong use across a wide range of mobility needs.",
    landingEligible: false,
  },
  {
    slug: "exterior-wheelchair-lift",
    name: "Exterior Wheelchair Lift",
    resoKey: "ExteriorWheelchairLift",
    definition:
      "Professionally installed exterior mechanical lift for a barrier-free approach.",
    landingEligible: false,
  },
  {
    slug: "grip-accessible-features",
    name: "Grip-Accessible Features",
    resoKey: "GripAccessibleFeatures",
    definition:
      "Levers, hands-free, or closed-fist operable hardware throughout the central living area.",
    landingEligible: true,
  },
  {
    slug: "reinforced-floors",
    name: "Reinforced Floors",
    resoKey: "ReinforcedFloors",
    definition:
      "Reinforced floors for heavy equipment, power chairs, or therapeutic tubs.",
    landingEligible: false,
  },
  {
    slug: "safe-emergency-egress-from-home",
    name: "Safe Emergency Egress from Home",
    resoKey: "SafeEmergencyEgressFromHome",
    definition:
      "At least two no-step accessible egresses from the central living area where claimed.",
    landingEligible: false,
  },
  {
    slug: "smart-technology",
    name: "Smart Technology",
    resoKey: "SmartTechnology",
    definition:
      "Smart-home controls such as voice-activated systems or remote monitoring hardware.",
    landingEligible: false,
  },
  {
    slug: "stair-lift",
    name: "Stair Lift",
    resoKey: "StairLift",
    definition:
      "Professionally installed motorized rail to climb an interior or exterior stairway.",
    landingEligible: false,
  },
  {
    slug: "standby-generator",
    name: "Standby Generator",
    resoKey: "StandbyGenerator",
    definition:
      "Backup generator for refrigeration of medications, life-sustaining equipment, or essential temperature control.",
    landingEligible: false,
  },
  {
    slug: "therapeutic-whirlpool",
    name: "Therapeutic Whirlpool",
    resoKey: "TherapeuticWhirlpool",
    definition: "Therapeutic whirlpool, properly installed.",
    landingEligible: false,
  },
  {
    slug: "visitable",
    name: "Visitable",
    resoKey: "Visitable",
    definition:
      "A person using a wheelchair can enter and reach a main common area and a half-bath with required clearances.",
    landingEligible: true,
  },
  {
    slug: "visitor-bathroom",
    name: "Visitor Bathroom",
    resoKey: "VisitorBathroom",
    definition:
      "Bathroom nearest the common area (minimum half bath) with about 32 in. clear door and lever handles.",
    landingEligible: false,
  },
  {
    slug: "walker-accessible-stairs",
    name: "Walker-Accessible Stairs",
    resoKey: "WalkerAccessibleStairs",
    definition:
      "Stair treads about 25 in. deep minimum, rise about 4 in. maximum, width about 36 in. minimum.",
    landingEligible: false,
  },
];

export function getResoFeature(slug: string): ResoAccessibilityFeature | undefined {
  return resoAccessibilityFeatures.find((feature) => feature.slug === slug);
}
