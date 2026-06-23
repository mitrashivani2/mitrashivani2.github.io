"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { Eyebrow } from "./SectionHeader";

export function About({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1fr] lg:px-12 lg:py-28">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-90px" }}>
        <Eyebrow>How I Think About Marketing</Eyebrow>
        <h2 className="mt-4 max-w-[12ch] font-serif text-[2.95rem] leading-[0.95] text-[var(--foreground)] sm:text-[3.9rem] lg:text-[4.6rem]">
          The strongest campaigns solve for sequence, not noise.
        </h2>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-90px" }}
        className="grid content-start gap-7"
      >
        <p className="text-base leading-7 text-[var(--text-muted)] sm:text-[1.02rem] sm:leading-8">{portfolio.about}</p>
        <div className="grid gap-4">
          {portfolio.philosophy.map((item) => (
            <p key={item} className="theme-panel p-5 text-sm font-medium leading-7 text-[var(--foreground)] sm:text-[0.98rem]">
              {item}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
