import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { leftoverHostPrefixes, leftoverHostRedirects } from "../redirects/legacy-host-content.js";
import { helpNav, primaryNav } from "@/content/site";
import { indexablePaths } from "./site-url";

const wordpressRedirects = readFileSync(resolve("redirects/legacy-wordpress.js"), "utf8");
const nextConfig = readFileSync(resolve("next.config.js"), "utf8");

describe("site reputation: leftover host-content redirects (Aug 2026 SRP)", () => {
  it("does not keep leftover host paths in the first-party indexable set", () => {
    const indexed = new Set(indexablePaths);
    for (const prefix of leftoverHostPrefixes) {
      expect(indexed.has(prefix)).toBe(false);
    }
  });

  it("301s leftover host paths onto first-party Zoom pages or heyberkshire.com", () => {
    expect(leftoverHostRedirects.length).toBeGreaterThan(10);
    for (const rule of leftoverHostRedirects) {
      expect(rule.permanent).toBe(true);
      const dest = rule.destination;
      if (dest.startsWith("https://www.heyberkshire.com")) continue;
      expect(dest.startsWith("/")).toBe(true);
      expect(leftoverHostPrefixes.some((prefix) => dest === prefix || dest.startsWith(`${prefix}/`))).toBe(
        false,
      );
      if (dest !== "/") {
        expect(indexablePaths.includes(dest)).toBe(true);
      }
    }
  });

  it("does not 301 WordPress leftovers onto leftover host paths", () => {
    for (const prefix of leftoverHostPrefixes) {
      expect(wordpressRedirects).not.toContain(`destination: "${prefix}"`);
    }
  });

  it("loads leftover host redirects from next.config.js", () => {
    expect(nextConfig).toContain("leftoverHostRedirects");
    expect(nextConfig).toContain("legacy-host-content");
  });

  it("keeps leftover host paths out of first-party Zoom nav", () => {
    const navHrefs = [...primaryNav, ...helpNav].map((item) => item.href);
    for (const prefix of leftoverHostPrefixes) {
      expect(
        navHrefs.some((href) => href === prefix || href.startsWith(`${prefix}/`)),
      ).toBe(false);
    }
  });
});
