"use client";

import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import type { Portfolio } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import { Eyebrow } from "./SectionHeader";

export function Contact({ portfolio }: { portfolio: Portfolio }) {
  const { personal } = portfolio;
  const contactHref = `mailto:${personal.email}`;
  const contactResumeHref = withBasePath("/Shivani_Mitra_Resume_June_2026.pdf");
  const telHref = `tel:${personal.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section id="contact" className="section-frame section-dark bg-[var(--bg-dark)] text-[var(--text-on-dark)]">
      <div className="mx-auto max-w-[1440px]">
        <Eyebrow inverted tone="white">Contact</Eyebrow>
        <div className="mt-4 rounded-[var(--radius-sharp)] border-[var(--border-width)] border-[var(--text-on-dark)] bg-[var(--bg-page)] p-6 text-[var(--text-primary)] lg:p-8">
          <h2 className="mt-0 max-w-[11ch] text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.05] tracking-[-0.05em] text-[var(--text-primary)]">
            Let&apos;s build marketing work that lands in culture and in the numbers.
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-[1.6] text-[var(--text-secondary)]">
            Open to senior marketing, brand strategy, client growth, and account leadership opportunities across entertainment, digital culture, and integrated campaigns.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={contactHref} className="btn btn-dark">
              Email Shivani <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={contactResumeHref} className="btn btn-outline" download>
              Resume Download <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <a href={contactHref} className="contact-link contact-link-dark">
            <div>
              <Mail className="h-5 w-5 text-[var(--text-on-dark)]" aria-hidden="true" />
              <p className="mt-6 neo-kicker text-[rgba(245,245,243,0.5)]">Email</p>
              <p className="mt-2 text-[16px] font-semibold break-words text-[var(--text-on-dark)]">{personal.email}</p>
            </div>
          </a>
          <a href={telHref} className="contact-link contact-link-dark">
            <div>
              <Phone className="h-5 w-5 text-[var(--text-on-dark)]" aria-hidden="true" />
              <p className="mt-6 neo-kicker text-[rgba(245,245,243,0.5)]">Phone</p>
              <p className="mt-2 text-[16px] font-semibold break-words text-[var(--text-on-dark)]">{personal.phone}</p>
            </div>
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link contact-link-dark">
            <div>
              <ArrowUpRight className="h-5 w-5 text-[var(--text-on-dark)]" aria-hidden="true" />
              <p className="mt-6 neo-kicker text-[rgba(245,245,243,0.5)]">LinkedIn</p>
              <p className="mt-2 text-[16px] font-semibold text-[var(--text-on-dark)]">View profile</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
