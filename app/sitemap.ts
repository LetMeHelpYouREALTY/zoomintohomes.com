import type { MetadataRoute } from "next";

const baseUrl = "https://zoomintohomes.com";

const paths = [
  "/",
  "/how-it-works",
  "/accessibility-features",
  "/veterans",
  "/aging-in-place",
  "/referral-partners",
  "/about",
  "/contact",
  "/accessibility-statement",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
