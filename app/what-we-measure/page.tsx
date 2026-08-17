import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta } from "@/content/site";
import { whatWeMeasureCopy } from "@/content/pages";
import { accessibilityFeatures } from "@/content/features";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import RoutePageHero from "@/components/site/RoutePageHero";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.whatWeMeasure.title,
  description: pageMeta.whatWeMeasure.description,
  path: "/what-we-measure",
});

export default function WhatWeMeasurePage() {
  return (
    <article>
      <RoutePageHero path="/what-we-measure" />

      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "What we measure", path: "/what-we-measure" },
        ])}
      />
      <section className="answer-block" aria-label="Direct answer">
        <h2 className="answer-block-title">Direct answer</h2>
        <p className="answer-block-body">
          We write down door widths, step heights, shower curbs, hall widths,
          and control heights against the published access glossary.
          Each row has a date and notes how the number was checked.
        </p>
      </section>
      <h2>{whatWeMeasureCopy.provenanceHeading}</h2>
      <div className="provenance-panel">
        <p>{whatWeMeasureCopy.provenanceBody}</p>
        <p>
          If we later show homes for sale, our measurements stay in their own
          labeled box. They are not mixed into the listing&apos;s own feature list.
        </p>
      </div>
      <h2>Which features are in the glossary?</h2>
      <div className="feature-list">
        {accessibilityFeatures.slice(0, 8).map((feature) => (
          <section key={feature.slug} className="card">
            <h3>{feature.name}</h3>
            <p>{feature.factualDescription}</p>
            {feature.measurement ? (
              <p className="meta">Measurement: {feature.measurement}</p>
            ) : null}
            {feature.standardCitation ? (
              <p className="meta">{feature.standardCitation}</p>
            ) : null}
          </section>
        ))}
      </div>
      <p>
        <Link href="/glossary">Open the full feature glossary</Link>
        {" · "}
        <Link href="/accessibility-features">Category glossary</Link>
        {" · "}
        <Link href="/examples/feature-sheet">Example access checklist</Link>
      </p>
    </article>
  );
}
