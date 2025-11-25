/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full bg-[#111111] text-white relative overflow-hidden"
    >
      <div className="relative w-full h-[90vh]">
        <Image
          src="/hero-img.jpg"
          alt="Barber Hero"
          fill
          className="object-cover opacity-40"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-2xl leading-tight text-white drop-shadow-lg">
            Master Your Style
          </h1>

          <p className="text-gray-300 max-w-lg text-lg md:text-xl leading-relaxed">
            Premium grooming products and expert barber services, delivered with precision.
          </p>

          <div className="flex gap-4 mt-4">
            <Button className="bg-yellow-700 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-[#D4A65A]/30">
              Book Now
            </Button>

           
          </div>
        </div>
      </div>
    </section>
  );
}
