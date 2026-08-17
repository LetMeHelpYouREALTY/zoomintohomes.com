import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import PageSeoSections from "@/components/site/PageSeoSections";
import { pageImages } from "@/content/page-images";
import { referralPartnersCopy } from "@/content/pages";
import { referralPartnerTypes } from "@/content/partners";
import { pageMeta } from "@/content/site";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.referralPartners.title,
  description: pageMeta.referralPartners.description,
  path: "/referral-partners",
  imagePath: pageImages.referralPartners.hero.src,
  imageAlt: pageImages.referralPartners.hero.alt,
});

const images = pageImages.referralPartners;

export default function ReferralPartnersPage() {
  const byHeading = Object.fromEntries(
    images.supporting.map((image) => [image.supportsHeading, image]),
  );

  return (
    <article>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "For care teams", path: "/referral-partners" },
        ])}
      />
      <PageHero image={images.hero} />
      <h1 className="page-title">{referralPartnersCopy.h1}</h1>
      <p className="lede">{referralPartnersCopy.lede}</p>
      <PageSeoSections page="referralPartners" slot="intro" />
      <p>
        <a href="/referral-partners/one-pager" className="button">
          Downloadable one-pager (HTML)
        </a>
      </p>
      <h2>{referralPartnersCopy.partnersHeading}</h2>
      <div className="stack">
        {referralPartnerTypes.map((partner) => (
          <section key={partner.slug} className="card" id={partner.slug}>
            {byHeading[partner.audience] ? (
              <HeadingImage image={byHeading[partner.audience]} />
            ) : null}
            <h3>{partner.audience}</h3>
            <p>{partner.theirProblem}</p>
            <h4>What we handle</h4>
            <ul>
              {partner.whatWeHandle.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4>Handoff</h4>
            {partner.slug === "contractors" && byHeading["Handoff"] ? (
              <HeadingImage image={byHeading["Handoff"]} />
            ) : null}
            <p>{partner.handoffProcess}</p>
          </section>
        ))}
      </div>
      <PageSeoSections
        page="referralPartners"
        slot="closing"
        related={[
          {
            href: "/virtual-tour-process",
            label: "What is the reduced-showing process?",
          },
          { href: "/contact", label: "How do partners request a handoff?" },
        ]}
      />
    </article>
  );
}
