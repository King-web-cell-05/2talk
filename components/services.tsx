/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
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
    <section className="w-full bg-[#111111] text-white py-24 px-6 md:px-20 relative">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center drop-shadow-lg">
        Experience Our{" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-500  drop-shadow-lg">
          {" "}
          Premium Services
        </span>
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[90rem] mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#1A1A1A] rounded-3xl overflow-hidden shadow-xl border border-[#2a2a2a]
              hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]
              transition-all duration-300"
          >
            {/* Bigger Image Box */}
            <div className="h-64 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>

              <p className="text-gray-400 text-[1rem] leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <Link href="/book">
                <Button
                  className="bg-yellow-600 hover:bg-yellow-500 text-black w-full py-3 text-md 
                  font-semibold rounded-md transition-all duration-300 shadow-md"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
