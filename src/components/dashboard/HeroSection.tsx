import React from 'react';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  return (
    <section className="p-8 text-center bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">Hi, I'm Michael</h1>
      <p className="text-lg mt-4">Front-End Developer | UI/UX Designer</p>
      <div className="mt-6">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Get In Touch
        </button>
      </div>
    </section>
  );
};