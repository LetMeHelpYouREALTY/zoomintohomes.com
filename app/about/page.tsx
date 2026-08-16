import type { Metadata } from "next";
import { aboutCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "About PLACEHOLDER: Dr. Gene Boyle",
  description: pageMeta.about.description,
};

export default function AboutPage() {
  return (
    <article>
      <h1 className="page-title">{aboutCopy.h1}</h1>
      <p className="lede">{aboutCopy.lede}</p>
      <div className="stack">
        {aboutCopy.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
