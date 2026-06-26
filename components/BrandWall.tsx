"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

export function BrandWall({ portfolio }: { portfolio: Portfolio }) {
  return (
    <section id="brands" className="section-frame section-light">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="Brands & clients"
          title="A multi-sector roster spanning OTT, film, music, finance, FMCG, and hospitality."
          intro="From streaming platforms and studios to music, FMCG, finance, and hospitality, this roster reflects the range of brands I have helped grow."
          tone="blue"
        />
        <div className="neo-grid-frame overflow-hidden">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-px bg-[var(--border-light)] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          >
            {portfolio.brands.map((brand) => (
              <motion.div key={brand.name} variants={fadeUp} className="logo-cell group text-center">
                {brand.logo ? (
                  <Image
                    src={withBasePath(brand.logo)}
                    alt={`${brand.name} logo`}
                    width={170}
                    height={76}
                    sizes="170px"
                    className="w-auto object-contain"
                  />
                ) : (
                  <span className="text-[15px] font-semibold text-[var(--text-primary)] opacity-75">{brand.name}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
