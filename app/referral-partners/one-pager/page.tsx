import type { Metadata } from "next";
import Link from "next/link";
import { siteIdentity } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import AfterHeroWidgets from "@/components/site/AfterHeroWidgets";

export const metadata: Metadata = buildPageMetadata({
  title: "Referral partner one-pager | Zoom Into Homes",
  description:
    "Printable handoff sheet for discharge planners, OT/PT, VA loan officers, and elder law attorneys.",
  path: "/referral-partners/one-pager",
});

export default function ReferralOnePagerPage() {
  return (
    <article>
      <AfterHeroWidgets />

      <h1 className="page-title">Referral partner one-pager</h1>
      <p className="lede">
        Print or save this page for a folder. It is the written handoff Zoom Into
        Homes already describes on the referral partners page.
      </p>
      <section className="card">
        <h2>What we return</h2>
        <ul>
          <li>Remote tour recordings with measurement pauses</li>
          <li>Dated feature sheets (building attributes only)</li>
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
          Clinical, legal, and benefits decisions remain with the referral
          source. We sequence housing logistics.
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
        <Link href="/referral-partners">Back to referral partners</Link>
      </p>
    </article>
  );
}
