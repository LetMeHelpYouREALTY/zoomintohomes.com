import type { Metadata } from "next";
import ConsultationForm from "@/components/site/ConsultationForm";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import { pageImages } from "@/content/page-images";
import { contactCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Request a consultation",
  description: pageMeta.contact.description,
  path: "/contact",
  imagePath: pageImages.contact.hero.src,
  imageAlt: pageImages.contact.hero.alt,
});

const images = pageImages.contact;

export default function ContactPage() {
  return (
    <article>
      <PageHero image={images.hero} />
      <h1 className="page-title">{contactCopy.h1}</h1>
      <p className="lede">{contactCopy.lede}</p>
      <ConsultationForm />
      <div className="image-grid">
        {images.supporting.map((image) => (
          <HeadingImage key={image.id} image={image} />
        ))}
      </div>
    </article>
  );
}
