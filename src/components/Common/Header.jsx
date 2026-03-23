import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Globe, ChevronDown, MessageSquare, Gavel, FileText, Briefcase, X, Image, Shield, Users, Calendar } from 'lucide-react';

const TopBar = () => (
  <div className="h-[30px] bg-[#bc114a] border-b border-pink-100 flex items-center overflow-hidden">
    <div className="animate-marquee whitespace-nowrap text-[12px] font-black text-[#ffffff] uppercase tracking-widest">
      ✨ Parekh e-Trade Market (Textile) | 📞 CALL: +91-XXXXX-XXXXX | 🏢 OFFICE: HYDERABAD, TG | 🚀 JOIN THE NEXT E-AUCTION LIVE!
    </div>
  </div>
);

export default function Header() {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'e-Auction', path: '/auction', icon: <Gavel size={14}/> },
    { name: 'e-Quotation', path: '/quotation', icon: <MessageSquare size={14}/> },
    { name: 'Tender & Contract', path: '/tenders', icon: <FileText size={14}/> },
    { name: 'Our Management', path: '/management', icon: <Users size={14}/> },
    { name: 'Visit with Appointment', path: '/appointment', icon: <Calendar size={14}/> },
    { name: 'Circulars', path: '/circulars', icon: <Globe size={14}/> },
    { name: 'Blog', path: '/blog', icon: <MessageSquare size={14}/> },
    { name: 'Media Gallery', path: '/media', icon: <Image size={14}/> },
    { name: 'e-Trade T&C', path: '/terms', icon: <Shield size={14}/> },
    { name: 'Career Page', path: '/careers', icon: <Briefcase size={14}/> },
  ];

  return (
    <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-pink-50">
      <TopBar />
      <nav className="max-w-[95%] mx-auto h-20 flex items-center justify-between px-6">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col group">
          <h1 className="text-2xl font-black text-[#4A4A4A] leading-none group-hover:text-[#bc114a] transition-colors uppercase ">
            PAREKH <span className="text-[#bc114a] group-hover:text-[#4A4A4A]">e-TRADE</span>
          </h1>
          <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400">MARKET (TEXTILE)</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase text-[#4A4A4A] tracking-wider">
          <Link to="/" className="hover:text-[#bc114a] transition-all">Home</Link>
          <Link to="/about" className="hover:text-[#bc114a] transition-all">About Us</Link>
          <Link to="/products" className="hover:text-[#bc114a] transition-all whitespace-nowrap">Products & Services</Link>
          
          {/* Dropdown for e-Services */}
          <div className="relative group py-5" onMouseEnter={() => setIsServiceOpen(true)} onMouseLeave={() => setIsServiceOpen(false)}>
            <button className="flex items-center gap-1 hover:text-[#bc114a] transition-all uppercase">
              e-Services <ChevronDown size={14} className={`transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServiceOpen && (
              <div className="absolute top-full -left-10 w-56 bg-white shadow-2xl rounded-2xl border border-pink-50 p-4 grid gap-2 animate-in fade-in slide-in-from-top-2">
                {services.map((item) => (
                  <Link key={item.name} to={item.path} className="flex items-center gap-3 p-3 hover:bg-[#FDF2F2] rounded-xl transition-all text-gray-600 hover:text-[#bc114a]">
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/buyer" className="hover:text-[#bc114a] transition-all">Buyer Portal</Link>
          <Link to="/seller" className="hover:text-[#bc114a] transition-all">Seller Portal</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/trade-enquiry" className="hidden md:flex items-center gap-2 bg-[#bc114a] text-white px-6 py-3 rounded-full text-[10px] font-black tracking-widest hover:bg-black transition-all shadow-xl shadow-[#bc114a]/20">
            TRADE ENQUIRY
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-[#4A4A4A]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-2xl p-6 flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-[#4A4A4A]">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
          <div className="h-px bg-gray-100 my-2" />
          {services.map(s => (
            <Link key={s.name} to={s.path} onClick={() => setIsMobileMenuOpen(false)} className="text-[#bc114a] text-xs">
              {s.name}
            </Link>
          ))}
          <Link to="/trade-enquiry" className="bg-[#bc114a] text-white p-4 rounded-xl text-center mt-4">Trade Enquiry</Link>
        </div>
      )}
    </header>
  );
}