import { pageImages } from "@/content/page-images";
import { pageMeta, siteIdentity } from "@/content/site";
import { PAGE_IMAGE_HEIGHT, PAGE_IMAGE_WIDTH } from "@/lib/images";
import { absoluteUrl, SITE_ORIGIN } from "@/lib/site-url";

const WATCH_PAGE = "/examples/walkthrough";

/** Strip autoplay so the sample tour stays click-to-start (never autoplay). */
export function withoutAutoplay(embedUrl: string): string {
  try {
    const parsed = new URL(embedUrl);
    parsed.searchParams.delete("autoplay");
    parsed.searchParams.delete("autoPlay");
    return parsed.toString();
  } catch {
    return embedUrl;
  }
}

function isoUploadDate(raw: string | undefined): string | null {
  const value = raw?.trim();
  if (!value) return null;
  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) return null;
  return new Date(parsed).toISOString();
}

/**
 * VideoObject for the first-party sample walkthrough only.
 * Per Google's video structured data docs (required: name, thumbnailUrl,
 * uploadDate). Omit the object when the embed URL or upload date is unknown —
 * do not invent a YouTube URL or a date.
 */
export function buildSampleWalkthroughVideoObject(
  embedUrl = process.env.NEXT_PUBLIC_SAMPLE_WALKTHROUGH_URL,
  uploadDateRaw = process.env.NEXT_PUBLIC_SAMPLE_WALKTHROUGH_UPLOAD_DATE,
): Record<string, unknown> | null {
  const rawUrl = embedUrl?.trim();
  const uploadDate = isoUploadDate(uploadDateRaw);
  if (!rawUrl || !uploadDate) return null;

  let embed: string;
  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol !== "https:") return null;
    embed = withoutAutoplay(parsed.toString());
  } catch {
    return null;
  }

  const thumbnail = absoluteUrl(pageImages.howItWorks.hero.src);

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${SITE_ORIGIN}${WATCH_PAGE}#video`,
    name: pageMeta.walkthroughExample.title,
    description: pageMeta.walkthroughExample.description,
    thumbnailUrl: [thumbnail],
    uploadDate,
    embedUrl: embed,
    url: absoluteUrl(WATCH_PAGE),
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    width: PAGE_IMAGE_WIDTH,
    height: PAGE_IMAGE_HEIGHT,
    regionsAllowed: "US",
    inLanguage: "en-US",
    potentialAction: {
      "@type": "WatchAction",
      target: embed,
    },
    about: {
      "@type": "Thing",
      name: siteIdentity.siteName,
    },
  };
}
