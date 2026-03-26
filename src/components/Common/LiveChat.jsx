import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-28 right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white w-80 h-[450px] rounded-[2.5rem] shadow-2xl border border-pink-50 overflow-hidden flex flex-col mb-4"
          >
            {/* Header */}
            <div className="bg-[#4A4A4A] p-6 text-white flex justify-between items-center">
              <div className="flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Support</p>
                <h3 className="font-bold">e-Trade Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 bg-[#FDF2F2]/30 overflow-y-auto text-xs space-y-4">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-pink-50 max-w-[80%]">
                Hello! How can I help you with Textile e-Auction today?
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-pink-50 flex gap-2">
              <input type="text" placeholder="Type message..." className="flex-1 bg-gray-50 p-3 rounded-full text-xs outline-none focus:ring-1 focus:ring-[#D48282]" />
              <button className="bg-[#D48282] text-white p-3 rounded-full shadow-lg shadow-pink-100">
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#4A4A4A] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all border-4 border-white"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};