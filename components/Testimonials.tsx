/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { name: "Mr Ola", role: "Entrepreneur", text: "Absolutely love the precision and attention to detail! Highly recommended." },
  { name: "Mr Michael", role: "Designer", text: "The service is top-notch. Professional, clean, and stylish!" },
  { name: "Mr Kingsley", role: "Developer", text: "I always feel confident after a visit. Exceptional work and vibe!" },
  { name: "Mr Tunde", role: "Marketing Lead", text: "The team exceeded all expectations. A true professional experience." },
 
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="w-full bg-[#0A0F12] text-white py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F12] via-[#111820]/50 to-[#0A0F12] pointer-events-none"></div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-[#00F5D4] mb-14 text-center drop-shadow-[0_0_20px_rgba(0,245,212,0.4)]">
        Hear From Our Clients
      </h2>

      <div className="relative flex gap-8 justify-center items-stretch">
        {isMobile ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="bg-[#111820] rounded-xl p-8 shadow-lg border-2 border-[#00F5D4]/30 flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-bold text-[#00F5D4] mb-2">{testimonials[current].name}</h3>
              <p className="text-[#9BA8B4] text-sm mb-4">{testimonials[current].role}</p>
              <p className="text-gray-300 italic text-base">"{testimonials[current].text}"</p>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="grid grid-cols-4 gap-8 w-full">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,245,212,0.3)" }}
                className="bg-[#111820] rounded-xl p-8 shadow-lg border-2 border-[#00F5D4]/30 flex flex-col items-center text-center cursor-pointer transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#00F5D4] mb-2">{testimonial.name}</h3>
                <p className="text-[#9BA8B4] text-sm mb-4">{testimonial.role}</p>
                <p className="text-gray-300 italic text-base">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center gap-4 mt-12">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-4 w-4 rounded-full cursor-pointer transition-all duration-300 border-2 border-[#00F5D4] ${
              idx === current ? "bg-[#00F5D4]" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
