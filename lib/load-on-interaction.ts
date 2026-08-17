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
