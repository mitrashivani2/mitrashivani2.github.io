"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Play, X } from "lucide-react";
import { fadeUp, modalOverlay, modalPanel, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import type { CaseStudy } from "@/types/portfolio";
import { SectionHeader } from "./SectionHeader";

const toneClass: Record<
  CaseStudy["tone"],
  {
    badge: string;
    poster: string;
    pill: string;
  }
> = {
  streaming: {
    badge: "section-label neo-badge-green",
    poster: "bg-[linear-gradient(135deg,var(--color-lime)_0%,var(--color-blue)_58%,var(--color-white)_100%)]",
    pill: "bg-[var(--color-lime)]"
  },
  cinema: {
    badge: "section-label neo-badge-orange",
    poster: "bg-[linear-gradient(135deg,var(--color-orange)_0%,var(--color-yellow)_58%,var(--color-white)_100%)]",
    pill: "bg-[var(--color-orange)]"
  },
  music: {
    badge: "section-label neo-badge-blue",
    poster: "bg-[linear-gradient(135deg,var(--color-blue)_0%,var(--color-yellow)_52%,var(--color-white)_100%)]",
    pill: "bg-[var(--color-blue)]"
  },
  finance: {
    badge: "section-label neo-badge-yellow",
    poster: "bg-[linear-gradient(135deg,var(--color-lime)_0%,var(--color-blue)_54%,var(--color-white)_100%)]",
    pill: "bg-[var(--color-yellow)]"
  }
};

function CampaignVisual({ study }: { study: CaseStudy }) {
  const tone = toneClass[study.tone];

  return (
    <div className={`relative min-h-[330px] overflow-hidden rounded-[var(--radius-card-inner)] border-[2px] border-[var(--color-black)] ${tone.poster} p-5 text-[var(--color-black)]`}>
      <div className="absolute -right-8 top-8 h-28 w-28 rounded-full border-[2px] border-[var(--color-black)] bg-[var(--color-white)] opacity-70" />
      <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4">
        <span className="section-label bg-[var(--color-white)]">{study.category}</span>
        <span className="neo-kicker">{study.brand}</span>
      </div>
      <div className="absolute left-5 top-20 grid h-16 w-16 place-items-center rounded-full border-[2px] border-[var(--color-black)] bg-[var(--color-white)] shadow-[var(--shadow-card)]">
        <Play className="h-6 w-6 fill-[var(--color-black)]" aria-hidden="true" />
      </div>
      <div className="card theme-panel absolute bottom-5 left-5 right-5 p-4 text-[var(--color-black)]">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className={`section-label ${tone.pill}`}>Campaign board</span>
          <BarChart3 className="h-5 w-5 text-[var(--color-black)]" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-5 items-end gap-2" aria-hidden="true">
          {[54, 78, 46, 88, 66].map((height, index) => (
            <span key={`${height}-${index}`} className="block rounded-t-[0.45rem] bg-[var(--color-black)]" style={{ height }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-inner bg-[var(--color-light-grey)]">
      <dt className="neo-kicker text-[rgba(13,13,13,0.6)]">{label}</dt>
      <dd className="card-body-text mt-2 text-[rgba(13,13,13,0.84)]">{value}</dd>
    </div>
  );
}

function CaseStudyModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
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
      className="fixed inset-0 z-[80] overflow-y-auto bg-[rgba(13,13,13,0.8)] p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${study.title} case study`}
      onMouseDown={onClose}
    >
      <motion.div variants={modalPanel} className="mx-auto my-8 max-w-5xl overflow-hidden rounded-[20px] border-[2px] border-[var(--color-black)] bg-[var(--color-white)] shadow-[var(--shadow-card-hover)]" onMouseDown={(event) => event.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-center justify-between border-b-[2px] border-[var(--color-black)] bg-[var(--color-white)] p-5 backdrop-blur">
          <div>
            <p className="neo-kicker text-[rgba(13,13,13,0.6)]">{study.category}</p>
            <h3 className="mt-1 text-2xl font-black tracking-[-0.04em] text-[var(--color-black)]">{study.title}</h3>
          </div>
          <button type="button" onClick={onClose} className="grid h-11 w-11 place-items-center rounded-full border-[2px] border-[var(--color-black)] bg-[var(--color-yellow)] shadow-[var(--shadow-card)]" aria-label="Close case study">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <CampaignVisual study={study} />
        <div className="grid gap-8 p-5 lg:grid-cols-[0.7fr_1fr] lg:p-8">
          <div>
            <span className={toneClass[study.tone].badge}>{study.brand}</span>
            <p className="section-heading mt-5 max-w-none text-[2.8rem]">{study.title}</p>
            <p className="card-body-text mt-4 text-[rgba(13,13,13,0.72)]">{study.metrics}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.platforms.map((platform) => (
                <span key={platform} className="tool-tag bg-[var(--color-light-grey)]">
                  {platform}
                </span>
              ))}
            </div>
            {study.link ? (
              <a href={study.link} target="_blank" rel="noreferrer" className="btn btn-filled-lime mt-7">
                Open Work Sample <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>
          <dl className="grid gap-5">
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
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="neo-noise section-frame section-dark border-y-[2px] border-[var(--color-white)]">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="Selected work"
          title="The campaigns that best show how strategy, culture, and performance can move together."
          intro="These case studies show how audience insight, cultural timing, and disciplined execution came together across launches, OTT, film, and influencer campaigns."
          inverted
          tone="green"
        />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid gap-[var(--gap-card-grid)] lg:grid-cols-2">
          {portfolio.caseStudies.map((study, index) => (
            <motion.article key={study.title} variants={fadeUp} className="card theme-panel-dark overflow-hidden p-3">
              <CampaignVisual study={study} />
              <div className="grid gap-5 p-6">
                <div className="flex items-start justify-between gap-4 border-b border-[rgba(255,255,255,0.15)] pb-4">
                  <div>
                    <span className={toneClass[study.tone].badge}>{study.category}</span>
                    <h3 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white">{study.title}</h3>
                  </div>
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[rgba(255,255,255,0.3)]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="line-clamp-3 section-intro section-intro-dark max-w-none">{study.metrics}</p>
                <button type="button" onClick={() => setActive(study)} className="btn btn-filled w-fit" aria-label={`Open ${study.title} case study`}>
                  View Case Study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>{active ? <CaseStudyModal study={active} onClose={() => setActive(null)} /> : null}</AnimatePresence>
    </section>
  );
}
