import type { Metadata } from "next";
import { veteransCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "VA SAH and SHA grants with a home purchase",
  description: pageMeta.veterans.description,
};

export default function VeteransPage() {
  return (
    <article>
      <h1 className="page-title">{veteransCopy.h1}</h1>
      <p className="lede">{veteransCopy.lede}</p>
      <div className="stack">
        {veteransCopy.sections.map((section) => (
          <section key={section.title} className="card">
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
