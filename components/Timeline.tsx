"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { SectionPill } from "./SectionHeader";

function formatPeriod(period: string) {
  return period.replace(" - ", " — ").toUpperCase();
}

export function Timeline({ portfolio }: { portfolio: Portfolio }) {
  const [active, setActive] = useState(0);
  const job = portfolio.journey[active];

  return (
    <section id="journey" className="page-section page-section-dark">
      <div className="page-inner">
        <div className="mb-14">
          <SectionPill dark>CAREER JOURNEY</SectionPill>
          <h2 className="display-heading-mid display-heading-mid-dark max-w-[680px]">
            EACH ROLE EXPANDED THE SCOPE OF LEADERSHIP AND IMPACT.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr] lg:items-start">
          <div className="flex flex-col gap-1">
            {portfolio.journey.map((item, index) => {
              const selected = active === index;
              return (
                <button
                  key={item.company}
                  type="button"
                  aria-selected={selected}
                  onClick={() => setActive(index)}
                  className={`w-full border-[var(--border-width)] px-6 py-5 text-left transition ${
                    selected
                      ? "border-[var(--color-amber)] border-l-[4px] bg-[rgba(232,168,56,0.08)]"
                      : "border-[var(--color-border-dark)] bg-transparent"
                  }`}
                >
                  <span
                    className={`block text-[11px] font-bold tracking-[0.1em] uppercase ${
                      selected ? "text-[rgba(248,244,255,0.6)]" : "text-[rgba(248,244,255,0.4)]"
                    }`}
                  >
                    {formatPeriod(item.period)}
                  </span>
                  <strong
                    className={`mt-2 block text-[22px] font-black tracking-[-0.03em] uppercase ${
                      selected ? "text-[var(--color-text-on-dark)]" : "text-[rgba(248,244,255,0.5)]"
                    }`}
                  >
                    {item.company}
                  </strong>
                </button>
              );
            })}
          </div>

          <motion.article
            key={job.company}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="border-[var(--border-width)] border-[var(--color-border)] bg-[var(--color-bg-card)] px-8 py-9"
          >
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="tag tag-amber">{formatPeriod(job.period)}</span>
              <span className="tag">{`${job.roles.length} ROLE${job.roles.length > 1 ? "S" : ""}`}</span>
            </div>
            <h3 className="text-[clamp(28px,3vw,40px)] font-black leading-none tracking-[-0.04em] text-[var(--color-text-primary)] uppercase">
              {job.company}
            </h3>
            <p className="mt-2 text-[14px] font-semibold tracking-[0.02em] text-[var(--color-text-muted)]">
              {job.roles.join(" / ")}
            </p>
            <div className="my-7 h-[2px] bg-[var(--color-border)]" aria-hidden="true" />
            <ul className="flex flex-col gap-3">
              {job.highlights.map((item) => (
                <li
                  key={item}
                  className="border border-[var(--color-border)] border-l-[3px] border-l-[var(--color-accent)] bg-[var(--color-bg-card-alt)] px-4 py-3 text-[14px] leading-[1.6] text-[var(--color-text-primary)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
