/* eslint-disable react/no-unescaped-entities */

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/hero"));
const NavBar = dynamic(() => import("@/components/navbar"));
const TestimonialsSection = dynamic(() => import("@/components/Testimonials"));
const ServicesSection = dynamic(() => import("@/components/services"));
const FooterSection = dynamic(() => import("@/components/footer"));

const page = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default page;
