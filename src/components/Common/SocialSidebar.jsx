// src/components/Common/SocialSidebar.jsx
import React from 'react';
import { Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';

export const SocialSidebar = () => (
  <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-4">
    {[
      { Icon: Facebook, color: 'hover:bg-blue-600' },
      { Icon: Twitter, color: 'hover:bg-sky-500' },
      { Icon: Linkedin, color: 'hover:bg-blue-700' },
    ].map((item, i) => (
      <a key={i} href="#" className={`w-10 h-10 bg-[#a58c67] shadow-xl rounded-full flex items-center justify-center text-[#fff] hover:text-white ${item.color} transition-all border border-pink-50`}>
        <item.Icon size={18} />
      </a>
    ))}
  </div>
);