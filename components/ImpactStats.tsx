"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { Eyebrow } from "./SectionHeader";

export function ImpactStats({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section id="impact" className="border-y border-[color:var(--accent-border)] bg-[rgba(250,252,251,0.58)] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto mb-10 max-w-[1440px]">
        <Eyebrow>By The Numbers</Eyebrow>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto grid max-w-[1440px] gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {portfolio.metrics.map((metric) => (
          <motion.article key={metric.label} variants={fadeUp} className="theme-panel-dark min-h-56 p-5">
            <strong className="block font-serif text-5xl leading-none text-white lg:text-6xl">{metric.value}</strong>
            <span className="mt-5 block text-sm font-extrabold uppercase text-[rgba(203,231,219,0.76)]">{metric.label}</span>
            <p className="mt-3 text-sm leading-6 text-white/72">{metric.detail}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
