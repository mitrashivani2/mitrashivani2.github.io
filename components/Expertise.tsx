"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Expertise({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionHeader eyebrow="Core expertise" title="The operating system behind client growth, content velocity, and campaign performance." />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.expertise.map((group) => (
          <motion.article key={group.title} variants={fadeUp} className="theme-panel p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(8,15,13,0.1)]">
            <Sparkles className="mb-10 h-6 w-6 text-[var(--accent)]" aria-hidden="true" />
            <h3 className="text-2xl font-extrabold text-[var(--foreground)]">{group.title}</h3>
            <ul className="mt-6 grid gap-2">
              {group.items.map((item) => (
                <li key={item} className="theme-chip rounded-full px-4 py-2 text-sm font-semibold">
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
