import type { Metadata } from "next";
import Link from "next/link";
import ConsultationForm from "@/components/site/ConsultationForm";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import PageSeoSections from "@/components/site/PageSeoSections";
import { pageImages } from "@/content/page-images";
import { contactCopy } from "@/content/pages";
import { pageMeta, siteIdentity } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Request a consultation",
  description: pageMeta.contact.description,
  path: "/contact",
  imagePath: pageImages.contact.hero.src,
  imageAlt: pageImages.contact.hero.alt,
});

const images = pageImages.contact;
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();

export default function ContactPage() {
  return (
    <article>
      <PageHero image={images.hero} />
      <h1 className="page-title">{contactCopy.h1}</h1>
      <p className="lede">{contactCopy.lede}</p>
      <PageSeoSections page="contact" slot="intro" />
      <div className="cta-row">
        <a href={`tel:${siteIdentity.phoneTel}`} className="button">
          Call {siteIdentity.phoneDisplay}
        </a>
        {calendlyUrl ? (
          <a href={calendlyUrl} className="button button-secondary">
            Schedule on Calendly
          </a>
        ) : null}
      </div>
      <h2>{contactCopy.formHeading}</h2>
      <ConsultationForm />
      <p className="meta">
        By submitting, you agree to the <Link href="/privacy">privacy policy</Link>{" "}
        and <Link href="/terms">terms</Link>.
      </p>
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
            label: "What happens after intake?",
          },
          {
            href: "/referral-partners",
            label: "How do referral partners hand off a client?",
          },
        ]}
      />
    </article>
  );
}
