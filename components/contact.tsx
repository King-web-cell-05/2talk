"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+234 808 286 8332",
    href: "tel:+2348082868332",
    description: "Give us a call",
  },
  {
    icon: Mail,
    label: "Email",
    value: "houseof2talkentertainment.com",
    href: "mailto:houseof2talkentertainment.com",
    description: "Reach out to our team",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "No. 2 Idera Street, Oworoshoki, Lagos, Nigeria",
    href: "https://www.google.com/maps/search/?api=1&query=No.2+Idera+Street+Oworoshoki+Lagos+Nigeria",
    description: "Visit our shop",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c06a]";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const reduce = useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !message.trim()) {
      setError("Please enter your name and message before continuing.");
      return;
    }

    const phoneNumber = "2349065644691";

    const whatsappMessage = [
      "Hello House of 2Talk Entertainment,",
      "",
      `Name: ${name.trim()}`,
      `Email: ${email.trim() || "Not provided"}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n");

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#0b0a08] px-4 pb-16 pt-28 text-[#f4efe6] sm:px-6 sm:pb-20 sm:pt-32 lg:px-12">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[35rem] bg-[radial-gradient(ellipse_at_top,rgba(212,173,85,0.12),transparent_65%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4ad55]/25 bg-[#d4ad55]/[0.06] px-4 py-2">
            <Sparkles className="h-3.5 w-3.5 text-[#e3c06a]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e3c06a] sm:text-xs">
              We'd love to hear from you
            </span>
          </div>

          <h1 className="text-5xl font-semibold leading-none tracking-tight sm:text-6xl md:text-7xl">
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-[#f6e7b4] via-[#d4ad55] to-[#a17b32] bg-clip-text text-transparent">
              Conversation.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#f4efe6]/55 sm:text-base sm:leading-8">
            Have a question, planning an event, or ready to book a service?
            Tell us what you have in mind. Our team is ready to help.
          </p>
        </motion.header>

        {/* Contact layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Contact information */}
          <motion.aside
            initial={{ opacity: 0, x: reduce ? 0 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduce ? 0 : 0.65, delay: 0.1 }}
            className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#11100d]/85 p-5 shadow-2xl shadow-black/20 sm:rounded-3xl sm:p-7 lg:p-8"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4ad55] sm:text-xs">
                Contact details
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Get in touch
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#f4efe6]/50">
                Connect with us directly. Whether it's a booking or a new
                idea, we're happy to hear from you.
              </p>
            </div>

            <div className="mt-7 space-y-3">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label === "Location" ? "_blank" : undefined
                    }
                    rel={
                      item.label === "Location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`group flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#d4ad55]/25 hover:bg-[#d4ad55]/[0.04] ${focusRing}`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d4ad55]/15 bg-[#d4ad55]/[0.07] text-[#e3c06a] transition-colors group-hover:bg-[#d4ad55]/15">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium text-[#f4efe6]/45">
                        {item.label}
                      </span>

                      <span className="mt-1 block break-words text-sm font-semibold leading-6 text-[#f4efe6]/90">
                        {item.value}
                      </span>

                      <span className="mt-1 block text-xs text-[#d4ad55]/75">
                        {item.description}
                      </span>
                    </span>

                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#e3c06a]" />
                  </a>
                );
              })}
            </div>

            {/* Working hours */}
            <div className="mt-5 rounded-xl border border-[#d4ad55]/15 bg-gradient-to-br from-[#d4ad55]/[0.07] to-transparent p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4ad55]/10 text-[#e3c06a]">
                  <Clock className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Working hours
                  </h3>
                  <p className="mt-1 text-xs text-[#f4efe6]/45">
                    Monday – Sunday
                  </p>
                </div>

                <span className="ml-auto rounded-full border border-green-400/15 bg-green-400/[0.07] px-2.5 py-1 text-[10px] font-medium text-green-300">
                  Daily
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-4">
                <span className="text-xs text-[#f4efe6]/50">
                  Opening hours
                </span>
                <span className="text-sm font-semibold text-[#e9cf8a]">
                  9:00 AM – 9:00 PM
                </span>
              </div>
            </div>

            {/* WhatsApp prompt */}
            <a
              href="https://wa.me/2349065644691"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] px-4 py-3.5 text-sm font-semibold text-[#f4efe6]/75 transition-all duration-300 hover:border-[#d4ad55]/30 hover:bg-white/[0.03] hover:text-[#e9cf8a] ${focusRing}`}
            >
              <MessageCircle className="h-4 w-4" />
              Chat with us on WhatsApp
              <ArrowUpRight className="ml-auto h-4 w-4" />
            </a>
          </motion.aside>

          {/* Message form */}
          <motion.section
            initial={{ opacity: 0, x: reduce ? 0 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduce ? 0 : 0.65, delay: 0.15 }}
            className="rounded-2xl border border-white/[0.08] bg-[#11100d]/90 p-5 shadow-2xl shadow-black/20 sm:rounded-3xl sm:p-7 lg:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4ad55] sm:text-xs">
                  Send an enquiry
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Tell us about it.
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#f4efe6]/45">
                  Fill in the details below to continue your conversation
                  on WhatsApp.
                </p>
              </div>

              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d4ad55]/15 bg-[#d4ad55]/[0.07] text-[#e3c06a] sm:flex">
                <Send className="h-5 w-5" />
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-semibold text-[#f4efe6]/75"
                >
                  Full name <span className="text-[#e3c06a]">*</span>
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                  placeholder="Enter your full name"
                  className={`w-full rounded-xl border border-white/[0.09] bg-[#0b0a08] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#d4ad55]/60 focus:ring-2 focus:ring-[#d4ad55]/10 ${focusRing}`}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-semibold text-[#f4efe6]/75"
                >
                  Email address{" "}
                  <span className="font-normal text-white/30">
                    (optional)
                  </span>
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={254}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border border-white/[0.09] bg-[#0b0a08] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#d4ad55]/60 focus:ring-2 focus:ring-[#d4ad55]/10 ${focusRing}`}
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#f4efe6]/75"
                  >
                    Your message{" "}
                    <span className="text-[#e3c06a]">*</span>
                  </label>

                  <span className="text-[10px] text-white/30">
                    {message.length}/1000
                  </span>
                </div>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  maxLength={1000}
                  placeholder="Tell us what you need help with..."
                  className={`w-full resize-y rounded-xl border border-white/[0.09] bg-[#0b0a08] px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all placeholder:text-white/25 focus:border-[#d4ad55]/60 focus:ring-2 focus:ring-[#d4ad55]/10 ${focusRing}`}
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="flex items-start gap-2 rounded-lg border border-red-400/20 bg-red-400/[0.06] px-3 py-2.5 text-xs leading-5 text-red-300"
                >
                  <span className="mt-0.5">!</span>
                  {error}
                </p>
              )}

              <button
                type="submit"
                className={`group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f0d88f] to-[#c49b45] px-5 py-4 text-sm font-bold text-[#171209] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#d4ad55]/10 active:translate-y-0 ${focusRing}`}
              >
                Continue to WhatsApp
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>

              <p className="flex items-center justify-center gap-2 text-center text-[11px] leading-5 text-white/35">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#d4ad55]/70" />
                Your message will open in WhatsApp for you to send.
              </p>
            </form>
          </motion.section>
        </div>

        <footer className="mt-10 text-center sm:mt-12">
          <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/25 sm:text-[10px]">
            House of 2Talk Entertainment
          </p>
        </footer>
      </div>
    </main>
  );
}