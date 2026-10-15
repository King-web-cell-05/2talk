"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import {
  ArrowUpRight,
  Scissors,
  CalendarDays,
  Clapperboard,
  Mic2,
  Sparkles,
} from "lucide-react";

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
  {
    title: "Grooming",
    text: "Precision cuts, clean fades and expert beard care.",
    icon: Scissors,
  },
  {
    title: "Events",
    text: "Thoughtfully planned experiences, from start to finish.",
    icon: CalendarDays,
  },
  {
    title: "Content",
    text: "Photography and video that bring your brand to life.",
    icon: Clapperboard,
  },
  {
    title: "Comedy",
    text: "Live performances and unforgettable entertainment.",
    icon: Mic2,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.8, ease },
    },
  };

  return (
    <section
      id="home"
      className={`${display.variable} ${body.variable} relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#0d0b08] pt-20 text-[#f4efe6] [font-family:var(--font-body)] sm:pt-24`}
    >
      {/* Background image */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
        initial={{ scale: reduce ? 1 : 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduce ? 0 : 2, ease }}
      >
        <Image
          src="/2talk-bg.avif"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 sm:opacity-45"
        />
      </motion.div>

      {/* Contrast and atmosphere */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#0d0b08]/40"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(13,11,8,0.65)_0%,rgba(13,11,8,0.68)_40%,rgba(13,11,8,0.96)_100%)] sm:bg-[linear-gradient(90deg,rgba(13,11,8,0.94)_0%,rgba(13,11,8,0.78)_42%,rgba(13,11,8,0.24)_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 -z-10 h-64 w-64 rounded-full bg-[#d4ad55]/10 blur-3xl sm:right-0 sm:top-32 sm:h-96 sm:w-96"
      />

      {/* Main hero */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-2xl"
        >
          <motion.div
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4ad55]/30 bg-black/25 px-3.5 py-2 backdrop-blur-md sm:mb-7 sm:px-4"
          >
            <Sparkles
              size={14}
              aria-hidden="true"
              className="shrink-0 text-[#e3c06a]"
            />
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f4efe6]/85 sm:text-[10px] sm:tracking-[0.24em]">
              Grooming · Events · Entertainment
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="[font-family:var(--font-display)] text-[clamp(3.15rem,11vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.045em] sm:text-7xl md:text-8xl"
          >
            <span className="block bg-gradient-to-br from-[#fff0bf] via-[#d4ad55] to-[#a17a30] bg-clip-text pb-1 text-transparent">
              House of
            </span>
            <span className="block bg-gradient-to-br from-[#fff0bf] via-[#d4ad55] to-[#a17a30] bg-clip-text pb-1 text-transparent">
              2Talk
            </span>
            <span className="mt-2 block text-[clamp(1.9rem,7vw,3.6rem)] font-medium italic leading-tight tracking-normal text-[#f4efe6]/95 sm:mt-3 sm:text-5xl md:text-6xl">
              Entertainment
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            aria-hidden="true"
            className="my-6 h-px w-20 bg-gradient-to-r from-[#e3c06a] to-transparent sm:my-8 sm:w-28"
          />

          <motion.p
            variants={item}
            className="max-w-lg text-sm leading-7 text-[#f4efe6]/80 sm:text-base sm:leading-8 md:text-lg"
          >
            One brand. Four creative experiences. From fresh cuts and standout
            events to compelling content and live comedy, we make every
            experience count.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-7 flex w-full flex-col gap-3 min-[420px]:flex-row sm:mt-9 sm:gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#e3c06a] to-[#bd9644] px-5 py-3.5 text-sm font-semibold text-[#171108] shadow-[0_8px_30px_-12px_rgba(212,173,85,0.65)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_-10px_rgba(212,173,85,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c06a] min-[420px]:w-auto sm:px-7"
            >
              Book a session
              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/servicehub"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-[#d4ad55]/45 bg-black/20 px-5 py-3.5 text-sm font-semibold text-[#f0d58e] backdrop-blur-sm transition duration-300 hover:border-[#d4ad55] hover:bg-[#d4ad55]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c06a] min-[420px]:w-auto sm:px-7"
            >
              Explore our services
            </Link>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-4 text-[10px] tracking-wide text-[#f4efe6]/45 sm:mt-5 sm:text-xs"
          >
            Good service. Great experiences. Unforgettable moments.
          </motion.p>
        </motion.div>
      </div>

      {/* Services overview */}
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.6 }}
        className="mx-auto w-full max-w-7xl px-5 pb-8 sm:px-8 sm:pb-10 md:px-16"
      >
        <div className="mb-4 flex items-center gap-3 sm:mb-5">
          <span className="h-px w-6 bg-[#d4ad55]/70 sm:w-8" />
          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#f4efe6]/55 sm:text-[10px]">
            What we do
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-7 lg:grid-cols-4 lg:gap-x-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <li
                key={pillar.title}
                className="group min-w-0 border-t border-[#d4ad55]/30 pt-3 transition-colors duration-300 hover:border-[#d4ad55]/80 sm:pt-4"
              >
                <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="shrink-0 text-[#d4ad55] transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-[18px] sm:w-[18px]"
                  />
                  <h2 className="[font-family:var(--font-display)] text-lg font-semibold leading-tight text-[#e9cf8a] sm:text-xl md:text-2xl">
                    {pillar.title}
                  </h2>
                </div>

                <p className="max-w-[32ch] text-[11px] leading-relaxed text-[#f4efe6]/65 sm:text-sm sm:leading-6">
                  {pillar.text}
                </p>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
