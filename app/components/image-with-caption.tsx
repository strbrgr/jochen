import Image from "next/image";

enum ImageType {
  Square,
  Vertical,
  Horizontal
}

type Props = {
  src: string;
  alt: string;
  caption?: string;
  type: ImageType,
  priority: boolean,
};

function ImageWithCaption({
  src,
  alt,
  type,
  priority = false,
  caption,
}: Props) {
  switch (type) {
    case ImageType.Square:
      return (
        <figure className="mb-6">
          <Image className="rounded-sm mx-auto" src={src} alt={alt} width={500} height={500} placeholder="blur" priority={priority} />
          {caption && (
            <figcaption className="text-sm text-gray-500 text-center mt-2">
              {caption}
            </figcaption>
          )}
        </figure>
      )
    case ImageType.Vertical:
      return (
        <figure className="mb-6">
          <Image className="rounded-sm mx-auto" src={src} alt={alt} width={375} height={500} placeholder="blur" priority={priority} />
          {caption && (
            <figcaption className="text-sm text-gray-500 text-center mt-2">
              {caption}
            </figcaption>
          )}
        </figure>
      )
    case ImageType.Horizontal:
      return (
        <figure className="mb-6">
          <Image className="rounded-sm mx-auto" src={src} alt={alt} width={800} height={600} placeholder="blur" priority={priority} />
          {caption && (
            <figcaption className="text-sm text-gray-500 text-center mt-2">
              {caption}
            </figcaption>
          )}
        </figure>
      )
  }
}

export { ImageType, ImageWithCaption }
