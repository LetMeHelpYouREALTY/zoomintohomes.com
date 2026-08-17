import { describe, expect, it } from "vitest";
import {
  BUYER_SELLER_JARGON,
  buyerSellerJargonHits,
  removedStatementHits,
} from "./buyer-seller-language";

describe("buyer/seller plain language", () => {
  it("flags the footer statute line a buyer would not understand", () => {
    expect(
      buyerSellerJargonHits(
        "Advertising identification under NRS 645.315 and NAC 645.610. Features are measured. People are not described. Building attributes are facts; personas are not.",
      ),
    ).toEqual(
      expect.arrayContaining([
        "advertising identification",
        "nrs 645",
        "nac 645",
        "people are not described",
        "building attributes",
        "personas",
      ]),
    );
  });

  it("detects the removed footer statement in source", () => {
    expect(
      removedStatementHits(
        "Advertising identification under NRS 645.315 and NAC 645.610. Features are measured. People are not described. Building attributes are facts; personas are not.",
      ),
    ).toHaveLength(3);
  });

  it("allows a buyer-plain measurement sentence", () => {
    expect(
      buyerSellerJargonHits(
        "We write down doorway widths, step heights, and shower curbs.",
      ),
    ).toEqual([]);
  });

  it("keeps the jargon list focused on buyer/seller confusion", () => {
    expect(BUYER_SELLER_JARGON).toContain("advertising identification");
    expect(BUYER_SELLER_JARGON).toContain("personas");
    expect(BUYER_SELLER_JARGON.length).toBeGreaterThan(8);
  });
});
