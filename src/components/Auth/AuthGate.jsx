import React, { useState } from "react";
import { Lock, ShieldCheck } from "lucide-react";

export const AuthGate = ({ children, platformName }) => {
  const [code, setCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (code.toUpperCase() === "PAREKH2026") {
      setIsVerified(true);
      setError("");
    } else {
      setError("Invalid Authorization Code. Please contact Official.");
    }
  };

  if (isVerified) return children;

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4"
      style={{
        backgroundColor: "#2f241d",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/fabric-of-squares.png")',
      }}
    >
      {/* CARD */}
      <div className="max-w-md w-full bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg p-10 shadow-xl text-center">

        {/* ICON */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#a58c67]/10 border border-[#a58c67]/20">
          <Lock className="text-[#a58c67]" size={26} />
        </div>

        {/* TITLE */}
        <h2 className="text-xl font-bold text-gray-800 uppercase">
          {platformName}
        </h2>

        <p className="text-gray-500 text-sm mt-2 mb-6">
          Enter authorization code to access the platform
        </p>

        {/* INPUT */}
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="ENTER CODE: PAREKH2026"
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-center font-semibold tracking-wider outline-none focus:ring-2 focus:ring-[#a58c67]"
        />

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-xs mt-3 font-semibold">
            {error}
          </p>
        )}

        {/* BUTTON */}
        <button
          onClick={handleVerify}
          className="w-full mt-5 bg-[#a58c67] text-white py-3 rounded-md font-semibold hover:bg-[#8c7354] transition flex items-center justify-center gap-2"
        >
          <ShieldCheck size={16} />
          Verify & Enter
        </button>

        {/* FOOTER */}
        <p className="mt-6 text-xs text-gray-500 uppercase tracking-wider">
          Parekh e-Trade Security
        </p>
      </div>
    </div>
  );
};