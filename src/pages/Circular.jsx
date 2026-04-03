import React from 'react';

export const Circulars = ({ title = "Official Circulars" }) => {
  const circulars = [
    { id: 1, date: "27", month: "MAR", year: "2026", subject: "Latest Trends in Industrial Textile Machineries", desc: "Exploring how Parekh e-Trade is revolutionizing the supply chain with new age automation." },
    { id: 2, date: "20", month: "MAR", year: "2026", subject: "Annual Maintenance Schedule Update", desc: "Guidelines for the upcoming machinery audit and scheduled downtime for textile units." },
    { id: 3, date: "15", month: "MAR", year: "2026", subject: "New Export Compliance Guidelines", desc: "Essential documentation changes for international shipping of industrial fabrics." },
  ];

  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto bg-white">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-16">
        <div className="h-12 w-2 bg-[#a58c67]"></div>
        <h2 className="text-4xl font-extrabold text-[#4A4A4A] uppercase er">
          {title}
        </h2>
      </div>

      <div className="space-y-6">
        {circulars.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col md:flex-row items-start md:items-center bg-white border-l-4 border-gray-100 hover:border-[#a58c67] p-6 shadow-sm hover:shadow-md transition-all duration-300 rounded-r-2xl"
          >
            {/* Date Box */}
            <div className="flex flex-col items-center justify-center bg-gray-50 group-hover:bg-[#a58c67] transition-colors duration-300 p-4 rounded-xl min-w-[80px]">
              <span className="text-2xl font-extrabold text-[#4A4A4A] group-hover:text-white leading-none">
                {item.date}
              </span>
              <span className="text-sm font-bold text-gray-500 group-hover:text-pink-100 uppercase tracking-wider mt-1">
                {item.month}
              </span>
            </div>

            {/* Content Box */}
            <div className="md:ml-8 mt-4 md:mt-0 flex-grow">
              <span className="text-sm font-bold text-[#a58c67] uppercase ">
                Circular #{item.id} • {item.year}
              </span>
              <h4 className="text-xl font-bold text-[#4A4A4A] mt-1 group-hover:text-[#a58c67] transition-colors">
                {item.subject}
              </h4>
              <p className="text-sm text-gray-500 mt-2 line-clamp-1 italic">
                {item.desc}
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-4 md:mt-0">
              <button className="flex items-center gap-2 px-6 py-2 border-2 border-[#4A4A4A] text-[#4A4A4A] group-hover:bg-[#4A4A4A] group-hover:text-white transition-all text-sm font-extrabold uppercase tracking-wider rounded-full">
                View PDF
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};