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
    <section id="journey" className="section-frame section-light border-y-[2px] border-[var(--color-black)]">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="Career journey"
          title="A clear progression from recruiting and communications into senior agency account leadership."
          intro="Each role expanded the scope of leadership, delivery ownership, and commercial impact across agency and communications environments."
          tone="orange"
        />
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-[0.42fr_1fr]">
        <div className="grid gap-3">
          {portfolio.journey.map((item, index) => (
            <button
              key={item.company}
              type="button"
              onClick={() => setActive(index)}
              className={`timeline-item text-left ${
                active === index
                  ? "bg-[var(--color-lime)] text-[var(--color-black)] hover:bg-[var(--color-lime)]"
                  : "text-[var(--color-black)]"
              }`}
            >
              <span className={`neo-kicker ${active === index ? "text-[var(--color-black)] opacity-60" : "text-[var(--color-black)] opacity-55"}`}>
                {item.period}
              </span>
              <strong className="mt-3 block text-2xl font-black tracking-[-0.05em]">{item.company}</strong>
            </button>
          ))}
        </div>
        <motion.article key={job.company} variants={fadeUp} initial="hidden" animate="visible" className="card theme-panel p-6 lg:p-8">
          <div className="flex flex-wrap gap-3">
            <span className="section-label neo-badge-orange">{job.period}</span>
            <span className="section-label neo-badge-blue">{job.roles.length} roles</span>
          </div>
          <h3 className="section-heading mt-6 max-w-none">{job.company}</h3>
          <p className="mt-4 text-[16px] font-semibold leading-[1.5] text-[rgba(13,13,13,0.62)]">{job.roles.join(" / ")}</p>
          <ul className="mt-8 grid gap-3">
            {job.highlights.map((item) => (
              <li key={item} className="card-inner card-body-text bg-[rgba(255,255,255,0.35)] font-medium text-[rgba(13,13,13,0.78)]">
                {item}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
