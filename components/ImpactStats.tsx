"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

const statCardClasses = [
  "neo-card-accent-yellow",
  "neo-card-accent-blue",
  "theme-panel",
  "neo-card-accent-orange"
];

export function ImpactStats({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section id="impact" className="section-frame section-light border-y-[2px] border-[var(--color-black)]">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="By the numbers"
          title="A campaign scoreboard built from launches, retention systems, and audience growth."
          intro="These numbers reflect campaign scale, audience response, and client growth delivered across entertainment, culture, and consumer brands."
          tone="green"
        />
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto grid max-w-[1440px] gap-[var(--gap-card-grid)] sm:grid-cols-2"
      >
        {portfolio.metrics.map((metric, index) => (
          <motion.article key={metric.label} variants={fadeUp} className={`stat-card ${statCardClasses[index % statCardClasses.length]}`}>
            <div className="flex items-start justify-between gap-4">
              <span className="neo-kicker">{metric.label}</span>
              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <strong className="stat-value mt-5 block">{metric.value}</strong>
            <p className="card-body-text mt-1 max-w-[22rem]">{metric.detail}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
