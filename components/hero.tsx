/* eslint-disable react/no-unescaped-entities */
'use client';
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
      {" "}
      <div className="relative w-full h-[90vh]">
        {" "}
        <Image
          src="/hero-img.jpg"
          alt="Barber Hero"
          fill={true}
          className="object-cover opacity-40"
          priority
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold max-w-2xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-500 tracking-widest drop-shadow-lg"
          >
            H2 Barbershop
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold max-w-2xl leading-tight text-white drop-shadow-xl"
          >
            Master Your Style
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 max-w-lg text-lg md:text-xl leading-relaxed"
          >
            Dynamic entertainment services and premium grooming, delivered with
            precision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex gap-4 mt-4"
          >
            <Link href="/book">
              <Button className="bg-yellow-700 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-[#D4A65A]/30">
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
