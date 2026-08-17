import RealScoutCarousel from "@/components/site/RealScoutCarousel";
import CalendlyInlineSection from "@/components/site/CalendlyInlineSection";

type AfterHeroWidgetsProps = {
  /** When false, skip RealScout (rare). Default true. */
  showRealScout?: boolean;
  /** When false, skip the post-hero Calendly block. Default true. */
  showCalendly?: boolean;
  calendlyId?: string;
};

/** RealScout carousel under the hero. Calendly stays in header/footer/badge to avoid stacked iframes. */
export default function AfterHeroWidgets({
  showRealScout = true,
  showCalendly = false,
  calendlyId = "schedule-after-hero",
}: AfterHeroWidgetsProps) {
  return (
    <div className="after-hero-widgets">
      {showRealScout ? <RealScoutCarousel /> : null}
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
