"use client";

const partners = [
  "EduTech Corp",
  "BatikNusa",
  "SMA Nusantara",
  "StartupKu",
  "CreativeLab",
  "DataVerse",
  "GameStudio ID",
  "LearnHub",
  "ArtSpace",
  "InnovateTech",
];

export default function TrustedBy() {
  return (
    <section className="py-16 relative" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p
          className="text-sm font-medium tracking-wide"
          style={{ color: "var(--color-text-muted)" }}
        >
          Trusted by forward-thinking teams
        </p>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-8 py-3 mx-4 rounded-xl whitespace-nowrap"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border-subtle)",
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white"
                style={{
                  background: [
                    "var(--color-accent-sky)",
                    "var(--color-accent-mint)",
                    "var(--color-accent-pink)",
                    "var(--color-accent-orange)",
                    "var(--color-accent-purple)",
                    "var(--color-accent-yellow)",
                    "var(--color-accent-blue)",
                    "var(--color-accent-cyan)",
                  ][i % 8],
                }}
              >
                {name.charAt(0)}
              </div>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
