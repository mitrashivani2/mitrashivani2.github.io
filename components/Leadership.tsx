"use client";

import { motion } from "framer-motion";
import { LineChart, Users } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { Eyebrow } from "./SectionHeader";

const leadershipCardClasses = ["theme-panel-soft", "neo-card-accent-blue", "neo-card-accent-yellow", "theme-panel-soft", "neo-card-accent-orange"];

export function Leadership({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section className="section-frame section-dark border-y-[2px] border-[var(--color-white)]">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow tone="blue" size="section">Leadership & growth</Eyebrow>
          <p className="section-header-intro section-header-intro-dark mt-5">
            The value is not only ideas. It is keeping client momentum, internal teams, performance expectations, and delivery quality moving in the same direction.
          </p>
        </div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid gap-4 sm:grid-cols-2">
          {portfolio.leadership.map((item, index) => (
            <motion.div key={item} variants={fadeUp} className={`card ${leadershipCardClasses[index % leadershipCardClasses.length]} min-h-44 p-[var(--card-padding)]`}>
              {index % 2 === 0 ? <Users className="h-5 w-5 text-[var(--color-black)]" aria-hidden="true" /> : <LineChart className="h-5 w-5 text-[var(--color-black)]" aria-hidden="true" />}
              <p className="mt-9 text-[16px] font-semibold leading-[1.4] text-[var(--color-black)]">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
