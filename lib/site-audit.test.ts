import { describe, expect, it } from "vitest";
import {
  jpegDimensions,
  runSiteAudit,
  REALTOR_SLANG,
} from "./site-audit";
import { BUYER_SELLER_JARGON } from "./buyer-seller-language";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("site audit", () => {
  it("knows the realtor-slang list", () => {
    expect(REALTOR_SLANG).toContain("realscout");
    expect(REALTOR_SLANG).toContain("referral partner");
  });

  it("knows buyer/seller jargon a homebuyer would not understand", () => {
    expect(BUYER_SELLER_JARGON).toContain("advertising identification");
    expect(BUYER_SELLER_JARGON).toContain("personas");
    expect(BUYER_SELLER_JARGON).toContain("nrs 645");
  });

  it("reads JPEG dimensions from editorial heroes", () => {
    const buffer = readFileSync(
      join(process.cwd(), "public/images/pages/home/hero.jpg"),
    );
    expect(jpegDimensions(buffer)).toEqual({ width: 1200, height: 800 });
  });

  it("passes slang, buyer/seller language, image, schema, and performance gates", () => {
    const findings = runSiteAudit().filter((item) => item.severity === "error");
    expect(findings, findings.map((item) => item.message).join("\n")).toEqual([]);
  });

  it("keeps the home-search widget off the layout critical path", () => {
    const layout = readFileSync(join(process.cwd(), "app/layout.tsx"), "utf8");
    expect(layout).not.toContain("realscout-web-components.umd.js");
    expect(layout).not.toContain('strategy="afterInteractive"');
    expect(layout).toContain("RealScoutScript");
  });

  it("puts a service explanation beside the homepage hero", () => {
    const hero = readFileSync(
      join(process.cwd(), "components/site/TourHero.tsx"),
      "utf8",
    );
    expect(hero).toContain("tour-hero-explanation");
    expect(hero).toContain("servicePoints");
  });
});
