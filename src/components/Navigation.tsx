'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/data/company';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: '홈', href: '#home' },
    { name: '사업영역', href: '#business' },
    { name: '연락처', href: '#contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    // Remove the # from href to get the target id
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    // Close mobile menu first
    closeMobileMenu();
    
    if (targetElement) {
      // Wait for mobile menu animation to complete
      setTimeout(() => {
        const navHeight = 64; // h-16 = 64px
        const elementPosition = targetElement.getBoundingClientRect().top;
        const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        const offsetPosition = elementPosition + currentScrollY - navHeight;

        // Try multiple scroll methods for better mobile compatibility
        try {
          // Method 1: Standard scrollTo
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Method 2: Fallback for mobile browsers
          setTimeout(() => {
            const newPosition = targetElement.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - navHeight;
            if (Math.abs(window.scrollY - offsetPosition) > 50) {
              window.scrollTo({
                top: newPosition,
                behavior: 'smooth'
              });
            }
          }, 100);
          
        } catch (error) {
          // Method 3: Basic fallback
          window.scrollTo(0, offsetPosition);
        }
      }, 300); // Wait for menu close animation
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">유</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">{companyInfo.name}</h1>
              <p className="text-xs text-slate-500">{companyInfo.englishName}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm"
              onClick={() => handleNavClick('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              문의하기
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-slate-600 hover:text-slate-900 p-2"
              aria-label="메뉴 열기"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-45' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block w-full text-left text-slate-600 hover:text-blue-600 font-medium text-lg py-2 transition-colors duration-200"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 border-t border-slate-200"
                >
                  <Button 
                    onClick={() => handleNavClick('#contact')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    문의하기
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}