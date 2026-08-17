import Image from "next/image";
import type { PageImage } from "@/content/types";
import AfterHeroWidgets from "@/components/site/AfterHeroWidgets";
import { PAGE_IMAGE_QUALITY, headingImageSizes } from "@/lib/images";

type PageHeroProps = {
  image: PageImage;
  showWidgets?: boolean;
};

export default function PageHero({ image, showWidgets = true }: PageHeroProps) {
  return (
    <>
      <figure className="page-hero">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
          quality={PAGE_IMAGE_QUALITY}
          sizes={headingImageSizes.hero}
        />
      </figure>
      {showWidgets ? <AfterHeroWidgets calendlyId="schedule-hero" /> : null}
    </>
  );
}
