import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe, } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Hero = () => {
  return (
    <section className="w-[95%] mx-auto mt-6 relative h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl shadow-pink-100 bg-white">
      
      {/* Background Subtle Pattern in Pink */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23db2777' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      <div className="grid md:grid-cols-2 h-full items-center relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="px-12 lg:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-10 h-[1px] bg-[#4A4A4A]"></span>
              <span className="text-[#4A4A4A] font-black text-[10px] uppercase tracking-[0.4em]">
                B2B Textile <span className="normal-case">e-Trade</span>
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-[#4A4A4A] leading-[1.05] tracking-tighter">
              Gateway to <br /> 
              <span className="relative inline-block text-[#4A4A4A]">
                Excellence
              </span>
            </h2>
            
            <p className="mt-8 text-gray-500 text-lg font-medium leading-relaxed max-w-md">
              India's premier digital marketplace for fabrics, raw materials, and machineries.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-5">
             <Link to="/products" className="bg-[#4A4A4A] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-[#4A4A4A] transition-all flex items-center gap-3 group">
                Explore Market
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image with Pink Glow */}
        <div className="h-full relative flex items-center justify-end pr-6 lg:pr-12">
          <div className="h-[85%] w-[90%] relative">
            <img 
              src="https://images.unsplash.com/photo-1615806528302-05c722d51e0d?q=80&w=2070" 
              alt="Textile" 
              className="h-full w-full object-cover rounded-[4rem] shadow-2xl border-[12px] border-white"
            />
            {/* Pink Floating Tag */}
            <div className="absolute -left-5 bottom-20 bg-[#4A4A4A] text-white p-6 rounded-[2rem] shadow-2xl">
               <p className="text-2xl font-black">100%</p>
               <p className="text-[10px] font-bold uppercase tracking-widest">Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};