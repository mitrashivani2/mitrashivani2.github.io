"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { SectionPill } from "./SectionHeader";

export function Tools({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section id="tools" className="page-section page-section-alt">
      <div className="page-inner">
        <div className="split-header">
          <div>
            <SectionPill>MARKETING TOOLS</SectionPill>
            <h2 className="display-heading-mid">PLATFORMS I RELY ON TO DELIVER.</h2>
          </div>
          <p className="section-copy pt-2">
            These are the platforms I rely on for campaign reporting, social execution, creator
            coordination, and faster AI-assisted workflows.
          </p>
        </div>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="page-inner mt-14 grid gap-3 md:grid-cols-2 xl:grid-cols-4"
      >
        {Object.entries(portfolio.tools).map(([category, tools], index) => (
          <motion.article
            key={category}
            variants={fadeUp}
            className="card-frame px-7 py-7"
          >
            <div className="mb-7 text-right">
              <span className="label-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mb-5 text-[18px] font-extrabold uppercase tracking-[-0.02em] text-[var(--color-text-primary)]">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="tag">
                  {tool}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
