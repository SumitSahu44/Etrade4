import React from 'react';
import { AuthGate } from '../components/Auth/AuthGate';
import { BuyerForm } from '../components/Platform/BuyerForm';

// Is line ko dhyan se dekho: 'export const' zaroori hai
export const BuyerPlatform = () => {
  return (
    <div className="min-h-screen bg-[#FFF0F5]/20 ">
      
      {/* AuthGate check karega official code, uske baad hi form dikhega */}
      <div className="max-auto">
        <AuthGate platformName="BUYER'S PLATFORM ACCESS">
          <BuyerForm />
        </AuthGate>
      </div>

      {/* Basic T&C Short Section */}
      <div className="max-w-4xl mx-auto mt-16 p-8 bg-white/50 rounded-[2rem] border border-pink-100 text-center">
        <h4 className="text-sm font-extrabold text-[#4A4A4A] uppercase tracking-wider mb-4"><span className="normal-case">e-Trade</span> Terms</h4>
        <p className="text-sm text-gray-800  tracking-wide font-bold">
          All buyers must be verified by our authorized official.
          Incomplete documents like GST or MSME will lead to rejection of trade inquiry.
        </p>
      </div>
    </div>
  );
};