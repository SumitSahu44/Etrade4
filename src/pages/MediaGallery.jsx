import React from 'react';
import { ProductGrid } from '../components/Home/ProductGrid';

export const MediaGallery = () => (
  <div className="min-h-screen pt-10">
    <div className="max-w-[95%] mx-auto px-6 py-16 bg-[#4A4A4A] rounded-[3.5rem] text-white text-center mb-10">
      <h1 className="text-5xl font-black uppercase tracking-tighter">Media <span className="text-[#fff]">Gallery</span></h1>
      <p className="text-gray-400 mt-4 font-bold uppercase tracking-widest text-[10px]">Industrial Photos & Site Visits</p>
    </div>
    
    {/* Reusing ProductGrid for Gallery look */}
    <ProductGrid />
  </div>
);