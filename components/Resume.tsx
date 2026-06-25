"use client";

import { ArrowUpRight, Download } from "lucide-react";
import type { Portfolio } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import { Eyebrow } from "./SectionHeader";

export function Resume({ portfolio }: { portfolio: Portfolio }) {
  const { personal } = portfolio;

  return (
    <section className="section-frame section-light">
      <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.34fr_1fr]">
        <div>
          <Eyebrow tone="green" size="section">Resume</Eyebrow>
          <p className="section-header-intro section-header-intro-light mt-4">
            Download the resume directly or open the PDF in a separate tab for a cleaner reading experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={withBasePath(personal.resume)} className="btn btn-filled-lime" download>
              Download Resume <Download className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={withBasePath(personal.resumePdf)} className="btn btn-outline" target="_blank" rel="noreferrer">
              Open PDF <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="card mt-8 max-w-md p-[var(--card-padding)]">
            <p className="neo-kicker">Proof stack</p>
            <p className="card-body-text mt-4 text-[var(--text-primary)]">
              The selected links on the right act as a mini proof archive: launch campaigns, OTT work, influencer strategy, and public-facing portfolio references.
            </p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {portfolio.selectedWork.map((work, index) => (
            <a
              key={work.title}
              href={work.href}
              target="_blank"
              rel="noreferrer"
              className="card group p-[var(--card-padding)]"
            >
              <span className="neo-kicker">{work.type}</span>
              <strong className="mt-3 block text-[22px] font-bold leading-tight tracking-[-0.03em] text-[var(--text-primary)]">{work.title}</strong>
              <ArrowUpRight className="mt-8 h-5 w-5 text-[var(--text-primary)]" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
