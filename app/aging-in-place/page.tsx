import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import PageSeoSections from "@/components/site/PageSeoSections";
import { pageImages } from "@/content/page-images";
import { agingInPlaceCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Aging in place and 55+ housing, Las Vegas",
  description: pageMeta.agingInPlace.description,
  path: "/aging-in-place",
  imagePath: pageImages.agingInPlace.hero.src,
  imageAlt: pageImages.agingInPlace.hero.alt,
});

const images = pageImages.agingInPlace;

export default function AgingInPlacePage() {
  const byHeading = Object.fromEntries(
    images.supporting.map((image) => [image.supportsHeading, image]),
  );

  return (
    <article>
      <PageHero image={images.hero} />
      <h1 className="page-title">{agingInPlaceCopy.h1}</h1>
      <p className="lede">{agingInPlaceCopy.lede}</p>
      <PageSeoSections page="agingInPlace" slot="intro" />
      <h2>{agingInPlaceCopy.communitiesTitle}</h2>
      <div className="stack">
        {agingInPlaceCopy.communities.map((community) => (
          <section key={community.name} className="card">
            {byHeading[community.name] ? (
              <HeadingImage image={byHeading[community.name]} />
            ) : null}
            <h3>{community.name}</h3>
            <p>{community.note}</p>
          </section>
        ))}
      </div>
      <h2>{agingInPlaceCopy.universalHeading}</h2>
      {byHeading[agingInPlaceCopy.universalHeading] ? (
        <HeadingImage image={byHeading[agingInPlaceCopy.universalHeading]} />
      ) : null}
      <p>{agingInPlaceCopy.universalDesign}</p>
      <PageSeoSections
        page="agingInPlace"
        slot="closing"
        related={[
          {
            href: "/accessible-homes/accessible-entrance",
            label: "What is an accessible entrance?",
          },
          {
            href: "/virtual-tour-process",
            label: "How does remote verification work?",
          },
        ]}
      />
    </article>
  );
}
