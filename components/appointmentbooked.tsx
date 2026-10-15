
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  House,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/button";

export default function AppointmentBookedPage() {
  const router = useRouter();

  return (
    <main className="relative flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#090909] px-4 py-3 text-white sm:px-6">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/[0.08] blur-[100px] sm:h-96 sm:w-96" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 16, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative flex max-h-full w-full max-w-2xl flex-col"
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121212]/95 shadow-2xl shadow-black/40 sm:rounded-3xl">
          {/* Gold accent */}
          <div className="h-1 w-full bg-gradient-to-r from-yellow-800 via-yellow-400 to-yellow-800" />

          <div className="px-5 py-5 text-center sm:px-8 sm:py-6 md:px-10 md:py-7">
            {/* Success icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.35,
                type: "spring",
                stiffness: 180,
              }}
              className="relative mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 sm:mb-4 sm:h-16 sm:w-16"
            >
              <div className="absolute inset-1.5 rounded-full border border-green-400/10" />
              <CheckCircle2
                className="h-8 w-8 text-green-400 sm:h-9 sm:w-9"
                strokeWidth={1.7}
              />
              <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-yellow-400" />
            </motion.div>

            {/* Confirmation label */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/[0.07] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-yellow-400 sm:text-xs">
                Booking Successful
              </span>
            </div>

            <h1 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl">
              You're <span className="text-yellow-500">All Set!</span>
            </h1>

            <p className="mx-auto mt-2 max-w-lg text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
              Thank you for choosing House of 2Talk Entertainment. Your
              appointment request has been submitted successfully. We look
              forward to serving you.
            </p>

            {/* Confirmation details */}
            <div className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 text-left sm:mt-5 sm:rounded-2xl sm:p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 sm:h-10 sm:w-10">
                  <CalendarCheck className="h-4 w-4 text-yellow-400 sm:h-5 sm:w-5" />
                </div>

                <div className="min-w-0">
                  <h2 className="text-sm font-semibold text-white">
                    What's next?
                  </h2>
                  <p className="mt-0.5 text-xs leading-5 text-gray-400 sm:text-sm">
                    Check WhatsApp for booking updates or confirmation from
                    our team.
                  </p>
                </div>
              </div>

              <div className="my-3 border-t border-white/[0.08] sm:my-4" />

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 sm:h-10 sm:w-10">
                  <ShieldCheck className="h-4 w-4 text-yellow-400 sm:h-5 sm:w-5" />
                </div>

                <div className="min-w-0">
                  <h2 className="text-sm font-semibold text-white">
                    Need assistance?
                  </h2>
                  <p className="mt-0.5 text-xs leading-5 text-gray-400 sm:text-sm">
                    Contact our team if you have any questions about your
                    appointment.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-col justify-center gap-2 sm:mt-5 sm:flex-row sm:gap-3">
              <Button
                onClick={() => router.push("/")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 px-5 py-3 text-sm font-bold text-black shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:bg-yellow-400 hover:shadow-yellow-500/20 sm:w-auto sm:px-6"
              >
                <House className="h-4 w-4" />
                Back to Home
              </Button>

              <Button
                onClick={() => router.push("/")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-yellow-500/30 hover:bg-white/[0.08] sm:w-auto sm:px-6"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <p className="mt-3 text-[9px] tracking-[0.18em] text-gray-600 sm:mt-4 sm:text-[10px]">
              HOUSE OF 2TALK ENTERTAINMENT
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
