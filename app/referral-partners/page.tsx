import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import { pageImages } from "@/content/page-images";
import { referralPartnersCopy } from "@/content/pages";
import { referralPartnerTypes } from "@/content/partners";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Referral partners",
  description: pageMeta.referralPartners.description,
};

const images = pageImages.referralPartners;

export default function ReferralPartnersPage() {
  const byHeading = Object.fromEntries(
    images.supporting.map((image) => [image.supportsHeading, image]),
  );

  return (
    <article>
      <PageHero image={images.hero} />
      <h1 className="page-title">{referralPartnersCopy.h1}</h1>
      <p className="lede">{referralPartnersCopy.lede}</p>
      <div className="stack">
        {referralPartnerTypes.map((partner) => (
          <section key={partner.slug} className="card" id={partner.slug}>
            {byHeading[partner.audience] ? (
              <HeadingImage image={byHeading[partner.audience]} />
            ) : null}
            <h2>{partner.audience}</h2>
            <p>{partner.theirProblem}</p>
            <h3>What we handle</h3>
            <ul>
              {partner.whatWeHandle.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Handoff</h3>
            {partner.slug === "contractors" && byHeading["Handoff"] ? (
              <HeadingImage image={byHeading["Handoff"]} />
            ) : null}
            <p>{partner.handoffProcess}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
