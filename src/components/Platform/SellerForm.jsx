import React, { useState } from 'react';
import { Upload, Eye, Send } from 'lucide-react';

export const SellerForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const InputGroup = ({ label, name, type = "text", placeholder }) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        name={name}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30 focus:border-[#a58c67]
        text-sm text-gray-800 transition"
      />
    </div>
  );

  const SelectGroup = ({ label, name, options }) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        name={name}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-[#a58c67]/30 focus:border-[#a58c67]
        text-sm text-gray-800"
      >
        {options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Seller Portal
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Fill the details below to register as a seller.
        </p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <InputGroup label="Authorized Official Name" name="official_name" />
        <InputGroup label="Code No." name="code_no" />
        <InputGroup label="Name of the Seller" name="seller_name" />
        <InputGroup label="Name of the Business" name="business_name" />
        <InputGroup label="Mobile No." name="mobile" type="tel" />
        <InputGroup label="Email ID" name="email" type="email" />
        <InputGroup label="URL (if any)" name="url" placeholder="https://..." />

        <div className="md:col-span-2 lg:col-span-3">
          <InputGroup label="Address of the Business" name="address" />
        </div>

        <SelectGroup
          label="Category of Business"
          name="category"
          options={["Proprietorship", "Partnership", "LLP", "Private Limited", "Ltd.", "Other"]}
        />

        <SelectGroup
          label="Nature of Business"
          name="nature"
          options={["Retailer", "Wholesaler", "Manufacturer"]}
        />

        <InputGroup
          label="Membership No. in Chamber of Textile (if any)"
          name="membership_no"
        />

        {/* Upload */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Upload Documents
          </label>
          <div className="relative">
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center px-4 py-6 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-[#a58c67] transition">
              <Upload size={18} />
              <span className="text-xs mt-1">
                GST / MSME / CIN documents
              </span>
            </div>
          </div>
        </div>

        <SelectGroup
          label="Textile Items to Sell"
          name="items_to_sell"
          options={[
            "Textile Raw Materials",
            "Textile Finished Products",
            "Textile Machineries",
            "Textile Spares",
          ]}
        />

        <div className="md:col-span-2 lg:col-span-3">
          <InputGroup
            label="Description of items to Sell"
            name="description"
            placeholder="Specify details, quality, etc."
          />
        </div>

        <InputGroup label="Total Qty for selling" name="qty" />
        <InputGroup label="Expected Rate for selling" name="rate" />
      </div>

      {/* Buttons */}
      <div className="mt-10 flex justify-end gap-4">
        <button
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-600 text-sm hover:bg-gray-100 transition"
        >
          <Eye size={16} /> Preview
        </button>

        <button
          className="flex items-center gap-2 px-6 py-3 bg-[#a58c67] text-white rounded-lg text-sm hover:bg-black transition shadow"
        >
          <Send size={16} /> Submit
        </button>
      </div>
    </div>
  );
};