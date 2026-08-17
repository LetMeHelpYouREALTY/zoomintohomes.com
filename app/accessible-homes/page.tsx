import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/site/JsonLd";
import { accessibleHomesCopy } from "@/content/pages";
import { resoAccessibilityFeatures } from "@/content/reso-features";
import { pageMeta } from "@/content/site";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import RoutePageHero from "@/components/site/RoutePageHero";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.accessibleHomes.title,
  description: pageMeta.accessibleHomes.description,
  path: "/accessible-homes",
});

export default function AccessibleHomesPage() {
  const landings = resoAccessibilityFeatures.filter(
    (feature) => feature.landingEligible,
  );

  return (
    <article>
      <RoutePageHero path="/accessible-homes" />

      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Accessible homes", path: "/accessible-homes" },
        ])}
      />
      <section className="answer-block" aria-label="Direct answer">
        <h2 className="answer-block-title">Direct answer</h2>
        <p className="answer-block-body">
          Zoom Into Homes publishes measured access features for Las Vegas and
          Henderson searches. Filters and copy use RESO AccessibilityFeatures
          enums and numeric dimensions—not an undefined “accessible” checkbox.
        </p>
      </section>
      <h2>Feature spokes with enough inventory signal to land</h2>
      <ul>
        {landings.map((feature) => (
          <li key={feature.slug}>
            <Link href={`/accessible-homes/${feature.slug}`}>{feature.name}</Link>
            {" — "}
            {feature.definition}
          </li>
        ))}
      </ul>
      <h2>Geo guides (editorial first)</h2>
      <ul>
        <li>
          <Link href="/henderson">Henderson</Link>
        </li>
        <li>
          <Link href="/summerlin">Summerlin</Link>
        </li>
      </ul>
      <p>
        <Link href="/glossary">Full RESO glossary (35 terms)</Link>
        {" · "}
        <Link href="/virtual-tour-process">Video-first process</Link>
      </p>
    </article>
  );
}
