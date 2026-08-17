import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import JsonLd from "@/components/site/JsonLd";
import RoutePageHero from "@/components/site/RoutePageHero";
import PageSeoSections from "@/components/site/PageSeoSections";
import { pageImages } from "@/content/page-images";
import { aboutCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.about.title,
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
      <RoutePageHero path="/about" />
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <h2>{aboutCopy.practiceHeading}</h2>
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
      <PageSeoSections
        page="about"
        slot="closing"
        related={[
          {
            href: "/how-it-works",
            label: "What process is published in writing?",
          },
          {
            href: "/accessibility-statement",
            label: "What is the accessibility commitment?",
          },
        ]}
      />
    </article>
  );
}
