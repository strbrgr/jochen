import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
};

export default function ImageWithCaption({
  src,
  alt,
  width = 800,
  height = 500,
  caption,
}: Props) {
  return (
    <figure className="mb-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      {caption && (
        <figcaption className="text-sm text-gray-500 text-right mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
