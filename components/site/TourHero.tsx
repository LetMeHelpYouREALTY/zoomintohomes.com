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
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  tourHref?: string;
  tourLabel?: string;
  showWidgets?: boolean;
};

/**
 * Full-bleed tour-stage hero: brand + one headline + support + CTAs over
 * cinematic media. RealScout + Calendly render immediately below.
 */
export default function TourHero({
  image,
  brand,
  headline,
  support,
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
            sizes="(max-width: 48rem) 100vw, 1400px"
          />
          <div className="tour-hero-shade" />
        </div>
        <div className="tour-hero-content">
          <p className="tour-hero-brand">{brand}</p>
          <h1 id="tour-hero-heading" className="tour-hero-title">
            {headline}
          </h1>
          <p className="tour-hero-support">{support}</p>
          <div className="cta-row tour-hero-actions">
            <Link href={tourHref} className="button tour-play-button">
              <span className="tour-play-icon" aria-hidden="true" />
              {tourLabel}
            </Link>
            <Link href={primaryHref} className="button button-on-dark">
              {primaryLabel}
            </Link>
            {secondaryHref.startsWith("tel:") ? (
              <a href={secondaryHref} className="button button-ghost-on-dark">
                {secondaryLabel}
              </a>
            ) : (
              <Link href={secondaryHref} className="button button-ghost-on-dark">
                {secondaryLabel}
              </Link>
            )}
            <a href={CALENDLY_URL} className="button button-ghost-on-dark">
              Book a time
            </a>
          </div>
        </div>
      </section>
      {showWidgets ? <AfterHeroWidgets calendlyId="schedule-home" /> : null}
    </>
  );
}
