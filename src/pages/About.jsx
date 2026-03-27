import React from 'react';
import { motion } from 'framer-motion';

export const About = () => (
  <div className="min-h-screen">
    {/* Page Header */}
    <section className="py-24 bg-[#FDF2F2] text-center">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#4A4A4A] font-black text-xs uppercase tracking-[0.6em]">Heritage Since 25 Years</motion.span>
      <h1 className="text-6xl font-black text-[#4A4A4A] tracking-tighter mt-4 uppercase">About <span className="text-[#4A4A4A] normal-case">Parekh e-Trade</span></h1>
      <div className="h-1.5 w-24 bg-[#D48282] mx-auto mt-6 rounded-full"></div>
    </section>

    {/* Vision & Management */}
    <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-20 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl font-black text-[#4A4A4A] leading-tight uppercase">Driving India's <br /> Textile <span className="text-[#4A4A4A]">Digitization</span></h2>
        <p className="text-gray-500 font-medium leading-loose">
          Parekh e-Trade Market (Textile) is a leading B2B platform based in Hyderabad. We specialize in providing a secure, transparent, and efficient marketplace for raw materials, machineries, and finished products.
        </p>
        <div className="p-8 bg-[#4A4A4A] text-white rounded-[3rem] shadow-xl">
          <h4 className="text-[#4A4A4A] font-black uppercase text-xs mb-2">Our Mission</h4>
          <p className="text-sm text-gray-500">To empower every textile manufacturer and buyer with real-time trading data and authorized official verification.</p>
        </div>
      </div>
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1606259458027-54d2a728b6ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFicmljfGVufDB8fDB8fHww" className="rounded-[4rem] shadow-2xl" alt="Factory" />
        <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-pink-50">
          <p className="text-4xl font-black text-[#4A4A4A]">100%</p>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Verified Trade</p>
        </div>
      </div>
    </section>
  </div>
);