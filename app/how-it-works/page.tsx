import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import PageSeoSections from "@/components/site/PageSeoSections";
import { pageImages } from "@/content/page-images";
import { howItWorksCopy } from "@/content/pages";
import { processSteps } from "@/content/process";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "How the reduced-showing process works",
  description: pageMeta.howItWorks.description,
  path: "/how-it-works",
  imagePath: pageImages.howItWorks.hero.src,
  imageAlt: pageImages.howItWorks.hero.alt,
});

const images = pageImages.howItWorks;

export default function HowItWorksPage() {
  const byHeading = Object.fromEntries(
    images.supporting.map((image) => [image.supportsHeading, image]),
  );

  return (
    <article>
      <PageHero image={images.hero} />
      <h1 className="page-title">{howItWorksCopy.h1}</h1>
      <p className="lede">{howItWorksCopy.lede}</p>
      <PageSeoSections page="howItWorks" slot="intro" />
      <h2>{howItWorksCopy.stepsHeading}</h2>
      <ol className="stack">
        {processSteps.map((step) => (
          <li key={step.order} className="card">
            {byHeading[step.title] ? (
              <HeadingImage image={byHeading[step.title]} />
            ) : null}
            <h3>
              {step.order}. {step.title}
            </h3>
            <p>{step.body}</p>
            <p>
              <strong>What you have to do:</strong> {step.clientEffort}
            </p>
          </li>
        ))}
      </ol>
      <PageSeoSections
        page="howItWorks"
        slot="closing"
        related={[
          {
            href: "/accessibility-features",
            label: "What features are measured in the glossary?",
          },
          { href: "/contact", label: "How do I start intake?" },
        ]}
      />
    </article>
  );
}
