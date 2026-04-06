import React from 'react';
import { ProductGrid } from '../components/Home/ProductGrid';

export const MediaGallery = () => (
  <div className="min-h-screen pt-10">
   <div className="max-w-[95%] mx-auto px-6 py-16 rounded-[3.5rem] text-white text-center mb-10 relative overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1601056639638-c53c50e13ead?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D" // 👉 apni image path yaha daalo
      alt="gallery background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#4A4A4A]/85"></div>

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-5xl font-extrabold uppercase">
      Media <span className="text-[#a58c67]">Gallery</span>
    </h1>

    <p className="text-gray-300 mt-4 font-bold uppercase tracking-wider text-sm">
      Industrial Photos & Site Visits
    </p>
  </div>

</div>

    {/* Reusing ProductGrid for Gallery look */}
    <ProductGrid />
  </div>
);