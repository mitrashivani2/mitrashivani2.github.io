"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import type { Portfolio } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";

const links = [
  { href: "#impact", label: "Impact" },
  { href: "#brands", label: "Brands" },
  { href: "#work", label: "Work" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" }
];

export function Navbar({ portfolio }: { portfolio: Portfolio }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = ["hero", "impact", "brands", "work", "journey", "contact"];
      const current = ids.findLast((id) => {
        const element = document.getElementById(id);
        return element ? element.getBoundingClientRect().top <= 120 : false;
      });
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-[color:var(--accent-border)] bg-[rgba(237,243,239,0.86)] shadow-[0_18px_44px_rgba(8,15,13,0.12)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-4 sm:gap-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <a
          href="#hero"
          className="grid h-12 w-12 place-items-center border border-[rgba(255,255,255,0.18)] bg-[image:var(--accent-gradient)] text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(8,15,13,0.2)]"
          aria-label="Go to Shivani Mitra hero section"
        >
          SM
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-[color:var(--accent-border)] bg-[rgba(250,252,251,0.84)] p-1 text-sm font-semibold text-[var(--text-muted)] shadow-[0_14px_28px_rgba(8,15,13,0.08)] md:flex">
          {links.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 transition ${
                  active === id
                    ? "bg-[image:var(--accent-gradient)] text-white"
                    : "text-[var(--text-muted)] hover:bg-[rgba(45,105,87,0.1)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <a
          href={withBasePath(portfolio.personal.resume)}
          className="premium-button premium-button-dark ml-auto min-h-11 w-auto px-3 py-2 text-sm sm:px-4"
          download
          aria-label="Download Shivani Mitra resume"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Resume</span>
        </a>
      </nav>
    </header>
  );
}
