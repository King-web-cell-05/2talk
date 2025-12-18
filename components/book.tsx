/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";

const hairstyles = [
  { id: 1, name: "Low Cut", price: "₦2,000", image: "/placeholder1.jpg", duration: "30m" },
  { id: 2, name: "Burst Fade", price: "₦2,000", image: "/placeholder2.jpg", duration: "30m" },
  { id: 3, name: "Taper Fade", price: "₦2,000", image: "/placeholder3.jpg", duration: "30m" },
  { id: 4, name: "Afro", price: "₦2,000", image: "/placeholder4.jpg", duration: "35m" },
  { id: 5, name: "Cut & Dye", price: "₦5,000", image: "/placeholder5.jpg", duration: "60m" },
  { id: 6, name: "Mohawk", price: "₦2,000", image: "/placeholder6.jpg", duration: "40m" },
];

export default function BookNowPage() {
  const [selectedStyle, setSelectedStyle] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen bg-[#0D0D0D] text-white py-24 px-6 md:px-20">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-center text-4xl md:text-6xl font-extrabold tracking-wider 
          text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600
          mb-20
        "
      >
        Book Your Appointment
      </motion.h1>

      {/* Hairstyle Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {hairstyles.map((style) => (
          <motion.div
            key={style.id}
            onClick={() => setSelectedStyle(style.id)}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.25 }}
            className={`
              w-full max-w-sm rounded-3xl overflow-hidden cursor-pointer
              bg-[#111111]/60 backdrop-blur-xl border 
              shadow-[0_0_25px_rgba(0,0,0,0.45)] transition-all relative
              ${selectedStyle === style.id
                ? "border-yellow-500 shadow-[0_0_20px_rgba(255,200,0,0.5)]"
                : "border-[#1f1f1f]"
              }
            `}
          >
            {/* Image */}
            <div className="w-full h-60 overflow-hidden relative">
              <motion.img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000]/70 to-transparent"></div>
            </div>

            {/* Text */}
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-bold text-yellow-500 tracking-wide">{style.name}</h3>
              <p className="text-lg text-gray-300">{style.price}</p>
              <p className="text-sm text-gray-400">Duration: {style.duration}</p>
            </div>

            {/* Button */}
            <div className="px-6 pb-6">
              <Button
                onClick={() =>
                  (window.location.href = `/confirmbooking?styleId=${style.id}`)
                }
                className="
                  w-full mt-2 py-4 rounded-xl font-semibold text-black 
                  bg-gradient-to-r from-yellow-600 to-yellow-500
                  hover:from-yellow-500 hover:to-yellow-400
                  transition-all duration-300
                  shadow-[0_0_12px_rgba(255,220,90,0.3)]
                  hover:shadow-[0_0_20px_rgba(255,220,90,0.5)]
                "
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
