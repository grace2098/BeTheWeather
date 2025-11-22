import React from "react";
export default function Customtooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        style={{
          background: "var(--accent)",
          color: "white",
          padding: "8px 10px",
          borderRadius: "6px",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          marginTop: '14px',
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold" }}>{label}</p>
        <p style={{ margin: 0 }}>Temp: {data.temp}°C</p>
        <p style={{ margin: 0 }}>Feels like: {data.feels_like}°C</p>
        <p style={{ margin: 0 }}>Rain: {Math.round(data.pop * 100)}%</p>
      </div>
    );
  }
  return null;
}
