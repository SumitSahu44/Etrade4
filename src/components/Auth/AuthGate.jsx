import React, { useState } from 'react';
import { Lock } from 'lucide-react';

export const AuthGate = ({ children, platformName }) => {
  const [code, setCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = () => {
    // Authorized Code check
    if (code === "PAREKH2026") { 
      setIsVerified(true);
      setError('');
    } else {
      setError('Invalid Authorization Code. Please contact Official.');
    }
  };

  if (isVerified) return children;

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center p-10 rounded-[2.5rem] bg-[#FFF0F5]/50 border border-pink-100 backdrop-blur-sm shadow-xl shadow-pink-50">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-pink-50">
          <Lock className="text-[#db2777]" size={28} />
        </div>
        <h2 className="text-2xl font-black text-[#db2777] mb-2">{platformName}</h2>
        <p className="text-gray-500 text-sm mb-8">Enter the Official Code to access this platform.</p>
        
        <div className="space-y-4">
          <input 
            type="password" 
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="ENTER CODE"
            className="w-full px-6 py-4 rounded-2xl border border-white focus:outline-none focus:border-[#db2777] transition-all text-center tracking-[0.5em] font-bold bg-white/80 shadow-inner"
          />
          {error && <p className="text-red-400 text-xs font-semibold">{error}</p>}
          <button 
            onClick={handleVerify}
            className="w-full bg-[#db2777] text-white py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-lg active:scale-95"
          >
            VERIFY & ENTER
          </button>
        </div>
      </div>
    </div>
  );
};