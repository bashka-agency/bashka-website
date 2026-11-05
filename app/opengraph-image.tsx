import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Bashka Digital — marketing agencija Čačak i Beograd";
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
            fontSize: 32,
            color: "#ffffff",
          }}
        >
          Marketing agencija — Čačak i Beograd
        </div>
      </div>
    ),
    { ...size },
  );
}
