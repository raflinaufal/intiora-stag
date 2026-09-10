import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Intiora - Platform AI Agent Customer Service & Sales 24/7";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1d4ed8 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "52px", fontWeight: "900", letterSpacing: "-1px" }}>
            Intiora<span style={{ color: "#60a5fa" }}>.ai</span>
          </span>
        </div>

        <div
          style={{
            fontSize: "44px",
            fontWeight: "800",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          AI Agent &amp; Omnichannel CRM untuk Customer Service &amp; Sales 24/7
        </div>

        <p
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Otomatisasi percakapan di WhatsApp, Instagram, dan Web Chat dengan AI cerdas
        </p>

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "40px",
            fontSize: "18px",
            color: "#60a5fa",
          }}
        >
          <span>WhatsApp API Resmi</span>
          <span>•</span>
          <span>Omnichannel Inbox</span>
          <span>•</span>
          <span>SOP Knowledge AI</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
