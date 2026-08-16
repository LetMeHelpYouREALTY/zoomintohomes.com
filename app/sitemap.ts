import type { MetadataRoute } from "next";
import { SITE_ORIGIN, indexablePaths } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return indexablePaths.map((path) => ({
    url: path === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${path}`,
    lastModified,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.8,
  }));
}
