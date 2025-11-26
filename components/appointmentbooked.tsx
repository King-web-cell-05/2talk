/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/button";

export default function AppointmentBookedPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-[#111] flex flex-col items-center justify-center text-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 flex flex-col items-center"
      >
        {" "}
        <CheckCircle className="text-green-500 w-24 h-24 md:w-32 md:h-32" />{" "}
        <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-600 tracking-wide">
          Appointment Booked!{" "}
        </h1>{" "}
        <p className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto">
          Thank you for booking with us. Your appointment has been successfully
          confirmed. You will receive a confirmation message shortly.{" "}
        </p>
        <Button
          onClick={() => router.push("/")}
          className="mt-6 bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-lg md:text-xl px-10 py-4 rounded-2xl shadow-lg hover:shadow-yellow-500/40 transition-all duration-300"
        >
          Back to Home{" "}
        </Button>
      </motion.div>{" "}
    </div>
  );
}
