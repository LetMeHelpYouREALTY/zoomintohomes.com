import { describe, expect, it } from "vitest";
import {
  jpegDimensions,
  runSiteAudit,
  REALTOR_SLANG,
} from "./site-audit";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("site audit", () => {
  it("knows the realtor-slang list", () => {
    expect(REALTOR_SLANG).toContain("realscout");
    expect(REALTOR_SLANG).toContain("referral partner");
  });

  it("reads JPEG dimensions from editorial heroes", () => {
    const buffer = readFileSync(
      join(process.cwd(), "public/images/pages/home/hero.jpg"),
    );
    expect(jpegDimensions(buffer)).toEqual({ width: 1200, height: 800 });
  });

  it("passes slang, image, schema, and performance gates", () => {
    const findings = runSiteAudit().filter((item) => item.severity === "error");
    expect(findings, findings.map((item) => item.message).join("\n")).toEqual([]);
  });
});
