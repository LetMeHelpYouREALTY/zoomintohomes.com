import type { Metadata } from "next";
import HeadingImage from "@/components/site/HeadingImage";
import JsonLd from "@/components/site/JsonLd";
import RoutePageHero from "@/components/site/RoutePageHero";
import PageSeoSections from "@/components/site/PageSeoSections";
import { pageImages } from "@/content/page-images";
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
      <RoutePageHero path="/contact" />
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
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
