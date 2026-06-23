"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Play, X } from "lucide-react";
import { fadeUp, modalOverlay, modalPanel, staggerContainer } from "@/lib/animations";
import type { Portfolio } from "@/data/portfolio";
import type { CaseStudy } from "@/types/portfolio";
import { SectionHeader } from "./SectionHeader";

const toneClass: Record<CaseStudy["tone"], string> = {
  streaming: "from-[#080c0b] via-[#123129] to-[#2f5d4d]",
  cinema: "from-[#090d0c] via-[#16352d] to-[#416c5b]",
  music: "from-[#080c0b] via-[#102823] to-[#29574a]",
  finance: "from-[#090d0c] via-[#0f2e28] to-[#356a59]"
};

function CampaignVisual({ study }: { study: CaseStudy }) {
  return (
    <div className={`relative min-h-[330px] overflow-hidden bg-gradient-to-br ${toneClass[study.tone]} p-5 text-white`}>
      <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.14em] text-white/76">
        <span>{study.category}</span>
        <span>{study.brand}</span>
      </div>
      <div className="absolute left-5 top-20 grid h-16 w-16 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur">
        <Play className="h-6 w-6 fill-white" aria-hidden="true" />
      </div>
      <div className="absolute bottom-5 left-5 right-5 border border-white/18 bg-[rgba(247,250,248,0.94)] p-4 text-[var(--foreground)] shadow-2xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">Campaign board</span>
          <BarChart3 className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-5 items-end gap-2" aria-hidden="true">
          {[54, 78, 46, 88, 66].map((height, index) => (
            <span key={`${height}-${index}`} className="block bg-[var(--foreground)]" style={{ height }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-black/10 pt-4">
      <dt className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--accent)]">{label}</dt>
      <dd className="mt-2 text-base leading-7 text-[var(--text-muted)]">{value}</dd>
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
      className="fixed inset-0 z-[80] overflow-y-auto bg-[rgba(8,12,11,0.76)] p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${study.title} case study`}
      onMouseDown={onClose}
    >
      <motion.div variants={modalPanel} className="mx-auto my-8 max-w-5xl overflow-hidden bg-[var(--surface)] shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[color:var(--accent-border)] bg-[rgba(244,248,245,0.92)] p-5 backdrop-blur">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{study.category}</p>
            <h3 className="mt-1 text-2xl font-extrabold text-[var(--foreground)]">{study.title}</h3>
          </div>
          <button type="button" onClick={onClose} className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--accent-border)] bg-white" aria-label="Close case study">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <CampaignVisual study={study} />
        <div className="grid gap-8 p-5 lg:grid-cols-[0.7fr_1fr] lg:p-8">
          <div>
            <p className="font-serif text-4xl leading-none text-[var(--foreground)]">{study.brand}</p>
            <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">{study.metrics}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.platforms.map((platform) => (
                <span key={platform} className="theme-chip rounded-full px-3 py-2 text-sm font-semibold">
                  {platform}
                </span>
              ))}
            </div>
            {study.link ? (
              <a href={study.link} target="_blank" rel="noreferrer" className="premium-button premium-button-dark mt-7">
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
    <section id="work" className="bg-[radial-gradient(circle_at_top_left,rgba(64,108,91,0.18)_0,transparent_24%),linear-gradient(135deg,#080c0b_0%,#0c1714_36%,#19362e_100%)] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          eyebrow="Selected work"
          title="The campaigns that best show how strategy, culture, and performance can move together."
          intro="Each project is presented as a numbered work sample, closer to an agency case-study board than a generic portfolio card."
          inverted
        />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid gap-5 lg:grid-cols-2">
          {portfolio.caseStudies.map((study, index) => (
            <motion.article key={study.title} variants={fadeUp} className="overflow-hidden border border-white/12 bg-[rgba(7,12,11,0.82)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.28)]">
              <CampaignVisual study={study} />
              <div className="grid gap-5 p-6">
                <div className="flex items-start justify-between gap-4 border-b border-white/20 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[rgba(203,231,219,0.82)]">{study.category}</p>
                    <h3 className="mt-2 text-3xl font-extrabold text-white">{study.title}</h3>
                  </div>
                  <span className="font-serif text-4xl leading-none text-white/42">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="line-clamp-3 text-base leading-7 text-white/72">{study.metrics}</p>
                <button type="button" onClick={() => setActive(study)} className="premium-button premium-button-invert w-fit" aria-label={`Open ${study.title} case study`}>
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
