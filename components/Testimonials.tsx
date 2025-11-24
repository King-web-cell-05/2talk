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

  // Auto-slide for all devices
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#0A0F12] text-white py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F12] via-[#111820]/50 to-[#0A0F12] pointer-events-none"></div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-[#00F5D4] mb-14 text-center drop-shadow-[0_0_20px_rgba(0,245,212,0.4)]">
        Hear From Our Clients
      </h2>

      <div className="relative flex justify-center items-stretch">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className={`
              bg-[#111820] rounded-xl shadow-lg border-2 border-[#00F5D4]/30
              flex flex-col items-center text-center cursor-pointer transition-all duration-300
              ${isMobile 
                ? "p-9 max-w-xs mx-auto"  // Mobile size
                : "p-25 max-w-4xl text-2xl hover:scale-105 hover:shadow-[0_0_60px_rgba(0,245,212,0.5)]" // Desktop big
              }
            `}
          >
            <h3 className={`font-bold text-[#00F5D4] mb-4 ${isMobile ? "text-xl" : "text-4xl"}`}>
              {testimonials[current].name}
            </h3>
            <p className={`${isMobile ? "text-sm mb-4" : "text-lg mb-6 text-[#9BA8B4]"}`}>{testimonials[current].role}</p>
            <p className={`${isMobile ? "text-base italic" : "text-xl italic text-gray-300"}`}>
              "{testimonials[current].text}"
            </p>
          </motion.div>
        </AnimatePresence>
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