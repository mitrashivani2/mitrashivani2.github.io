"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { SectionPill } from "./SectionHeader";

export function Expertise({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section id="expertise" className="page-section page-section-alt">
      <div className="page-inner">
        <div className="split-header">
          <div>
            <SectionPill>CORE EXPERTISE</SectionPill>
            <h2 className="display-heading-mid">WHAT I BRING TO EVERY BRIEF.</h2>
          </div>
          <p className="section-copy pt-2">
            These are the capabilities I bring into every brief, spanning strategy, content, creators,
            paid media, and AI-assisted execution.
          </p>
        </div>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="page-inner grid gap-3 md:grid-cols-2 xl:grid-cols-3"
      >
        {portfolio.expertise.map((group, index) => (
          <motion.article
            key={group.title}
            variants={fadeUp}
            className="card-frame px-7 py-7 hover:border-[var(--color-amber)]"
          >
            <div className="mb-8 flex justify-end">
              <span className="label-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mb-5 text-[20px] font-extrabold uppercase tracking-[-0.02em] text-[var(--color-text-primary)]">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
