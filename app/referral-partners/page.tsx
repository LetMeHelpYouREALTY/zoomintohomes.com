import type { Metadata } from "next";
import { referralPartnerTypes } from "@/content/partners";
import { referralPartnersCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Referral partners",
  description: pageMeta.referralPartners.description,
};

export default function ReferralPartnersPage() {
  return (
    <article>
      <h1 className="page-title">{referralPartnersCopy.h1}</h1>
      <p className="lede">{referralPartnersCopy.lede}</p>
      <div className="stack">
        {referralPartnerTypes.map((partner) => (
          <section key={partner.slug} className="card" id={partner.slug}>
            <h2>{partner.audience}</h2>
            <p>{partner.theirProblem}</p>
            <h3>What we handle</h3>
            <ul>
              {partner.whatWeHandle.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Handoff</h3>
            <p>{partner.handoffProcess}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
