/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full bg-[#111111] text-white relative overflow-hidden"
    >
      <div className="relative w-full h-[90vh] mt-20">
        <Image
          src="/2talk-bg.avif"
          alt="House of 2Talk Entertainment"
          fill
          className="object-cover opacity-40"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <div className="max-w-3xl space-y-6">
            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                text-4xl md:text-6xl font-extrabold leading-tight tracking-widest
                text-transparent bg-clip-text 
                bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-500
                drop-shadow-lg
              "
            >
              House of <br /> 2Talk Entertainment
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-white drop-shadow-xl"
            >
              Grooming. Events. Content. Comedy.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-gray-200 max-w-xl text-lg md:text-xl leading-relaxed"
            >
              A creative entertainment hub delivering premium barbing services,
              unforgettable event planning, engaging content creation, and
              top-tier comedy experiences — all under one brand.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link href="/servicehub">
                <Button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-yellow-500/30">
                  Explore Services
                </Button>
              </Link>

              <Link href="/contact">
                <Button className="bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3 rounded-md transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
