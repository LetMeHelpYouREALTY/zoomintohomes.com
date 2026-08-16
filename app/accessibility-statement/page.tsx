import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import { pageImages } from "@/content/page-images";
import { accessibilityStatementCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Accessibility statement",
  description: pageMeta.accessibilityStatement.description,
  path: "/accessibility-statement",
  imagePath: pageImages.accessibilityStatement.hero.src,
  imageAlt: pageImages.accessibilityStatement.hero.alt,
});

const images = pageImages.accessibilityStatement;

export default function AccessibilityStatementPage() {
  return (
    <article>
      <PageHero image={images.hero} />
      <h1 className="page-title">{accessibilityStatementCopy.h1}</h1>
      <p className="lede">{accessibilityStatementCopy.lede}</p>
      <div className="stack">
        {accessibilityStatementCopy.sections.map((section) => {
          const sectionImages = images.supporting.filter(
            (image) => image.supportsHeading === section.title,
          );
          return (
            <section key={section.title} className="card">
              {sectionImages[0] ? (
                <HeadingImage image={sectionImages[0]} />
              ) : null}
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {sectionImages.slice(1).map((image) => (
                <HeadingImage key={image.id} image={image} />
              ))}
            </section>
          );
        })}
      </div>
    </article>
  );
}
