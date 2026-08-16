import type { Metadata } from "next";
import { agingInPlaceCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Aging in place and 55+ housing, Las Vegas",
  description: pageMeta.agingInPlace.description,
};

export default function AgingInPlacePage() {
  return (
    <article>
      <h1 className="page-title">{agingInPlaceCopy.h1}</h1>
      <p className="lede">{agingInPlaceCopy.lede}</p>
      <h2>{agingInPlaceCopy.communitiesTitle}</h2>
      <div className="stack">
        {agingInPlaceCopy.communities.map((community) => (
          <section key={community.name} className="card">
            <h3>{community.name}</h3>
            <p>{community.note}</p>
          </section>
        ))}
      </div>
      <h2>Universal design, as used here</h2>
      <p>{agingInPlaceCopy.universalDesign}</p>
    </article>
  );
}
