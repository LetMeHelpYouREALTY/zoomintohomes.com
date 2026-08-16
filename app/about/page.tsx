import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import { pageImages } from "@/content/page-images";
import { aboutCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About PLACEHOLDER: Dr. Gene Boyle",
  description: pageMeta.about.description,
  path: "/about",
  imagePath: pageImages.about.hero.src,
  imageAlt: pageImages.about.hero.alt,
});

const images = pageImages.about;

export default function AboutPage() {
  const extras = images.supporting.filter(
    (image) => !aboutCopy.body.includes(image.supportsHeading),
  );
  const byBody = images.supporting.filter((image) =>
    aboutCopy.body.includes(image.supportsHeading),
  );

  return (
    <article>
      <PageHero image={images.hero} />
      <h1 className="page-title">{aboutCopy.h1}</h1>
      <p className="lede">{aboutCopy.lede}</p>
      <div className="stack">
        {aboutCopy.body.map((paragraph) => {
          const match = byBody.find(
            (image) => image.supportsHeading === paragraph,
          );
          return (
            <section key={paragraph} className="card">
              {match ? <HeadingImage image={match} /> : null}
              <p>{paragraph}</p>
            </section>
          );
        })}
        {extras.map((image) => (
          <section key={image.id} className="card">
            <HeadingImage image={image} />
          </section>
        ))}
      </div>
    </article>
  );
}
