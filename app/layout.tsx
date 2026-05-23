import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gunjan Solanki — Senior Software Engineer",
  description:
    "Senior Software Engineer with 6+ years building distributed full-stack systems across fintech, real-estate, RPA, and SaaS. Expert in Ruby on Rails, React, GoLang, AWS, and AI-augmented development.",
  keywords: [
    "Gunjan Solanki",
    "Senior Software Engineer",
    "Full Stack Developer",
    "Ruby on Rails",
    "React",
    "GoLang",
    "AWS",
    "AI Developer",
  ],
  authors: [{ name: "Gunjan Solanki" }],
  openGraph: {
    title: "Gunjan Solanki — Senior Software Engineer",
    description: "Full-Stack | Cloud | AI-Augmented Development",
    type: "website",
    url: "https://tenet07.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gunjan Solanki — Senior Software Engineer",
    description: "Full-Stack | Cloud | AI-Augmented Development",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
