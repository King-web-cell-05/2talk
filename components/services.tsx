/* eslint-disable react/no-unescaped-entities */
'use client';
import Button from "./ui/button";

const services = [
{
title: "Haircut & Styling",
description: "Precision cuts and modern styling to match your personality.",
image: "/placeholder1.jpg",
},
{
title: "Beard Grooming",
description: "Professional beard shaping and care for a polished look.",
image: "/placeholder2.jpg",
},
{
title: "Shaving & Trimming",
description: "Smooth shaves and clean trims for a sharp, refined style.",
image: "/placeholder3.jpg",
},
{
title: "Hair Treatment",
description: "Premium treatments to nourish and revitalize your hair.",
image: "/placeholder4.jpg",
},
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#0B0C10] text-white py-24 px-6 md:px-20 relative">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#00F5D4] mb-14 text-center drop-shadow-[0_0_20px_rgba(0,245,212,0.4)]">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#111820] rounded-2xl p-6 md:p-8 shadow-lg border-2 border-[#00F5D4]/30 flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_0_40px_rgba(0,245,212,0.3)] transition-all duration-300"
          >
            <div className="h-40 w-full bg-gray-800 rounded-xl mb-6 flex items-center justify-center text-gray-500">
              {/* Image placeholder */}
              <span>Image Here</span>
            </div>
            <h3 className="text-2xl font-bold text-[#00F5D4] mb-3">{service.title}</h3>
            <p className="text-[#9BA8B4] text-base mb-6">{service.description}</p>
            <Button className="bg-[#00FFD1] hover:bg-[#00e6c0] text-[#0B0C10] font-semibold transition-all duration-300 shadow-md hover:shadow-[#00FFD1]/30 font-[var(--font-inter)]">
              Book Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}


