import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { absoluteAsset, siteUrl } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
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
    images: [absoluteAsset("/IMG_6355.JPG")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivani Mitra | Senior Account Manager & Marketing Strategist",
    description:
      "Senior Account Manager with 7+ years driving brand growth across entertainment, OTT, fintech, FMCG, and integrated digital campaigns.",
    images: [absoluteAsset("/IMG_6355.JPG")]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
