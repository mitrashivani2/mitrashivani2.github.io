import type { ReactNode } from "react";

export function Eyebrow({ children, inverted = false }: { children: ReactNode; inverted?: boolean }) {
  return (
    <p
      className={`text-[0.82rem] font-extrabold uppercase tracking-[0.18em] sm:text-[0.98rem] ${
        inverted ? "text-[rgba(203,231,219,0.82)]" : "text-[var(--accent)]"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  inverted = false
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  inverted?: boolean;
}) {
  return (
    <div className="mb-12 max-w-[72rem] lg:mb-16">
      <Eyebrow inverted={inverted}>{eyebrow}</Eyebrow>
      <div className="mt-4">
        <h2
          className={`max-w-5xl font-serif text-[2.95rem] leading-[0.94] sm:text-[3.85rem] lg:text-[4.75rem] ${
            inverted ? "text-white" : "text-[var(--foreground)]"
          }`}
        >
          {title}
        </h2>
        {intro ? (
          <p className={`mt-4 max-w-3xl text-base leading-7 sm:text-[1.02rem] ${inverted ? "text-white/68" : "text-[var(--text-muted)]"}`}>
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}
