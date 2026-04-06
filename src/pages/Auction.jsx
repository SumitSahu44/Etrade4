import React from 'react';
import { Gavel, User, Building2, MapPin, Hash, Phone, Mail, Upload, AlertCircle, ShieldCheck } from 'lucide-react';

export const Auction = () => {
  const labelClass = "text-[10px] font-black text-gray-500 uppercase tracking-[0.1em] ml-2 mb-1";
  const inputClass = "p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#a58c67]/20 text-sm font-bold text-gray-800 transition-all w-full";

  return (
    <div className="min-h-screen pb-20 bg-white font-sans">
      {/* Header */}
    <section className="py-20 text-white text-center rounded-b-[4rem] relative overflow-hidden shadow-2xl">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/images/auction.png" // 👉 apni image ka path yaha daalo
      alt="auction background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#4A4A4A]/80"></div>

  {/* Content */}
  <div className="relative z-10">
    <div className="flex justify-center mb-4">
      <div className="bg-[#a58c67] p-4 rounded-full shadow-xl">
        <Gavel size={32} />
      </div>
    </div>

    <h1 className="text-5xl font-extrabold uppercase tracking-tighter">
      Live <span className="text-[#a58c67] normal-case">e-Auction</span>
    </h1>
    
    {/* Alert */}
    <div className="mt-8 inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-6 py-3 rounded-2xl backdrop-blur-md">
      <AlertCircle size={18} className="text-red-400" />
      <span className="text-sm font-black text-red-400 tracking-widest">
        At present, No e-Auction published
      </span>
    </div>
  </div>

  {/* Glow Effect */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

</section>

      <div className="max-w-6xl mx-auto px-6 mt-16">
        
        {/* --- E-AUCTION REGISTRATION FORM --- */}
        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-pink-50 relative">
          <div className="mb-10 border-b border-pink-100 pb-8">
            <h2 className="text-3xl font-black text-[#4A4A4A]">
              Auction <span className="text-[#a58c67]">Participation</span>
            </h2>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2 text-gray-500">
              Register now to get notified for upcoming textile auctions
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Participant Name */}
            <div className="flex flex-col gap-1">
              <label className={labelClass}>Name of the Participant</label>
              <div className="relative flex items-center">
                <input type="text" placeholder="Full Name" className={inputClass} />
                <User size={16} className="absolute right-4 text-gray-300" />
              </div>
            </div>

            {/* Business Name */}
            <div className="flex flex-col gap-1">
              <label className={labelClass}>Legal Name of the Business</label>
              <div className="relative flex items-center">
                <input type="text" placeholder="Company Name" className={inputClass} />
                <Building2 size={16} className="absolute right-4 text-gray-300" />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1 md:col-span-2">
              <label className={labelClass}>Business Address with Pin code</label>
              <div className="relative flex items-center">
                <input type="text" placeholder="Complete Address, City, State - PIN" className={inputClass} />
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

            {/* Mobile */}
            <div className="flex flex-col gap-1">
              <label className={labelClass}>Mobile No.</label>
              <div className="relative flex items-center">
                <input type="tel" placeholder="+91 00000-00000" className={inputClass} />
                <Phone size={16} className="absolute right-4 text-gray-300" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className={labelClass}>Email Id</label>
              <div className="relative flex items-center">
                <input type="email" placeholder="contact@business.com" className={inputClass} />
                <Mail size={16} className="absolute right-4 text-gray-300" />
              </div>
            </div>

            {/* File Upload */}
            <div className="flex flex-col gap-1">
              <label className={labelClass}>Upload GST Certificate</label>
              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer border-2 border-dashed border-gray-200 hover:bg-gray-100 transition-all">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                  <Upload size={16} /> Choose File (PDF/JPG)
                </span>
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Submit Button */}
            <button className="md:col-span-2 mt-4 bg-[#a58c67] text-white py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl shadow-[#a58c67]/20 flex items-center justify-center gap-3 group">
               Submit Registration Data
            </button>
          </form>
        </div>

        {/* Safety & Info */}
        <div className="max-w-4xl mx-auto mt-20 p-8 bg-[#FDF2F2] rounded-[3rem] border border-pink-100 flex items-center gap-6">
          <ShieldCheck className="text-[#4A4A4A] shrink-0" size={32} />
          <p className="text-[11px] font-bold text-gray-500 leading-loose tracking-widest">
            Registration is mandatory for all live auctions. Once an auction is published, verified participants will receive a notification and official access code. 
            <span className="text-[#4A4A4A] font-black ml-2">Parekh e-Trade Hub • Official Portal</span>
          </p>
        </div>
      </div>
    </div>
  );
};