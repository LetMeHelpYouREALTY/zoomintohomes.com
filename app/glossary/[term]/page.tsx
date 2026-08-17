import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/site/JsonLd";
import {
  getResoFeature,
  resoAccessibilityFeatures,
} from "@/content/reso-features";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import AfterHeroWidgets from "@/components/site/AfterHeroWidgets";

type PageProps = {
  params: { term: string };
};

export function generateStaticParams() {
  return resoAccessibilityFeatures.map((feature) => ({ term: feature.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const feature = getResoFeature(params.term);
  if (!feature) {
    return { title: "Term not found" };
  }
  return buildPageMetadata({
    title: `${feature.name} — RESO glossary`,
    description: feature.definition,
    path: `/glossary/${feature.slug}`,
  });
}

export default function GlossaryTermPage({ params }: PageProps) {
  const feature = getResoFeature(params.term);
  if (!feature) {
    notFound();
  }

  return (
    <article>
      <AfterHeroWidgets />

      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
          { name: feature.name, path: `/glossary/${feature.slug}` },
        ])}
      />
      <h1 className="page-title">{feature.name}</h1>
      <p className="lede">{feature.definition}</p>
      <p>
        <strong>RESO key:</strong> {feature.resoKey}
      </p>
      <h2>How Zoom Into Homes uses this term</h2>
      <p>
        We treat {feature.name} as a falsifiable building claim. Access checklists
        record a measured or photo-verified value with a date. We do not use the
        term to describe who should live in a property.
      </p>
      {feature.landingEligible ? (
        <p>
          <Link href={`/accessible-homes/${feature.slug}`}>
            Open the Las Vegas / Henderson feature page
          </Link>
        </p>
      ) : (
        <p className="meta">
          Glossary-only for now until county-wide inventory frequency supports a
          dedicated landing page.
        </p>
      )}
      <p>
        <Link href="/glossary">All RESO terms</Link>
        {" · "}
        <Link href="/what-we-measure">What we measure</Link>
      </p>
    </article>
  );
}
