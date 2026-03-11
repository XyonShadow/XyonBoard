import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Star } from 'lucide-react';

// Role for typewriter effect
const roles = [
  'Front-End Developer',
  'UI/UX Designer',
  'React Specialist',
  'Node.js Expert',
  'Mobile Developer',
  'Tech Innovator'
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      const updated = isDeleting
        ? currentWord.substring(0, index - 1)
        : currentWord.substring(0, index + 1);

      setText(updated);
      setIndex(isDeleting ? index - 1 : index + 1);

      if (!isDeleting && updated === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      }

      if (isDeleting && updated === '') {
        setIsDeleting(false);
        setWordIndex(prev => prev + 1);
      }
    }, isDeleting ? 80 : 140);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, wordIndex, words]);

  return text;
}

export const HeroSection: React.FC = () => {
  const typewriterText = useTypewriter(roles);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl opacity-0 animate-fadeInUp">
      <div className="absolute inset-0 bg-black/10" />

      {/* Availability Badge with Pulse Animation */}
      <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 opacity-0 animate-fadeInLeft">
        <Star className="w-4 h-4 text-yellow-300 animate-spin" style={{animationDuration: '2.5s'}} />
        <span className="text-sm font-medium">Available for new projects</span>
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      </div>

      {/* Main Heading with Staggered Animation */}
      <h1 className="text-4xl md:text-7xl font-black mb-4 leading-tight opacity-0 animate-fadeInRight">
        <span className="inline-block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Hi,</span>{' '}
        <span className="inline-block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>I'm</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 inline-block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>Michael</span>
      </h1>
      
      {/* Typewriter Effect for Roles */}      
      <div className="h-16 md:h-20 flex items-center mb-4">
        <p className="text-xl md:text-3xl font-light opacity-90">
          <span className="opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            {typewriterText}<span className="animate-pulse">|</span>
          </span>
        </p>
      </div>

      {/* Description with Fade In */}
      <p className="text-lg mb-8 max-w-2xl leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
        I craft exceptional digital experiences that blend beautiful design with powerful functionality.
        Let's build something extraordinary together.
      </p>
      
      {/* Action Buttons with Hover Animations */}
      <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
        <button type="button" className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transform animate-bounceGentle">
          <span>Get In Touch</span>
          <ArrowRight size={20} className="group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300" />
        </button>

        <button type="button" className="group border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-3 hover:scale-105 transform">
          <Download size={20} className="group-hover:animate-bounce group-hover:rotate-12 transition-transform duration-300" />
          <span>Download Resume</span>
        </button>
      </div>
    </div>
  );
};