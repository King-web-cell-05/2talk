/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mr Ola",
    role: "Entrepreneur",
    text: "Absolutely love the precision and attention to detail. Clean cuts, great atmosphere, and true professionalism.",
  },
  {
    name: "Mr Michael",
    role: "Entertainer",
    text: "Top-tier service every single time. The experience is premium from start to finish.",
  },
  {
    name: "Mr Kingsley",
    role: "Developer",
    text: "Consistent quality, sharp fades, and a confident finish. I always leave impressed.",
  },
  {
    name: "Mr Tunde",
    role: "Content Creator",
    text: "Professional, stylish, and well-organized. Easily one of the best grooming experiences around.",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#0D0D0D] text-white py-28 px-6 md:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          text-center text-4xl md:text-6xl font-extrabold tracking-wider
          text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600
          mb-20
        "
      >
        Client Testimonials
      </motion.h2>

      {/* Testimonial Card */}
      <div className="relative flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              bg-[#111]/80 border border-[#222]
              rounded-3xl p-12 md:p-16
              shadow-2xl backdrop-blur-md
              max-w-4xl w-full text-center
            "
          >
            {/* Stars */}
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-600 fill-yellow-600"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed italic max-w-3xl mx-auto">
              “{testimonials[current].text}”
            </p>

            {/* Author */}
            <div className="mt-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {testimonials[current].name}
              </h3>
              <p className="text-gray-500 text-lg mt-1">
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-16">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`
              h-3 w-3 rounded-full transition-all duration-300
              border border-yellow-600
              ${idx === current ? "bg-yellow-600 scale-125" : "bg-transparent"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
