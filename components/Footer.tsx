import type { Portfolio } from "@/data/portfolio";

export function Footer({ portfolio }: { portfolio: Portfolio }) {
  return (
    <footer className="border-t border-[#333] bg-[var(--bg-dark)] px-5 py-8 text-[var(--text-on-dark)] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="section-intro section-intro-dark max-w-none font-semibold">© 2026 {portfolio.personal.name}. Senior Account Manager & Marketing Strategist.</p>
        <p className="font-semibold uppercase tracking-[0.08em] text-[rgba(245,245,243,0.55)]">{portfolio.personal.title}</p>
      </div>
    </footer>
  );
}
