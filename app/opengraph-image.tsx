import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Jochen Stierberger — software engineer working across distributed services";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          color: "#171717",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700 }}>Jochen Stierberger</div>
        <div style={{ color: "#525252", fontSize: 36, marginTop: 24 }}>
          Software engineer working across distributed services.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
