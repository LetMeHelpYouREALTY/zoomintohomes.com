import { siteIdentity } from "@/content/site";

const DEFAULT_REALSCOUT_AGENT_ENCODED_ID = "QWdlbnQtMjI1MDUw"; // base64("Agent-225050")

/**
 * RealScout requires the base64 agent-encoded-id (e.g. QWdlbnQtMjI1MDUw),
 * not the raw numeric agent id (225050). Normalize common Vercel misconfigs.
 */
function resolveRealScoutAgentEncodedId(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value) return DEFAULT_REALSCOUT_AGENT_ENCODED_ID;
  if (/^\d+$/.test(value)) {
    const plaintext = `Agent-${value}`;
    if (typeof Buffer !== "undefined") {
      return Buffer.from(plaintext, "utf8").toString("base64");
    }
    return btoa(plaintext);
  }
  return value;
}

/** RealScout agent encoded id used across Zoom Into Homes embeds. */
export const REALSCOUT_AGENT_ENCODED_ID = resolveRealScoutAgentEncodedId(
  process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID,
);

export const REALSCOUT_PORTAL_URL =
  process.env.NEXT_PUBLIC_REALSCOUT_PORTAL_URL?.trim() ||
  "https://drjanduffy.realscout.com/";

/** Official office-listings widget attributes from RealScout embed builder. */
export const REALSCOUT_OFFICE_LISTINGS_ATTRS = {
  agentEncodedId: REALSCOUT_AGENT_ENCODED_ID,
  sortOrder: "PRICE_LOW",
  listingStatus: "For Sale",
  propertyTypes: ",SFR",
  priceMin: "600000",
  priceMax: "900000",
} as const;

export function realScoutOfficeListingsHtml(): string {
  const a = REALSCOUT_OFFICE_LISTINGS_ATTRS;
  return `<realscout-office-listings agent-encoded-id="${a.agentEncodedId}" sort-order="${a.sortOrder}" listing-status="${a.listingStatus}" property-types="${a.propertyTypes}" price-min="${a.priceMin}" price-max="${a.priceMax}"></realscout-office-listings>`;
}

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ||
  "https://calendly.com/drjanduffy/showing";

export const CALENDLY_BRAND_COLOR = "#0E1A2B";

export function calendlyHeading(): string {
  return `Schedule a video tour with ${siteIdentity.agentName}`;
}
