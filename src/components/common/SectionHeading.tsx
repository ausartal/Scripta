interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-5 px-4 py-2 rounded-full"
          style={{
            color: "var(--color-primary)",
            background: "var(--color-primary-surface)",
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-5 leading-tight"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
          style={{ color: "var(--color-text-secondary)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
