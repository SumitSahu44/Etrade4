import React from 'react';
import { AuthGate } from '../components/Auth/AuthGate';
import { Upload, Send } from 'lucide-react';

export const SellerPlatform = () => {
  return (
    <div className="py-16 bg-[#FFF0F5]/20 min-h-screen">
      <AuthGate platformName="SELLER'S PLATFORM">
        <div className="max-w-5xl mx-auto bg-white p-10 rounded-[3rem] shadow-xl border border-pink-50">
          <h2 className="text-3xl font-black text-[#db2777] mb-8 border-b border-pink-50 pb-4">Seller's <span className="text-[#db2777]">Registration</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Seller Details Section */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black text-gray-400 uppercase">Authorized Official Name</label>
              <input type="text" className="p-4 bg-[#FFF0F5]/30 border border-pink-100 rounded-2xl outline-none focus:border-[#db2777]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black text-gray-400 uppercase">Code No.</label>
              <input type="text" className="p-4 bg-[#FFF0F5]/30 border border-pink-100 rounded-2xl outline-none focus:border-[#db2777]" />
            </div>

            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
               <input placeholder="Seller's Name" className="p-4 border rounded-2xl text-sm" />
               <input placeholder="Business Name" className="p-4 border rounded-2xl text-sm" />
               <input placeholder="Mobile No." className="p-4 border rounded-2xl text-sm" />
            </div>

            {/* Textile Items to Sell - Roll down */}
            <div className="md:col-span-2">
              <label className="text-[10px] font-black text-gray-400 uppercase mb-2 block">Textile Items to Sell</label>
              <select className="w-full p-4 bg-[#db2777] text-white rounded-2xl outline-none font-bold">
                <option>Textile Raw Materials</option>
                <option>Textile Finished Products</option>
                <option>Textile Machineries</option>
                <option>Textile Spares</option>
              </select>
            </div>

            <div className="md:col-span-2">
               <textarea placeholder="Description of items to sell" className="w-full p-4 border rounded-2xl h-32 outline-none focus:border-pink-200"></textarea>
            </div>

            <input placeholder="Total Qty for selling" className="p-4 border rounded-2xl text-sm" />
            <input placeholder="Expected Rate for selling" className="p-4 border rounded-2xl text-sm" />
            
            <div className="flex items-center gap-4 p-4 border-2 border-dashed border-pink-100 rounded-2xl bg-white">
               <Upload className="text-[#db2777]" />
               <span className="text-xs font-bold text-gray-400 uppercase">Upload GST/CIN/License</span>
            </div>
          </div>

          <div className="mt-12 flex gap-4 justify-center">
             <button className="bg-[#db2777] text-white px-12 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black transition-all">Submit Listing</button>
          </div>
        </div>
      </AuthGate>
    </div>
  );
};