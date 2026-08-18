/**
 * Luxury realtor palette (Aug 2026).
 * Navy + ivory + champagne gold, used by high-end brokerages.
 * Gold is an accent only — never body text on ivory (fails WCAG AA).
 * Contrast grades follow USWDS luminance arithmetic against ivory / navy.
 */

export const brandColors = {
  ink: "#14110E",
  bodySecondary: "#3F3A34",
  muted: "#6B645C",
  oat: "#F7F3EB",
  sand: "#E8E0D2",
  white: "#FFFCF6",
  primary: "#0E1A2B",
  navy: "#0E1A2B",
  navyHover: "#1A2F4A",
  teal600: "#1A2F4A",
  gold: "#C4A574",
  goldDeep: "#8C7350",
  clay: "#8C7350",
  clayLight: "#C4A574",
  success: "#2C5A45",
  error: "#7A2E2E",
  focusFill: "#D4A017",
  focusBar: "#14110E",
} as const;

export const brandCopy = {
  franchiseDisclaimer:
    "Berkshire Hathaway HomeServices Nevada Properties — each office is independently owned and operated.",
} as const;
