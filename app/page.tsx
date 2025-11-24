/* eslint-disable react/no-unescaped-entities */

import React from "react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/hero"));
const NavBar = dynamic(() => import("@/components/navbar"));
const TestimonialsSection = dynamic(() => import("@/components/Testimonials"));
const ServicesSection = dynamic(() => import("@/components/services"));

const page = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default page;
