/* eslint-disable react/no-unescaped-entities */
'use client';
import Button from "./ui/button";

const services = [
  {
    title: "Haircut & Styling",
    description: "Precision cuts and modern styling to match your personality.",
    image: "/haircut-img.jpg",
  },
  {
    title: "Beard Grooming",
    description: "Professional beard shaping and care for a polished look.",
    image: "/beard-grooming-img.jpg",
  },
  {
    title: "Hairline Carving",
    description: "Smooth shaves and clean trims for a sharp, refined style.",
    image: "/hairline-carve-img.jpg",
  },
  {
    title: "Hair Treatment",
    description: "Premium treatments to nourish and revitalize your hair.",
    image: "/hair-treatment-img.jpeg",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#0B0C10] text-white py-24 px-4 md:px-20 relative">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#00F5D4] mb-16 text-center drop-shadow-[0_0_25px_rgba(0,245,212,0.4)]">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-12 lg:gap-16 mx-auto max-w-[90rem]">
        
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#111820] rounded-3xl p-8 md:p-10 shadow-lg border-2 border-[#00F5D4]/30
            flex flex-col items-center text-center 
            hover:scale-[1.07] hover:shadow-[0_0_50px_rgba(0,245,212,0.35)]
            transition-all duration-300"
          >
            
            {/* RESPONSIVE HEIGHT IMAGE BOX */}
            <div className="h-64 md:h-56 lg:h-48 w-full bg-gray-900 rounded-2xl mb-8 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>

            <h3 className="text-3xl font-bold text-[#00F5D4] mb-4">{service.title}</h3>
            <p className="text-[#9BA8B4] text-lg mb-8">{service.description}</p>

            <Button className="bg-[#00FFD1] hover:bg-[#00e6c0] text-[#0B0C10] px-6 py-3 text-lg font-semibold 
              transition-all duration-300 shadow-md hover:shadow-[#00FFD1]/40 font-[var(--font-inter)]">
              Book Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
