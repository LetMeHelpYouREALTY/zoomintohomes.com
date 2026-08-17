import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import AfterHeroWidgets from "@/components/site/AfterHeroWidgets";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.summerlin.title,
  description: pageMeta.summerlin.description,
  path: "/summerlin",
});

export default function SummerlinPage() {
  return (
    <article>
      <AfterHeroWidgets />

      <h1 className="page-title">
        Homes with measured access features in Summerlin
      </h1>
      <p className="lede">
        Editorial-first guide for Summerlin and northwest Las Vegas. Feature
        verification follows the published glossary before any showing circuit.
      </p>
      <section className="answer-block" aria-label="Direct answer">
        <h2 className="answer-block-title">Direct answer</h2>
        <p className="answer-block-body">
          Summerlin inventory still needs door widths, thresholds, and shower
          curbs measured on the specific unit. A master-plan amenity list is not
          a substitute for a feature sheet.
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
    </article>
  );
}
