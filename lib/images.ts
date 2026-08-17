/** Intrinsic size of editorial page photos after 1200×800 source compress. */
export const PAGE_IMAGE_WIDTH = 1200;
export const PAGE_IMAGE_HEIGHT = 800;
export const PAGE_IMAGE_QUALITY = 70;

export const headingImageSizes = {
  full: "(max-width: 40rem) 100vw, 40rem",
  card: "(max-width: 48rem) 100vw, 33vw",
  hero: "(max-width: 48rem) 100vw, 72rem",
} as const;

export type HeadingImageLayout = keyof typeof headingImageSizes;
