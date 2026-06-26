import { BrandWall } from "@/components/BrandWall";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { Navbar } from "@/components/Navbar";
import { Timeline } from "@/components/Timeline";
import { Tools } from "@/components/Tools";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.personal.name,
    jobTitle: "Senior Account Manager",
    email: portfolio.personal.email,
    telephone: portfolio.personal.phone,
    url: portfolio.personal.linkedin,
    sameAs: [portfolio.personal.linkedin],
    knowsAbout: [
      "Brand Strategy",
      "Digital Marketing",
      "Client Growth",
      "Entertainment Marketing",
      "OTT Marketing",
      "Influencer Marketing",
      "Social Media Strategy"
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--bg-dark)] focus:px-4 focus:py-3 focus:text-[var(--text-on-dark)]"
      >
        Skip to content
      </a>
      <Navbar portfolio={portfolio} />
      <main id="content" className="bg-transparent text-[var(--text-primary)]">
        <Hero portfolio={portfolio} />
        <ImpactStats portfolio={portfolio} />
        <BrandWall portfolio={portfolio} />
        <Expertise portfolio={portfolio} />
        <CaseStudies portfolio={portfolio} />
        <Timeline portfolio={portfolio} />
        <Tools portfolio={portfolio} />
        <Contact portfolio={portfolio} />
      </main>
      <Footer portfolio={portfolio} />
    </>
  );
}
