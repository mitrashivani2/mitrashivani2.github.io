import type { Portfolio } from "@/data/portfolio";

export function Footer({ portfolio }: { portfolio: Portfolio }) {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(135deg,#080c0b_0%,#0b1210_45%,#183329_100%)] px-5 py-8 text-white/54 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {portfolio.personal.name}. Senior Account Manager & Marketing Strategist.</p>
        <p>{portfolio.personal.title}</p>
      </div>
    </footer>
  );
}
