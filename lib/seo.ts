import type { Metadata } from "next";
import { PAGE_IMAGE_HEIGHT, PAGE_IMAGE_WIDTH } from "@/lib/images";
import { siteIdentity } from "@/content/site";
import { absoluteUrl } from "@/lib/site-url";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Use absolute title without the layout template suffix. */
  absoluteTitle?: boolean;
  imagePath?: string;
  imageAlt?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  imagePath = "/images/pages/home/hero.jpg",
  imageAlt = "Zoom Into Homes video-first home search in Las Vegas",
}: BuildPageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(imagePath);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteIdentity.siteName,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: PAGE_IMAGE_WIDTH,
          height: PAGE_IMAGE_HEIGHT,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
