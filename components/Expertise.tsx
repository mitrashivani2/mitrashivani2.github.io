"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Expertise({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section className="section-frame section-light">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="Core expertise"
          title="The operating system behind client growth, content velocity, and entertainment-ready campaign execution."
          intro="These are the capabilities I bring into every brief, spanning strategy, content, creators, paid media, and AI-assisted execution."
          tone="yellow"
        />
      </div>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.expertise.map((group, index) => (
          <motion.article
            key={group.title}
            variants={fadeUp}
            className="card p-[var(--card-padding)]"
          >
            <div className="flex items-center justify-between gap-4">
              <Sparkles className="h-5 w-5 text-[var(--text-primary)]" aria-hidden="true" />
              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-10 text-[18px] font-bold tracking-[-0.03em] text-[var(--text-primary)]">{group.title}</h3>
            <ul className="mt-6 grid gap-2">
              {group.items.map((item) => (
                <li key={item} className="tool-tag">
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
