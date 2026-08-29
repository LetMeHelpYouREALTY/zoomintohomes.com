import type { Metadata } from "next";
import Link from "next/link";
import PageSeoSections from "@/components/site/PageSeoSections";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import RoutePageHero from "@/components/site/RoutePageHero";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.summerlin.title,
  description: pageMeta.summerlin.description,
  path: "/summerlin",
});

export default function SummerlinPage() {
  return (
    <article>
      <RoutePageHero path="/summerlin" />
      <section className="answer-block" aria-label="Direct answer">
        <h2 className="answer-block-title">Direct answer</h2>
        <p className="answer-block-body">
          Summerlin inventory still needs door widths, thresholds, and shower
          curbs measured on the specific unit. Zoom Into Homes still writes those
          numbers; a master-plan amenity list is not a substitute for an access
          checklist.
        </p>
      </section>
      <h2>Often paired with</h2>
      <ul>
        <li>Sun City Summerlin</li>
        <li>Single-level plans near northwest valley services</li>
      </ul>
      <p>
        <Link href="/virtual-tour-process">Virtual-tour process</Link>
        {" · "}
        <Link href="/accessible-homes">Accessible homes hub</Link>
        {" · "}
        <Link href="/contact">Contact</Link>
      </p>
      <PageSeoSections
        page="summerlin"
        slot="closing"
        related={[
          { href: "/henderson", label: "How does Zoom Into Homes search Henderson?" },
          { href: "/aging-in-place", label: "How does Zoom Into Homes run aging-in-place searches?" },
        ]}
      />
    </article>
  );
}
