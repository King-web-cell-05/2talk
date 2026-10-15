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
    { title: "Event Planning", desc: "End-to-end planning for weddings, parties & corporate events." },
    { title: "MC / Hosting", desc: "High-energy hosting that keeps your audience locked in." },
    { title: "Stage Management", desc: "Smooth coordination and professional event flow." },
  ],
  content: [
    { title: "Video Content", desc: "Cinematic video creation for brands & individuals." },
    { title: "Social Media Content", desc: "Short-form content designed to perform." },
    { title: "Brand Storytelling", desc: "Creative narratives that elevate your brand." },
  ],
  comedy: [
    { title: "Stand-Up Comedy", desc: "Live comedy performances for events & shows." },
    { title: "Comedy Skits", desc: "Relatable skits crafted for digital platforms." },
    { title: "Comedy Hosting", desc: "Fun, engaging hosting with natural crowd control." },
  ],
};

const ease = [0.22, 1, 0.36, 1] as const;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c06a]";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<ServiceType>("barbing");
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="services-title"
      className={`${display.variable} ${body.variable} relative isolate min-h-screen w-full overflow-hidden bg-[#0d0b08] px-6 pb-24 pt-36 text-[#f4efe6] [font-family:var(--font-body)] md:px-16 md:pb-32`}
    >
      {/* Soft top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[30rem] w-[70rem] max-w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(212,173,85,0.14),transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <motion.header
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.8, ease }}
          className="text-center"
        >
          <h1
            id="services-title"
            className="[font-family:var(--font-display)] text-6xl font-semibold leading-none tracking-tight md:text-8xl"
          >
            <span className="bg-gradient-to-b from-[#f6e7b4] via-[#d4ad55] to-[#9c7a2e] bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
        </motion.header>

        {/* Pill switcher */}
        <div className="mt-12 flex justify-center md:mt-16">
          <div
            role="group"
            aria-label="Choose a service type"
            className="inline-flex max-w-full items-center gap-1 rounded-full border border-[#d4ad55]/25 bg-[#15120d]/80 p-1.5 backdrop-blur"
          >
            {serviceTabs.map(({ id, label, icon: Icon }) => {
              const isActive = activeService === id;

              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveService(id)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-300 sm:px-6 ${focusRing} ${
                    isActive
                      ? "text-[#14100a]"
                      : "text-[#f4efe6]/65 hover:text-[#f4efe6]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="serviceTabPill"
                      aria-hidden
                      transition={{ duration: reduce ? 0 : 0.45, ease }}
                      className="absolute inset-0 rounded-full bg-gradient-to-b from-[#e3c06a] to-[#b8903a] shadow-[0_6px_24px_-8px_rgba(212,173,85,0.7)]"
                    />
                  )}
                  <Icon
                    className="relative hidden h-4 w-4 sm:block"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="mt-16 md:mt-20">
          <AnimatePresence mode="wait">
            {activeService === "barbing" ? (
              <motion.ul
                key="barbing"
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: reduce ? 0 : 0.06 } },
                }}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
              >
                {barbingServices.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: reduce ? 0 : 24 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: reduce ? 0 : 0.6, ease },
                      },
                    }}
                  >
                    <Link
                      href={`/confirmbooking?styleId=${item.id}`}
                      aria-label={`Book a session: ${item.name}, ${item.duration}`}
                      className={`group relative block aspect-[4/5] overflow-hidden rounded-sm border border-[#d4ad55]/20 transition-colors duration-500 hover:border-[#d4ad55]/70 ${focusRing}`}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-[#0d0b08] via-[#0d0b08]/30 to-transparent"
                      />

                      {/* Duration chip */}
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[#d4ad55]/30 bg-[#0d0b08]/60 px-3 py-1.5 text-xs font-medium text-[#f4efe6]/85 backdrop-blur">
                        <Clock size={13} aria-hidden className="text-[#d4ad55]" />
                        {item.duration}
                      </span>

                      {/* Name + CTA */}
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-7">
                        <div>
                          <h3 className="[font-family:var(--font-display)] text-4xl font-semibold leading-none text-[#f4efe6]">
                            {item.name}
                          </h3>
                          <span className="mt-3 inline-block text-sm font-semibold tracking-wide text-[#e9cf8a]">
                            Book a session
                          </span>
                        </div>
                        <span
                          aria-hidden
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4ad55]/50 text-[#e9cf8a] transition-all duration-300 group-hover:border-[#e3c06a] group-hover:bg-[#e3c06a] group-hover:text-[#14100a]"
                        >
                          <ArrowUpRight size={20} />
                        </span>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <motion.ul
                key={activeService}
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: reduce ? 0 : 0.5, ease }}
                className="border-b border-[#d4ad55]/20"
              >
                {otherServices[activeService].map((item, idx) => (
                  <li key={item.title} className="border-t border-[#d4ad55]/20">
                    <Link
                      href="/contact"
                      className={`group grid items-center gap-x-10 gap-y-3 px-2 py-9 transition-colors duration-300 hover:bg-[#d4ad55]/[0.04] md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)_auto] md:px-6 md:py-12 ${focusRing}`}
                    >
                      <span
                        aria-hidden
                        className="[font-family:var(--font-display)] text-3xl italic text-[#d4ad55]/60 md:text-4xl"
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="[font-family:var(--font-display)] text-4xl font-semibold leading-tight text-[#f4efe6] transition-colors duration-300 group-hover:text-[#e9cf8a] md:text-5xl">
                        {item.title}
                      </h3>
                      <p className="max-w-md leading-relaxed text-[#f4efe6]/65">
                        {item.desc}
                      </p>
                      <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-[#e9cf8a]">
                        Contact us
                        <span
                          aria-hidden
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4ad55]/50 transition-all duration-300 group-hover:border-[#e3c06a] group-hover:bg-[#e3c06a] group-hover:text-[#14100a]"
                        >
                          <ArrowUpRight size={20} />
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}