"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, LineChart } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";

export function Hero({ portfolio }: { portfolio: Portfolio }) {
  const { personal } = portfolio;
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : 42]);
  const cardY = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : -34]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(62,109,92,0.32)_0,transparent_24%),radial-gradient(circle_at_bottom_right,rgba(27,72,58,0.22)_0,transparent_26%),linear-gradient(135deg,#080c0b_0%,#0d1d19_42%,#24493d_100%)] px-5 pt-28 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] grid-cols-[minmax(0,1fr)] items-start gap-14 pb-24 pt-8 sm:pt-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(400px,0.88fr)] lg:gap-[4.5rem] lg:pt-14 xl:grid-cols-[minmax(0,0.9fr)_minmax(460px,0.9fr)]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 min-w-0 w-full max-w-[42rem]">
          <motion.h1
            variants={fadeUp}
            className="max-w-[12ch] font-serif text-[2.9rem] leading-[0.9] text-white sm:text-[4.25rem] lg:text-[5.2rem] xl:text-[5.75rem]"
          >
            {personal.hero}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-[31rem] text-lg font-semibold leading-8 text-white/84 sm:text-[1.38rem] sm:leading-9">
            {personal.positioning}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-[35rem] text-base leading-7 text-[rgba(220,232,226,0.82)] sm:text-[1.04rem] sm:leading-8">
            {personal.supporting}
          </motion.p>
          <motion.div variants={fadeUp} className="stacked-actions-mobile mt-8 flex flex-wrap gap-3">
            <a href="#work" className="premium-button premium-button-dark">
              See My Work <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="premium-button premium-button-light">
              Get In Touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: portraitY }} className="relative flex min-w-0 w-full justify-center lg:justify-end">
          <div className="relative w-full max-w-[24rem] pt-4 sm:max-w-[30rem] lg:max-w-[34rem]">
            <div className="relative aspect-[0.84] w-full border border-white/14 bg-[rgba(248,251,249,0.08)] p-3 shadow-[0_26px_60px_rgba(3,7,6,0.38)] backdrop-blur-sm">
              <div className="relative h-full overflow-hidden bg-[linear-gradient(180deg,rgba(223,233,227,0.96)_0%,rgba(196,214,206,0.96)_100%)]">
                <Image
                  src={withBasePath(personal.portrait)}
                  alt="Professional portrait of Shivani Mitra"
                  fill
                  priority
                  sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <motion.div
              style={{ y: cardY }}
              className="theme-panel relative z-10 -mt-14 w-[84%] max-w-[21rem] p-5 text-[var(--foreground)] shadow-[0_20px_46px_rgba(3,7,6,0.24)] sm:ml-6 lg:-ml-10 lg:-mt-20"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Impact signal</span>
                <LineChart className="h-5 w-5 text-[var(--accent-deep)]" aria-hidden="true" />
              </div>
              <p className="mt-5 font-serif text-[2.6rem] leading-none text-[var(--accent-deep)] sm:text-5xl">42%</p>
              <p className="mt-3 max-w-[16rem] text-sm font-semibold leading-6 text-[var(--foreground)]">
                CPV reduction through three years of compounding influencer data.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
