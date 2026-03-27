import React, { useState } from 'react';
import { Upload, Eye, Send } from 'lucide-react';

export const BuyerForm = () => {
  const [formData, setFormData] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const InputGroup = ({ label, name, type = "text", placeholder }) => (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-extrabold text-gray-600 uppercase  ml-1">{label}</label>
      <input 
        name={name}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-4 bg-[#FFF0F5]/20 border border-pink-50 rounded-[1.2rem] focus:outline-none focus:ring-2 focus:ring-[#db2777]/20 focus:border-[#db2777] transition-all text-sm font-medium"
      />
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto bg-white p-10 rounded-[3rem] shadow-2xl shadow-pink-100/50 border border-pink-50">
      <div className="flex justify-between items-center mb-10 border-b border-pink-50 pb-6">
        <h2 className="text-3xl font-extrabold text-[#4A4A4A]">Buyer's <span className="text-[#4A4A4A]">Portal</span></h2>
        <span className="text-sm bg-[#4A4A4A] text-white px-4 py-1 rounded-full font-bold uppercase ">Registration Form</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InputGroup label="Authorized Official Name" name="official_name" />
        <InputGroup label="Code No." name="code_no" />
        <InputGroup label="Name of the Buyer" name="buyer_name" />
        <InputGroup label="Title of the Business" name="business_title" />
        <InputGroup label="Mobile No." name="mobile" type="tel" />
        <InputGroup label="URL (if any)" name="url" placeholder="https://..." />
        
        <div className="md:col-span-2 lg:col-span-3">
           <InputGroup label="Address of the Business" name="address" />
        </div>

        {/* Category of Business - Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-extrabold text-gray-600 uppercase  ml-1">Category of Business</label>
          <select name="category" onChange={handleChange} className="w-full p-4 bg-[#FFF0F5]/20 border border-pink-50 rounded-[1.2rem] outline-none text-sm font-bold text-[#4A4A4A]">
             <option>Proprietorship</option>
             <option>Partnership</option>
             <option>LLP</option>
             <option>Private Limited</option>
             <option>Ltd.</option>
             <option>Other</option>
          </select>
        </div>

        {/* Nature of Business - Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-extrabold text-gray-600 uppercase  ml-1">Nature of Business</label>
          <select name="nature" onChange={handleChange} className="w-full p-4 bg-[#FFF0F5]/20 border border-pink-50 rounded-[1.2rem] outline-none text-sm font-bold text-[#4A4A4A]">
             <option>Retailer</option>
             <option>Wholesaler</option>
             <option>Manufacturer</option>
          </select>
        </div>

        <InputGroup label="Membership in Chamber of Textile (if any)" name="membership" />

        {/* Upload Section */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-extrabold text-gray-600 uppercase  ml-1">Upload Documents (GST, MSME, Trade License, Labour License, LLP, CIN)</label>
          <div className="relative group">
            <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
            <div className="p-4 bg-white border-2 border-dashed border-pink-100 rounded-[1.2rem] text-center group-hover:border-[#db2777] transition-all">
               <Upload size={18} className="mx-auto text-[#4A4A4A] mb-1" />
               <span className="text-sm font-bold text-gray-600 uppercase">Choose File</span>
            </div>
          </div>
        </div>

        {/* Roll-down mode items */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-extrabold text-gray-600 uppercase  ml-1">Textile Items to Buy</label>
          <select name="items_to_buy" onChange={handleChange} className="w-full p-4 bg-[#4A4A4A] text-white rounded-[1.2rem] outline-none text-sm font-bold">
             <option>Textile Raw Materials</option>
             <option>Textile Finished Products</option>
             <option>Textile Industrial Machineries</option>
             <option>Textile Other Machineries</option>
             <option>Textile Spares</option>
          </select>
        </div>

        <div className="md:col-span-2 lg:col-span-3">
           <InputGroup label="Description of the items to buy" name="description" placeholder="Specify details, quality, etc." />
        </div>

        <InputGroup label="Required Qty" name="qty" />
        <InputGroup label="Tentative Rate" name="rate" />
        <InputGroup label="Tentative Budget" name="budget" />
      </div>

      {/* Action Buttons */}
      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        <button className="flex items-center gap-2 bg-[#FFF0F5] text-[#4A4A4A] px-10 py-4 rounded-full font-extrabold text-sm uppercase  hover:bg-[#4A4A4A] hover:text-white transition-all">
          <Eye size={16} /> Preview
        </button>
        <button className="flex items-center gap-2 bg-[#4A4A4A] text-white px-12 py-4 rounded-full font-extrabold text-sm uppercase  hover:bg-black transition-all shadow-xl shadow-gray-200">
          <Send size={16} /> Submit Form
        </button>
      </div>
    </div>
  );
};