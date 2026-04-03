import React from 'react';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';

export const Terms = () => {
  const sections = [
    {
      title: "1. Eligibility",
      content: "Only verified businesses with valid GST, MSME, or Trade Licenses are allowed to participate in the e-Trade Market. Individual retail buyers are restricted from bulk wholesale auctions."
    },
    {
      title: "2. e-Auction Rules",
      content: "Bidders must submit their expected rates within the specified window. All bids are binding. Withdrawal after successful bid awarding will lead to permanent blacklisting."
    },
    {
      title: "3. Documentation",
      content: "All documents uploaded must be genuine. PAREKH e-Trade reserves the right to verify documents with government portals like GSTN and MCA."
    },
    {
      title: "4. Payment Terms",
      content: "Payments must be made directly to the seller as per the contract generated post-auction. PAREKH e-Trade acts as a discovery and facilitation platform."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <Shield className="text-[#a58c67]" size={32} />
          <span className="text-[#a58c67] font-extrabold uppercase tracking-wider text-sm">Legal Compliance</span>
        </div>
        <h1 className="text-4xl font-extrabold text-[#4A4A4A]  er mb-8">
          e-Trade <span className="text-[#a58c67]">Terms & Conditions</span>
        </h1>

        <div className="bg-pink-50/50 p-8 rounded-[2rem] border border-pink-100 mb-12">
          <div className="flex gap-4">
            <AlertCircle className="text-[#a58c67] shrink-0" />
            <p className="text-sm font-medium text-gray-600 leading-relaxed">
              Please read these terms carefully before registering on the Buyer or Seller platforms.
              By using our services, you agree to abide by the trading norms set by PAREKH e-TRADE MARKET (TEXTILE).
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="group">
              <h3 className="text-xl font-extrabold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <CheckCircle size={18} className="text-[#a58c67]" />
                {section.title}
              </h3>
              <p className="text-gray-500 font-medium leading-loose pl-8">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-gray-100 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider ">
            Last Updated: March 2026 | Hyderabad, TG, INDIA
          </p>
        </div>
      </div>
    </div>
  );
};
