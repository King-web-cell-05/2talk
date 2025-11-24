/* eslint-disable react/no-unescaped-entities */
import React from "react";
import dynamic from "next/dynamic";
const AboutSection = dynamic(() => import("@/components/about"));
const NavBar = dynamic(() => import("@/components/navbar"));
const FooterSection = dynamic(() => import("@/components/footer"));



export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0F12] text-white">
        <NavBar />
      <AboutSection />
      <FooterSection />
    </main>
  );
}
