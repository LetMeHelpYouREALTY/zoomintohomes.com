"use client";

import { useEffect, useRef } from "react";
import { CALENDLY_URL } from "@/content/widgets";
import "./types";

type CalendlyWidgetProps = {
  url?: string;
  minWidth?: string;
  height?: string;
};

/**
 * Inline Calendly embed. Script loads once from root layout — do not load it here.
 */
export default function CalendlyWidget({
  url = CALENDLY_URL,
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = widgetRef.current;
    if (!parent) return;

    let cancelled = false;
    let pollId = 0;

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

    if (window.Calendly) {
      initWidget();
    } else {
      pollId = window.setInterval(() => {
        if (window.Calendly) {
          window.clearInterval(pollId);
          initWidget();
        }
      }, 100);
      window.setTimeout(() => window.clearInterval(pollId), 10000);
    }

    return () => {
      cancelled = true;
      if (pollId) window.clearInterval(pollId);
    };
  }, [url, minWidth, height]);

  return <div ref={widgetRef} style={{ minWidth, height, width: "100%" }} />;
}
