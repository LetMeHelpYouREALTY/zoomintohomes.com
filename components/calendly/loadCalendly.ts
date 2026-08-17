const CALENDLY_CSS =
  "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS =
  "https://assets.calendly.com/assets/external/widget.js";

let calendlyScriptPromise: Promise<void> | null = null;

/**
 * Load Calendly CSS/JS on demand so they stay off the homepage critical path.
 */
export function ensureCalendlyAssets(): Promise<void> {
  if (typeof document === "undefined") {
    return Promise.resolve();
  }

  if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CALENDLY_CSS;
    document.head.appendChild(link);
  }

  if (window.Calendly) {
    return Promise.resolve();
  }

  if (calendlyScriptPromise) {
    return calendlyScriptPromise;
  }

  calendlyScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(
      `script[src="${CALENDLY_JS}"]`,
    ) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Calendly script failed to load")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_JS;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly script failed to load"));
    document.body.appendChild(script);
  });

  return calendlyScriptPromise;
}
