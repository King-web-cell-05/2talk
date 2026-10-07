"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Scissors,
  CalendarCheck,
  Video,
  Laugh,
  ShieldCheck,
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

const reasons = [
  {
    icon: Scissors,
    title: "Premium Grooming",
    desc: "Precision haircuts, modern styles, and professional grooming tailored to your look and lifestyle.",
  },
  {
    icon: CalendarCheck,
    title: "Event Planning & Hosting",
    desc: "From private celebrations to corporate events, we plan, manage, and host unforgettable experiences.",
  },
  {
    icon: Video,
    title: "Content Creation",
    desc: "High-quality video and social media content designed to elevate brands, creators, and businesses.",
  },
  {
    icon: Laugh,
    title: "Comedy & Entertainment",
    desc: "Stand-up comedy, skits, and live entertainment that connect with audiences and leave lasting impressions.",
  },
  {
    icon: ShieldCheck,
    title: "One Trusted Brand",
    desc: "Multiple creative services delivered with consistency, professionalism, and attention to detail.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function WhyChooseUs() {
  const reduce = useReducedMotion();

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  };

  const row: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease },
    },
  };

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-heading"
      className={`${display.variable} ${body.variable} w-full bg-[#0d0b08] px-6 py-24 text-[#f4efe6] [font-family:var(--font-body)] md:px-16 md:py-32`}
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
        {/* Header (sticks while the list scrolls on desktop) */}
        <header className="lg:sticky lg:top-32 lg:self-start">
          <h2
            id="why-heading"
            className="[font-family:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            <span className="bg-gradient-to-b from-[#f6e7b4] via-[#d4ad55] to-[#9c7a2e] bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <div
            aria-hidden
            className="mt-6 h-px w-24 bg-gradient-to-r from-[#d4ad55] to-transparent"
          />
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#f4efe6]/70 md:text-lg">
            House of 2Talk Entertainment is more than a barbing brand. We are a
            creative hub delivering grooming, events, content, and comedy with
            the same level of excellence and professionalism.
          </p>
        </header>

        {/* Reasons */}
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="border-t border-[#d4ad55]/25"
        >
          {reasons.map(({ icon: Icon, title, desc }) => (
            <motion.li
              key={title}
              variants={row}
              className="group relative flex gap-6 border-b border-[#d4ad55]/25 py-8 md:gap-8 md:py-10"
            >
              {/* Gold line that grows along the row on hover */}
              <span
                aria-hidden
                className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-[#d4ad55] transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
              />

              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d4ad55]/40 text-[#e9cf8a] transition-colors duration-300 group-hover:border-[#d4ad55] group-hover:bg-[#d4ad55]/10 md:h-16 md:w-16">
                <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
              </span>

              <div>
                <h3 className="[font-family:var(--font-display)] text-3xl font-semibold leading-tight text-[#f4efe6] md:text-4xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-[#f4efe6]/70">
                  {desc}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}