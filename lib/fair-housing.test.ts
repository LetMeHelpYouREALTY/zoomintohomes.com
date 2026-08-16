import { describe, expect, it } from "vitest";
import { collectContentStrings } from "../content";
import { pageImages } from "../content/page-images";
import { BANNED_PHRASES, checkCopy } from "./fair-housing";

describe("checkCopy", () => {
  it("returns the banned phrase when present", () => {
    expect(checkCopy("Perfect for a first showing")).toEqual(["perfect for"]);
  });

  it("returns an empty array for clean copy", () => {
    expect(
      checkCopy("Zero-step entry with a 36 in. door clear width."),
    ).toEqual([]);
  });

  it("is case-insensitive", () => {
    expect(checkCopy("WHEELCHAIR-BOUND")).toEqual(["wheelchair-bound"]);
  });
});

describe("content Fair Housing scan", () => {
  it("has a non-empty banned list", () => {
    expect(BANNED_PHRASES.length).toBeGreaterThan(0);
  });

  it("does not contain banned phrases in content/*.ts strings", () => {
    const failures: string[] = [];
    for (const value of collectContentStrings()) {
      const hits = checkCopy(value);
      if (hits.length > 0) {
        failures.push(`${hits.join(", ")} → ${value}`);
      }
    }
    expect(failures).toEqual([]);
  });

  it("attaches seven images to each public route", () => {
    for (const set of Object.values(pageImages)) {
      expect(set.supporting).toHaveLength(6);
      expect(set.hero.src).toMatch(/\.jpg$/);
    }
    expect(Object.keys(pageImages)).toHaveLength(9);
  });
});
