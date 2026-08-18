import { describe, expect, it } from "vitest";
import {
  jpegDimensions,
  runSiteAudit,
  REALTOR_SLANG,
} from "./site-audit";
import { BUYER_SELLER_JARGON } from "./buyer-seller-language";
import { readFileSync, readdirSync, statSync } from "node:fs";
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

  it("puts a service explanation beside every page hero", () => {
    const hero = readFileSync(
      join(process.cwd(), "components/site/PageHero.tsx"),
      "utf8",
    );
    expect(hero).toContain("tour-hero-explanation");
    expect(hero).toContain("servicePoints");
  });

  it("uses the scheduler, not a lead form, on /contact", () => {
    const page = readFileSync(
      join(process.cwd(), "app/contact/page.tsx"),
      "utf8",
    );
    expect(page).toContain("RoutePageHero");
    expect(page).toContain("CalendlyInlineSection");
    expect(page).not.toContain("ConsultationForm");
    expect(page).not.toMatch(/<form\b/i);
  });

  it("shows Calendly by default and keeps forms off app pages", () => {
    const afterHero = readFileSync(
      join(process.cwd(), "components/site/AfterHeroWidgets.tsx"),
      "utf8",
    );
    expect(afterHero).toMatch(/showCalendly\s*=\s*true/);

    const appPages: string[] = [];
    const walk = (target: string) => {
      for (const entry of readdirSync(target)) {
        const full = join(target, entry);
        if (statSync(full).isDirectory()) walk(full);
        else if (full.endsWith("/page.tsx")) appPages.push(full);
      }
    };
    walk(join(process.cwd(), "app"));

    for (const file of appPages) {
      const rel = file.replace(`${process.cwd()}/`, "");
      const source = readFileSync(file, "utf8");
      expect(source, rel).not.toContain("ConsultationForm");
      expect(source, rel).not.toContain("LeadCaptureForm");
      expect(source, rel).not.toMatch(/<form\b/i);
      expect(source, rel).not.toMatch(/type\s*=\s*["']email["']/i);
    }
  });

  it("uses navy and champagne gold instead of teal", () => {
    const css = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");
    expect(css).toMatch(/--navy:\s*#0e1a2b/i);
    expect(css).toMatch(/--gold:\s*#c4a574/i);
    expect(css).not.toMatch(/#0f4c4f/i);
    expect(css).not.toMatch(/#14666b/i);
  });

  it("keeps the homepage to one hero CTA, three listings, and a later scheduler", () => {
    const home = readFileSync(join(process.cwd(), "app/page.tsx"), "utf8");
    expect(home).toContain("singleCta");
    expect(home).toContain('listingDensity="three"');
    expect(home).toContain("CalendlyInlineSection");
    expect(home).toContain('showCalendly={false}');

    const hero = readFileSync(
      join(process.cwd(), "components/site/PageHero.tsx"),
      "utf8",
    );
    expect(hero).not.toContain("Book a time");

    const widgets = readFileSync(
      join(process.cwd(), "content/widgets.ts"),
      "utf8",
    );
    expect(widgets).toContain("primary_color");
    expect(widgets).toContain("0e1a2b");
  });
});
