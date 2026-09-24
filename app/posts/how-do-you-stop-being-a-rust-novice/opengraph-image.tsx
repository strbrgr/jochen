import { createSocialImage, socialImageSize } from "../../components/social-image";

export const runtime = "edge";
export const alt = "Jochen Stierberger — learning Rust through systems design";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage(
    "Learning Rust by exploring networking, concurrency, and systems design.",
  );
}
