"use client";

import { useEffect } from "react";
import {
  CALENDLY_BRAND_COLOR,
  CALENDLY_URL,
} from "@/content/widgets";
import { ensureCalendlyAssets } from "@/components/calendly/loadCalendly";
import "./types";

type CalendlyBadgeProps = {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
};

/**
 * Floating Calendly badge. Assets load on demand after first paint.
 */
export default function CalendlyBadge({
  url = CALENDLY_URL,
  text = "Schedule a video tour",
  color = CALENDLY_BRAND_COLOR,
  textColor = "#ffffff",
  branding = true,
}: CalendlyBadgeProps) {
  useEffect(() => {
    let cancelled = false;

    const initBadge = () => {
      if (cancelled || !window.Calendly) return;
      window.Calendly.initBadgeWidget({
        url,
        text,
        color,
        textColor,
        branding,
      });
    };

    const start = window.setTimeout(() => {
      void ensureCalendlyAssets()
        .then(initBadge)
        .catch(() => undefined);
    }, 2500);

    return () => {
      cancelled = true;
      window.clearTimeout(start);
    };
  }, [url, text, color, textColor, branding]);

  return null;
}
