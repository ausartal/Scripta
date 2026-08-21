"use client";

import Button from "@/components/common/Button";

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: "linear-gradient(135deg, #6366F1, #8B5CF6, #7C3AED, #6366F1)",
          backgroundSize: "300% 300%",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-[8%] w-40 h-40 rounded-full bg-white/5 blur-2xl animate-float" />
        <div className="absolute bottom-10 right-[10%] w-56 h-56 rounded-full bg-white/5 blur-3xl animate-float delay-300" />
        <div className="absolute top-1/3 left-[55%] w-32 h-32 rounded-3xl bg-white/5 blur-xl rotate-45 animate-float delay-500" />
        <div className="absolute bottom-1/3 left-[20%] w-20 h-20 rounded-2xl bg-white/8 blur-lg -rotate-12 animate-float delay-700" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="text-xs font-semibold text-white/80 tracking-wide">
            Let&apos;s collaborate
          </span>
        </div>

        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Have an Idea?
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Let&apos;s make it real. Share your vision with us and we&apos;ll turn it into something
          you&apos;ll be proud to show the world.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            style={{
              background: "white",
              color: "#6366F1",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            Start a Project
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10h12m0 0l-4-4m4 4l-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button variant="ghost" size="lg">
            Explore Our Services
          </Button>
        </div>

        {/* Trust micro-copy */}
        <p className="mt-8 text-sm text-white/50">
          Free consultation &bull; No commitment required &bull; Response within 24 hours
        </p>
      </div>
    </section>
  );
}
