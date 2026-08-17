"use client";

import { useEffect } from "react";
import {
  CALENDLY_BRAND_COLOR,
  CALENDLY_URL,
} from "@/content/widgets";
import { ensureCalendlyAssets } from "@/components/calendly/loadCalendly";
import { runOnFirstInteraction } from "@/lib/load-on-interaction";
import "./types";

type CalendlyBadgeProps = {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
};

/**
 * Floating schedule badge. Assets load after the first tap/scroll so they
 * stay off the PageSpeed lab path.
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

    const stop = runOnFirstInteraction(() => {
      if (cancelled) return;
      void ensureCalendlyAssets()
        .then(initBadge)
        .catch(() => undefined);
    });

    return () => {
      cancelled = true;
      stop();
    };
  }, [url, text, color, textColor, branding]);

  return null;
}
