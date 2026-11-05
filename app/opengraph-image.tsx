import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Bashka Digital · Kreativna marketing agencija";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#14150f",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 700,
            color: "#c5d86d",
            letterSpacing: -4,
          }}
        >
          bashka
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 36,
            color: "#ffffff",
          }}
        >
          Kreativna marketing agencija
        </div>
      </div>
    ),
    { ...size },
  );
}
