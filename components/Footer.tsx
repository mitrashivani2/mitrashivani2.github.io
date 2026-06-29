import type { Portfolio } from "@/data/portfolio";

export function Footer({ portfolio }: { portfolio: Portfolio }) {
  return (
    <footer className="border-t-[var(--border-width)] border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] px-5 py-5 md:px-8 xl:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-[11px] font-semibold tracking-[0.08em] text-[rgba(248,244,255,0.35)] uppercase">
          © 2026 {portfolio.personal.name.toUpperCase()}. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[11px] font-semibold tracking-[0.08em] text-[rgba(248,244,255,0.35)] uppercase">
          BUILT FOR CULTURE. DRIVEN BY NUMBERS.
        </p>
      </div>
    </footer>
  );
}
