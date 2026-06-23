"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Timeline({ portfolio }: { portfolio: Portfolio }) {
  const [active, setActive] = useState(0);
  const job = portfolio.journey[active];

  return (
    <section id="journey" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionHeader eyebrow="Career journey" title="A clear progression from communications and recruiting into senior agency account leadership." />
      <div className="grid gap-5 lg:grid-cols-[0.42fr_1fr]">
        <div className="grid gap-2">
          {portfolio.journey.map((item, index) => (
            <button
              key={item.company}
              type="button"
              onClick={() => setActive(index)}
              className={`border p-5 text-left transition ${
                active === index
                  ? "border-transparent bg-[image:var(--accent-gradient)] text-white shadow-[0_18px_44px_rgba(8,15,13,0.16)]"
                  : "border-[color:var(--accent-border)] bg-[rgba(250,252,251,0.88)] text-[var(--foreground)] hover:border-[var(--accent)]"
              }`}
            >
              <span className={`text-xs font-bold uppercase tracking-[0.14em] ${active === index ? "text-[rgba(203,231,219,0.78)]" : "text-[var(--accent)]"}`}>
                {item.period}
              </span>
              <strong className="mt-3 block text-2xl">{item.company}</strong>
            </button>
          ))}
        </div>
        <motion.article key={job.company} variants={fadeUp} initial="hidden" animate="visible" className="theme-panel p-6 lg:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{job.period}</p>
          <h3 className="mt-3 font-serif text-5xl leading-none text-[var(--foreground)]">{job.company}</h3>
          <p className="mt-5 text-lg font-semibold text-[var(--text-muted)]">{job.roles.join(" -> ")}</p>
          <ul className="mt-8 grid gap-3">
            {job.highlights.map((item) => (
              <li key={item} className="border-l-4 border-[var(--accent)] bg-[var(--surface-soft)] p-4 text-base leading-7 text-[var(--text-muted)]">
                {item}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
