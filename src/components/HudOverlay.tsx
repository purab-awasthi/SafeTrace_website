"use client";
import { useEffect, useState } from "react";

export default function HudOverlay() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Film grain */}
      <div className="grain" />

      {/* Right-edge red scan line */}
      <div className="scan-line" />

      {/* Top-left HUD */}
      <div className="fixed top-5 left-5 z-50 flex flex-col gap-1">
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#f0f0f0",
            letterSpacing: "-0.02em",
          }}
        >
          SafeTrace
        </span>
        <span className="hud hud-red">[ SIGNAL_STRONG ]</span>
      </div>

      {/* Top-right HUD */}
      <div className="fixed top-5 right-8 z-50 flex flex-col items-end gap-1">
        <span className="hud">{time}</span>
        <span className="hud">ISO 800</span>
      </div>

      {/* Left sidebar vertical text */}
      <div
        className="fixed left-0 top-1/2 z-50 flex flex-col items-center gap-0"
        style={{ transform: "translateY(-50%)" }}
      >
        <div
          className="bg-[#111] border border-white/[0.06] px-2 py-6"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span
            className="hud"
            style={{
              transform: "rotate(180deg)",
              display: "block",
              letterSpacing: "0.2em",
            }}
          >
            Threat_Archive
          </span>
        </div>
      </div>




    </>
  );
}
