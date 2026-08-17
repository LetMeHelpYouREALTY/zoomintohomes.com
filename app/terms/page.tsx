import type { Metadata } from "next";
import Link from "next/link";
import { brandCopy } from "@/content/brand";
import { pageMeta, siteIdentity } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.terms.title,
  description: pageMeta.terms.description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article>
      <h1 className="page-title">Terms of use</h1>
      <p className="lede">
        By using {siteIdentity.domain}, you agree to these terms. This site is
        advertising for a real-estate practice, not legal, medical, tax, or VA
        benefits advice.
      </p>
      <h2>No guarantees on inventory or grants</h2>
      <p>
        Access checklists describe measured home features on a stated date.
        Homes-for-sale data, when shown later, will be attributed separately. VA grant and
        county tax figures must be verified with official sources before you
        rely on them.
      </p>
      <h2>Fair Housing</h2>
      <p>
        Housing is offered without regard to race, color, religion, sex,
        disability, familial status, national origin, or any other class
        protected by federal, Nevada, or local law.
      </p>
      <h2>Brokerage identification</h2>
      <p>
        {siteIdentity.agentName}, {siteIdentity.agentLicense}.{" "}
        {siteIdentity.brokerageName}. {siteIdentity.brokerageLicense}.{" "}
        {brandCopy.franchiseDisclaimer}
      </p>
      <h2>Contact</h2>
      <p>
        <Link href="/contact">Contact</Link> ·{" "}
        <Link href="/privacy">Privacy</Link> ·{" "}
        <a href={`tel:${siteIdentity.phoneTel}`}>{siteIdentity.phoneDisplay}</a>
      </p>
    </article>
  );
}
