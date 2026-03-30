import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Globe, ChevronDown, MessageSquare, Megaphone, Gavel, FileText, Briefcase, X, Image, Shield, Users, Calendar } from 'lucide-react';

const TopBar = () => (
  <div className="h-[28px] bg-[#bc114a] border-b border-pink-100 flex items-center overflow-hidden">
    <div className="animate-marquee whitespace-nowrap text-[10px] font-bold text-[#ffffff] tracking-widest">
      ✨ Parekh e-Trade Market (Textile) | 📞 CALL: +91-XXXXX-XXXXX | 🏢 OFFICE: HYDERABAD, TG | 🚀 JOIN THE NEXT <span className="underline">e-Auction</span> LIVE!
    </div>
  </div>
);

export default function Header() {
  const [isServiceOpen, setIsServiceOpen] = useState(false); // For Desktop
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // For Phone Dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'e-Auction', path: '/auction', icon: <Gavel size={14} /> },
    { name: 'e-Quotation', path: '/quotation', icon: <MessageSquare size={14} /> },
    { name: 'Tender & Contract', path: '/tenders', icon: <FileText size={14} /> },
    { name: 'Our Management', path: '/management', icon: <Users size={14} /> },
    { name: 'Visit with Appointment', path: '/appointment', icon: <Calendar size={14} /> },
    { name: 'Textile Associations', path: '/textile-map', icon: <Globe size={14} /> },
    { name: 'Circulars', path: '/circulars', icon: <Megaphone size={14} /> },
    { name: 'Blog', path: '/blog', icon: <MessageSquare size={14} /> },
    { name: 'Media Gallery', path: '/media', icon: <Image size={14} /> },
    { name: 'e-Trade T&C', path: '/terms', icon: <Shield size={14} /> },
    { name: 'Career Page', path: '/careers', icon: <Briefcase size={14} /> },
  ];

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-gray-100 shadow-sm">
      <TopBar />
      
      <nav className="relative bg-white max-w-[98%] mx-auto h-16 md:h-20 flex items-center justify-between px-3 md:px-5">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-[#bc114a] text-white font-black text-base md:text-lg shadow-md">
            P
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-[13px] md:text-base lg:text-lg font-black text-[#333] leading-none tracking-tight group-hover:text-[#bc114a] transition-colors">
              PAREKH <span className="text-[#bc114a]">e-TRADE MARKET</span> 
              <span className="text-[10px] md:text-[11px] font-medium text-gray-400 md:ml-1 block md:inline">(TEXTILE)</span>
            </h1>
            {/* ADDED SUB-TEXT HERE */}
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-0.5">
              HYDERABAD, TG
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] xl:text-[14px] font-bold text-[#4A4A4A]">
          <Link to="/" className="hover:text-[#bc114a]">Home</Link>
          <Link to="/about" className="hover:text-[#bc114a]">About Us</Link>
          <Link to="/products" className="hover:text-[#bc114a]">Products & Services</Link>
          
          <div className="relative group py-5" onMouseEnter={() => setIsServiceOpen(true)} onMouseLeave={() => setIsServiceOpen(false)}>
            <button className="flex items-center gap-1 hover:text-[#bc114a]">
              e-Services <ChevronDown size={12} className={`transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
            </button>
            {isServiceOpen && (
              <div className="absolute top-[80%] left-0 w-56 bg-white shadow-2xl rounded-xl border p-2 grid gap-1 animate-in fade-in slide-in-from-top-1">
                {services.map(s => (
                  <Link key={s.name} to={s.path} className="flex items-center gap-2 p-2 hover:bg-pink-50 rounded-lg text-xs font-semibold text-gray-600 hover:text-[#bc114a]">
                    <span className="text-[#bc114a]">{s.icon}</span> {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/buyer" className="hover:text-[#bc114a]">Buyer</Link>
          <Link to="/seller" className="hover:text-[#bc114a]">Seller</Link>
        </div>

        {/* Mobile Toggle & Action */}
        <div className="flex items-center gap-2">
          <Link to="/trade-enquiry" className="hidden sm:block bg-[#bc114a] text-white px-4 py-2 rounded-full text-[10px] font-bold">
            TRADE ENQUIRY
          </Link>
          <button className="lg:hidden p-2 text-[#bc114a] active:scale-95 transition-transform" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[92px] bg-white z-[120] flex flex-col overflow-y-auto border-t border-gray-50">
          <div className="flex flex-col p-6 gap-2 text-[14px] font-extrabold tracking-widest text-[#333]">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-3 border-b border-gray-50">Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-3 border-b border-gray-50">About Us</Link>
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="py-3 border-b border-gray-50 flex items-center gap-2">
               Products & Services
            </Link>

            <div className="border-b border-gray-50">
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full py-3 flex items-center justify-between text-[#bc114a] font-black"
              >
                <span>e-Services</span>
                <ChevronDown size={18} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileServicesOpen && (
                <div className="grid grid-cols-1 gap-2 pb-4 pl-2 animate-in slide-in-from-top-2">
                  {services.map(s => (
                    <Link key={s.name} to={s.path} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-2 px-3 text-xs font-semibold normal-case text-gray-600 active:bg-pink-50 rounded-lg">
                      <span className="text-[#bc114a] bg-pink-50 p-1.5 rounded-md">{s.icon}</span>
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/buyer" onClick={() => setIsMobileMenuOpen(false)} className="py-3 border-b border-gray-50">Buyer Portal</Link>
            <Link to="/seller" onClick={() => setIsMobileMenuOpen(false)} className="py-3 border-b border-gray-50">Seller Portal</Link>
            
            <Link to="/trade-enquiry" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#bc114a] text-white p-4 rounded-xl text-center mt-6 text-sm shadow-lg shadow-pink-100">
              TRADE ENQUIRY
            </Link>

            <div className="mt-8 text-center pb-10">
               <p className="text-[10px] text-gray-400 font-medium">© 2026 PAREKH e-TRADE MARKET</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}