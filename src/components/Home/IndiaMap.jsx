import React from 'react';
import Map from './Map';
export const IndiaMap = () => {

  const locations = [
    "Ahmedabad",
    "Surat",
    "Raipur",
    "Kolkata",
    "Hyderabad",
    "Bangalore",
    "Chennai"
  ];

  const workPoints = [
    "Fabrics Manufacturing",
    "Silk Production",
    "Rayon Processing",
    "Linen Supply",
    "e-Trade Marketplace",
    "Textile Chamber",
    "Polyfabrics Units"
  ];

  return (
    <section className="w-[95%] mx-auto py-20 bg-white rounded-[3rem] my-10 border border-pink-50 shadow-sm">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12">
        
        {/* LEFT SIDE */}
        <div>
          <span className="text-[#4A4A4A] font-black text-xs uppercase tracking-widest">
            Our Network
          </span>

          <h2 className="text-4xl font-black text-[#4A4A4A] mt-2 mb-6 leading-tight">
            Our Textile <br /> Associates (India)
          </h2>

          {/* 👉 Updated Description */}
          <p className="text-gray-500 mb-8 font-medium">
            We are connected with over 500+ textile units across major hubs like{" "}
            <span className="font-semibold text-[#bc114a]">
              {locations.join(", ")}
            </span>.
          </p>
          
          {/* 👉 Work Points */}
          <div className="grid grid-cols-2 gap-4">
            {workPoints.map((item, index) => (
              <div 
                key={index} 
                className="p-4 bg-[#FFF0F5] rounded-2xl text-[12px] font-bold text-[#4A4A4A] border border-pink-100 hover:bg-[#ffe4ec] transition"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
        
        {/* RIGHT SIDE - MAP COMPONENT */}
        <div className="relative flex justify-center items-center">

          {/* 👉 Bigger Map Container */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Map />
          </div>

          {/* Optional Center Label */}
        

        </div>

      </div>
    </section>
  );
};