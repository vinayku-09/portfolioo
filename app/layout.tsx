import React from "react"
import type { Metadata } from "next";
import { Oxanium, Space_Grotesk, Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import { Nav } from "@/components/nav";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinay Kumar Singh | Software Developer",
  description:
    "Software Developer crafting immersive digital experiences with modern web technologies. Full Stack Developer specializing in Java, React, and Node.js.",
  keywords: [
    "software developer",
    "full stack developer",
    "web developer",
    "java developer",
    "react developer",
    "vinay kumar singh",
  ],
  authors: [{ name: "Vinay Kumar Singh" }],
  creator: "Vinay Kumar Singh",
  openGraph: {
    title: "Vinay Kumar Singh | Software Developer",
    description:
      "Software Developer crafting immersive digital experiences with modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Kumar Singh | Software Developer",
    description:
      "Software Developer crafting immersive digital experiences with modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${oxanium.variable} ${spaceGrotesk.variable} ${firaCode.variable} font-body antialiased`}
      >
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
          {/* Global Scanline Overlay */}
          <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

          <Nav />
          <main>{children}</main>
          <Toaster />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
