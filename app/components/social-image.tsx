import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export function createSocialImage(description: string) {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#171717",
          color: "#d6d6d6",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700 }}>Jochen Stierberger</div>
        <div style={{ color: "#d6d6d6", fontSize: 36, marginTop: 24 }}>
          {description}
        </div>
      </div>
    ),
    socialImageSize,
  );
}
