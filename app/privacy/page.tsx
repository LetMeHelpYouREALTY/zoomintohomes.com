import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, siteIdentity } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.privacy.title,
  description: pageMeta.privacy.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article>
      <h1 className="page-title">Privacy policy</h1>
      <p className="lede">
        How {siteIdentity.siteName} handles information you submit through this
        website. Effective {new Date().toISOString().slice(0, 10)}.
      </p>
      <h2>What we collect</h2>
      <p>
        Consultation and referral forms may collect your name, email, phone,
        role (buyer, seller, someone introducing a client, or other), and a free-text note.
        Notes may include mobility-related or medical-adjacent details you choose
        to share so we can pre-verify building features. Do not submit
        information about another person unless you have authority to do so.
      </p>
      <h2>How we use it</h2>
      <p>
        We use submissions to respond to your request, coordinate introductions,
        schedule tours, and keep access checklists accurate. When our lead inbox
        is connected, submissions are stored under brokerage policies.
      </p>
      <h2>Analytics</h2>
      <p>
        We may use Vercel Analytics and, when configured, Google Analytics with
        IP anonymization to understand aggregate traffic. Analytics tools are
        not used to decide housing eligibility.
      </p>
      <h2>Retention and sharing</h2>
      <p>
        We retain inquiry records as needed for real-estate transaction and
        compliance purposes. We do not sell personal information. Service
        providers (hosting, CRM, email) process data only to operate the site
        and respond to you.
      </p>
      <h2>Contact</h2>
      <p>
        Questions: call{" "}
        <a href={`tel:${siteIdentity.phoneTel}`}>{siteIdentity.phoneDisplay}</a>{" "}
        or use the <Link href="/contact">contact form</Link>.
      </p>
    </article>
  );
}
