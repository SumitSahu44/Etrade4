import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Contact = () => (
  <div className="min-h-screen pb-20 bg-[#faf8f5]">
    <div className="max-w-[95%] mx-auto mt-10 grid lg:grid-cols-3 gap-10">
      
      {/* Contact Info Cards */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-[#a58c67] p-10 rounded-[3rem] text-white shadow-xl">
          <h3 className="text-2xl font-extrabold mb-8">Get In Touch</h3>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-white shrink-0" />
              <p className="text-sm font-medium">Hyderabad, TG, India</p>
            </div>
            <div className="flex gap-4">
              <Mail className="text-white shrink-0" />
              <p className="text-sm font-medium">e-trade@parekhtrade.com</p>
            </div>
            <div className="flex gap-4">
              <Phone className="text-white shrink-0" />
              <p className="text-sm font-medium">+91-XXXXX-XXXXX</p>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="h-64 rounded-[3rem] overflow-hidden border-4 border-white shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d78.26795906634842!3d17.412299801648086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78322b79b0!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000"
            className="w-full h-full border-0 grayscale"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Form */}
      <div className="lg:col-span-2 bg-[#f5efe7] p-12 rounded-[4rem] border border-[#e6dccf] shadow-lg">
        <h2 className="text-3xl font-extrabold text-[#4A4A4A] mb-2">
          Book an <span className="text-[#a58c67]">Appointment</span>
        </h2>

        <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-10">
          Visit our Official <span className="normal-case">e-Trade</span> Market
        </p>
        
        <form className="grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Your Name"
            className="p-5 bg-white rounded-2xl outline-none border border-transparent focus:ring-2 focus:ring-[#a58c67]/30"
          />

          <input type="email" placeholder="Email Address"
            className="p-5 bg-white rounded-2xl outline-none border border-transparent focus:ring-2 focus:ring-[#a58c67]/30"
          />

          <input type="date"
            className="p-5 bg-white rounded-2xl outline-none border focus:ring-2 focus:ring-[#a58c67]/30"
          />

          <select className="p-5 bg-white rounded-2xl outline-none font-bold text-gray-500 border focus:ring-2 focus:ring-[#a58c67]/30">
             <option>Reason for Visit</option>
             <option>Trade Query</option>
             <option>Tender Submission</option>
             <option>Machinery Inspection</option>
          </select>

          <textarea placeholder="Tell us more about your visit"
            className="md:col-span-2 p-5 bg-white rounded-3xl h-32 outline-none border focus:ring-2 focus:ring-[#a58c67]/30"
          ></textarea>

          <button className="md:col-span-2 bg-[#a58c67] text-white py-5 rounded-full font-extrabold uppercase tracking-wider hover:bg-[#8d7657] transition-all shadow-xl">
            Confirm Appointment Request
          </button>
        </form>
      </div>
    </div>
  </div>
);