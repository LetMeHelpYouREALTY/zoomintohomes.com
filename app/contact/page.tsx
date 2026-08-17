import type { Metadata } from "next";
import Link from "next/link";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import CalendlyInlineSection from "@/components/site/CalendlyInlineSection";
import ConsultationForm from "@/components/site/ConsultationForm";
import HeadingImage from "@/components/site/HeadingImage";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import PageSeoSections from "@/components/site/PageSeoSections";
import { pageImages } from "@/content/page-images";
import { contactCopy } from "@/content/pages";
import { pageMeta, siteIdentity } from "@/content/site";
import { CALENDLY_URL } from "@/content/widgets";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
  path: "/contact",
  imagePath: pageImages.contact.hero.src,
  imageAlt: pageImages.contact.hero.alt,
});

const images = pageImages.contact;

export default function ContactPage() {
  return (
    <article>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero image={images.hero} />
      <h1 className="page-title">{contactCopy.h1}</h1>
      <p className="lede">{contactCopy.lede}</p>
      <PageSeoSections page="contact" slot="intro" />
      <div className="cta-row">
        <a href={`tel:${siteIdentity.phoneTel}`} className="button">
          Call {siteIdentity.phoneDisplay}
        </a>
        <CalendlyButton className="button button-secondary" text="Book a time" />
        <a href={CALENDLY_URL} className="button button-secondary">
          Open the scheduler
        </a>
      </div>
      <h2>{contactCopy.formHeading}</h2>
      <ConsultationForm />
      <p className="meta">
        By submitting, you agree to the <Link href="/privacy">privacy policy</Link>{" "}
        and <Link href="/terms">terms</Link>.
      </p>
      <CalendlyInlineSection
        id="schedule-contact"
        title="Prefer to pick a time now?"
        intro="Use the scheduler for a video-tour planning call. Same practice, same fewer-showings process."
      />
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
