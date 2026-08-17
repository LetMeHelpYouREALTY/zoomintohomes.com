import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { pageImages } from "@/content/page-images";
import { pageSeoEnhance } from "@/content/seo-enhance";
import { siteIdentity } from "@/content/site";
import { buyerSellerJargonHits } from "@/lib/buyer-seller-language";
import { checkCopy } from "@/lib/fair-housing";
import {
  PAGE_IMAGE_HEIGHT,
  PAGE_IMAGE_WIDTH,
} from "@/lib/images";
import { buildOrganizationSchemas } from "@/lib/schema";
import { indexablePaths, SITE_HOST, SITE_ORIGIN } from "@/lib/site-url";

export type AuditFinding = {
  severity: "error" | "warning";
  area:
    | "slang"
    | "plain-language"
    | "images"
    | "seo"
    | "schema"
    | "performance";
  message: string;
};

/** Industry jargon buyers and sellers should not see in Zoom core UI. */
export const REALTOR_SLANG: string[] = [
  "realscout",
  "follow up boss",
  "referral partner",
  "feature sheet",
  "virtual-first",
  " idx",
  "idx ",
  " mls",
  "mls ",
  "mls,",
  "mls.",
  "reso ",
  "calendly",
];

const CORE_SCAN_ROOTS = [
  "content",
  "components/site",
  "app/page.tsx",
  "app/layout.tsx",
  "app/about",
  "app/contact",
  "app/virtual-tour-process",
  "app/what-we-measure",
  "app/accessible-homes",
  "app/glossary",
  "app/henderson",
  "app/summerlin",
  "app/va-sah-grant-nevada",
  "app/va-sha-grant-nevada",
  "app/clark-county-disabled-veteran-property-tax-exemption",
  "app/aging-in-place",
  "app/referral-partners",
  "app/accessibility-statement",
  "app/accessibility-features",
  "app/privacy",
  "app/terms",
  "app/examples",
  "app/how-it-works",
  "app/veterans",
] as const;

const SLANG_ALLOWLIST = [
  "content/widgets.ts",
  "content/reso-features.ts",
  "components/site/RealScoutCarousel.tsx",
  "components/site/RealScoutScript.tsx",
  "components/site/loadRealScout.ts",
  "components/site/AfterHeroWidgets.tsx",
  "components/site/TourHero.tsx",
];

/** Statute tables and measurement citations buyers can look up on purpose. */
const PLAIN_LANGUAGE_ALLOWLIST = [
  ...SLANG_ALLOWLIST,
  "content/exemptions.ts",
  "content/features.ts",
  "app/clark-county-disabled-veteran-property-tax-exemption",
];

const PUBLIC_PAGES = join(process.cwd(), "public/images/pages");
const MAX_PAGE_IMAGE_BYTES = 220_000;

function walkFiles(target: string, files: string[]): void {
  const abs = join(process.cwd(), target);
  if (!existsSync(abs)) return;
  const stat = statSync(abs);
  if (stat.isFile()) {
    files.push(abs);
    return;
  }
  for (const entry of readdirSync(abs)) {
    const next = join(abs, entry);
    const nextStat = statSync(next);
    if (nextStat.isDirectory()) {
      walkFiles(relative(process.cwd(), next), files);
      continue;
    }
    if (/\.(ts|tsx)$/.test(entry)) files.push(next);
  }
}

export function jpegDimensions(buffer: Buffer): { width: number; height: number } {
  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      throw new Error("Invalid JPEG marker");
    }
    const marker = buffer[offset + 1];
    if (marker === 0xd8 || marker === 0xd9) {
      offset += 2;
      continue;
    }
    const length = buffer.readUInt16BE(offset + 2);
    if (marker >= 0xc0 && marker <= 0xc3) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }
    offset += 2 + length;
  }
  throw new Error("JPEG size not found");
}

function quotedStrings(source: string): string[] {
  const values: string[] = [];
  const pattern = /(["'`])(?:\\.|(?!\1)[^\\])*?\1/g;
  let match: RegExpExecArray | null = pattern.exec(source);
  while (match) {
    values.push(match[0].slice(1, -1));
    match = pattern.exec(source);
  }
  return values;
}

function isIgnoredQuotedValue(value: string): boolean {
  if (/^https?:\/\//i.test(value)) return true;
  if (value.startsWith("@/")) return true;
  if (/^[a-z0-9-]*(realscout|calendly)[a-z0-9-]*$/i.test(value)) return true;
  if (/^[a-z0-9_-]+$/.test(value)) return true;
  return false;
}

function slangHits(text: string): string[] {
  const lower = ` ${text.toLowerCase()} `;
  return REALTOR_SLANG.filter((phrase) => lower.includes(phrase));
}

export function auditRealtorSlang(): AuditFinding[] {
  const findings: AuditFinding[] = [];
  const files: string[] = [];
  for (const root of CORE_SCAN_ROOTS) walkFiles(root, files);

  for (const file of files) {
    const rel = relative(process.cwd(), file).replaceAll("\\", "/");
    if (SLANG_ALLOWLIST.includes(rel)) continue;
    const source = readFileSync(file, "utf8");
    for (const value of quotedStrings(source)) {
      if (isIgnoredQuotedValue(value)) continue;
      const hits = slangHits(value);
      if (hits.length > 0) {
        findings.push({
          severity: "error",
          area: "slang",
          message: `${rel}: ${hits.join(", ")} → ${value.slice(0, 140)}`,
        });
      }
    }
  }

  return findings;
}

export function auditBuyerSellerLanguage(): AuditFinding[] {
  const findings: AuditFinding[] = [];
  const files: string[] = [];
  for (const root of CORE_SCAN_ROOTS) walkFiles(root, files);

  for (const file of files) {
    const rel = relative(process.cwd(), file).replaceAll("\\", "/");
    if (
      PLAIN_LANGUAGE_ALLOWLIST.some(
        (allowed) => rel === allowed || rel.startsWith(`${allowed}/`),
      )
    ) {
      continue;
    }
    const source = readFileSync(file, "utf8");
    for (const value of quotedStrings(source)) {
      if (isIgnoredQuotedValue(value)) continue;
      const hits = buyerSellerJargonHits(value);
      if (hits.length > 0) {
        findings.push({
          severity: "error",
          area: "plain-language",
          message: `${rel}: ${hits.join(", ")} → ${value.slice(0, 140)}`,
        });
      }
    }
  }

  return findings;
}

export function auditImages(): AuditFinding[] {
  const findings: AuditFinding[] = [];

  for (const [route, set] of Object.entries(pageImages)) {
    const images = [set.hero, ...set.supporting];
    if (set.supporting.length !== 6) {
      findings.push({
        severity: "error",
        area: "images",
        message: `${route}: expected 6 supporting images, got ${set.supporting.length}`,
      });
    }
    for (const image of images) {
      if (image.width !== PAGE_IMAGE_WIDTH || image.height !== PAGE_IMAGE_HEIGHT) {
        findings.push({
          severity: "error",
          area: "images",
          message: `${image.src}: declared ${image.width}x${image.height}, expected ${PAGE_IMAGE_WIDTH}x${PAGE_IMAGE_HEIGHT}`,
        });
      }
      if (!image.alt.trim() || image.alt.length < 24) {
        findings.push({
          severity: "error",
          area: "images",
          message: `${image.src}: alt is too short for image SEO`,
        });
      }
      const fhHits = checkCopy(image.alt);
      if (fhHits.length > 0) {
        findings.push({
          severity: "error",
          area: "images",
          message: `${image.src}: Fair Housing phrase in alt (${fhHits.join(", ")})`,
        });
      }
      const diskPath = join(process.cwd(), "public", image.src.replace(/^\//, ""));
      if (!existsSync(diskPath)) {
        findings.push({
          severity: "error",
          area: "images",
          message: `${image.src}: file missing`,
        });
        continue;
      }
      const buffer = readFileSync(diskPath);
      if (buffer.byteLength > MAX_PAGE_IMAGE_BYTES) {
        findings.push({
          severity: "error",
          area: "images",
          message: `${image.src}: ${buffer.byteLength} bytes exceeds ${MAX_PAGE_IMAGE_BYTES}`,
        });
      }
      try {
        const size = jpegDimensions(buffer);
        if (size.width !== PAGE_IMAGE_WIDTH || size.height !== PAGE_IMAGE_HEIGHT) {
          findings.push({
            severity: "error",
            area: "images",
            message: `${image.src}: file is ${size.width}x${size.height}, expected ${PAGE_IMAGE_WIDTH}x${PAGE_IMAGE_HEIGHT}`,
          });
        }
      } catch (error) {
        findings.push({
          severity: "error",
          area: "images",
          message: `${image.src}: ${error instanceof Error ? error.message : "unreadable JPEG"}`,
        });
      }
    }
  }

  if (existsSync(PUBLIC_PAGES)) {
    for (const page of readdirSync(PUBLIC_PAGES)) {
      const dir = join(PUBLIC_PAGES, page);
      if (!statSync(dir).isDirectory()) continue;
      for (const file of readdirSync(dir)) {
        if (!file.endsWith(".jpg")) continue;
        const full = join(dir, file);
        const buffer = readFileSync(full);
        const size = jpegDimensions(buffer);
        if (size.width !== PAGE_IMAGE_WIDTH || size.height !== PAGE_IMAGE_HEIGHT) {
          findings.push({
            severity: "error",
            area: "images",
            message: `orphan size ${relative(process.cwd(), full)} is ${size.width}x${size.height}`,
          });
        }
      }
    }
  }

  return findings;
}

export function auditSeoAndSchema(): AuditFinding[] {
  const findings: AuditFinding[] = [];

  if (SITE_ORIGIN !== "https://www.zoomintohomes.com") {
    findings.push({
      severity: "error",
      area: "seo",
      message: `SITE_ORIGIN is ${SITE_ORIGIN}, expected https://www.zoomintohomes.com`,
    });
  }
  if (SITE_HOST !== "www.zoomintohomes.com") {
    findings.push({
      severity: "error",
      area: "seo",
      message: `SITE_HOST is ${SITE_HOST}`,
    });
  }
  if (indexablePaths.length !== 22) {
    findings.push({
      severity: "error",
      area: "seo",
      message: `sitemap has ${indexablePaths.length} paths, expected 22`,
    });
  }
  if (!siteIdentity.phoneDisplay.includes("222-1964")) {
    findings.push({
      severity: "error",
      area: "seo",
      message: `CTA phone is ${siteIdentity.phoneDisplay}, expected (702) 222-1964`,
    });
  }

  const schemas = buildOrganizationSchemas();
  const types = schemas.map((item) => String(item["@type"]));
  for (const required of ["RealEstateAgent", "Organization", "WebSite", "ImageObject"]) {
    if (!types.includes(required)) {
      findings.push({
        severity: "error",
        area: "schema",
        message: `missing ${required} in buildOrganizationSchemas()`,
      });
    }
  }

  for (const [page, enhance] of Object.entries(pageSeoEnhance)) {
    if (enhance.faqs.length < 3) {
      findings.push({
        severity: "error",
        area: "schema",
        message: `${page}: need at least 3 FAQs for AEO/FAQPage`,
      });
    }
    if (enhance.answerBlock.split(/\s+/).length < 20) {
      findings.push({
        severity: "warning",
        area: "schema",
        message: `${page}: answerBlock is short for GEO extraction`,
      });
    }
  }

  return findings;
}

export function auditPerformanceTraps(): AuditFinding[] {
  const findings: AuditFinding[] = [];
  const layout = readFileSync(join(process.cwd(), "app/layout.tsx"), "utf8");
  if (layout.includes("assets.calendly.com/assets/external/widget.css")) {
    findings.push({
      severity: "error",
      area: "performance",
      message: "Root layout still loads Calendly CSS in the document head",
    });
  }
  if (layout.includes("assets.calendly.com/assets/external/widget.js")) {
    findings.push({
      severity: "error",
      area: "performance",
      message: "Root layout still loads Calendly JS on every page",
    });
  }
  if (layout.includes("realscout-web-components.umd.js")) {
    findings.push({
      severity: "error",
      area: "performance",
      message:
        "Root layout still loads the home-search widget script on the critical path",
    });
  }
  if (layout.includes('strategy="afterInteractive"')) {
    findings.push({
      severity: "error",
      area: "performance",
      message:
        "Root layout still uses afterInteractive for a third-party script",
    });
  }

  const footer = readFileSync(
    join(process.cwd(), "components/site/SiteFooter.tsx"),
    "utf8",
  );
  if (footer.includes("CalendlyInlineSection")) {
    findings.push({
      severity: "error",
      area: "performance",
      message: "Footer still embeds a full Calendly iframe",
    });
  }

  const nextConfig = readFileSync(join(process.cwd(), "next.config.js"), "utf8");
  if (nextConfig.includes("3840")) {
    findings.push({
      severity: "error",
      area: "performance",
      message: "next.config.js still allows 3840px image variants",
    });
  }
  if (/transpileClientSDK:\s*true/.test(nextConfig)) {
    findings.push({
      severity: "error",
      area: "performance",
      message: "Sentry still transpiles the client SDK for IE11",
    });
  }

  const sentryClient = readFileSync(
    join(process.cwd(), "sentry.client.config.ts"),
    "utf8",
  );
  if (sentryClient.includes("replayIntegration")) {
    findings.push({
      severity: "error",
      area: "performance",
      message: "Sentry Session Replay is still bundled on every page",
    });
  }

  return findings;
}

export function runSiteAudit(): AuditFinding[] {
  return [
    ...auditRealtorSlang(),
    ...auditBuyerSellerLanguage(),
    ...auditImages(),
    ...auditSeoAndSchema(),
    ...auditPerformanceTraps(),
  ];
}

export function formatAuditReport(findings: AuditFinding[]): string {
  if (findings.length === 0) {
    return "Site audit passed: slang, buyer/seller language, images, schema, and performance traps are clean.";
  }
  return findings
    .map((finding) => `[${finding.severity.toUpperCase()}] ${finding.area}: ${finding.message}`)
    .join("\n");
}
