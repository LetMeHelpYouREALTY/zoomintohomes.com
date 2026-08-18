import type { Metadata } from "next";
import Link from "next/link";
import CalendlyInlineSection from "@/components/site/CalendlyInlineSection";
import HeadingImage from "@/components/site/HeadingImage";
import PageSeoSections from "@/components/site/PageSeoSections";
import TourHero from "@/components/site/TourHero";
import TourStage from "@/components/site/TourStage";
import { pageImages } from "@/content/page-images";
import { homeCopy } from "@/content/pages";
import { pageMeta, siteIdentity } from "@/content/site";
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
    label: "How do you keep in-person tours short?",
  },
  { href: "/what-we-measure", label: "What do you measure on a tour?" },
  {
    href: "/va-sah-grant-nevada",
    label: "How does a VA housing grant pair with a purchase?",
  },
  { href: "/contact", label: "How do I request a call?" },
];

export default function HomePage() {
  const byHeading = Object.fromEntries(
    images.supporting.map((image) => [image.supportsHeading, image]),
  );

  return (
    <article className="home-article">
      <TourHero
        image={images.hero}
        brand={siteIdentity.siteName}
        headline={homeCopy.h1}
        support={homeCopy.lede}
        explanation={homeCopy.explanation}
        servicePoints={homeCopy.servicePoints}
        primaryHref="#schedule-home"
        primaryLabel="Book a call"
        singleCta
        showCalendly={false}
        listingDensity="three"
        tourHref="/examples/walkthrough"
        tourLabel="Watch a sample video tour"
      />
      <div className="home-body">
        <section className="tour-promise" aria-labelledby="tour-promise-heading">
          <div className="tour-promise-copy">
            <h2 id="tour-promise-heading">{homeCopy.promiseTitle}</h2>
            <p>{homeCopy.promiseBody}</p>
            <div className="cta-row">
              <Link href="/examples/feature-sheet" className="button">
                View a sample access checklist
              </Link>
              <Link href="/what-we-measure" className="text-link">
                What we measure on camera
              </Link>
            </div>
          </div>
          <TourStage
            title="Live tour pause · doorway clear width"
            caption="We measure on video before anyone drives."
          >
            {byHeading[homeCopy.h1] ? (
              <HeadingImage image={byHeading[homeCopy.h1]} />
            ) : null}
          </TourStage>
        </section>

        <CalendlyInlineSection
          id="schedule-home"
          title="Schedule your virtual tour call"
          intro="Pick a time to plan a remote walkthrough. We measure on video first, then visit only the finalists."
          height="640px"
        />

        <h2>{homeCopy.audienceLabel}</h2>
        {byHeading[homeCopy.audienceLabel] ? (
          <HeadingImage image={byHeading[homeCopy.audienceLabel]} />
        ) : null}
        <div className="audience-grid">
          {homeCopy.audiences.map((item) => (
            <section key={item.title} className="audience-panel">
              {byHeading[item.title] ? (
                <HeadingImage image={byHeading[item.title]} layout="card" />
              ) : null}
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </section>
          ))}
        </div>

        <nav className="home-links" aria-label="Primary topics">
          <Link href="/accessible-homes">Accessible homes hub</Link>
          <Link href="/glossary">Access features we measure</Link>
          <Link href="/referral-partners">For hospitals and care teams</Link>
          <Link href="/contact">Request a call</Link>
        </nav>
        <PageSeoSections page="home" slot="closing" related={related} />
      </div>
    </article>
  );
}
