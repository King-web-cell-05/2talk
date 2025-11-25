/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white pt-20 pb-10 px-6 md:px-20 relative">
      {/* Top subtle gold line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-700/60" />

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* BRAND */}
        <div>
          <img
            src="/2talk-logo-img.png"
            alt="Footer Logo"
            className="h-[130px] w-[130px] object-cover mb-4"
          />
          <p className="text-gray-400 text-lg leading-relaxed">
            Premium grooming and modern barbering designed for the stylish man.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-700 mb-6 tracking-wide">
            Quick Links
          </h3>

          <ul className="space-y-4 text-lg">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "/about" },
              { label: "Book Now", href: "/book" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.href === "#home") {
                      e.preventDefault();
                      const el = document.getElementById("home");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-yellow-600 transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-700 mb-6 tracking-wide">
            Contact
          </h3>

          <div className="space-y-5 text-lg text-gray-400">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="text-yellow-700" size={22} />
              <a
                href="tel:+2348082868332"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition-colors"
              >
                +234 808 286 8332
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="text-yellow-700" size={22} />
              <a
                href="mailto:support@2talk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition-colors"
              >
                support@2talk.com
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3">
              <MapPin className="text-yellow-700" size={22} />
              <a
                href="https://www.google.com/maps/place/2+Idera+St,+Oworosoki,+Lagos+105102,+Lagos/@6.5498083,3.3993645,17z/data=!4m16!1m9!3m8!1s0x103b8d41e24fd015:0x803fb8c1dcdf57c6!2s2+Idera+St,+Oworosoki,+Lagos+105102,+Lagos!3b1!8m2!3d6.5500041!4d3.3994933!10e5!16s%2Fg%2F11dzqhx2x1!3m5!1s0x103b8d41e24fd015:0x803fb8c1dcdf57c6!8m2!3d6.5500041!4d3.3994933!16s%2Fg%2F11dzqhx2x1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition-colors"
              >
                No.4 Idera Street, Oworoshoki Lagos, Nigeria
              </a>
            </div>
          </div>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-700 mb-6 tracking-wide">
            Follow Us
          </h3>

          <div className="flex items-center gap-5">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                className="p-3 border border-yellow-700/30 rounded-xl
                hover:bg-yellow-700 hover:text-black
                transition-all duration-300"
                rel="noopener noreferrer"
              >
                <Icon size={26} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-20 text-center text-gray-500 text-md tracking-wide border-t border-[#2a2a2a] pt-6">
        © {new Date().getFullYear()} HOUSE OF 2TALK ENTERTAINMENT. All rights
        reserved.
      </div>
    </footer>
  );
}
