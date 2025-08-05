'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { contactInfo, companyInfo } from '@/data/company';
import emailjs from '@emailjs/browser';

const contactOptions = [
  {
    title: '사업 제휴 문의',
    description: '새로운 브랜드 입점 및 파트너십',
    icon: '',
    action: '제휴 문의하기',
    priority: 'high'
  },
  {
    title: '글로벌 수출 상담',
    description: '해외 진출 및 라이브커머스 상담',
    icon: '',
    action: '수출 상담하기',
    priority: 'high'
  },
  {
    title: '물류/유통 서비스',
    description: '물류 대행 및 유통망 연결',
    icon: '',
    action: '물류 문의하기',
    priority: 'medium'
  },
  {
    title: '라이브커머스 진행',
    description: '실시간 방송 판매 서비스',
    icon: '',
    action: '방송 문의하기',
    priority: 'medium'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS 실제 설정값
      const serviceID = 'service_xdxxalu';
      const templateID = 'template_aoss9sl';
      const publicKey = 'GiEta5njvJblfmcef';

      console.log('📧 이메일 전송 시도:', {
        받는사람: 'ojyoung24@naver.com',
        보내는사람: formData.name,
        이메일: formData.email,
        문의유형: formData.type,
        내용: formData.message
      });

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'ojyoung24@naver.com',
        inquiry_type: formData.type,
        message: formData.message,
        to_name: '담당자님'
      };

      // 실제 EmailJS로 이메일 전송
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', type: '', message: '' });
    } catch (error) {
      console.error('이메일 전송 실패:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            천강무역과 함께하세요
          </span>
        </h2>
                  <p className="text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          대형 제조사 직접 파트너십부터 대률간 물류 인프라까지,
          <span className="text-blue-300 font-semibold">여러분의 글로벌 비즈니스 성장</span>을 함께 만들어갑니다
        </p>
        </motion.div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
              className="relative cursor-pointer"
            >
              <Card className={`h-full border backdrop-blur-sm transition-all duration-300 rounded-2xl overflow-hidden group ${
                option.priority === 'high' 
                  ? 'border-blue-400/40 bg-gradient-to-br from-blue-900/30 to-purple-900/20 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20' 
                  : 'border-white/20 bg-white/5 hover:border-white/30 hover:shadow-xl hover:shadow-white/5'
              }`}>
                
                <CardHeader className="text-center pt-8 pb-6 relative">
                  {option.priority === 'high' && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1.5 rounded-full shadow-xl shadow-yellow-500/30 font-semibold border-2 border-white/20">
                        추천
                      </Badge>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    option.priority === 'high' 
                      ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30 shadow-lg shadow-blue-500/20' 
                      : 'bg-white/10 shadow-lg shadow-white/5'
                  }`}>
                    <div className={`w-8 h-8 rounded-lg ${
                      option.priority === 'high' 
                        ? 'bg-gradient-to-br from-blue-400 to-purple-500' 
                        : 'bg-gradient-to-br from-slate-300 to-slate-400'
                    }`}></div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {option.title}
                  </CardTitle>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {option.description}
                  </p>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <Button 
                    className={`w-full font-semibold transition-all duration-200 py-3 rounded-xl cursor-pointer ${
                      option.priority === 'high'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm'
                    }`}
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
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl shadow-black/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Company Info */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                회사 정보
              </h3>
              
              <div className="space-y-4">
                <div>
                                  <h4 className="text-2xl font-bold text-blue-300 mb-2">
                  {companyInfo.name} <span className="text-slate-300 font-light">({companyInfo.englishName})</span>
                </h4>
                <p className="text-white font-medium mb-4">
                  대표이사: {contactInfo.ceo} {contactInfo.ceoTitle}
                </p>
                <p className="text-slate-300 leading-relaxed font-light text-lg">
                  {companyInfo.description}
                </p>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-blue-300 text-sm font-medium">대표이사</span>
                    <p className="text-white font-semibold">{contactInfo.ceo}</p>
                    <p className="text-slate-300 text-xs">{contactInfo.ceoTitle}</p>
                  </div>
                  <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-blue-300 text-sm font-medium">연락처</span>
                    <p className="text-white font-semibold">{contactInfo.phone}</p>
                  </div>
                  <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-blue-300 text-sm font-medium">이메일</span>
                    <p className="text-white font-semibold text-sm">{contactInfo.email}</p>
                  </div>
                  <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-blue-300 text-sm font-medium">주소</span>
                    <p className="text-white font-semibold text-sm">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                빠른 문의
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="회사명/담당자명"
                    required
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-slate-400 focus:border-blue-400 focus:bg-white/15 focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="이메일 주소"
                    required
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-slate-400 focus:border-blue-400 focus:bg-white/15 focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white focus:border-blue-400 focus:bg-white/15 focus:outline-none transition-all duration-200"
                  >
                    <option value="" className="bg-slate-800 text-white">문의 유형을 선택하세요</option>
                    <option value="사업 제휴" className="bg-slate-800 text-white">사업 제휴</option>
                    <option value="글로벌 수출" className="bg-slate-800 text-white">글로벌 수출</option>
                    <option value="물류/유통" className="bg-slate-800 text-white">물류/유통</option>
                    <option value="라이브커머스" className="bg-slate-800 text-white">라이브커머스</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="문의 내용을 자세히 적어주세요..."
                    rows={4}
                    required
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-slate-400 focus:border-blue-400 focus:bg-white/15 focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 hover:scale-[1.01] cursor-pointer disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? '전송 중...' : '문의 보내기'}
                </Button>
                
                {submitStatus === 'success' && (
                  <p className="text-sm text-green-400 text-center font-medium">
                    ✅ 문의가 성공적으로 전송되었습니다!
                  </p>
                )}
                
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-400 text-center font-medium">
                    ❌ 전송에 실패했습니다. 다시 시도해주세요.
                  </p>
                )}
                
                <p className="text-sm text-slate-400 text-center">
                  문의 접수 후 <span className="text-blue-300 font-semibold">24시간 내</span>에 담당자가 연락드립니다
                </p>
              </form>
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
            &ldquo;글로벌 무역의 새로운 기준, 세계를 연결하다&rdquo;
          </p>
          <p className="text-sm text-blue-300">
            © 2025 {companyInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}