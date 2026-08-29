/**
 * Official Instagram, TikTok, X, and YouTube profiles for Zoom Into Homes.
 *
 * Google Search Console platform properties (globally available 29 Jul 2026)
 * report how posts on those four platforms perform in Search, Discover, and
 * News. Add each account in Search Console after it exists; this file only
 * lists verified public URLs so Organization `sameAs` matches the same
 * first-party identities. Do not copy HeyBerkshire / Dr. Jan Duffy handles
 * onto this host.
 *
 * @see https://support.google.com/webmasters/answer/17148418
 * @see https://developers.google.com/search/docs/monitor-debug/analyze-social-video-content
 */

export const GSC_PLATFORM_IDS = [
  "instagram",
  "tiktok",
  "x",
  "youtube",
] as const;

export type GscPlatformId = (typeof GSC_PLATFORM_IDS)[number];

export type PlatformProfile = {
  id: GscPlatformId;
  label: string;
  /** Canonical profile URL, or null until a Zoom Into Homes account is verified. */
  url: string | null;
};

const PLATFORM_HOSTS: Record<GscPlatformId, readonly string[]> = {
  instagram: ["instagram.com", "www.instagram.com"],
  tiktok: ["tiktok.com", "www.tiktok.com"],
  x: ["x.com", "www.x.com", "twitter.com", "www.twitter.com"],
  youtube: ["youtube.com", "www.youtube.com", "youtu.be", "www.youtu.be"],
};

const LEFTOVER_SOCIAL_HOST_MARKERS = [
  "heyberkshire",
  "drjanduffy",
] as const;

/**
 * First-party Zoom Into Homes accounts only. Leave `url` null rather than
 * guessing or borrowing another brand's profile.
 */
export const platformProfiles: PlatformProfile[] = [
  { id: "instagram", label: "Instagram", url: null },
  { id: "tiktok", label: "TikTok", url: null },
  { id: "x", label: "X", url: null },
  { id: "youtube", label: "YouTube", url: null },
];

export function isLeftoverSocialUrl(url: string): boolean {
  const lower = url.toLowerCase();
  return LEFTOVER_SOCIAL_HOST_MARKERS.some((marker) => lower.includes(marker));
}

export function isAllowedPlatformUrl(id: GscPlatformId, url: string): boolean {
  if (isLeftoverSocialUrl(url)) return false;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return false;
    return PLATFORM_HOSTS[id].includes(parsed.hostname.toLowerCase());
  } catch {
    return false;
  }
}

export type VerifiedPlatformProfile = PlatformProfile & { url: string };

export function verifiedPlatformSameAs(): string[] {
  return verifiedPlatformProfiles().map((profile) => profile.url);
}

export function verifiedPlatformProfiles(): VerifiedPlatformProfile[] {
  return platformProfiles.filter(
    (profile): profile is VerifiedPlatformProfile =>
      typeof profile.url === "string" &&
      isAllowedPlatformUrl(profile.id, profile.url),
  );
}
