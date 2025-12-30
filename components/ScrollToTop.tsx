"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0], // gentle bounce
          }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{
            opacity: { duration: 0.25 },
            scale: { duration: 0.25 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed bottom-6 right-6 z-50
            flex items-center justify-center
            w-12 h-12 rounded-full
            bg-gradient-to-br from-yellow-600 to-yellow-500
            text-black shadow-xl
            hover:from-yellow-500 hover:to-yellow-400
            transition-colors
          "
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
