import React from 'react';

export const News = ({ title }) => {
  const items = [1, 2, 3]; // Dummy data
  return (
    <div className="min-h-screen py-20 px-6 max-w-[95%] mx-auto">
      <h2 className="text-3xl font-black text-[#4A4A4A] uppercase  mb-10 border-l-8 border-[#bc114a] pl-6">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map(i => (
          <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-pink-50 shadow-sm hover:shadow-2xl transition-all group">
            <div className="h-48 bg-gray-100 overflow-hidden">
               <img src={`https://images.unsplash.com/photo-1701964619775-b18422290cf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGV4dGlsZSUyMGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="news" />
            </div>
            <div className="p-8">
              <span className="text-[10px] font-bold text-[#4A4A4A] uppercase tracking-widest">March 2026</span>
              <h4 className="text-lg font-bold text-[#4A4A4A] mt-2 leading-tight">Latest Trends in Industrial Textile Machineries</h4>
              <p className="text-sm text-gray-400 mt-4 line-clamp-2">Exploring how Parekh e-Trade is revolutionizing the supply chain...</p>
              <button className="mt-6 text-[#4A4A4A] font-black text-[10px] uppercase tracking-widest border-b-2 border-[#bc114a]">Read Full</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};