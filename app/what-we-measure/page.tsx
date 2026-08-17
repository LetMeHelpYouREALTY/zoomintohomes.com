import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta } from "@/content/site";
import { whatWeMeasureCopy } from "@/content/pages";
import { accessibilityFeatures } from "@/content/features";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.whatWeMeasure.title,
  description: pageMeta.whatWeMeasure.description,
  path: "/what-we-measure",
});

export default function WhatWeMeasurePage() {
  return (
    <article>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "What we measure", path: "/what-we-measure" },
        ])}
      />
      <h1 className="page-title">{whatWeMeasureCopy.h1}</h1>
      <p className="lede">{whatWeMeasureCopy.lede}</p>
      <section className="answer-block" aria-label="Direct answer">
        <h2 className="answer-block-title">Direct answer</h2>
        <p className="answer-block-body">
          We record falsifiable building attributes—door clear widths, threshold
          heights, shower curbs, route widths, control heights, and related
          items—against a published glossary aligned to RESO AccessibilityFeatures.
          Each row carries a date and an evidence level.
        </p>
      </section>
      <h2>{whatWeMeasureCopy.provenanceHeading}</h2>
      <div className="provenance-panel">
        <p>{whatWeMeasureCopy.provenanceBody}</p>
        <p>
          Layout rule for any future MLS join: measured data renders in a
          separately attributed panel — never merged into MLS feature lists.
        </p>
      </div>
      <h2>Which attributes appear in the working glossary?</h2>
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
        <Link href="/glossary">Open the full RESO glossary</Link>
        {" · "}
        <Link href="/accessibility-features">Category glossary</Link>
        {" · "}
        <Link href="/examples/feature-sheet">Example feature sheet</Link>
      </p>
    </article>
  );
}
