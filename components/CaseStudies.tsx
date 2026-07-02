"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { fadeUp, modalOverlay, modalPanel, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import type { CaseStudy } from "@/types/portfolio";
import { SectionPill } from "./SectionHeader";

import apharanImage from "../case study images /Apharan 2 (2).png";
import bhediyaImage from "../case study images /Bhediya.png";
import kashmirFilesImage from "../case study images /Kashmir Files.png";
import loveHostelImage from "../case study images /Love Hostel.png";
import scalpImage from "../case study images /Scalp.png";
import sonyMusicImage from "../case study images /Sony Music India.png";
import zwigatoImage from "../case study images /Zwigato.png";

const studyImages: Record<string, StaticImageData> = {
  "Glenmark Scalp Influencer Engine": scalpImage,
  "The Kashmir Files Social Campaign": kashmirFilesImage,
  "Sony Music India Organic Growth": sonyMusicImage,
  "Apharan 2 OTT Launch": apharanImage,
  "Bhediya Integrated Launch": bhediyaImage,
  "LoveHostel OTT Launch": loveHostelImage,
  "Zwigato Integrated Campaign": zwigatoImage
};

function WorkCardVisual({ study, index }: { study: CaseStudy; index: number }) {
  const cardNumber = String(index + 1).padStart(2, "0");
  const studyImage = studyImages[study.title];

  return (
    <div className="relative min-h-[220px] overflow-hidden bg-[var(--color-text-primary)] px-5 pt-5">
      <Image
        src={studyImage}
        alt={`${study.brand} campaign visual`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 1 }}
      />
      <span className="absolute left-5 top-5 text-[11px] font-bold tracking-[0.1em] text-[var(--color-accent)] uppercase">
        {study.category}
      </span>
      <span className="absolute right-5 top-5 text-[11px] font-bold tracking-[0.12em] text-[var(--color-text-muted)] uppercase">
        {study.brand}
      </span>
      <span className="pointer-events-none absolute bottom-[-10px] left-5 select-none text-[clamp(80px,12vw,140px)] font-black leading-none tracking-[-0.06em] text-[var(--color-amber)] opacity-25">
        {cardNumber}
      </span>
      <span className="absolute bottom-5 right-5 text-[11px] font-bold tracking-[0.1em] text-[var(--color-text-muted)] uppercase">
        {cardNumber} / 07
      </span>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-[1.5px] border-[var(--color-border)] bg-[var(--color-bg-card-alt)] px-4 py-4">
      <dt className="text-[11px] font-bold tracking-[0.12em] text-[var(--color-text-muted)] uppercase">{label}</dt>
      <dd className="mt-2 text-[14px] leading-[1.65] text-[var(--color-text-primary)]">{value}</dd>
    </div>
  );
}

function CaseStudyModal({
  study,
  index,
  onClose
}: {
  study: CaseStudy;
  index: number;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      variants={modalOverlay}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[110] overflow-y-auto bg-[rgba(30,10,60,0.85)] p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${study.title} case study`}
      onMouseDown={onClose}
    >
      <motion.div
        variants={modalPanel}
        className="mx-auto my-8 max-w-6xl overflow-hidden border-[var(--border-width)] border-[var(--color-border)] bg-[var(--color-bg-card)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b-[var(--border-width)] border-[var(--color-border)] bg-[var(--color-bg-card)] px-5 py-5 lg:px-8">
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] text-[var(--color-text-muted)] uppercase">
              {study.category}
            </p>
            <h3 className="mt-2 text-[clamp(28px,4vw,46px)] font-black leading-none tracking-[-0.04em] text-[var(--color-text-primary)] uppercase">
              {study.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center border-[var(--border-width)] border-[var(--color-border)] text-[var(--color-text-primary)]"
            aria-label="Close case study"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <WorkCardVisual study={study} index={index} />
        <div className="grid gap-8 px-5 py-6 lg:grid-cols-[0.72fr_1fr] lg:px-8 lg:py-8">
          <div>
            <SectionPill>{study.brand}</SectionPill>
            <p className="text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">{study.metrics}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.platforms.map((platform) => (
                <span key={platform} className="tag">
                  {platform}
                </span>
              ))}
            </div>
            {study.link ? (
              <a href={study.link} target="_blank" rel="noreferrer" className="btn btn-outline-purple mt-8">
                OPEN WORK SAMPLE <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>
          <dl className="grid gap-3">
            <DetailRow label="Objective" value={study.objective} />
            <DetailRow label="Audience" value={study.audience} />
            <DetailRow label="Challenge" value={study.challenge} />
            <DetailRow label="Strategy" value={study.strategy} />
            <DetailRow label="Execution" value={study.execution} />
            <DetailRow label="Role & Leadership" value={study.role} />
            <DetailRow label="Team Structure" value={study.teamStructure} />
            <DetailRow label="Learnings" value={study.learnings} />
          </dl>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CaseStudies({ portfolio }: { portfolio: Portfolio }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeStudy = activeIndex !== null ? portfolio.caseStudies[activeIndex] : null;

  return (
    <section id="work" className="page-section bg-[var(--color-bg-page)]">
      <div className="page-inner">
        <div className="split-header">
          <div>
            <SectionPill>SELECTED WORK</SectionPill>
            <h2 className="display-heading-mid">CAMPAIGNS THAT MOVED CULTURE AND THE NUMBERS.</h2>
          </div>
          <p className="section-copy pt-0 lg:pt-10">
            These case studies show how audience insight, cultural timing, and disciplined execution
            came together across launches, OTT, film, and influencer campaigns.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid items-start gap-3 lg:grid-cols-2"
        >
          {portfolio.caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              variants={fadeUp}
              className={`overflow-hidden border-[var(--border-width)] border-[var(--color-border)] transition-colors duration-200 hover:border-[var(--color-accent)] ${
                index === portfolio.caseStudies.length - 1 ? "lg:col-span-2" : ""
              }`}
            >
              <WorkCardVisual study={study} index={index} />
              <div className="h-[2px] bg-[var(--color-border)]" aria-hidden="true" />
              <div className="flex h-full flex-col bg-[var(--color-bg-card)] px-6 py-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[11px] font-semibold tracking-[0.1em] text-[var(--color-text-muted)] uppercase">
                    {study.category}
                  </span>
                  <span className="label-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="my-4 h-[2px] bg-[var(--color-border)]" aria-hidden="true" />
                <h3 className="text-[20px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[var(--color-text-primary)] uppercase">
                  {study.title}
                </h3>
                <p className="body-small line-clamp-3 mt-3 max-w-none">{study.metrics}</p>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="btn btn-outline-purple mt-4 w-fit px-5 py-2.5 text-[11px]"
                  aria-label={`Open ${study.title} case study`}
                >
                  VIEW CASE STUDY <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {activeStudy ? (
          <CaseStudyModal study={activeStudy} index={activeIndex ?? 0} onClose={() => setActiveIndex(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
