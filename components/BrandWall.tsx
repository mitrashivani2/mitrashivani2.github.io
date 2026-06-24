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
        <div className="neo-grid-frame overflow-hidden border-[3px] p-[6px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-[6px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          >
            {portfolio.brands.map((brand) => (
              <motion.div key={brand.name} variants={fadeUp} className="logo-cell group px-4 text-center">
                {brand.logo ? (
                  <Image
                    src={withBasePath(brand.logo)}
                    alt={`${brand.name} logo`}
                    width={170}
                    height={76}
                    sizes="170px"
                    className="max-h-10 w-auto max-w-[80%] object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />
                ) : (
                  <span className="text-[14px] font-semibold text-[var(--color-black)]">{brand.name}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <p className="section-intro section-intro-light mt-5 max-w-none">Logos shown for portfolio context only.</p>
      </div>
    </section>
  );
}
