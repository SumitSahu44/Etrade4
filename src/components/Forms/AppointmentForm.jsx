import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Send, Camera } from 'lucide-react';

export const AppointmentForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const InputGroup = ({ label, name, type = "text", placeholder, icon: Icon }) => (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-extrabold text-gray-600 uppercase  ml-1">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a58c67]">
          {Icon && <Icon size={16} />}
        </div>
        <input
          name={name}
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full p-4 pl-12 bg-[#FFF0F5]/20 border border-pink-50 rounded-[1.2rem] focus:outline-none focus:ring-2 focus:ring-[#a58c67]/0 focus:border-[#a58c67] transition-all text-sm font-medium"
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-[3rem] shadow-2xl shadow-pink-100/50 border border-pink-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFF0F5]/30 rounded-full blur-3xl -mr-32 -mt-32"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-pink-50 pb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-[#4A4A4A]">Visit with <span className="text-[#a58c67]">Appointment</span></h2>
          <p className="text-gray-600 text-sm font-bold uppercase mt-1 tracking-wider">Schedule your official visit</p>
        </div>
        <div className="bg-[#FFF0F5] p-4 rounded-2xl border border-pink-100">
          <Calendar className="text-[#a58c67]" size={32} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <InputGroup label="Full Name" name="name" placeholder="John Doe" icon={User} />
        <InputGroup label="Company Name" name="company" placeholder="Textile Mills Ltd." icon={Camera} />
        <InputGroup label="Mobile No." name="mobile" type="tel" placeholder="+91 XXXX-XXX-XXX" icon={Phone} />
        <InputGroup label="Email Address" name="email" type="email" placeholder="john@example.com" icon={Mail} />

        <InputGroup label="Preferred Date" name="date" type="date" icon={Calendar} />
        <InputGroup label="Preferred Time" name="time" type="time" icon={Clock} />

        <div className="md:col-span-2">
          <label className="text-sm font-extrabold text-gray-600 uppercase  ml-1 mb-2 block">Purpose of Visit</label>
          <textarea
            name="purpose"
            onChange={handleChange}
            placeholder="Please specify the reason for your visit (e.g., Trade discussion, Facility inspection, etc.)"
            className="w-full p-4 bg-[#FFF0F5]/20 border border-pink-50 rounded-[1.2rem] focus:outline-none focus:ring-2 focus:ring-[#a58c67]/20 focus:border-[#a58c67] transition-all text-sm font-medium h-32"
          ></textarea>
        </div>
      </div>

      <div className="mt-12 flex justify-center relative z-10">
        <button className="flex items-center gap-3 bg-[#a58c67] text-white px-16 py-5 rounded-full font-extrabold text-sm uppercase  hover:bg-black transition-all shadow-xl shadow-[#a58c67]/20 group">
          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};
