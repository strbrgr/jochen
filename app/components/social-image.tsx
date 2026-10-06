import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export function createSocialImage(text: string) {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#171717",
          color: "#d6d6d6",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "flex-start",
          padding: "80px",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: 64,
            maxWidth: 940,
          }}
        >
          {text}
        </div>
        <div
          style={{
            alignSelf: "flex-end",
            color: "#525252",
            fontSize: 36,
            marginTop: "auto",
          }}
        >
          jochen.fyi
        </div>
      </div>
    ),
    socialImageSize,
  );
}
