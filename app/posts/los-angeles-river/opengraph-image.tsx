import { createSocialImage, socialImageSize } from "../../components/social-image";

export const runtime = "edge";
export const alt = "Jochen Stierberger — documenting the Los Angeles River";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage("Documenting the Los Angeles River with a large format camera.");
}
