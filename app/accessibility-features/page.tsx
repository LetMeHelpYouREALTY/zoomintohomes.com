import type { Metadata } from "next";
import { accessibilityFeatures, featureCategories } from "@/content/features";
import { featuresCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility feature glossary",
  description: pageMeta.features.description,
};

export default function AccessibilityFeaturesPage() {
  return (
    <article>
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
