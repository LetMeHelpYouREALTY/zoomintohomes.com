import Image from "next/image";
import Link from "next/link";
import type { PageImage } from "@/content/types";
import AfterHeroWidgets from "@/components/site/AfterHeroWidgets";
import { siteIdentity } from "@/content/site";
import { PAGE_IMAGE_QUALITY } from "@/lib/images";

export type PageHeroProps = {
  image: PageImage;
  headline: string;
  support: string;
  explanation: string;
  servicePoints?: readonly string[];
  brand?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tourHref?: string;
  tourLabel?: string;
  /** One navy button plus a phone text link. Homepage uses this. */
  singleCta?: boolean;
  showWidgets?: boolean;
  showCalendly?: boolean;
  calendlyId?: string;
  listingDensity?: "default" | "three";
};

/**
 * Split hero used on every page: photo beside the H1 and a short service
 * explanation. Listings and scheduling widgets render immediately below.
 */
export default function PageHero({
  image,
  headline,
  support,
  explanation,
  servicePoints,
  brand = siteIdentity.siteName,
  primaryHref = "/contact",
  primaryLabel = "Book a call",
  secondaryHref = `tel:${siteIdentity.phoneTel}`,
  secondaryLabel = `Call ${siteIdentity.phoneDisplay}`,
  tourHref,
  tourLabel = "Watch a sample video tour",
  singleCta = false,
  showWidgets = true,
  showCalendly,
  calendlyId = "schedule-hero",
  listingDensity = "default",
}: PageHeroProps) {
  return (
    <>
      <section className="tour-hero" aria-labelledby="page-hero-heading">
        <div className="tour-hero-media">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            fetchPriority="high"
            quality={PAGE_IMAGE_QUALITY}
            className="tour-hero-image"
            sizes="(max-width: 56rem) 100vw, 50vw"
          />
        </div>
        <div className="tour-hero-content">
          <p className="tour-hero-brand">{brand}</p>
          <h1 id="page-hero-heading" className="tour-hero-title">
            {headline}
          </h1>
          <p className="tour-hero-support">{support}</p>
          <p className="tour-hero-explanation">{explanation}</p>
          {servicePoints && servicePoints.length > 0 ? (
            <ul className="tour-hero-points">
              {servicePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
          <div className="cta-row tour-hero-actions">
            {!singleCta && tourHref ? (
              <Link href={tourHref} className="button tour-play-button">
                <span className="tour-play-icon" aria-hidden="true" />
                {tourLabel}
              </Link>
            ) : null}
            <Link href={primaryHref} className="button">
              {primaryLabel}
            </Link>
            {singleCta ? null : secondaryHref.startsWith("tel:") ? (
              <a href={secondaryHref} className="button button-secondary">
                {secondaryLabel}
              </a>
            ) : (
              <Link href={secondaryHref} className="button button-secondary">
                {secondaryLabel}
              </Link>
            )}
          </div>
          {singleCta ? (
            <p className="tour-hero-phone">
              Or call{" "}
              <a href={`tel:${siteIdentity.phoneTel}`}>
                {siteIdentity.phoneDisplay}
              </a>
              {tourHref ? (
                <>
                  {" · "}
                  <Link href={tourHref}>{tourLabel}</Link>
                </>
              ) : null}
            </p>
          ) : null}
        </div>
      </section>
      {showWidgets ? (
        <AfterHeroWidgets
          calendlyId={calendlyId}
          showCalendly={showCalendly}
          listingDensity={listingDensity}
        />
      ) : null}
    </>
  );
}
