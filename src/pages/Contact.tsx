import React, { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<boolean[]>(new Array(4).fill(false));
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSections(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 200);
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);
  
  type ConnectOption = {
    id: 'email' | 'github' | 'linkedin';
    title: string;
    description: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    value: string;
    color: string;
    link?: string;
  };

  const connectOptions: ConnectOption[] = [
    {
      id: 'email',
      title: 'Email Me',
      description: 'Get in touch directly via email.',
      icon: Mail,
      value: 'prncemk11@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      link: 'mailto:prncemk11@gmail.com',
    },
    {
      id: 'github',
      title: 'GitHub',
      description: 'Explore my open-source projects and code.',
      icon: Github,
      value: 'github.com/XyonShadow',
      color: 'from-gray-700 to-gray-900',
      link: 'https://github.com/XyonShadow',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      description: 'Let\'s connect professionally and collaborate.',
      icon: Linkedin,
      value: 'linkedin.com/in/xyonshadow',
      color: 'from-sky-500 to-blue-600',
      link: 'https://linkedin.com/in/xyonshadow',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/20 rounded-full translate-y-32 -translate-x-16 blur-2xl animate-floatReverse"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 opacity-0 animate-fadeInDown">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight opacity-0 animate-fadeInUp">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Touch</span>
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mt-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold">24h</div>
              <div className="text-sm opacity-80">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16"> 
        {/* Connect Options */}
        <div 
          ref={el => {sectionRefs.current[0] = el}}
          className={`opacity-0 ${visibleSections[0] ? 'animate-fadeInUp' : ''}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Preferred Way</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">I'm available through multiple channels to suit your communication style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {connectOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <a
                  key={option.id}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer hover:scale-105 transform opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${option.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {option.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {option.description}
                    </p>

                    <div className="mt-4 text-gray-900 dark:text-white font-medium">
                      {option.value}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}
                  ></div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;