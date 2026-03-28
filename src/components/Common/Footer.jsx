import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, ExternalLink, Globe, ShieldCheck } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 rounded-t-[4rem] relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#bc114a]/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#bc114a]/5 rounded-full blur-[80px] -ml-32 -mb-32"></div>

    <div className="max-w-[95%] mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-16 border-b border-white/5">

        {/* Brand & Mission */}
        <div className="space-y-8">
          <Link to="/" className="flex flex-col group">
            <h2 className="text-3xl font-extrabold er uppercase ">
              PAREKH <span className="text-[#bc114a] normal-case">e-Trade</span>
            </h2>
            <p className="text-sm font-bold tracking-[0.4em] text-gray-500">MARKET (TEXTILE)</p>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            India's premier B2B marketplace for the textile industry. Empowering manufacturers, wholesalers, and retailers through transparent digital trade solutions.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#bc114a] hover:border-[#bc114a] transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* e-Services & Platforms */}
        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#bc114a] mb-8"><span className="normal-case">e-Services</span></h4>
          <ul className="grid gap-4 text-sm font-bold text-gray-400">
            <li><Link to="/auction" className="hover:text-white transition-colors flex items-center gap-2 group"><ExternalLink size={14} className="text-[#bc114a] group-hover:scale-110 transition-transform" /> e-Auction Portal</Link></li>
            <li><Link to="/quotation" className="hover:text-white transition-colors flex items-center gap-2 group"><ExternalLink size={14} className="text-[#bc114a] group-hover:scale-110 transition-transform" /> e-Quotation</Link></li>
            <li><Link to="/tenders" className="hover:text-white transition-colors flex items-center gap-2 group"><ExternalLink size={14} className="text-[#bc114a] group-hover:scale-110 transition-transform" /> Tenders & Contracts</Link></li>
            <li><Link to="/trade-enquiry" className="hover:text-white transition-colors flex items-center gap-2 group"><ExternalLink size={14} className="text-[#bc114a] group-hover:scale-110 transition-transform" /> Trade Enquiry</Link></li>
            <li><Link to="/buyer" className="hover:text-white transition-colors">Buyer's Platform</Link></li>
            <li><Link to="/seller" className="hover:text-white transition-colors">Seller's Platform</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#bc114a] mb-8">Company</h4>
          <ul className="grid grid-cols-2 gap-4 text-sm font-bold text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/management" className="hover:text-white transition-colors">Management</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/circulars" className="hover:text-white transition-colors">Circulars</Link></li>
            <li><Link to="/media" className="hover:text-white transition-colors">Media Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/appointment" className="hover:text-white transition-colors">Appointment</Link></li>
            <li className="col-span-2 mt-2"><Link to="/terms" className="text-[#bc114a] flex items-center gap-2 hover:underline"><ShieldCheck size={16} /> e-Trade T&C</Link></li>
          </ul>
        </div>

        {/* Contact & Map Snippet */}
        <div className="space-y-8">
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#bc114a] mb-6">Headquarters</h4>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <MapPin className="text-[#bc114a] shrink-0" size={18} />
                <p className="text-sm font-medium text-gray-400 leading-relaxed uppercase">Hyderabad, Telangana <br /> 500001, India</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-[#bc114a] shrink-0" size={18} />
                <p className="text-sm font-medium text-gray-400 transition-colors hover:text-white cursor-pointer">e-trade@parekhtrade.com</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-20 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
              <Globe size={20} className="text-[#bc114a] mb-2" />
              <span className="text-[9px] font-extrabold uppercase er">India Map</span>
            </div>
            <div className="h-20 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
              <Phone size={20} className="text-[#bc114a] mb-2" />
              <span className="text-[9px] font-extrabold uppercase er">Live Chat</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8">
        {/* <div className="flex items-center gap-6">
           <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Google_Maps_icon_%282020%29.svg" className="w-8 h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" alt="Google Maps" />
           <p className="text-sm font-extrabold text-gray-500 uppercase tracking-wider">
             SEO Friendly | All Browser Support | Mobile Responsive
           </p>
        </div> */}
        <div className="text-sm font-bold text-gray-600 uppercase ">
          © 2026 PAREKH <span className="normal-case">e-Trade</span> MARKET (TEXTILE). ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  </footer>
);