"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Code2, Bug, BookCheck, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "كيف يعمل النظام؟",
      titleEn: "How Does It Work?",
      subtitle: "عملية تعليمية بسيطة وفعّالة تحول المبتدئين إلى محترفين في الأمن السيبراني",
      subtitleEn: "Simple yet effective learning process that transforms beginners into cybersecurity professionals",
      steps: [
        {
          icon: Code2,
          step: "الخطوة 1",
          stepEn: "Step 1",
          title: "توليد الكود الضعيف",
          titleEn: "Generate Vulnerable Code",
          desc: "استخدم AI لتوليد كود واقعي يحتوي على ثغرات أمنية في لغتك البرمجية المفضلة",
          descEn: "Use AI to generate realistic code with security vulnerabilities in your preferred language",
          color: "primary-accent"
        },
        {
          icon: Bug,
          step: "الخطوة 2",
          stepEn: "Step 2",
          title: "استغلال الثغرات بأمان",
          titleEn: "Exploit Safely",
          desc: "تدرب على استغلال الثغرات في بيئة آمنة ومحكومة لفهم كيفية عمل الهجمات",
          descEn: "Practice exploiting vulnerabilities in a safe, controlled environment to understand attacks",
          color: "danger"
        },
        {
          icon: BookCheck,
          step: "الخطوة 3",
          stepEn: "Step 3",
          title: "تعلّم الحل والحماية",
          titleEn: "Learn Fix & Prevention",
          desc: "احصل على الحل التفصيلي وأفضل الممارسات لحماية تطبيقاتك من هذه الثغرات",
          descEn: "Get detailed solutions and best practices to protect your applications",
          color: "success"
        }
      ],
      cta: "ابدأ رحلتك التعليمية الآن",
      ctaEn: "Start Your Learning Journey"
    },
    en: {
      title: "How Does It Work?",
      titleEn: "",
      subtitle: "Simple yet effective learning process that transforms beginners into cybersecurity professionals",
      subtitleEn: "",
      steps: [
        {
          icon: Code2,
          step: "Step 1",
          stepEn: "",
          title: "Generate Vulnerable Code",
          titleEn: "",
          desc: "Use AI to generate realistic code with security vulnerabilities in your preferred language",
          descEn: "",
          color: "primary-accent"
        },
        {
          icon: Bug,
          step: "Step 2",
          stepEn: "",
          title: "Exploit Safely",
          titleEn: "",
          desc: "Practice exploiting vulnerabilities in a safe, controlled environment to understand attacks",
          descEn: "",
          color: "danger"
        },
        {
          icon: BookCheck,
          step: "Step 3",
          stepEn: "",
          title: "Learn Fix & Prevention",
          titleEn: "",
          desc: "Get detailed solutions and best practices to protect your applications",
          descEn: "",
          color: "success"
        }
      ],
      cta: "Start Your Learning Journey",
      ctaEn: ""
    }
  };

  const t = content[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 opacity-30"
            style={{
              background: language === 'ar' 
                ? 'linear-gradient(to left, #3A4DFF, #C92032, #20C997)'
                : 'linear-gradient(to right, #3A4DFF, #C92032, #20C997)'
            }}
          ></div>

          {/* Steps Grid */}
          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            {t.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Card */}
                  <div 
                    className="group relative bg-gradient-to-br from-primary-secondary to-primary-dark rounded-2xl p-8 border-2 transition-all duration-300 h-full flex-1 hover:shadow-xl" 
                    style={{ 
                      borderColor: index === 0 ? 'rgba(58, 77, 255, 0.3)' : index === 1 ? 'rgba(201, 32, 50, 0.3)' : 'rgba(32, 201, 151, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = index === 0 ? '#3A4DFF' : index === 1 ? '#C92032' : '#20C997';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = index === 0 ? 'rgba(58, 77, 255, 0.3)' : index === 1 ? 'rgba(201, 32, 50, 0.3)' : 'rgba(32, 201, 151, 0.3)';
                    }}
                  >
                    {/* Step Badge */}
                    <div className="absolute -top-4 right-1/2 transform translate-x-1/2 px-5 py-2 rounded-full text-white font-bold text-base shadow-lg" style={{ backgroundColor: index === 0 ? '#3A4DFF' : index === 1 ? '#C92032' : '#20C997' }}>
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="mt-8 mb-6 inline-block p-6 rounded-2xl group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: index === 0 ? 'rgba(58, 77, 255, 0.1)' : index === 1 ? 'rgba(201, 32, 50, 0.1)' : 'rgba(32, 201, 151, 0.1)' }}>
                      <Icon className="w-12 h-12" style={{ color: index === 0 ? '#3A4DFF' : index === 1 ? '#C92032' : '#20C997' }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#cta"
            className="inline-block group relative px-8 py-4 bg-gradient-to-r from-primary-accent to-primary-highlight text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-accent/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.cta}
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${language === 'ar' ? 'rotate-180' : ''}`} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-highlight to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

