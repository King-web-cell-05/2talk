/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Scissors,
  CalendarDays,
  Video,
  Laugh,
  ShieldCheck,
  Star,
} from "lucide-react";
import Button from "./ui/button";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-[#0D0D0D] text-white py-28 px-6 md:px-20 overflow-hidden"
    >
      {/* HEADER BLOCK */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-500">
              HOUSE OF 2TALK
            </span>{" "}
            ENTERTAINMENT
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            House of 2Talk Entertainment is a creative lifestyle brand built on
            skill, personality, and unforgettable experiences.
            <br />
            <br />
            From premium grooming to high-energy events, engaging content, and
            comedy entertainment — we deliver quality, consistency, and impact
            across every service we offer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#111] border border-[#2a2a2a] rounded-3xl p-10 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-yellow-600 mb-4">
            Who We Are
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Founded by AGBA GODWIN (a.k.a 2TALK), House of 2Talk Entertainment was
            created to bring professionalism, creativity, and structure into
            entertainment-driven services.
            <br />
            <br />
            We combine discipline with creativity to serve individuals, brands,
            and events with excellence.
          </p>
        </motion.div>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-[#1f1f1f] my-24" />

      {/* WHAT WE DO */}
      <div className="max-w-6xl mx-auto mb-28">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-yellow-600 mb-14 text-center"
        >
          What We Do
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              icon: <Scissors className="w-8 h-8 text-yellow-600" />,
              title: "Professional Barbing",
              text: "Clean cuts, modern styles, and premium grooming delivered with precision and consistency.",
            },
            {
              icon: <CalendarDays className="w-8 h-8 text-yellow-600" />,
              title: "Event Planning & Hosting",
              text: "Weddings, parties, and corporate events planned and hosted with energy and structure.",
            },
            {
              icon: <Video className="w-8 h-8 text-yellow-600" />,
              title: "Content Creation",
              text: "High-quality video content, social media creatives, and brand storytelling.",
            },
            {
              icon: <Laugh className="w-8 h-8 text-yellow-600" />,
              title: "Comedy & Entertainment",
              text: "Live comedy, digital skits, and engaging performances that connect with audiences.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-8 shadow-lg"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-[#1f1f1f] my-24" />

      {/* WHY CHOOSE US */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-[#111] border border-[#2a2a2a] rounded-2xl p-12 shadow-xl mb-24"
      >
        <h3 className="text-4xl font-bold text-yellow-600 mb-8 text-center">
          Why Choose House of 2Talk
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <Star className="w-7 h-7 text-yellow-600 mx-auto mb-3" />,
              title: "Quality First",
              text: "We prioritize excellence in every service we deliver.",
            },
            {
              icon: <ShieldCheck className="w-7 h-7 text-yellow-600 mx-auto mb-3" />,
              title: "Professional Approach",
              text: "Structure, reliability, and attention to detail.",
            },
            {
              icon: <Laugh className="w-7 h-7 text-yellow-600 mx-auto mb-3" />,
              title: "Creative Energy",
              text: "Entertainment driven by passion and originality.",
            },
          ].map((item, i) => (
            <div key={i}>
              {item.icon}
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <div className="text-center">
        <Link href="/contact">
          <Button className="bg-yellow-600 hover:bg-yellow-500 text-black text-lg font-semibold px-10 py-4 rounded-xl">
            Work With Us
          </Button>
        </Link>
      </div>
    </section>
  );
}
