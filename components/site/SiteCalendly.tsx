import CalendlyInlineSection from "@/components/site/CalendlyInlineSection";

/**
 * One scheduler after page content on every route. Hero "Book a call"
 * buttons point here (`#schedule`).
 */
export default function SiteCalendly() {
  return (
    <CalendlyInlineSection
      id="schedule"
      title="Schedule your virtual tour call"
      intro="Pick a time to plan a remote walkthrough. We measure on video first, then visit only the finalists."
      height="640px"
    />
  );
}
