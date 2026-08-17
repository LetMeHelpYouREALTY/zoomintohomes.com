export const REALSCOUT_WIDGET_SRC =
  "https://em.realscout.com/widgets/realscout-web-components.umd.js";

const SCRIPT_FLAG = "data-home-search-widget";

/**
 * Inject the office-listings script once. Custom elements already in the DOM
 * upgrade when the module defines them — do not remount widget HTML.
 */
export function ensureRealScoutScript(): void {
  if (typeof document === "undefined") return;
  if (document.querySelector(`script[${SCRIPT_FLAG}]`)) return;

  const script = document.createElement("script");
  script.src = REALSCOUT_WIDGET_SRC;
  script.type = "module";
  script.async = true;
  script.setAttribute(SCRIPT_FLAG, "true");
  document.body.appendChild(script);
}
