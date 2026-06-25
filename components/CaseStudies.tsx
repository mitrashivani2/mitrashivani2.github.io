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
    badge: "section-label",
    poster: "bg-[var(--bg-card-alt)]",
    pill: "section-label"
  },
  cinema: {
    badge: "section-label",
    poster: "bg-[var(--bg-card-alt)]",
    pill: "section-label"
  },
  music: {
    badge: "section-label",
    poster: "bg-[var(--bg-card-alt)]",
    pill: "section-label"
  },
  finance: {
    badge: "section-label",
    poster: "bg-[var(--bg-card-alt)]",
    pill: "section-label"
  }
};

function CampaignVisual({ study }: { study: CaseStudy }) {
  const tone = toneClass[study.tone];

  return (
    <div className={`relative min-h-[240px] overflow-hidden border-b-[var(--border-width)] border-[var(--border-color)] ${tone.poster} p-5 text-[var(--text-primary)]`}>
      <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4">
        <span className="section-label">{study.category}</span>
        <span className="neo-kicker text-[var(--text-primary)]">{study.brand}</span>
      </div>
      <div className="absolute left-5 top-20 grid h-16 w-16 place-items-center rounded-full border-[var(--border-width)] border-[var(--border-color)] bg-[var(--bg-card)]">
        <Play className="h-6 w-6 fill-[var(--text-primary)] text-[var(--text-primary)]" aria-hidden="true" />
      </div>
      <div className="card absolute bottom-5 left-5 right-5 p-4 text-[var(--text-primary)]">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className={tone.pill}>Campaign board</span>
          <BarChart3 className="h-5 w-5 text-[var(--text-primary)]" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-5 items-end gap-2" aria-hidden="true">
          {[54, 78, 46, 88, 66].map((height, index) => (
            <span key={`${height}-${index}`} className="block rounded-t-[2px] bg-[var(--text-primary)]" style={{ height }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-inner">
      <dt className="neo-kicker text-[var(--text-muted)]">{label}</dt>
      <dd className="card-body-text mt-2 text-[var(--text-primary)]">{value}</dd>
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
      className="fixed inset-0 z-[80] overflow-y-auto bg-[rgba(13,13,13,0.8)] p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${study.title} case study`}
      onMouseDown={onClose}
    >
      <motion.div variants={modalPanel} className="mx-auto my-8 max-w-5xl overflow-hidden rounded-[var(--radius-sharp)] border-[var(--border-width)] border-[var(--border-color)] bg-[var(--bg-card)] shadow-[var(--shadow-card-hover)]" onMouseDown={(event) => event.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--border-light)] bg-[var(--bg-card)] p-5">
          <div>
            <p className="neo-kicker text-[var(--text-muted)]">{study.category}</p>
            <h3 className="mt-1 text-2xl font-black tracking-[-0.04em] text-[var(--text-primary)]">{study.title}</h3>
          </div>
          <button type="button" onClick={onClose} className="grid h-11 w-11 place-items-center rounded-full border-[var(--border-width)] border-[var(--border-color)] bg-transparent" aria-label="Close case study">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <CampaignVisual study={study} />
        <div className="grid gap-8 p-5 lg:grid-cols-[0.7fr_1fr] lg:p-8">
          <div>
            <span className={toneClass[study.tone].badge}>{study.brand}</span>
            <p className="section-heading mt-5 max-w-none text-[2rem]">{study.title}</p>
            <p className="card-body-text mt-4 text-[var(--text-primary)]">{study.metrics}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.platforms.map((platform) => (
                <span key={platform} className="tool-tag">
                  {platform}
                </span>
              ))}
            </div>
            {study.link ? (
              <a href={study.link} target="_blank" rel="noreferrer" className="btn btn-outline mt-7">
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
    <section id="work" className="section-frame section-light">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="Selected work"
          title="The campaigns that best show how strategy, culture, and performance can move together."
          intro="These case studies show how audience insight, cultural timing, and disciplined execution came together across launches, OTT, film, and influencer campaigns."
          tone="green"
        />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid gap-4 lg:grid-cols-2">
          {portfolio.caseStudies.map((study, index) => (
            <motion.article key={study.title} variants={fadeUp} className="card overflow-hidden">
              <CampaignVisual study={study} />
              <div className="grid gap-5 bg-[var(--bg-card)] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={toneClass[study.tone].badge}>{study.category}</span>
                    <h3 className="mt-4 text-[22px] font-bold tracking-[-0.03em] text-[var(--text-primary)]">{study.title}</h3>
                  </div>
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="border-t border-[var(--border-light)]" />
                <p className="line-clamp-3 card-body-text max-w-none">{study.metrics}</p>
                <button type="button" onClick={() => setActive(study)} className="btn btn-outline w-fit" aria-label={`Open ${study.title} case study`}>
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
