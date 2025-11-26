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
      className="w-full bg-[#111] text-white min-h-screen py-24 px-6 md:px-20"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-20 text-center drop-shadow-lg"
      >
        About <span className="text-yellow-700">Us</span>
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-gray-300 max-w-4xl text-lg md:text-xl mx-auto leading-relaxed text-center mb-20"
      >
        HOUSE OF 2TALK ENTERTAINMENT is a dynamic entertainment company that
        brings together the best of barbering and entertainment. We're
        passionate about delivering top-notch services, creating unforgettable
        experiences, and pushing the boundaries of creativity.
      </motion.p>

      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-3xl p-10 shadow-xl hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] transition-all mb-20"
      >
        <h3 className="text-3xl font-bold text-yellow-700 mb-4">Our Story</h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
          Founded by AGBA GODWIN (a.k.a 2TALK), a seasoned MC and barbering
          enthusiast, HOUSE OF 2TALK ENTERTAINMENT was born to merge two
          worlds that inspire us. With a finger on the pulse of trends and a
          commitment to excellence, we're redefining the entertainment
          landscape.
        </p>
      </motion.div>

      {/* What We Do */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6 mb-20"
      >
        <h3 className="text-3xl font-bold text-yellow-700">What We Do</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card */}
          <div className="flex gap-4 items-start bg-[#1A1A1A] border border-[#2a2a2a] rounded-3xl p-8 shadow-xl hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] transition-all">
            <Music className="text-yellow-700 w-12 h-12" />
            <p className="text-gray-300 text-lg">
              Events & Activations: From concerts to comedy shows, we deliver
              unforgettable events.
            </p>
          </div>

          <div className="flex gap-4 items-start bg-[#1A1A1A] border border-[#2a2a2a] rounded-3xl p-8 shadow-xl hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] transition-all">
            <Star className="text-yellow-700 w-12 h-12" />
            <p className="text-gray-300 text-lg">
              Music, Comedy, Football & Content Production: We create and
              produce podcasts, videos, and more.
            </p>
          </div>

          <div className="flex gap-4 items-start bg-[#1A1A1A] border border-[#2a2a2a] rounded-3xl p-8 shadow-xl hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] transition-all">
            <Award className="text-yellow-700 w-12 h-12" />
            <p className="text-gray-300 text-lg">
              Barbering Services: Our skilled barbers deliver top-notch cuts
              and styling.
            </p>
          </div>

          <div className="flex gap-4 items-start bg-[#1A1A1A] border border-[#2a2a2a] rounded-3xl p-8 shadow-xl hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] transition-all">
            <Users className="text-yellow-700 w-12 h-12" />
            <p className="text-gray-300 text-lg">
              Talent Management: We represent a roster of talented artists and
              performers.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Meet the Team */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-3xl p-10 shadow-xl hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] transition-all mb-20"
      >
        <h3 className="text-3xl font-bold text-yellow-700 mb-6">Meet the Team</h3>
        <ul className="text-gray-300 list-disc list-inside space-y-2 text-lg">
          <li>AGBA GODWIN A.K.A. 2TALK – Founder & MC</li>
          <li>DADA KINGLEY</li>
          <li>MBATHA ESTHER</li>
          <li>MUSTAPHA TUNDE</li>
          <li>MICHAEL</li>
          <li>OLA</li>
        </ul>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-3xl p-10 shadow-xl hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] transition-all"
        >
          <h4 className="text-2xl font-bold text-yellow-700 mb-4">
            Mission Statement
          </h4>
          <p className="text-gray-300 text-lg">
            To entertain, inspire, and connect people through music,
            barbering, and creativity, delivering exceptional experiences
            and pushing boundaries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-3xl p-10 shadow-xl hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] transition-all"
        >
          <h4 className="text-2xl font-bold text-yellow-700 mb-4">
            Vision Statement
          </h4>
          <p className="text-gray-300 text-lg">
            To be the leading entertainment company in Nigeria, blending
            barbering and entertainment, respected for excellence,
            creativity, and community impact.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-3xl p-10 shadow-xl hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] transition-all mb-20"
      >
        <h3 className="text-3xl font-bold text-yellow-700 mb-6">Why Choose Us</h3>
        <ul className="text-gray-300 list-disc list-inside space-y-2 text-lg">
          <li>
            <strong>Shared Values:</strong> We partner with individuals and
            organizations that prioritize innovation, hard work, and
            dedication.
          </li>
          <li>
            <strong>Unique Opportunities:</strong> Always seeking fresh ideas,
            new talent, and exciting projects aligned with our mission.
          </li>
          <li>
            <strong>Mutual Growth:</strong> Collaboration helps both our
            partners and us grow and succeed.
          </li>
          <li>
            <strong>Fun & Creativity:</strong> We love pushing boundaries,
            exploring new frontiers, and having a good time.
          </li>
        </ul>
      </motion.div>

      {/* Button */}
     <Link href="/book">
       <Button className="bg-yellow-700 hover:bg-yellow-600 text-black font-semibold transition-all duration-300 shadow-md hover:shadow-[#D4A65A]/30 px-8 py-3 rounded-md">
         Book Now
       </Button>
     </Link>
    </section>
  );
}
