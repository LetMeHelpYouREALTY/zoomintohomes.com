import { accessibilityFeatures } from "./features";
import { consultationRoles } from "./consultation";
import {
  aboutCopy,
  accessibilityStatementCopy,
  agingInPlaceCopy,
  contactCopy,
  featuresCopy,
  homeCopy,
  howItWorksCopy,
  referralPartnersCopy,
  veteransCopy,
} from "./pages";
import { processSteps } from "./process";
import { referralPartnerTypes } from "./partners";
import { pageImages } from "./page-images";
import { pageSeoEnhance } from "./seo-enhance";
import { pageMeta, siteIdentity } from "./site";

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
  walk(accessibilityFeatures, strings);
  walk(processSteps, strings);
  walk(referralPartnerTypes, strings);
  walk(homeCopy, strings);
  walk(howItWorksCopy, strings);
  walk(featuresCopy, strings);
  walk(veteransCopy, strings);
  walk(agingInPlaceCopy, strings);
  walk(aboutCopy, strings);
  walk(accessibilityStatementCopy, strings);
  walk(contactCopy, strings);
  walk(referralPartnersCopy, strings);
  walk(consultationRoles, strings);
  walk(pageImages, strings);
  walk(pageSeoEnhance, strings);
  return strings.filter((value) => value.length > 0);
}
