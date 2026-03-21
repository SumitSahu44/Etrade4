import React from 'react';
import { AuthGate } from '../components/Auth/AuthGate';
import { BuyerForm } from '../components/Platform/BuyerForm';

// Is line ko dhyan se dekho: 'export const' zaroori hai
export const BuyerPlatform = () => {
  return (
    <div className="min-h-screen bg-[#FFF0F5]/20 py-12">
      <div className="max-w-[95%] mx-auto text-center mb-12">
        <span className="text-[#4A4A4A] font-black text-xs uppercase tracking-[0.5em]">Secure Trading</span>
        <h1 className="text-4xl font-black text-[#4A4A4A] mt-2 uppercase tracking-tighter">
          Buyer's <span className="text-[#4A4A4A]">Platform</span>
        </h1>
        <div className="h-1.5 w-20 bg-[#4A4A4A] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* AuthGate check karega official code, uske baad hi form dikhega */}
      <div className="max-w-7xl mx-auto px-4">
        <AuthGate platformName="BUYER'S PLATFORM ACCESS">
           <BuyerForm />
        </AuthGate>
      </div>

      {/* Basic T&C Short Section */}
      <div className="max-w-4xl mx-auto mt-16 p-8 bg-white/50 rounded-[2rem] border border-pink-100 text-center">
         <h4 className="text-[10px] font-black text-[#4A4A4A] uppercase tracking-widest mb-4">e-Trade Terms</h4>
         <p className="text-[11px] text-gray-400 leading-relaxed uppercase font-bold">
           All buyers must be verified by our authorized official. 
           Incomplete documents like GST or MSME will lead to rejection of trade inquiry.
         </p>
      </div>
    </div>
  );
};