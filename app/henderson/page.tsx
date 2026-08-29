import type { Metadata } from "next";
import Link from "next/link";
import PageSeoSections from "@/components/site/PageSeoSections";
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
          Zoom Into Homes treats Henderson searches the same as the rest of the
          valley: tour the unit on video, write doorway widths and shower curbs,
          then visit two or three finalists. Community marketing is not an access
          certificate.
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
      <PageSeoSections
        page="henderson"
        slot="closing"
        related={[
          { href: "/summerlin", label: "How does Zoom Into Homes search Summerlin?" },
          {
            href: "/virtual-tour-process",
            label: "How does Zoom Into Homes keep tours short?",
          },
        ]}
      />
    </article>
  );
}
