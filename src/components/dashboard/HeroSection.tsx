import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'React Specialist',
    'Node.js Expert',
    'Mobile Developer',
    'Tech Innovator'
  ];

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, currentIndex - 1)
        : currentRole.substring(0, currentIndex + 1);

      setTypewriterText(updatedText);

      if (isDeleting) {
        setTypingSpeed(100);
      } else {
        setTypingSpeed(150);
      }

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
  }, [currentIndex, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl animate-fadeInUp">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/20 rounded-full translate-y-32 -translate-x-16 blur-2xl animate-floatReverse"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/30 rounded-full animate-floatingParticles`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        {/* Availability Badge with Pulse Animation */}
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-slideInLeft">
          <Star className="w-4 h-4 text-yellow-300 animate-spin-slow" />
          <span className="text-sm font-medium">Available for new projects</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Main Heading with Staggered Animation */}
        <div className="overflow-hidden">
          <h1 className="text-4xl md:text-7xl font-black mb-4 leading-tight animate-slideInRight">
            <span className="inline-block animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Hi,</span>{' '}
            <span className="inline-block animate-fadeInUp" style={{ animationDelay: '0.2s' }}>I'm</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 inline-block animate-fadeInUp animate-glow" style={{ animationDelay: '0.3s' }}>
              Alex
            </span>
          </h1>
        </div>
        
        {/* Typewriter Effect for Role */}
        <div className="h-16 md:h-20 flex items-center mb-4">
          <p className="text-xl md:text-3xl font-light opacity-90">
            <span className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
        </div>
        
        {/* Description with Fade In */}
        <p className="text-lg opacity-80 mb-8 max-w-2xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          I craft exceptional digital experiences that blend beautiful design with powerful functionality. 
          Let's build something extraordinary together.
        </p>
        
        {/* Action Buttons with Hover Animations */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
          <button className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transform animate-bounce-gentle">
            <span>Get In Touch</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button className="group border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-3 hover:scale-105 transform">
            <Download size={20} className="group-hover:animate-bounce group-hover:rotate-12 transition-transform duration-300" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(32px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) translateX(40px) rotate(5deg);
          }
        }
        
        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(32px) translateX(-16px) rotate(0deg);
          }
          50% {
            transform: translateY(10px) translateX(-24px) rotate(-3deg);
          }
        }
        
        @keyframes floatingParticles {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.8;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 193, 7, 0.8), 0 0 30px rgba(255, 193, 7, 0.6);
          }
        }
        
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-floatReverse {
          animation: floatReverse 8s ease-in-out infinite;
        }
        
        .animate-floatingParticles {
          animation: floatingParticles linear infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};