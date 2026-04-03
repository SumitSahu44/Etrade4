import React from "react";
import { motion } from "framer-motion";

export const About = () => (
  <div className="min-h-screen bg-[#f8f9fb]">

    {/* HEADER */}
    <section className="py-20 text-center border-b border-gray-200 bg-white">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-500 font-semibold text-xs uppercase tracking-[0.4em]"
      >
        Heritage Since 25 Years
      </motion.span>

      <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-800">
        About Parekh e-Trade
      </h1>

      <div className="h-1 w-16 bg-[#a58c67] mx-auto mt-4"></div>
    </section>

    {/* MAIN SECTION */}
    <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Driving India's Textile Digitization
        </h2>

        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
          Parekh e-Trade Market (Textile) is a leading B2B platform based in Hyderabad.
          We provide a secure, transparent, and efficient marketplace for raw materials,
          machineries, and finished textile products.
        </p>

        {/* Mission Box */}
        <div className="mt-6 p-6 border border-gray-200 bg-white rounded-md">
          <h4 className="text-sm font-semibold text-[#a58c67] uppercase mb-1">
            Our Mission
          </h4>
          <p className="text-sm text-gray-600">
            To empower textile manufacturers and buyers with real-time trading data,
            ensuring transparency and trusted transactions.
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1664299852788-5a24db0d7e05?w=600"
          alt="Factory"
          className="w-full h-[320px] md:h-[420px] object-cover rounded-md border border-gray-200"
        />

        {/* STAT CARD */}
        <div className="absolute bottom-4 left-4 bg-white px-6 py-4 border border-gray-200 rounded-md shadow-sm">
          <p className="text-2xl font-bold text-gray-800">100%</p>
          <p className="text-xs text-gray-500 uppercase">Verified Trade</p>
        </div>
      </div>

    </section>
  </div>
);