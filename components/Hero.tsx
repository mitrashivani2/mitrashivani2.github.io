"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";

export function Hero({ portfolio }: { portfolio: Portfolio }) {
  const { personal } = portfolio;

  return (
    <section
      id="hero"
      className="section-light relative overflow-hidden px-5 pt-28 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-[1440px] grid-cols-[minmax(0,1fr)] items-center gap-12 py-8 sm:py-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(420px,1fr)] lg:gap-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex min-w-0 w-full max-w-[36rem] flex-col justify-center"
        >
          <motion.div variants={fadeUp} className="flex flex-col items-start gap-2">
            <span className="hero-pill">Audience Growth</span>
            <span className="hero-pill">Campaign Strategy</span>
            <span className="hero-pill">Digital Culture</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="hero-heading mt-8 max-w-[10ch]">
            {personal.hero}
          </motion.h1>
          <motion.p variants={fadeUp} className="hero-subtitle mt-5">
            {personal.positioning}
          </motion.p>
          <motion.div variants={fadeUp} className="stacked-actions-mobile mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-filled-lime">
              See My Work <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="relative flex min-w-0 w-full items-stretch justify-center lg:justify-end">
          <div className="relative flex w-full max-w-[24rem] sm:max-w-[31rem] lg:max-w-[35rem]">
            <div className="neo-grid-frame relative flex h-full min-h-[520px] w-full overflow-hidden border-[var(--border-width)] border-[var(--border-color)] bg-[var(--bg-card)] sm:min-h-[620px]">
              <div className="relative h-full w-full overflow-hidden rounded-[var(--radius-sharp)]">
                <Image
                  src={withBasePath(personal.portrait)}
                  alt="Professional portrait of Shivani Mitra"
                  fill
                  priority
                  sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-[center_top]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
