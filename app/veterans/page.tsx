import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import { pageImages } from "@/content/page-images";
import { veteransCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "VA SAH and SHA grants with a home purchase",
  description: pageMeta.veterans.description,
};

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
    </article>
  );
}
