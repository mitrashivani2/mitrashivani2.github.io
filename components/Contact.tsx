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
    <section id="contact" className="neo-noise section-frame section-dark">
      <div className="mx-auto max-w-[1440px]">
        <div className="theme-panel rounded-[20px] bg-[var(--color-lime)] p-6 text-[var(--color-black)] lg:p-8">
          <Eyebrow tone="orange">Contact</Eyebrow>
          <h2 className="section-heading mt-5 max-w-[11ch]">
            Let&apos;s build marketing work that lands in culture and in the numbers.
          </h2>
          <p className="section-intro mt-4 max-w-3xl text-[var(--color-black)] opacity-70">
            Open to senior marketing, brand strategy, client growth, and account leadership opportunities across entertainment, digital culture, and integrated campaigns.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={contactHref} className="btn btn-outline">
              Email Shivani <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={contactResumeHref} className="btn btn-filled" download>
              Resume Download <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <a href={contactHref} className="contact-link theme-panel bg-[var(--color-off-white-card)] text-[var(--color-black)]">
            <div>
              <Mail className="h-5 w-5 text-[var(--color-black)]" aria-hidden="true" />
              <p className="mt-6 neo-kicker opacity-60">Email</p>
              <p className="mt-2 text-[16px] font-semibold break-words text-[var(--color-black)]">{personal.email}</p>
            </div>
          </a>
          <a href={telHref} className="contact-link theme-panel neo-card-accent-blue text-[var(--color-black)]">
            <div>
              <Phone className="h-5 w-5 text-[var(--color-black)]" aria-hidden="true" />
              <p className="mt-6 neo-kicker opacity-60">Phone</p>
              <p className="mt-2 text-[16px] font-semibold break-words text-[var(--color-black)]">{personal.phone}</p>
            </div>
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link theme-panel neo-card-accent-orange text-[var(--color-black)]">
            <div>
              <ArrowUpRight className="h-5 w-5 text-[var(--color-black)]" aria-hidden="true" />
              <p className="mt-6 neo-kicker opacity-60">LinkedIn</p>
              <p className="mt-2 text-[16px] font-semibold text-[var(--color-black)]">View profile</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
