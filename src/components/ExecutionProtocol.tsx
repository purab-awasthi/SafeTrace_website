"use client";

const EVIDENCE_FILES = [
  {
    id: "01",
    title: "URL Scanner",
    tag: "ML_CLASSIFIER",
    description:
      "Extracts 15 structural features and classifies via Random Forest. Flags suspicious TLDs, keywords, and structure in real-time.",
    badge: "● ACTIVE",
  },
  {
    id: "02",
    title: "Email Analyser",
    tag: "TF-IDF_ENGINE",
    description:
      "TF-IDF + Logistic Regression + rule-based pattern matching across 5 phishing categories: urgency, threats, impersonation, lures.",
    badge: "● ACTIVE",
  },
  {
    id: "03",
    title: "Batch Processing",
    tag: "PIPELINE_READY",
    description:
      "Scan entire files of URLs or emails in a single command. pipe-friendly JSON output for CI/CD and security audit workflows.",
    badge: "● ACTIVE",
  },
  {
    id: "04",
    title: "Auto-Training",
    tag: "ZERO_SETUP",
    description:
      "Models train automatically on first use from synthetic datasets. No manual steps, no API keys, no internet required.",
    badge: "● ACTIVE",
  },
];

export default function EvidenceFiles() {
  return (
    <section
      className="relative py-24 border-t overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "#080808" }}
    >
      {/* Section label */}
      <div className="px-20 mb-10 flex items-center justify-between">
        <div>
          <h2
            className="display uppercase font-black"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#f0f0f0", lineHeight: 1 }}
          >
            EVIDENCE_FILES
          </h2>
          <span className="hud" style={{ color: "#e63030" }}>
            CAPABILITY_ARCHIVE — 04 FILES
          </span>
        </div>
        <div className="ghost-border px-4 py-2 hidden md:flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full dot-pulse flex-shrink-0"
            style={{ backgroundColor: "#e63030" }}
          />
          <span className="hud hud-red">SCANNING</span>
        </div>
      </div>

      {/* Horizontal scroll cards */}
      <div
        className="flex gap-0 overflow-x-auto pl-20"
        style={{ scrollbarWidth: "none" }}
      >
        {EVIDENCE_FILES.map((file) => (
          <div
            key={file.id}
            className="flex-shrink-0 flex flex-col justify-between p-8 border-r transition-all duration-300 group cursor-pointer"
            style={{
              width: "320px",
              minHeight: "380px",
              borderColor: "rgba(255,255,255,0.06)",
              background: "#0a0a0a",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#0e0e0e";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#0a0a0a";
            }}
          >
            {/* Top */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="hud" style={{ color: "#e63030" }}>
                  EVIDENCE #{file.id}
                </span>
                <span className="hud hud-red blink">{file.badge}</span>
              </div>
              <h3
                className="display font-bold"
                style={{
                  fontSize: "1.8rem",
                  color: "#f0f0f0",
                  lineHeight: 1.1,
                  marginBottom: "1rem",
                }}
              >
                {file.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "#555",
                  lineHeight: 1.7,
                }}
              >
                {file.description}
              </p>
            </div>

            {/* Bottom tag */}
            <div
              className="mt-6 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="hud"
                style={{ color: "#333", fontFamily: "'DM Mono', monospace" }}
              >
                _{file.tag}
              </span>
            </div>
          </div>
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-20" />
      </div>
    </section>
  );
}
