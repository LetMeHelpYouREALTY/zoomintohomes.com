import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import RoutePageHero from "@/components/site/RoutePageHero";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.henderson.title,
  description: pageMeta.henderson.description,
  path: "/henderson",
});

export default function HendersonPage() {
  return (
    <article>
      <RoutePageHero path="/henderson" />
      <section className="answer-block" aria-label="Direct answer">
        <h2 className="answer-block-title">Direct answer</h2>
        <p className="answer-block-body">
          Henderson searches for zero-step entry, roll-in showers, and single-level
          plans still require unit-level measurement. Community marketing is not
          an access certificate.
        </p>
      </section>
      <h2>Communities often reviewed</h2>
      <ul>
        <li>Sun City Anthem</li>
        <li>Solera</li>
        <li>Siena</li>
      </ul>
      <p>
        <Link href="/virtual-tour-process">How video-first touring works</Link>
        {" · "}
        <Link href="/accessible-homes">Accessible homes hub</Link>
        {" · "}
        <Link href="/aging-in-place">Aging in place</Link>
      </p>
    </article>
  );
}
