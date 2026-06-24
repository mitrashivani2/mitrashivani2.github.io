"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Tools({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section className="section-frame section-light">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="Marketing tools"
          title="A practical toolkit across analytics, social platforms, campaign management, and AI-assisted execution."
          intro="These are the platforms I rely on for campaign reporting, social execution, creator coordination, and faster AI-assisted workflows."
          tone="yellow"
        />
      </div>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mx-auto grid max-w-[1440px] gap-[var(--gap-card-grid)] md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(portfolio.tools).map(([category, tools], index) => (
          <motion.article
            key={category}
            variants={fadeUp}
            className={`card ${["theme-panel", "neo-card-accent-green", "theme-panel", "neo-card-accent-blue"][index % 4]} p-[var(--card-padding)]`}
          >
            <div className="flex items-center justify-between gap-4">
              <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-8 text-2xl font-black tracking-[-0.05em]">{category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className={`${index % 4 === 1 || index % 4 === 3 ? "tool-tag tool-tag-inverted" : "tool-tag"}`}
                >
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
