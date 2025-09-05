import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A passionate developer creating beautiful, functional digital experiences.
        </p>
      </div>
    </div>
  );
};

export default About;