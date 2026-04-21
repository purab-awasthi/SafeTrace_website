export default function ExecutionLog() {
  return (
    <section
      className="relative py-24 px-20 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0a0a0a" }}
    >
      {/* Section label */}
      <div className="mb-12">
        <span className="hud" style={{ color: "#e63030" }}>// EXECUTION_PROTOCOL</span>
        <h2
          className="display font-black uppercase mt-2"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#f0f0f0", lineHeight: 1 }}
        >
          HOW IT WORKS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {[
          {
            step: "01",
            title: "INSTALL",
            code: "pip install safetrace",
            detail: "One command. Models auto-train on first use. No config files, no cloud auth, no nonsense.",
          },
          {
            step: "02",
            title: "RUN",
            code: "safetrace url [URL]",
            detail: "Pipe any URL or email text directly into the analyzer. JSON output ready for your scripts.",
          },
          {
            step: "03",
            title: "ANALYZE",
            code: "HIGH RISK ⚠",
            detail: "Receive instant risk categorization, confidence scores, and line-by-line threat reasons.",
          },
        ].map((item, i) => (
          <div
            key={item.step}
            className="p-10 border-r last:border-r-0 group hover:bg-[#0e0e0e] transition-colors duration-300"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <div
              className="display font-black mb-6"
              style={{ fontSize: "5rem", color: "rgba(230, 48, 48, 0.15)", lineHeight: 1 }}
            >
              {item.step}
            </div>
            <h3
              className="hud-red hud mb-4"
              style={{ fontSize: "11px", letterSpacing: "0.15em" }}
            >
              {item.title}
            </h3>
            <div
              className="mb-6 p-4"
              style={{
                background: "#080808",
                border: "1px solid rgba(230, 48, 48, 0.2)",
                borderLeft: "3px solid #e63030",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.8rem",
                color: "#c8c6c5",
              }}
            >
              {item.code}
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.88rem",
                color: "#555",
                lineHeight: 1.7,
              }}
            >
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
