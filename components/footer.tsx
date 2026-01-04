/* eslint-disable react/no-unescaped-entities */
"use client";

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
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-[#111111] text-white pt-20 pb-10 px-6 md:px-20 relative"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-yellow-600" />

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
          <h3 className="text-2xl font-bold text-yellow-600 mb-6 tracking-wide">
            Quick Links
          </h3>

          <ul className="space-y-4 text-lg">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Book Now", href: "/book" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-yellow-600 transition-all duration-300 text-gray-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-600 mb-6 tracking-wide">
            Contact
          </h3>

          <div className="space-y-5 text-lg text-gray-400">
            <div className="flex items-center gap-3">
              <Phone className="text-yellow-600" size={22} />
              <a
                href="tel:+2348082868332"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition-colors"
              >
                +234 808 286 8332
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-yellow-600" size={22} />
              <a
                href="mailto:support@2talk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition-colors"
              >
            houseof2talkentertainment.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-yellow-600" size={22} />
              <a
                href="https://www.google.com/maps/place/2+Idera+St,+Oworosoki,+Lagos+105102,+Lagos/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition-colors"
              >
                No.2 Idera Street, Oworoshoki Lagos, Nigeria
              </a>
            </div>
          </div>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-600 mb-6 tracking-wide">
            Follow Us
          </h3>

          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ho2_entertainment?igsh=MTVlNjVoZnloY29jbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-yellow-700/30 rounded-xl hover:bg-yellow-600 hover:text-black transition-all duration-300"
            >
              <Instagram size={26} />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-yellow-700/30 rounded-xl hover:bg-yellow-600 hover:text-black transition-all duration-300"
            >
              <Facebook size={26} />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-yellow-700/30 rounded-xl hover:bg-yellow-600 hover:text-black transition-all duration-300"
            >
              <Twitter size={26} />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-yellow-700/30 rounded-xl hover:bg-yellow-600 hover:text-black transition-all duration-300"
            >
              <Youtube size={26} />
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-yellow-700/30 rounded-xl hover:bg-yellow-600 hover:text-black transition-all duration-300"
            >
              <FaTiktok size={26} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center text-gray-500 text-md tracking-wide border-t border-[#2a2a2a] pt-6">
        © {new Date().getFullYear()} HOUSE OF 2TALK ENTERTAINMENT. All rights
        reserved.
      </div>
    </motion.footer>
  );
}
