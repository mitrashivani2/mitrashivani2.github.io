"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";

export function Hero({ portfolio }: { portfolio: Portfolio }) {
  const { personal } = portfolio;
  const marqueeItems = [
    "AUDIENCE GROWTH",
    "CAMPAIGN STRATEGY",
    "DIGITAL CULTURE",
    "314M+ IMPRESSIONS",
    "1.7M COMMUNITY",
    "7+ YEARS"
  ];

  return (
    <section id="hero" className="overflow-hidden bg-[var(--color-bg-page)] pt-16">
      <div className="mx-auto grid min-h-[calc(100svh-var(--header-height))] max-w-[1440px] grid-cols-1 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex min-w-0 flex-col justify-center px-5 py-16 md:px-8 lg:px-12 xl:px-12"
        >
          <motion.div variants={fadeUp} className="mb-8 flex flex-wrap gap-2">
            <span className="section-pill mb-0">AUDIENCE GROWTH</span>
            <span className="section-pill mb-0">CAMPAIGN STRATEGY</span>
            <span className="section-pill mb-0">DIGITAL CULTURE</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="display-heading-hero max-w-[520px]">
            I BUILD BRANDS PEOPLE TALK ABOUT — AND{" "}
            <span className="text-[var(--color-amber)]">NUMBERS THAT PROVE IT.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-[420px] text-[17px] font-normal leading-[1.65] text-[var(--color-text-secondary)]">
            {personal.positioning}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-amber">
              SEE MY WORK <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-outline-purple">
              GET IN TOUCH <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.9, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[560px] overflow-hidden lg:min-h-[calc(100svh-var(--header-height))]"
        >
          <Image
            src={withBasePath(personal.portrait)}
            alt="Professional portrait of Shivani Mitra"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--color-bg-page) 0%, rgba(248,244,255,0.82) 14%, rgba(248,244,255,0.18) 34%, transparent 52%)"
            }}
          />
          <div className="absolute right-7 top-7 h-20 w-20 border-[var(--border-width)] border-[var(--color-amber)]" aria-hidden="true" />
        </motion.div>
      </div>
      <div className="flex h-[72px] items-center overflow-hidden border-y-[var(--border-width)] border-[var(--color-border-dark)] bg-[var(--color-accent)]">
        <div className="marquee-track uppercase">
          <span className="marquee-content flex items-center text-[15px] font-bold tracking-[0.12em] text-[var(--color-text-on-dark)]">
            {marqueeItems.map((item) => (
              <span key={item} className="flex items-center">
                <span>{item}</span>
                <span className="mx-5 text-[var(--color-amber)]">✦</span>
              </span>
            ))}
          </span>
          <span
            className="marquee-content flex items-center text-[15px] font-bold tracking-[0.12em] text-[var(--color-text-on-dark)]"
            aria-hidden="true"
          >
            {marqueeItems.map((item) => (
              <span key={`repeat-${item}`} className="flex items-center">
                <span>{item}</span>
                <span className="mx-5 text-[var(--color-amber)]">✦</span>
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
