"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield } from 'lucide-react';

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "تعلّم الأمن السيبراني",
      titleHighlight: "بالممارسة العملية",
      subtitle: "منصة تعليمية عربية متكاملة تجمع بين الدروس التفاعلية وتوليد الكود الضعيف بالذكاء الاصطناعي",
      cta1: "ابدأ التعلم الآن",
      cta2: "عرض المشاريع",
    },
    en: {
      title: "Learn Cybersecurity",
      titleHighlight: "Through Hands-On Practice",
      subtitle: "Comprehensive Arabic-first educational platform combining interactive lessons with AI-powered vulnerable code generation",
      cta1: "Start Learning",
      cta2: "View Projects",
    }
  };

  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-8 lg:px-12">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-accent/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-primary-highlight/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      {/* Content Container */}
      <div className={`relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${language === 'ar' ? 'lg:grid-flow-dense' : ''}`}>
        
        {/* Text Content - يمين في العربي، شمال في الإنجليزي */}
        <motion.div
          initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`${language === 'ar' ? 'lg:col-start-1 text-right lg:pr-8' : 'text-left lg:pl-8'} space-y-6`}
        >
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-xl">
            <div className="mb-2">{t.title}</div>
            <span className="gradient-text block">{t.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 max-w-md">
            <a
              href="http://localhost:3001/education/lessons"
              className="group relative px-8 py-4 bg-primary-accent text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-accent/50 text-center"
            >
              <span className="relative z-10">{t.cta1}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-accent to-primary-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="http://localhost:3001/VulnPlayground"
              className="px-8 py-4 bg-transparent border-2 border-primary-highlight text-primary-highlight font-semibold rounded-xl transition-all duration-300 hover:bg-primary-highlight hover:text-primary-dark hover:scale-105 text-center"
            >
              {t.cta2}
            </a>
          </div>
        </motion.div>

        {/* Simple Animated Logo - شمال في العربي، يمين في الإنجليزي */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`relative flex items-center justify-center ${language === 'ar' ? 'lg:col-start-2' : ''}`}
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
            {/* Pulsing Background Glow */}
            <motion.div
              animate={{ 
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-br from-primary-accent/20 to-primary-highlight/20 rounded-full blur-3xl"
            />

            {/* Main Logo Circle with Floating Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ 
                scale: 1,
                y: [0, -15, 0],
              }}
              transition={{ 
                scale: { duration: 0.8, delay: 0.5, type: "spring" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-64 h-64 bg-gradient-to-br from-primary-secondary to-primary-dark rounded-full flex items-center justify-center border-2 border-primary-accent/30 shadow-2xl"
            >
              {/* Inner Circle Border Animation - Faster */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, #3A4DFF 50%, transparent 100%)',
                  opacity: 0.4,
                }}
              />

              {/* Lock Icon with Enhanced Animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  rotateY: [0, 10, 0, -10, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1 },
                  y: { duration: 0.6, delay: 1 },
                  rotateY: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
                className="relative z-10 cursor-pointer"
              >
                <motion.svg 
                  width="120" 
                  height="120" 
                  viewBox="0 0 100 100" 
                  className="drop-shadow-2xl"
                  animate={{
                    filter: [
                      "drop-shadow(0 0 10px #3A4DFF)",
                      "drop-shadow(0 0 20px #00D4FF)",
                      "drop-shadow(0 0 10px #3A4DFF)",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <defs>
                    <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3A4DFF" />
                      <stop offset="100%" stopColor="#00D4FF" />
                    </linearGradient>
                  </defs>

                  {/* Lock Body with Pulse */}
                  <motion.rect
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                    }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    x="30"
                    y="45"
                    width="40"
                    height="35"
                    rx="4"
                    fill="url(#lockGradient)"
                    stroke="#00D4FF"
                    strokeWidth="2"
                  />

                  {/* Lock Shackle with Animation */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: 1,
                    }}
                    transition={{ 
                      pathLength: { duration: 1, delay: 1.4 },
                    }}
                    d="M 35 45 L 35 30 Q 35 20 50 20 Q 65 20 65 30 L 65 45"
                    fill="none"
                    stroke="url(#lockGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Keyhole with Glow Animation */}
                  <motion.circle
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      scale: { duration: 0.4, delay: 1.6 },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }
                    }}
                    cx="50"
                    cy="58"
                    r="4"
                    fill="#00D4FF"
                  />
                  <motion.rect
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 1.8 }}
                    x="48"
                    y="58"
                    width="4"
                    height="10"
                    rx="1"
                    fill="#00D4FF"
                  />
                </motion.svg>
              </motion.div>

              {/* Corner Accents with Orbiting Animation */}
              {[0, 90, 180, 270].map((rotation, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.3, 1],
                    rotate: rotation + 360
                  }}
                  transition={{ 
                    opacity: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                    scale: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute w-8 h-8"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${rotation}deg) translate(0, -110px)`,
                  }}
                >
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: i % 2 === 0 ? '#3A4DFF' : '#00D4FF',
                      boxShadow: `0 0 15px ${i % 2 === 0 ? '#3A4DFF' : '#00D4FF'}`,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Rotating Ring - Faster */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-72 h-72 rounded-full border border-dashed border-primary-accent/30" />
            </motion.div>

            {/* Additional Orbiting Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-80 h-80 rounded-full border border-dotted border-primary-highlight/20" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-accent rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-primary-accent rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

