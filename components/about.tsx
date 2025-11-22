/* eslint-disable react/no-unescaped-entities */
"use client";

import { Cpu, ShieldCheck,  Layers } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-[#0B0C10] text-white py-24 px-6 md:px-12 border-y border-[#00FFD1]/20 relative overflow-hidden"
    >
      {/* Technical Background Grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#00FFD120_1px,transparent_1px),linear-gradient(#00FFD120_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#00FFD1] mb-6 tracking-wide">
          About 2Talk
        </h2>

        <p className="text-gray-300 max-w-3xl text-lg leading-relaxed mb-12">
          At 2Talk, we blend high-end grooming with cutting-edge style. Our mission
          is simple: to bring precision, quality, and modern aesthetics into every
          service and product we offer. With a strong commitment to excellence,
          we’ve engineered a grooming experience built for the modern man.
        </p>

        {/* Technical Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#111] border border-[#00FFD1]/20 rounded-xl p-8 hover:border-[#00FFD1]/40 transition-all backdrop-blur-sm shadow-lg shadow-black/20">
            <Cpu size={38} className="text-[#00FFD1] mb-4" />
            <h3 className="text-2xl font-bold mb-2">Precision Crafted</h3>
            <p className="text-gray-400">
              Every cut, product, and service is engineered with accuracy and
              modern techniques to deliver flawless results.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111] border border-[#00FFD1]/20 rounded-xl p-8 hover:border-[#00FFD1]/40 transition-all backdrop-blur-sm shadow-lg shadow-black/20">
            <ShieldCheck size={38} className="text-[#00FFD1] mb-4" />
            <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-400">
              We uphold high standards across all services — using only premium
              products and professional-grade tools.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111] border border-[#00FFD1]/20 rounded-xl p-8 hover:border-[#00FFD1]/40 transition-all backdrop-blur-sm shadow-lg shadow-black/20">
            <Layers size={38} className="text-[#00FFD1] mb-4" />
            <h3 className="text-2xl font-bold mb-2">Modern & Sleek</h3>
            <p className="text-gray-400">
              Our approach to grooming is built on modern design, sleek visuals,
              and a clean, tech-driven experience.
            </p>
          </div>
        </div>

        {/* Bottom Big Statement */}
        <p className="text-gray-300 max-w-4xl text-xl mt-16 font-medium border-l-4 border-[#00FFD1] pl-6">
          Our vision is to redefine grooming by blending creativity, technology,
          and professional craftsmanship — making every client feel confident,
          sharp, and ahead of the curve.
        </p>
      </div>
    </section>
  );
}
