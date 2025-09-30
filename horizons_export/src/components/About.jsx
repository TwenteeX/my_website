
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = ({ language }) => {
  const content = {
    en: {
      title: 'About Me',
      subtitle: 'Interdisciplinary Innovator, Connecting Technology and Art',
      description: 'I am an interdisciplinary innovator focused on AI product design, with deep technical background and keen design intuition. I believe the best products are born from the perfect combination of technical depth and humanistic care.',
      timelineTitle: 'My Journey',
      timeline: [
        { year: '2020', event: 'Enrolled in Tsinghua School of Architecture', type: 'education', description: 'Started interdisciplinary studies combining architecture, design, and technology.' },
        { year: '2021', event: 'Joined Tsinghua Zijing Media', type: 'work', description: 'Began four-year journey in new media operations and content creation.' },
        { year: '2023', event: 'Discovered Interaction Design', type: 'education', description: 'Won first prize in Tsinghua Software Development Innovation Competition.' },
        { year: '2024', event: 'Completed Multiple Projects', type: 'work', description: 'Including EEG-informed Exhibition Design and other interdisciplinary projects.' },
        { year: '2025', event: 'Graduated from Tsinghua SoA', type: 'education', description: 'Work selected for undergraduate exhibition, marking the end of undergraduate journey.' },
        { year: 'Future', event: 'Continuing Studies at CMU', type: 'future', description: 'Pursuing Computational Design program at Carnegie Mellon University for further research and exploration.' },
      ],
      resume: 'Resume / CV',
      download: 'Download PDF',
      viewOnline: 'Interactive Version'
    },
    zh: {
      title: '关于我',
      subtitle: '跨学科创新者，连接技术与艺术',
      description: '我是一名专注于AI产品设计的跨学科创新者，拥有深厚的技术背景和敏锐的设计直觉。我相信最好的产品诞生于技术深度与人文关怀的完美结合。',
      timelineTitle: '我的历程',
      timeline: [
        { year: '2020年', event: '入学清华大学建筑学院', type: 'education', description: '开始跨学科学习，结合建筑、设计与技术。' },
        { year: '2021年', event: '加入清华大学紫荆传媒', type: 'work', description: '开始长达四年的新媒体运营经历。' },
        { year: '2023年', event: '接触交互设计', type: 'education', description: '获得清华大学软件开发创新创意大赛一等奖。' },
        { year: '2024年', event: '完成多个项目', type: 'work', description: '包括EEG-informed Exhibition Design在内的多个跨学科项目。' },
        { year: '2025年', event: '从清华大学建筑学院毕业', type: 'education', description: '作品入选本科生作品展，完成本科学业。' },
        { year: '未来展望', event: '在卡耐基梅隆继续学业', type: 'future', description: '在卡耐基梅隆Computational Design项目继续学业和研究探索。' },
      ],
      resume: '简历',
      download: '下载PDF',
      viewOnline: '在线互动版'
    }
  };

  const timelineColors = ['#E5E7EB', '#D1D5DB', '#9CA3AF', '#6B7280', '#4B5563', '#374151'];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            {content[language].title}
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            {content[language].description}
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* Vertical Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-12 text-center">{content[language].timelineTitle}</h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"></div>
              {content[language].timeline.map((item, index) => (
                <div key={index} className="relative pl-20 pb-12">
                  <div className="absolute left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: timelineColors[index] }}></div>
                  <div className="absolute left-12 top-2 h-px w-8 bg-gray-300"></div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p className="absolute -left-4 top-1 text-sm text-muted-foreground">{item.year}</p>
                    <h4 className="font-semibold text-lg text-foreground">{item.event}</h4>
                    <p className="text-muted-foreground mt-1">{item.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Resume */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">{content[language].resume}</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-900 text-white glow-effect">
                <a href="/resume.pdf" download="YunxiangMa_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  {content[language].download}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  {content[language].viewOnline}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
