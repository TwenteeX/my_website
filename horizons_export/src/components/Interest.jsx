import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Interest = ({ language }) => {
  const navigate = useNavigate();
  
  const interests = [
    {
      id: 1,
      title: language === 'zh' ? '媒体制作' : 'Media Production',
      description: language === 'zh' 
        ? '探索数字媒体与视觉叙事，通过摄影、视频制作和多媒体设计传达创意理念'
        : 'Exploring digital media and visual storytelling through photography, video production, and multimedia design',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d'
    },
    {
      id: 2,
      title: language === 'zh' ? '音乐体验' : 'Music Experiences',
      description: language === 'zh'
        ? '沉浸式音乐创作与体验设计，结合技术与艺术创造独特的听觉空间'
        : 'Immersive music creation and experience design, combining technology and art to create unique auditory spaces',
      image: '/images/music-head.png'
    },
    {
      id: 3,
      title: language === 'zh' ? '展览实践' : 'Exhibition Practice',
      description: language === 'zh'
        ? '策展与空间设计实践，通过展览探索艺术、科技与社会的交汇点'
        : 'Curatorial and spatial design practice, exploring intersections of art, technology, and society through exhibitions',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262'
    }
  ];

  const handleInterestClick = (interestId) => {
    navigate(`/interests/${interestId}`);
  };

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
              className="group cursor-pointer"
              onClick={() => handleInterestClick(interest.id)}
            >
              <div className="glass-effect rounded-2xl overflow-hidden h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={interest.title}
                    src={interest.image}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1572177812156-58036aae439c';
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:gradient-text transition-all">
                    {interest.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interest;
