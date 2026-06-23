"use client";

import { ArrowUpRight, Download } from "lucide-react";
import type { Portfolio } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import { Eyebrow } from "./SectionHeader";

export function Resume({ portfolio }: { portfolio: Portfolio }) {
  const { personal } = portfolio;

  return (
    <section className="bg-[rgba(231,239,234,0.72)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.34fr_1fr]">
        <div>
          <Eyebrow>Resume</Eyebrow>
          <h2 className="mt-4 max-w-[10ch] font-serif text-[2.95rem] leading-[0.95] text-[var(--foreground)] sm:text-[3.8rem] lg:text-[4.4rem]">
            Recruiter-ready details.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-[var(--text-muted)] sm:text-[1.02rem]">
            Download the resume directly or open the PDF in a separate tab for a cleaner reading experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={withBasePath(personal.resume)} className="premium-button premium-button-dark" download>
              Download Resume <Download className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={withBasePath(personal.resumePdf)} className="premium-button premium-button-light" target="_blank" rel="noreferrer">
              Open PDF <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {portfolio.selectedWork.map((work) => (
            <a
              key={work.title}
              href={work.href}
              target="_blank"
              rel="noreferrer"
              className="theme-panel group p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(8,15,13,0.1)]"
            >
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{work.type}</span>
              <strong className="mt-3 block text-2xl leading-tight text-[var(--foreground)]">{work.title}</strong>
              <ArrowUpRight className="mt-8 h-5 w-5 text-[var(--accent)] transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
