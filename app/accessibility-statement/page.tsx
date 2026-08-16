import type { Metadata } from "next";
import { accessibilityStatementCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description: pageMeta.accessibilityStatement.description,
};

export default function AccessibilityStatementPage() {
  return (
    <article>
      <h1 className="page-title">{accessibilityStatementCopy.h1}</h1>
      <p className="lede">{accessibilityStatementCopy.lede}</p>
      <div className="stack">
        {accessibilityStatementCopy.sections.map((section) => (
          <section key={section.title} className="card">
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
