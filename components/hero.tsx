/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full bg-[#0B0C10] text-white relative overflow-hidden"
    >
      <div className="relative w-full h-[98vh]">
        <Image
          src="/hero-img.jpg"
          alt="2Talk Hero"
          fill
          className="object-cover opacity-50 grayscale"
          priority
        />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-xl leading-tight text-[#00FFD1]">
            Master Your Style
          </h1>
          <p className="text-gray-400 max-w-md text-lg">
            Premium grooming products and expert barber services, delivered with
            precision.
          </p>

          <div className="flex gap-4 mt-4">
            <Button className="bg-[#00FFD1] hover:bg-[#00e6c0] text-[#0B0C10] font-semibold transition-all duration-300 shadow-md hover:shadow-[#00FFD1]/30 font-[var(--font-inter)]">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
