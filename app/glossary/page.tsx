import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/site/JsonLd";
import { resoAccessibilityFeatures } from "@/content/reso-features";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import RoutePageHero from "@/components/site/RoutePageHero";

export const metadata: Metadata = buildPageMetadata({
  title: "Home access features glossary | Zoom Into Homes",
  description:
    "Plain-language definitions for doorway, bathroom, entry, and related access features used on Zoom Into Homes checklists in Las Vegas and Henderson.",
  path: "/glossary",
});

export default function GlossaryIndexPage() {
  return (
    <article>
      <RoutePageHero path="/glossary" />

      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
        ])}
      />
      <ul>
        {resoAccessibilityFeatures.map((feature) => (
          <li key={feature.slug}>
            <Link href={`/glossary/${feature.slug}`}>{feature.name}</Link>
            {" — "}
            {feature.definition}
          </li>
        ))}
      </ul>
      <p className="meta">
        Technical source:{" "}
        <a
          href="https://dd.reso.org/DD2.1/lookups/AccessibilityFeatures/"
          rel="noopener noreferrer"
        >
          AccessibilityFeatures lookup
        </a>
        .
      </p>
    </article>
  );
}
