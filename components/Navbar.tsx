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
      className={`fixed inset-x-0 top-0 z-50 border-b border-[var(--border-light)] bg-[var(--bg-page)] transition duration-300 ${
        scrolled ? "shadow-[0_1px_6px_rgba(0,0,0,0.04)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-4 sm:gap-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <a
          href="#hero"
          className="grid h-9 w-9 place-items-center rounded-full bg-[var(--bg-dark)] text-sm font-black text-[var(--text-on-dark)]"
          aria-label="Go to Shivani Mitra hero section"
        >
          SM
        </a>
        <div className="hidden items-center gap-5 rounded-[var(--radius-pill)] border-[var(--border-width)] border-[var(--border-color)] bg-transparent px-5 py-2 md:flex">
          {links.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium text-[var(--text-primary)] transition ${
                  active === id
                    ? "underline underline-offset-4"
                    : "hover:underline hover:underline-offset-4"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <a
          href={withBasePath(portfolio.personal.resume)}
          className="btn btn-filled-lime ml-auto w-auto px-5 py-2 text-[13px]"
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
