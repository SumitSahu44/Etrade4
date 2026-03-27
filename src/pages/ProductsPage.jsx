// src/pages/ProductsPage.jsx
import React from 'react';
import { ProductGrid } from '../components/Home/ProductGrid';

export const ProductsPage = () => {
  return (
    <div className="min-h-screen pt-10">
      <div className="bg-[#D48282]/5 py-20 mb-10">
        <div className="max-w-[95%] mx-auto px-6">
          <h1 className="text-6xl font-extrabold text-[#4A4A4A] er uppercase">
            Full <span className="text-[#4A4A4A]">Inventory</span>
          </h1>
          <p className="text-gray-500 max-w-xl mt-4 font-medium">
            Explore our comprehensive list of textile raw materials, machinery, and industrial spares.
            All items are verified and ready for trade.
          </p>
        </div>
      </div>

      {/* Yahan wahi grid component call ho jayega */}
      <ProductGrid />
    </div>
  );
};