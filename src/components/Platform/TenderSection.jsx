// src/components/Platform/TenderSection.jsx
import React from 'react';
import { Gavel, FileCheck, Clock } from 'lucide-react';

export const TenderSection = () => {
  const tenders = [
    { id: 'TND-99', title: 'Supply of Raw Cotton (500 Tons)', status: 'Open', end: '25 March 2026' },
    { id: 'AUC-102', title: 'e-Auction: Used Spinning Machines', status: 'Live', end: 'Running' },
  ];

  return (
    <section className="w-[95%] mx-auto py-20 grid lg:grid-cols-2 gap-10">
      <div className="bg-[#4A4A4A] p-12 rounded-[3.5rem] text-white relative overflow-hidden">
        <Gavel className="absolute -right-10 -bottom-10 text-white/5" size={200} />
        <h3 className="text-3xl font-extrabold mb-8  uppercase er"><span className="normal-case">e-Auction</span> <span className="text-[#4A4A4A]">Portal</span></h3>
        <div className="space-y-4">
          {tenders.map(t => (
            <div key={t.id} className="bg-white/5 p-6 rounded-3xl border border-white/10 flex justify-between items-center group hover:bg-[#D48282]/20 transition-all cursor-pointer">
              <div>
                <span className="text-sm font-extrabold text-[#4A4A4A] uppercase tracking-wider">{t.id}</span>
                <p className="font-bold text-lg">{t.title}</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-sm font-extrabold uppercase ${t.status === 'Live' ? 'bg-green-500 animate-pulse' : 'bg-[#D48282]'}`}>{t.status}</span>
                <p className="text-sm text-gray-400 mt-2 flex items-center gap-1 justify-end"><Clock size={10} /> {t.end}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FDF2F2] p-12 rounded-[3.5rem] border border-pink-100 flex flex-col justify-center">
        <FileCheck className="text-[#4A4A4A] mb-6" size={48} />
        <h3 className="text-3xl font-extrabold text-[#4A4A4A] mb-4">Tender & <span className="text-[#4A4A4A]">Contracts</span></h3>
        <p className="text-gray-500 font-medium leading-relaxed mb-8">
          Download authorized tender documents and submit your bids online.
          All contracts are governed by Parekh e-Trade T&C.
        </p>
        <button className="bg-[#D48282] text-white px-10 py-4 rounded-full font-extrabold text-sm uppercase tracking-wider hover:bg-[#4A4A4A] transition-all self-start shadow-xl shadow-pink-100">
          View All Tenders
        </button>
      </div>
    </section>
  );
};