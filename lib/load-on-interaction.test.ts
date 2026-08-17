import { afterEach, describe, expect, it, vi } from "vitest";
import { runOnFirstInteraction } from "./load-on-interaction";

describe("runOnFirstInteraction", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("runs the task once on the first scroll", () => {
    const task = vi.fn();
    const stop = runOnFirstInteraction(task);

    window.dispatchEvent(new Event("scroll"));
    window.dispatchEvent(new Event("scroll"));
    window.dispatchEvent(new Event("pointerdown"));

    expect(task).toHaveBeenCalledTimes(1);
    stop();
  });

  it("does not run until an interaction fires", () => {
    const task = vi.fn();
    const stop = runOnFirstInteraction(task);
    expect(task).not.toHaveBeenCalled();
    stop();
    window.dispatchEvent(new Event("scroll"));
    expect(task).not.toHaveBeenCalled();
  });
});
