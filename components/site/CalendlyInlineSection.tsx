"use client";

import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import { calendlyHeading } from "@/content/widgets";
import { siteIdentity } from "@/content/site";

type CalendlyInlineSectionProps = {
  title?: string;
  intro?: string;
  height?: string;
  id?: string;
};

export default function CalendlyInlineSection({
  title = calendlyHeading(),
  intro = "Book a planning call for a remote walkthrough or access-checklist review. No twelve-house tour required.",
  height = "680px",
  id = "schedule",
}: CalendlyInlineSectionProps) {
  return (
    <section className="calendly-inline-section" aria-labelledby={`${id}-heading`} id={id}>
      <div className="calendly-inline-inner">
        <h2 id={`${id}-heading`}>{title}</h2>
        <p>{intro}</p>
        <p className="meta">
          Or call{" "}
          <a href={`tel:${siteIdentity.phoneTel}`}>{siteIdentity.phoneDisplay}</a>
          .
        </p>
        <CalendlyWidget height={height} />
      </div>
    </section>
  );
}
