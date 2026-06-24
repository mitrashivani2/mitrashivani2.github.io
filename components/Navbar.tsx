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
          ? "border-b-[2px] border-[var(--color-white)] bg-[rgba(13,13,13,0.9)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-4 sm:gap-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <a
          href="#hero"
          className="grid h-[3.25rem] w-[3.25rem] place-items-center rounded-2xl border-[2px] border-[var(--color-black)] bg-[var(--color-yellow)] text-sm font-black text-[var(--color-black)] shadow-[var(--shadow-card)]"
          aria-label="Go to Shivani Mitra hero section"
        >
          SM
        </a>
        <div className="hidden items-center gap-2 rounded-full border-[2px] border-[var(--color-white)] bg-[rgba(13,13,13,0.88)] p-2 text-sm font-bold text-[var(--color-white)] shadow-[var(--shadow-card)] md:flex">
          {links.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full border-[2px] px-4 py-2 transition ${
                  active === id
                    ? "border-[var(--color-black)] bg-[var(--color-lime)] text-[var(--color-black)] shadow-[var(--shadow-card)]"
                    : "border-transparent bg-transparent text-[var(--color-white)] hover:border-[var(--color-black)] hover:bg-[var(--color-white)] hover:text-[var(--color-black)] hover:shadow-[var(--shadow-card)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <a
          href={withBasePath(portfolio.personal.resume)}
          className="btn btn-filled-lime ml-auto w-auto px-3 sm:px-4"
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
