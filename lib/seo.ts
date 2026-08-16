import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { siteIdentity } from "@/content/site";

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
  imageAlt = "Zoom Into Homes virtual-first home search in Las Vegas",
}: BuildPageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(imagePath);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
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
          width: 1600,
          height: 900,
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
