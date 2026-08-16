import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import { accessibilityFeatures, featureCategories } from "@/content/features";
import { pageImages } from "@/content/page-images";
import { featuresCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility feature glossary",
  description: pageMeta.features.description,
};

const images = pageImages.features;

export default function AccessibilityFeaturesPage() {
  const byHeading = Object.fromEntries(
    images.supporting.map((image) => [image.supportsHeading, image]),
  );

  return (
    <article>
      <PageHero image={images.hero} />
      <h1 className="page-title">{featuresCopy.h1}</h1>
      <p className="lede">{featuresCopy.lede}</p>
      {featureCategories.map((category) => {
        const items = accessibilityFeatures.filter(
          (feature) => feature.category === category.id,
        );
        if (items.length === 0) return null;
        return (
          <section
            key={category.id}
            className="stack"
            style={{ marginBottom: "2rem" }}
          >
            {byHeading[category.label] ? (
              <HeadingImage image={byHeading[category.label]} />
            ) : null}
            <h2>{category.label}</h2>
            {items.map((feature) => (
              <article key={feature.slug} className="card" id={feature.slug}>
                <h3>{feature.name}</h3>
                <p>{feature.factualDescription}</p>
                {feature.measurement ? (
                  <p>
                    <strong>Measurement:</strong> {feature.measurement}
                  </p>
                ) : null}
                <p>
                  <strong>Why it matters:</strong> {feature.whyItMatters}
                </p>
                {feature.standardCitation ? (
                  <p className="meta">{feature.standardCitation}</p>
                ) : null}
              </article>
            ))}
          </section>
        );
      })}
    </article>
  );
}
