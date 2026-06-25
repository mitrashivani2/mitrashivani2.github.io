"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { Eyebrow } from "./SectionHeader";

export function About({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section className="section-frame section-light">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.82fr_1fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-90px" }}>
          <Eyebrow tone="orange" size="section">How I Think About Marketing</Eyebrow>
          <p className="section-header-intro section-header-intro-light mt-4">
            {portfolio.about}
          </p>
          <div className="card mt-8 max-w-md p-[var(--card-padding)]">
            <p className="neo-kicker text-[var(--text-muted)]">Working thesis</p>
            <p className="card-body-text mt-4 text-[var(--text-primary)]">
              The job is not to be louder. The job is to know what lands first, what scales next, and what converts after culture has already started moving.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
          className="grid content-start gap-7"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {portfolio.philosophy.map((item, index) => (
              <p
                key={item}
                className={`${index === 0 ? "md:col-span-2" : ""} card card-body-text-strong p-[var(--card-padding)]`}
              >
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
