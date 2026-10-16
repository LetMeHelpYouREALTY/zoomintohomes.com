import { afterEach, describe, expect, it, vi } from "vitest";
import { runOnFirstInteraction, runWhenVisible } from "./load-on-interaction";

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

describe("runWhenVisible", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    window.location.hash = "";
  });

  it("runs immediately when the URL hash matches the element id", () => {
    window.location.hash = "#schedule";
    const task = vi.fn();
    const element = document.createElement("section");
    element.id = "schedule";
    const stop = runWhenVisible(element, task);
    expect(task).toHaveBeenCalledTimes(1);
    stop();
  });

  it("observes the element when the hash does not match", () => {
    const observe = vi.fn();
    const disconnect = vi.fn();
    class FakeObserver {
      observe = observe;
      disconnect = disconnect;
      unobserve = vi.fn();
    }
    vi.stubGlobal("IntersectionObserver", FakeObserver);

    const task = vi.fn();
    const element = document.createElement("div");
    const stop = runWhenVisible(element, task);
    expect(task).not.toHaveBeenCalled();
    expect(observe).toHaveBeenCalledWith(element);
    stop();
    expect(disconnect).toHaveBeenCalled();
  });
});
