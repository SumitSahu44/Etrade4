import React from 'react';
import { Send, User, Building2, MapPin, Hash, Phone, Mail, ChevronDown } from 'lucide-react';

export const TradeEnquiry = () => {
  const labelClass = "text-[10px] font-black text-gray-500 uppercase tracking-[0.1em] ml-2 mb-1";
  const inputClass = "p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#a58c67]/20 text-sm font-bold text-gray-700 placeholder:text-gray-500 transition-all";

  return (
    <div className="min-h-screen py-16 bg-[#FDF2F2]/50 flex items-center justify-center font-sans">
      <div className="max-w-4xl w-full mx-6 bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-pink-50 relative overflow-hidden">
        
        {/* Header Section */}
        <div className="relative z-10">
          <h2 className="text-3xl font-black text-[#4A4A4A] uppercase tracking-tighter border-b pb-6 border-pink-100 flex items-center gap-3">
            Trade <span className="text-[#a58c67]">Enquiry</span>
          </h2>
         
        </div>

        <form className="grid md:grid-cols-2 gap-6 mt-10 relative z-10">
          
          {/* Name of the Trader */}
          <div className="flex flex-col gap-1">
             <label className={labelClass}>Name of the Trader</label>
             <div className="relative flex items-center">
                <input type="text" placeholder="Full Name" className={`${inputClass} w-full`} />
                <User size={16} className="absolute right-4 text-gray-500" />
             </div>
          </div>

          {/* Business Name */}
          <div className="flex flex-col gap-1">
             <label className={labelClass}>Business Name</label>
             <div className="relative flex items-center">
                <input type="text" placeholder="Legal Enterprise Name" className={`${inputClass} w-full`} />
                <Building2 size={16} className="absolute right-4 text-gray-500" />
             </div>
          </div>

          {/* Business Address with Pin Code */}
          <div className="flex flex-col gap-1 md:col-span-2">
             <label className={labelClass}>Business Address with Pin Code</label>
             <div className="relative flex items-center">
                <input type="text" placeholder="Complete Office Address, City, State - PIN" className={`${inputClass} w-full`} />
                <MapPin size={16} className="absolute right-4 text-gray-500" />
             </div>
          </div>

          {/* GST No. */}
          <div className="flex flex-col gap-1">
             <label className={labelClass}>GST No.</label>
             <div className="relative flex items-center">
                <input type="text" placeholder="15-Digit GSTIN" className={`${inputClass} w-full`} />
                <Hash size={16} className="absolute right-4 text-gray-500" />
             </div>
          </div>

          {/* Mobile No. */}
          <div className="flex flex-col gap-1">
             <label className={labelClass}>Mobile No.</label>
             <div className="relative flex items-center">
                <input type="tel" placeholder="+91 00000-00000" className={`${inputClass} w-full`} />
                <Phone size={16} className="absolute right-4 text-gray-500" />
             </div>
          </div>

          {/* Email Id */}
          <div className="flex flex-col gap-1">
             <label className={labelClass}>Email Id</label>
             <div className="relative flex items-center">
                <input type="email" placeholder="contact@business.com" className={`${inputClass} w-full`} />
                <Mail size={16} className="absolute right-4 text-gray-500" />
             </div>
          </div>

          {/* Options (Roll-down mode) */}
          <div className="flex flex-col gap-1">
             <label className={labelClass}>Select Option</label>
             <div className="relative flex items-center">
                <select className={`${inputClass} w-full appearance-none pr-10 font-bold text-gray-500 cursor-pointer`}>
                   <option value="">Select Category</option>
                   <option>For Textile Product Sell</option>
                   <option>For Textile Product Buy</option>
                   <option>For Textile Machinery & Spare Sell</option>
                   <option>For Textile Machinery Buy</option>
                   <option>Others</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 text-gray-500 pointer-events-none" />
             </div>
          </div>

          {/* Submit Button */}
          <button className="md:col-span-2 mt-4 bg-[#a58c67] text-white py-5 rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:bg-black hover:shadow-2xl transition-all shadow-xl shadow-[#a58c67]/20 flex items-center justify-center gap-3 group">
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
            Submit Official Enquiry
          </button>

        </form>

        {/* Decorative Element */}
        <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-pink-100/30 rounded-full blur-3xl opacity-50"></div>
      </div>
    </div>
  );
};