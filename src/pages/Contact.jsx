import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export const Contact = () => (
  <div className="min-h-screen pb-20">
    <div className="max-w-[95%] mx-auto mt-10 grid lg:grid-cols-3 gap-10">
      
      {/* Contact Info Cards */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-[#4A4A4A] p-10 rounded-[3rem] text-white">
          <h3 className="text-2xl font-black mb-8 text-[#4A4A4A]">Get In Touch</h3>
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-[#4A4A4A] shrink-0" />
              <p className="text-sm font-medium">Hyderabad, Telangana - 500001, India</p>
            </div>
            <div className="flex gap-4">
              <Mail className="text-[#4A4A4A] shrink-0" />
              <p className="text-sm font-medium">e-trade@parekhtrade.com</p>
            </div>
            <div className="flex gap-4">
              <Phone className="text-[#4A4A4A] shrink-0" />
              <p className="text-sm font-medium">+91-XXXXX-XXXXX</p>
            </div>
          </div>
        </div>
        
        {/* Simple Google Map Integration */}
        <div className="h-64 bg-gray-200 rounded-[3rem] overflow-hidden grayscale border-4 border-white shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d78.26795906634842!3d17.412299801648086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78322b79b0!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Appointment e-Form */}
      <div className="lg:col-span-2 bg-[#FDF2F2] p-12 rounded-[4rem] border border-pink-100">
        <h2 className="text-3xl font-black text-[#4A4A4A] mb-2">Book an <span className="text-[#4A4A4A]">Appointment</span></h2>
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-10">Visit our Official <span className="normal-case">e-Trade</span> Market</p>
        
        <form className="grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Your Name" className="p-5 bg-white rounded-2xl outline-none focus:ring-2 focus:ring-[#D48282]/20 border border-transparent" />
          <input type="email" placeholder="Email Address" className="p-5 bg-white rounded-2xl outline-none focus:ring-2 focus:ring-[#D48282]/20 border border-transparent" />
          <input type="date" className="p-5 bg-white rounded-2xl outline-none" />
          <select className="p-5 bg-white rounded-2xl outline-none font-bold text-gray-400">
             <option>Reason for Visit</option>
             <option>Trade Query</option>
             <option>Tender Submission</option>
             <option>Machinery Inspection</option>
          </select>
          <textarea placeholder="Tell us more about your visit" className="md:col-span-2 p-5 bg-white rounded-3xl h-32 outline-none"></textarea>
          <button className="md:col-span-2 bg-[#D48282] text-white py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#4A4A4A] transition-all shadow-xl shadow-pink-100">
            Confirm Appointment Request
          </button>
        </form>
      </div>
    </div>
  </div>
);