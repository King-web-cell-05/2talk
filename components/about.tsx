"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Scissors,
  CalendarDays,
  Video,
  Laugh,
  ShieldCheck,
  Star,
} from "lucide-react";
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

const whatWeDo = [
  {
    icon: Scissors,
    title: "Professional Barbing",
    text: "Clean cuts, modern styles, and premium grooming delivered with precision and consistency.",
  },
  {
    icon: CalendarDays,
    title: "Event Planning & Hosting",
    text: "Weddings, parties, and corporate events planned and hosted with energy and structure.",
  },
  {
    icon: Video,
    title: "Content Creation",
    text: "High-quality video content, social media creatives, and brand storytelling.",
  },
  {
    icon: Laugh,
    title: "Comedy & Entertainment",
    text: "Live comedy, digital skits, and engaging performances that connect with audiences.",
  },
];

const whyChoose = [
  {
    icon: Star,
    title: "Quality First",
    text: "We prioritize excellence in every service we deliver.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Approach",
    text: "Structure, reliability, and attention to detail.",
  },
  {
    icon: Laugh,
    title: "Creative Energy",
    text: "Entertainment driven by passion and originality.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c06a]";

const sectionTitle =
  "[font-family:var(--font-display)] text-4xl font-semibold leading-tight tracking-tight md:text-6xl";

const goldText =
  "bg-gradient-to-b from-[#f6e7b4] via-[#d4ad55] to-[#9c7a2e] bg-clip-text text-transparent";

function Divider() {
  return (
    <div
      aria-hidden
      className="mx-auto my-20 h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-[#d4ad55]/40 to-transparent md:my-28"
    />
  );
}

export default function AboutSection() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0, x = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : x ? 0 : 30, x: reduce ? 0 : x },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: reduce ? 0 : 0.8, delay: reduce ? 0 : delay, ease },
  });

  return (
    <section
      id="about"
      className={`${display.variable} ${body.variable} w-full overflow-hidden bg-[#0d0b08] px-6 py-24 text-[#f4efe6] [font-family:var(--font-body)] md:px-20 md:py-32`}
    >
      {/* HEADER BLOCK */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <motion.div {...reveal(0, -40)}>
          <h2 className={sectionTitle}>
            <span className={goldText}>House of 2Talk</span>
            <span className="mt-1 block text-3xl font-medium italic text-[#f4efe6]/90 md:text-5xl">
              Entertainment
            </span>
          </h2>
          <div
            aria-hidden
            className="mt-6 h-px w-24 bg-gradient-to-r from-[#d4ad55] to-transparent"
          />
          <p className="mt-6 text-lg leading-relaxed text-[#f4efe6]/75">
            House of 2Talk Entertainment is a creative lifestyle brand built on
            skill, personality, and unforgettable experiences.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#f4efe6]/75">
            From premium grooming to high-energy events, engaging content, and
            comedy entertainment, we deliver quality, consistency, and impact
            across every service we offer.
          </p>
        </motion.div>

        <motion.div
          {...reveal(0.1, 40)}
          className="relative rounded-sm border border-[#d4ad55]/25 bg-gradient-to-b from-[#17130c] to-[#0f0c08] p-8 md:p-12"
        >
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#d4ad55] via-[#d4ad55]/30 to-transparent"
          />
          <h3 className="[font-family:var(--font-display)] text-4xl font-semibold text-[#e9cf8a]">
            Who We Are
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-[#f4efe6]/75">
            Founded by AGBA GODWIN (a.k.a 2TALK), House of 2Talk Entertainment
            was created to bring professionalism, creativity, and structure
            into entertainment-driven services.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#f4efe6]/75">
            We combine discipline with creativity to serve individuals, brands,
            and events with excellence.
          </p>
        </motion.div>
      </div>

      <Divider />

      {/* WHAT WE DO */}
      <div className="mx-auto max-w-6xl">
        <motion.h3
          {...reveal()}
          className={`${sectionTitle} mb-14 text-center md:mb-16`}
        >
          <span className={goldText}>What We Do</span>
        </motion.h3>

        <div className="grid grid-cols-1 gap-x-12 gap-y-2 md:grid-cols-2">
          {whatWeDo.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              {...reveal((i % 2) * 0.1)}
              className="group relative flex gap-6 border-t border-[#d4ad55]/25 py-8"
            >
              <span
                aria-hidden
                className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-[#d4ad55] transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
              />
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d4ad55]/40 text-[#e9cf8a] transition-colors duration-300 group-hover:border-[#d4ad55] group-hover:bg-[#d4ad55]/10">
                <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </span>
              <div>
                <h4 className="[font-family:var(--font-display)] text-3xl font-semibold leading-tight text-[#f4efe6]">
                  {title}
                </h4>
                <p className="mt-2 leading-relaxed text-[#f4efe6]/70">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Divider />

      {/* WHY CHOOSE US */}
      <motion.div
        {...reveal()}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-sm border border-[#d4ad55]/25 bg-gradient-to-b from-[#17130c] to-[#0f0c08] px-6 py-14 md:px-14 md:py-16"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-48 w-[40rem] max-w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(212,173,85,0.14),transparent_70%)]"
        />

        <h3 className={`${sectionTitle} relative mb-12 text-center`}>
          <span className={goldText}>Why Choose House of 2Talk</span>
        </h3>

        <div className="relative grid grid-cols-1 gap-10 text-center md:grid-cols-3">
          {whyChoose.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d4ad55]/40 text-[#e9cf8a]">
                <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </span>
              <h4 className="mt-5 [font-family:var(--font-display)] text-3xl font-semibold text-[#f4efe6]">
                {title}
              </h4>
              <p className="mx-auto mt-2 max-w-[28ch] text-[#f4efe6]/65">
                {text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div {...reveal()} className="mt-16 text-center md:mt-20">
        <Link
          href="/contact"
          className={`inline-flex items-center justify-center rounded-sm bg-gradient-to-b from-[#e3c06a] to-[#b8903a] px-10 py-4 text-base font-semibold tracking-wide text-[#14100a] shadow-[0_8px_30px_-8px_rgba(212,173,85,0.6)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_rgba(212,173,85,0.8)] ${focusRing}`}
        >
          Work With Us
        </Link>
      </motion.div>
    </section>
  );
}