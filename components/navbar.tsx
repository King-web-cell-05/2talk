"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Instagram, Facebook } from "lucide-react";
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

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service hub", href: "/servicehub" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ho2_entertainment?igsh=MTVlNjVoZnloY29jbA==",
    icon: <Instagram size={20} />,
  },
  { label: "Facebook", href: "https://facebook.com", icon: <Facebook size={20} /> },
  {
    label: "WhatsApp",
    href: "https://wa.me/2348082868332",
    icon: <FaWhatsapp size={20} />,
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c06a]";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  // Solid bar once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll and allow Escape to close while the menu is open
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const solid = scrolled || isOpen;

  return (
    <div className={`${display.variable} ${body.variable} [font-family:var(--font-body)]`}>
      <header
        className={`fixed left-0 top-0 z-50 w-full text-[#f4efe6] transition-[background-color,border-color,box-shadow] duration-500 ${
          solid
            ? "border-b border-[#d4ad55]/15 bg-[#0d0b08]/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-[#0d0b08]/80 to-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-14"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="House of 2Talk Entertainment, home"
            className={`relative block h-30 w-30 shrink-0 ${focusRing}`}
          >
            <Image
              src="/2talk-logo-img.png"
              alt="2Talk logo"
              fill
              sizes="56px"
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative py-2 text-[15px] font-medium tracking-wide transition-colors duration-300 ${focusRing} ${
                        isActive
                          ? "text-[#e9cf8a]"
                          : "text-[#f4efe6]/80 hover:text-[#f4efe6]"
                      }`}
                    >
                      {link.name}
                      <span
                        aria-hidden
                        className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-[#d4ad55] transition-transform duration-300 ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              className={`rounded-sm bg-gradient-to-b from-[#e3c06a] to-[#b8903a] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#14100a] shadow-[0_6px_24px_-8px_rgba(212,173,85,0.6)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(212,173,85,0.8)] ${focusRing}`}
            >
              Book a session
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`-mr-2 p-2 text-[#f4efe6] transition-colors hover:text-[#e9cf8a] md:hidden ${focusRing}`}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu: sits outside the header so backdrop-blur doesn't trap its fixed positioning */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            className="fixed inset-x-0 bottom-0 top-20 z-40 flex flex-col overflow-y-auto bg-[#0d0b08]/97 px-6 pb-8 pt-6 text-[#f4efe6] backdrop-blur-xl md:hidden"
          >
            <ul className="flex-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduce ? 0 : 0.5,
                      delay: reduce ? 0 : 0.08 * i + 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-[#d4ad55]/15"
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={`block py-5 [font-family:var(--font-display)] text-4xl font-semibold transition-colors ${focusRing} ${
                        isActive
                          ? "text-[#e9cf8a]"
                          : "text-[#f4efe6] hover:text-[#e9cf8a]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-8 space-y-8">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`block rounded-sm bg-gradient-to-b from-[#e3c06a] to-[#b8903a] px-6 py-3.5 text-center text-sm font-semibold tracking-wide text-[#14100a] ${focusRing}`}
              >
                Book a session
              </Link>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`rounded-full border border-[#d4ad55]/30 p-3 text-[#f4efe6]/80 transition duration-300 hover:border-[#d4ad55] hover:text-[#e9cf8a] ${focusRing}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <p className="text-xs text-[#f4efe6]/50">
                © {new Date().getFullYear()} House of 2Talk Entertainment
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}