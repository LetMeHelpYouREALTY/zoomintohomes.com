/**
 * Design tokens from the 17 Aug 2026 competitive teardown.
 * Contrast grades follow USWDS luminance arithmetic; clay-light is never
 * used for body text on sand (fails AA at 4.26:1).
 */

export const brandColors = {
  ink: "#16262B",
  bodySecondary: "#3D4B50",
  muted: "#5C6B70",
  oat: "#FAF7F2",
  sand: "#F2EDE4",
  white: "#FFFFFF",
  primary: "#0F4C4F",
  teal600: "#14666B",
  clay: "#9C3F14",
  clayLight: "#B4541F",
  success: "#1B6B45",
  error: "#A4262C",
  focusFill: "#F5C542",
  focusBar: "#16262B",
} as const;

export const brandCopy = {
  franchiseDisclaimer:
    "Berkshire Hathaway HomeServices Nevada Properties — each office is independently owned and operated.",
} as const;
