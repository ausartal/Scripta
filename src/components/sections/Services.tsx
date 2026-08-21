"use client";

import SectionHeading from "@/components/common/SectionHeading";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Web Development",
    description: "Responsive, fast websites that engage visitors and convert. Built with modern frameworks for lasting results.",
    features: ["Landing Page", "E-Commerce", "Web App", "CMS"],
    accent: "var(--color-accent-sky)",
    accentBg: "rgba(56, 189, 248, 0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Mobile App",
    description: "Intuitive mobile applications for iOS and Android that users love to open every day.",
    features: ["Native App", "Cross-Platform", "UI/UX Design", "Prototyping"],
    accent: "var(--color-accent-blue)",
    accentBg: "rgba(59, 130, 246, 0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Illustration & Design",
    description: "Custom artwork and visual identity that tells your story and makes your brand stand out.",
    features: ["Brand Identity", "Illustration", "Motion Graphics", "Print Design"],
    accent: "var(--color-accent-pink)",
    accentBg: "rgba(244, 114, 182, 0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
        <path d="M12 3v12" />
        <path d="M5 21h14" />
      </svg>
    ),
    title: "Game Development",
    description: "Interactive games that engage audiences across platforms with compelling mechanics and art.",
    features: ["2D/3D Games", "Interactive", "Educational", "Gamification"],
    accent: "var(--color-accent-orange)",
    accentBg: "rgba(251, 146, 60, 0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Online Tutoring",
    description: "Expert guidance for learners at any level. Customized curriculum that makes learning stick.",
    features: ["1-on-1 Mentoring", "Group Class", "Workshop", "Bootcamp"],
    accent: "var(--color-accent-mint)",
    accentBg: "rgba(52, 211, 153, 0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4c0 1.95-2 4-4 6-2-2-4-4.05-4-6a4 4 0 014-4z" />
        <path d="M18 22H6l-2-6h4l2-4 2 4h4l-2 6z" />
      </svg>
    ),
    title: "Education Solutions",
    description: "Interactive learning platforms and assessment tools that improve student outcomes.",
    features: ["LMS", "Assessment", "Analytics", "Content"],
    accent: "var(--color-accent-cyan)",
    accentBg: "rgba(6, 182, 212, 0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M9 14h6" />
        <path d="M9 18h6" />
        <path d="M6 22h12" />
      </svg>
    ),
    title: "AI Solutions",
    description: "Intelligent automation and AI-powered tools that give your business a competitive edge.",
    features: ["Chatbot", "ML Models", "Automation", "Data Analytics"],
    accent: "var(--color-accent-purple)",
    accentBg: "rgba(167, 139, 250, 0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Custom Solutions",
    description: "Tailored technology solutions built for your unique challenges. Full support from concept to launch.",
    features: ["Consulting", "Integration", "Scalable", "Full Support"],
    accent: "var(--color-accent-yellow)",
    accentBg: "rgba(251, 191, 36, 0.08)",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 gradient-mesh relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Services"
          title="One Idea. Many Possibilities."
          description="From web development to AI solutions, we bring your vision to life with precision, creativity, and care."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-7 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
              style={{
                background: "var(--color-surface)",
                boxShadow: "var(--shadow-sm)",
                border: "1px solid var(--color-border-subtle)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                e.currentTarget.style.borderColor = service.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                e.currentTarget.style.borderColor = "var(--color-border-subtle)";
              }}
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: service.accent }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: service.accentBg, color: service.accent }}
              >
                {service.icon}
              </div>

              <h3
                className="text-base font-bold mb-2"
                style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm mb-5 leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {service.features.map((f, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: service.accentBg,
                      color: service.accent,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div
                className="mt-5 text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 group-hover:gap-2.5"
                style={{ color: "var(--color-primary)" }}
              >
                Learn more
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10m0 0l-3-3m3 3l-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
