/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import {
  Scissors,
  CalendarDays,
  Video,
  Laugh,
} from "lucide-react";

type ServiceType = "barbing" | "events" | "content" | "comedy";

const serviceTabs = [
  { id: "barbing", label: "Barbing", icon: Scissors },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "content", label: "Content", icon: Video },
  { id: "comedy", label: "Comedy", icon: Laugh },
] as const;

const barbingServices = [
  { id: 1, name: "Low Cut", image: "/low-cut.jpg", duration: "30 mins" },
  { id: 2, name: "Burst Fade", image: "/burst-fade.jpg", duration: "30 mins" },
  { id: 3, name: "Skin Punk", image: "/skin-punk.jpg", duration: "30 mins" },
  { id: 4, name: "Taper Fade", image: "/taper-fade.jpg", duration: "35 mins" },
  { id: 5, name: "Afro Styling", image: "/Afro.jpg", duration: "30 mins" },
  { id: 6, name: "Cut & Dye", image: "/cut-and-dye.jpg", duration: "60 mins" },
  { id: 7, name: "Side Cut", image: "/side-cut.jpg", duration: "45 mins" },
];

const eventServices = [
  { title: "Event Planning", desc: "End-to-end planning for weddings, parties & corporate events." },
  { title: "MC / Hosting", desc: "High-energy hosting that keeps your audience locked in." },
  { title: "Stage Management", desc: "Smooth coordination and professional event flow." },
];

const contentServices = [
  { title: "Video Content", desc: "Cinematic video creation for brands & individuals." },
  { title: "Social Media Content", desc: "Short-form content designed to perform." },
  { title: "Brand Storytelling", desc: "Creative narratives that elevate your brand." },
];

const comedyServices = [
  { title: "Stand-Up Comedy", desc: "Live comedy performances for events & shows." },
  { title: "Comedy Skits", desc: "Relatable skits crafted for digital platforms." },
  { title: "Comedy Hosting", desc: "Fun, engaging hosting with natural crowd control." },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<ServiceType>("barbing");
  const router = useRouter();

  return (
    <section className="w-full min-h-screen bg-[#0D0D0D] text-white py-28 px-6 md:px-20">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-center text-4xl md:text-6xl font-extrabold tracking-widest
          text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600
          mb-24
        "
      >
        Our Services
      </motion.h1>

      {/* =========================
          ADVANCED SERVICE TABS
         ========================= */}
      <div className="flex flex-wrap justify-center gap-8 mb-24 relative">
        {serviceTabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeService === id;

          return (
            <motion.button
              key={id}
              onClick={() => setActiveService(id)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative overflow-hidden
                flex items-center gap-5 px-10 py-6 rounded-2xl
                border backdrop-blur-xl transition-all duration-300
                ${
                  isActive
                    ? "border-yellow-500/50 bg-gradient-to-br from-yellow-500/20 via-yellow-500/10 to-transparent "
                    : "border-[#222] bg-[#121212]/80 hover:border-yellow-600/40"
                }
              `}
            >
          

              {/* Icon */}
              <motion.div
                animate={{
                  scale: isActive ? 1.15 : 1,
                  rotate: isActive ? 0 : -8,
                }}
                transition={{ duration: 0.3 }}
                className={`
                  relative z-10 p-4 rounded-xl
                  ${
                    isActive
                      ? "bg-yellow-500 text-black shadow-lg"
                      : "bg-[#1a1a1a] text-yellow-500"
                  }
                `}
              >
                <Icon className="w-6 h-6" />
              </motion.div>

              {/* Label */}
              <div className="relative z-10 text-left">
                <p
                  className={`text-lg font-semibold tracking-wide ${
                    isActive ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  {label}
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Service
                </p>
              </div>

              {/* Bottom indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-1/2 h-[3px] w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* =========================
          SERVICE CONTENT
         ========================= */}
      <AnimatePresence mode="wait">
        {activeService === "barbing" && (
          <motion.div
            key="barbing"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16"
          >
            {barbingServices.map((item) => (
              <div
                key={item.id}
                className="bg-[#111]/80 border border-[#222] rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-10 space-y-5">
                  <h3 className="text-2xl font-bold text-yellow-500">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-lg">
                    Duration: {item.duration}
                  </p>

                  <Button
                    className="w-full py-4 bg-yellow-600 hover:bg-yellow-500 text-black text-lg"
                    onClick={() =>
                      router.push(`/confirmbooking?styleId=${item.id}`)
                    }
                  >
                    Book a Session
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {[eventServices, contentServices, comedyServices].map(
          (list, index) =>
            activeService === ["events", "content", "comedy"][index] && (
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-16"
              >
                {list.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#111]/90 border border-[#222] rounded-[2.5rem] p-14 text-center shadow-2xl"
                  >
                    <h3 className="text-3xl font-bold text-yellow-500 mb-6">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                      {item.desc}
                    </p>

                    <Button
                      className="px-12 py-4 bg-yellow-600 hover:bg-yellow-500 text-black text-lg"
                      onClick={() => router.push("/contact")}
                    >
                      Contact Us
                    </Button>
                  </div>
                ))}
              </motion.div>
            )
        )}
      </AnimatePresence>
    </section>
  );
}
