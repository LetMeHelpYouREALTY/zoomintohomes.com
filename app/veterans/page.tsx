import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import PageSeoSections from "@/components/site/PageSeoSections";
import { pageImages } from "@/content/page-images";
import { veteransCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "VA SAH and SHA grants with a home purchase",
  description: pageMeta.veterans.description,
  path: "/veterans",
  imagePath: pageImages.veterans.hero.src,
  imageAlt: pageImages.veterans.hero.alt,
});

const images = pageImages.veterans;

export default function VeteransPage() {
  const extras = images.supporting.filter(
    (image) =>
      !veteransCopy.sections.some(
        (section) => section.title === image.supportsHeading,
      ),
  );

  return (
    <article>
      <PageHero image={images.hero} />
      <h1 className="page-title">{veteransCopy.h1}</h1>
      <p className="lede">{veteransCopy.lede}</p>
      <PageSeoSections page="veterans" slot="intro" />
      <p>
        <a
          href={veteransCopy.officialSourceHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          {veteransCopy.officialSourceLabel}
        </a>{" "}
        (external VA.gov source)
      </p>
      <div className="stack">
        {veteransCopy.sections.map((section) => {
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
      {extras.map((image) => (
        <HeadingImage key={image.id} image={image} />
      ))}
      <PageSeoSections
        page="veterans"
        slot="closing"
        related={[
          {
            href: "/accessibility-features",
            label: "Which access features are measured before a showing?",
          },
          {
            href: "/referral-partners#va-loan-officers",
            label: "How do VA loan officers hand off a file?",
          },
        ]}
      />
    </article>
  );
}
