"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Portfolio } from "@/data/portfolio";

const links = [
  { href: "#work", label: "Work" },
  { href: "#impact", label: "Impact" },
  { href: "#brands", label: "Brands" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" }
];

export function Navbar({ portfolio: _portfolio }: { portfolio: Portfolio }) {
  const [active, setActive] = useState("hero");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const ids = ["work", "impact", "brands", "journey", "contact"];
      const current = ids.findLast((id) => {
        const element = document.getElementById(id);
        return element ? element.getBoundingClientRect().top <= 120 : false;
      });
      setActive(current ?? "hero");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] border-b-[var(--border-width)] border-[var(--color-border)] bg-[var(--color-bg-card)]">
        <nav
          className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-8 xl:px-12"
          aria-label="Primary navigation"
        >
          <a href="#hero" className="flex items-center gap-3" aria-label="Go to Shivani Mitra hero section">
            <span className="text-[18px] font-black tracking-[0.06em] text-[var(--color-accent)]">SM</span>
            <span className="h-5 w-px bg-[var(--color-border)]" aria-hidden="true" />
            <span className="text-[12px] font-bold tracking-[0.1em] text-[var(--color-text-primary)]">
              SHIVANI MITRA
            </span>
          </a>
          <div className="hidden items-center md:flex">
            {links.map((link) => {
              const id = link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`ml-8 border-b-[2px] pb-0.5 text-[12px] font-bold tracking-[0.1em] uppercase transition ${
                    active === id
                      ? "border-[var(--color-amber)] text-[var(--color-accent)]"
                      : "border-transparent text-[var(--color-text-secondary)] hover:border-[var(--color-amber)] hover:text-[var(--color-accent)]"
                  }`}
                >
                  {link.label.toUpperCase()}
                </a>
              );
            })}
          </div>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center text-[var(--color-accent)] md:hidden"
            aria-expanded={drawerOpen}
            aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setDrawerOpen((open) => !open)}
          >
            {drawerOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </nav>
      </header>
      {drawerOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-16 z-[90] bg-[var(--color-bg-dark)] px-8 py-8 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b-[var(--border-width)] border-[rgba(248,244,255,0.12)] py-6 text-[20px] font-black tracking-[-0.02em] text-[var(--color-text-on-dark)]"
                onClick={() => setDrawerOpen(false)}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
