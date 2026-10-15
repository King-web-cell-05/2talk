
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Scissors,
  CalendarDays,
  Video,
  Laugh,
  Clock,
  ArrowUpRight,
  Sparkles,
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

type ServiceType = "barbing" | "events" | "content" | "comedy";

const serviceTabs = [
  { id: "barbing", label: "Barbing", icon: Scissors },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "content", label: "Content", icon: Video },
  { id: "comedy", label: "Comedy", icon: Laugh },
] as const;

const barbingServices = [
  { id: 1, name: "Low Cut", image: "/low-cut.jpg", duration: "30 mins" },
  { id: 2, name: "Burst Fade", image: "/burst-fade.jpg", duration: "30 mins" },
  { id: 3, name: "Skin Punk", image: "/skin-punk.jpg", duration: "30 mins" },
  { id: 4, name: "Taper Fade", image: "/taper-fade.jpg", duration: "35 mins" },
  { id: 5, name: "Afro Styling", image: "/Afro.jpg", duration: "30 mins" },
  { id: 6, name: "Cut & Dye", image: "/cut-and-dye.jpg", duration: "60 mins" },
  { id: 7, name: "Side Cut", image: "/side-cut.jpg", duration: "45 mins" },
];

const otherServices: Record<
  Exclude<ServiceType, "barbing">,
  { title: string; desc: string }[]
> = {
  events: [
    {
      title: "Event Planning",
      desc: "Thoughtfully planned weddings, celebrations and corporate events.",
    },
    {
      title: "MC / Hosting",
      desc: "Confident hosting that keeps guests entertained and engaged.",
    },
    {
      title: "Stage Management",
      desc: "Organised coordination for smooth, memorable events.",
    },
  ],
  content: [
    {
      title: "Video Content",
      desc: "Professional video production for brands and individuals.",
    },
    {
      title: "Social Media Content",
      desc: "Creative short-form videos made for digital platforms.",
    },
    {
      title: "Brand Storytelling",
      desc: "Engaging stories that communicate your brand's identity.",
    },
  ],
  comedy: [
    {
      title: "Stand-Up Comedy",
      desc: "Live comedy performances for shows and special occasions.",
    },
    {
      title: "Comedy Skits",
      desc: "Relatable, entertaining skits for online audiences.",
    },
    {
      title: "Comedy Hosting",
      desc: "Lively hosting that brings energy to every occasion.",
    },
  ],
};

const ease = [0.22, 1, 0.36, 1] as const;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c06a]";

export default function ServicesPage() {
  const [activeService, setActiveService] =
    useState<ServiceType>("barbing");

  const reduce = useReducedMotion();

  return (
    <main
      aria-labelledby="services-title"
      className={`${display.variable} ${body.variable} relative isolate min-h-screen w-full overflow-hidden bg-[#0b0a08] px-4 pb-20 pt-28 text-[#f4efe6] [font-family:var(--font-body)] sm:px-6 sm:pt-32 md:px-12 md:pb-24 lg:px-16`}
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(ellipse_at_top,rgba(212,173,85,0.13),transparent_65%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.7, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4ad55]/25 bg-[#d4ad55]/[0.06] px-4 py-2">
            <Sparkles
              aria-hidden="true"
              className="h-3.5 w-3.5 text-[#e3c06a]"
            />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e3c06a] sm:text-xs">
              House of 2Talk Entertainment
            </span>
          </div>

          <h1
            id="services-title"
            className="[font-family:var(--font-display)] text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Services That
            <br />
            <span className="bg-gradient-to-r from-[#f6e7b4] via-[#d4ad55] to-[#a17b32] bg-clip-text italic text-transparent">
              Stand Out.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#f4efe6]/55 sm:text-base sm:leading-8">
            From sharp, clean cuts to unforgettable events and creative
            entertainment, we bring your vision to life.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#d4ad55]/70" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#d4ad55]" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#d4ad55]/70" />
          </div>
        </motion.header>

        {/* Service category selector */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : 0.6,
            delay: reduce ? 0 : 0.1,
            ease,
          }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <div
            role="group"
            aria-label="Choose a service category"
            className="grid w-full max-w-xl grid-cols-4 gap-1 rounded-2xl border border-white/[0.08] bg-[#12110e] p-1.5 shadow-xl shadow-black/20 sm:gap-2 sm:rounded-full sm:p-2"
          >
            {serviceTabs.map(({ id, label, icon: Icon }) => {
              const isActive = activeService === id;

              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveService(id)}
                  className={`relative flex min-w-0 items-center justify-center gap-1.5 rounded-xl px-1.5 py-3 text-[11px] font-semibold transition-colors duration-300 sm:gap-2 sm:rounded-full sm:px-4 sm:text-sm ${focusRing} ${
                    isActive
                      ? "text-[#171209]"
                      : "text-[#f4efe6]/55 hover:text-[#f4efe6]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="serviceTabPill"
                      aria-hidden="true"
                      transition={{
                        duration: reduce ? 0 : 0.35,
                        ease,
                      }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#f0d88f] to-[#c49b45] shadow-[0_4px_18px_-8px_rgba(212,173,85,0.7)] sm:rounded-full"
                    />
                  )}

                  <Icon
                    aria-hidden="true"
                    className="relative h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                    strokeWidth={1.8}
                  />

                  <span className="relative truncate">{label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Section heading */}
        <div className="mb-6 mt-12 flex items-end justify-between gap-4 sm:mb-8 sm:mt-14 md:mt-16">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4ad55] sm:text-xs">
              {activeService === "barbing"
                ? "The Barbershop"
                : activeService === "events"
                  ? "Make It Memorable"
                  : activeService === "content"
                    ? "Create Something Great"
                    : "Entertainment & Laughter"}
            </p>

            <h2 className="[font-family:var(--font-display)] text-3xl font-semibold tracking-tight text-[#f4efe6] sm:text-4xl md:text-5xl">
              {activeService === "barbing"
                ? "Find Your Style"
                : activeService === "events"
                  ? "Events & Experiences"
                  : activeService === "content"
                    ? "Content & Creativity"
                    : "Comedy & Entertainment"}
            </h2>
          </div>

          <span className="hidden pb-1 text-xs text-[#f4efe6]/35 sm:block">
            {activeService === "barbing"
              ? `${barbingServices.length} styles available`
              : `${otherServices[activeService].length} services`}
          </span>
        </div>

        {/* Service content */}
        <AnimatePresence mode="wait" initial={false}>
          {activeService === "barbing" ? (
            <motion.ul
              key="barbing"
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: reduce ? 0 : -8,
                transition: { duration: reduce ? 0 : 0.18 },
              }}
              transition={{ duration: reduce ? 0 : 0.45, ease }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
            >
              {barbingServices.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: reduce ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduce ? 0 : 0.45,
                    delay: reduce ? 0 : Math.min(index * 0.055, 0.3),
                    ease,
                  }}
                >
                  <Link
                    href={`/confirmbooking?styleId=${item.id}`}
                    aria-label={`Book ${item.name}, estimated duration ${item.duration}`}
                    className={`group relative block aspect-[4/4.7] overflow-hidden rounded-2xl border border-white/[0.09] bg-[#15130f] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4ad55]/50 hover:shadow-xl hover:shadow-black/30 sm:aspect-[4/5] ${focusRing}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transform-none motion-reduce:transition-none"
                    />

                    {/* Image overlays */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#090806] via-[#090806]/35 to-black/5"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent"
                    />

                    {/* Duration */}
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-medium text-white/90 backdrop-blur-md sm:left-4 sm:top-4 sm:text-xs">
                      <Clock
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-[#e3c06a]"
                      />
                      {item.duration}
                    </span>

                    {/* Hover indicator */}
                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#e3c06a] group-hover:bg-[#e3c06a] group-hover:text-[#171209] sm:right-4 sm:top-4 sm:h-10 sm:w-10">
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                      />
                    </span>

                    {/* Service title and action */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <div className="mb-3 h-px w-9 bg-[#e3c06a]/80 transition-all duration-300 group-hover:w-14" />

                      <h3 className="[font-family:var(--font-display)] text-3xl font-semibold leading-tight text-white sm:text-4xl">
                        {item.name}
                      </h3>

                      <div className="mt-3 flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold tracking-wide text-[#f0d88f] sm:text-sm">
                          Book this style
                        </span>

                        <span className="text-[10px] uppercase tracking-[0.14em] text-white/45 transition-colors group-hover:text-white/80 sm:text-[11px]">
                          View details
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <motion.ul
              key={activeService}
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: reduce ? 0 : -8,
                transition: { duration: reduce ? 0 : 0.18 },
              }}
              transition={{ duration: reduce ? 0 : 0.4, ease }}
              className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#11100d]/70"
            >
              {otherServices[activeService].map((item, index) => (
                <li
                  key={item.title}
                  className="border-b border-white/[0.07] last:border-b-0"
                >
                  <Link
                    href="/contact"
                    className={`group grid items-start gap-4 px-5 py-6 transition-colors duration-300 hover:bg-[#d4ad55]/[0.045] sm:px-7 sm:py-8 md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1fr)_auto] md:items-center md:gap-7 lg:px-9 lg:py-9 ${focusRing}`}
                  >
                    <span
                      aria-hidden="true"
                      className="[font-family:var(--font-display)] text-2xl italic text-[#d4ad55]/70 sm:text-3xl"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h3 className="[font-family:var(--font-display)] text-3xl font-semibold leading-tight text-[#f4efe6] transition-colors duration-300 group-hover:text-[#e9cf8a] sm:text-4xl lg:text-[2.75rem]">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-[#f4efe6]/55 md:hidden">
                        {item.desc}
                      </p>
                    </div>

                    <p className="hidden max-w-sm text-sm leading-7 text-[#f4efe6]/55 md:block">
                      {item.desc}
                    </p>

                    <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-wide text-[#e9cf8a] sm:text-sm">
                      Get in touch
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4ad55]/40 transition-all duration-300 group-hover:border-[#e3c06a] group-hover:bg-[#e3c06a] group-hover:text-[#171209] sm:h-11 sm:w-11"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Bottom call to action */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduce ? 0 : 0.5, ease }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#d4ad55]/15 bg-gradient-to-r from-[#d4ad55]/[0.07] via-white/[0.025] to-transparent px-5 py-7 sm:mt-16 sm:flex-row sm:px-8 sm:py-8"
        >
          <div className="text-center sm:text-left">
            <p className="[font-family:var(--font-display)] text-2xl font-semibold text-[#f4efe6] sm:text-3xl">
              Have something special in mind?
            </p>
            <p className="mt-1 text-xs leading-6 text-[#f4efe6]/50 sm:text-sm">
              Tell us what you need. Let's make it happen.
            </p>
          </div>

          <Link
            href="/contact"
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#f0d88f] to-[#c49b45] px-6 py-3.5 text-sm font-bold text-[#171209] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#d4ad55]/10 sm:w-auto ${focusRing}`}
          >
            Let's Talk
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </motion.div>

        <footer className="mt-10 text-center sm:mt-12">
          <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/25 sm:text-[10px]">
            House of 2Talk Entertainment
          </p>
        </footer>
      </div>
    </main>
  );
}
