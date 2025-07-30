'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { contactInfo, companyInfo } from '@/data/company';

const contactOptions = [
  {
    title: '사업 제휴 문의',
    description: '새로운 브랜드 입점 및 파트너십',
    icon: '🤝',
    action: '제휴 문의하기',
    priority: 'high'
  },
  {
    title: '글로벌 수출 상담',
    description: '해외 진출 및 라이브커머스 상담',
    icon: '🌍',
    action: '수출 상담하기',
    priority: 'high'
  },
  {
    title: '물류/유통 서비스',
    description: '물류 대행 및 유통망 연결',
    icon: '📦',
    action: '물류 문의하기',
    priority: 'medium'
  },
  {
    title: '라이브커머스 진행',
    description: '실시간 방송 판매 서비스',
    icon: '📹',
    action: '방송 문의하기',
    priority: 'medium'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                  <Badge className="bg-blue-600/20 text-blue-300 border border-blue-400/30 mb-6 px-6 py-2 text-sm font-medium rounded-md backdrop-blur-sm">
          연락하기
        </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          <span className="text-blue-400">
            글로벌 진출의 시작,
          </span>
          <br />
          <span className="text-white">
            유백무역과 함께하세요
          </span>
        </h2>
                  <p className="text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          K-뷰티부터 명품까지, 라이브커머스와 글로벌 물류의 혁신적 결합으로
          <span className="text-blue-300 font-semibold">여러분의 비즈니스 성공</span>을 함께 만들어갑니다
        </p>
        </motion.div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.15, ease: "easeOut" } }}
              className="relative"
            >
                          <Card className={`h-full border ${
              option.priority === 'high' 
                ? 'border-blue-400/30 bg-blue-900/20 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20' 
                : 'border-slate-400/20 bg-slate-800/40 hover:border-slate-400/40 hover:shadow-xl hover:shadow-slate-500/10'
            } backdrop-blur-md transition-all duration-200 rounded-xl overflow-hidden`}>
                
                {option.priority === 'high' && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
                      인기
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pt-8 pb-6">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                    option.priority === 'high' 
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' 
                      : 'bg-gradient-to-br from-slate-500/20 to-slate-600/20'
                  }`}>
                    <div className={`w-8 h-8 rounded-lg ${
                      option.priority === 'high' 
                        ? 'bg-gradient-to-br from-blue-400 to-purple-500' 
                        : 'bg-gradient-to-br from-slate-400 to-slate-500'
                    }`}></div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-3">
                    {option.title}
                  </CardTitle>
                  <p className="text-slate-300 font-light text-lg">
                    {option.description}
                  </p>
                  
                  {/* Gradient line */}
                  <div className={`w-12 h-1 rounded-full mx-auto mt-4 ${
                    option.priority === 'high' 
                      ? 'bg-gradient-to-r from-blue-400 to-purple-500' 
                      : 'bg-gradient-to-r from-slate-400 to-slate-500'
                  }`} />
                </CardHeader>
                
                <CardContent className="text-center px-8 pb-8">
                  <Button 
                    className={`w-full ${
                      option.priority === 'high'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/30 backdrop-blur-sm'
                    } font-semibold transition-all duration-150 py-3 rounded-xl`}
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl shadow-black/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Company Info */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                회사 정보
              </h3>
              
              <div className="space-y-4">
                <div>
                                  <h4 className="text-2xl font-bold text-blue-300 mb-4">
                  {companyInfo.name} <span className="text-slate-300 font-light">({companyInfo.englishName})</span>
                </h4>
                <p className="text-slate-300 leading-relaxed font-light text-lg">
                  {companyInfo.description}
                </p>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <span className="text-blue-300 text-sm font-medium">이메일</span>
                    <p className="text-white font-semibold text-lg">{contactInfo.email}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-blue-300 text-sm font-medium">연락처</span>
                    <p className="text-white font-semibold text-lg">{contactInfo.phone}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-blue-300 text-sm font-medium">주소</span>
                    <p className="text-white font-semibold">{contactInfo.address}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-blue-300 text-sm font-medium">운영시간</span>
                    <p className="text-white font-semibold">{contactInfo.businessHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                빠른 문의
              </h3>
              
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="회사명/담당자명"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:border-yellow-400 focus:outline-none transition-colors duration-150"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="이메일 주소"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:border-yellow-400 focus:outline-none transition-colors duration-150"
                  />
                </div>
                <div>
                  <select className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white focus:border-yellow-400 focus:outline-none transition-colors">
                    <option value="">문의 유형을 선택하세요</option>
                    <option value="partnership">사업 제휴</option>
                    <option value="export">글로벌 수출</option>
                    <option value="logistics">물류/유통</option>
                    <option value="live-commerce">라이브커머스</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="문의 내용을 자세히 적어주세요..."
                    rows={4}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:border-yellow-400 focus:outline-none transition-colors duration-150 resize-none"
                  />
                </div>
                
                              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-150 hover:scale-[1.02]">
                문의 보내기
              </Button>
                
                <p className="text-sm text-slate-400 text-center font-light">
                  문의 접수 후 <span className="text-blue-300 font-medium">24시간 내</span>에 담당자가 연락드립니다
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <p className="text-blue-200 mb-4">
            &quot;K-뷰티를 세계로, 라이브로 연결하다&quot;
          </p>
          <p className="text-sm text-blue-300">
            © 2025 {companyInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}