import React, { useState, useEffect } from 'react';
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
    <section className="p-8 text-center bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">Hi, I'm Michael</h1>
      <p className="text-lg mt-4">{typewriterText}<span className="ml-1">|</span></p>
    </section>
  );
};