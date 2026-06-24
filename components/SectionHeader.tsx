import type { ReactNode } from "react";

const toneClass = {
  yellow: "neo-badge-yellow",
  green: "neo-badge-green",
  orange: "neo-badge-orange",
  blue: "neo-badge-blue",
  white: "bg-[var(--color-white)] text-[var(--color-black)]"
};

export function Eyebrow({
  children,
  inverted = false,
  tone = "yellow",
  size = "default"
}: {
  children: ReactNode;
  inverted?: boolean;
  tone?: keyof typeof toneClass;
  size?: "default" | "section";
}) {
  const baseClass = size === "section" ? "section-header-pill" : "section-label";
  const fillClass = inverted ? "bg-[var(--color-white)] text-[var(--color-black)]" : toneClass[tone];

  return (
    <p className={`${baseClass} ${fillClass}`}>
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  inverted = false,
  tone = "yellow"
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  inverted?: boolean;
  tone?: keyof typeof toneClass;
}) {
  return (
    <div className="mb-12 max-w-[580px] lg:mb-16">
      <Eyebrow inverted={inverted} tone={tone} size="section">
        {eyebrow}
      </Eyebrow>
      {intro ? (
        <p className={`section-header-intro mt-5 ${inverted ? "section-header-intro-dark" : "section-header-intro-light"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
