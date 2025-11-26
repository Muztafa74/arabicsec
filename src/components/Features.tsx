"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Brain, BookOpen, Target, TrendingUp, Globe, Shield } from 'lucide-react';

function Features() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "لماذا ArabicSec؟",
      titleEn: "Why ArabicSec?",
      subtitle: "منصة متكاملة تجمع أفضل الأدوات لتعلم الأمن السيبراني",
      subtitleEn: "Complete platform combining the best tools for learning cybersecurity",
      features: [
        {
          icon: Brain,
          title: "ذكاء اصطناعي متقدم",
          titleEn: "Advanced AI",
          desc: "توليد كود ضعيف واقعي في أكثر من 56 لغة برمجة باستخدام Groq AI (LLaMA 3.3 70B)",
          descEn: "Generate realistic vulnerable code in 56+ languages using Groq AI (LLaMA 3.3 70B)",
          color: "primary-accent"
        },
        {
          icon: BookOpen,
          title: "7 دروس تفاعلية",
          titleEn: "7 Interactive Lessons",
          desc: "تعلم الثغرات الأمنية الأكثر شيوعاً: SQL Injection, XSS, CSRF, Command Execution وأكثر",
          descEn: "Learn most common vulnerabilities: SQL Injection, XSS, CSRF, Command Execution & more",
          color: "primary-highlight"
        },
        {
          icon: Target,
          title: "التعلّم بالممارسة",
          titleEn: "Learn by Doing",
          desc: "استغل الثغرات في بيئة آمنة، ثم تعلّم كيفية إصلاحها باستخدام أفضل الممارسات",
          descEn: "Exploit vulnerabilities safely, then learn how to fix them with best practices",
          color: "success"
        },
        {
          icon: TrendingUp,
          title: "اختبارات وتقييم",
          titleEn: "Quizzes & Assessment",
          desc: "اختبر معرفتك بعد كل درس واحصل على تغذية راجعة فورية لتتبع تقدمك",
          descEn: "Test your knowledge after each lesson with immediate feedback & progress tracking",
          color: "primary-accent"
        },
        {
          icon: Globe,
          title: "أكثر من 56 لغة برمجة",
          titleEn: "56+ Programming Languages",
          desc: "مارس الأمن السيبراني بلغتك المفضلة: Python, JavaScript, PHP, Java, C#, Go وغيرها",
          descEn: "Practice cybersecurity in your preferred language: Python, JavaScript, PHP, Java, C#, Go & more",
          color: "primary-highlight"
        },
        {
          icon: Shield,
          title: "أساليب الحماية",
          titleEn: "Prevention Techniques",
          desc: "تعلّم كيفية كتابة كود آمن مع أمثلة عملية ومقارنات بين الكود الضعيف والآمن",
          descEn: "Learn secure coding with practical examples & side-by-side vulnerable vs secure code",
          color: "success"
        }
      ]
    },
    en: {
      title: "Why ArabicSec?",
      titleEn: "",
      subtitle: "Complete platform combining the best tools for learning cybersecurity",
      subtitleEn: "",
      features: [
        {
          icon: Brain,
          title: "Advanced AI",
          titleEn: "",
          desc: "Generate realistic vulnerable code in 56+ languages using Groq AI (LLaMA 3.3 70B)",
          descEn: "",
          color: "primary-accent"
        },
        {
          icon: BookOpen,
          title: "7 Interactive Lessons",
          titleEn: "",
          desc: "Learn most common vulnerabilities: SQL Injection, XSS, CSRF, Command Execution & more",
          descEn: "",
          color: "primary-highlight"
        },
        {
          icon: Target,
          title: "Learn by Doing",
          titleEn: "",
          desc: "Exploit vulnerabilities safely, then learn how to fix them with best practices",
          descEn: "",
          color: "success"
        },
        {
          icon: TrendingUp,
          title: "Quizzes & Assessment",
          titleEn: "",
          desc: "Test your knowledge after each lesson with immediate feedback & progress tracking",
          descEn: "",
          color: "primary-accent"
        },
        {
          icon: Globe,
          title: "56+ Programming Languages",
          titleEn: "",
          desc: "Practice cybersecurity in your preferred language: Python, JavaScript, PHP, Java, C#, Go & more",
          descEn: "",
          color: "primary-highlight"
        },
        {
          icon: Shield,
          title: "Prevention Techniques",
          titleEn: "",
          desc: "Learn secure coding with practical examples & side-by-side vulnerable vs secure code",
          descEn: "",
          color: "success"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-secondary/30">
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-primary-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-accent/20 hover:border-primary-accent/50 transition-all duration-300"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-block p-4 bg-${feature.color}/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
