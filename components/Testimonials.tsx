/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mr Ola",
    role: "Entrepreneur",
    text: "Absolutely love the precision and attention to detail! Highly recommended.",
  },
  {
    name: "Mr Michael",
    role: "Entertainer",
    text: "The service is top-notch. Professional, clean, and stylish!",
  },
  {
    name: "Mr Kingsley",
    role: "Developer",
    text: "I always feel confident after a visit. Exceptional work and vibe!",
  },
  {
    name: "Mr Tunde",
    role: "Content Creator",
    text: "The team exceeded all expectations. A true professional experience.",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#111111] text-white py-24 px-6 md:px-20 relative">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center drop-shadow-lg">
        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-500  drop-shadow-lg">Clients Say</span>
      </h2>

      {/* Testimonial Card */}
      <div className="relative flex justify-center items-stretch">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A1A1A] w-full max-w-4xl rounded-3xl p-10 shadow-xl 
            border border-[#2a2a2a] text-center"
          >
            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={22} className="text-yellow-600 fill-yellow-600" />
              ))}
            </div>

            {/* Content */}
            <p className="text-gray-300 text-xl italic leading-relaxed max-w-3xl mx-auto">
              "{testimonials[current].text}"
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white">{testimonials[current].name}</h3>
              <p className="text-gray-500 text-lg mt-1">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-4 mt-14">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 border border-yellow-600
            ${idx === current ? "bg-yellow-600" : "bg-transparent"}`}
          />
        ))}
      </div>
    </section>
  );
}
