import React, { useState } from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

export const AuthGate = ({ children, platformName }) => {
  const [code, setCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = () => {
    if (code.toUpperCase() === "PAREKH2026") {
      setIsVerified(true);
      setError('');
    } else {
      setError('Invalid Authorization Code. Please contact Official.');
    }
  };

  if (isVerified) return children;

  return (
    <div className="flex items-center justify-center  px-4 bg-[#FFF0F5]/30 min-h-screen">
      <div className="max-w-md w-full text-center p-12 rounded-[3rem] bg-white border border-pink-100 shadow-2xl shadow-pink-200/50">

        {/* Lock Icon Section */}
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-[#FCE7F3] shadow-sm">
          <Lock className="text-[#DB2777]" size={32} />
        </div>

        {/* Text Section */}
        <h2 className="text-2xl font-extrabold text-[#4A4A4A] mb-2  uppercase">
          {platformName}
        </h2>
        <p className="text-gray-400 text-sm mb-10 font-medium">
          Enter the Official Code to access this platform.
        </p>

        <div className="space-y-6">
          <div className="relative group">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="ENTER CODE: PAREKH2026"
              className="w-full px-6 py-5 rounded-3xl border-2 border-[#FDF2F8] focus:outline-none focus:border-[#DB2777] focus:ring-4 focus:ring-pink-50 transition-all text-center font-extrabold tracking-[0.1em] bg-[#FDF2F8]/50 text-[#4A4A4A] 
              placeholder:text-[#DB2777]/30 placeholder:font-bold placeholder:tracking-normal"
            />
          </div>

          {error && (
            <p className="text-[#E11D48] text-sm font-bold uppercase er animate-bounce">
              {error}
            </p>
          )}

          <button
            onClick={handleVerify}
            className="w-full bg-[#DB2777] text-white py-5 rounded-3xl font-extrabold text-sm  hover:bg-[#BE185D] hover:shadow-xl hover:shadow-pink-200 transition-all active:scale-95 flex items-center justify-center gap-3 uppercase"
          >
            <ShieldCheck size={18} />
            Verify & Enter
          </button>
        </div>

        <p className="mt-10 text-sm text-gray-500 font-bold uppercase tracking-wider">
          PAREKH <span className="normal-case">e-Trade</span> SECURITY
        </p>
      </div>
    </div>
  );
};