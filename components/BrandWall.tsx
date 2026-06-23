"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

export function BrandWall({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section id="brands" className="bg-[rgba(231,239,234,0.76)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader eyebrow="Brands & clients" title="A multi-sector portfolio across culture, content, finance, FMCG, and hospitality." />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid border border-[color:var(--accent-border)] bg-[rgba(8,15,13,0.06)] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {portfolio.brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={fadeUp}
              className="group grid min-h-32 place-items-center bg-[rgba(250,252,251,0.95)] p-5 text-center transition duration-300 hover:bg-[rgba(237,244,240,0.98)]"
            >
              {brand.logo ? (
                <Image
                  src={withBasePath(brand.logo)}
                  alt={`${brand.name} logo`}
                  width={170}
                  height={76}
                  sizes="170px"
                  className="max-h-14 w-auto object-contain grayscale transition duration-300 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              ) : (
                <span className="text-lg font-extrabold text-[var(--foreground)] transition duration-300 group-hover:scale-[1.03] group-hover:text-[var(--accent)]">
                  {brand.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-5 text-sm text-[var(--text-muted)]">Logos shown for portfolio context only.</p>
      </div>
    </section>
  );
}
