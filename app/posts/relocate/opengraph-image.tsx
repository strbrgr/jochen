import { createSocialImage, socialImageSize } from "../../components/social-image";

export const runtime = "edge";
export const alt = "Jochen Stierberger — a road trip from Los Angeles to Chicago";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage("A road trip from Los Angeles to Chicago in a converted Ford E250.");
}
