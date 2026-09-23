import { createSocialImage, socialImageSize } from "../components/social-image";

export const runtime = "edge";
export const alt = "Jochen Stierberger — what I am up to, listening to, and reading";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage("What I am up to, listening to, and reading.");
}
