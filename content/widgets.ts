import { siteIdentity } from "@/content/site";

/** RealScout agent encoded id used across Zoom Into Homes embeds. */
export const REALSCOUT_AGENT_ENCODED_ID =
  process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID?.trim() || "QWdlbnQtMjI1MDUw";

export const REALSCOUT_PORTAL_URL =
  process.env.NEXT_PUBLIC_REALSCOUT_PORTAL_URL?.trim() ||
  "https://drjanduffy.realscout.com/";

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ||
  "https://calendly.com/drjanduffy/showing";

export const CALENDLY_BRAND_COLOR = "#0F4C4F";

export function calendlyHeading(): string {
  return `Schedule a virtual tour with ${siteIdentity.agentName}`;
}
