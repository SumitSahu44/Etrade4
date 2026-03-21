import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-[#4A4A4A] text-white pt-20 pb-10 rounded-t-[4rem]">
    <div className="max-w-[95%] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
      {/* Brand */}
      <div>
        <h2 className="text-2xl font-black tracking-tighter">PAREKH <span className="text-[#4A4A4A]">e-TRADE</span></h2>
        <p className="mt-6 text-gray-400 text-sm leading-relaxed">
          Authorized B2B marketplace for India's textile industry. Quality, trust, and transparency in every trade.
        </p>
        <div className="flex gap-4 mt-8">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#4A4A4A] transition-all">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#4A4A4A] mb-8">Navigation</h4>
        <ul className="space-y-4 text-sm font-medium text-gray-300">
          <li><a href="#" className="hover:text-white transition-colors">Career Page</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Tenders & Contracts</a></li>
          <li><a href="#" className="hover:text-white transition-colors">e-Auction Portal</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Circulars & News</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#4A4A4A] mb-8">Contact Us</h4>
        <div className="space-y-6">
          <div className="flex gap-4">
            <MapPin className="text-[#4A4A4A]" size={20} />
            <p className="text-sm text-gray-300">Hyderabad, Telangana - 500001, India</p>
          </div>
          <div className="flex gap-4">
            <Mail className="text-[#4A4A4A]" size={20} />
            <p className="text-sm text-gray-300">e-trade@parekhtrade.com</p>
          </div>
        </div>
      </div>

      {/* Mini Google Map Placeholder */}
      <div className="rounded-[2rem] overflow-hidden h-48 border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d78.2679590865715!3d17.41229980164243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78322b79b0!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000"
          className="w-full h-full border-none"
        ></iframe>
      </div>
    </div>
    
    <div className="text-center mt-20 pt-10 border-t border-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
      © 2026 Parekh e-Trade Market (Textile). All Rights Reserved.
    </div>
  </footer>
);