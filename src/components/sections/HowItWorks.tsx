"use client";

import SectionHeading from "@/components/common/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Story",
    description: "Share your idea, vision, goals, and any specific needs. We listen, ask questions, and get excited.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    accent: "var(--color-accent-sky)",
    gradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.05), rgba(56, 189, 248, 0.02))",
  },
  {
    number: "02",
    title: "We Design a Path",
    description: "Our team creates a roadmap tailored to your vision. You'll know what to expect, when, and how much.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
    accent: "var(--color-accent-mint)",
    gradient: "linear-gradient(135deg, rgba(52, 211, 153, 0.05), rgba(52, 211, 153, 0.02))",
  },
  {
    number: "03",
    title: "The Magic Happens",
    description: "We design, develop, tutor, or create. You'll see progress and have input at every stage.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    accent: "var(--color-accent-pink)",
    gradient: "linear-gradient(135deg, rgba(244, 114, 182, 0.05), rgba(244, 114, 182, 0.02))",
  },
  {
    number: "04",
    title: "Live, Learn, Grow",
    description: "Your project launches, your skills strengthen, and you're ready for what's next. This is just the beginning.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    accent: "var(--color-accent-orange)",
    gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.05), rgba(251, 146, 60, 0.02))",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "var(--color-surface-soft)" }}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Process"
          title="How It Works"
          description="Four simple steps from idea to launch. Transparent, collaborative, and stress-free."
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px">
            <div className="w-full h-full" style={{ background: "var(--color-border)" }} />
            <div className="absolute top-0 left-0 h-full w-0 animate-pulse-soft" style={{ background: "var(--color-primary)", width: "100%" }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Step number & icon */}
                <div className="relative mx-auto w-[88px] h-[88px] rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-lg)]"
                  style={{
                    background: step.gradient,
                    border: "2px solid var(--color-border)",
                    color: step.accent,
                  }}
                >
                  {step.icon}
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-md"
                    style={{ background: step.accent }}
                  >
                    {step.number}
                  </span>
                </div>

                <div className="text-center">
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-xs mx-auto"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
