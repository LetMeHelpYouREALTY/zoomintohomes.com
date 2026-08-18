"use client";

import { useEffect, useRef } from "react";
import { calendlyEmbedUrl } from "@/content/widgets";
import { ensureCalendlyAssets } from "@/components/calendly/loadCalendly";
import "./types";

type CalendlyWidgetProps = {
  url?: string;
  minWidth?: string;
  height?: string;
};

/**
 * Inline Calendly embed. CSS/JS load when this widget mounts.
 */
export default function CalendlyWidget({
  url = calendlyEmbedUrl(),
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    let cancelled = false;

    const initWidget = () => {
      if (cancelled || !window.Calendly || !widgetRef.current) return;
      widgetRef.current.innerHTML = "";
      const widgetDiv = document.createElement("div");
      widgetDiv.className = "calendly-inline-widget";
      widgetDiv.setAttribute("data-url", url);
      widgetDiv.style.minWidth = minWidth;
      widgetDiv.style.height = height;
      widgetDiv.style.width = "100%";
      widgetRef.current.appendChild(widgetDiv);
      window.Calendly.initInlineWidget({
        url,
        parentElement: widgetDiv,
      });
    };

    void ensureCalendlyAssets()
      .then(initWidget)
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, [url, minWidth, height]);

  return (
    <div
      ref={widgetRef}
      className="calendly-host"
      style={{ minWidth, height, width: "100%", background: "#0E1A2B" }}
    />
  );
}
