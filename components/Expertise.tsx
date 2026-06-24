"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

const expertiseCardClasses = [
  "neo-card-accent-yellow",
  "theme-panel",
  "neo-card-accent-green",
  "theme-panel",
  "neo-card-accent-orange",
  "neo-card-accent-blue"
];

export function Expertise({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section className="section-frame section-dark border-y-[2px] border-[var(--color-white)]">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="Core expertise"
          title="The operating system behind client growth, content velocity, and entertainment-ready campaign execution."
          intro="These are the capabilities I bring into every brief, spanning strategy, content, creators, paid media, and AI-assisted execution."
          inverted
          tone="yellow"
        />
      </div>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mx-auto grid max-w-[1440px] gap-[var(--gap-card-grid)] md:grid-cols-2 xl:grid-cols-3">
        {portfolio.expertise.map((group, index) => (
          <motion.article
            key={group.title}
            variants={fadeUp}
            className={`card ${expertiseCardClasses[index % expertiseCardClasses.length]} p-[var(--card-padding)]`}
          >
            <div className="flex items-center justify-between gap-4">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-10 text-2xl font-black tracking-[-0.05em]">{group.title}</h3>
            <ul className="mt-6 grid gap-2">
              {group.items.map((item) => (
                <li key={item} className={`${index % 6 === 1 || index % 6 === 3 ? "tool-tag" : "tool-tag tool-tag-inverted"}`}>
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
