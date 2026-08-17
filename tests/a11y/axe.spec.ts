import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/virtual-tour-process",
  "/what-we-measure",
  "/accessible-homes",
  "/glossary",
  "/va-sah-grant-nevada",
  "/va-sha-grant-nevada",
  "/clark-county-disabled-veteran-property-tax-exemption",
  "/aging-in-place",
  "/referral-partners",
  "/referral-partners/one-pager",
  "/examples/feature-sheet",
  "/examples/walkthrough",
  "/henderson",
  "/summerlin",
  "/about",
  "/contact",
  "/accessibility-statement",
  "/privacy",
  "/terms",
];

for (const path of routes) {
  test(`axe WCAG 2.2 AA: ${path}`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}
