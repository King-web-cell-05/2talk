/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Book now", href: "/book" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0B0C10]/95 backdrop-blur-md border-b border-[#00FFD1]/20 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-14 h-20">
        
        {/* Logo */}
        <Link href="/" className="relative cursor-pointer select-none flex items-center justify-center h-20 w-20">
          <img
            src="/2talk-logo-img.png"
            alt="2Talk Logo"
            className="h-[120px] w-[120px] object-cover"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 font-[var(--font-rajdhani)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#00FFD1] hover:cursor-pointer transition-colors duration-300 text-md tracking-wide"
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#00FFD1] focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0C10] border-t border-[#00FFD1]/20 px-6 py-5 space-y-4 flex flex-col font-[var(--font-rajdhani)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#00FFD1] transition-colors duration-300 text-left tracking-wide text-lg"
            >
              {link.name}
            </Link>
          ))}

      
        </div>
      )}
    </nav>
  );
}
