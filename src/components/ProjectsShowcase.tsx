"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Github, Globe, Cpu } from 'lucide-react';

export default function ProjectsShowcase() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "المشاريع المتكاملة",
      titleEn: "Integrated Projects",
      subtitle: "نظام تعليمي متكامل يجمع بين المنصة التعليمية ومحرك الذكاء الاصطناعي",
      subtitleEn: "Complete educational system combining learning platform with AI engine",
      projects: [
        {
          name: "ArabicSec",
          nameEn: "ArabicSec Platform",
          desc: "المنصة التعليمية الرئيسية بواجهة عربية أولاً تحتوي على 7 دروس تفاعلية، اختبارات، وأدلة الحماية",
          descEn: "Main Arabic-first educational platform with 7 interactive lessons, quizzes, and prevention guides",
          tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "React Query", "Framer Motion"],
          icon: Globe,
          color: "primary-accent",
          github: "https://github.com/yourusername/arabicsec",
          demo: "http://localhost:3001"
        },
        {
          name: "SASTify VulnPlayground",
          nameEn: "SASTify / VulnPlayground",
          desc: "محرك الذكاء الاصطناعي لتوليد الكود الضعيف في أكثر من 56 لغة برمجة مع شروحات مفصلة للحلول",
          descEn: "AI engine for generating vulnerable code in 56+ languages with detailed solution explanations",
          tech: ["Flask", "Python", "Groq AI", "LLaMA 3.3 70B", "RESTful API"],
          icon: Cpu,
          color: "primary-highlight",
          github: "https://github.com/yourusername/sastify-backend",
          demo: "http://localhost:3001/VulnPlayground"
        }
      ]
    },
    en: {
      title: "Integrated Projects",
      titleEn: "",
      subtitle: "Complete educational system combining learning platform with AI engine",
      subtitleEn: "",
      projects: [
        {
          name: "ArabicSec Platform",
          nameEn: "",
          desc: "Main Arabic-first educational platform with 7 interactive lessons, quizzes, and prevention guides",
          descEn: "",
          tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "React Query", "Framer Motion"],
          icon: Globe,
          color: "primary-accent",
          github: "#",
          demo: "#"
        },
        {
          name: "SASTify / VulnPlayground",
          nameEn: "",
          desc: "AI engine for generating vulnerable code in 56+ languages with detailed solution explanations",
          descEn: "",
          tech: ["Flask", "Python", "Groq AI", "LLaMA 3.3 70B", "RESTful API"],
          icon: Cpu,
          color: "primary-highlight",
          github: "#",
          demo: "#"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-primary-secondary to-primary-dark rounded-2xl p-8 border-2 border-primary-accent/20 hover:border-primary-accent/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background Animation */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-accent/20 to-transparent rounded-bl-full opacity-50"></div>
                
                <div className="relative z-10">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 bg-${project.color}/10 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-10 h-10 text-${project.color}`} />
                    </div>
                    <span className={`px-4 py-2 bg-${project.color}/20 text-${project.color} rounded-full text-sm font-semibold`}>
                      {index === 0 ? (language === 'ar' ? 'الواجهة' : 'Frontend') : (language === 'ar' ? 'المحرك' : 'Backend')}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary-highlight transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-dark/50 border border-primary-accent/30 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-accent/20 hover:bg-primary-accent text-white rounded-lg transition-all duration-300 group/btn"
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="font-semibold">GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-highlight/20 hover:bg-primary-highlight hover:text-primary-dark text-primary-highlight rounded-lg transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      <span className="font-semibold">
                        {language === 'ar' ? 'تجربة' : 'Demo'}
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-success/10 border border-success/30 rounded-xl text-center"
        >
          <p className="text-success font-semibold text-lg">
            {language === 'ar' 
              ? '🔗 المشروعان متكاملان ويعملان معاً لتوفير تجربة تعليمية شاملة'
              : '🔗 Both projects work together seamlessly to provide a complete learning experience'
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
}

