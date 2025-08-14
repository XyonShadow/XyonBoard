import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">My Story</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
              I'm a passionate full-stack developer with over 3 years of experience building modern web applications. 
              I specialize in React, TypeScript, and Node.js, with a strong focus on creating intuitive user experiences 
              and scalable backend solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              My journey started with curiosity about how websites work, and it has evolved into a career dedicated to 
              creating digital solutions that make people's lives easier and more productive.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">What I Do</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-400">Full-Stack Web Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-400">UI/UX Design & Prototyping</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-400">Mobile App Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-400">API Design & Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-400">Database Design & Optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Experience</h2>
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500 mt-1"></div>
            <div className="ml-6">
              <h3 className="font-semibold text-gray-900 dark:text-white">Senior Full-Stack Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Tech Company • 2022 - Present</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Leading development of modern web applications using React, Node.js, and cloud technologies.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 mt-1"></div>
            <div className="ml-6">
              <h3 className="font-semibold text-gray-900 dark:text-white">Frontend Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Startup Inc • 2021 - 2022</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Built responsive web applications and improved user experience across multiple products.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-purple-500 mt-1"></div>
            <div className="ml-6">
              <h3 className="font-semibold text-gray-900 dark:text-white">Junior Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Web Agency • 2020 - 2021</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Started my professional journey building websites and learning modern development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;