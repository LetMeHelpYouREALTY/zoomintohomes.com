import Image from "next/image";
import Link from "next/link";
import type { PageImage } from "@/content/types";
import AfterHeroWidgets from "@/components/site/AfterHeroWidgets";
import { CALENDLY_URL } from "@/content/widgets";
import { PAGE_IMAGE_QUALITY } from "@/lib/images";

type TourHeroProps = {
  image: PageImage;
  brand: string;
  headline: string;
  support: string;
  explanation: string;
  servicePoints: readonly string[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  tourHref?: string;
  tourLabel?: string;
  showWidgets?: boolean;
};

/**
 * Split hero: photo beside the H1 and service explanation so the first
 * screen states what we do. Listings render immediately below.
 */
export default function TourHero({
  image,
  brand,
  headline,
  support,
  explanation,
  servicePoints,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  tourHref = "/examples/walkthrough",
  tourLabel = "Watch a sample virtual tour",
  showWidgets = true,
}: TourHeroProps) {
  return (
    <>
      <section className="tour-hero" aria-labelledby="tour-hero-heading">
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
          <h1 id="tour-hero-heading" className="tour-hero-title">
            {headline}
          </h1>
          <p className="tour-hero-support">{support}</p>
          <p className="tour-hero-explanation">{explanation}</p>
          <ul className="tour-hero-points">
            {servicePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="cta-row tour-hero-actions">
            <Link href={tourHref} className="button tour-play-button">
              <span className="tour-play-icon" aria-hidden="true" />
              {tourLabel}
            </Link>
            <Link href={primaryHref} className="button">
              {primaryLabel}
            </Link>
            {secondaryHref.startsWith("tel:") ? (
              <a href={secondaryHref} className="button button-secondary">
                {secondaryLabel}
              </a>
            ) : (
              <Link href={secondaryHref} className="button button-secondary">
                {secondaryLabel}
              </Link>
            )}
            <a href={CALENDLY_URL} className="button button-secondary">
              Book a time
            </a>
          </div>
        </div>
      </section>
      {showWidgets ? <AfterHeroWidgets calendlyId="schedule-home" /> : null}
    </>
  );
}
