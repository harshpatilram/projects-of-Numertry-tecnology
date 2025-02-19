import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Laptop, Zap, Github, Star, Heart, Database, Cloud, Shield } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 bg-gradient-animate">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-white font-bold text-2xl opacity-0 animate-fade-in flex items-center space-x-2">
            <Shield className="text-blue-400 animate-pulse-slow" />
            <span className="text-gradient">Numetry</span>
          </div>
          <div className="space-x-6">
            {['Solutions', 'Services', 'About', 'Contact'].map((item, index) => (
              <button
                key={item}
                className={`text-white hover:text-blue-300 transition-all duration-300 opacity-0 animate-fade-in hover-lift`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row items-center justify-between mt-20">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 
              className={`text-5xl lg:text-7xl font-bold mb-6 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Transform Your
              <span className="text-gradient animate-pulse-slow block">Digital Future</span>
            </h1>
            <p 
              className={`text-lg text-gray-300 mb-8 transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Empowering businesses with cutting-edge technology solutions. 
              From cloud infrastructure to AI-driven applications, we deliver 
              innovation that drives growth.
            </p>
            <div 
              className={`space-x-4 transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 hover-lift animate-shimmer">
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div 
            className={`lg:w-1/2 transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                alt="Digital Technology"
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Cloud size={32} />,
              title: 'Cloud Solutions',
              description: 'Scalable cloud infrastructure designed for your enterprise needs.'
            },
            {
              icon: <Database size={32} />,
              title: 'Data Analytics',
              description: 'Transform your data into actionable insights with AI-powered analytics.'
            },
            {
              icon: <Shield size={32} />,
              title: 'Cyber Security',
              description: 'Enterprise-grade security solutions to protect your digital assets.'
            }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-1000 hover:scale-105 hover-lift ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-blue-400 mb-4 animate-pulse-slow">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <Github className="hover:text-white cursor-pointer transition-colors hover-lift" />
          <Heart className="text-blue-500 animate-pulse-slow hover-lift" />
        </div>
        <p className="animate-fade-in">© 2025 Numetry Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;