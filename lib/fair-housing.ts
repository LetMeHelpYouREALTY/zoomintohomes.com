/**
 * First-pass Fair Housing copy safety net, not a legal review.
 * Final copy clears the BHHS compliance desk before it is treated as approved advertising.
 *
 * Disability is a protected class. Describe building features. Do not describe
 * who should live in a property.
 */

export const BANNED_PHRASES: string[] = [
  "perfect for",
  "ideal for",
  "suitable for",
  "great for someone who",
  "handicapped",
  "handicap",
  "wheelchair-bound",
  "confined to",
  "suffers from",
  "afflicted",
  "able-bodied",
  "normal",
  "walking distance",
  "safe neighborhood",
  "good schools",
  "exclusive",
  "integrated",
  "restricted",
];

/** Returns each banned phrase found in `text` (case-insensitive substring match). */
export function checkCopy(text: string): string[] {
  const lower = text.toLowerCase();
  const hits: string[] = [];
  for (const phrase of BANNED_PHRASES) {
    if (lower.includes(phrase)) {
      hits.push(phrase);
    }
  }
  return hits;
}
