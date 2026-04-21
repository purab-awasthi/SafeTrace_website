export default function ThreatProfile() {
  return (
    <section
      className="relative min-h-screen px-20 py-24 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0a0a0a" }}
    >
      {/* Section header */}
      <div className="mb-16">
        <h2
          className="display uppercase font-black tracking-tight"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)", lineHeight: 1, color: "#f0f0f0" }}
        >
          THREAT_ANALYSIS
        </h2>
        <div className="flex items-center gap-4 mt-2">
          <span className="hud" style={{ color: "#e63030" }}>COMPETENCE_ANALYSIS_REPORT</span>
          <span className="hud" style={{ color: "#333" }}>[READ_ONLY]</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Subject card */}
        <div
          className="md:col-span-4 ghost-border p-8 flex flex-col gap-6"
          style={{ background: "#0e0e0e" }}
        >
          <div>
            <span className="hud" style={{ color: "#444" }}>CLASS:</span>
            <p className="mt-1" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "#f0f0f0" }}>
              PHISHING_DETECTOR
            </p>
          </div>
          <div>
            <span className="hud" style={{ color: "#444" }}>VERSION:</span>
            <p className="mt-1" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "#f0f0f0" }}>
              0.1.0_ALPHA
            </p>
          </div>
          <div>
            <span className="hud" style={{ color: "#444" }}>DEPENDENCIES:</span>
            <p className="mt-1" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "#858585" }}>
              scikit-learn / joblib / numpy
            </p>
          </div>
          <div>
            <span className="hud" style={{ color: "#444" }}>RUNTIME:</span>
            <p className="mt-1" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "#858585" }}>
              Python ≥ 3.9
            </p>
          </div>
          <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="hud hud-red blink">● THREAT_ACTIVE</span>
          </div>
        </div>

        {/* Right: description */}
        <div className="md:col-span-8">
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
              lineHeight: 1.7,
              color: "#c8c6c5",
              fontWeight: 400,
            }}
          >
            Lightweight AI-powered cybersecurity toolkit for phishing detection.
            SafeTrace is a{" "}
            <span
              className="font-bold"
              style={{
                color: "#f0f0f0",
                background: "rgba(230, 48, 48, 0.15)",
                padding: "0 4px",
              }}
            >
              CLI-first
            </span>{" "}
            Python package that lets developers scan URLs and text for phishing
            patterns using machine learning. It ships with{" "}
            <span
              className="font-bold"
              style={{
                color: "#f0f0f0",
                background: "rgba(230, 48, 48, 0.15)",
                padding: "0 4px",
              }}
            >
              auto-training models
            </span>
            , zero setup friction, and line-by-line explainability.
          </p>

          <div
            className="grid grid-cols-2 gap-6 mt-12"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2rem" }}
          >
            {[
              ["15", "URL Features Extracted"],
              ["100", "Random Forest Trees"],
              ["5", "Phishing Pattern Categories"],
              ["0", "Cloud Dependencies"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  className="display font-black"
                  style={{ fontSize: "3rem", color: "#e63030", lineHeight: 1 }}
                >
                  {num}
                </div>
                <div className="hud mt-1" style={{ color: "#555" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
