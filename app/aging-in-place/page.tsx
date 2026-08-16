import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import { pageImages } from "@/content/page-images";
import { agingInPlaceCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Aging in place and 55+ housing, Las Vegas",
  description: pageMeta.agingInPlace.description,
};

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
      <h2>Universal design, as used here</h2>
      {byHeading["Universal design, as used here"] ? (
        <HeadingImage image={byHeading["Universal design, as used here"]} />
      ) : null}
      <p>{agingInPlaceCopy.universalDesign}</p>
    </article>
  );
}
