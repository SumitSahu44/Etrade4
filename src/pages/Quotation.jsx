import React from 'react';
import { FileText, Send, Info, User, Building2, MapPin, Hash, Phone, Mail, ChevronDown } from 'lucide-react';

export const Quotation = () => {
  const labelClass = "text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-2 mb-1";
  const inputClass = "p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#a58c67]/20 text-sm font-bold text-gray-700 transition-all w-full";

  return (
    <div className="min-h-screen py-16 bg-[#FDF2F2]/30 flex items-center justify-center font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side: Info */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 text-center lg:text-left">
              <span className="text-[#a58c67] font-black text-xs uppercase tracking-[0.4em]">Official e-Form</span>
              <h2 className="text-4xl font-black text-[#4A4A4A] mt-2 leading-tight uppercase">
                Request an <br />
                <span className="text-[#a58c67] normal-case italic">e-Quotation</span>
              </h2>
              <p className="mt-6 text-gray-500 text-sm leading-loose font-medium">
                Submit your requirements to receive a professional quotation for finished or raw textile products. Our trade desk processes all requests within 24 business hours.
              </p>
              
              <div className="mt-8 p-6 bg-white rounded-3xl border border-pink-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#a58c67]"></div>
                <Info className="text-[#a58c67] mb-3" size={24} />
                <p className="text-[10px] font-black text-gray-400 uppercase leading-relaxed tracking-wider">
                  Validity Note: Quotations are valid for 7 days due to market price fluctuations in the textile industry.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: e-Form */}
          <div className="lg:w-2/3 bg-white p-8 md:p-14 rounded-[3.5rem] shadow-2xl border border-pink-50 relative">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name of the Trader */}
              <div className="flex flex-col gap-1">
                <label className={labelClass}>Name of the Trader</label>
                <div className="relative flex items-center">
                  <input type="text" placeholder="Full Name" className={inputClass} />
                  <User size={16} className="absolute right-4 text-gray-300" />
                </div>
              </div>

              {/* Business Name */}
              <div className="flex flex-col gap-1">
                <label className={labelClass}>Business Name</label>
                <div className="relative flex items-center">
                  <input type="text" placeholder="Legal Firm Name" className={inputClass} />
                  <Building2 size={16} className="absolute right-4 text-gray-300" />
                </div>
              </div>

              {/* Business Address with Pin Code */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className={labelClass}>Business Address with Pin Code</label>
                <div className="relative flex items-center">
                  <input type="text" placeholder="Complete Office/Factory Address with PIN" className={inputClass} />
                  <MapPin size={16} className="absolute right-4 text-gray-300" />
                </div>
              </div>

              {/* GST No. */}
              <div className="flex flex-col gap-1">
                <label className={labelClass}>GST No.</label>
                <div className="relative flex items-center">
                  <input type="text" placeholder="15-Digit GSTIN" className={inputClass} />
                  <Hash size={16} className="absolute right-4 text-gray-300" />
                </div>
              </div>

              {/* Mobile No. */}
              <div className="flex flex-col gap-1">
                <label className={labelClass}>Mobile No.</label>
                <div className="relative flex items-center">
                  <input type="tel" placeholder="+91 00000-00000" className={inputClass} />
                  <Phone size={16} className="absolute right-4 text-gray-300" />
                </div>
              </div>

              {/* Email Id */}
              <div className="flex flex-col gap-1">
                <label className={labelClass}>Email Id</label>
                <div className="relative flex items-center">
                  <input type="email" placeholder="contact@email.com" className={inputClass} />
                  <Mail size={16} className="absolute right-4 text-gray-300" />
                </div>
              </div>

              {/* Options (Roll-down) */}
              <div className="flex flex-col gap-1">
                <label className={labelClass}>Quotation For</label>
                <div className="relative flex items-center">
                  <select className={`${inputClass} appearance-none pr-10 font-bold text-gray-500 cursor-pointer`}>
                    <option value="">Select Option</option>
                    <option>Quotation for sell our Finished Textile Products</option>
                    <option>Quotation for sell or Raw Textile Products</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Particulars of the Products */}
              <div className="md:col-span-2 flex flex-col gap-1 mt-2">
                <label className={labelClass}>Particulars of the Products</label>
                <textarea 
                  placeholder="Mention Product Name, Quality, Grade, GSM, Yarn Count, Brand, and Expected Quantity..." 
                  className="p-6 bg-gray-50 rounded-[2rem] h-44 outline-none border-none focus:ring-2 focus:ring-[#a58c67]/20 text-sm font-bold text-gray-700 transition-all shadow-inner"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="md:col-span-2 mt-4 bg-[#a58c67] text-white py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl shadow-[#a58c67]/30 flex items-center justify-center gap-3 group">
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                Submit Request for Quotation
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};