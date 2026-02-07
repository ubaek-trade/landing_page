'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.business, href: '#business' },
    { name: t.nav.contact, href: '#contact' }
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

        } catch {
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
              <span className="text-white font-bold text-lg">{t.nav.logoText}</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">{t.company.name}</h1>
              <p className="text-xs text-slate-500">{t.company.englishName}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-slate-600 hover:text-blue-600 font-medium transition-all duration-200 cursor-pointer hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:transition-all after:duration-200 hover:after:w-full"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Language Toggle + CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-slate-100 rounded-full p-0.5">
              <button
                onClick={() => setLanguage('ko')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  language === 'ko'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                KO
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                EN
              </button>
            </div>

            <Button
              size="sm"
              onClick={() => handleNavClick('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Toggle */}
            <div className="flex items-center bg-slate-100 rounded-full p-0.5">
              <button
                onClick={() => setLanguage('ko')}
                className={`px-2 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  language === 'ko'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-500'
                }`}
              >
                KO
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-500'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="text-slate-600 hover:text-slate-900 p-2 cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-slate-100 rounded-lg"
              aria-label={t.nav.menuAriaLabel}
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
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="block w-full text-left text-slate-600 hover:text-blue-600 font-medium text-lg py-2 transition-all duration-200 cursor-pointer hover:bg-blue-50 rounded-lg px-2"
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    {t.nav.cta}
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
