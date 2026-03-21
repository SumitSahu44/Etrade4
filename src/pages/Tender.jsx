import React from 'react';
import { Gavel, Download, Clock, ShieldCheck } from 'lucide-react';

export const Tenders = () => {
  const list = [
    { id: 'T-2026-001', title: 'Supply of 500 Tons Raw Cotton', date: '25 March 2026', type: 'Tender' },
    { id: 'A-2026-042', title: 'E-Auction: Spinning Machinery Set', date: 'LIVE NOW', type: 'Auction' },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-[#bc114a] py-20 text-center text-white">
        <h1 className="text-5xl font-black uppercase tracking-tighter italic">e-Auction & <span className="opacity-70">Tenders</span></h1>
        <p className="mt-4 text-pink-100 font-bold uppercase tracking-widest text-xs">Official Bidding Portal</p>
      </div>

      <div className="max-w-6xl mx-auto mt-[-50px] grid gap-8 px-6">
        {list.map((item) => (
          <div key={item.id} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-pink-50 flex flex-wrap justify-between items-center group hover:border-[#bc114a] transition-all">
            <div className="flex gap-6 items-center">
              <div className={`p-5 rounded-3xl ${item.type === 'Auction' ? 'bg-green-100 text-green-600 animate-pulse' : 'bg-pink-50 text-[#db2777]'}`}>
                {item.type === 'Auction' ? <Gavel /> : <ShieldCheck />}
              </div>
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.id}</span>
                <h3 className="text-xl font-black text-[#db2777]">{item.title}</h3>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <div className="text-right">
                <p className="text-[10px] font-bold text-gray-400 uppercase">Closing Date</p>
                <p className="font-bold text-[#db2777]">{item.date}</p>
              </div>
              <button className="bg-[#db2777] text-white p-4 rounded-2xl hover:bg-black transition-all">
                <Download size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};