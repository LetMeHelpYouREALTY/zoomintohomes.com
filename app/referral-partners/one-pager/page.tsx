import type { Metadata } from "next";
import Link from "next/link";
import { siteIdentity } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import RoutePageHero from "@/components/site/RoutePageHero";

export const metadata: Metadata = buildPageMetadata({
  title: "Care team one-pager | Zoom Into Homes",
  description:
    "Printable handoff sheet for discharge planners, OT/PT, VA loan officers, and elder law attorneys.",
  path: "/referral-partners/one-pager",
});

export default function ReferralOnePagerPage() {
  return (
    <article>
      <RoutePageHero path="/referral-partners/one-pager" />
      <section className="card">
        <h2>What we return</h2>
        <ul>
          <li>Video tour recordings with measurement pauses</li>
          <li>Dated access checklists (home features only)</li>
          <li>A shortlist of two or three finalists</li>
        </ul>
        <h2>What we need from you</h2>
        <ul>
          <li>Location constraints</li>
          <li>Required access features</li>
          <li>Timeline and consent to introduce the client</li>
        </ul>
        <h2>What stays in your lane</h2>
        <p>
          Clinical, legal, and benefits decisions remain with the care team. We
          sequence housing logistics.
        </p>
        <h2>Contact</h2>
        <p>
          {siteIdentity.agentName} ·{" "}
          <a href={`tel:${siteIdentity.phoneTel}`}>
            {siteIdentity.phoneDisplay}
          </a>
          <br />
          <Link href="/contact">zoomintohomes.com/contact</Link>
        </p>
      </section>
      <p>
        <Link href="/referral-partners">Back to care teams</Link>
      </p>
    </article>
  );
}
