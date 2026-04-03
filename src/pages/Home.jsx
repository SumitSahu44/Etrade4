import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Home/Hero';
import { ProductGrid } from '../components/Home/ProductGrid';
import { IndiaMap } from '../components/Home/IndiaMap';
import { FileText, MessageSquare, ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Slider Section (95% Width) */}
      <Hero />

      {/* 2. Short About / Management Section */}
    <section className="py-16 max-w-8xl mx-auto px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

  {/* LEFT CONTENT */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
  >
    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
      Our Management
    </span>

    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
      Experienced Leadership <br /> Driving Textile Excellence
    </h2>

    <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
      Parekh e-Trade Market is led by industry professionals with over 25+ years of experience in the textile sector, ensuring transparency and efficiency in e-Auction and e-Quotation processes.
    </p>

    <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#a58c67] hover:gap-3 transition-all">
      Learn More <ArrowRight size={16} />
    </button>
  </motion.div>

  {/* RIGHT STATS */}
  <div className="grid grid-cols-2 gap-4">

    <div className="p-6 border border-gray-200 rounded-md text-center bg-white">
      <h4 className="text-2xl md:text-3xl font-bold text-gray-800">500+</h4>
      <p className="text-xs text-gray-500 uppercase mt-1">Associates</p>
    </div>

    <div className="p-6 border border-gray-200 rounded-md text-center bg-white">
      <h4 className="text-2xl md:text-3xl font-bold text-gray-800">100%</h4>
      <p className="text-xs text-gray-500 uppercase mt-1">Verified</p>
    </div>

  </div>

</section>

      {/* 3. Product Gallery (Pinterest Layout) */}
      <div className="bg-gray-50/50 py-10">
        <ProductGrid />
      </div>

      {/* 4. India Map & Textile Associates */}
      {/* <IndiaMap /> */}

      {/* 5. Circulars & Blog Mini-Section */}
      <section className="py-20 max-w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Latest Circulars */}
        <div className="lg:col-span-1 p-10 bg-white rounded-[3rem] border border-pink-100 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-[#4A4A4A]" />
            <h3 className="text-xl font-extrabold text-[#4A4A4A] uppercase er">Circulars</h3>
          </div>
          <ul className="space-y-6">
            {['New GST Norms for Raw Material', 'e-Auction Schedule Oct 2026', 'Tender Submission Guide'].map((item, i) => (
              <li key={i} className="group cursor-pointer">
                <p className="text-sm font-bold text-[#4A4A4A] group-hover:text-[#4A4A4A] transition-colors">{item}</p>
                <span className="text-sm text-gray-400 font-medium ">Published: 2 days ago</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Blog / News */}
        <div className="lg:col-span-2 p-10 bg-[#4A4A4A] rounded-[3rem] text-white overflow-hidden relative">
          <MessageSquare className="absolute -right-10 -bottom-10 text-white/5" size={300} />
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold mb-6">Textile Industry <span className="text-[#4A4A4A]">Insights</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="h-40 bg-white/10 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1622532470022-24107cac5ef3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGV4dGlsZSUyMGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" alt="Blog" />
                </div>
                <h4 className="font-bold text-lg leading-snug">The Future of Sustainable Weaving in India</h4>
                <p className="text-sm text-gray-400">Discover how modern machineries are reducing waste...</p>
              </div>
              <div className="space-y-4">
                <div className="h-40 bg-white/10 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1630920501459-f3e99320c4a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRleHRpbGUlMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" alt="Blog" />
                </div>
                <h4 className="font-bold text-lg leading-snug">Global Demand for Pure Cotton Trends</h4>
                <p className="text-sm text-gray-400">Export opportunities for verified manufacturers...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};