'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Business() {
  const { t } = useLanguage();

  const bottomStats = [
    { ...t.stats[0], color: 'text-blue-600' },
    { ...t.stats[1], color: 'text-purple-600' },
    { ...t.stats[2], color: 'text-green-600' },
    { ...t.stats[3], color: 'text-orange-600' },
  ];

  return (
    <section id="business" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-blue-50 text-blue-700 border border-blue-200 mb-6 px-6 py-2 text-sm font-medium rounded-md">
            {t.business.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            <span className="text-slate-800">{t.business.headingLine1}</span>
            <br />
            <span className="text-blue-600">
              {t.business.headingLine2}
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            {t.business.descriptionPrefix}
            <span className="text-blue-600 font-semibold">{t.business.descriptionHighlight}</span>{t.business.descriptionSuffix}
          </p>
        </motion.div>

        {/* Business Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {t.business.areas.map((business) => (
            <motion.div
              key={business.id}
              variants={item}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.15, ease: "easeOut" }
              }}
              className="h-full cursor-pointer"
            >
              <Card className="h-full group cursor-pointer border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-200 bg-white rounded-xl overflow-hidden hover:-translate-y-1">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-150 mb-4">
                    {business.title}
                  </CardTitle>
                  <p className="text-blue-600 font-semibold text-base tracking-wide">
                    {business.description}
                  </p>

                  {/* Gradient line */}
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mt-6 group-hover:w-24 transition-all duration-300" />
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-slate-600 leading-relaxed mb-8 font-normal text-base">
                    {business.details}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-150 text-base group-hover:translate-x-2">
                      <span>{t.business.learnMore}</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-150">&rarr;</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t.business.ctaHeading}
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              {t.business.ctaDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
              >
                {t.business.ctaPrimary}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer"
              >
                {t.business.ctaSecondary}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {bottomStats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
