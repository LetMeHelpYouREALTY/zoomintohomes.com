import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta } from "@/content/site";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import RoutePageHero from "@/components/site/RoutePageHero";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.vaSha.title,
  description: pageMeta.vaSha.description,
  path: "/va-sha-grant-nevada",
});

export default function VaShaGrantPage() {
  return (
    <article>
      <RoutePageHero path="/va-sha-grant-nevada" />

      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "VA SHA grant Nevada", path: "/va-sha-grant-nevada" },
        ])}
      />
      <section className="answer-block" aria-label="Direct answer">
        <h2 className="answer-block-title">Direct answer</h2>
        <p className="answer-block-body">
          SHA can fund adaptations that make a home safer or more usable for
          certain veterans. Current eligibility and amounts come from the VA.
          Zoom Into Homes sequences remote tours and access checklists so showing
          time is not spent on plans that cannot take the needed work.
        </p>
      </section>
      <h2>How does SHA differ from SAH on a purchase file?</h2>
      <p>
        Both programs are administered by the VA. The purchase file language we
        use is the same either way: door clear width, threshold height, shower
        curb, route width—not diagnoses. See{" "}
        <Link href="/va-sah-grant-nevada">the SAH page</Link> for the shared
        sequencing pattern.
      </p>
      <p>
        Verify current rules on{" "}
        <a
          href="https://www.va.gov/housing-assistance/disability-housing-grants/"
          rel="noopener noreferrer"
        >
          VA.gov disability housing grants
        </a>
        .
      </p>
      <p>
        <Link href="/clark-county-disabled-veteran-property-tax-exemption">
          Clark County exemption tiers
        </Link>
        {" · "}
        <Link href="/contact">Request a consultation</Link>
      </p>
    </article>
  );
}
