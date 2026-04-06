import React from 'react';
import { motion } from 'framer-motion';

export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Pure Organic Cotton",
      cat: "Raw Materials",
      img: "https://plus.unsplash.com/premium_photo-1664299852788-5a24db0d7e05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D" // cotton bolls
    },
    {
      id: 2,
      title: "Industrial Weaving Loom",
      cat: "Machineries",
      img: "https://images.unsplash.com/photo-1562869929-bda0650edb1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRleHRpbGV8ZW58MHx8MHx8fDA%3D" // weaving loom machine
    },
    {
      id: 3,
      title: "Silk Yarn Spools",
      cat: "Raw Materials",
      img: "https://plus.unsplash.com/premium_photo-1674747086849-3ec94d641ded?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRleHRpbGV8ZW58MHx8MHx8fDA%3D" // silk thread spools
    },
    {
      id: 4,
      title: "Denim Fabric Rolls",
      cat: "Finished Products",
      img: "https://images.unsplash.com/photo-1611331347660-9a4e98549588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVuaW0lMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D" // denim rolls
    },
    {
      id: 5,
      title: "Precision Gear Spares",
      cat: "Industrial Spares",
      img: "https://images.unsplash.com/photo-1676696706907-0e04665b80bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lsayUyMGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D" // industrial gears
    },
    {
      id: 6,
      title: "Dyed Wool Fiber",
      cat: "Raw Materials",
      img: "https://images.unsplash.com/photo-1723856040381-30fb0a8ce7fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmliZXIlMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D" // dyed wool yarn
    },
    {
      id: 7,
      title: "Knitting Machine Unit",
      cat: "Machineries",
      img: "https://images.unsplash.com/photo-1622532470022-24107cac5ef3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFicmljJTIwdGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D" // knitting machine
    },
    {
      id: 8,
      title: "Synthetic Polyester",
      cat: "Raw Materials",
      img: "https://plus.unsplash.com/premium_photo-1673429738990-2b85964723ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhYnJpYyUyMHRleHRpbGV8ZW58MHx8MHx8fDA%3D" // polyester fibers
    },
    {
      id: 9,
      title: "Embroidered Textiles",
      cat: "Finished Products",
      img: "https://images.unsplash.com/photo-1702634387572-9ae087ab828d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhYnJpYyUyMHRleHRpbGV8ZW58MHx8MHx8fDA%3D" // embroidery work
    },
    {
      id: 10,
      title: "Fabric Quality Testing",
      cat: "Services",
      img: "https://plus.unsplash.com/premium_photo-1764094353763-e002ed66b050?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGluZW4lMjBidWxrfGVufDB8fDB8fHww" // lab textile testing
    },
    {
      id: 11,
      title: "Textile Spindles",
      cat: "Industrial Spares",
      img: "https://plus.unsplash.com/premium_photo-1701157946903-57c2821d71b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGluZW58ZW58MHx8MHx8fDA%3D" // spinning spindles
    },
    {
      id: 12,
      title: "Wholesale Linen",
      cat: "Finished Products",
      img: "https://images.unsplash.com/photo-1701964619706-1c5b4aae1f85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhYnJpYyUyMHRleHRpbGV8ZW58MHx8MHx8fDA%3D" // linen fabric
    }
  ];

  return (
  <section className="w-[95%] mx-auto py-12">
    
    {/* Header */}
    <div className="mb-8 px-2 flex items-center justify-between">
      <div>
        <span className="text-gray-500 font-semibold text-xs uppercase tracking-wider block mb-1">
          Available Inventory
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Market Gallery
        </h2>
      </div>
      <div className="hidden md:block h-px flex-1 bg-gray-200 ml-6"></div>
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition"
        >
          {/* Image */}
          <div className="w-full h-[220px] overflow-hidden">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <span className="text-xs text-gray-500 uppercase font-medium">
              {p.cat}
            </span>

            <h4 className="text-gray-800 font-semibold text-sm mt-1">
              {p.title}
            </h4>

            <p className="text-gray-500 text-xs mt-1">
              Ready for e-Auction
            </p>

            {/* Action */}
            <div className="mt-3">
              <button className="text-sm font-medium text-[#a58c67] hover:underline">
                View Details →
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
};