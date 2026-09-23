import {
  createSocialImage,
  socialImageSize,
} from "./components/social-image";

export const runtime = "edge";

export const alt =
  "Jochen Stierberger — software engineer working across distributed services";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage("Software engineer working across distributed services.");
}
