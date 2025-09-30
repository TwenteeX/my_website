
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Experience = ({ language }) => {
  const content = {
    zh: {
      title: '经历与成就',
      subtitle: '学术与行业的双重积累',
      tabs: [
        { id: 'work', name: '工作经历', icon: Calendar },
        { id: 'education', name: '教育背景', icon: BookOpen },
        { id: 'achievements', name: '荣誉奖项', icon: Award }
      ],
      work: [
        {
          title: '高级AI产品经理',
          company: '科技独角兽公司',
          period: '2022 - 至今',
          location: '北京',
          description: '负责AI推荐系统产品设计，用户活跃度提升40%，主导多个创新项目从0到1的产品化过程。',
          highlights: ['领导10人跨职能团队', '年度最佳产品奖', 'DAU提升40%']
        },
        {
          title: '数据可视化设计师',
          company: '知名互联网公司',
          period: '2020 - 2022',
          location: '上海',
          description: '设计并开发企业级数据可视化平台，服务超过1000家企业客户，获得行业认可。',
          highlights: ['服务1000+企业', '平台用户满意度95%', '设计专利3项']
        },
        {
          title: '研究助理',
          company: '顶尖研究院',
          period: '2019 - 2020',
          location: '北京',
          description: '参与计算设计前沿研究，发表多篇高质量学术论文，获得国际会议最佳论文奖。',
          highlights: ['发表论文5篇', '最佳论文奖', '国际会议演讲']
        }
      ],
      education: [
        {
          degree: '计算机科学硕士',
          school: '清华大学',
          period: '2017 - 2019',
          location: '北京',
          description: '专注于人工智能与人机交互研究，GPA 3.9/4.0，获得优秀毕业生称号。',
          highlights: ['GPA 3.9/4.0', '优秀毕业生', '国家奖学金']
        },
        {
          degree: '设计学学士',
          school: '中央美术学院',
          period: '2013 - 2017',
          location: '北京',
          description: '跨学科学习，结合艺术与技术，多次获得设计竞赛奖项，培养了独特的审美视角。',
          highlights: ['设计竞赛金奖', '学生会主席', '交换生项目']
        }
      ],
      achievements: [
        {
          title: '年度最佳产品经理',
          organization: '中国产品经理大会',
          year: '2023',
          description: '因在AI产品创新方面的杰出贡献获得行业认可'
        },
        {
          title: '最佳论文奖',
          organization: 'CHI 2021',
          year: '2021',
          description: '计算设计领域顶级会议最佳论文奖'
        },
        {
          title: '创新设计奖',
          organization: '红点设计奖',
          year: '2020',
          description: '数据可视化作品获得国际设计大奖'
        }
      ]
    },
    en: {
      title: 'Experience & Achievements',
      subtitle: 'Dual Accumulation in Academia and Industry',
      tabs: [
        { id: 'work', name: 'Work Experience', icon: Calendar },
        { id: 'education', name: 'Education', icon: BookOpen },
        { id: 'achievements', name: 'Awards', icon: Award }
      ],
      work: [
        {
          title: 'Senior AI Product Manager',
          company: 'Tech Unicorn Company',
          period: '2022 - Present',
          location: 'Beijing',
          description: 'Led AI recommendation system product design, increased user engagement by 40%, spearheaded multiple 0-to-1 innovation projects.',
          highlights: ['Led 10-person cross-functional team', 'Product of the Year Award', '40% DAU increase']
        },
        {
          title: 'Data Visualization Designer',
          company: 'Leading Internet Company',
          period: '2020 - 2022',
          location: 'Shanghai',
          description: 'Designed and developed enterprise-level data visualization platform, serving over 1000 enterprise clients with industry recognition.',
          highlights: ['Served 1000+ enterprises', '95% user satisfaction', '3 design patents']
        },
        {
          title: 'Research Assistant',
          company: 'Top Research Institute',
          period: '2019 - 2020',
          location: 'Beijing',
          description: 'Participated in cutting-edge computational design research, published multiple high-quality papers, won best paper award.',
          highlights: ['5 published papers', 'Best Paper Award', 'International conference speaker']
        }
      ],
      education: [
        {
          degree: 'Master of Computer Science',
          school: 'Tsinghua University',
          period: '2017 - 2019',
          location: 'Beijing',
          description: 'Focused on AI and HCI research, GPA 3.9/4.0, awarded Outstanding Graduate.',
          highlights: ['GPA 3.9/4.0', 'Outstanding Graduate', 'National Scholarship']
        },
        {
          degree: 'Bachelor of Design',
          school: 'Central Academy of Fine Arts',
          period: '2013 - 2017',
          location: 'Beijing',
          description: 'Interdisciplinary learning combining art and technology, multiple design competition awards, developed unique aesthetic perspective.',
          highlights: ['Design Competition Gold', 'Student Council President', 'Exchange Program']
        }
      ],
      achievements: [
        {
          title: 'Product Manager of the Year',
          organization: 'China PM Conference',
          year: '2023',
          description: 'Recognized for outstanding contributions in AI product innovation'
        },
        {
          title: 'Best Paper Award',
          organization: 'CHI 2021',
          year: '2021',
          description: 'Best paper award at top-tier computational design conference'
        },
        {
          title: 'Innovation Design Award',
          organization: 'Red Dot Design Award',
          year: '2020',
          description: 'International design award for data visualization work'
        }
      ]
    }
  };

  const [activeTab, setActiveTab] = React.useState('work');

  const renderContent = () => {
    switch (activeTab) {
      case 'work':
        return (
          <div className="space-y-8">
            {content[language].work.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <p className="text-indigo-600 font-medium mb-1">
                      {job.company}
                    </p>
                    <div className="flex items-center text-muted-foreground text-sm space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {job.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={highlightIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-8">
            {content[language].education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-indigo-600 font-medium mb-1">
                      {edu.school}
                    </p>
                    <div className="flex items-center text-muted-foreground text-sm space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {edu.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={highlightIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );
      
      case 'achievements':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {content[language].achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-indigo-600 font-medium mb-2">
                  {achievement.organization}
                </p>
                <p className="text-muted-foreground text-sm mb-3">
                  {achievement.year}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="experience" className="py-24 bg-secondary/50">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass-effect rounded-full p-1 flex space-x-1">
            {content[language].tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center px-4 py-2 rounded-full transition-all text-sm font-medium ${
                  activeTab === tab.id ? 'text-primary-foreground' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-experience-tab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.name}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Experience;