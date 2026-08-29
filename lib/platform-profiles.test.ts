import { describe, expect, it } from "vitest";
import {
  GSC_PLATFORM_IDS,
  isAllowedPlatformUrl,
  isLeftoverSocialUrl,
  platformProfiles,
  verifiedPlatformSameAs,
} from "@/content/platform-profiles";
import { buildOrganizationSchemas } from "@/lib/schema";
import {
  buildSampleWalkthroughVideoObject,
  withoutAutoplay,
} from "@/lib/walkthrough-video";

describe("Search Console platform properties (Jul 2026)", () => {
  it("tracks only Instagram, TikTok, X, and YouTube as GSC platforms", () => {
    expect([...GSC_PLATFORM_IDS]).toEqual([
      "instagram",
      "tiktok",
      "x",
      "youtube",
    ]);
    expect(platformProfiles.map((profile) => profile.id)).toEqual([
      ...GSC_PLATFORM_IDS,
    ]);
  });

  it("does not invent Zoom Into Homes handles or borrow HeyBerkshire ones", () => {
    expect(verifiedPlatformSameAs()).toEqual([]);
    for (const profile of platformProfiles) {
      expect(profile.url).toBeNull();
    }
  });

  it("rejects leftover HeyBerkshire / Dr. Jan Duffy social URLs", () => {
    expect(isLeftoverSocialUrl("https://www.instagram.com/heyberkshire")).toBe(
      true,
    );
    expect(isLeftoverSocialUrl("https://www.youtube.com/@drjanduffy")).toBe(
      true,
    );
    expect(
      isAllowedPlatformUrl("instagram", "https://www.instagram.com/heyberkshire"),
    ).toBe(false);
    expect(
      isAllowedPlatformUrl("instagram", "https://www.instagram.com/zoomintohomes"),
    ).toBe(true);
  });

  it("keeps leftover social handles off first-party Organization sameAs", () => {
    const json = JSON.stringify(buildOrganizationSchemas());
    expect(json).not.toContain("instagram.com/heyberkshire");
    expect(json).not.toContain("tiktok.com/@heyberkshire");
    expect(json).not.toContain("youtube.com/@heyberkshire");
    expect(json).not.toContain("facebook.com/heyberkshire");
    const org = buildOrganizationSchemas().find(
      (item) => item["@type"] === "Organization",
    );
    expect(org?.sameAs).toBeUndefined();
  });
});

describe("first-party walkthrough VideoObject", () => {
  it("omits VideoObject when the embed URL or upload date is unknown", () => {
    expect(buildSampleWalkthroughVideoObject("", "2026-07-29")).toBeNull();
    expect(
      buildSampleWalkthroughVideoObject("https://www.youtube.com/embed/abc", ""),
    ).toBeNull();
  });

  it("builds VideoObject with Google required name, thumbnailUrl, and uploadDate", () => {
    const video = buildSampleWalkthroughVideoObject(
      "https://www.youtube.com/embed/abc?autoplay=1",
      "2026-07-29T12:00:00Z",
    );
    expect(video).not.toBeNull();
    expect(video?.["@type"]).toBe("VideoObject");
    expect(video?.name).toBeTruthy();
    expect(Array.isArray(video?.thumbnailUrl)).toBe(true);
    expect(video?.uploadDate).toBe("2026-07-29T12:00:00.000Z");
    expect(String(video?.embedUrl)).not.toContain("autoplay");
  });

  it("strips autoplay from the sample iframe URL", () => {
    expect(
      withoutAutoplay("https://www.youtube.com/embed/abc?autoplay=1&rel=0"),
    ).not.toContain("autoplay");
  });
});
