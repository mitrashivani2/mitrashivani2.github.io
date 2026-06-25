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
    <section id="journey" className="section-frame section-light">
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
                  ? "border-[var(--bg-dark)] bg-[var(--bg-dark)] text-[var(--text-on-dark)] hover:bg-[var(--bg-dark)]"
                  : "text-[var(--text-primary)]"
              }`}
            >
              <span className={`neo-kicker ${active === index ? "text-[rgba(245,245,243,0.5)]" : "text-[var(--text-muted)]"}`}>
                {item.period}
              </span>
              <strong className="mt-3 block text-2xl font-black tracking-[-0.05em]">{item.company}</strong>
            </button>
          ))}
        </div>
        <motion.article key={job.company} variants={fadeUp} initial="hidden" animate="visible" className="card p-6 lg:p-8">
          <div className="flex flex-wrap gap-3">
            <span className="section-label">{job.period}</span>
            <span className="section-label">{job.roles.length} roles</span>
          </div>
          <h3 className="mt-6 text-[32px] font-extrabold tracking-[-0.05em] text-[var(--text-primary)]">{job.company}</h3>
          <p className="mt-4 text-[14px] font-medium leading-[1.6] text-[var(--text-secondary)]">{job.roles.join(" / ")}</p>
          <ul className="mt-8 grid gap-3">
            {job.highlights.map((item) => (
              <li key={item} className="card-inner card-body-text text-[var(--text-primary)]">
                {item}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
