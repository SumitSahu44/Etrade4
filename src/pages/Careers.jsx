import React from 'react';
import { Briefcase, Mail } from 'lucide-react';

export const Careers = () => (
  <div className="min-h-screen py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <Briefcase size={48} className="mx-auto text-[#4A4A4A] mb-6" />
      <h2 className="text-4xl font-extrabold text-[#4A4A4A] uppercase ">Join Our <span className="text-[#4A4A4A]">Team</span></h2>
      <p className="mt-6 text-gray-500 font-medium">We are always looking for passionate individuals in textile technology, marketing, and logistics.</p>
      
      <div className="mt-12 p-10 bg-[#FDF2F2] rounded-[3rem] border-2 border-dashed border-pink-200">
        <h4 className="text-xl font-bold text-[#4A4A4A]">Current Openings</h4>
        <p className="text-gray-500 mt-2  text-sm">No active positions at the moment.</p>
        <hr className="my-8 border-pink-100" />
        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Drop your CV for future reference</p>
        <a href="mailto:careers@parekhtrade.com" className="inline-flex items-center gap-2 bg-[#a58c67] text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-black transition-all shadow-lg">
          <Mail size={14} /> Send Resume
        </a>
      </div>
    </div>
  </div>
);