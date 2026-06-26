import type { ReactNode } from "react";

const toneClass = {
  yellow: "",
  green: "",
  orange: "",
  blue: "",
  white: ""
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
  const fillClass = inverted ? "border-[rgba(245,245,243,0.4)] text-[rgba(245,245,243,0.7)]" : toneClass[tone];

  return (
    <p className={`${baseClass} ${fillClass}`}>
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title: _title,
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
    <div className="max-w-[520px]">
      <Eyebrow inverted={inverted} tone={tone} size="section">
        {eyebrow}
      </Eyebrow>
      {intro ? (
        <p className={`section-header-intro ${inverted ? "section-header-intro-dark" : "section-header-intro-light"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
