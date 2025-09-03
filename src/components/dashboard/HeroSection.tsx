import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './HeroSection.css';

const roles = [
  'Front-End Developer',
  'UI/UX Designer',
  'React Specialist',
  'Node.js Expert',
  'Mobile Developer',
  'Tech Innovator'
];

export const HeroSection: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, currentIndex - 1)
        : currentRole.substring(0, currentIndex + 1);
      setTypewriterText(updatedText);
      setTypingSpeed(isDeleting ? 100 : 150);
      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
      setCurrentIndex(isDeleting ? currentIndex - 1 : currentIndex + 1);
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
      <div className="absolute inset-0 bg-black/10" />
      <h1 className="text-4xl font-bold">Hi, I'm Michael</h1>
      <p className="text-lg mt-4">{typewriterText}<span className="ml-1">|</span></p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 inline-flex items-center gap-2"
        >
          Get In Touch <ArrowRight size={18} />
        </button>
        <button
          type="button"
          className="border border-white/70 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 inline-flex items-center gap-2"
        >
          <Download size={18} /> Download Resume
        </button>
      </div>
    </div>
  );
};