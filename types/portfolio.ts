export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type Brand = {
  name: string;
  logo?: string;
};

export type ExpertiseGroup = {
  title: string;
  items: string[];
};

export type CaseStudyTone = "streaming" | "cinema" | "music" | "finance";

export type CaseStudy = {
  title: string;
  category: string;
  brand: string;
  tone: CaseStudyTone;
  objective: string;
  audience: string;
  challenge: string;
  strategy: string;
  execution: string;
  platforms: string[];
  role: string;
  teamStructure: string;
  learnings: string;
  metrics: string;
  link?: string;
};

export type JourneyItem = {
  company: string;
  roles: string[];
  period: string;
  highlights: string[];
};

export type SelectedWork = {
  title: string;
  type: string;
  href: string;
};
