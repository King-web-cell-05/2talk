/* eslint-disable react/no-unescaped-entities */
"use client";

import { useSearchParams } from "next/navigation";
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

export default function ConfirmBookingPage() {
  const searchParams = useSearchParams();
  const styleId = Number(searchParams.get("styleId"));

  const style = hairstyles.find((s) => s.id === styleId);

  const [clientName, setClientName] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  if (!style) {
    return (
      <div className="text-white text-center py-40 text-2xl">
        Hairstyle not found.
      </div>
    );
  }

  return (
    <section className="w-full bg-[#111] text-white min-h-screen py-24 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-yellow-700 text-center mb-12"
      >
        Confirm Booking — {style.name}
      </motion.h1>

      <div className="max-w-3xl mx-auto bg-[#1a1a1a] p-10 rounded-2xl shadow-xl border border-yellow-700/30">
        <div className="text-center mb-10">
          <img
            src={style.image}
            alt={style.name}
            className="w-full h-72 object-cover rounded-xl mb-6"
          />

          <p className="text-2xl font-semibold text-yellow-600">
            Price: {style.price}
          </p>
        </div>

        {/* Client Name */}
        <div className="mb-10">
          <label className="block mb-3 text-lg text-gray-300">Your Name</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-4 rounded-xl bg-[#0f0f0f] text-white border border-gray-700 outline-none focus:border-yellow-600 transition"
          />
        </div>

        {/* Day + Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <label className="block mb-3 text-lg text-gray-300">Select Day</label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#0f0f0f] text-white border border-gray-700 outline-none focus:border-yellow-600 transition"
            >
              <option value="">Choose day</option>
              {daysOfWeek.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-3 text-lg text-gray-300">Select Time</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#0f0f0f] text-white border border-gray-700 outline-none focus:border-yellow-600 transition"
            >
              <option value="">Choose time</option>
              {timeSlots.map((t, i) => (
                <option key={i} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="flex justify-center mt-12">
          <Button className="px-12 py-5 text-xl font-semibold rounded-xl bg-yellow-700 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-[#D4A65A]/30">
            Confirm Booking
          </Button>
        </div>
      </div>
    </section>
  );
}
