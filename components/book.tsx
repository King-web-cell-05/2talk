/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";

const hairstyles = [
  { id: 1, name: "Low Cut", price: "₦2,000", image: "/placeholder1.jpg" },
  { id: 2, name: "Burst Fade", price: "₦2,000", image: "/placeholder2.jpg" },
  { id: 3, name: "Taper Fade", price: "₦2,000", image: "/placeholder3.jpg" },
  { id: 4, name: "Afro ", price: "₦2,000", image: "/placeholder4.jpg" },
  { id: 5, name: "Cut & Dye", price: "₦5,000", image: "/placeholder5.jpg" },
  { id: 6, name: "Mohawk", price: "₦2,000", image: "/placeholder6.jpg" },
];

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const generateTimeSlots = () => {
  const times = [];
  let hour = 9;
  let minute = 0;

  while (hour < 21 || (hour === 21 && minute === 0)) {
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour;
    const displayMin = minute === 0 ? "00" : minute;

    times.push(`${displayHour}:${displayMin} ${ampm}`);

    minute += 30;
    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }

  return times;
};

const timeSlots = generateTimeSlots();

export default function BookNowPage() {
  const [selectedStyle, setSelectedStyle] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#111] text-white min-h-screen py-24 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-yellow-600 text-center mb-16"
      >
        Book Your Appointment
      </motion.h1>

      {/* Hairstyle Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
        {hairstyles.map((style) => (
          <motion.div
            key={style.id}
            onClick={() => setSelectedStyle(style.id)}
            whileHover={{ scale: 1.03 }}
            className={`bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl cursor-pointer border transition-all
              ${
                selectedStyle === style.id
                  ? "border-yellow-600"
                  : "border-transparent"
              }
            `}
          >
            <div className="w-full h-60 bg-[#2a2a2a]">
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">
                {style.name}
              </h3>
              <p className="text-gray-300 text-lg">{style.price}</p>
            </div>

            <div className="p-6 pt-0">
              <Button
                onClick={() =>
                  (window.location.href = `/confirmbooking?styleId=${style.id}`)
                }
                className="w-full py-4 rounded-xl mt-4 bg-yellow-700 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-[#D4A65A]/30"
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
