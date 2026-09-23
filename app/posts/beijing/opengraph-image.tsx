import { createSocialImage, socialImageSize } from "../../components/social-image";

export const runtime = "edge";
export const alt = "Jochen Stierberger — a photographic farewell to Beijing";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage("A photographic farewell to Beijing after three years in the city.");
}
