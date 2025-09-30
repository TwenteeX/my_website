import React from 'react';
import { motion } from 'framer-motion';

const Interest = ({ language }) => {
  const interests = [
    {
      id: 1,
      title: language === 'zh' ? '媒体制作' : 'Media Production',
      description: language === 'zh' 
        ? '探索数字媒体与视觉叙事，通过摄影、视频制作和多媒体设计传达创意理念'
        : 'Exploring digital media and visual storytelling through photography, video production, and multimedia design',
      icon: '🎬',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: language === 'zh' ? '音乐体验' : 'Music Experiences',
      description: language === 'zh'
        ? '沉浸式音乐创作与体验设计，结合技术与艺术创造独特的听觉空间'
        : 'Immersive music creation and experience design, combining technology and art to create unique auditory spaces',
      icon: '🎵',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: language === 'zh' ? '展览实践' : 'Exhibition Practice',
      description: language === 'zh'
        ? '策展与空间设计实践，通过展览探索艺术、科技与社会的交汇点'
        : 'Curatorial and spatial design practice, exploring intersections of art, technology, and society through exhibitions',
      icon: '🎨',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="interest" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            {language === 'zh' ? '个人兴趣' : 'Personal Interests'}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {language === 'zh' 
              ? '探索创意与技术的交汇点，通过多元化的实践项目展现个人兴趣与专业追求'
              : 'Exploring the intersection of creativity and technology through diverse practice projects that showcase personal interests and professional pursuits'
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-effect rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${interest.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {interest.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:gradient-text transition-all">
                  {interest.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interest;
