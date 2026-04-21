"use client";
import { useState } from "react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("pip install safetrace");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Diagonal red slash */}
      <div className="diagonal-slash" />

      {/* Giant background masthead */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        aria-hidden="true"
      >
        <h1
          className="display text-center font-black leading-none uppercase"
          style={{
            fontSize: "clamp(5rem, 20vw, 18rem)",
            color: "rgba(255,255,255,0.04)",
            letterSpacing: "-0.03em",
            lineHeight: 0.9,
          }}
        >
          SAFE
          <br />
          TRACE
        </h1>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 gap-6">
        {/* Tag line */}
        <div className="hud mb-2 flex items-center gap-3">
          <span className="hud-red">[ PROTOCOL_ACTIVE ]</span>
          <span className="text-[#444]">v0.1.0</span>
        </div>

        {/* Main tagline */}
        <p
          className="display"
          style={{
            fontSize: "clamp(1.4rem, 4vw, 3rem)",
            fontStyle: "italic",
            color: "#f0f0f0",
            maxWidth: "700px",
            lineHeight: 1.25,
            fontWeight: 700,
          }}
        >
          <span style={{ color: "#e63030" }}>AI-powered</span> phishing detection
          <br />
          directly from your terminal.
        </p>

        {/* Install box */}
        <div
          className="flex items-center gap-0 mt-4 ghost-border"
          style={{ background: "#111" }}
        >
          <div
            className="flex items-center gap-3 px-6 py-4"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", color: "#c8c6c5" }}
          >
            <span style={{ color: "#444" }}>$</span>
            <span>pip install safetrace</span>
          </div>
          <button
            onClick={handleCopy}
            aria-label="Copy install command"
            className="px-5 py-4 transition-all hud"
            style={{
              borderLeft: "1px solid rgba(255,255,255,0.06)",
              color: "#e63030",
              fontSize: "11px",
              letterSpacing: "0.12em",
            }}
          >
            {copied ? "COPIED" : "COPY"}
          </button>
        </div>

        {/* GitHub link */}
        <a
          href="https://github.com/purab-awasthi/safetrace"
          target="_blank"
          rel="noopener noreferrer"
          className="hud hud-red flex items-center gap-2 hover:text-white transition-colors"
          style={{ color: "#e63030" }}
        >
          [ GITHUB ]
        </a>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="hud" style={{ color: "#333" }}>SCROLL TO INVESTIGATE</span>
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, #e63030, transparent)" }}
        />
      </div>
    </section>
  );
}
