import React, { useEffect, useState } from 'react';
import { Sun, Moon, ChevronDown, Check } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment gateway."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. The price difference will be prorated and adjusted in your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial on all plans. No credit card required during the trial period."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied, contact our support team for a full refund."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Choose Your Plan</h1>
        
        {/* Pricing Table */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <div className="pricing-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Basic</h2>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-6">$9<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/mo</span></p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> 5 Projects
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> 2GB Storage
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> Basic Support
                </li>
              </ul>
              <button className="cta-button w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="pricing-card popular-plan bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Standard</h2>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-6">$29<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/mo</span></p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> 15 Projects
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> 10GB Storage
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> Priority Support
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> Advanced Features
                </li>
              </ul>
              <button className="cta-button w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="pricing-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Premium</h2>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-6">$99<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/mo</span></p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> Unlimited Projects
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> 100GB Storage
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> 24/7 Support
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> Custom Features
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> API Access
                </li>
              </ul>
              <button className="cta-button w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-800 dark:text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="faq-answer px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;