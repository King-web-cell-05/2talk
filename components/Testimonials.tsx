"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
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

const testimonials = [
  {
    name: "Mr Ola",
    role: "Entrepreneur",
    text: "Absolutely love the precision and attention to detail. Clean cuts, great atmosphere, and true professionalism.",
  },
  {
    name: "Mr Michael",
    role: "Entertainer",
    text: "Top-tier service every single time. The experience is premium from start to finish.",
  },
  {
    name: "Mr Kingsley",
    role: "Developer",
    text: "Consistent quality, sharp fades, and a confident finish. I always leave impressed.",
  },
  {
    name: "Mr Tunde",
    role: "Content Creator",
    text: "Professional, stylish, and well-organized. Easily one of the best grooming experiences around.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c06a]";

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  // Auto-rotate, paused on hover/focus and disabled for reduced motion
  useEffect(() => {
    if (paused || reduce) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [paused, reduce, current]);

  const active = testimonials[current];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className={`${display.variable} ${body.variable} w-full bg-[#0d0b08] px-6 py-24 text-[#f4efe6] [font-family:var(--font-body)] md:px-16 md:py-32`}
    >
      <div
        className="mx-auto max-w-7xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Header */}
        <header className="mb-14 md:mb-20">
          <h2
            id="testimonials-heading"
            className="[font-family:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            <span className="bg-gradient-to-b from-[#f6e7b4] via-[#d4ad55] to-[#9c7a2e] bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <div
            aria-hidden
            className="mt-6 h-px w-24 bg-gradient-to-r from-[#d4ad55] to-transparent"
          />
        </header>

        {/* Quote */}
        <div
          role="tabpanel"
          id="testimonial-panel"
          aria-labelledby={`testimonial-tab-${current}`}
          className="min-h-[22rem] md:min-h-[24rem]"
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={current}
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -12 }}
              transition={{ duration: reduce ? 0 : 0.6, ease }}
              className="max-w-5xl"
            >
              <div
                className="flex gap-1.5"
                role="img"
                aria-label="Rated 5 out of 5 stars"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden
                    className="h-5 w-5 fill-[#d4ad55] text-[#d4ad55]"
                  />
                ))}
              </div>

              <blockquote className="mt-8 [font-family:var(--font-display)] text-3xl font-medium italic leading-[1.25] text-[#f4efe6] sm:text-4xl md:text-6xl md:leading-[1.15]">
                “{active.text}”
              </blockquote>

              <figcaption className="mt-10">
                <span className="block text-lg font-semibold text-[#e9cf8a]">
                  {active.name}
                </span>
                <span className="mt-1 block text-[#f4efe6]/60">
                  {active.role}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Selector: client names */}
        <div
          role="tablist"
          aria-label="Choose a testimonial"
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-4 md:mt-20 md:grid-cols-4"
        >
          {testimonials.map((t, idx) => {
            const isActive = idx === current;
            return (
              <button
                key={t.name}
                type="button"
                role="tab"
                id={`testimonial-tab-${idx}`}
                aria-selected={isActive}
                aria-controls="testimonial-panel"
                onClick={() => setCurrent(idx)}
                className={`border-t pt-4 text-left transition-colors duration-300 ${focusRing} ${
                  isActive
                    ? "border-[#d4ad55] text-[#e9cf8a]"
                    : "border-[#d4ad55]/20 text-[#f4efe6]/55 hover:border-[#d4ad55]/60 hover:text-[#f4efe6]"
                }`}
              >
                <span className="block font-semibold">{t.name}</span>
                <span className="mt-0.5 block text-sm opacity-80">
                  {t.role}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}