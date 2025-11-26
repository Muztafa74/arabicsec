"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    ar: {
      nav: [
        { text: "الرئيسية", textEn: "Home", href: "#home" },
        { text: "المميزات", textEn: "Features", href: "#features" },
        { text: "المشاريع", textEn: "Projects", href: "#projects" },
        { text: "الآلية", textEn: "How It Works", href: "#how-it-works" }
      ],
      cta: "ابدأ الآن",
      ctaEn: "Get Started"
    },
    en: {
      nav: [
        { text: "Home", textEn: "", href: "#home" },
        { text: "Features", textEn: "", href: "#features" },
        { text: "Projects", textEn: "", href: "#projects" },
        { text: "How It Works", textEn: "", href: "#how-it-works" }
      ],
      cta: "Get Started",
      ctaEn: ""
    }
  };

  const t = content[language];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary-dark/95 backdrop-blur-lg shadow-lg shadow-primary-accent/10 border-b border-primary-accent/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 bg-primary-accent/10 rounded-lg group-hover:bg-primary-accent/20 transition-colors duration-300">
              <Shield className="w-8 h-8 text-primary-accent" />
            </div>
            <span className="text-2xl font-bold gradient-text">ArabicSec</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {t.nav.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item.text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Section: Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-primary-secondary hover:bg-primary-accent/20 rounded-lg transition-all duration-300 border border-primary-accent/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4" />
              <span className="font-semibold">{language === 'ar' ? 'EN' : 'AR'}</span>
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="#cta"
              className="px-6 py-2 bg-primary-accent hover:bg-primary-highlight text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary-accent/50 hover:shadow-primary-highlight/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.cta}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-primary-secondary hover:bg-primary-accent/20 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-dark/95 backdrop-blur-lg border-t border-primary-accent/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Navigation Links */}
              {t.nav.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-primary-secondary transition-all duration-300"
                >
                  {item.text}
                  {language === 'ar' && item.textEn && (
                    <span className="block text-sm text-gray-500 font-english">{item.textEn}</span>
                  )}
                </motion.a>
              ))}

              {/* Language Toggle Mobile */}
              <motion.button
                onClick={toggleLanguage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-secondary hover:bg-primary-accent/20 rounded-lg transition-all duration-300 border border-primary-accent/30"
              >
                <Globe className="w-5 h-5" />
                <span className="font-semibold">
                  {language === 'ar' ? 'English' : 'العربية'}
                </span>
              </motion.button>

              {/* CTA Button Mobile */}
              <motion.a
                href="#cta"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="block text-center px-6 py-3 bg-primary-accent hover:bg-primary-highlight text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary-accent/50"
              >
                {t.cta}
                {language === 'ar' && (
                  <span className="block text-sm mt-1 font-english">{t.ctaEn}</span>
                )}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

