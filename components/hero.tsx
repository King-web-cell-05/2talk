"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const pillars = [
  { title: "Grooming", text: "Precision cuts, fades and beard work." },
  { title: "Events", text: "Planned and run from first call to last guest." },
  { title: "Content", text: "Video and photo that make your brand look sharp." },
  { title: "Comedy", text: "Live shows and sets that fill the room." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.9, ease },
    },
  };

  return (
    <section
      id="home"
      className={`${display.variable} ${body.variable} relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#0d0b08] pt-20 text-[#f4efe6] [font-family:var(--font-body)]`}
    >
      {/* Background photo with slow settle-in */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-20"
        initial={{ scale: reduce ? 1 : 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduce ? 0 : 2.4, ease }}
      >
        <Image
          src="/2talk-bg.avif"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
      </motion.div>

      {/* Legibility layers: left-to-right fade, bottom fade */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(13,11,8,0.92)_0%,rgba(13,11,8,0.6)_45%,rgba(13,11,8,0.15)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#0d0b08] to-transparent"
      />

      {/* Main content */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-16 md:px-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.h1
            variants={item}
            className="[font-family:var(--font-display)] text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-8xl"
          >
            <span className="bg-gradient-to-b from-[#f6e7b4] via-[#d4ad55] to-[#9c7a2e] bg-clip-text text-transparent">
              House of 2Talk
            </span>
            <span className="mt-2 block text-3xl font-medium italic text-[#f4efe6]/90 sm:text-4xl md:text-5xl">
              Entertainment
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            aria-hidden
            className="my-8 h-px w-24 bg-gradient-to-r from-[#d4ad55] to-transparent"
          />

          <motion.p
            variants={item}
            className="max-w-xl text-lg leading-relaxed text-[#f4efe6]/80 md:text-xl"
          >
            Premium barbing, event planning, content creation and live comedy,
            all under one brand.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-gradient-to-b from-[#e3c06a] to-[#b8903a] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#14100a] shadow-[0_8px_30px_-8px_rgba(212,173,85,0.6)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_rgba(212,173,85,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c06a]"
            >
              Book a session
            </Link>
            <Link
              href="/servicehub"
              className="inline-flex items-center justify-center rounded-sm border border-[#d4ad55]/50 px-8 py-3.5 text-sm font-semibold tracking-wide text-[#e9cf8a] backdrop-blur-sm transition duration-300 hover:border-[#d4ad55] hover:bg-[#d4ad55]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c06a]"
            >
              View services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* What we do: four disciplines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : 1.2 }}
        className="mx-auto w-full max-w-7xl px-6 pb-10 md:px-16"
      >
        <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <li key={p.title} className="border-t border-[#d4ad55]/30 pt-4">
              <h3 className="[font-family:var(--font-display)] text-2xl font-semibold text-[#e9cf8a]">
                {p.title}
              </h3>
              <p className="mt-1 max-w-[28ch] text-sm leading-relaxed text-[#f4efe6]/65">
                {p.text}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}