"use client";

import PixelSwap from "@/components/common/PixelSwap";
import Button from "@/components/common/Button";

function FirstContent() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "var(--color-background)" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern hero-grid-fade opacity-30" />

      {/* Gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(99, 102, 241, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(139, 92, 246, 0.06) 0%, transparent 60%)",
        }}
      />

      {/* Floating decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] left-[10%] w-48 h-48 rounded-full blur-3xl animate-pulse-soft"
          style={{ background: "var(--color-accent-sky)", opacity: 0.06 }}
        />
        <div
          className="absolute bottom-[15%] right-[10%] w-64 h-64 rounded-full blur-3xl animate-pulse-soft delay-300"
          style={{ background: "var(--color-accent-purple)", opacity: 0.05 }}
        />
        <div
          className="absolute top-[50%] right-[25%] w-32 h-32 rounded-full blur-2xl animate-float"
          style={{ background: "var(--color-accent-pink)", opacity: 0.04 }}
        />
      </div>

      {/* Central content */}
      <div className="relative text-center px-6 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center text-white font-bold text-4xl shadow-xl"
            style={{ background: "var(--gradient-primary)" }}
          >
            S
          </div>
        </div>

        {/* Brand name */}
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.03em", color: "var(--color-text)" }}
        >
          Scripta
        </h2>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl mb-10 leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Where ideas become real.
        </p>

        {/* Click prompt */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-surface)",
            boxShadow: "var(--shadow-md)",
            color: "var(--color-text-secondary)",
          }}
        >
          {/* Animated click icon */}
          <div className="relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping" style={{ background: "var(--color-accent-mint)" }} />
          </div>
          <span className="text-sm font-medium">Click anywhere to discover</span>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-6 left-6 flex items-center gap-2 opacity-40">
        <div className="w-8 h-px" style={{ background: "var(--color-border)" }} />
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--color-text-muted)" }}>
          Education
        </span>
        <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>&times;</span>
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--color-text-muted)" }}>
          Technology
        </span>
        <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>&times;</span>
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--color-text-muted)" }}>
          Creativity
        </span>
      </div>
    </div>
  );
}

function SecondContent() {
  const floatingCards = [
    {
      icon: "🌐",
      title: "Web Development",
      subtitle: "Modern & responsive",
      accent: "var(--color-accent-sky)",
      bg: "rgba(56, 189, 248, 0.08)",
      pos: "top-0 right-0",
      size: "w-56",
      delay: "",
    },
    {
      icon: "📚",
      title: "Online Tutoring",
      subtitle: "Learn with mentors",
      accent: "var(--color-accent-mint)",
      bg: "rgba(52, 211, 153, 0.08)",
      pos: "top-24 left-0",
      size: "w-52",
      delay: "delay-200",
    },
    {
      icon: "🎨",
      title: "Illustration",
      subtitle: "Visual identity",
      accent: "var(--color-accent-pink)",
      bg: "rgba(244, 114, 182, 0.08)",
      pos: "bottom-20 right-4",
      size: "w-54",
      delay: "delay-400",
    },
    {
      icon: "🤖",
      title: "AI Solutions",
      subtitle: "Future innovation",
      accent: "var(--color-accent-purple)",
      bg: "rgba(167, 139, 250, 0.08)",
      pos: "bottom-0 left-8",
      size: "w-48",
      delay: "delay-600",
    },
  ];

  return (
    <div
      className="w-full h-full flex items-center relative overflow-hidden"
      style={{ background: "var(--color-background)" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern hero-grid-fade opacity-40" />

      {/* Gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 90%, rgba(56, 189, 248, 0.05) 0%, transparent 50%)",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-3xl animate-pulse-soft"
          style={{ background: "var(--color-accent-sky)", opacity: 0.06 }}
        />
        <div
          className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse-soft delay-300"
          style={{ background: "var(--color-accent-purple)", opacity: 0.04 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
              style={{
                borderColor: "var(--color-border)",
                background: "var(--color-surface)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--color-accent-mint)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--color-accent-mint)" }} />
              </span>
              <span className="text-xs font-semibold tracking-wide" style={{ color: "var(--color-text-secondary)" }}>
                Education &times; Technology &times; Creativity
              </span>
            </div>

            <h1
              className="text-[2.5rem] md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.03em" }}
            >
              Ideas deserve to{" "}
              <br className="hidden sm:block" />
              become{" "}
              <span className="text-gradient">something real.</span>
            </h1>

            <p
              className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Scripta helps learners, students, educators, and creators transform
              their best ideas into websites, apps, games, illustrations, and
              learning experiences that matter.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                icon={
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10h12m0 0l-4-4m4 4l-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                Start a Project
              </Button>
              <Button variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>

            {/* Mini trust */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {["SK", "RN", "BW", "DL"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white border-2"
                    style={{
                      background: [
                        "var(--color-accent-sky)",
                        "var(--color-accent-mint)",
                        "var(--color-accent-pink)",
                        "var(--color-accent-purple)",
                      ][i],
                      borderColor: "var(--color-background)",
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5" style={{ color: "var(--color-accent-yellow)" }} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
                  Trusted by 50+ clients
                </p>
              </div>
            </div>
          </div>

          {/* Right: Floating cards */}
          <div className="relative hidden lg:block">
            <div className="relative h-[480px]">
              {floatingCards.map((card, i) => (
                <div
                  key={i}
                  className={`absolute ${card.pos} ${card.size} p-5 rounded-2xl animate-float ${card.delay}`}
                  style={{
                    background: "var(--color-surface)",
                    boxShadow: "var(--shadow-lg)",
                    borderLeft: `4px solid ${card.accent}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-xl"
                    style={{ background: card.bg }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-0.5" style={{ fontFamily: "var(--font-sans)" }}>
                    {card.title}
                  </h3>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    {card.subtitle}
                  </p>
                </div>
              ))}

              {/* Central spinning ring */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 border-dashed opacity-15 animate-spin-slow"
                style={{ borderColor: "var(--color-primary)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen">
      <PixelSwap
        firstContent={<FirstContent />}
        secondContent={<SecondContent />}
        pixelSize={64}
        gap={0}
        pixelRadius={0}
        pixelSpin={0}
        pixelScale={0.35}
        duration={1400}
        pixelDuration={450}
        pattern="random"
        randomness={0}
        fade
        trigger="click"
        aspectRatio="auto"
        style={{ minHeight: "100vh", width: "100%" }}
      />
    </section>
  );
}
