"use client";

import type { Portfolio } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";
import { SectionPill } from "./SectionHeader";

export function Contact({ portfolio }: { portfolio: Portfolio }) {
  const { personal } = portfolio;
  const contactHref = `mailto:${personal.email}`;
  const resumeHref = withBasePath("/Shivani_Mitra_Resume_June_2026.pdf");
  const telHref = `tel:${personal.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section id="contact" className="page-section page-section-dark">
      <div className="page-inner">
        <SectionPill dark className="mb-10">
          CONTACT
        </SectionPill>

        <div className="mb-12 grid gap-12 md:grid-cols-2 md:items-start">
          <div className="border-[var(--border-width)] border-[var(--color-border)] bg-[var(--color-bg-card)] px-8 py-9 text-[var(--color-text-primary)]">
            <h2 className="text-[clamp(24px,3vw,36px)] font-black leading-[1.05] tracking-[-0.04em] uppercase">
              LET&apos;S BUILD MARKETING WORK THAT LANDS IN CULTURE AND IN THE NUMBERS.
            </h2>
            <p className="mt-4 text-[14px] leading-[1.65] text-[var(--color-text-secondary)]">
              Open to senior marketing, brand strategy, client growth, and account leadership
              opportunities across entertainment, digital culture, and integrated campaigns.
            </p>
            <div className="my-6 h-[2px] bg-[var(--color-border)]" aria-hidden="true" />
            <div className="flex flex-wrap gap-3">
              <a href={contactHref} className="btn btn-amber">
                EMAIL SHIVANI
              </a>
              <a href={resumeHref} className="btn btn-outline-purple" download>
                DOWNLOAD RESUME
              </a>
            </div>
          </div>

          <form
            action={contactHref}
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-3"
          >
            <label className="sr-only" htmlFor="contact-name">
              Your name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="YOUR NAME"
              className="contact-input"
              required
            />

            <label className="sr-only" htmlFor="contact-email">
              Your email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="YOUR EMAIL"
              className="contact-input"
              required
            />

            <label className="sr-only" htmlFor="contact-phone">
              Your phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="YOUR PHONE (OPTIONAL)"
              className="contact-input"
            />

            <label className="sr-only" htmlFor="contact-message">
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="YOUR MESSAGE"
              className="contact-textarea"
              rows={5}
              required
            />

            <button type="submit" className="btn btn-amber w-full py-4">
              SEND MESSAGE
            </button>
            <p className="text-[12px] leading-[1.5] text-[rgba(248,244,255,0.55)]">
              Submitting opens your mail client.
            </p>
          </form>
        </div>

        <div className="grid gap-[2px] bg-[var(--color-border-dark)] md:grid-cols-3">
          <a href={contactHref} className="bg-[rgba(248,244,255,0.04)] px-7 py-6 transition hover:bg-[rgba(248,244,255,0.08)]">
            <span className="block text-[10px] font-bold tracking-[0.14em] text-[rgba(248,244,255,0.4)] uppercase">
              Email
            </span>
            <span className="mt-2 block break-all text-[15px] font-semibold text-[var(--color-text-on-dark)]">
              {personal.email}
            </span>
          </a>
          <a href={telHref} className="bg-[rgba(248,244,255,0.04)] px-7 py-6 transition hover:bg-[rgba(248,244,255,0.08)]">
            <span className="block text-[10px] font-bold tracking-[0.14em] text-[rgba(248,244,255,0.4)] uppercase">
              Phone
            </span>
            <span className="mt-2 block break-all text-[15px] font-semibold text-[var(--color-text-on-dark)]">
              {personal.phone}
            </span>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-[rgba(248,244,255,0.04)] px-7 py-6 transition hover:bg-[rgba(248,244,255,0.08)]"
          >
            <span className="block text-[10px] font-bold tracking-[0.14em] text-[rgba(248,244,255,0.4)] uppercase">
              LinkedIn
            </span>
            <span className="mt-2 block text-[15px] font-semibold text-[var(--color-text-on-dark)]">
              View profile →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
