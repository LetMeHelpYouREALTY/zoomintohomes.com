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
import RoutePageHero from "@/components/site/RoutePageHero";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return resoAccessibilityFeatures
    .filter((feature) => feature.landingEligible)
    .map((feature) => ({ slug: feature.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const feature = getResoFeature(params.slug);
  if (!feature) {
    return { title: "Feature not found" };
  }
  return buildPageMetadata({
    title: `${feature.name} homes in Las Vegas & Henderson`,
    description: `${feature.definition} Measured and documented in Zoom Into Homes access checklists—not an undefined checkbox.`,
    path: `/accessible-homes/${feature.slug}`,
  });
}

export default function AccessibleHomesFeaturePage({ params }: PageProps) {
  const feature = getResoFeature(params.slug);
  if (!feature || !feature.landingEligible) {
    notFound();
  }

  return (
    <article>
      <RoutePageHero
        path={`/accessible-homes/${feature.slug}`}
        headline={`${feature.name} in Las Vegas and Henderson`}
        support={feature.definition}
      />

      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Accessible homes", path: "/accessible-homes" },
          {
            name: feature.name,
            path: `/accessible-homes/${feature.slug}`,
          },
        ])}
      />
      <section className="answer-block" aria-label="Direct answer">
        <h2 className="answer-block-title">Direct answer</h2>
        <p className="answer-block-body">
          {feature.name} is verified on the unit with a dated access
          checklist—not inferred from a community label or a public listing feed
          checkbox alone.
        </p>
      </section>
      <h2>How do you verify it?</h2>
      <p>
        Remote video first, then measurements against the published glossary.
        In-person time is reserved for finalists. See{" "}
        <Link href="/virtual-tour-process">how touring works</Link> and{" "}
        <Link href="/what-we-measure">what we measure</Link>.
      </p>
      <div className="provenance-panel">
        <h2>Attribution rule</h2>
        <p>
          When listing data is shown later, Zoom Into Homes measurements appear in
          a separate panel labeled as agent-measured data—not as the listing feed’s
          own fields.
        </p>
      </div>
      <p>
        <Link href={`/glossary/${feature.slug}`}>Glossary entry</Link>
        {" · "}
        <Link href="/contact">Request a call</Link>
      </p>
    </article>
  );
}
