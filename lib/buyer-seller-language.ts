/**
 * Visible copy should read like a talk with a home buyer or home seller.
 * Internal Fair Housing reminders, statute citations, and listing-desk jargon
 * stay out of buyer/seller UI. License name-and-number still belong in the
 * footer; the statute number does not.
 */

export const BUYER_SELLER_JARGON: string[] = [
  "advertising identification",
  "nrs 645",
  "nac 645",
  "personas",
  "people are not described",
  "building attributes",
  "copy standard",
  "listing notes",
  "pre-verify",
  "provenance",
  "fair housing rule on this site",
  "industry data dictionary",
  "dimensional data",
  "bodies constrain",
  "evidence level",
  "reso glossary",
];

/** Returns each buyer/seller jargon phrase found in `text`. */
export function buyerSellerJargonHits(text: string): string[] {
  const lower = ` ${text.toLowerCase()} `;
  return BUYER_SELLER_JARGON.filter((phrase) => lower.includes(phrase));
}
