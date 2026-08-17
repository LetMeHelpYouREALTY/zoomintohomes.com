import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/site/JsonLd";
import { resoAccessibilityFeatures } from "@/content/reso-features";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "RESO accessibility features glossary | Zoom Into Homes",
  description:
    "All 35 RESO AccessibilityFeatures enums with plain-language definitions. Building attributes only—Fair Housing–safe vocabulary for Las Vegas and Henderson searches.",
  path: "/glossary",
});

export default function GlossaryIndexPage() {
  return (
    <article>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
        ])}
      />
      <h1 className="page-title">RESO AccessibilityFeatures glossary</h1>
      <p className="lede">
        Thirty-five enumerated building attributes from the RESO Data Dictionary
        (DD 2.1). This is the shared vocabulary for feature sheets, future
        filters, and Fair Housing–safe copy.
      </p>
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
        Source:{" "}
        <a
          href="https://dd.reso.org/DD2.1/lookups/AccessibilityFeatures/"
          rel="noopener noreferrer"
        >
          RESO AccessibilityFeatures lookup
        </a>
        .
      </p>
    </article>
  );
}
