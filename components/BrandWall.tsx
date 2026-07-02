"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import { SectionPill } from "./SectionHeader";

export function BrandWall({ portfolio }: { portfolio: Portfolio }) {
  const desktopFillers = Array.from({ length: 2 });

  return (
    <section id="brands" className="page-section bg-[var(--color-bg-page)]">
      <div className="page-inner">
        <div className="mb-12">
          <SectionPill>BRANDS & CLIENTS</SectionPill>
          <h2 className="display-heading">FROM OTT TO FILM, MUSIC, FMCG, FINANCE, AND HOSPITALITY.</h2>
          <p className="section-copy">This roster reflects the range of brands I have helped grow.</p>
        </div>
        <div className="overflow-hidden border-[var(--border-width)] border-[var(--color-border)]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-px bg-[var(--color-border)] min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            {portfolio.brands.map((brand) => (
              <motion.div
                key={brand.name}
                variants={fadeUp}
                className="group flex min-h-[88px] items-center justify-center bg-[var(--color-bg-card)] px-5 py-6 text-center transition-colors duration-200 hover:bg-[var(--color-accent-tint)]"
              >
                {brand.logo ? (
                  <div className="flex h-[44px] w-[120px] items-center justify-center">
                    <Image
                      src={withBasePath(brand.logo)}
                      alt={`${brand.name} logo`}
                      width={170}
                      height={76}
                      sizes="120px"
                      className="h-auto w-auto max-h-full max-w-full object-contain opacity-55 grayscale transition duration-200 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                ) : (
                  <span className="text-[13px] font-bold tracking-[0.04em] text-[var(--color-text-secondary)] opacity-70 transition duration-200 group-hover:text-[var(--color-accent)] group-hover:opacity-100">
                    {brand.name}
                  </span>
                )}
              </motion.div>
            ))}
            {desktopFillers.map((_, index) => (
              <div
                key={`desktop-filler-${index}`}
                aria-hidden="true"
                className="hidden min-h-[88px] bg-[var(--color-bg-card)] xl:block"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
