import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      className="w-[95%] mx-auto mt-6 rounded-lg overflow-hidden"
      style={{
        backgroundColor: "#3b2a22",
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/fabric-of-squares.png")',
      }}
    >
      
      <div className="grid md:grid-cols-2 items-center">
        
        {/* LEFT CONTENT */}
        <div className="px-6 md:px-10 lg:px-14 py-12">
          
          <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider">
            B2B Textile Platform
          </span>

          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Reliable Textile <br />
            Marketplace for Bulk Buyers
          </h1>

          <p className="mt-4 text-gray-300 text-sm md:text-base max-w-md">
            Source fabrics, linen, and textile materials from verified suppliers across India with ease and trust.
          </p>

          {/* CTA */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              to="/products"
              className="bg-[#a58c67] text-white px-6 py-3 text-sm font-semibold rounded-md hover:transition flex items-center gap-2"
            >
              Explore Market
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/trade-enquiry"
              className="border border-gray-400 text-gray-200 px-6 py-3 text-sm font-semibold rounded-md hover:border-[#a58c67] hover:text-white transition"
            >
              Trade Enquiry
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 gap-4">
            
            <img
              src="/images/e-trade.avif"
              alt=""
              className="w-full h-[140px] border border-white  md:h-[180px] object-cover rounded-md"
            />

            <img
              src="https://plus.unsplash.com/premium_photo-1661962431511-32e4ebf7e5b0?w=600"
              alt=""
              className="w-full h-[140px] border border-white  md:h-[180px] object-cover rounded-md"
            />

            <img
              src="/images/etrade3.avif"
              alt=""
              className="col-span-2 border border-white w-full h-[160px] md:h-[200px] object-cover rounded-md"
            />

          </div>
        </div>

      </div>
    </section>
  );
};