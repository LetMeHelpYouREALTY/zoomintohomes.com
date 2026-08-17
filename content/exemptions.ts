/**
 * Clark County Assessor exemption figures retrieved 17 Aug 2026 from
 * https://www.clarkcountynv.gov/government/assessor/exemption
 * Amounts are assessed-value reductions and change with CPI. Always re-verify.
 */

export type ExemptionTier = {
  retrievedOn: string;
  sourceUrl: string;
  sourceLabel: string;
  tiers: { label: string; assessedValueUsd: number; statute: string }[];
};

export const clarkCountyVeteranExemptions: ExemptionTier = {
  retrievedOn: "2026-08-17",
  sourceUrl: "https://www.clarkcountynv.gov/government/assessor/exemption",
  sourceLabel: "Clark County Assessor — Exemptions",
  tiers: [
    {
      label: "Veteran",
      assessedValueUsd: 3640,
      statute: "NRS 361.090",
    },
    {
      label: "60%–79% Disabled Veteran",
      assessedValueUsd: 18200,
      statute: "NRS 361.091",
    },
    {
      label: "80%–99% Disabled Veteran",
      assessedValueUsd: 27300,
      statute: "NRS 361.091",
    },
    {
      label: "100% Disabled Veteran",
      assessedValueUsd: 36400,
      statute: "NRS 361.091",
    },
  ],
};

export const sampleFeatureSheet = {
  title: "Example feature sheet (redacted)",
  listingLabel: "Sample single-level residence — Las Vegas Valley",
  measuredOn: "2026-06-02",
  measuredBy: "Zoom Into Homes field notes",
  evidence: "measured_onsite" as const,
  disclaimer:
    "Accessibility details measured by Zoom Into Homes on the date shown — not MLS data. Figures describe the building. They do not describe who should live there.",
  rows: [
    {
      attribute: "Accessible Entrance / zero-step arrival",
      value: "Zero-step covered entry; threshold 0.25 in. beveled",
      unit: "",
      reso: "AccessibleEntrance",
    },
    {
      attribute: "Doorway clear width (primary bath)",
      value: "34",
      unit: "in",
      reso: "AccessibleDoors",
    },
    {
      attribute: "Hallway clear width (primary route)",
      value: "38",
      unit: "in",
      reso: "AccessibleHallways",
    },
    {
      attribute: "Shower curb",
      value: "0 (roll-in)",
      unit: "in",
      reso: "AccessibleFullBath",
    },
    {
      attribute: "Turning space (primary bath)",
      value: "60",
      unit: "in diameter",
      reso: "AccessibleFullBath",
    },
  ],
};
