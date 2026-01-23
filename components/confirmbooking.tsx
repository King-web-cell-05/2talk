/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// ------------------------------------
// DATA
// ------------------------------------
const hairstyles = [
  {
    id: 1,
    name: "Low Cut",
    prices: { shop: 3000, home: "Negotiable" },
    image: "/placeholder1.jpg",
    duration: "30m",
  },
  {
    id: 2,
    name: "Burst Fade",
    prices: { shop: 3000, home: "Negotiable" },
    image: "/burst-fade.jpg",
    duration: "30m",
  },
  {
    id: 3,
    name: "Skin Punk",
    prices: { shop: 3000, home: "Negotiable" },
    image: "/skin-punk.jpg",
    duration: "30m",
  },
  {
    id: 4,
    name: "Taper Fade",
    prices: { shop: 3000, home: "Negotiable" },
    image: "/taper-fade.jpg",
    duration: "35m",
  },
  {
    id: 5,
    name: "Afro",
    prices: { shop: 3000, home: "Negotiable" },
    image: "/Afro.jpg",
    duration: "30m",
  },
  {
    id: 6,
    name: "Cut & Dye",
    prices: { shop: 3000, home: "Negotiable" },
    image: "/cut-and-dye.jpg",
    duration: "60m",
  },
  {
    id: 7,
    name: "Side Cut",
    prices: { shop: 3000, home: "Negotiable" },
    image: "/side-cut.jpg",
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

  const [serviceType, setServiceType] = useState<"shop" | "home" | null>(null);
  const price = serviceType ? style.prices[serviceType] : null;

  const [clientName, setClientName] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [dates, setDates] = useState<{ iso: string; display: string }[]>([]);
  const [errors, setErrors] = useState<any>({});
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const list = Array.from({ length: 14 }).map((_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);

      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");

      return {
        iso: `${yyyy}-${mm}-${dd}`,
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
    setShowErrorMessage(true);

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
Price: ${
      serviceType === "shop" ? `₦${(price as number).toLocaleString()}` : price
    }
`;

    window.open(
      `https://wa.me/2348082868332?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    router.push("/appointmentbooked");
  };

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition mb-6 hover:cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back to booking
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                      {type === "shop"
                        ? `₦${(style.prices[type] as number).toLocaleString()}`
                        : style.prices[type]}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* NAME */}
            <input
              placeholder="Full name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full p-4 mb-6 rounded-xl bg-[#0f0f0f] border border-gray-700"
            />

            {/* DATE */}
            <div className="flex gap-3 overflow-x-auto pb-3 mb-6">
              {dates.map((d) => (
                <button
                  key={d.iso}
                  onClick={() => setSelectedDate(d.iso)}
                  className={`min-w-[110px] p-3 rounded-xl border ${
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
              className="w-full p-4 mb-6 rounded-xl bg-[#0f0f0f] border border-gray-700"
              value={selectedTime || ""}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Select time</option>
              {timeSlots.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            {/* ERROR MESSAGE */}
            {showErrorMessage && Object.keys(errors).length > 0 && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500 text-red-400 text-sm">
                Please complete all required fields before confirming your
                booking.
              </div>
            )}

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
              width={320}
              height={220}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">{style.name}</h3>

            {/* SERVICE TYPE NAME */}
            <p className="text-gray-400 text-sm mb-1">
              {serviceType === "shop"
                ? "In-Shop Service"
                : serviceType === "home"
                ? "Home Service"
                : "Select service type"}
            </p>

            {/* SERVICE PRICE */}
            <p className="text-yellow-400 font-semibold mb-2">
              {serviceType === "shop"
                ? `₦${(price as number)?.toLocaleString()}`
                : serviceType === "home"
                ? price
                : ""}
            </p>

            <p className="text-sm text-gray-400">Duration: {style.duration}</p>
            <hr className="my-4 border-gray-700" />
            <p className="text-sm">Name: {clientName || "Not provided"}</p>
            <p className="text-sm">
              Date:{" "}
              {selectedDate ? formatLocalDate(selectedDate) : "Not selected"}
            </p>
            <p className="text-sm">Time: {selectedTime || "Not selected"}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
