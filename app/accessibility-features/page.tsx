import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import RoutePageHero from "@/components/site/RoutePageHero";
import PageSeoSections from "@/components/site/PageSeoSections";
import { accessibilityFeatures, featureCategories } from "@/content/features";
import { pageImages } from "@/content/page-images";
import { featuresCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Accessibility feature glossary",
  description: pageMeta.features.description,
  path: "/accessibility-features",
  imagePath: pageImages.features.hero.src,
  imageAlt: pageImages.features.hero.alt,
});

const images = pageImages.features;

export default function AccessibilityFeaturesPage() {
  const byHeading = Object.fromEntries(
    images.supporting.map((image) => [image.supportsHeading, image]),
  );

  return (
    <article>
      <RoutePageHero path="/accessibility-features" />
      <h2>{featuresCopy.categoriesHeading}</h2>
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
            <h3>{category.label}</h3>
            {items.map((feature) => (
              <article key={feature.slug} className="card" id={feature.slug}>
                <h4>{feature.name}</h4>
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
      <PageSeoSections
        page="features"
        slot="closing"
        related={[
          {
            href: "/how-it-works",
            label: "How are features verified in the process?",
          },
          {
            href: "/aging-in-place",
            label: "What does universal design mean here?",
          },
        ]}
      />
    </article>
  );
}
