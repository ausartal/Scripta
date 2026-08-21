"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: "🚀" },
  { value: 10, suffix: "+", label: "Industries Served", icon: "🌍" },
  { value: 24, suffix: "/7", label: "Support Available", icon: "💬" },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
      <span className="text-gradient">{count}</span>
      <span style={{ color: "var(--color-primary)" }}>{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 md:py-20 gradient-mesh">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-3xl overflow-hidden"
          style={{
            background: "var(--color-surface)",
            boxShadow: "var(--shadow-xl)",
            border: "1px solid var(--color-border-subtle)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative p-8 md:p-10 text-center group"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid var(--color-border-subtle)" : "none",
              }}
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(99, 102, 241, 0.03), rgba(139, 92, 246, 0.03))",
                }}
              />
              <div className="relative">
                <div className="text-2xl mb-3">{stat.icon}</div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p
                  className="text-sm mt-3 font-medium"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
