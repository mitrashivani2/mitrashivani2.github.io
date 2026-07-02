"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { SectionPill } from "./SectionHeader";

export function ImpactStats({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section id="impact" className="page-section bg-[var(--color-bg-page)]">
      <div className="page-inner">
        <div className="mb-14">
          <SectionPill>BY THE NUMBERS</SectionPill>
          <h2 className="display-heading">
            THESE NUMBERS REFLECT CAMPAIGN SCALE, AUDIENCE RESPONSE, AND CLIENT GROWTH.
          </h2>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-[2px] bg-[var(--color-border)] md:grid-cols-2"
        >
          {portfolio.metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              variants={fadeUp}
              className="bg-[var(--color-bg-card)] px-8 py-10 md:px-9"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <span className="label-kicker max-w-[200px] leading-[1.4]">{metric.label.toUpperCase()}</span>
                <span className="label-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <strong className="block text-[clamp(64px,8vw,96px)] font-black leading-none tracking-[-0.04em] text-[var(--color-amber)]">
                {metric.value}
              </strong>
              <p className="body-small mt-3 max-w-[320px]">{metric.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
