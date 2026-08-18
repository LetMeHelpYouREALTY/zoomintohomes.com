import RealScoutCarousel from "@/components/site/RealScoutCarousel";
import CalendlyInlineSection from "@/components/site/CalendlyInlineSection";

type AfterHeroWidgetsProps = {
  /** When false, skip RealScout (rare). Default true. */
  showRealScout?: boolean;
  /** When false, skip the post-hero Calendly block. Default false — the
   * scheduler lives after page content in the root layout. */
  showCalendly?: boolean;
  calendlyId?: string;
  /** One row of three cards so the grid does not read like an MLS dump. */
  listingDensity?: "default" | "three";
};

/** RealScout carousel under the split hero. Calendly renders after page body. */
export default function AfterHeroWidgets({
  showRealScout = true,
  showCalendly = false,
  calendlyId = "schedule-after-hero",
  listingDensity = "three",
}: AfterHeroWidgetsProps) {
  return (
    <div className="after-hero-widgets">
      {showRealScout ? <RealScoutCarousel density={listingDensity} /> : null}
      {showCalendly ? (
        <CalendlyInlineSection
          id={calendlyId}
          title="Schedule your virtual tour call"
          intro="Pick a time to plan a remote walkthrough. We measure on video first, then visit only the finalists."
          height="640px"
        />
      ) : null}
    </div>
  );
}
