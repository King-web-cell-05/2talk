/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Music, Star, Users, Award } from "lucide-react";
import Button from "./ui/button";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-[#0B0C10] text-white py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Subtle technical grid background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#00FFD120_1px,transparent_1px),linear-gradient(#00FFD120_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-[#00F5D4] mb-16 text-center drop-shadow-[0_0_25px_rgba(0,245,212,0.4)]"
        >
          About Us
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-gray-300 max-w-4xl text-lg md:text-xl mx-auto leading-relaxed text-center"
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
          className="space-y-4"
        >
          <h3 className="text-3xl font-bold text-[#00FFD1]">Our Story</h3>
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
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-[#00FFD1]">What We Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start bg-[#111] border border-[#00FFD1]/20 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(0,255,209,0.3)] transition-all">
              <Music className="text-[#00FFD1] w-12 h-12 md:w-9 md:h-9" />
              <p className="text-gray-300 text-lg">
                Events & Activations: From concerts to comedy shows, we deliver
                unforgettable events.
              </p>
            </div>

            <div className="flex gap-4 items-start bg-[#111] border border-[#00FFD1]/20 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(0,255,209,0.3)] transition-all">
              <Star className="text-[#00FFD1] w-12 h-12 md:w-9 md:h-9" />
              <p className="text-gray-300 text-lg">
                Music, Comedy, Football & Content Production: We create and
                produce podcasts, videos, and more.
              </p>
            </div>

            <div className="flex gap-4 items-start bg-[#111] border border-[#00FFD1]/20 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(0,255,209,0.3)] transition-all">
              <Award className="text-[#00FFD1] w-12 h-12 md:w-9 md:h-9" />
              <p className="text-gray-300 text-lg">
                Barbering Services: Our skilled barbers deliver top-notch cuts
                and styling.
              </p>
            </div>

            <div className="flex gap-4 items-start bg-[#111] border border-[#00FFD1]/20 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(0,255,209,0.3)] transition-all">
              <Users className="text-[#00FFD1] w-12 h-12 md:w-9 md:h-9" />
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
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-[#00FFD1]">Meet the Team</h3>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111] border border-[#00FFD1]/20 rounded-xl p-8 hover:shadow-[0_0_30px_rgba(0,255,209,0.3)] transition-all"
          >
            <h4 className="text-2xl font-bold text-[#00FFD1] mb-4">
              Mission Statement
            </h4>
            <p className="text-gray-300 text-lg">
              To entertain, inspire, and connect people through music,
              barbering, and creativity, delivering exceptional experiences and
              pushing boundaries.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111] border border-[#00FFD1]/20 rounded-xl p-8 hover:shadow-[0_0_30px_rgba(0,255,209,0.3)] transition-all"
          >
            <h4 className="text-2xl font-bold text-[#00FFD1] mb-4">
              Vision Statement
            </h4>
            <p className="text-gray-300 text-lg">
              To be the leading entertainment company in Nigeria, blending
              barbering and entertainment, respected for excellence, creativity,
              and community impact.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 mt-12"
        >
          <h3 className="text-3xl font-bold text-[#00FFD1]">Why Choose Us</h3>
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
        <Button className="bg-[#00FFD1] hover:bg-[#00e6c0] text-[#0B0C10] font-semibold transition-all duration-300 shadow-md hover:shadow-[#00FFD1]/30 font-[var(--font-inter)]">
          Book now
        </Button>
      </div>
    </section>
  );
}
