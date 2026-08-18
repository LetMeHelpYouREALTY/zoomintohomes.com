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

  it("lets Vercel auto-detect Next.js instead of overriding Framework Settings", () => {
    const vercelJson = readFileSync(join(process.cwd(), "vercel.json"), "utf8");
    expect(vercelJson).not.toMatch(/"buildCommand"\s*:/);
    expect(vercelJson).not.toMatch(/"devCommand"\s*:/);
    expect(vercelJson).not.toMatch(/"framework"\s*:/);
    expect(vercelJson).not.toMatch(/"outputDirectory"\s*:/);
    expect(vercelJson).toContain('"/images/(.*)"');

    const pkg = JSON.parse(
      readFileSync(join(process.cwd(), "package.json"), "utf8"),
    ) as { engines?: { node?: string } };
    expect(pkg.engines?.node).toBe("24.x");
    expect(readFileSync(join(process.cwd(), ".nvmrc"), "utf8").trim()).toBe(
      "24",
    );
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
    expect(page).not.toContain("ConsultationForm");
    expect(page).not.toMatch(/<form\b/i);
    const layout = readFileSync(join(process.cwd(), "app/layout.tsx"), "utf8");
    expect(layout).toContain("SiteCalendly");
  });

  it("keeps forms off app pages and Calendly after page content", () => {
    const afterHero = readFileSync(
      join(process.cwd(), "components/site/AfterHeroWidgets.tsx"),
      "utf8",
    );
    expect(afterHero).toMatch(/showCalendly\s*=\s*false/);
    expect(afterHero).toMatch(/listingDensity\s*=\s*"three"/);

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

  it("uses one hero CTA, three listings, and an after-content scheduler on every page", () => {
    const hero = readFileSync(
      join(process.cwd(), "components/site/PageHero.tsx"),
      "utf8",
    );
    expect(hero).toMatch(/singleCta = true/);
    expect(hero).toMatch(/listingDensity = "three"/);
    expect(hero).not.toContain("Book a time");
    expect(hero).toContain('primaryHref = "#schedule"');

    const layout = readFileSync(join(process.cwd(), "app/layout.tsx"), "utf8");
    expect(layout).toContain("SiteCalendly");

    const widgets = readFileSync(
      join(process.cwd(), "content/widgets.ts"),
      "utf8",
    );
    expect(widgets).toContain("primary_color");
    expect(widgets).toContain("0e1a2b");
  });
});
