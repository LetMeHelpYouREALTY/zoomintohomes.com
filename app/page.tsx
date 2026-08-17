import type { Metadata } from "next";
import Link from "next/link";
import HeadingImage from "@/components/site/HeadingImage";
import PageSeoSections from "@/components/site/PageSeoSections";
import JsonLd from "@/components/site/JsonLd";
import TourHero from "@/components/site/TourHero";
import TourStage from "@/components/site/TourStage";
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
    <article className="home-article">
      <JsonLd data={buildFaqPage(pageSeoEnhance.home.faqs)} />
      <TourHero
        image={images.hero}
        brand={siteIdentity.siteName}
        headline={homeCopy.h1}
        support={homeCopy.lede}
        primaryHref="/virtual-tour-process"
        primaryLabel="See the tour process"
        secondaryHref={`tel:${siteIdentity.phoneTel}`}
        secondaryLabel={`Call ${siteIdentity.phoneDisplay}`}
        tourHref="/examples/walkthrough"
        tourLabel="Watch a sample virtual tour"
      />
      <div className="home-body">
        <PageSeoSections page="home" slot="intro" />

        <section className="tour-promise" aria-labelledby="tour-promise-heading">
          <div className="tour-promise-copy">
            <h2 id="tour-promise-heading">{homeCopy.promiseTitle}</h2>
            <p>{homeCopy.promiseBody}</p>
            <div className="cta-row">
              <Link href="/examples/feature-sheet" className="button">
                View a sample feature sheet
              </Link>
              <Link
                href="/what-we-measure"
                className="button button-secondary"
              >
                What we measure on camera
              </Link>
            </div>
          </div>
          <TourStage
            title="Live tour pause · doorway clear width"
            caption="Virtual-first means the tape measure happens on video before anyone drives."
          >
            {byHeading[homeCopy.h1] ? (
              <HeadingImage image={byHeading[homeCopy.h1]} />
            ) : null}
          </TourStage>
        </section>

        <h2>{homeCopy.audienceLabel}</h2>
        {byHeading[homeCopy.audienceLabel] ? (
          <HeadingImage image={byHeading[homeCopy.audienceLabel]} />
        ) : null}
        <div className="audience-grid">
          {homeCopy.audiences.map((item) => (
            <section key={item.title} className="audience-panel">
              {byHeading[item.title] ? (
                <HeadingImage image={byHeading[item.title]} />
              ) : null}
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </section>
          ))}
        </div>

        <nav className="home-links" aria-label="Primary topics">
          <Link href="/accessible-homes">Accessible homes hub</Link>
          <Link href="/glossary">RESO glossary</Link>
          <Link href="/referral-partners">For referral partners</Link>
          <Link href="/contact">Request a consultation</Link>
        </nav>
        <PageSeoSections page="home" slot="closing" related={related} />
      </div>
    </article>
  );
}
