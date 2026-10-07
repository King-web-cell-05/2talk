"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
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

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c06a]";

export default function CallToActionSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="get-started"
      aria-labelledby="cta-heading"
      className={`${display.variable} ${body.variable} relative isolate w-full overflow-hidden bg-[#0d0b08] px-6 py-24 text-[#f4efe6] [font-family:var(--font-body)] md:px-16 md:py-32`}
    >
      {/* One soft, static glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[60rem] max-w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(212,173,85,0.16),transparent_70%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: reduce ? 0 : 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-7xl border-t border-[#d4ad55]/30 pt-14 md:pt-20"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-24">
          <h2
            id="cta-heading"
            className="[font-family:var(--font-display)] text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-8xl"
          >
            <span className="bg-gradient-to-b from-[#f6e7b4] via-[#d4ad55] to-[#9c7a2e] bg-clip-text text-transparent">
              Ready to elevate your experience?
            </span>
          </h2>

          <div>
            <p className="max-w-md text-base leading-relaxed text-[#f4efe6]/75 md:text-lg">
              From premium grooming to event planning, content creation and
              comedy entertainment, House of 2Talk delivers excellence that
              stands out.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center rounded-sm bg-gradient-to-b from-[#e3c06a] to-[#b8903a] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#14100a] shadow-[0_8px_30px_-8px_rgba(212,173,85,0.6)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_rgba(212,173,85,0.8)] ${focusRing}`}
              >
                Book a session
              </Link>

              <a
                href="https://wa.me/2348082868332"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-sm border border-[#d4ad55]/50 px-8 py-3.5 text-sm font-semibold tracking-wide text-[#e9cf8a] transition duration-300 hover:border-[#d4ad55] hover:bg-[#d4ad55]/10 ${focusRing}`}
              >
                <FaWhatsapp size={18} aria-hidden />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}