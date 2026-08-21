"use client";

import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "#" },
    { label: "Mobile App", href: "#" },
    { label: "Illustration & Design", href: "#" },
    { label: "Game Development", href: "#" },
    { label: "AI Solutions", href: "#" },
    { label: "Online Tutoring", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733-16z" />
        <path d="M4 20l6.768-6.768" />
        <path d="M20 4l-6.768 6.768" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-8"
      style={{ background: "var(--color-surface-soft)", borderTop: "1px solid var(--color-border-subtle)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section: Newsletter + Links */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                style={{ background: "var(--gradient-primary)" }}
              >
                S
              </div>
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Scripta
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6 max-w-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Creative technology studio that helps students, educators, and creators
              transform their best ideas into real, lasting impact.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-text)" }}>
                Stay updated
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 text-sm rounded-xl outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--color-primary)]"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text)",
                  }}
                />
                <button
                  className="px-4 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "var(--color-surface)",
                    color: "var(--color-text-muted)",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                    e.currentTarget.style.borderColor = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-muted)";
                    e.currentTarget.style.borderColor = "var(--color-border-subtle)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2 lg:col-start-auto">
              <h4
                className="text-sm font-bold mb-5"
                style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--color-text-secondary)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--color-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--color-text-secondary)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="lg:col-span-2">
            <h4
              className="text-sm font-bold mb-5"
              style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@scripta.studio"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                >
                  hello@scripta.studio
                </a>
              </li>
              <li>
                <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            &copy; {new Date().getFullYear()} Scripta. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
            <span>Made with</span>
            <svg className="w-3.5 h-3.5" style={{ color: "var(--color-accent-pink)" }} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>by Scripta Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
