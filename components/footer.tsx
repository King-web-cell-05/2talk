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
    <footer className="w-full bg-[#0B0C10] text-white border-t border-[#00FFD1]/20 pt-20 pb-10 px-6 md:px-20 relative">
      {/* GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00FFD1] opacity-60 blur-[2px]" />

      {/* FOOTER GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* BRAND */}
        <div>
          <img
            src="/2talk-logo-img.png"
            alt="Footer Logo"
            className="h-[130px] w-[130px] object-cover mb-4 drop-shadow-[0_0_25px_rgba(0,255,209,0.4)]"
          />
          <p className="text-[#9BA8B4] text-lg leading-relaxed font-[var(--font-rajdhani)]">
            Premium grooming and styling services designed for the modern man.
            Your look deserves precision.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-bold text-[#00FFD1] mb-6 tracking-wide">
            Quick Links
          </h3>

          <ul className="space-y-4 text-lg">
            {[
              { label: "Home", href: "#home" }, // anchor for smooth scroll
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
                      const element = document.getElementById("home");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                  className="hover:text-[#00FFD1] transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-2xl font-bold text-[#00FFD1] mb-6 tracking-wide">
            Contact
          </h3>

          <div className="space-y-5 text-lg text-[#9BA8B4]">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="text-[#00FFD1]" size={22} />
              <a
                href="tel:+2348082868332"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00FFD1] transition-colors"
              >
                +234 808 286 8332
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="text-[#00FFD1]" size={22} />
              <a
                href="mailto:support@2talk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00FFD1] transition-colors"
              >
                ddsdf@2talk.com
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3">
              <MapPin className="text-[#00FFD1]" size={22} />
              <a
                href="https://www.google.com/maps/place/2+Idera+St,+Oworosoki,+Lagos+105102,+Lagos/@6.5498083,3.3993645,17z/data=!4m16!1m9!3m8!1s0x103b8d41e24fd015:0x803fb8c1dcdf57c6!2s2+Idera+St,+Oworosoki,+Lagos+105102,+Lagos!3b1!8m2!3d6.5500041!4d3.3994933!10e5!16s%2Fg%2F11dzqhx2x1!3m5!1s0x103b8d41e24fd015:0x803fb8c1dcdf57c6!8m2!3d6.5500041!4d3.3994933!16s%2Fg%2F11dzqhx2x1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00FFD1] transition-colors"
              >
                No.4 Idera Street Oworoshoki Lagos, Nigeria
              </a>
            </div>
          </div>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="text-2xl font-bold text-[#00FFD1] mb-6 tracking-wide">
            Follow Us
          </h3>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="p-3 border border-[#00FFD1]/40 rounded-xl hover:bg-[#00FFD1] hover:text-[#0B0C10] transition-all duration-300"
            >
              <Instagram size={26} />
            </a>

            <a
              href="#"
              className="p-3 border border-[#00FFD1]/40 rounded-xl hover:bg-[#00FFD1] hover:text-[#0B0C10] transition-all duration-300"
            >
              <Facebook size={26} />
            </a>

            <a
              href="#"
              className="p-3 border border-[#00FFD1]/40 rounded-xl hover:bg-[#00FFD1] hover:text-[#0B0C10] transition-all duration-300"
            >
              <Twitter size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-20 text-center text-[#9BA8B4] text-md tracking-wide border-t border-[#00FFD1]/10 pt-6">
        © {new Date().getFullYear()} HOUSE OF 2TALK ENTERTAINMENT. All rights
        reserved.
      </div>
    </footer>
  );
}
