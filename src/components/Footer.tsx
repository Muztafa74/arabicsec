"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    ar: {
      tagline: "منصة تعليمية عربية متكاملة للأمن السيبراني",
      links: {
        title: "روابط سريعة",
        items: [
          { text: "الدروس", href: "http://localhost:3001/education/lessons" },
          { text: "المشاريع", href: "http://localhost:3001/VulnPlayground" },
          { text: "التوثيق", href: "https://github.com/yourusername/arabicsec#readme" },
          { text: "GitHub", href: "https://github.com/yourusername/arabicsec" }
        ]
      },
      resources: {
        title: "الموارد",
        items: [
          { text: "دليل البدء", href: "https://github.com/yourusername/arabicsec#getting-started" },
          { text: "واجهة API", href: "http://localhost:5000/api-docs" },
          { text: "أمثلة", href: "http://localhost:3001/VulnPlayground" },
          { text: "المساهمة", href: "https://github.com/yourusername/arabicsec/blob/main/CONTRIBUTING.md" }
        ]
      },
      copyright: "© ArabicSec 2025 • جميع الحقوق محفوظة. متاح للاستخدام التعليمي",
      builtWith: "مبني بـ"
    },
    en: {
      tagline: "Comprehensive Arabic cybersecurity education platform",
      links: {
        title: "Quick Links",
        items: [
          { text: "Lessons", href: "http://localhost:3001/education/lessons" },
          { text: "Projects", href: "http://localhost:3001/VulnPlayground" },
          { text: "Documentation", href: "https://github.com/yourusername/arabicsec#readme" },
          { text: "GitHub", href: "https://github.com/yourusername/arabicsec" }
        ]
      },
      resources: {
        title: "Resources",
        items: [
          { text: "Getting Started", href: "https://github.com/yourusername/arabicsec#getting-started" },
          { text: "API Docs", href: "http://localhost:5000/api-docs" },
          { text: "Examples", href: "http://localhost:3001/VulnPlayground" },
          { text: "Contributing", href: "https://github.com/yourusername/arabicsec/blob/main/CONTRIBUTING.md" }
        ]
      },
      copyright: "© ArabicSec 2025 • All rights reserved. Available for educational use",
      builtWith: "Built with"
    }
  };

  const t = content[language];

  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername/arabicsec", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/arabicsec", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@arabicsec.com", label: "Email" }
  ];

  return (
    <footer className="bg-primary-secondary/50 border-t border-primary-accent/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className={`flex items-center gap-3 mb-4 ${language === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
              <Shield className="w-10 h-10 text-primary-accent" />
              <span className="text-3xl font-bold gradient-text">ArabicSec</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {t.tagline}
            </p>
            <div className={`flex gap-4 ${language === 'ar' ? 'justify-end md:justify-start' : ''}`}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 bg-primary-dark/50 hover:bg-primary-accent rounded-xl transition-all duration-300 group hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">{t.links.title}</h4>
            <ul className="space-y-3">
              {t.links.items.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-highlight transition-colors duration-300 inline-block"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">{t.resources.title}</h4>
            <ul className="space-y-3">
              {t.resources.items.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-primary-highlight transition-colors duration-300 inline-block"
                  >
                    {resource.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-primary-accent/10">
          <div className={`flex flex-col md:flex-row ${language === 'ar' ? 'md:flex-row-reverse' : ''} justify-between items-center gap-4 text-center md:text-left`}>
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              {t.copyright}
            </p>

            {/* Built With */}
            <p className="text-gray-400 text-sm">
              {t.builtWith} <span className="text-primary-highlight font-semibold">Next.js + TypeScript + Groq AI</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

