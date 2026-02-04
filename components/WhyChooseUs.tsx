"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  CalendarCheck,
  Video,
  Laugh,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Scissors,
    title: "Premium Grooming",
    desc: "Precision haircuts, modern styles, and professional grooming tailored to your look and lifestyle.",
  },
  {
    icon: CalendarCheck,
    title: "Event Planning & Hosting",
    desc: "From private celebrations to corporate events, we plan, manage, and host unforgettable experiences.",
  },
  {
    icon: Video,
    title: "Content Creation",
    desc: "High-quality video and social media content designed to elevate brands, creators, and businesses.",
  },
  {
    icon: Laugh,
    title: "Comedy & Entertainment",
    desc: "Stand-up comedy, skits, and live entertainment that connect with audiences and leave lasting impressions.",
  },
  {
    icon: ShieldCheck,
    title: "One Trusted Brand",
    desc: "Multiple creative services delivered with consistency, professionalism, and attention to detail.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white py-28 px-6 md:px-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h2
          className="
                text-center text-4xl md:text-6xl font-extrabold tracking-wider
          text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600
          
          "
        >
          Why Choose Us
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mt-10 leading-relaxed">
          House of 2Talk Entertainment is more than a barbing brand.  
          We are a creative hub delivering grooming, events, content, and comedy
          with the same level of excellence and professionalism.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {reasons.map(({ icon: Icon, title, desc }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="
              bg-[#111]/80 border border-[#222]
              rounded-3xl p-10 md:p-12
              shadow-2xl backdrop-blur-md
            "
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1a1a1a] mb-8">
              <Icon className="w-8 h-8 text-yellow-600" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              {title}
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
