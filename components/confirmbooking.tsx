/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/button";

// ------------------------------------
// DATA
// ------------------------------------
const hairstyles = [
  {
    id: 1,
    name: "Low Cut",
    prices: { shop: 2000, home: 5000 },
    image: "/placeholder1.jpg",
    duration: "30m",
  },
  {
    id: 2,
    name: "Burst Fade",
    prices: { shop: 2000, home: 5000 },
    image: "/placeholder2.jpg",
    duration: "30m",
  },
  {
    id: 3,
    name: "Taper Fade",
    prices: { shop: 2000, home: 5000 },
    image: "/placeholder3.jpg",
    duration: "30m",
  },
  {
    id: 4,
    name: "Afro",
    prices: { shop: 2000, home: 5000 },
    image: "/placeholder4.jpg",
    duration: "45m",
  },
  {
    id: 5,
    name: "Cut & Dye",
    prices: { shop: 5000, home: 8000 },
    image: "/placeholder5.jpg",
    duration: "60m",
  },
  {
    id: 6,
    name: "Mohawk",
    prices: { shop: 2000, home: 5000 },
    image: "/placeholder6.jpg",
    duration: "30m",
  },
];

// ------------------------------------
// HELPERS
// ------------------------------------
const generateTimeSlots = () => {
  const slots: string[] = [];
  for (let h = 9; h <= 21; h++) {
    for (let m of [0, 30]) {
      if (h === 21 && m > 0) continue;
      const hour = h > 12 ? h - 12 : h;
      const ampm = h >= 12 ? "PM" : "AM";
      slots.push(`${hour}:${m === 0 ? "00" : "30"} ${ampm}`);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

const formatLocalDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-GB", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
};

// ------------------------------------
// COMPONENT
// ------------------------------------
export default function ConfirmBooking() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const styleId = Number(searchParams.get("styleId")) || 1;
  const style = hairstyles.find((s) => s.id === styleId)!;

  // ✅ NO DEFAULT SELECTION
  const [serviceType, setServiceType] =
    useState<"shop" | "home" | null>(null);

  // ✅ PRICE ONLY AFTER SELECTION
  const price = serviceType ? style.prices[serviceType] : null;

  const [clientName, setClientName] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [dates, setDates] = useState<{ iso: string; display: string }[]>([]);
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    const today = new Date();
    const list = Array.from({ length: 14 }).map((_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      return {
        iso: d.toISOString().split("T")[0],
        display: d.toLocaleDateString("en-GB", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      };
    });
    setDates(list);
  }, []);

  const validate = () => {
    const e: any = {};
    if (!serviceType) e.serviceType = true;
    if (!clientName.trim()) e.name = true;
    if (!selectedDate) e.date = true;
    if (!selectedTime) e.time = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleConfirm = () => {
    if (!validate()) return;

    const message = `
Hello, I would like to book a *${style.name}* appointment.

Service Type: ${serviceType === "shop" ? "In-Shop" : "Home Service"}
Name: ${clientName}
Date: ${formatLocalDate(selectedDate!)}
Time: ${selectedTime}
Price: ₦${price!.toLocaleString()}
`;

    window.open(
      `https://wa.me/2349065644691?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    router.push("/appointmentbooked");
  };

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* FORM */}
        <div className="lg:col-span-2 bg-[#121212] p-10 rounded-2xl border border-yellow-700/30">
          <h1 className="text-4xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Confirm Booking — {style.name}
          </h1>

          {/* SERVICE TYPE */}
          <div className="mb-8">
            <label className="text-sm text-gray-300 mb-3 block">
              Service Type
            </label>

            <div className="grid grid-cols-2 gap-4">
              {(["shop", "home"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setServiceType(type)}
                  className={`p-4 rounded-xl border transition-all text-left ${
                    serviceType === type
                      ? "border-yellow-500 bg-yellow-500/10"
                      : "border-gray-700 hover:border-yellow-600"
                  }`}
                >
                  <div className="text-sm text-gray-400">
                    {type === "shop" ? "In-Shop Service" : "Home Service"}
                  </div>
                  <div className="text-lg font-bold">
                    ₦{style.prices[type].toLocaleString()}
                  </div>
                </button>
              ))}
            </div>

            {errors.serviceType && (
              <p className="text-red-500 text-sm mt-2">
                Please select a service type
              </p>
            )}
          </div>

          {/* NAME */}
          <input
            placeholder="Full name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className={`w-full p-4 mb-6 rounded-xl bg-[#0f0f0f] border ${
              errors.name ? "border-red-500" : "border-gray-700"
            } focus:ring-yellow-500 focus:ring-2`}
          />

          {/* DATE */}
          <div className="flex gap-3 overflow-x-auto pb-3 mb-6">
            {dates.map((d) => (
              <button
                key={d.iso}
                onClick={() => setSelectedDate(d.iso)}
                className={`min-w-[110px] flex-shrink-0 p-3 rounded-xl border ${
                  selectedDate === d.iso
                    ? "border-yellow-500 bg-yellow-500/10"
                    : "border-gray-700"
                }`}
              >
                {d.display}
              </button>
            ))}
          </div>

          {/* TIME */}
          <select
            className={`w-full p-4 mb-8 rounded-xl bg-[#0f0f0f] border ${
              errors.time ? "border-red-500" : "border-gray-700"
            }`}
            value={selectedTime || ""}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">Select time</option>
            {timeSlots.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>

          <Button
            onClick={handleConfirm}
            className="bg-yellow-600 hover:bg-yellow-500 text-black px-6 py-4 rounded-xl w-full font-semibold"
          >
            Confirm Booking
          </Button>
        </div>

        {/* SUMMARY */}
        <aside className="bg-[#111] p-6 rounded-2xl border border-yellow-700/20">
          <Image
            src={style.image}
            alt={style.name}
            width={300}
            height={200}
            className="rounded-lg object-cover mb-4 border border-yellow-700/30"
          />

          <h3 className="text-xl font-bold">{style.name}</h3>

          <p className="text-yellow-400 text-lg font-semibold">
            {price ? `₦${price.toLocaleString()}` : "Select a service type"}
          </p>

          <p className="text-sm text-gray-400 capitalize">
            {serviceType ? `${serviceType} service` : "No service selected"}
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Duration: {style.duration}
          </p>
        </aside>
      </div>
    </section>
  );
}
