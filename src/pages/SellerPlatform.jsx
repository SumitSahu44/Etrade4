import React from 'react';
import { AuthGate } from '../components/Auth/AuthGate';
import { Upload, Eye, Send } from 'lucide-react';

export const SellerPlatform = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <AuthGate platformName="SELLER'S PLATFORM">

        <div className="max-w-6xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Seller Registration
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Fill all details to list on Parekh e-Trade
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Official */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Authorized Official Name
              </label>
              <input
                type="text"
                placeholder="Name of Official"
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30 focus:border-[#a58c67]
                text-sm text-gray-800"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Code No.
              </label>
              <input
                type="text"
                placeholder="Official Code"
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30 focus:border-[#a58c67]
                text-sm text-gray-800"
              />
            </div>

            {/* Business */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                placeholder="Name of the Seller"
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm
                focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30"
              />
              <input
                placeholder="Name of Business"
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm
                focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30"
              />
              <input
                placeholder="Mobile No."
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm
                focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30"
              />
            </div>

            <div className="md:col-span-2">
              <input
                placeholder="Address of Business"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm
                focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30"
              />
            </div>

            <input
              placeholder="Email Id"
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm
              focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30"
            />

            <input
              placeholder="URL, if any"
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm
              focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30"
            />

            {/* Dropdown */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Textile Items to Sell
              </label>
              <select
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30 text-sm text-gray-800"
              >
                <option>Textile Raw Materials</option>
                <option>Textile Finished Products</option>
                <option>Textile Machineries</option>
                <option>Textile Spares</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <textarea
                placeholder="Description of items to Sell"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg h-32
                focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30 text-sm"
              ></textarea>
            </div>

            <input
              placeholder="Total Qty for selling"
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm
              focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30"
            />

            <input
              placeholder="Expected Rate for selling"
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm
              focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30"
            />

            {/* Upload */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Upload Documents
              </label>
              <div className="relative">
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex items-center gap-3 px-4 py-4 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-[#a58c67] transition">
                  <Upload size={18} />
                  <span className="text-sm">
                    GST / CIN / MSME documents
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex justify-end gap-4">
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-600 text-sm hover:bg-gray-100 transition">
              <Eye size={16} /> Preview
            </button>

            <button className="flex items-center gap-2 px-6 py-3 bg-[#a58c67] text-white rounded-lg text-sm hover:bg-black transition shadow">
              <Send size={16} /> Submit Listing
            </button>
          </div>

        </div>
      </AuthGate>

      {/* Terms */}
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white border border-gray-200 rounded-xl text-center">
        <h4 className="text-sm font-semibold text-gray-800 mb-3">
          Bulk Textile Seller Terms
        </h4>

        <p className="text-sm text-gray-800 font-bold leading-relaxed">
          All sellers must be verified by our authorized team before listing products.
          Incomplete business documents such as GST, MSME, or company details will lead to rejection.
          Sellers must ensure product authenticity, bulk availability, and timely communication with buyers.
        </p>
      </div>

    </div>
  );
};