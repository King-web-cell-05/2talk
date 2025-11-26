/* eslint-disable react/no-unescaped-entities */
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";

const hairstyles = [
  { id: 1, name: "Low Cut", price: "₦2,000", image: "/placeholder1.jpg" },
  { id: 2, name: "Burst Fade", price: "₦2,000", image: "/placeholder2.jpg" },
  { id: 3, name: "Taper Fade", price: "₦2,000", image: "/placeholder3.jpg" },
  { id: 4, name: "Afro", price: "₦2,000", image: "/placeholder4.jpg" },
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
  const router = useRouter();
  const styleId = Number(searchParams.get("styleId"));
  const style = hairstyles.find((s) => s.id === styleId);

  const [clientName, setClientName] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  if (!style) {
    return (
      <div className="text-white text-center py-40 text-2xl">
        Hairstyle not found.{" "}
      </div>
    );
  }

  const handleWhatsAppBooking = () => {
    if (!clientName || !selectedDay || !selectedTime) {
      alert("Please fill in all fields before confirming your booking.");
      return;
    }

    const message = `Hello, I would like to book a "${style.name}" appointment.\nName: ${clientName}\nDay: ${selectedDay}\nTime: ${selectedTime}\nPrice: ${style.price}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "2349065644691"; 

    // Open WhatsApp in a new tab
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );

    // Redirect to Appointment Booked page
    router.push("/appointmentbooked");
  };

  return (
    <section className="w-full bg-[#111] text-white min-h-screen py-32 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-yellow-600 text-center mb-16 tracking-wide"
      >
        Confirm Your Booking — {style.name}
      </motion.h1>
      
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] p-12 md:p-16 rounded-3xl shadow-2xl border border-yellow-700/40 space-y-12">
        {/* Image & Price */}
        <div className="text-center space-y-4">
          <img
            src={style.image}
            alt={style.name}
            className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg border border-yellow-700/30"
          />
          <p className="text-3xl md:text-4xl font-bold text-yellow-500">
            Price: {style.price}
          </p>
        </div>

        {/* Client Name */}
        <div className="space-y-3">
          <label className="block text-lg font-medium text-gray-300">
            Your Full Name
          </label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-5 rounded-2xl bg-[#0f0f0f] text-white border border-gray-700 outline-none focus:border-yellow-500 transition-all duration-300 shadow-sm"
          />
        </div>

        {/* Day & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="space-y-3">
            <label className="block text-lg font-medium text-gray-300">
              Select Day
            </label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="w-full p-5 rounded-2xl bg-[#0f0f0f] text-white border border-gray-700 outline-none focus:border-yellow-500 transition-all duration-300 shadow-sm"
            >
              <option value="">Choose day</option>
              {daysOfWeek.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-3">
            <label className="block text-lg font-medium text-gray-300">
              Select Time
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full p-5 rounded-2xl bg-[#0f0f0f] text-white border border-gray-700 outline-none focus:border-yellow-500 transition-all duration-300 shadow-sm"
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
        <div className="flex justify-center">
          <Button
            onClick={handleWhatsAppBooking}
            className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-xl px-12 py-5 rounded-2xl shadow-lg hover:shadow-yellow-500/40 transition-all duration-300"
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    </section>
  );
}
