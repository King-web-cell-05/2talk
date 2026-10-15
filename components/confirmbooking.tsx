"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  Scissors,
  UserRound,
} from "lucide-react";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

type ServiceType = "shop" | "home";
type BookingErrors = Partial<
  Record<"serviceType" | "name" | "date" | "time", string>
>;

const hairstyles = [
  { id: 1, name: "Low Cut", price: 3000, image: "/low-cut.jpg", duration: 30 },
  { id: 2, name: "Burst Fade", price: 3000, image: "/burst-fade.jpg", duration: 30 },
  { id: 3, name: "Skin Punk", price: 3000, image: "/skin-punk.jpg", duration: 30 },
  { id: 4, name: "Taper Fade", price: 3000, image: "/taper-fade.jpg", duration: 35 },
  { id: 5, name: "Afro", price: 3000, image: "/Afro.jpg", duration: 30 },
  { id: 6, name: "Cut & Dye", price: 3000, image: "/cut-and-dye.jpg", duration: 60 },
  { id: 7, name: "Side Cut", price: 3000, image: "/side-cut.jpg", duration: 30 },
];

const GOLD = "#d4ad55";

const formatPrice = (price: number) =>
  `₦${price.toLocaleString("en-NG")}`;

const formatDate = (iso: string) => {
  const [year, month, day] = iso.split("-").map(Number);

  return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const getDateParts = (iso: string) => {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return {
    weekday: date.toLocaleDateString("en-GB", { weekday: "short" }),
    month: date.toLocaleDateString("en-GB", { month: "short" }),
    day,
  };
};

const getTimeSlots = () => {
  const slots: string[] = [];

  for (let hour = 9; hour <= 21; hour++) {
    for (const minute of [0, 30]) {
      if (hour === 21 && minute === 30) continue;

      const displayHour = hour > 12 ? hour - 12 : hour;
      const period = hour >= 12 ? "PM" : "AM";
      const displayMinute = minute === 0 ? "00" : "30";

      slots.push(`${displayHour}:${displayMinute} ${period}`);
    }
  }

  return slots;
};

const allTimeSlots = getTimeSlots();

const getLocalISODate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

function StepHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-5 flex items-start gap-3 sm:gap-4">
      <span
        aria-hidden="true"
        className="pt-0.5 font-display text-2xl italic text-[#d4ad55]/70 sm:text-3xl"
      >
        {number}
      </span>

      <div>
        <h2 className="font-display text-2xl font-semibold text-[#f1dfad] sm:text-3xl">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-xs leading-5 text-[#f4efe6]/50 sm:text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c06a]";

const fieldBase =
  "w-full rounded-lg border bg-[#100e0a] px-4 py-3.5 text-sm text-[#f4efe6] outline-none transition placeholder:text-[#f4efe6]/35 focus:border-[#d4ad55]";

export default function ConfirmBooking() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const styleId = Number(searchParams.get("styleId")) || 1;

  const style = hairstyles.find((item) => item.id === styleId) ?? hairstyles[0];

  const [serviceType, setServiceType] = useState<ServiceType | null>(null);
  const [clientName, setClientName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [dates, setDates] = useState<string[]>([]);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  useEffect(() => {
    const today = new Date();

    const availableDates = Array.from({ length: 14 }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);

      return getLocalISODate(date);
    });

    setDates(availableDates);
  }, []);

  const timeSlots = useMemo(() => {
    if (!selectedDate) return allTimeSlots;

    const now = new Date();
    const todayISO = getLocalISODate(now);

    if (selectedDate !== todayISO) return allTimeSlots;

    // Only show times at least 30 minutes from now.
    const minimumTime = new Date(now.getTime() + 30 * 60 * 1000);

    return allTimeSlots.filter((slot) => {
      const match = slot.match(/^(\d+):(\d{2}) (AM|PM)$/);

      if (!match) return false;

      let hour = Number(match[1]);
      const minute = Number(match[2]);
      const period = match[3];

      if (period === "AM" && hour === 12) hour = 0;
      if (period === "PM" && hour !== 12) hour += 12;

      const slotDate = new Date(now);
      slotDate.setHours(hour, minute, 0, 0);

      return slotDate.getTime() >= minimumTime.getTime();
    });
  }, [selectedDate]);

  const priceLabel =
    serviceType === "shop"
      ? formatPrice(style.price)
      : serviceType === "home"
        ? "Negotiable"
        : "Select a service";

  const clearError = (key: keyof BookingErrors) => {
    setErrors((previous) => {
      const next = { ...previous };
      delete next[key];
      return next;
    });
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime("");
    clearError("date");
    clearError("time");
  };

  const validate = () => {
    const nextErrors: BookingErrors = {};

    if (!serviceType) {
      nextErrors.serviceType = "Please choose a service type.";
    }

    if (clientName.trim().length < 2) {
      nextErrors.name = "Enter your name (at least 2 characters).";
    }

    if (!selectedDate) {
      nextErrors.date = "Please choose your preferred date.";
    }

    if (!selectedTime || !timeSlots.includes(selectedTime)) {
      nextErrors.time = "Please choose an available time.";
    }

    setErrors(nextErrors);
    setAttemptedSubmit(true);

    return Object.keys(nextErrors).length === 0;
  };

  const handleConfirm = () => {
    if (!validate() || !serviceType || !selectedDate || !selectedTime) {
      return;
    }

    const serviceLabel =
      serviceType === "shop" ? "In-Shop Service" : "Home Service";

    const message = [
      "Hello, I would like to book an appointment.",
      "",
      `Hairstyle: ${style.name}`,
      `Service: ${serviceLabel}`,
      `Name: ${clientName.trim()}`,
      `Date: ${formatDate(selectedDate)}`,
      `Time: ${selectedTime}`,
      `Price: ${serviceType === "shop" ? formatPrice(style.price) : "Negotiable"}`,
      "",
      "Please confirm my booking. Thank you.",
    ].join("\n");

    const whatsappURL = `https://wa.me/2348082868332?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    router.push("/appointmentbooked");
  };

  const errorText = (key: keyof BookingErrors) =>
    attemptedSubmit ? errors[key] : undefined;

  return (
    <main
      className={`${display.variable} ${body.variable} relative isolate min-h-screen overflow-hidden bg-[#090806] px-4 pb-16 pt-28 font-body text-[#f4efe6] sm:px-6 sm:pt-32 lg:px-10`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(212,173,85,0.13),transparent_68%)]"
      />

      <div className="mx-auto max-w-6xl">
        <button
          type="button"
          onClick={() => router.back()}
          className={`mb-8 inline-flex items-center gap-2 rounded-md py-2 text-sm text-[#f4efe6]/60 transition hover:text-[#e9cf8a] ${focusRing}`}
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Back to hairstyles
        </button>

        <header className="mb-8 max-w-2xl sm:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4ad55]/25 bg-[#d4ad55]/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e9cf8a] sm:text-xs">
            <Scissors size={13} aria-hidden="true" />
            House of 2Talk
          </div>

          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Make it{" "}
            <span className="italic text-[#d4ad55]">official.</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[#f4efe6]/55 sm:text-base">
            A fresh cut starts with a booking. Choose your service, select a
            convenient time, and confirm your appointment on WhatsApp.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3 lg:gap-8">
          <section className="min-w-0 rounded-2xl border border-white/[0.08] bg-[#12100c] p-5 shadow-2xl shadow-black/20 sm:p-8 lg:col-span-2">
            <div className="mb-8 flex items-center justify-between gap-3 border-b border-white/[0.07] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4ad55]">
                  Your appointment
                </p>
                <p className="mt-1 text-sm text-[#f4efe6]/45">
                  Complete the details below
                </p>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d4ad55]/20 bg-[#d4ad55]/[0.07] text-[#d4ad55]">
                <CalendarDays size={20} aria-hidden="true" />
              </div>
            </div>

            <fieldset className="mb-9 min-w-0">
              <legend className="sr-only">Choose service type</legend>

              <StepHeading
                number="01"
                title="Choose your service"
                description="Where would you like your haircut?"
              />

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {(
                  [
                    {
                      value: "shop",
                      title: "In-Shop Service",
                      description: "Visit us at the shop",
                      price: formatPrice(style.price),
                      icon: Scissors,
                    },
                    {
                      value: "home",
                      title: "Home Service",
                      description: "Get your cut at home",
                      price: "Negotiable",
                      icon: MapPin,
                    },
                  ] as const
                ).map((option) => {
                  const active = serviceType === option.value;
                  const Icon = option.icon;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      aria-pressed={active}
                      onClick={() => {
                        setServiceType(option.value);
                        clearError("serviceType");
                      }}
                      className={`relative flex min-h-28 items-start gap-3 rounded-xl border p-4 text-left transition duration-200 sm:p-5 ${focusRing} ${
                        active
                          ? "border-[#d4ad55] bg-[#d4ad55]/[0.08]"
                          : "border-white/[0.09] bg-[#0c0b08] hover:border-[#d4ad55]/40"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                          active
                            ? "bg-[#d4ad55]/15 text-[#e9cf8a]"
                            : "bg-white/[0.04] text-[#f4efe6]/55"
                        }`}
                      >
                        <Icon size={19} aria-hidden="true" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold">
                          {option.title}
                        </span>

                        <span className="mt-1 block text-xs leading-5 text-[#f4efe6]/45">
                          {option.description}
                        </span>

                        <span className="mt-3 block text-sm font-semibold text-[#e9cf8a]">
                          {option.price}
                        </span>
                      </span>

                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          active
                            ? "border-[#d4ad55] bg-[#d4ad55] text-[#100e0a]"
                            : "border-white/20 text-transparent"
                        }`}
                      >
                        <Check size={12} aria-hidden="true" />
                      </span>
                    </button>
                  );
                })}
              </div>

              {errorText("serviceType") && (
                <p role="alert" className="mt-2 text-xs text-red-400">
                  {errors.serviceType}
                </p>
              )}
            </fieldset>

            <div className="mb-9">
              <StepHeading
                number="02"
                title="Your details"
                description="What should we call you?"
              />

              <label
                htmlFor="client-name"
                className="mb-2 block text-xs font-semibold text-[#f4efe6]/70"
              >
                Full name
              </label>

              <div className="relative">
                <UserRound
                  size={17}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#d4ad55]/70"
                />

                <input
                  id="client-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  placeholder="Enter your full name"
                  value={clientName}
                  aria-invalid={Boolean(errorText("name"))}
                  aria-describedby={
                    errorText("name") ? "name-error" : undefined
                  }
                  onChange={(event) => {
                    setClientName(event.target.value);
                    clearError("name");
                  }}
                  className={`${fieldBase} pl-11 ${
                    errorText("name")
                      ? "border-red-400/70"
                      : "border-white/[0.10]"
                  }`}
                />
              </div>

              {errorText("name") && (
                <p
                  id="name-error"
                  role="alert"
                  className="mt-2 text-xs text-red-400"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <fieldset className="mb-9 min-w-0">
              <legend className="sr-only">Choose appointment date</legend>

              <StepHeading
                number="03"
                title="Pick a date"
                description="Appointments are available for the next 14 days."
              />

              <div
                className={`-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-3 ${
                  errorText("date")
                    ? "rounded-lg outline outline-1 outline-red-400/50"
                    : ""
                }`}
              >
                {dates.map((date) => {
                  const parts = getDateParts(date);
                  const active = selectedDate === date;

                  return (
                    <button
                      key={date}
                      type="button"
                      aria-pressed={active}
                      aria-label={formatDate(date)}
                      onClick={() => handleDateSelect(date)}
                      className={`flex min-w-[76px] shrink-0 snap-start flex-col items-center rounded-xl border px-3 py-4 transition sm:min-w-[84px] ${focusRing} ${
                        active
                          ? "border-[#d4ad55] bg-[#d4ad55] text-[#100e0a]"
                          : "border-white/[0.09] bg-[#0c0b08] text-[#f4efe6]/70 hover:border-[#d4ad55]/45"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider opacity-75">
                        {parts.weekday}
                      </span>

                      <span className="my-1 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                        {parts.day}
                      </span>

                      <span className="text-xs opacity-80">
                        {parts.month}
                      </span>
                    </button>
                  );
                })}
              </div>

              {errorText("date") && (
                <p role="alert" className="mt-2 text-xs text-red-400">
                  {errors.date}
                </p>
              )}

              {selectedDate && (
                <p className="mt-2 text-xs text-[#e9cf8a]/80">
                  Selected: {formatDate(selectedDate)}
                </p>
              )}
            </fieldset>

            {/* Time selection — now styled like the date cards */}
            <fieldset className="mb-9 min-w-0">
              <legend className="sr-only">Choose appointment time</legend>

              <StepHeading
                number="04"
                title="Choose a time"
                description="Available slots run from 9:00 AM to 9:00 PM."
              />

              {!selectedDate ? (
                <p className="rounded-lg border border-white/[0.07] bg-[#0c0b08] p-4 text-sm text-[#f4efe6]/45">
                  Select a date first to choose your appointment time.
                </p>
              ) : timeSlots.length === 0 ? (
                <p className="rounded-lg border border-white/[0.07] bg-[#0c0b08] p-4 text-sm text-[#f4efe6]/55">
                  No remaining time slots are available today. Please select
                  another date.
                </p>
              ) : (
                <div
                  className={`-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-3 ${
                    errorText("time")
                      ? "rounded-lg outline outline-1 outline-red-400/50"
                      : ""
                  }`}
                >
                  {timeSlots.map((time) => {
                    const active = selectedTime === time;

                    return (
                      <button
                        key={time}
                        type="button"
                        aria-pressed={active}
                        onClick={() => {
                          setSelectedTime(time);
                          clearError("time");
                        }}
                        className={`flex min-w-[100px] shrink-0 snap-start items-center justify-center rounded-xl border px-3 py-4 text-xs font-semibold transition sm:min-w-[112px] sm:text-sm ${focusRing} ${
                          active
                            ? "border-[#d4ad55] bg-[#d4ad55] text-[#100e0a]"
                            : "border-white/[0.09] bg-[#0c0b08] text-[#f4efe6]/70 hover:border-[#d4ad55]/45"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              )}

              {errorText("time") && (
                <p role="alert" className="mt-3 text-xs text-red-400">
                  {errors.time}
                </p>
              )}

              {selectedTime && (
                <p className="mt-2 text-xs text-[#e9cf8a]/80">
                  Selected time: {selectedTime}
                </p>
              )}
            </fieldset>

            {attemptedSubmit && Object.keys(errors).length > 0 && (
              <div
                role="alert"
                className="mb-5 rounded-lg border border-red-400/20 bg-red-400/[0.06] p-4 text-sm text-red-300"
              >
                Please review the highlighted fields before continuing.
              </div>
            )}

            <button
              type="button"
              onClick={handleConfirm}
              className={`group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ead18d] via-[#d4ad55] to-[#b88b35] px-5 py-4 text-sm font-bold text-[#151108] shadow-lg shadow-[#d4ad55]/10 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#d4ad55]/15 active:translate-y-0 sm:text-base ${focusRing}`}
            >
              <MessageCircle size={19} aria-hidden="true" />
              Confirm booking on WhatsApp
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-[#f4efe6]/40">
              Your booking details will be sent to WhatsApp for confirmation.
            </p>
          </section>

          <aside className="h-fit overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12100c] lg:sticky lg:top-28">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0b08] sm:aspect-[16/9] lg:aspect-[4/3]">
              <Image
                src={style.image}
                alt={`${style.name} hairstyle`}
                fill
                priority
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-500 hover:scale-[1.03]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#12100c] via-black/10 to-transparent"
              />

              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f1dfad] backdrop-blur-md">
                Selected style
              </span>
            </div>

            <div className="p-5 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4ad55]">
                Booking summary
              </p>

              <h2 className="mt-2 font-display text-3xl font-semibold text-[#f1dfad] sm:text-4xl">
                {style.name}
              </h2>

              <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#f4efe6]/55">
                <span className="inline-flex items-center gap-1.5">
                  <Clock3
                    size={14}
                    className="text-[#d4ad55]"
                    aria-hidden="true"
                  />
                  {style.duration} minutes
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <Scissors
                    size={14}
                    className="text-[#d4ad55]"
                    aria-hidden="true"
                  />
                  Professional cut
                </span>
              </div>

              <div className="my-6 border-t border-white/[0.08]" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-[#f4efe6]/45">
                    Estimated price
                  </p>
                  <p className="mt-1 font-display text-3xl font-semibold text-[#f4efe6]">
                    {serviceType === "shop"
                      ? formatPrice(style.price)
                      : serviceType === "home"
                        ? "Negotiable"
                        : "—"}
                  </p>
                </div>

                <span className="rounded-full border border-[#d4ad55]/20 bg-[#d4ad55]/[0.06] px-2.5 py-1 text-[10px] font-semibold text-[#e9cf8a]">
                  {serviceType === "shop"
                    ? "In-shop"
                    : serviceType === "home"
                      ? "Home service"
                      : "Not selected"}
                </span>
              </div>

              <div className="my-6 border-t border-white/[0.08]" />

              <dl className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <UserRound
                    size={16}
                    className="mt-0.5 shrink-0 text-[#d4ad55]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <dt className="text-xs text-[#f4efe6]/40">
                      Customer
                    </dt>
                    <dd className="mt-1 break-words font-medium text-[#f4efe6]/90">
                      {clientName.trim() || "Awaiting your name"}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CalendarDays
                    size={16}
                    className="mt-0.5 shrink-0 text-[#d4ad55]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <dt className="text-xs text-[#f4efe6]/40">Date</dt>
                    <dd className="mt-1 font-medium text-[#f4efe6]/90">
                      {selectedDate
                        ? formatDate(selectedDate)
                        : "Choose a date"}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3
                    size={16}
                    className="mt-0.5 shrink-0 text-[#d4ad55]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <dt className="text-xs text-[#f4efe6]/40">Time</dt>
                    <dd className="mt-1 font-medium text-[#f4efe6]/90">
                      {selectedTime || "Choose a time"}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6 rounded-xl border border-[#d4ad55]/15 bg-[#d4ad55]/[0.04] p-4">
                <p className="text-xs font-semibold text-[#e9cf8a]">
                  Almost there
                </p>
                <p className="mt-1 text-xs leading-5 text-[#f4efe6]/45">
                  Review your details and confirm through WhatsApp to complete
                  your booking request.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <footer className="mt-10 border-t border-white/[0.07] pt-6 text-center">
          <p className="text-xs text-[#f4efe6]/35">
            House of 2Talk Entertainment · Your style, your experience.
          </p>
        </footer>
      </div>
    </main>
  );
}