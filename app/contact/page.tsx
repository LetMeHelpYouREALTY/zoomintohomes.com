import type { Metadata } from "next";
import AfterHeroWidgets from "@/components/site/AfterHeroWidgets";
import CalendlyInlineSection from "@/components/site/CalendlyInlineSection";
import HeadingImage from "@/components/site/HeadingImage";
import JsonLd from "@/components/site/JsonLd";
import RoutePageHero from "@/components/site/RoutePageHero";
import PageSeoSections from "@/components/site/PageSeoSections";
import { pageImages } from "@/content/page-images";
import { contactCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
  path: "/contact",
  absoluteTitle: true,
  imagePath: pageImages.contact.hero.src,
  imageAlt: pageImages.contact.hero.alt,
});

const images = pageImages.contact;

export default function ContactPage() {
  return (
    <article>
      <RoutePageHero
        path="/contact"
        showWidgets={false}
        primaryHref="#schedule-contact"
        primaryLabel="Pick a time"
      />
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <CalendlyInlineSection
        id="schedule-contact"
        title={contactCopy.scheduleHeading}
        intro={contactCopy.scheduleIntro}
        height="720px"
      />
      <AfterHeroWidgets />
      <div className="image-grid">
        {images.supporting.map((image) => (
          <HeadingImage key={image.id} image={image} />
        ))}
      </div>
      <PageSeoSections
        page="contact"
        slot="closing"
        related={[
          {
            href: "/virtual-tour-process",
            label: "What happens after we talk?",
          },
          {
            href: "/referral-partners",
            label: "How do care teams introduce a client?",
          },
        ]}
      />
    </article>
  );
}
