/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";

// -------------------------------
// Sample data
// -------------------------------
const hairstyles = [
  {
    id: 1,
    name: "Low Cut",
    price: "₦2,000",
    image: "/placeholder1.jpg",
    duration: "30m",
  },
  {
    id: 2,
    name: "Burst Fade",
    price: "₦2,000",
    image: "/placeholder2.jpg",
    duration: "30m",
  },
  {
    id: 3,
    name: "Taper Fade",
    price: "₦2,000",
    image: "/placeholder3.jpg",
    duration: "30m",
  },
  {
    id: 4,
    name: "Afro",
    price: "₦2,000",
    image: "/placeholder4.jpg",
    duration: "45m",
  },
  {
    id: 5,
    name: "Cut & Dye",
    price: "₦5,000",
    image: "/placeholder5.jpg",
    duration: "60m",
  },
  {
    id: 6,
    name: "Mohawk",
    price: "₦2,000",
    image: "/placeholder6.jpg",
    duration: "30m",
  },
];

// Time slots
const generateTimeSlots = () => {
  const slots: string[] = [];
  for (let h = 9; h <= 21; h++) {
    for (let m of [0, 30]) {
      if (h === 21 && m > 0) continue;
      const hour = h > 12 ? h - 12 : h;
      const ampm = h >= 12 ? "PM" : "AM";
      const min = m === 0 ? "00" : "30";
      slots.push(`${hour}:${min} ${ampm}`);
    }
  }
  return slots;
};
const timeSlots = generateTimeSlots();

// -------------------------------
// Local date helper
// -------------------------------
const formatLocalDate = (iso: string) => {
  const [year, month, day] = iso.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
};

export default function ConfirmBooking() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const styleId = Number(searchParams.get("styleId")) || 1;
  const style = hairstyles.find((s) => s.id === styleId) || hairstyles[0];

  // -------------------------------
  // Client-only date generation
  // -------------------------------
  const [dates, setDates] = useState<{ iso: string; display: string }[]>([]);
  useEffect(() => {
    const today = new Date();
    const arr: { iso: string; display: string }[] = [];
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      arr.push({
        iso: date.toISOString().split("T")[0],
        display: date.toLocaleDateString("en-GB", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      });
    }
    setDates(arr);
  }, []);

  // ------------------------------------------
  const [clientName, setClientName] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    date?: string;
    time?: string;
  }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!clientName.trim()) e.name = "Please enter your full name.";
    if (!selectedDate) e.date = "Please choose a date.";
    if (!selectedTime) e.time = "Please choose a time.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleConfirm = async () => {
    if (!validate()) return;
    setLoading(true);

    try {
      const formattedDate = selectedDate ? formatLocalDate(selectedDate) : "";

      const message = `Hello, I would like to book a *${
        style.name
      }* appointment.%0A*Name:* ${encodeURIComponent(
        clientName
      )}%0A*Date:* ${encodeURIComponent(
        formattedDate
      )}%0A*Time:* ${encodeURIComponent(
        selectedTime as string
      )}%0A*Price:* ${encodeURIComponent(style.price)}`;

      const phoneNumber = "2349065644691";
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");

      router.push("/appointmentbooked");
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  if (dates.length === 0) {
    return null;
  }

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-15">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600"
          >
            Confirm Your Booking — {style.name}
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-[#121212] p-8 md:p-12 rounded-2xl border border-yellow-700/30 shadow-2xl"
          >
            {/* NAME */}
            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-2">
                Full name
              </label>
              <input
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. John Doe"
                className={`w-full p-4 rounded-xl bg-[#0f0f0f] text-white border outline-none transition duration-200 focus:ring-2 focus:ring-yellow-500 ${
                  errors.name ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-2">{errors.name}</p>
              )}
            </div>

            {/* DATE */}
            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-3">
                Choose a date
              </label>
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {dates.map((d) => {
                  const active = d.iso === selectedDate;
                  return (
                    <motion.button
                      key={d.iso}
                      onClick={() => setSelectedDate(d.iso)}
                      whileTap={{ scale: 0.95 }}
                      className={`min-w-[110px] flex-shrink-0 p-3 rounded-xl border transition-all duration-200 text-left ${
                        active
                          ? "bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/60 ring-1 ring-yellow-500/20"
                          : "bg-[#0f0f0f] border-gray-700"
                      }`}
                    >
                      <div className="text-xs text-gray-300">
                        {d.display.split(",")[0]}
                      </div>
                      <div className="font-semibold mt-1 text-white text-sm">
                        {d.display.split(",")[1]?.trim() ?? d.display}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {formatLocalDate(d.iso)}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
              {errors.date && (
                <p className="text-red-400 text-sm mt-2">{errors.date}</p>
              )}
            </div>

            {/* TIME */}
            {/* TIME */}
            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-3">
                Choose a time
              </label>
              <select
                value={selectedTime || ""}
                onChange={(e) => setSelectedTime(e.target.value)}
                className={`w-full p-4 rounded-xl bg-[#0f0f0f] text-white border outline-none transition duration-200 focus:ring-2 focus:ring-yellow-500 ${
                  errors.time ? "border-red-500" : "border-gray-700"
                }`}
              >
                <option value="" disabled>
                  Select a time
                </option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="text-red-400 text-sm mt-2">{errors.time}</p>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex items-center gap-4">
              <Button
                onClick={() => !loading && handleConfirm()}
                className={`bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl shadow-xl ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Confirming..." : "Confirm Booking"}
              </Button>

              <button
                onClick={() => {
                  setClientName("");
                  setSelectedDate(null);
                  setSelectedTime(null);
                  setErrors({});
                }}
                className="text-sm text-gray-300 underline"
              >
                Reset
              </button>
            </div>
          </motion.div>
          {/* SUMMARY */}
          <motion.aside
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-[#0f0f0f]/60 to-[#0b0b0b] p-6 rounded-2xl border border-yellow-700/20 shadow-2xl max-h-[380px] overflow-y-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-28 h-28 rounded-lg overflow-hidden flex-shrink-0 border border-yellow-700/30">
                <Image
                  src={style.image}
                  alt={style.name}
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="text-sm text-gray-300">Selected</div>
                <div className="font-bold text-lg mt-1">{style.name}</div>
                <div className="text-yellow-400 font-semibold mt-1 text-lg">
                  {style.price}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  Duration: {style.duration}
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-yellow-700/10 pt-3 text-base text-gray-300 space-y-3">
              <div>
                <div className="text-sm text-gray-400">Name</div>
                <div className="mt-1 text-lg">
                  {clientName || (
                    <span className="text-gray-600">Not provided</span>
                  )}
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Date</div>
                <div className="mt-1 text-lg">
                  {selectedDate ? (
                    formatLocalDate(selectedDate)
                  ) : (
                    <span className="text-gray-600">Choose date</span>
                  )}
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Time</div>
                <div className="mt-1 text-lg">
                  {selectedTime || (
                    <span className="text-gray-600">Choose time</span>
                  )}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
