import React from 'react';
import { Award, Target, Users, ShieldCheck } from 'lucide-react';

export const Management = () => {
  const leaders = [
    {
      name: "Mr. S. Parekh",
      role: "Managing Director",
      bio: "Over 30 years of excellence in the global textile trade. Visionary behind PAREKH e-Trade MARKET.",
      icon: <Award className="text-white" size={30} />
    },
    {
      name: "Mrs. R. Parekh",
      role: "Executive Director",
      bio: "Expert in supply chain management and textile industrial machineries with 20 years of experience.",
      icon: <ShieldCheck className="text-white" size={30} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#4A4A4A] py-24 text-white text-center">
        <span className="text-[#bc114a] font-extrabold text-sm uppercase tracking-[0.5em]">Executive Leadership</span>
        <h1 className="text-5xl font-extrabold mt-4 uppercase er">Our <span className="text-[#bc114a]">Management</span></h1>
        <div className="h-1.5 w-24 bg-[#bc114a] mx-auto mt-6 rounded-full"></div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-[#4A4A4A] uppercase ">Our Core <span className="text-[#bc114a]">Values</span></h2>
          <p className="mt-6 text-gray-500 font-medium leading-[2]">
            PAREKH e-Trade MARKET (TEXTILE) is founded on the principles of transparency and efficiency.
            Our management team brings together decades of expertise to bridge the gap between buyers and sellers
            using state-of-the-art e-Trade technology.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-pink-50 rounded-xl"><Target size={20} className="text-[#bc114a]" /></div>
              <div>
                <h4 className="font-bold text-[#4A4A4A]">Integrity</h4>
                <p className="text-sm text-gray-400 font-bold uppercase mt-1">First Priority</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-pink-50 rounded-xl"><Users size={20} className="text-[#bc114a]" /></div>
              <div>
                <h4 className="font-bold text-[#4A4A4A]">Innovation</h4>
                <p className="text-sm text-gray-400 font-bold uppercase mt-1">Modern Trade</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000" className="rounded-[4rem] grayscale-0 hover:grayscale transition-all duration-700 shadow-2xl" alt="Office" />
          <div className="absolute -bottom-10 -left-10 bg-[#bc114a] p-10 rounded-[3rem] text-white hidden lg:block">
            <h4 className="text-4xl font-extrabold">25+</h4>
            <p className="text-sm font-bold uppercase tracking-wider opacity-60">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* Leaders List */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#4A4A4A] uppercase">The <span className="text-[#bc114a]">Pioneers</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {leaders.map((leader, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-pink-50 shadow-sm hover:shadow-2xl transition-all group">
                <div className="w-20 h-20 bg-[#4A4A4A] rounded-3xl flex items-center justify-center group-hover:bg-[#bc114a] transition-colors">
                  {leader.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-[#4A4A4A] mt-8">{leader.name}</h3>
                <p className="text-[#bc114a] text-sm font-extrabold uppercase tracking-wider mt-2">{leader.role}</p>
                <p className="mt-6 text-gray-400 font-medium leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
