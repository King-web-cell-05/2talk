/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Info,
  Book,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={22} /> },
    { name: "About", href: "/about", icon: <Info size={22} /> },
    { name: "Book now", href: "/book", icon: <Book size={22} /> },
    { name: "Contact", href: "/contact", icon: <Phone size={22} /> },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-[#2a2a2a] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-14 h-22">
        {/* LOGO */}
        <Link
          href="/"
          className="relative cursor-pointer select-none flex items-center justify-center h-20 w-20"
        >
          <img
            src="/2talk-logo-img.png"
            alt="2Talk Logo"
            className="h-[160px] w-[160px] object-cover mb-4"
          />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 font-[var(--font-rajdhani)] text-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative transition-all duration-300 
                  ${isActive ? "text-yellow-600" : "text-white"}
                  hover:text-gray-400
                `}
              >
                {link.name}

                {/* GOLD UNDERLINE WHEN ACTIVE */}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-yellow-600 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 focus:outline-none transition-all hover:text-gray-400"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#2a2a2a] px-6 py-6 space-y-6 font-[var(--font-rajdhani)] animate-slideDown relative shadow-xl">
          {/* GOLD TECH GRID */}
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#D4A65A40_1px,transparent_1px),linear-gradient(#D4A65A40_1px,transparent_1px)] bg-[size:38px_38px] pointer-events-none"></div>

          {/* MOBILE LINKS */}
          <div className="relative space-y-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-lg tracking-wide group"
                >
                  {/* ICON */}
                  <span
                    className={`transition-colors ${
                      isActive ? "text-yellow-600" : "text-white"
                    } group-hover:text-gray-400`}
                  >
                    {link.icon}
                  </span>

                  {/* TEXT + UNDERLINE */}
                  <span className="relative inline-block">
                    <span
                      className={`transition-colors ${
                        isActive ? "text-yellow-600" : "text-white"
                      } group-hover:text-gray-400`}
                    >
                      {link.name}
                    </span>

                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-yellow-600 rounded-full"></span>
                    )}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* DIVIDER */}
          <div className="w-full h-[1px] bg-[#2a2a2a]"></div>

       {/* SOCIAL ICONS */}
<div className="flex items-center gap-6 relative">
  <a
    href="https://instagram.com"   
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 border border-gray-500 rounded-xl hover:text-gray-300 hover:bg-[#1c1c1c] transition-all duration-300"
  >
    <Instagram size={24} />
  </a>

  <a
    href="https://facebook.com"   
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 border border-gray-500 rounded-xl hover:text-gray-300 hover:bg-[#1c1c1c] transition-all duration-300"
  >
    <Facebook size={24} />
  </a>

  <a
    href="https://wa.me/2348082868332"   
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 border border-gray-500 rounded-xl hover:text-gray-300 hover:bg-[#1c1c1c] transition-all duration-300"
  >
    <FaWhatsapp size={24} />
  </a>
</div>


          {/* COPYRIGHT */}
          <p className="text-xs text-gray-500 pt-4">
            © 2025 HOUSE OF 2TALK ENTERTAINMENT
          </p>
        </div>
      )}
    </nav>
  );
}
