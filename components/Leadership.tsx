"use client";

import { motion } from "framer-motion";
import { LineChart, Users } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { Eyebrow } from "./SectionHeader";

export function Leadership({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section className="bg-[rgba(250,252,251,0.5)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Leadership & growth</Eyebrow>
          <h2 className="mt-4 max-w-[11ch] font-serif text-[2.95rem] leading-[0.96] text-[var(--foreground)] sm:text-[3.8rem] lg:text-[4.4rem]">
            Built for the rooms where strategy becomes delivery.
          </h2>
        </div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid gap-4 sm:grid-cols-2">
          {portfolio.leadership.map((item, index) => (
            <motion.div key={item} variants={fadeUp} className="theme-panel min-h-44 p-5">
              {index % 2 === 0 ? <Users className="h-6 w-6 text-[var(--accent)]" aria-hidden="true" /> : <LineChart className="h-6 w-6 text-[var(--accent)]" aria-hidden="true" />}
              <p className="mt-9 text-lg font-extrabold leading-snug text-[var(--foreground)]">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
