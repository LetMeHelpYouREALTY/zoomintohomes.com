import Image from "next/image";
import type { PageImage } from "@/content/types";
import AfterHeroWidgets from "@/components/site/AfterHeroWidgets";

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
          width={1600}
          height={900}
          priority
          sizes="(max-width: 72rem) 100vw, 72rem"
        />
      </figure>
      {showWidgets ? <AfterHeroWidgets calendlyId="schedule-hero" /> : null}
    </>
  );
}
