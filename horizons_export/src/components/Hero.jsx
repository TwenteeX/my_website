import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = ({ language }) => {
  const content = {
    en: {
      greeting: 'Hello, I am',
      name: 'Yunxiang Ma',
      title: 'AI Product Manager & Computational Designer',
      subtitle: 'Transforming Complex Technology into Elegant Product Experiences',
      description: 'Focused on AI product design, data visualization, and computational design, blending academic research with industry practice to create meaningful digital experiences.',
      cta: 'View Work',
      contact: 'Contact Me'
    },
    zh: {
      greeting: '你好，我是',
      name: '马云翔',
      title: 'AI产品经理 & 计算设计师',
      subtitle: '将复杂技术转化为优雅产品体验',
      description: '专注于AI产品设计、数据可视化与计算设计，融合学术研究与行业实践，创造有意义的数字体验。',
      cta: '查看作品',
      contact: '联系我'
    }
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/TwenteeX' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/yunxiang-ma-39a970332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { icon: Mail, label: 'Email', url: 'mailto:yunxianm@andrew.cmu.edu' }
  ];

  const handleEmailClick = (e, url) => {
    if (url.startsWith('mailto:')) {
      // Allow default mail client to open
      return;
    }
    e.preventDefault();
    toast({
      title: "🚧 功能开发中",
      description: "邮箱功能暂未实现🚀"
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 floating-animation"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="w-full flex">
          <div className="w-1/6 flex-shrink-0 hidden md:block"></div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/70 mb-4"
            >
              {content[language].greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-display font-bold mb-2"
            >
              <span className="gradient-text">{content[language].name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-medium text-foreground/90 mb-6"
            >
              {content[language].title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-foreground/70 mb-8 max-w-2xl"
            >
              {content[language].subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-base text-foreground/60 mb-12 max-w-2xl leading-relaxed"
            >
              {content[language].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 items-start mb-12"
            >
              <Button
                size="lg"
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full glow-effect"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                {content[language].cta}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                {content[language].contact}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex space-x-6"
            >
              {socialLinks.map(({ icon: Icon, label, url }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => label === 'Email' ? handleEmailClick(e, url) : undefined}
                  className="p-3 glass-effect rounded-full text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;