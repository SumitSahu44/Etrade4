import React from 'react';
import { FileText, Send, Info } from 'lucide-react';

export const Quotation = () => (
  <div className="min-h-screen py-16 bg-[#FDF2F2]/30">
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side: Info */}
        <div className="md:w-1/3">
          <div className="sticky top-32">
            <span className="text-[#4A4A4A] font-black text-xs uppercase tracking-[0.4em]">Fast Response</span>
            <h2 className="text-4xl font-black text-[#4A4A4A] mt-2 leading-tight uppercase ">Request a <span className="text-[#4A4A4A]">Quotation</span></h2>
            <p className="mt-6 text-gray-500 text-sm leading-loose">
              Get customized pricing for bulk orders of raw materials, machinery, or industrial spares. Our team responds within 24 business hours.
            </p>
            <div className="mt-8 p-6 bg-white rounded-3xl border border-pink-100 shadow-sm">
               <Info className="text-[#4A4A4A] mb-2" size={20} />
               <p className="text-[10px] font-bold text-gray-400 uppercase leading-relaxed">Note: Quotations are valid for 7 days from the date of issuance due to market fluctuations.</p>
            </div>
          </div>
        </div>

        {/* Right Side: e-Form */}
        <div className="md:w-2/3 bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-pink-50">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Product Category</label>
              <select className="p-4 bg-gray-50 rounded-2xl border-none outline-none font-bold text-gray-600">
                 <option>Raw Materials</option>
                 <option>Industrial Machineries</option>
                 <option>Textile Spares</option>
                 <option>Finished Fabrics</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Expected Quantity</label>
              <input type="text" placeholder="e.g. 500 Meters / 10 Tons" className="p-4 bg-gray-50 rounded-2xl border-none outline-none" />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Detailed Specifications</label>
              <textarea placeholder="Mention GSM, Yarn Count, Brand, or Model No." className="p-6 bg-gray-50 rounded-3xl h-40 outline-none border-none"></textarea>
            </div>
            <button className="md:col-span-2 bg-[#bc114a] text-white py-5 rounded-full font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-[#bc114a]/20 flex items-center justify-center gap-3">
              <Send size={18} /> Request Official Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);