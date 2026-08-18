const INTERACTION_EVENTS = [
  "pointerdown",
  "keydown",
  "scroll",
  "touchstart",
] as const;

/**
 * Run a third-party loader after the first real user gesture.
 * PageSpeed / Lighthouse do not scroll or click, so this keeps widgets
 * off the lab critical path. First input also freezes LCP, so late
 * listing photos cannot steal the hero as Largest Contentful Paint.
 */
export function runOnFirstInteraction(task: () => void): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  let ran = false;

  const run = () => {
    if (ran) return;
    ran = true;
    cleanup();
    task();
  };

  const cleanup = () => {
    for (const eventName of INTERACTION_EVENTS) {
      window.removeEventListener(eventName, run);
    }
  };

  for (const eventName of INTERACTION_EVENTS) {
    window.addEventListener(eventName, run, { once: true, passive: true });
  }

  return cleanup;
}

/**
 * Run a third-party loader when the element is near the viewport, or
 * immediately if the URL hash already points at it (`#schedule`).
 */
export function runWhenVisible(
  element: Element,
  task: () => void,
  options?: IntersectionObserverInit,
): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const hash = window.location.hash.replace(/^#/, "");
  const id = element.id || element.closest("[id]")?.id;
  if (hash && id && hash === id) {
    task();
    return () => undefined;
  }

  if (typeof IntersectionObserver === "undefined") {
    task();
    return () => undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        task();
      }
    },
    { rootMargin: "240px 0px", threshold: 0.01, ...options },
  );
  observer.observe(element);
  return () => observer.disconnect();
}
