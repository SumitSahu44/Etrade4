import React from 'react';
import { AuthGate } from '../components/Auth/AuthGate';
import { SellerForm } from '../components/Platform/SellerForm';

export const SellerPlatform = () => {
  return (
    <div className="min-h-screen bg-[#FFF0F5]/20 py-12">
      <div className="max-w-[95%] mx-auto text-center mb-12">
        <span className="text-[#bc114a] font-black text-xs uppercase tracking-[0.5em]">Global Selling</span>
        <h1 className="text-4xl font-black text-[#4A4A4A] mt-2 uppercase tracking-tighter">
          Seller's <span className="text-[#bc114a]">Platform</span>
        </h1>
        <div className="h-1.5 w-20 bg-[#bc114a] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <AuthGate platformName="SELLER'S PLATFORM ACCESS">
           <SellerForm />
        </AuthGate>
      </div>

      <div className="max-w-4xl mx-auto mt-16 p-8 bg-white/50 rounded-[2rem] border border-pink-100 text-center">
         <h4 className="text-[10px] font-black text-[#bc114a] uppercase tracking-widest mb-4">Seller Guidelines</h4>
         <p className="text-[11px] text-gray-400 leading-relaxed uppercase font-bold">
           All sellers must provide valid business documentation. 
           PAREKH e-TRADE reserves the right to verify all listings before they go live on the auction portal.
         </p>
      </div>
    </div>
  );
};