import Image from "next/image";
import type { PageImage } from "@/content/types";
import {
  PAGE_IMAGE_QUALITY,
  headingImageSizes,
  type HeadingImageLayout,
} from "@/lib/images";

type HeadingImageProps = {
  image: PageImage;
  layout?: HeadingImageLayout;
  priority?: boolean;
};

export default function HeadingImage({
  image,
  layout = "full",
  priority = false,
}: HeadingImageProps) {
  return (
    <figure className="heading-image">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={headingImageSizes[layout]}
        quality={PAGE_IMAGE_QUALITY}
        priority={priority}
      />
    </figure>
  );
}
