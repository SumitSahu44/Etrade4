import React from 'react';
import { AppointmentForm } from '../components/Forms/AppointmentForm';

export const AppointmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/30 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-extrabold text-[#bc114a] uppercase tracking-[0.5em]">Visit Our Facility</span>
          <h1 className="text-4xl font-extrabold text-[#4A4A4A] mt-4 uppercase er">Book an <span className="text-[#bc114a]">Official Meeting</span></h1>
          <p className="text-gray-400 font-medium mt-4 max-w-2xl mx-auto">
            Schedule a visit to our Hyderabad office for detailed trade discussions,
            machinery assessments, or associate partnerships.
          </p>
        </div>

        <AppointmentForm />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-[2rem] border border-pink-50 text-center">
            <h4 className="font-bold text-[#4A4A4A] mb-2 uppercase text-sm tracking-wider">Office Hours</h4>
            <p className="text-sm text-gray-500">Mon - Sat: 10:00 AM - 06:00 PM</p>
          </div>
          <div className="p-8 bg-white rounded-[2rem] border border-pink-50 text-center">
            <h4 className="font-bold text-[#4A4A4A] mb-2 uppercase text-sm tracking-wider">Location</h4>
            <p className="text-sm text-gray-500">Hyderabad, Telangana, 500001</p>
          </div>
          <div className="p-8 bg-white rounded-[2rem] border border-pink-50 text-center">
            <h4 className="font-bold text-[#4A4A4A] mb-2 uppercase text-sm tracking-wider">Support</h4>
            <p className="text-sm text-gray-500">e-trade@parekhtrade.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
