import { createSocialImage, socialImageSize } from "../components/social-image";

export const runtime = "edge";
export const alt = "Jochen Stierberger — notes";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage("Notes by Jochen Stierberger.");
}
