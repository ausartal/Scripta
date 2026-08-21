"use client";

import SectionHeading from "@/components/common/SectionHeading";

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "We Understand Your Journey",
    description: "We've been where you are. Our team includes designers, developers, educators, and creatives who've closed the gap hundreds of times.",
    accent: "var(--color-accent-sky)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "We Execute with Excellence",
    description: "We sweat the details so your idea shines. Professional execution means you can launch with confidence.",
    accent: "var(--color-accent-orange)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "We Make It Accessible",
    description: "No jargon. No surprises. Just results. You don't need to be technical to work with us.",
    accent: "var(--color-accent-mint)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    title: "We're in It for Growth",
    description: "We're not just building your project. We're building your capabilities. Your success is our success.",
    accent: "var(--color-accent-purple)",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Why Scripta"
          title="Not Just a Service Provider"
          description="We're a partner that lives at the intersection of education, technology, and creativity. Your idea matters to us as much as the execution."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{
                background: "var(--color-surface)",
                boxShadow: "var(--shadow-sm)",
                border: "1px solid var(--color-border-subtle)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                e.currentTarget.style.borderColor = reason.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                e.currentTarget.style.borderColor = "var(--color-border-subtle)";
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${reason.accent}12`, color: reason.accent }}
                >
                  {reason.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
