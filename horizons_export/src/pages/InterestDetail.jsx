import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InterestDetail = ({ language }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(parseInt(id) - 1);

  const interestsData = [
    {
      id: 1,
      title: language === 'zh' ? '媒体制作' : 'Media Production',
      subtitle: language === 'zh' ? '数字媒体与视觉叙事' : 'Digital Media & Visual Storytelling',
      description: language === 'zh' 
        ? '通过摄影、视频制作和多媒体设计，探索数字媒体在传达创意理念和情感表达方面的无限可能。从概念构思到最终呈现，每一个项目都是技术与艺术的完美融合。'
        : 'Through photography, video production, and multimedia design, exploring the infinite possibilities of digital media in conveying creative concepts and emotional expression. From conceptualization to final presentation, each project represents a perfect fusion of technology and art.',
      image: '/images/media-production.jpg',
      gallery: [
        {
          image: '/images/media-1.jpg',
          title: language === 'zh' ? '摄影作品集' : 'Photography Portfolio',
          description: language === 'zh' ? '探索光影与构图的艺术，捕捉生活中的美好瞬间' : 'Exploring the art of light and composition, capturing beautiful moments in life'
        },
        {
          image: '/images/media-2.jpg',
          title: language === 'zh' ? '视频制作' : 'Video Production',
          description: language === 'zh' ? '通过动态影像讲述故事，传达情感和理念' : 'Telling stories through moving images, conveying emotions and concepts'
        },
        {
          image: '/images/media-3.jpg',
          title: language === 'zh' ? '多媒体设计' : 'Multimedia Design',
          description: language === 'zh' ? '结合多种媒体形式，创造沉浸式体验' : 'Combining multiple media forms to create immersive experiences'
        }
      ]
    },
    {
      id: 2,
      title: language === 'zh' ? '音乐体验' : 'Music Experiences',
      subtitle: language === 'zh' ? '沉浸式音乐创作' : 'Immersive Music Creation',
      description: language === 'zh'
        ? '结合技术与艺术，创造独特的听觉空间。从传统乐器到数字音乐制作，从现场表演到沉浸式音频体验，探索音乐在空间中的无限可能。'
        : 'Combining technology and art to create unique auditory spaces. From traditional instruments to digital music production, from live performances to immersive audio experiences, exploring the infinite possibilities of music in space.',
      image: '/images/music-experience.jpg',
      gallery: [
        {
          image: '/images/music-1.jpg',
          title: language === 'zh' ? '现场表演' : 'Live Performance',
          description: language === 'zh' ? '在舞台上与观众分享音乐的激情与感动' : 'Sharing the passion and emotion of music with audiences on stage'
        },
        {
          image: '/images/music-2.jpg',
          title: language === 'zh' ? '音乐制作' : 'Music Production',
          description: language === 'zh' ? '在录音室中精心雕琢每一个音符' : 'Carefully crafting every note in the recording studio'
        },
        {
          image: '/images/music-3.jpg',
          title: language === 'zh' ? '沉浸式音频' : 'Immersive Audio',
          description: language === 'zh' ? '创造三维音频体验，让听众身临其境' : 'Creating three-dimensional audio experiences that immerse listeners'
        }
      ]
    },
    {
      id: 3,
      title: language === 'zh' ? '展览实践' : 'Exhibition Practice',
      subtitle: language === 'zh' ? '策展与空间设计' : 'Curatorial & Spatial Design',
      description: language === 'zh'
        ? '通过策展与空间设计实践，探索艺术、科技与社会的交汇点。每一个展览都是对空间、时间和观众体验的重新思考。'
        : 'Through curatorial and spatial design practice, exploring the intersections of art, technology, and society. Each exhibition represents a rethinking of space, time, and audience experience.',
      image: '/images/exhibition-practice.jpg',
      gallery: [
        {
          image: '/images/exhibition-1.jpg',
          title: language === 'zh' ? '策展设计' : 'Curatorial Design',
          description: language === 'zh' ? '构思展览主题，策划展品布局和参观路线' : 'Conceptualizing exhibition themes, planning artwork layout and visitor routes'
        },
        {
          image: '/images/exhibition-2.jpg',
          title: language === 'zh' ? '空间设计' : 'Spatial Design',
          description: language === 'zh' ? '设计展览空间，营造沉浸式观展体验' : 'Designing exhibition spaces to create immersive viewing experiences'
        },
        {
          image: '/images/exhibition-3.jpg',
          title: language === 'zh' ? '互动装置' : 'Interactive Installation',
          description: language === 'zh' ? '创造观众与艺术作品之间的互动体验' : 'Creating interactive experiences between audiences and artworks'
        }
      ]
    }
  ];

  const currentInterest = interestsData[currentIndex];

  useEffect(() => {
    setCurrentIndex(parseInt(id) - 1);
  }, [id]);

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : interestsData.length - 1;
    setCurrentIndex(newIndex);
    navigate(`/interests/${newIndex + 1}`, { replace: true });
  };

  const handleNext = () => {
    const newIndex = currentIndex < interestsData.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    navigate(`/interests/${newIndex + 1}`, { replace: true });
  };

  const handleBackToHome = () => {
    navigate('/#interest');
  };

  if (!currentInterest) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{language === 'zh' ? '兴趣项目未找到' : 'Interest project not found'}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen bg-background"
    >
      <Helmet>
        <title>{`${currentInterest.title} - Interest Detail`}</title>
        <meta name="description" content={currentInterest.description} />
      </Helmet>

      <div className="container mx-auto px-6 py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            variant="ghost"
            onClick={handleBackToHome}
            className="inline-flex items-center text-foreground/70 hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'zh' ? '返回兴趣列表' : 'Back to Interests'}
          </Button>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full glass-effect hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </div>
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="w-12 h-12 rounded-full glass-effect hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-4">
                {currentInterest.title}
              </h1>
              <p className="text-xl text-foreground/70 mb-6">
                {currentInterest.subtitle}
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              {currentInterest.description}
            </p>

            {/* Gallery Navigation */}
            <div className="flex items-center space-x-4 pt-8">
              <span className="text-sm text-foreground/60">
                {currentIndex + 1} / {interestsData.length}
              </span>
              <div className="flex space-x-2">
                {interestsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      navigate(`/interests/${index + 1}`, { replace: true });
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-foreground' : 'bg-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={currentInterest.image}
                    alt={currentInterest.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1572177812156-58036aae439c';
                    }}
                  />
                </div>
                
                {/* Gallery Items Overlay */}
                <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <p className="text-lg font-semibold mb-2">
                      {language === 'zh' ? '点击查看作品集' : 'Click to view portfolio'}
                    </p>
                    <div className="flex justify-center space-x-4">
                      {currentInterest.gallery.map((item, index) => (
                        <div key={index} className="text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-lg mb-2 flex items-center justify-center">
                            <span className="text-xs">{index + 1}</span>
                          </div>
                          <p className="text-xs">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InterestDetail;
