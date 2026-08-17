import type { Metadata } from "next";
import Link from "next/link";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import PageSeoSections from "@/components/site/PageSeoSections";
import JsonLd from "@/components/site/JsonLd";
import { pageImages } from "@/content/page-images";
import { homeCopy } from "@/content/pages";
import { pageMeta, siteIdentity } from "@/content/site";
import { pageSeoEnhance } from "@/content/seo-enhance";
import { buildFaqPage } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  path: "/",
  absoluteTitle: true,
  imagePath: pageImages.home.hero.src,
  imageAlt: pageImages.home.hero.alt,
});

const images = pageImages.home;

const related = [
  {
    href: "/virtual-tour-process",
    label: "What is the reduced-showing process?",
  },
  { href: "/what-we-measure", label: "What do you measure on a tour?" },
  {
    href: "/va-sah-grant-nevada",
    label: "How does a VA SAH grant pair with a purchase?",
  },
  { href: "/contact", label: "How do I request a consultation?" },
];

export default function HomePage() {
  const byHeading = Object.fromEntries(
    images.supporting.map((image) => [image.supportsHeading, image]),
  );

  return (
    <article>
      <JsonLd data={buildFaqPage(pageSeoEnhance.home.faqs)} />
      <PageHero image={images.hero} />
      <h1 className="page-title">{homeCopy.h1}</h1>
      <p className="lede">{homeCopy.lede}</p>
      <PageSeoSections page="home" slot="intro" />
      <div className="cta-row">
        <Link href="/virtual-tour-process" className="button">
          Read the process
        </Link>
        <a href={`tel:${siteIdentity.phoneTel}`} className="button button-secondary">
          Call {siteIdentity.phoneDisplay}
        </a>
        <Link href="/examples/walkthrough" className="button button-secondary">
          Example walkthrough
        </Link>
      </div>
      <h2>{homeCopy.audienceLabel}</h2>
      {byHeading[homeCopy.audienceLabel] ? (
        <HeadingImage image={byHeading[homeCopy.audienceLabel]} />
      ) : null}
      <div className="stack">
        {homeCopy.audiences.map((item) => (
          <section key={item.title} className="card">
            {byHeading[item.title] ? (
              <HeadingImage image={byHeading[item.title]} />
            ) : null}
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </section>
        ))}
      </div>
      <h2>{homeCopy.promiseTitle}</h2>
      {byHeading[homeCopy.promiseTitle] ? (
        <HeadingImage image={byHeading[homeCopy.promiseTitle]} />
      ) : null}
      <p>{homeCopy.promiseBody}</p>
      {byHeading[homeCopy.h1] ? (
        <HeadingImage image={byHeading[homeCopy.h1]} />
      ) : null}
      <p>
        <Link href="/accessible-homes">Accessible homes hub</Link>
        {" · "}
        <Link href="/glossary">RESO glossary</Link>
        {" · "}
        <Link href="/referral-partners">For referral partners</Link>
        {" · "}
        <Link href="/contact">Request a consultation</Link>
      </p>
      <PageSeoSections page="home" slot="closing" related={related} />
    </article>
  );
}
