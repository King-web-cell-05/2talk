/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Orbitron, Inter, Rajdhani } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-orbitron",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rajdhani",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "House of 2Talk Entertainment | Premium Barbing, Events, Content & Comedy",
  description:
    "House of 2Talk Entertainment offers top-tier barbing & grooming, unforgettable event planning, engaging content creation, and comedy entertainment. Elevate your experience with us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
