"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "text";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out cursor-pointer select-none";

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-xl gap-1.5",
    md: "px-6 py-3 text-base rounded-2xl gap-2",
    lg: "px-8 py-4 text-lg rounded-2xl gap-2.5",
  };

  const variants = {
    primary: `text-white hover:shadow-[0_8px_24px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 active:translate-y-0`,
    secondary: `border-2 hover:-translate-y-0.5 active:translate-y-0`,
    ghost: `bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:-translate-y-0.5`,
    text: `hover:translate-x-1`,
  };

  const primaryStyle =
    variant === "primary"
      ? { background: "var(--gradient-primary)", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }
      : {};

  const secondaryStyle =
    variant === "secondary"
      ? {
          borderColor: "var(--color-border)",
          color: "var(--color-text)",
          background: "transparent",
        }
      : {};

  const textStyle =
    variant === "text"
      ? { color: "var(--color-primary)" }
      : {};

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      style={{ ...primaryStyle, ...secondaryStyle, ...textStyle }}
      onMouseEnter={(e) => {
        if (variant === "secondary") {
          e.currentTarget.style.borderColor = "var(--color-primary)";
          e.currentTarget.style.background = "var(--color-primary-surface)";
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "secondary") {
          e.currentTarget.style.borderColor = "var(--color-border)";
          e.currentTarget.style.background = "transparent";
        }
      }}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
