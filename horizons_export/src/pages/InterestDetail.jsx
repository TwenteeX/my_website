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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const interestsData = [
    {
      id: 1,
      title: language === 'zh' ? '媒体制作与实践' : 'Media Production and Practice',
      subtitle: language === 'zh' ? '数字媒体与视觉叙事' : 'Digital Media & Visual Storytelling',
      description: language === 'zh' 
        ? '通过摄影、视频制作和多媒体设计，探索数字媒体在传达创意理念和情感表达方面的无限可能。从概念构思到最终呈现，每一个项目都是技术与艺术的完美融合。'
        : 'Through photography, video production, and multimedia design, exploring the infinite possibilities of digital media in conveying creative concepts and emotional expression. From conceptualization to final presentation, each project represents a perfect fusion of technology and art.',
      image: '/images/media-production.jpg',
      gallery: [
        {
          type: 'video',
          videoId: 'BV1uc411y7WF',
          platform: 'bilibili',
          title: 'Assisting in Interview with AURORA (2023)',
          description: language === 'zh' 
            ? 'Aurora 中国巡演采访助理（2023）\n协助完成挪威艺术家 Aurora 中国巡演期间的采访工作\n与 环球音乐中国 合作，参与媒体对接与报道协调\n支持独立自媒体 Jeoli Music 的内容制作、调研与翻译工作'
            : 'Assistant, Aurora China Tour Interview (2023)\nAssisted in interviews during Norwegian artist Aurora\'s China Tour\nCollaborated with Universal Music China on media coordination and coverage\nSupported independent media Jeoli Music with content production, research, and translation'
        },
        {
          type: 'video',
          videoId: 'BV1rqMwz5E5J',
          platform: 'bilibili',
          title: 'Assisting in Interview with Shi Xinwenyue (2025)',
          description: language === 'zh'
            ? '施鑫文月采访助理（成都，2025）\n协助完成中国独立音乐人 施鑫文月 的深度采访\n参与采访内容的整理、研究与编辑，确保报道的专业性与完整性\n支持采访相关的多媒体内容制作'
            : 'Assistant, Interview with Musician Shi Xinwenyue (Chengdu, 2025)\nAssisted in conducting an in-depth interview with Chinese independent musician Shi Xinwenyue\nContributed to research, transcription, and editing to ensure professional and comprehensive coverage\nSupported multimedia content production related to the interview'
        },
        {
          type: 'video',
          videoId: '',
          platform: 'bilibili',
          title: language === 'zh' ? '更多内容即将推出' : 'More Content Coming Soon',
          description: language === 'zh' ? '敬请期待更多媒体制作与实践项目' : 'Stay tuned for more media production and practice projects'
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
          type: 'video',
          videoId: 'VB_gh_D4taQ',
          platform: 'youtube',
          title: 'Lipstick on The Glass - Wolf Alice (Band Cover)',
          year: '2024',
          description: language === 'zh' 
            ? '本次演出于 2024年清华大学经管学院学生节 举行，活动由 MINISO 名创优品 等企业赞助支持。感谢所有到场的朋友与合作伙伴，让音乐成为我们共同的记忆。'
            : 'This performance took place at the 2024 Tsinghua SEM Student Festival, proudly sponsored by MINISO and other partners. Thank you to everyone who joined us and supported the event: music is what we share together.'
        },
        {
          type: 'video',
          videoId: 'BV1Wv4y167nH',
          platform: 'bilibili',
          title: 'Original Music Production and AIGC MV',
          year: '2022-2023',
          description: language === 'zh'
            ? '这是一个有关信仰与背离的故事，也是我们献给2022的纪念之歌。我们试图引入一些宗教意象，尝试构建被信仰抛弃后信徒眼中分崩离析的世界。我们每个人都曾在某一瞬成为这样的信徒，在这之前是我们的Prelife，在这之后我们在存在之间寻找喘息的Crevice。这是一个无厘头的故事，里面提到的问题答案也很开放，希望这首歌对2023是一个合格的新年礼物。'
            : 'This is a story about faith and betrayal, a song of remembrance dedicated to 2022. We sought to weave in religious imagery, attempting to construct a world collapsing in the eyes of believers abandoned by their faith. Each of us, at some moment, has been such a believer. Before that moment lies our Prelife; after it, we search for a breath of air in the Crevice between states of existence. It is also a nonsensical tale, with questions left deliberately open-ended. We hope this song serves as a fitting New Year\'s gift for 2023.'
        },
        {
          type: 'video',
          videoId: 'BV1qCBPYCErE',
          platform: 'bilibili',
          title: 'Blue Weekend - Wolf Alice (Band Cover)',
          year: '2024',
          description: language === 'zh'
            ? '褴褛飞旋乐队组建于2023年，成员大多来自零字班和一字班，本次在建筑学院学生节演出了Wolf Alice专辑Blue Weekend中的三首曲目串烧：The Beach, Lipstick on The Glass以及The Beach II'
            : 'Formed in 2023, Whirling in Rags is a band composed mainly of students from the 00s and 10s cohorts. At the Architecture School Student Festival, we performed a medley of three tracks from Wolf Alice\'s Blue Weekend album: The Beach, Lipstick on the Glass, and The Beach II.'
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
          image: '/images/exhibition-1.png',
          title: language === 'zh' ? '策展设计' : 'Curatorial Design',
          description: language === 'zh' ? '构思展览主题，策划展品布局和参观路线' : 'Conceptualizing exhibition themes, planning artwork layout and visitor routes'
        },
        {
          image: '/images/exhibition-2.png',
          title: language === 'zh' ? '空间设计' : 'Spatial Design',
          description: language === 'zh' ? '设计展览空间，营造沉浸式观展体验' : 'Designing exhibition spaces to create immersive viewing experiences'
        }
      ]
    }
  ];

  const currentInterest = interestsData[currentIndex];

  useEffect(() => {
    setCurrentIndex(parseInt(id) - 1);
  }, [id]);

  const handlePrevious = () => {
    if (currentInterest.id === 1 || currentInterest.id === 2) {
      // For Media Production and Music Experiences, navigate through videos
      const newVideoIndex = currentVideoIndex > 0 ? currentVideoIndex - 1 : currentInterest.gallery.length - 1;
      setCurrentVideoIndex(newVideoIndex);
    } else if (currentInterest.id === 3) {
      // For Exhibition Practice, navigate through images
      const newImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentInterest.gallery.length - 1;
      setCurrentImageIndex(newImageIndex);
    } else {
      // For other interests, navigate through interest categories
      const newIndex = currentIndex > 0 ? currentIndex - 1 : interestsData.length - 1;
      setCurrentIndex(newIndex);
      navigate(`/interests/${newIndex + 1}`, { replace: true });
    }
  };

  const handleNext = () => {
    if (currentInterest.id === 1 || currentInterest.id === 2) {
      // For Media Production and Music Experiences, navigate through videos
      const newVideoIndex = currentVideoIndex < currentInterest.gallery.length - 1 ? currentVideoIndex + 1 : 0;
      setCurrentVideoIndex(newVideoIndex);
    } else if (currentInterest.id === 3) {
      // For Exhibition Practice, navigate through images
      const newImageIndex = currentImageIndex < currentInterest.gallery.length - 1 ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(newImageIndex);
    } else {
      // For other interests, navigate through interest categories
      const newIndex = currentIndex < interestsData.length - 1 ? currentIndex + 1 : 0;
      setCurrentIndex(newIndex);
      navigate(`/interests/${newIndex + 1}`, { replace: true });
    }
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
        <div className="space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-4">
              {currentInterest.title}
            </h1>
            <p className="text-xl text-foreground/70 mb-6">
              {currentInterest.subtitle}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              {currentInterest.description}
            </p>
          </motion.div>

          {/* Video Gallery for Media Production and Music Experiences */}
          {(currentInterest.id === 1 || currentInterest.id === 2) ? (
            <div className="space-y-8">
              {/* Video Player */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentVideoIndex}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                      {currentInterest.gallery[currentVideoIndex]?.videoId ? (
                        currentInterest.gallery[currentVideoIndex]?.platform === 'youtube' ? (
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${currentInterest.gallery[currentVideoIndex]?.videoId}`}
                            title={currentInterest.gallery[currentVideoIndex]?.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        ) : (
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://player.bilibili.com/player.html?bvid=${currentInterest.gallery[currentVideoIndex]?.videoId}&autoplay=0`}
                            title={currentInterest.gallery[currentVideoIndex]?.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        )
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-xl">
                          {language === 'zh' ? '视频即将推出' : 'Video Coming Soon'}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Video Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center space-y-4"
              >
                <h3 className="text-3xl font-bold text-foreground">
                  {currentInterest.gallery[currentVideoIndex]?.title}
                </h3>
                <p className="text-xl text-foreground/70">
                  {currentInterest.gallery[currentVideoIndex]?.year}
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl mx-auto">
                  {currentInterest.gallery[currentVideoIndex]?.description}
                </p>
              </motion.div>

              {/* Video Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center space-x-4"
              >
                <span className="text-sm text-foreground/60">
                  {currentVideoIndex + 1} / {currentInterest.gallery.length}
                </span>
                <div className="flex space-x-2">
                  {currentInterest.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentVideoIndex ? 'bg-foreground' : 'bg-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          ) : (
            /* Exhibition Practice - Image Gallery */
            <div className="space-y-8">
              {/* Image Display */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={currentInterest.gallery[currentImageIndex]?.image}
                        alt={currentInterest.gallery[currentImageIndex]?.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1572177812156-58036aae439c';
                        }}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center space-y-4"
              >
                <h3 className="text-3xl font-bold text-foreground">
                  {currentInterest.gallery[currentImageIndex]?.title}
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl mx-auto">
                  {currentInterest.gallery[currentImageIndex]?.description}
                </p>
              </motion.div>

              {/* Image Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center space-x-4"
              >
                <span className="text-sm text-foreground/60">
                  {currentImageIndex + 1} / {currentInterest.gallery.length}
                </span>
                <div className="flex space-x-2">
                  {currentInterest.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-foreground' : 'bg-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InterestDetail;
