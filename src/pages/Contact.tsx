import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, ChevronDown, Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: '',
        budget: '',
        timeline: ''
      });
      setSubmitStatus('idle');
    }, 3000);
  };
  
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

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'UI/UX Design',
    'Full-Stack Application',
    'API Development',
    'Consulting',
    'Other'
  ];
  const projectTypeOptions = projectTypes.map(type => ({ value: type, label: type }));

  const budgetRanges = [
    '$500 - $1,000',
    '$1,000 - $2,000',
    '$2,000 - $5,000',
    '$5,000+',
    'Let\'s discuss'
  ];
  const budgetOptions = budgetRanges.map(range => ({ value: range, label: range }));

  const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);

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

      {/* Main Content */}
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

        <div>
          {/* Contact Form */}
          <div 
            ref={el => {sectionRefs.current[1] = el}}
            className={`xl:col-span-2 ${visibleSections[1] ? 'animate-fadeInLeft' : 'opacity-0'}`}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Send className="w-6 h-6" />
                  Let's Start a Conversation
                </h2>
                <p className="text-blue-100 mt-2">Fill out the form below and I'll get back to you within 24 hours</p>
              </div>

              <div className="p-8">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl flex items-center gap-3 animate-fadeInDown">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-green-800 dark:text-green-200 font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Project Type and Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      {/* Project Type Dropdown */}
                      <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Project Type
                        </label>
                        <button
                          type="button"
                          onClick={() => setIsProjectTypeOpen(!isProjectTypeOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        >
                          <span className="text-gray-700 dark:text-gray-200">
                            {projectTypeOptions.find((opt) => opt.value === formData.projectType)?.label || "Select project type"}
                          </span>
                          <motion.div
                            animate={{ rotate: isProjectTypeOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isProjectTypeOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                            >
                              {projectTypeOptions.map((option) => (
                                <button
                                  key={option.value}
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, projectType: option.value });
                                    setIsProjectTypeOpen(false);
                                  }}
                                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 ${
                                    formData.projectType === option.value
                                      ? "bg-blue-100 dark:bg-blue-700"
                                      : ""
                                  }`}
                                >
                                  {option.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    <div>
                      {/* Budget Range Dropdown */}
                      <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <button
                          type="button"
                          onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        >
                          <span className="text-gray-700 dark:text-gray-200">
                            {budgetOptions.find((opt) => opt.value === formData.budget)?.label || "Select Budget Range"}
                          </span>
                          <motion.div
                            animate={{ rotate: isBudgetOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isBudgetOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                            >
                              {budgetOptions.map((option) => (
                                <button
                                  key={option.value}
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, budget: option.value });
                                    setIsBudgetOpen(false);
                                  }}
                                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 ${
                                    formData.budget === option.value
                                      ? "bg-blue-100 dark:bg-blue-700"
                                      : ""
                                  }`}
                                >
                                  {option.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Brief description of your project"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    />
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Timeline
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="When do you need this completed? (e.g., 2-3 months)"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;