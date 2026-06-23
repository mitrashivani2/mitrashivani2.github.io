"use client";

import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import type { Portfolio } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import { Eyebrow } from "./SectionHeader";

export function Contact({ portfolio }: { portfolio: Portfolio }) {
  const { personal } = portfolio;
  const contactHref = `mailto:${personal.email}`;
  const telHref = `tel:${personal.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section id="contact" className="bg-[radial-gradient(circle_at_top_right,rgba(55,99,84,0.22)_0,transparent_22%),linear-gradient(135deg,#080c0b_0%,#0c1513_42%,#1c3a31_100%)] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <Eyebrow inverted>Contact</Eyebrow>
        <h2 className="mt-4 max-w-[11ch] font-serif text-[3rem] leading-[0.95] sm:text-[4.15rem] lg:text-[5rem]">
          Let&apos;s Build Impactful Marketing Together
        </h2>
        <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-white/68 sm:text-[1.02rem]">
          Open to Senior Marketing, Brand Strategy, Client Growth, and Account Leadership Opportunities.
        </p>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          <a href={contactHref} className="contact-link">
            <Mail className="h-5 w-5" aria-hidden="true" /> {personal.email}
          </a>
          <a href={telHref} className="contact-link">
            <Phone className="h-5 w-5" aria-hidden="true" /> {personal.phone}
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" /> LinkedIn
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={contactHref} className="premium-button premium-button-invert">
            Email Shivani <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={withBasePath(personal.resume)} className="premium-button premium-button-outline-dark" download>
            Resume Download <Download className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
