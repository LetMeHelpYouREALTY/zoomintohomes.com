import type { MetadataRoute } from "next";
import { SITE_HOST, SITE_ORIGIN } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/monitoring/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/monitoring/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/images/", "/_next/image"],
      },
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_HOST,
  };
}
