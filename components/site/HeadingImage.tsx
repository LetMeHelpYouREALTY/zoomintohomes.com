import Image from "next/image";
import type { PageImage } from "@/content/types";

type HeadingImageProps = {
  image: PageImage;
};

export default function HeadingImage({ image }: HeadingImageProps) {
  return (
    <figure className="heading-image">
      <Image
        src={image.src}
        alt={image.alt}
        width={1200}
        height={900}
        sizes="(max-width: 40rem) 100vw, 40rem"
      />
    </figure>
  );
}
