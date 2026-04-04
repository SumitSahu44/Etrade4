import React, { useState } from "react";
import { MessageCircle, X, Send, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-5 z-[100] flex flex-col items-end gap-3">

      {/* CHAT BOX */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="w-80 h-[420px] bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#a58c67] px-4 py-3 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Headphones size={16} />
                <div>
                  <p className="text-[10px] uppercase text-white/70">Support</p>
                  <h3 className="text-sm font-semibold">Live Chat</h3>
                </div>
              </div>

              <button onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 bg-gray-50 overflow-y-auto text-sm">
              <div className="bg-white p-3 rounded-md border max-w-[80%]">
                Hello 👋 How can we help you today?
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t flex gap-2 bg-white">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#a58c67]"
              />
              <button className="bg-[#a58c67] text-white px-3 rounded-md">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOAT AREA */}
      <div className="flex items-center gap-3">

        {/* ✅ WE ARE LIVE (FIXED WIDTH + NO OVERLAP) */}
        {!isOpen && (
          <div className="bg-white text-xs font-semibold px-4 py-2 rounded-full shadow border whitespace-nowrap min-w-[120px] text-center">
            <span className="text-green-500 mr-1">●</span> We are live
          </div>
        )}

        {/* ✅ BUTTON (NO SIZE SHIFT) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 flex items-center justify-center bg-[#a58c67] text-white rounded-full shadow-lg transition"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
          </div>
        </button>
      </div>
    </div>
  );
};