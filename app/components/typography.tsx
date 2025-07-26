import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeaderTag = `h${HeaderLevel}`;

type HeaderProps = {
  text: string;
  className?: string;
} & ComponentPropsWithoutRef<HeaderTag>;

function Header({
  level,
  text,
  className,
  ...rest
}: HeaderProps & { level: HeaderLevel }) {
  const Tag = `h${level}` as HeaderTag;

  const baseStyles: Record<HeaderLevel, string> = {
    1: "mb-2 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight",
    2: "mb-2 text-xl md:text-2xl lg:text-3xl font-semibold leading-snug tracking-tight",
    3: "mb-1 text-lg md:text-xl lg:text-2xl font-semibold leading-snug tracking-tight",
    4: "mb-1 text-lg md:text-xl lg:text-2xl font-semibold leading-snug tracking-tight",
    5: "mb-1 text-base md:text-lg lg:text-xl font-medium leading-snug tracking-tight",
    6: "mb-1 text-sm md:text-base lg:text-lg font-medium leading-snug tracking-tight",
  };

  return (
    <Tag className={cn(baseStyles[level], className)} {...rest}>
      {text}
    </Tag>
  );
}

const HeaderOne = (props: HeaderProps) => <Header {...props} level={1} />;
const HeaderTwo = (props: HeaderProps) => <Header {...props} level={2} />;
const HeaderThree = (props: HeaderProps) => <Header {...props} level={3} />;
const HeaderFour = (props: HeaderProps) => <Header {...props} level={4} />;
const HeaderFive = (props: HeaderProps) => <Header {...props} level={5} />;
const HeaderSix = (props: HeaderProps) => <Header {...props} level={6} />;

export { HeaderOne, HeaderTwo, HeaderThree, HeaderFour, HeaderFive, HeaderSix };
