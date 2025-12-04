/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Music, Star, Users, Award } from "lucide-react";
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-500  drop-shadow-lg">HOUSE OF 2TALK</span>{" "}
            ENTERTAINMENT
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            A dynamic entertainment company that brings together the best of
            <span className="text-yellow-600 font-semibold"> barbering </span>
            and
            <span className="text-yellow-600 font-semibold">
              {" "}
              entertainment. <br />
            </span>
            We're passionate about delivering top-notch services, creating
            unforgettable experiences, and pushing the boundaries of
            <span className="text-yellow-600 font-semibold"> creativity</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#111] border border-[#2a2a2a] rounded-3xl p-10 shadow-xl backdrop-blur"
        >
          <h3 className="text-3xl font-bold text-yellow-600 mb-3">Our Story</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Founded by AGBA GODWIN (a.k.a 2TALK), a seasoned MC and barbering
            enthusiast, HOUSE OF 2TALK ENTERTAINMENT was born to merge two
            worlds that inspire us. With a finger on the pulse of trends and a
            commitment to excellence, we're redefining the entertainment
            landscape.
          </p>
        </motion.div>
      </div>

      {/* SECTION DIVIDER */}
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
              icon: <Music className="w-8 h-8 text-yellow-600" />,
              title: "Events & Activations",
              text: "From concerts to comedy shows, we produce unforgettable live experiences.",
            },
            {
              icon: <Star className="w-8 h-8 text-yellow-600" />,
              title: "Media & Production",
              text: "Music, comedy, football content, podcasting, and high-end creative production.",
            },
            {
              icon: <Award className="w-8 h-8 text-yellow-600" />,
              title: "Barbering Services",
              text: "Professional grooming and elite styling from skilled barbers.",
            },
            {
              icon: <Users className="w-8 h-8 text-yellow-600" />,
              title: "Talent Management",
              text: "We manage talented performers and help them reach the next level.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative group bg-[#111] border border-[#2a2a2a] rounded-2xl p-8 shadow-lg hover:border-yellow-600 transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.text}</p>

              {/* Neon hover bar */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-yellow-600 transition-all"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION DIVIDER */}
      <div className="w-full h-px bg-[#1f1f1f] my-24" />

      {/* TEAM SECTION */}
      <div className="max-w-5xl mx-auto mb-28">
        <h3 className="text-4xl font-bold text-yellow-600 mb-10 text-center">
          Meet the Team
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            "AGBA GODWIN A.K.A 2TALK – Founder & MC",
            "DADA KINGLEY",
            "MBATHA ESTHER",
            "MUSTAPHA TUNDE",
            "MICHAEL",
            "OLA",
          ].map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#111] border border-[#2a2a2a] rounded-xl py-6 px-4 hover:border-yellow-600 transition-all"
            >
              <p className="text-gray-300">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION DIVIDER */}
      <div className="w-full h-px bg-[#1f1f1f] my-24" />

      {/* MISSION & VISION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 mb-28">
        {[
          {
            title: "Mission Statement",
            text: "To entertain, inspire, and connect people through music, barbering, and creativity, delivering exceptional experiences and pushing boundaries.",
          },
          {
            title: "Vision Statement",
            text: "To be the leading entertainment company in Nigeria, blending barbering and entertainment, respected for excellence, creativity, and community impact.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-10 shadow-lg"
          >
            <h4 className="text-2xl font-bold text-yellow-600 mb-4">
              {item.title}
            </h4>
            <p className="text-gray-300 text-lg">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-[#111] border border-[#2a2a2a] rounded-2xl p-12 shadow-xl mb-20"
      >
        <h3 className="text-4xl font-bold text-yellow-600 mb-6">
          Why Choose Us
        </h3>

        <ul className="text-gray-300 space-y-3 text-lg">
          <li>
            <strong>Shared Values:</strong> Innovation, ambition, and
            consistency drive our work.
          </li>
          <li>
            <strong>Unique Opportunities:</strong> Always open to fresh ideas
            and new collaborations.
          </li>
          <li>
            <strong>Mutual Growth:</strong> We elevate partners while scaling
            our vision.
          </li>
          <li>
            <strong>Fun & Creativity:</strong> Entertainment built on passion
            and limitless imagination.
          </li>
        </ul>
      </motion.div>

      {/* CTA BUTTON */}
      <div className="text-center">
        <Link href="/book">
          <Button className="bg-yellow-600 hover:bg-yellow-500 text-black text-lg font-semibold px-10 py-4 rounded-xl">
            Book Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
