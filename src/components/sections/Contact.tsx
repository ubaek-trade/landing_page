'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { contactInfo } from '@/data/company';
import { useLanguage } from '@/contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import { Handshake, Globe, Truck, Video, User, Phone, Mail, MapPin } from 'lucide-react';

const contactOptionsMeta = [
  { priority: 'high', icon: Handshake },
  { priority: 'high', icon: Globe },
  { priority: 'medium', icon: Truck },
  { priority: 'medium', icon: Video },
];

export default function Contact() {
  const { t } = useLanguage();
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
      const serviceID = 'service_xdxxalu';
      const templateID = 'template_aoss9sl';
      const publicKey = 'GiEta5njvJblfmcef';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'ojyoung24@naver.com',
        inquiry_type: formData.type,
        message: formData.message,
        to_name: '담당자님'
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', type: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
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
            {t.contact.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-blue-400">
              {t.contact.headingLine1}
            </span>
            <br />
            <span className="text-white">
              {t.contact.headingLine2}
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {t.contact.descriptionPrefix}
            <span className="text-blue-300 font-semibold">{t.contact.descriptionHighlight}</span>{t.contact.descriptionSuffix}
          </p>
        </motion.div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {t.contact.options.map((option, index) => {
            const meta = contactOptionsMeta[index];
            const Icon = meta.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                className="relative cursor-pointer"
              >
                <Card className={`h-full border backdrop-blur-sm transition-all duration-300 rounded-2xl overflow-hidden group ${
                  meta.priority === 'high'
                    ? 'border-blue-400/40 bg-gradient-to-br from-blue-900/30 to-purple-900/20 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20'
                    : 'border-white/20 bg-white/5 hover:border-white/30 hover:shadow-xl hover:shadow-white/5'
                }`}>

                  <CardHeader className="text-center pt-8 pb-6 relative">
                    {meta.priority === 'high' && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1.5 rounded-full shadow-xl shadow-yellow-500/30 font-semibold border-2 border-white/20">
                          {t.contact.recommended}
                        </Badge>
                      </div>
                    )}

                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      meta.priority === 'high'
                        ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30 shadow-lg shadow-blue-500/20'
                        : 'bg-white/10 shadow-lg shadow-white/5'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        meta.priority === 'high' ? 'text-blue-300' : 'text-slate-300'
                      }`} strokeWidth={1.5} />
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
                      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className={`w-full font-semibold transition-all duration-200 py-3 rounded-xl cursor-pointer ${
                        meta.priority === 'high'
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm'
                      }`}
                    >
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          id="contact-form"
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl shadow-black/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Company Info */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                {t.contact.companyInfoHeading}
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-blue-300 mb-2">
                    {t.company.name} <span className="text-slate-300 font-light">({t.company.englishName})</span>
                  </h4>
                  <p className="text-white font-medium mb-4">
                    {t.contact.ceoPrefix}{contactInfo.ceo} {contactInfo.ceoTitle}
                  </p>
                  <p className="text-slate-300 leading-relaxed font-light text-lg">
                    {t.company.description}
                  </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-blue-300" />
                      <span className="text-blue-300 text-sm font-medium">{t.contact.ceoLabel}</span>
                    </div>
                    <p className="text-white font-semibold">{contactInfo.ceo}</p>
                    <p className="text-slate-300 text-xs">{contactInfo.ceoTitle}</p>
                  </div>
                  <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-blue-300" />
                      <span className="text-blue-300 text-sm font-medium">{t.contact.phoneLabel}</span>
                    </div>
                    <p className="text-white font-semibold">{contactInfo.phone}</p>
                  </div>
                  <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-blue-300" />
                      <span className="text-blue-300 text-sm font-medium">{t.contact.emailLabel}</span>
                    </div>
                    <p className="text-white font-semibold text-sm">{contactInfo.email}</p>
                  </div>
                  <a
                    href="https://naver.me/FCrXSOua"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block space-y-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-900/10 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-blue-300" />
                        <span className="text-blue-300 text-sm font-medium">{t.contact.addressLabel}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-blue-300 group-hover:text-blue-200 transition-colors">
                          {t.contact.viewMap}
                        </span>
                        <svg
                          className="w-3 h-3 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-white font-semibold text-sm group-hover:text-blue-100 transition-colors">
                      {contactInfo.address}
                    </p>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                {t.contact.quickInquiry}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.contact.formNamePlaceholder}
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
                    placeholder={t.contact.formEmailPlaceholder}
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
                    <option value="" className="bg-slate-800 text-white">{t.contact.formTypePlaceholder}</option>
                    {t.contact.formTypeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-slate-800 text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.contact.formMessagePlaceholder}
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
                  {isSubmitting ? t.contact.formSubmitting : t.contact.formSubmit}
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-sm text-green-400 text-center font-medium">
                    {t.contact.formSuccess}
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="text-sm text-red-400 text-center font-medium">
                    {t.contact.formError}
                  </p>
                )}

                <p className="text-sm text-slate-400 text-center">
                  {t.contact.formFooterPrefix}<span className="text-blue-300 font-semibold">{t.contact.formFooterHighlight}</span>{t.contact.formFooterSuffix}
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
            &ldquo;{t.contact.footerQuote}&rdquo;
          </p>
          <p className="text-sm text-blue-300">
            &copy; 2026 {t.company.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
