import type { Metadata } from "next";
import { howItWorksCopy } from "@/content/pages";
import { processSteps } from "@/content/process";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "How the reduced-showing process works",
  description: pageMeta.howItWorks.description,
};

export default function HowItWorksPage() {
  return (
    <article>
      <h1 className="page-title">{howItWorksCopy.h1}</h1>
      <p className="lede">{howItWorksCopy.lede}</p>
      <ol className="stack">
        {processSteps.map((step) => (
          <li key={step.order} className="card">
            <h2>
              {step.order}. {step.title}
            </h2>
            <p>{step.body}</p>
            <p>
              <strong>What you have to do:</strong> {step.clientEffort}
            </p>
          </li>
        ))}
      </ol>
    </article>
  );
}
