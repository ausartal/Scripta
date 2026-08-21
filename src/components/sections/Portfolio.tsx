"use client";

import SectionHeading from "@/components/common/SectionHeading";

const projects = [
  {
    title: "EduPlatform",
    category: "Education",
    tags: ["Web", "Education", "Design"],
    description: "Interactive education platform for high school students with real-time progress tracking and personalized learning paths.",
    stats: "200+ students in first semester",
    color: "var(--color-accent-mint)",
    colorBg: "rgba(52, 211, 153, 0.08)",
    span: "lg:col-span-2",
    height: "h-72 md:h-96",
    icon: "📚",
  },
  {
    title: "ArtVault",
    category: "Creative",
    tags: ["Mobile", "AR", "Design"],
    description: "Digital art gallery app with AR preview capabilities for immersive art experiences.",
    stats: "5K+ downloads in first month",
    color: "var(--color-accent-pink)",
    colorBg: "rgba(244, 114, 182, 0.08)",
    span: "",
    height: "h-72 md:h-96",
    icon: "🎨",
  },
  {
    title: "SmartChat AI",
    category: "AI",
    tags: ["AI", "Web App", "Automation"],
    description: "AI-powered customer service chatbot for e-commerce with natural language understanding.",
    stats: "40% reduction in support tickets",
    color: "var(--color-accent-purple)",
    colorBg: "rgba(167, 139, 250, 0.08)",
    span: "",
    height: "h-72",
    icon: "🤖",
  },
  {
    title: "GameQuest",
    category: "Game",
    tags: ["Game", "Education", "Interactive"],
    description: "Educational adventure game for children learning science through exploration and puzzles.",
    stats: "Used in 12 schools",
    color: "var(--color-accent-orange)",
    colorBg: "rgba(251, 146, 60, 0.08)",
    span: "lg:col-span-2",
    height: "h-72",
    icon: "🎮",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 gradient-mesh">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Creative Playground"
          description="Projects we've loved making. Across industries, styles, and platforms."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-2 ${project.span} ${project.height}`}
              style={{
                background: "var(--color-surface)",
                boxShadow: "var(--shadow-sm)",
                border: "1px solid var(--color-border-subtle)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-xl)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              }}
            >
              {/* Visual placeholder */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: project.colorBg }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-28 h-28 rounded-3xl flex items-center justify-center text-5xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                    style={{ background: `${project.color}15` }}
                  >
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Tags - always visible */}
              <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-1 rounded-full font-semibold backdrop-blur-sm"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      color: "var(--color-text)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-2">
                  {project.description}
                </p>
                <p className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                  style={{ color: project.color }}
                >
                  {project.stats}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-base font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{
              color: "var(--color-primary)",
              background: "var(--color-primary-surface)",
            }}
          >
            View All Projects
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10h12m0 0l-4-4m4 4l-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
