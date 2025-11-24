/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Info, Book, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={22} /> },
    { name: "About", href: "/about", icon: <Info size={22} /> },
    { name: "Book now", href: "/book", icon: <Book size={22} /> },
    { name: "Contact", href: "/contact", icon: <Phone size={22} /> },
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
              className="hover:text-[#00FFD1] transition-colors duration-300 text-md tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#00FFD1] focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden bg-[#0B0C10] border-t border-[#00FFD1]/20 px-6 py-6 space-y-6 
            font-[var(--font-rajdhani)] animate-slideDown relative
          "
        >

          {/* Grid Tech Background */}
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#00FFD120_1px,transparent_1px),linear-gradient(#00FFD120_1px,transparent_1px)] bg-[size:35px_35px] pointer-events-none"></div>

          {/* LINKS */}
          <div className="relative space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-lg tracking-wide group"
              >
                <span className="text-[#00FFD1] group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>
                <span className="group-hover:text-[#00FFD1] transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#00FFD1]/20"></div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a className="text-[#00FFD1] hover:scale-110 transition-transform" href="#">
              <Instagram size={24} />
            </a>
            <a className="text-[#00FFD1] hover:scale-110 transition-transform" href="#">
              <Facebook size={24} />
            </a>
            <a className="text-[#00FFD1] hover:scale-110 transition-transform" href="#">
              <MessageCircle size={24} />
            </a>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-400 pt-4">
            © 2025 HOUSE OF 2TALK ENTERTAINMENT
          </p>
        </div>
      )}
    </nav>
  );
}
