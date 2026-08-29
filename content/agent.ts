/**
 * Published agent portraits for Zoom Into Homes.
 * Gene Boyle is the Zoom practice lead. Dr. Jan Duffy is the Nevada
 * brokerage colleague who runs Las Vegas Valley showings and compliance.
 */
export const geneBoylePortrait = {
  id: "gene" as const,
  src: "/images/agent/gene-boyle.jpg",
  squareSrc: "/images/agent/gene-boyle-square.jpg",
  avatarSrc: "/images/agent/gene-boyle-avatar.jpg",
  alt: "Dr. Gene Boyle of Berkshire Hathaway HomeServices Nevada Properties, wearing a dark suit and gold tie",
  shortAlt: "Dr. Gene Boyle",
  name: "Dr. Gene Boyle",
  license: "California DRE #02282581",
  role: "Video-first touring and cross-market coordination.",
  width: 828,
  height: 1035,
  square: 800,
} as const;

export const janDuffyPortrait = {
  id: "jan" as const,
  src: "/images/agent/jan-duffy-square.png",
  squareSrc: "/images/agent/jan-duffy-square.png",
  avatarSrc: "/images/agent/jan-duffy-avatar.png",
  alt: "Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, holding a phone",
  shortAlt: "Dr. Jan Duffy",
  name: "Dr. Jan Duffy",
  license: "License S.0197614.LLC",
  role: "Las Vegas Valley showings and Nevada brokerage compliance.",
  width: 800,
  height: 800,
  square: 800,
} as const;

export const practicePortraits = [geneBoylePortrait, janDuffyPortrait] as const;

export type PracticePortrait = (typeof practicePortraits)[number];

/** @deprecated Use geneBoylePortrait. Kept for existing imports. */
export const agentPortrait = geneBoylePortrait;
