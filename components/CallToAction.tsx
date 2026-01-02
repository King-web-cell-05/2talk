/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="w-full bg-[#0f0f0f] text-white py-28 px-6 md:px-20 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold  mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-500  drop-shadow-lg">
          Ready to Look Sharp?
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Reserve your spot today and experience premium grooming and modern barbering. We are
           are ready to give you the look you deserve.
        </p>

        <div className="flex justify-center mt-10">
          <Link href="/book">
            <Button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition-all duration-300 ">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Floating glow effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 right-10 w-32 h-32 bg-yellow-700/10 blur-3xl rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.8,
        }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-700/10 blur-3xl rounded-full"
      />
    </section>
  );
}
