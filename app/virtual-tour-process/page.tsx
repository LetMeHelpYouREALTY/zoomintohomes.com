import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/site/JsonLd";
import PageSeoSections from "@/components/site/PageSeoSections";
import { pageMeta } from "@/content/site";
import { howItWorksCopy } from "@/content/pages";
import { processSteps } from "@/content/process";
import { pageImages } from "@/content/page-images";
import HeadingImage from "@/components/site/HeadingImage";
import RoutePageHero from "@/components/site/RoutePageHero";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.virtualTourProcess.title,
  description: pageMeta.virtualTourProcess.description,
  path: "/virtual-tour-process",
  imagePath: pageImages.howItWorks.hero.src,
  imageAlt: pageImages.howItWorks.hero.alt,
});

const images = pageImages.howItWorks;

export default function VirtualTourProcessPage() {
  const byHeading = Object.fromEntries(
    images.supporting.map((image) => [image.supportsHeading, image]),
  );

  return (
    <article>
      <RoutePageHero path="/virtual-tour-process" />
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "How touring works", path: "/virtual-tour-process" },
        ])}
      />
      <div className="cta-row">
        <Link href="/contact" className="button">
          Request a call
        </Link>
        <Link href="/examples/walkthrough" className="button button-secondary">
          See an example walkthrough
        </Link>
      </div>
      <h2>{howItWorksCopy.stepsHeading}</h2>
      <ol className="process-steps">
        {processSteps.map((step) => (
          <li key={step.order}>
            {byHeading[step.title] ? (
              <HeadingImage image={byHeading[step.title]} />
            ) : null}
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <p className="meta">Client effort: {step.clientEffort}</p>
          </li>
        ))}
      </ol>
      <PageSeoSections
        page="howItWorks"
        slot="closing"
        related={[
          { href: "/what-we-measure", label: "What do you measure?" },
          {
            href: "/examples/feature-sheet",
            label: "What does an access checklist look like?",
          },
          { href: "/contact", label: "How do I start intake?" },
        ]}
      />
    </article>
  );
}
