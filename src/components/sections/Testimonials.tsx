"use client";

import { useState, useEffect, useCallback } from "react";
import SectionHeading from "@/components/common/SectionHeading";

const testimonials = [
  {
    quote:
      "I came to Scripta with a mobile app idea I was passionate about but had no idea how to build. Six weeks later, I had a working prototype, a deeper understanding of app development, and the confidence to keep going on my own.",
    name: "Rina Wijaya",
    role: "Student, SMA Nusantara",
    avatar: "RW",
    color: "var(--color-accent-mint)",
  },
  {
    quote:
      "My students went from passive to engaged. The project-based learning approach made the material stick, and I saw real improvement in their understanding and confidence.",
    name: "Budi Santoso",
    role: "Teacher, SMA Harapan",
    avatar: "BS",
    color: "var(--color-accent-sky)",
  },
  {
    quote:
      "Scripta understood my vision and built it faster than I expected. They didn't just give me a website; they gave me a launchpad for my business. Sales increased 40% in the first quarter.",
    name: "Dewi Lestari",
    role: "Founder, BatikNusa",
    avatar: "DL",
    color: "var(--color-accent-pink)",
  },
  {
    quote:
      "From a simple idea to an app used by thousands of people. Scripta is the partner that truly understands the bridge between imagination and execution.",
    name: "Ahmad Fauzi",
    role: "CEO, StartupKu",
    avatar: "AF",
    color: "var(--color-accent-purple)",
  },
  {
    quote:
      "The interactive learning platform changed how I teach. I can finally see which students are struggling and help them in real time. It's been transformative for my classroom.",
    name: "Siti Nurhaliza",
    role: "Educator, EduTech Corp",
    avatar: "SN",
    color: "var(--color-accent-orange)",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--color-surface-soft)" }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          description="Real stories from real people. Each project shows measurable impact and lasting partnerships."
        />

        {/* Testimonial carousel */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className="relative p-8 md:p-12 rounded-3xl transition-all duration-500"
            style={{
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid var(--color-border-subtle)",
            }}
          >
            {/* Large quote mark */}
            <div
              className="absolute top-6 left-8 text-7xl font-serif leading-none opacity-20"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-serif)" }}
            >
              &ldquo;
            </div>

            {/* Quote text */}
            <blockquote
              className="relative text-lg md:text-xl leading-relaxed mb-8 min-h-[120px] transition-opacity duration-500"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              {t.quote}
            </blockquote>

            {/* Author info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-base font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
                    {t.name}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "var(--color-surface-soft)",
                    color: "var(--color-text-secondary)",
                    border: "1px solid var(--color-border)",
                  }}
                  aria-label="Previous testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "var(--gradient-primary)",
                    color: "white",
                  }}
                  aria-label="Next testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "24px" : "8px",
                    background: i === current ? "var(--color-primary)" : "var(--color-border)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
