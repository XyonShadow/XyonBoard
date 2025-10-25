import React from "react";
import { MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
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

    </div>
  );
};

export default Contact;