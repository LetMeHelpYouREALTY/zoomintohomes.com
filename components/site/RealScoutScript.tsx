"use client";

import { useEffect } from "react";
import { ensureRealScoutScript } from "@/components/site/loadRealScout";
import { runOnFirstInteraction } from "@/lib/load-on-interaction";

/**
 * Loads the listings widget script once, after the first tap/scroll/key.
 * Keep widget markup as static HTML in RealScoutCarousel.
 */
export default function RealScoutScript() {
  useEffect(() => runOnFirstInteraction(ensureRealScoutScript), []);
  return null;
}
