"use client";

import { CALENDLY_URL } from "@/content/widgets";
import "./types";

type CalendlyButtonProps = {
  url?: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
};

/** Popup scheduler. Relies on Calendly script from root layout. */
export default function CalendlyButton({
  url = CALENDLY_URL,
  text = "Schedule a virtual tour",
  className = "button",
  children,
}: CalendlyButtonProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <a href={url} onClick={handleClick} className={className}>
      {children || text}
    </a>
  );
}
