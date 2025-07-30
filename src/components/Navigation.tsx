'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/data/company';

export default function Navigation() {
  const navItems = [
    { name: '홈', href: '#home' },
    { name: '사업영역', href: '#business' },
    { name: '연락처', href: '#contact' }
  ];

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
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              문의하기
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-slate-600 hover:text-slate-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}