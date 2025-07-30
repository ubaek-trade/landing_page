'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { companyInfo, stats } from '@/data/company';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Global Network Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/globe.png')`
          }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/60" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-slate-900/40" />
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
                    <Badge className="bg-blue-600/20 text-blue-300 border border-blue-400/30 px-6 py-2 text-sm font-medium rounded-md backdrop-blur-sm">
          글로벌 네트워크로 세계를 연결하는 K-뷰티 전문기업
        </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tight"
          >
                    <span className="text-white">
          글로벌 무역의 새로운 혁신,
        </span>
        <br />
        <span className="text-blue-400">
          유백무역과 함께
        </span>
          </motion.h1>

          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
                    <h2 className="text-2xl md:text-3xl font-light text-slate-300 tracking-wide">
          {companyInfo.name} <span className="text-blue-300 font-medium">({companyInfo.englishName})</span>
        </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            원청 직접 연결을 통한 최고의 가격 경쟁력으로<br />
            <strong className="text-blue-300 font-semibold">30+ 프리미엄 브랜드</strong>와 함께
            <strong className="text-white font-semibold"> 라이브커머스 + 글로벌 물류</strong>의 혁신적 결합을 실현합니다
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
                            <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 text-lg rounded-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-150 hover:scale-105"
        >
          사업 제휴 문의
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-lg backdrop-blur-sm transition-all duration-150"
        >
          회사 소개서 다운로드
        </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
                      {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-300">
                {stat.description}
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
}