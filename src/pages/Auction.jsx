import React from 'react';
import { Gavel, Clock, TrendingUp, ShieldCheck } from 'lucide-react';

export const Auction = () => {
  const activeAuctions = [
    { id: 'AUC-782', title: 'Vintage SULZER Loom Spares (Batch 4)', currentBid: '₹4,50,000', timeLeft: '02h 45m', bids: 12 },
    { id: 'AUC-785', title: 'Grade-A Raw Silk (200kg Lot)', currentBid: '₹12,20,000', timeLeft: '05h 10m', bids: 8 },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <section className="py-20 bg-[#4A4A4A] text-white text-center rounded-b-[4rem]">
        <div className="flex justify-center mb-4">
          <div className="bg-[#a58c67] p-4 rounded-full animate-bounce">
            <Gavel size={32} />
          </div>
        </div>
        <h1 className="text-5xl font-extrabold uppercase er ">Live <span className="text-[#fff] normal-case">e-Auction</span></h1>
        <p className="mt-4 text-gray-400 font-bold uppercase tracking-[0.4em] text-sm">Real-time Bidding for Textile Assets</p>
      </section>

      {/* Auction Grid */}
      <div className="max-w-[95%] mx-auto mt-16 grid lg:grid-cols-2 gap-10 px-4">
        {activeAuctions.map((auc) => (
          <div key={auc.id} className="bg-white rounded-[3.5rem] p-10 border border-pink-50 shadow-xl relative overflow-hidden group hover:border-[#a58c67] transition-all">
            <div className="absolute top-0 right-0 bg-[#a58c67] text-white px-8 py-2 rounded-bl-[2rem] font-extrabold text-sm uppercase tracking-wider">
              Live Bidding
            </div>

            <div className="flex flex-col h-full">
              <span className="text-sm font-extrabold text-gray-400 uppercase tracking-wider mb-2">{auc.id}</span>
              <h3 className="text-2xl font-extrabold text-[#4A4A4A] mb-8 leading-tight">{auc.title}</h3>

              <div className="grid grid-cols-3 gap-6 mb-10 border-y border-pink-50 py-8">
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase mb-1">Current Bid</p>
                  <p className="text-xl font-extrabold text-[#4A4A4A]">{auc.currentBid}</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase mb-1">Total Bids</p>
                  <p className="text-xl font-extrabold text-[#4A4A4A]">{auc.bids}</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase mb-1">Ends In</p>
                  <p className="text-xl font-extrabold text-orange-500 flex items-center gap-1"><Clock size={16} /> {auc.timeLeft}</p>
                </div>
              </div>

              <div className="mt-auto flex gap-4">
                <button className="flex-1 bg-[#4A4A4A] text-white py-4 rounded-full font-extrabold uppercase tracking-wider text-sm hover:bg-black transition-all shadow-lg">
                  Place Bid Now
                </button>
                <button className="w-16 bg-[#FDF2F2] text-[#4A4A4A] rounded-full flex items-center justify-center hover:bg-[#a58c67] hover:text-white transition-all">
                  <TrendingUp size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Safety Notice */}
      <div className="max-w-4xl mx-auto mt-20 p-8 bg-[#FDF2F2] rounded-[3rem] border border-pink-100 flex items-center gap-6">
        <ShieldCheck className="text-[#4A4A4A] shrink-0" size={40} />
        <p className="text-sm font-bold text-gray-500 leading-loose tracking-wider">
          All bidders must have a verified security deposit and valid authorized official code to participate in the live auction. Please read our <span className="text-[#4A4A4A] underline cursor-pointer">e-Trade T&C</span> before bidding.
        </p>
      </div>
    </div>
  );
};