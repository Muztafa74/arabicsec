"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Rocket, Github, BookOpen } from 'lucide-react';

export default function CTA() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "جاهز لتصبح خبيراً في الأمن السيبراني؟",
      titleEn: "Ready to Become a Cybersecurity Expert?",
      subtitle: "انضم إلى آلاف المطورين الذين يتعلمون الأمن السيبراني بطريقة عملية وتفاعلية",
      subtitleEn: "Join thousands of developers learning cybersecurity through hands-on practice",
      buttons: [
        {
          text: "ابدأ التعلم المجاني",
          textEn: "Start Free Learning",
          icon: Rocket,
          primary: true,
          href: "http://localhost:3001/education/lessons"
        },
        {
          text: "المساهمة في GitHub",
          textEn: "Contribute on GitHub",
          icon: Github,
          primary: false,
          href: "https://github.com/yourusername/arabicsec"
        },
        {
          text: "قراءة التوثيق",
          textEn: "Read Documentation",
          icon: BookOpen,
          primary: false,
          href: "https://github.com/yourusername/arabicsec#readme"
        }
      ]
    },
    en: {
      title: "Ready to Become a Cybersecurity Expert?",
      titleEn: "",
      subtitle: "Join thousands of developers learning cybersecurity through hands-on practice",
      subtitleEn: "",
      buttons: [
        {
          text: "Start Free Learning",
          textEn: "",
          icon: Rocket,
          primary: true,
          href: "#features"
        },
        {
          text: "Contribute on GitHub",
          textEn: "",
          icon: Github,
          primary: false,
          href: "#"
        },
        {
          text: "Read Documentation",
          textEn: "",
          icon: BookOpen,
          primary: false,
          href: "#"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-primary-accent/10 via-primary-highlight/10 to-success/10"></div>
        <div className="absolute w-96 h-96 bg-primary-accent/30 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-primary-highlight/30 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-primary-secondary/80 to-primary-dark/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-primary-accent/30 shadow-2xl"
        >
          {/* Title */}
          <div className="mb-6 px-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text leading-tight mx-auto" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal', maxWidth: '100%' }}>
              {t.title}
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-12 px-4 leading-relaxed" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            {t.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {t.buttons.map((button, index) => {
              const Icon = button.icon;
              return (
                <motion.a
                  key={index}
                  href={button.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    group relative px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 w-full sm:w-auto
                    ${button.primary
                      ? 'bg-gradient-to-r from-primary-accent to-primary-highlight text-white shadow-lg shadow-primary-accent/50 hover:shadow-2xl hover:shadow-primary-accent/70'
                      : 'bg-transparent border-2 border-primary-highlight text-primary-highlight hover:bg-primary-highlight hover:text-primary-dark'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Icon className="w-5 h-5" />
                    {button.text}
                  </span>
                  {button.primary && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-highlight to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "100%", label: language === 'ar' ? "مجاني" : "Free" },
              { value: "24/7", label: language === 'ar' ? "متاح دائماً" : "Available" },
              { value: "Open", label: language === 'ar' ? "مفتوح المصدر" : "Source" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-highlight mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

