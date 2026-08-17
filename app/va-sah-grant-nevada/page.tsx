import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/site/JsonLd";
import PageSeoSections from "@/components/site/PageSeoSections";
import { pageImages } from "@/content/page-images";
import { veteransCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.vaSah.title,
  description: pageMeta.vaSah.description,
  path: "/va-sah-grant-nevada",
  imagePath: pageImages.veterans.hero.src,
  imageAlt: pageImages.veterans.hero.alt,
});

const images = pageImages.veterans;

export default function VaSahGrantPage() {
  const byHeading = Object.fromEntries(
    images.supporting.map((image) => [image.supportsHeading, image]),
  );

  return (
    <article>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "VA housing grant", path: "/va-sah-grant-nevada" },
        ])}
      />
      <PageHero image={images.hero} />
      <h1 className="page-title">
        Buying a home with a VA SAH grant in Nevada
      </h1>
      <p className="lede">{veteransCopy.lede}</p>
      <PageSeoSections page="veterans" slot="intro" />
      <p>
        Official program information:{" "}
        <a
          href="https://www.va.gov/housing-assistance/disability-housing-grants/"
          rel="noopener noreferrer"
        >
          VA disability housing grants
        </a>
        .
      </p>
      <div className="stack">
        {veteransCopy.sections.map((section) => (
          <section key={section.title} className="card">
            {byHeading[section.title] ? (
              <HeadingImage image={byHeading[section.title]} />
            ) : null}
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
      <h2>Related Nevada pages</h2>
      <ul>
        <li>
          <Link href="/va-sha-grant-nevada">VA SHA grant sequencing</Link>
        </li>
        <li>
          <Link href="/clark-county-disabled-veteran-property-tax-exemption">
            Clark County disabled-veteran property tax exemption tiers
          </Link>
        </li>
        <li>
          <Link href="/virtual-tour-process">Video-first touring process</Link>
        </li>
      </ul>
      <PageSeoSections
        page="veterans"
        slot="closing"
        related={[
          {
            href: "/clark-county-disabled-veteran-property-tax-exemption",
            label: "What are the Clark County exemption tiers?",
          },
          {
            href: "/va-sha-grant-nevada",
            label: "How does SHA differ from SAH?",
          },
        ]}
      />
    </article>
  );
}
