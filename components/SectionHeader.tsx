import type { ReactNode } from "react";

export function SectionPill({
  children,
  dark = false,
  className = ""
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p className={`section-pill ${dark ? "section-pill-dark" : ""} ${className}`.trim()}>
      {children}
    </p>
  );
}
