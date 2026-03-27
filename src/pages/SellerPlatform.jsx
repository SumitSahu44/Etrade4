import React from 'react';
import { AuthGate } from '../components/Auth/AuthGate';
import { Upload, Eye, Send } from 'lucide-react';

export const SellerPlatform = () => {
  return (
    <div className="py-12 bg-[#FFF0F5]/30 min-h-screen">
      <AuthGate platformName="SELLER'S PLATFORM">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-pink-100">
          
          {/* Header */}
          <div className="mb-10 border-b-2 border-pink-50 pb-6">
            <h2 className="text-3xl font-extrabold text-slate-800">
              Seller's <span className="text-[#db2777]">Registration</span>
            </h2>
            <p className="text-slate-500 font-bold mt-2">Fill all details to list on Parekh e-Trade</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Official Section */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-600 uppercase tracking-normal">Authorized Official Name</label>
              <input 
                type="text" 
                placeholder="Name of Official"
                className="p-4 bg-pink-50/50 border border-pink-100 rounded-2xl outline-none focus:border-[#db2777] text-slate-800 font-semibold placeholder:text-slate-400" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-600 uppercase tracking-normal">Code No.</label>
              <input 
                type="text" 
                placeholder="Official Code"
                className="p-4 bg-pink-50/50 border border-pink-100 rounded-2xl outline-none focus:border-[#db2777] text-slate-800 font-semibold placeholder:text-slate-400" 
              />
            </div>

            {/* Business Section */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
               <input placeholder="Name of the Seller" className="p-4 border border-pink-100 rounded-2xl text-sm font-semibold focus:border-[#db2777] outline-none placeholder:text-slate-400" />
               <input placeholder="Name of Business" className="p-4 border border-pink-100 rounded-2xl text-sm font-semibold focus:border-[#db2777] outline-none placeholder:text-slate-400" />
               <input placeholder="Mobile No." className="p-4 border border-pink-100 rounded-2xl text-sm font-semibold focus:border-[#db2777] outline-none placeholder:text-slate-400" />
            </div>

            <div className="md:col-span-2">
               <input placeholder="Address of Business" className="w-full p-4 border border-pink-100 rounded-2xl text-sm font-semibold focus:border-[#db2777] outline-none placeholder:text-slate-400" />
            </div>

            <input placeholder="Email Id" className="p-4 border border-pink-100 rounded-2xl text-sm font-semibold focus:border-[#db2777] outline-none placeholder:text-slate-400" />
            <input placeholder="URL, if any" className="p-4 border border-pink-100 rounded-2xl text-sm font-semibold focus:border-[#db2777] outline-none placeholder:text-slate-400" />

            {/* Dropdown Section */}
            <div className="md:col-span-2">
              <label className="text-sm font-bold text-slate-600 uppercase mb-2 block">Textile Items to Sell</label>
              <select className="w-full p-4 bg-slate-600 text-white rounded-2xl outline-none font-bold cursor-pointer">
                <option>Textile Raw Materials</option>
                <option>Textile Finished Products</option>
                <option>Textile Machineries</option>
                <option>Textile Spares</option>
              </select>
            </div>

            <div className="md:col-span-2">
               <textarea 
                 placeholder="Description of items to Sell" 
                 className="w-full p-4 border border-pink-100 rounded-2xl h-32 outline-none focus:border-[#db2777] font-semibold placeholder:text-slate-400"
               ></textarea>
            </div>

            <input placeholder="Total Qty for selling" className="p-4 border border-pink-100 rounded-2xl text-sm font-semibold focus:border-[#db2777] outline-none placeholder:text-slate-400" />
            <input placeholder="Expected Rate for selling" className="p-4 border border-pink-100 rounded-2xl text-sm font-semibold focus:border-[#db2777] outline-none placeholder:text-slate-400" />
            
            {/* Upload Area */}
            <div className="flex items-center gap-4 p-4 border-2 border-dashed border-pink-200 rounded-2xl bg-pink-50/30 hover:bg-pink-50 cursor-pointer transition-all">
               <Upload className="text-[#db2777]" />
               <span className="text-sm font-extrabold text-[#db2777] uppercase">Upload Documents (GST/CIN/MSME)</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
             <button className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-12 py-4 rounded-full font-extrabold uppercase text-sm hover:bg-slate-200 transition-all">
               <Eye size={16} /> Preview
             </button>
             <button className="flex items-center justify-center gap-2 bg-[#db2777] text-white px-12 py-4 rounded-full font-extrabold uppercase text-sm shadow-lg shadow-pink-200 hover:bg-[#be185d] transition-all">
               <Send size={16} /> Submit Listing
             </button>
          </div>
        </div>
      </AuthGate>
    </div>
  );
};