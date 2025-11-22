/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Testimonials", href: "testimonials" },

    { name: "Contact", href: "contact" },
  ];

  // Smooth Scrolling Function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - 70; // adjusts for navbar height
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0B0C10]/95 backdrop-blur-md border-b border-[#00FFD1]/20 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 h-16">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold text-[#00FFD1] tracking-wide cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          2Talk
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="hover:text-[#00FFD1] hover:cursor-pointer transition-colors duration-300 font-medium"
            >
              {link.name}
            </button>
          ))}

          <Button className="bg-[#00FFD1] hover:bg-[#00e6c0] text-[#0B0C10] font-semibold transition-all duration-300 shadow-md hover:shadow-[#00FFD1]/30">
            Book Now
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#00FFD1] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0C10] border-t border-[#00FFD1]/20 px-6 py-4 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                scrollToSection(link.href);
                setIsOpen(false);
              }}
              className="hover:text-[#00FFD1] transition-colors duration-300 font-medium text-left"
            >
              {link.name}
            </button>
          ))}

          <Button
            className="bg-[#00FFD1] hover:bg-[#00e6c0] text-[#0B0C10] font-semibold transition-all duration-300 shadow-md hover:shadow-[#00FFD1]/30"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
}
