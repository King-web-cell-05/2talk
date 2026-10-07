"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

const services = [
  {
    title: "Barbing & Grooming",
    short: "Barbing",
    description:
      "Haircuts, beard grooming, hairline carving and treatments, done with precision and style.",
    image: "/haircut-and-styling.jpg",
    link: "/servicehub",
    cta: "Book a session",
  },
  {
    title: "Event Planning & Management",
    short: "Events",
    description:
      "From intimate celebrations to large-scale events, we plan, coordinate and run the whole thing.",
    image: "/event-planning.jpg",
    link: "/servicehub",
    cta: "Plan an event",
  },
  {
    title: "Content Creation",
    short: "Content",
    description:
      "Skits, promo videos, social visuals and brand storytelling that look as good as they sound.",
    image: "/content-creation.jpg",
    link: "/servicehub",
    cta: "Start a project",
  },
  {
    title: "Comedy & Entertainment",
    short: "Comedy",
    description:
      "Live comedy, skits and MC services that keep your audience engaged and laughing.",
    image: "/comedy-entertainment.jpg",
    link: "/servicehub",
    cta: "Book entertainment",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`${display.variable} ${body.variable} w-full bg-[#0d0b08] px-6 py-24 text-[#f4efe6] [font-family:var(--font-body)] md:px-16 md:py-32`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <h2
            id="services-heading"
            className="[font-family:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            <span className="bg-gradient-to-b from-[#f6e7b4] via-[#d4ad55] to-[#9c7a2e] bg-clip-text text-transparent">
              Our Premium Services
            </span>
          </h2>
          <div
            aria-hidden
            className="mt-6 h-px w-24 bg-gradient-to-r from-[#d4ad55] to-transparent"
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#f4efe6]/70 md:text-lg">
            Whether you need a sharp cut, a full event or a stage act, it all
            comes from the same team.
          </p>
        </header>

        {/* Panels */}
        <ul className="flex flex-col gap-4 lg:h-[40rem] lg:flex-row lg:gap-3">
          {services.map((service, i) => {
            const isActive = i === active;

            return (
              <li
                key={service.title}
                onMouseEnter={() => setActive(i)}
                className={`relative min-h-[28rem] overflow-hidden rounded-sm border border-[#d4ad55]/20 transition-[flex-grow,border-color] duration-700 ease-out motion-reduce:transition-none lg:min-h-0 lg:flex-1 ${
                  isActive
                    ? "lg:grow-[4] lg:border-[#d4ad55]/50"
                    : "lg:grow"
                }`}
              >
                <Link
                  href={service.link}
                  onFocus={() => setActive(i)}
                  className="group absolute inset-0 flex flex-col justify-end focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#e3c06a]"
                >
                  {/* Photo */}
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className={`object-cover transition-[filter,transform] duration-700 ease-out motion-reduce:transition-none ${
                      isActive
                        ? "lg:scale-100 lg:grayscale-0"
                        : "lg:scale-110 lg:grayscale"
                    }`}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#0d0b08] via-[#0d0b08]/50 to-[#0d0b08]/10"
                  />

                  {/* Collapsed label (desktop only) */}
                  <span
                    aria-hidden
                    className={`absolute bottom-8 left-1/2 hidden -translate-x-1/2 rotate-180 [font-family:var(--font-display)] text-3xl font-semibold text-[#e9cf8a] transition-opacity duration-500 [writing-mode:vertical-rl] lg:block ${
                      isActive ? "opacity-0" : "opacity-100 delay-300"
                    }`}
                  >
                    {service.short}
                  </span>

                  {/* Expanded content (always shown on mobile) */}
                  <div
                    className={`relative p-7 transition-[opacity,transform] duration-500 motion-reduce:transition-none md:p-10 lg:w-[30rem] ${
                      isActive
                        ? "lg:translate-y-0 lg:opacity-100 lg:delay-300"
                        : "lg:pointer-events-none lg:translate-y-4 lg:opacity-0"
                    }`}
                  >
                    <h3 className="[font-family:var(--font-display)] text-4xl font-semibold leading-tight text-[#f4efe6] md:text-5xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-md leading-relaxed text-[#f4efe6]/75">
                      {service.description}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-2 rounded-sm bg-gradient-to-b from-[#e3c06a] to-[#b8903a] px-6 py-3 text-sm font-semibold tracking-wide text-[#14100a] shadow-[0_8px_30px_-8px_rgba(212,173,85,0.6)] transition duration-300 group-hover:-translate-y-0.5">
                      {service.cta}
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}