import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import {
  HeaderFive,
  HeaderFour,
  HeaderOne,
  HeaderSix,
  HeaderThree,
  HeaderTwo,
} from "./app/components/typography";
import ImageWithCaption from "./app/components/image-with-caption";

const components = {
  h1: ({ children }) => <HeaderOne text={children} />,
  h2: ({ children }) => <HeaderTwo text={children} />,
  h3: ({ children }) => <HeaderThree text={children} />,
  h4: ({ children }) => <HeaderFour text={children} />,
  h5: ({ children }) => <HeaderFive text={children} />,
  h6: ({ children }) => <HeaderSix text={children} />,
  ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
  li: ({ children }) => <li className="ml-4">{children}</li>,
  img: ({ src, alt }) => (
    <ImageWithCaption src={src || ""} alt={alt || ""} caption={alt} />
  ),
  p: ({ children }) => <p className="mb-4">{children}</p>,
  a: ({ href, children }) => {
    const isInternal = href?.startsWith("/");
    return (
      <a
        href={href}
        {...(!isInternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        className="underline decoration-[1px]"
      >
        {children}
      </a>
    );
  },
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
