"use client";

import { useEffect } from "react";
import {
  CALENDLY_BRAND_COLOR,
  CALENDLY_URL,
} from "@/content/widgets";
import "./types";

type CalendlyBadgeProps = {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
};

/**
 * Floating Calendly badge. Script + CSS load once from root layout.
 */
export default function CalendlyBadge({
  url = CALENDLY_URL,
  text = "Schedule a virtual tour",
  color = CALENDLY_BRAND_COLOR,
  textColor = "#ffffff",
  branding = true,
}: CalendlyBadgeProps) {
  useEffect(() => {
    const initBadge = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url,
          text,
          color,
          textColor,
          branding,
        });
      }
    };

    if (window.Calendly) {
      initBadge();
      return;
    }

    const timer = window.setInterval(() => {
      if (window.Calendly) {
        window.clearInterval(timer);
        initBadge();
      }
    }, 150);

    window.setTimeout(() => window.clearInterval(timer), 10000);
    return () => window.clearInterval(timer);
  }, [url, text, color, textColor, branding]);

  return null;
}
