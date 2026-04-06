import React from "react";

export default function MapVideo() {
  return (
    <div  style={{ maxWidth: "900px", margin: "0 auto" }}>
      
      {/* Optional Heading */}
      <div  className="mt-14" style={{ textAlign: "center", marginBottom: "10px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "700" }}>
        Textile Associations
        </h2>
        <p style={{ fontSize: "12px", color: "#555" }}>
          www.hcparekh.com
        </p>
      </div>

      {/* 🎥 VIDEO ONLY */}
      <video
        src="/videos/india-map.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          border: "1px solid #ddd",
        }}
      />
    </div>
  );
}