'use client';

import { motion } from 'framer-motion';

const brandNames = [
  '디올', '샤넬', '그린셀렙', '이자녹스', '셀트리온', '메디필', '메디힐', '제이준',
  '빌리프', '아누아', '성분에디터', '조선미녀', '차앤박', '사임당', '스킨1004', '비비안'
];

export default function BrandStrip({ className = "" }: { className?: string }) {
  return (
    <section className={`py-12 bg-white border-y border-slate-200 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">
            TRUSTED BY PREMIUM BRANDS
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <motion.div
            animate={{
              x: [-1200, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            className="flex items-center space-x-16 whitespace-nowrap"
            style={{ width: 'max-content' }}
          >
            {[...brandNames, ...brandNames, ...brandNames].map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex-shrink-0 text-slate-400 font-medium text-base tracking-wide hover:text-blue-600 transition-colors duration-300"
              >
                {brand.toUpperCase()}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}