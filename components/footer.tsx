"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
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

const headingClass =
  "mb-6 [font-family:var(--font-display)] text-3xl font-semibold tracking-wide text-[#e9cf8a]";

const socialClass = `flex h-12 w-12 items-center justify-center rounded-full border border-[#d4ad55]/30 text-[#f4efe6]/80 transition-all duration-300 hover:border-[#d4ad55] hover:bg-[#d4ad55] hover:text-[#14100a] ${focusRing}`;

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <motion.footer
      initial={{ opacity: 0, y: reduce ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduce ? 0 : 0.8, ease: "easeOut" }}
      className={`${display.variable} ${body.variable} relative w-full bg-[#0d0b08] px-6 pb-10 pt-20 text-[#f4efe6] [font-family:var(--font-body)] md:px-20`}
    >
      <div
        aria-hidden
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#d4ad55] to-transparent"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* BRAND */}
        <div>
          <Link
            href="/"
            aria-label="House of 2Talk Entertainment, home"
            className={`relative mb-4 block h-[130px] w-[130px] ${focusRing}`}
          >
            <Image
              src="/2talk-logo-img.png"
              alt="Footer Logo"
              fill
              sizes="130px"
              className="object-contain object-left"
            />
          </Link>
          <p className="text-lg leading-relaxed text-[#f4efe6]/65">
            House of 2Talk Entertainment is your premier destination for
            top-tier grooming, unforgettable events, engaging content, and
            comedy that leaves you wanting more. We blend style, creativity, and
            fun to deliver an experience like no other.
          </p>
        </div>

        {/* QUICK LINKS */}
        <nav aria-label="Footer">
          <h3 className={headingClass}>Quick Links</h3>

          <ul className="space-y-4 text-lg">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Service hub", href: "/servicehub" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`group relative inline-block text-[#f4efe6]/65 transition-colors duration-300 hover:text-[#e9cf8a] ${focusRing}`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#d4ad55] transition-transform duration-300 group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CONTACT */}
        <div>
          <h3 className={headingClass}>Contact</h3>

          <div className="space-y-5 text-lg text-[#f4efe6]/65">
            <div className="flex items-center gap-3">
              <Phone className="shrink-0 text-[#d4ad55]" size={22} aria-hidden />
              <a
                href="tel:+2348082868332"
                className={`transition-colors hover:text-[#e9cf8a] ${focusRing}`}
              >
                +234 808 286 8332
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="shrink-0 text-[#d4ad55]" size={22} aria-hidden />
              <a
                href="mailto:support@2talk.com"
                className={`break-all transition-colors hover:text-[#e9cf8a] ${focusRing}`}
              >
                houseof2talkentertainment.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="shrink-0 text-[#d4ad55]" size={22} aria-hidden />
              <a
                href="https://www.google.com/maps/place/2+Idera+St,+Oworosoki,+Lagos+105102,+Lagos/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-[#e9cf8a] ${focusRing}`}
              >
                No.2 Idera Street, Oworoshoki Lagos, Nigeria
              </a>
            </div>
          </div>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className={headingClass}>Follow Us</h3>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.instagram.com/ho2_entertainment?igsh=MTVlNjVoZnloY29jbA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={socialClass}
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={socialClass}
            >
              <Facebook size={22} />
            </a>

            <a
              href="https://x.com/Houseof2talk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className={socialClass}
            >
              <Twitter size={22} />
            </a>

            <a
              href="https://youtube.com/@yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className={socialClass}
            >
              <Youtube size={22} />
            </a>

            <a
              href="https://tiktok.com/@yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className={socialClass}
            >
              <FaTiktok size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-[#d4ad55]/20 pt-6 text-center text-sm tracking-wide text-[#f4efe6]/50">
        © {new Date().getFullYear()} HOUSE OF 2TALK ENTERTAINMENT. All rights
        reserved.
      </div>
    </motion.footer>
  );
}