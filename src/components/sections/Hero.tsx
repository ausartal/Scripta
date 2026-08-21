"use client";

import Button from "@/components/common/Button";

const floatingCards = [
  {
    icon: "🌐",
    title: "Web Development",
    subtitle: "Modern & responsive",
    accent: "var(--color-accent-sky)",
    bg: "rgba(56, 189, 248, 0.08)",
    pos: "top-0 right-0",
    size: "w-60",
    delay: "",
  },
  {
    icon: "📚",
    title: "Online Tutoring",
    subtitle: "Learn with mentors",
    accent: "var(--color-accent-mint)",
    bg: "rgba(52, 211, 153, 0.08)",
    pos: "top-28 left-0",
    size: "w-56",
    delay: "delay-200",
  },
  {
    icon: "🎨",
    title: "Illustration",
    subtitle: "Visual identity",
    accent: "var(--color-accent-pink)",
    bg: "rgba(244, 114, 182, 0.08)",
    pos: "bottom-24 right-4",
    size: "w-58",
    delay: "delay-400",
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    subtitle: "Future innovation",
    accent: "var(--color-accent-purple)",
    bg: "rgba(167, 139, 250, 0.08)",
    pos: "bottom-0 left-8",
    size: "w-52",
    delay: "delay-600",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-mesh">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern hero-grid-fade opacity-40" />

      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-3xl animate-pulse-soft"
          style={{ background: "var(--color-accent-sky)" }}
        />
        <div
          className="absolute bottom-0 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-3xl animate-pulse-soft delay-300"
          style={{ background: "var(--color-accent-purple)" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full opacity-[0.04] blur-2xl animate-pulse-soft delay-500"
          style={{ background: "var(--color-accent-pink)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border"
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
              className="text-[2.75rem] md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-7"
              style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.03em" }}
            >
              Ideas deserve to{" "}
              <br className="hidden sm:block" />
              become{" "}
              <span className="text-gradient">something real.</span>
            </h1>

            <p
              className="text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
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

            {/* Mini trust indicators */}
            <div className="mt-12 flex items-center gap-6">
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

          {/* Right: Floating cards showcase */}
          <div className="relative hidden lg:block">
            <div className="relative h-[520px]">
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
                  <h3
                    className="font-semibold text-sm mb-0.5"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    {card.subtitle}
                  </p>
                </div>
              ))}

              {/* Central decorative element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-dashed opacity-20 animate-spin-slow" style={{ borderColor: "var(--color-primary)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
