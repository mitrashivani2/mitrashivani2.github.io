import type { Brand, CaseStudy, ExpertiseGroup, JourneyItem, Metric, SelectedWork } from "@/types/portfolio";

export const portfolio = {
  personal: {
    name: "Shivani Mitra",
    title: "Senior Account Manager | Brand Strategy | Digital Marketing | Client Growth",
    positioning:
      "Marketing & Client Growth Leader helping brands scale through content, culture, entertainment, and digital-first campaigns.",
    hero: "I build brands that people talk about - and numbers that prove it.",
    supporting:
      "Senior marketing professional with 7+ years of experience across digital strategy, campaign management, and influencer marketing. I've led campaigns that sold Rs290Cr worth of film tickets, built a 1.7M music community, and cut influencer CPV by 42% through three years of compounding data.",
    email: "mitra.shivani2@gmail.com",
    phone: "+91-7999368670",
    linkedin: "https://www.linkedin.com/in/shivanimitra30/",
    resume: "/Shivani_Mitra_Resume_ATS.pdf",
    resumeDoc: "/Shivani_Mitra_Resume_ATS.docx",
    resumePdf: "/Shivani_Mitra_Resume_ATS.pdf",
    portrait: "/Professional Profile Picture.PNG"
  },
  metrics: [
    {
      value: "7+",
      label: "Years in Digital Marketing",
      detail: "Across agency environments spanning entertainment, OTT, FMCG, fintech, music, and hospitality."
    },
    {
      value: "Rs290Cr",
      label: "Box Office Driven",
      detail: "Generated through a social-first film campaign built to sustain theatrical demand."
    },
    {
      value: "1.7M",
      label: "Community Built",
      detail: "Grew Sony Music India's audience over 4 years through weekly strategy cycles."
    },
    {
      value: "42%",
      label: "CPV Reduction",
      detail: "Delivered on a 3-year influencer programme through data-driven creator selection."
    },
    {
      value: "314M+",
      label: "Impressions on One Campaign",
      detail: "Achieved on a single film launch built around audience sentiment and cultural momentum."
    },
    {
      value: "30+",
      label: "Brand Campaigns Annually",
      detail: "Managed at scale with 90% on-time delivery across multi-brand portfolios."
    }
  ] satisfies Metric[],
  about:
    "Most marketing problems are not creative problems or data problems - they are sequencing problems. Knowing which comes first: the emotion or the call to action, the awareness spike or the sustained presence, the influencer or the meme.",
  philosophy: [
    "The best campaigns I've worked on didn't feel like campaigns. They felt like something the internet discovered on its own.",
    "After seven years of managing multi-brand portfolios across entertainment, FMCG, and music, I've learned that what separates effective marketing from noise is specificity: specific audience, specific moment, specific reason to care.",
    "I work at the intersection of strategy, creativity, and performance - and I know which one to lead with depending on the brief."
  ],
  brands: [
    { name: "JioHotstar", logo: "/Brand Logos/JioHotstar.jpg" },
    { name: "Netflix India" },
    { name: "Amazon Prime Video" },
    { name: "Maddock Films", logo: "/Brand Logos/Maddock Films.jpg" },
    { name: "Applause Entertainment", logo: "/Brand Logos/Applause.jpg" },
    { name: "T-Series Films", logo: "/Brand Logos/T-series.png" },
    { name: "Zee Studios", logo: "/Brand Logos/Zee studios.png" },
    { name: "Sony Music India", logo: "/Brand Logos/SM_Primary_RedandWhite_RGB_Logo.png" },
    { name: "Sony Pictures India", logo: "/Brand Logos/SPI.jpg" },
    { name: "HYBE India" },
    { name: "Saregama", logo: "/Brand Logos/saregama.jpg" },
    { name: "Tips Films", logo: "/Brand Logos/Tips.jpg" },
    { name: "Hershey's India", logo: "/Brand Logos/Hersheys.jpg" },
    { name: "Glenmark Pharmaceuticals", logo: "/Brand Logos/Glenmark.png" },
    { name: "Tata Wiron", logo: "/Brand Logos/Tata Wiron.png" },
    { name: "Asian Paints", logo: "/Brand Logos/Asian Paints.png" },
    { name: "JSW Ventures", logo: "/Brand Logos/JSW Ventures.jpg" },
    { name: "Holiday Inn", logo: "/Brand Logos/IHG hotels.png" },
    { name: "Sheraton Grand", logo: "/Brand Logos/Sheraton.png" },
    { name: "DoubleTree by Hilton", logo: "/Brand Logos/Hilton.png" },
    { name: "Rallis India", logo: "/Brand Logos/Tata Rallis.jpg" },
    { name: "Cube Highways", logo: "/Brand Logos/Cube Highways.png" }
  ] satisfies Brand[],
  expertise: [
    {
      title: "Client & Account Leadership",
      items: ["Stakeholder management", "Retention", "Growth strategy", "Revenue expansion"]
    },
    {
      title: "Brand Strategy",
      items: ["Positioning", "Campaign planning", "Audience engagement"]
    },
    {
      title: "Social Media & Content",
      items: ["Content strategy", "Social growth", "Community engagement"]
    },
    {
      title: "Influencer Marketing",
      items: ["Creator partnerships", "Campaign execution", "Performance optimization"]
    },
    {
      title: "Paid Media",
      items: ["Amplification", "Performance tracking", "Optimization"]
    },
    {
      title: "AI-Powered Marketing",
      items: ["Content workflows", "Campaign efficiency", "Automation support"]
    }
  ] satisfies ExpertiseGroup[],
  caseStudies: [
    {
      title: "The Kashmir Files Social Campaign",
      category: "Film launch campaign",
      brand: "Zee Studios",
      tone: "cinema",
      objective: "Convert audience sentiment around a politically sensitive film into awareness, intent, and sustained theatrical conversation.",
      audience: "Cinema audiences, cultural commentators, community advocates, political conversation clusters, and mainstream film viewers.",
      challenge:
        "The film had no big star cast, modest industry expectations, and a subject that required emotional precision without reducing the campaign to political propaganda.",
      strategy:
        "Frame the campaign as #RightToJustice, a movement-led story about a community's right to be heard, then use social sentiment to sustain theatrical demand.",
      execution:
        "Sequenced survivor-led context, influencer mobilisation, real-time Twitter conversation, audience reactions, milestone storytelling, and post-release amplification.",
      platforms: ["Instagram", "Facebook", "YouTube", "Twitter", "Influencer networks", "Paid amplification"],
      role: "Account Manager and full campaign lead across social channels for Zee Studios at White Rivers Media.",
      teamStructure: "Strategy, organic social, influencer, creative, media, sentiment management, and client servicing teams.",
      learnings:
        "The campaign showed that social media's most powerful role is sustaining momentum beyond launch day when conversation and box office need to move together.",
      metrics:
        "54.3M+ reach, 50M+ views, 314M+ impressions, 3.1M+ engagements, 5M+ tickets sold, and Rs290Cr+ India box office over a 50+ day theatrical run.",
      link: "https://drive.google.com/file/d/1kDMdvlQefubZxK5UApdY2xzSBalL7d3v/view?usp=drive_link"
    },
    {
      title: "Sony Music India Organic Growth",
      category: "Organic social media",
      brand: "Sony Music India",
      tone: "music",
      objective: "Grow and retain a social audience for a leading music label while working with limited original artist content.",
      audience: "Music fans across Meta platforms, catalogue listeners, artist communities, and culture-led social audiences.",
      challenge:
        "The account needed sustained growth without a reliable pipeline of original artist shoots or exclusive footage, making weekly freshness and audience relevance the core challenge.",
      strategy:
        "Shift from rigid monthly calendars to a weekly strategy cycle shaped by audience response, cultural moments, catalogue relevance, sentiment, saves, and shares.",
      execution:
        "Built a content intelligence loop across nostalgia, artist personality, fan-led trends, release moments, and catalogue storytelling.",
      platforms: ["Instagram", "Facebook", "Meta insights", "Campaign reporting"],
      role: "Senior Account Manager at White Rivers Media for a retainer client over 4 years.",
      teamStructure: "Strategy, content, creative, design, reporting, and client servicing teams working through weekly review rhythms.",
      learnings:
        "The biggest unlock was listening before posting. Weekly audience signals became the brief for the next week, helping the account compound attention over time.",
      metrics: "Followers grew from 750K to 1.7M, engagement improved from 3.5-4% to a sustained 6-8%, and engagement rate nearly doubled.",
      link: "https://drive.google.com/drive/folders/14C2mo5ph5wy48MYwsRP-Q_X2wLgmKZLW?usp=drive_link"
    },
    {
      title: "Apharan 2 OTT Launch",
      category: "OTT launch campaign",
      brand: "Voot Select",
      tone: "streaming",
      objective: "Revive conversation for a cult OTT franchise after a 3-year gap and rebuild brand equity as the show moved platforms.",
      audience: "OTT viewers, existing Apharan fans, meme communities, creator audiences, and entertainment-first social users.",
      challenge:
        "The show had no marquee star-led organic buzz, conversations had gone cold, and its sharp language could not be promoted directly due to social restrictions.",
      strategy:
        "Lead with relatable humour and the 'Sabka Katega Dobara' hook, then turn dialogue energy into shareable internet behaviour through GIFs, memes, influencers, and brand participation.",
      execution:
        "Executed a launch stunt, Gaali Song amplification, GIPHY dialogue assets, Twitter GIF thread, and meme network collaborations.",
      platforms: ["Instagram", "Twitter", "GIPHY", "Influencer networks", "PR"],
      role: "Account Manager and campaign lead for Voot Select at White Rivers Media.",
      teamStructure: "Social strategy, creative, influencer, meme network, PR coordination, and client servicing teams.",
      learnings:
        "Every constraint became a creative decision. The campaign won by making audiences and brands feel like co-creators, not passive receivers.",
      metrics:
        "65M unique reach, 50M content views, 31K+ mentions, 139M GIF views, 22.8K tweets, and IMDb's Most Popular Indian Web Series 2022 (So Far).",
      link: "https://drive.google.com/file/d/1WDREjgbHq6ekxi8I1tgsriuve4GIPy9m/view?usp=drive_link"
    },
    {
      title: "Bhediya Integrated Launch",
      category: "Integrated film campaign",
      brand: "Maddock Films",
      tone: "cinema",
      objective: "Launch India's first big-budget creature-comedy in a crowded release window while establishing a new genre proposition.",
      audience: "Family audiences, Varun Dhawan fans, music-led social audiences, theatrical moviegoers, and UGC creators.",
      challenge:
        "The film released amid boycott chatter, a strong competitor in theatres, and the need to feel both new as a creature-comedy and familiar as family entertainment.",
      strategy:
        "Lead with Varun Dhawan's transformation, pivot toward family fun near release, and let music, city tours, AR, GIPHY, and UGC create repeat visibility.",
      execution:
        "Delivered a three-phase rollout across teaser, trailer launch, song moments, city tours, AR filter, GIPHY stickers, post-release reactions, and milestone amplification.",
      platforms: ["Instagram", "Facebook", "YouTube", "GIPHY", "Roposo", "On-ground digital capture"],
      role: "Assistant Account Manager on the White Rivers Media servicing team for Maddock Films.",
      teamStructure: "Content, influencer, social, on-ground capture, GIPHY collaboration, paid amplification, and client coordination teams.",
      learnings:
        "The discipline was knowing when to pivot tonality from intense thriller intrigue to accessible family entertainment while keeping the campaign coherent.",
      metrics:
        "289M+ impressions, 64.1M+ reach, 176M+ views, 1.5M+ engagements, 260M+ GIPHY views, and 442K+ UGC reels.",
      link: "https://www.socialsamosa.com/2022/11/bhediya-movie-marketing-strategy/"
    },
    {
      title: "LoveHostel OTT Launch",
      category: "OTT launch campaign",
      brand: "ZEE5",
      tone: "streaming",
      objective: "Build awareness for a new OTT original from zero, drive subscriptions and viewing minutes, and position ZEE5 as the home of bold, edgy storytelling.",
      audience: "Younger OTT audiences, dark-romance viewers, meme-native social users, and people looking for unconventional love stories with edge.",
      challenge:
        "The campaign had to build awareness for a title with no existing fanbase, compete against larger releases, sharpen ZEE5's platform perception, and convert attention into actual platform behaviour.",
      strategy:
        "Design the entire pre-launch around the first 24 hours, then use meme culture as the primary discovery engine and a 50+ asset content cadence to sustain intent through the viewing window.",
      execution:
        "Coordinated a trailer-day blitz across influencer, meme, and organic social; scaled meme activation to 68M+ impressions; and managed 50+ pieces across trailers, character content, dialogue promos, BTS, and review amplification.",
      platforms: ["Instagram", "Twitter", "WhatsApp", "Influencer networks", "Organic social", "OTT audience targeting"],
      role: "Account Manager with end-to-end campaign ownership across strategy, social, influencer, and meme activation for ZEE5 at White Rivers Media.",
      teamStructure: "Campaign strategy, organic social, meme partners, influencer teams, content production, and OTT targeting support.",
      learnings:
        "This was a campaign where viewing minutes mattered more than vanity metrics. Every creative decision had to support discovery, intent, and conversion as one connected funnel.",
      metrics:
        "10M+ trailer views in 24 hours, 12Cr+ viewing minutes on platform, 68M+ meme impressions, 54M+ total reach, and 50+ content pieces across the campaign window.",
      link: "https://drive.google.com/file/d/1NFri9kWd5XA6Ao8_gWRbT-MCjYRrHQZZ/view?usp=drive_link"
    },
    {
      title: "Zwigato Integrated Campaign",
      category: "Integrated film campaign",
      brand: "Applause Entertainment",
      tone: "cinema",
      objective: "Create attention and emotional relevance for a quiet slice-of-life film about gig workers and Kapil Sharma's dramatic debut.",
      audience: "Kapil Sharma fans, urban film audiences, socially aware viewers, food delivery users, and entertainment media audiences.",
      challenge:
        "The film had no spectacle or music-led hook, and the campaign needed audiences to see Kapil Sharma in a serious register rather than as a comedy star.",
      strategy:
        "Anchor the campaign in the universal visibility of delivery workers, then use Kapil's reach, emotional social-first content, micro-influencers, and media to reshape expectation.",
      execution:
        "Coordinated meme marketing, YouTube takeover, #DeliveringHappiness, media amplification, cast-led social shoots, and asset sequencing across 30 days.",
      platforms: ["Instagram", "Facebook", "YouTube", "Twitter", "Influencer networks", "Media campaign"],
      role: "Account Manager and full campaign lead for Applause Entertainment across social, media, influencer, and content.",
      teamStructure: "Social, media, influencer, meme marketing, content production, reporting, and client servicing teams.",
      learnings:
        "The campaign reinforced the difference between promotion and communication: make the audience feel the subject before asking them to buy a ticket.",
      metrics:
        "11.6M+ reach, 24.1M+ views, 1M+ likes, 1.1M+ engagements, 4.5M+ meme network engagement, and media benchmarks beaten across key placements.",
      link: "https://www.instagram.com/p/CqqHaSxNKSx/"
    },
    {
      title: "Glenmark Scaple Influencer Engine",
      category: "Influencer marketing",
      brand: "Glenmark Scaple",
      tone: "finance",
      objective: "Build a smarter, more efficient influencer system for a pharmaceutical dandruff shampoo over a 3-year account, improving reach and cost efficiency without wasting budget.",
      audience: "Consumers dealing with dandruff, beauty and lifestyle audiences, dermatologist-trusting shoppers, and FMCG/healthcare content viewers across creator tiers.",
      challenge:
        "Scaple sits in a low-interest category on social media, so the challenge was to make the product feel relevant, credible, and efficient within a fixed budget while learning year over year.",
      strategy:
        "Run a dual-track creator model for credibility and reach, cut weak creator segments based on data, and evolve the programme through performance-tier analysis rather than instinct-led influencer selection.",
      execution:
        "Across three years the programme refined creator mix, introduced new genres, removed nano creators, expanded to 61 creators across 12 genres, and classified performance into overperformers, standard performers, and underperformers.",
      platforms: ["Instagram", "Influencer platforms", "Campaign reporting", "Annual media planning"],
      role: "Senior Account Manager with full account ownership for Glenmark Scaple influencer strategy across FY24-25 at White Rivers Media.",
      teamStructure: "Influencer strategy, creator management, reporting, media planning, and client servicing teams.",
      learnings:
        "The 42% CPV improvement came from treating influencer marketing like performance media: benchmark every decision, follow the data, and compound the learning year over year.",
      metrics:
        "17.57M views against a 10.4M plan, CPV improved from Rs0.72 planned to Rs0.42 achieved, 61 creators across 12 genres, and 58.7% of all views driven by the top 18 creators.",
      link: "https://www.whiteriversmedia.com/case-study/scaple"
    }
  ] satisfies CaseStudy[],
  journey: [
    {
      company: "White Rivers Media",
      roles: ["Assistant Account Manager", "Account Manager", "Senior Account Manager"],
      period: "Oct 2021 - Present",
      highlights: [
        "Led execution of 30+ campaigns annually across brands, OTT, and entertainment clients.",
        "Managed 8-9 member cross-functional teams across strategy, creative, content, design, production, media, and influencer functions.",
        "Delivered 15-20% YoY business growth across key accounts.",
        "Maintained 6-8% average engagement rates and improved influencer campaign efficiency by 42% CPV reduction."
      ]
    },
    {
      company: "YellowBulbs Solution",
      roles: ["Account Manager"],
      period: "Jul 2020 - Oct 2021",
      highlights: [
        "Managed social media strategy, content creation, and copywriting for 10-12 brands.",
        "Led website content development and end-to-end project management for web builds.",
        "Supervised a 5-6 member team and supported new business development."
      ]
    },
    {
      company: "Jagran Lakecity University",
      roles: ["Branding & Marketing Communication Executive"],
      period: "Jan 2019 - Feb 2020",
      highlights: [
        "Planned, promoted, and executed high-profile university events.",
        "Managed partnerships and multi-channel communications across email, social media, and university portals."
      ]
    },
    {
      company: "Jaro Education",
      roles: ["Recruitment Executive"],
      period: "May 2018 - Aug 2018",
      highlights: ["Managed lateral recruitment workflows including sourcing, scheduling, interviews, offers, and follow-up."]
    }
  ] satisfies JourneyItem[],
  leadership: [
    "Team leadership across 8-9 member cross-functional groups.",
    "Senior client presentations and strategic communication.",
    "Creative reviews, campaign operations, timelines, and budget-conscious delivery.",
    "Upselling initiatives aligned to client needs and account growth.",
    "Paid media amplification and performance optimization across brands."
  ],
  tools: {
    Analytics: ["Google Analytics", "Social Insights", "Campaign Reporting"],
    "Social Platforms": ["Instagram", "Facebook", "LinkedIn", "YouTube", "X"],
    "Campaign Management": ["Influencer Platforms", "Paid Media Tools"],
    "AI Tools": ["ChatGPT", "Claude", "Gemini", "Midjourney", "SunoAI", "Perplexity", "Gamma AI", "Canva AI", "NotebookLM"]
  },
  selectedWork: [
    {
      title: "The Kashmir Files Case Study",
      type: "Film campaign",
      href: "https://drive.google.com/file/d/1kDMdvlQefubZxK5UApdY2xzSBalL7d3v/view?usp=drive_link"
    },
    {
      title: "Apharan 2 Case Study",
      type: "OTT campaign",
      href: "https://drive.google.com/file/d/1WDREjgbHq6ekxi8I1tgsriuve4GIPy9m/view?usp=drive_link"
    },
    {
      title: "LoveHostel",
      type: "OTT launch",
      href: "https://drive.google.com/file/d/1NFri9kWd5XA6Ao8_gWRbT-MCjYRrHQZZ/view?usp=drive_link"
    },
    {
      title: "Glenmark Scaple Programme",
      type: "Influencer strategy",
      href: "https://www.whiteriversmedia.com/case-study/scaple"
    },
    {
      title: "Bhediya Movie Campaign",
      type: "Public campaign article",
      href: "https://www.socialsamosa.com/2022/11/bhediya-movie-marketing-strategy/"
    },
    {
      title: "HYBE India Content Work",
      type: "Music social content",
      href: "https://www.instagram.com/reel/DY7ZUISIybn/?igsh=d3d5Ym9tcmVvaTZ0"
    }
  ] satisfies SelectedWork[],
  education: {
    degree: "B.Com (Finance)",
    school: "Jagran Lakecity University, Bhopal",
    year: "2018"
  }
};

export type Portfolio = typeof portfolio;
