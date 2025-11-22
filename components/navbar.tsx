/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/button";

export default function Nav() {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => setIsOpen(!isOpen);

const navLinks = [
{ name: "Home", href: "#home" },
{ name: "Services", href: "#services" },
{ name: "About", href: "#about" },
{ name: "Contact", href: "#contact" },
];

return (
  <nav className="w-full fixed top-0 left-0 z-50 bg-[#111] text-white shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 h-16">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#00FFD1] cursor-pointer">
        2Talk 
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-[#00FFD1] transition-colors font-medium"
          >
            {link.name}
          </a>
        ))}
        <Button className="text-[#00FFD1] hover:bg-[#00e6c0] text-black font-semibold">
          Book Now
        </Button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden bg-[#111] px-6 py-4 space-y-4 flex flex-col">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-yellow-600 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <Button
          className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold"
          onClick={() => setIsOpen(false)}
        >
          Book Now
        </Button>
      </div>
    )}
  </nav>
);

}