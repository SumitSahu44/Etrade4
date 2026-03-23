import React from 'react';
import { Send } from 'lucide-react';

export const TradeEnquiry = () => (
  <div className="min-h-screen py-16 bg-[#FDF2F2]/50">
    <div className="max-w-4xl mx-auto bg-white p-12 rounded-[3.5rem] shadow-2xl border border-pink-50">
      <h2 className="text-3xl font-black text-[#4A4A4A] uppercase  border-b pb-6 border-pink-100">
        Trade <span className="text-[#4A4A4A]">Enquiry</span>
      </h2>
      <form className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="flex flex-col gap-2">
           <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Full Name</label>
           <input type="text" className="p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#bc114a]/20" />
        </div>
        <div className="flex flex-col gap-2">
           <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Business Name</label>
           <input type="text" className="p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#bc114a]/20" />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
           <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Nature of Enquiry</label>
           <select className="p-4 bg-gray-50 rounded-2xl border-none outline-none font-bold text-gray-500">
              <option>Bulk Buying</option>
              <option>Machinery Sale</option>
              <option>Auction Participation</option>
              <option>Others</option>
           </select>
        </div>
        <textarea placeholder="Message..." className="md:col-span-2 p-6 bg-gray-50 rounded-[2rem] h-40 outline-none border-none"></textarea>
        <button className="md:col-span-2 bg-[#bc114a] text-white py-5 rounded-full font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-[#bc114a]/20 flex items-center justify-center gap-3">
          <Send size={18} /> Send Official Enquiry
        </button>
      </form>
    </div>
  </div>
);