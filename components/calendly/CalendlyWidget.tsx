"use client";

import { useEffect, useRef } from "react";
import { calendlyEmbedUrl } from "@/content/widgets";
import { ensureCalendlyAssets } from "@/components/calendly/loadCalendly";
import { runWhenVisible } from "@/lib/load-on-interaction";
import "./types";

type CalendlyWidgetProps = {
  url?: string;
  minWidth?: string;
  height?: string;
};

/**
 * Inline Calendly embed. CSS/JS load when the block is near the viewport
 * so the iframe stays off the PageSpeed lab path.
 */
export default function CalendlyWidget({
  url = calendlyEmbedUrl(),
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = widgetRef.current;
    if (!host) return;

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

    const stop = runWhenVisible(host, () => {
      void ensureCalendlyAssets()
        .then(initWidget)
        .catch(() => undefined);
    });

    return () => {
      cancelled = true;
      stop();
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
