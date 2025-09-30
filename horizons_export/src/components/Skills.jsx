
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Brain, Users, Zap, Target } from 'lucide-react';

const Skills = ({ language }) => {
  const content = {
    zh: {
      title: '核心技能',
      subtitle: '多元化技能组合，驱动创新',
      skillCategories: [
        {
          icon: Brain,
          title: 'AI & 机器学习',
          skills: [
            { name: 'TensorFlow/PyTorch', level: 90 },
            { name: '自然语言处理', level: 85 },
            { name: '计算机视觉', level: 80 },
            { name: '推荐系统', level: 95 }
          ]
        },
        {
          icon: Palette,
          title: '设计 & 可视化',
          skills: [
            { name: 'UI/UX设计', level: 95 },
            { name: 'D3.js', level: 90 },
            { name: 'Figma/Sketch', level: 85 },
            { name: '数据可视化', level: 92 }
          ]
        },
        {
          icon: Code,
          title: '技术开发',
          skills: [
            { name: 'React/Vue.js', level: 88 },
            { name: 'Python', level: 92 },
            { name: 'JavaScript', level: 90 },
            { name: 'Node.js', level: 80 }
          ]
        },
        {
          icon: Users,
          title: '产品 & 运营',
          skills: [
            { name: '产品策略', level: 90 },
            { name: '用户研究', level: 88 },
            { name: '数据分析', level: 85 },
            { name: '项目管理', level: 82 }
          ]
        },
        {
          icon: Zap,
          title: '创意 & 艺术',
          skills: [
            { name: '音乐制作', level: 85 },
            { name: '装置艺术', level: 80 },
            { name: '创意编程', level: 88 },
            { name: '跨媒体创作', level: 82 }
          ]
        },
        {
          icon: Target,
          title: '研究 & 学术',
          skills: [
            { name: '学术写作', level: 90 },
            { name: '实验设计', level: 85 },
            { name: '统计分析', level: 88 },
            { name: '论文发表', level: 80 }
          ]
        }
      ]
    },
    en: {
      title: 'Core Skills',
      subtitle: 'Diverse Skill Set Driving Innovation',
      skillCategories: [
        {
          icon: Brain,
          title: 'AI & Machine Learning',
          skills: [
            { name: 'TensorFlow/PyTorch', level: 90 },
            { name: 'Natural Language Processing', level: 85 },
            { name: 'Computer Vision', level: 80 },
            { name: 'Recommendation Systems', level: 95 }
          ]
        },
        {
          icon: Palette,
          title: 'Design & Visualization',
          skills: [
            { name: 'UI/UX Design', level: 95 },
            { name: 'D3.js', level: 90 },
            { name: 'Figma/Sketch', level: 85 },
            { name: 'Data Visualization', level: 92 }
          ]
        },
        {
          icon: Code,
          title: 'Technical Development',
          skills: [
            { name: 'React/Vue.js', level: 88 },
            { name: 'Python', level: 92 },
            { name: 'JavaScript', level: 90 },
            { name: 'Node.js', level: 80 }
          ]
        },
        {
          icon: Users,
          title: 'Product & Operations',
          skills: [
            { name: 'Product Strategy', level: 90 },
            { name: 'User Research', level: 88 },
            { name: 'Data Analytics', level: 85 },
            { name: 'Project Management', level: 82 }
          ]
        },
        {
          icon: Zap,
          title: 'Creative & Arts',
          skills: [
            { name: 'Music Production', level: 85 },
            { name: 'Installation Art', level: 80 },
            { name: 'Creative Coding', level: 88 },
            { name: 'Cross-media Creation', level: 82 }
          ]
        },
        {
          icon: Target,
          title: 'Research & Academic',
          skills: [
            { name: 'Academic Writing', level: 90 },
            { name: 'Experimental Design', level: 85 },
            { name: 'Statistical Analysis', level: 88 },
            { name: 'Paper Publication', level: 80 }
          ]
        }
      ]
    }
  };

  return (
    <section id="skills" className="py-24 bg-background">
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
          <p className="text-xl text-foreground/70">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground/80 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;