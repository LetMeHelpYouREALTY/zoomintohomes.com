"use client";

import { calendlyEmbedUrl } from "@/content/widgets";
import { ensureCalendlyAssets } from "@/components/calendly/loadCalendly";
import "./types";

type CalendlyButtonProps = {
  url?: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
};

/** Popup scheduler. Loads booking assets on click, then opens the overlay. */
export default function CalendlyButton({
  url = calendlyEmbedUrl(),
  text = "Schedule a virtual tour",
  className = "button",
  children,
}: CalendlyButtonProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    void ensureCalendlyAssets()
      .then(() => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({ url });
          return;
        }
        window.open(url, "_blank", "noopener,noreferrer");
      })
      .catch(() => {
        window.open(url, "_blank", "noopener,noreferrer");
      });
  }

  return (
    <a href={url} onClick={handleClick} className={className}>
      {children || text}
    </a>
  );
}
