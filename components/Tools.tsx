"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Tools({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionHeader eyebrow="Marketing tools" title="A practical toolkit across analytics, social platforms, campaign management, and AI-assisted execution." />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(portfolio.tools).map(([category, tools]) => (
          <motion.article key={category} variants={fadeUp} className="theme-panel p-6">
            <BriefcaseBusiness className="mb-8 h-6 w-6 text-[var(--accent)]" aria-hidden="true" />
            <h3 className="text-2xl font-extrabold text-[var(--foreground)]">{category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="theme-chip rounded-full px-3 py-2 text-sm font-semibold">
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
