import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/how-it-works",
  "/accessibility-features",
  "/veterans",
  "/aging-in-place",
  "/referral-partners",
  "/about",
  "/contact",
  "/accessibility-statement",
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
