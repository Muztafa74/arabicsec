"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Stats() {
  const { language } = useLanguage();

  const stats = [
    { 
      value: "∞", 
      label: language === 'ar' ? "توليد كود مجاني" : "Free Code Generation",
      color: "#C92032"
    },
    { 
      value: "3", 
      label: language === 'ar' ? "مستويات صعوبة" : "Difficulty Levels",
      color: "#20C997"
    },
    { 
      value: "56+", 
      label: language === 'ar' ? "لغة برمجة" : "Programming Languages",
      color: "#00D4FF"
    },
    { 
      value: "7", 
      label: language === 'ar' ? "دروس تفاعلية" : "Interactive Lessons",
      color: "#3A4DFF"
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-primary-secondary/50 backdrop-blur-sm rounded-xl p-8 text-center border border-white/5 hover:border-white/10 transition-all duration-300">
                  {/* Value */}
                <div 
                  className="text-5xl md:text-6xl font-bold mb-3"
                  style={{ color: stat.color }}
                  >
                    {stat.value}
                </div>

                  {/* Label */}
                <div className="text-sm md:text-base text-gray-400">
                    {stat.label}
                </div>

                {/* Bottom Line */}
                <div 
                  className="mt-4 h-1 rounded-full transition-all duration-300 w-0 group-hover:w-full mx-auto"
                  style={{ backgroundColor: stat.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

