
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
        { year: '2019', event: 'Graduated with M.S. in Computer Science', type: 'education', description: 'Focused on AI and HCI research, GPA 3.9/4.0.' },
        { year: '2020', event: 'Graduated with B.Eng in Tsinghua SoA', type: 'education', description: 'Interdisciplinary learning combining art and technology.' },
        { year: '2021', event: 'Best Paper Award at CHI 2021', type: 'award', description: 'Top-tier computational design conference best paper award.' },
        { year: '2022', event: 'Joined Tech Unicorn as Senior AI PM', type: 'work', description: 'Led AI recommendation system product design, increased user engagement by 40%.' },
        { year: '2023', event: 'Product Manager of the Year', type: 'award', description: 'Recognized for outstanding contributions in AI product innovation.' },
        { year: '2025', event: 'Future Endeavors', type: 'future', description: 'Exploring new frontiers in generative AI and its application in creative industries.' },
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
        { year: '2019', event: '计算机科学硕士毕业', type: 'education', description: '专注于人工智能与人机交互研究，GPA 3.9/4.0。' },
        { year: '2020', event: '清华大学建筑学院工学学士毕业', type: 'education', description: '跨学科学习，结合艺术与技术。' },
        { year: '2021', event: 'CHI 2021 最佳论文奖', type: 'award', description: '计算设计领域顶级会议最佳论文奖。' },
        { year: '2022', event: '加入科技独角兽任高级AI产品经理', type: 'work', description: '负责AI推荐系统产品设计，用户活跃度提升40%。' },
        { year: '2023', event: '年度最佳产品经理', type: 'award', description: '因在AI产品创新方面的杰出贡献获得行业认可。' },
        { year: '2025', event: '未来探索', type: 'future', description: '在生成式AI及其在创意产业中的应用方面探索新的前沿。' },
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
            <div className="text-center mt-6 text-sm text-muted-foreground">
              <p>{language === 'zh' ? '如何上传简历：请将您的简历文件命名为 "resume.pdf"，然后上传到项目的 "public" 文件夹中。' : 'To upload your resume: Name your file "resume.pdf" and place it in the "public" folder of your project.'}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
