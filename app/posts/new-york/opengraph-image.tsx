import { createSocialImage, socialImageSize } from "../../components/social-image";

export const runtime = "edge";
export const alt = "Jochen Stierberger — a large format photographic walk through New York";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage("A large format photographic walk through New York.");
}
