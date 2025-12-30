"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full min-h-screen bg-[#0D0D0D] text-white py-24 px-6 md:px-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-center text-4xl md:text-6xl font-extrabold tracking-wider
          text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500
        "
      >
        Contact Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto"
      >
        We're here to help you look your best. Reach out to us anytime.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
        {/* Left Side: Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-10"
        >
          {/* Card */}
          <div className="bg-[#111]/70 border border-[#222] rounded-3xl p-10 shadow-xl backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 tracking-wide">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className=" gap-4">
                <Phone className="text-yellow-500 w-7 h-7" />
                <div>
                  <p className="font-semibold text-gray-200">Phone:</p>
                  <p className="text-gray-400 text-lg">+234 808 286 8332</p>
                </div>
              </div>

              {/* Email */}
              <div className=" gap-4">
                <Mail className="text-yellow-500 w-7 h-7 mt-5" />
                <div>
                  <p className="font-semibold text-gray-200">Email:</p>
                  <p className="text-gray-400 text-lg">
                    {" "}
                    houseof2talkentertainment.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className=" gap-4">
                <MapPin className="text-yellow-500 w-7 h-7" />
                <div>
                  <p className="font-semibold text-gray-200">Location:</p>
                  <p className="text-gray-400 text-lg">
                    No.2 Idera Street, Oworoshoki Lagos, Nigeria
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className=" gap-4">
                <Clock className="text-yellow-500 w-7 h-7" />
                <div>
                  <p className="font-semibold text-gray-200">Opening Hours:</p>
                  <p className="text-gray-400 text-lg">Open 7 Days a Week</p>
                  <p className="text-gray-400 text-lg">9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="
            bg-[#111]/70 border border-[#222] rounded-3xl 
            p-10 shadow-xl backdrop-blur-md space-y-8
          "
        >
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 tracking-wide">
            Send Us a Message
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-2 text-lg">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-yellow-500 outline-none transition"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 text-lg">Email</label>
              <input
                type="email"
                className="w-full px-5 py-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-yellow-500 outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 text-lg">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-5 py-3 rounded-xl bg-[#1a1a1a] border border-[#333] text-white focus:border-yellow-500 outline-none transition resize-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                w-full mt-4 py-4 rounded-xl font-semibold text-black
                bg-gradient-to-r from-yellow-700 to-yellow-600
                hover:from-yellow-600 hover:to-yellow-500
                transition-all 
              "
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
