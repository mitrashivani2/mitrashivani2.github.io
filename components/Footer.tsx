import type { Portfolio } from "@/data/portfolio";

export function Footer({ portfolio }: { portfolio: Portfolio }) {
  return (
    <footer className="section-dark border-t-[2px] border-[var(--color-white)] px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="section-intro section-intro-dark max-w-none font-semibold">© 2026 {portfolio.personal.name}. Senior Account Manager & Marketing Strategist.</p>
        <p className="font-black uppercase tracking-[0.08em] text-[var(--color-yellow)]">{portfolio.personal.title}</p>
      </div>
    </footer>
  );
}
