import React from 'react';

export const IndiaMap = () => (
  <section className="w-[95%] mx-auto py-20 bg-white rounded-[3rem] my-10 border border-pink-50 shadow-sm">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-12">
      <div>
        <span className="text-[#db2777] font-black text-xs uppercase tracking-widest">Our Network</span>
        <h2 className="text-4xl font-black text-[#db2777] mt-2 mb-6 leading-tight">Our Textile <br /> Associates (India)</h2>
        <p className="text-gray-500 mb-8 font-medium">We are connected with over 500+ textile units across major hubs like Surat, Ahmedabad, Ludhiana, Tirupur, and Hyderabad.</p>
        
        <div className="grid grid-cols-2 gap-4">
          {['Raw Material Hubs', 'Machinery Units', 'Finishing Plants', 'Distribution Centers'].map(item => (
            <div key={item} className="p-4 bg-[#FFF0F5] rounded-2xl text-[12px] font-bold text-[#db2777] border border-pink-100">
               ✓ {item}
            </div>
          ))}
        </div>
      </div>
      
      {/* Map Image Placeholder */}
      <div className="relative group">
         <img 
           src="/images/map.png" 
           alt="India Map" 
           className="w-full transition-opacity duration-1000 p-10"
         />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-[#db2777] font-black text-xl">NETWORK MAP</p>
         </div>
      </div>
    </div>
  </section>
);