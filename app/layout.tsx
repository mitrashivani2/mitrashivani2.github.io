import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bodoni_Moda, Space_Grotesk } from "next/font/google";
import { absoluteAsset, siteUrl } from "@/lib/site";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const serif = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shivani Mitra | Senior Account Manager & Marketing Strategist",
  description:
    "Senior Account Manager with 7+ years driving brand growth across entertainment, OTT, fintech, FMCG, and integrated digital campaigns.",
  keywords: [
    "Shivani Mitra",
    "Senior Account Manager",
    "Digital Marketing",
    "Brand Strategy",
    "Entertainment Marketing",
    "OTT Marketing",
    "Client Growth"
  ],
  openGraph: {
    title: "Shivani Mitra | Senior Account Manager & Marketing Strategist",
    description:
      "Senior Account Manager with 7+ years driving brand growth across entertainment, OTT, fintech, FMCG, and integrated digital campaigns.",
    type: "website",
    images: [absoluteAsset("/Professional Profile Picture.PNG")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivani Mitra | Senior Account Manager & Marketing Strategist",
    description:
      "Senior Account Manager with 7+ years driving brand growth across entertainment, OTT, fintech, FMCG, and integrated digital campaigns.",
    images: [absoluteAsset("/Professional Profile Picture.PNG")]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
