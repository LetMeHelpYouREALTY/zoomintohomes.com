import { accessibilityFeatures } from "./features";
import { consultationRoles } from "./consultation";
import { clarkCountyVeteranExemptions, sampleFeatureSheet } from "./exemptions";
import {
  aboutCopy,
  accessibilityStatementCopy,
  accessibleHomesCopy,
  agingInPlaceCopy,
  contactCopy,
  featuresCopy,
  homeCopy,
  howItWorksCopy,
  referralPartnersCopy,
  veteransCopy,
  whatWeMeasureCopy,
} from "./pages";
import { processSteps } from "./process";
import { referralPartnerTypes } from "./partners";
import { pageImages } from "./page-images";
import { pageSeoEnhance } from "./seo-enhance";
import { resoAccessibilityFeatures } from "./reso-features";
import { pageMeta, siteIdentity } from "./site";
import { brandCopy } from "./brand";

function walk(value: unknown, output: string[]): void {
  if (typeof value === "string") {
    output.push(value);
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) walk(item, output);
    return;
  }
  if (value && typeof value === "object") {
    for (const item of Object.values(value)) walk(item, output);
  }
}

/** Flattened strings from content modules for the Fair Housing copy test. */
export function collectContentStrings(): string[] {
  const strings: string[] = [];
  walk(siteIdentity, strings);
  walk(pageMeta, strings);
  walk(brandCopy, strings);
  walk(accessibilityFeatures, strings);
  walk(resoAccessibilityFeatures, strings);
  walk(processSteps, strings);
  walk(referralPartnerTypes, strings);
  walk(homeCopy, strings);
  walk(howItWorksCopy, strings);
  walk(whatWeMeasureCopy, strings);
  walk(featuresCopy, strings);
  walk(accessibleHomesCopy, strings);
  walk(veteransCopy, strings);
  walk(agingInPlaceCopy, strings);
  walk(aboutCopy, strings);
  walk(accessibilityStatementCopy, strings);
  walk(contactCopy, strings);
  walk(referralPartnersCopy, strings);
  walk(consultationRoles, strings);
  walk(pageImages, strings);
  walk(pageSeoEnhance, strings);
  walk(clarkCountyVeteranExemptions, strings);
  walk(sampleFeatureSheet, strings);
  return strings.filter((value) => value.length > 0);
}
