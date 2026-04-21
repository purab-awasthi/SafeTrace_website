export default function ContactFooter() {
  return (
    <section
      className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "#080808" }}
    >
      {/* Main CTA block */}
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-8 relative overflow-hidden">
        {/* Diagonal slash */}
        <div className="diagonal-slash" />

        {/* Channel open tag */}
        <div className="hud mb-6 flex items-center gap-2" style={{ color: "#e63030" }}>
          <span className="w-2 h-2 rounded-full dot-pulse flex-shrink-0" style={{ backgroundColor: "#e63030" }} />
          <span>CHANNEL_OPEN</span>
        </div>

        {/* Big serif CTA */}
        <h2
          className="display font-black"
          style={{
            fontSize: "clamp(3rem, 10vw, 8rem)",
            lineHeight: 1,
            color: "#f0f0f0",
            maxWidth: "900px",
            marginBottom: "2.5rem",
          }}
        >
          Start Protecting
          <br />
          <span style={{ color: "#e63030" }}>Your Stack.</span>
        </h2>

        {/* CTA button */}
        <a
          href="https://github.com/purab-awasthi/safetrace"
          target="_blank"
          rel="noopener noreferrer"
          className="ghost-border px-16 py-5 hud text-white hover:bg-white hover:text-black transition-all duration-300 mb-10"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          [ INITIATE — VIEW ON GITHUB ]
        </a>

        {/* Links row */}
        <div className="flex items-center gap-10">
          {[
            { label: "[ GITHUB ]", href: "https://github.com/purab-awasthi/safetrace" },
            { label: "[ DOCS ]", href: "#" },
            { label: "[ REPORT_BUG ]", href: "#" },
            { label: "[ PYPI ]", href: "#" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="hud transition-colors duration-200 hover:text-white"
              style={{ color: "#e63030", fontSize: "10px", letterSpacing: "0.15em" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div
        className="border-t px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
      >
        {/* Left: logo */}
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1rem",
            fontWeight: 700,
            color: "#333",
            letterSpacing: "-0.02em",
          }}
        >
          SafeTrace
        </span>

        {/* Center: metadata */}
        <div className="flex items-center gap-6">
          <span className="hud" style={{ color: "#2a2a2a" }}>SECURE LINE ESTABLISHED</span>
          <span className="hud" style={{ color: "#2a2a2a" }}>© 2025 MIT LICENSE</span>
          <span className="hud" style={{ color: "#2a2a2a" }}>v0.1.0_ALPHA</span>
        </div>

        {/* Right: status */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full dot-pulse" style={{ backgroundColor: "#e63030" }} />
          <span className="hud hud-red">STABLE</span>
        </div>
      </div>
    </section>
  );
}
