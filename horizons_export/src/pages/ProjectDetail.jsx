import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ExternalLink, Github, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { projectsData } from '@/data/projects';

const ProjectDetail = ({ language }) => {
  const { id } = useParams();
  const project = projectsData[language].find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    toast({
      title: "🚧 Feature in development",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{language === 'zh' ? '项目未找到' : 'Project not found'}</p>
      </div>
    );
  }

  const { title, description, tags, details } = project;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Helmet>
        <title>{`${title} - Project Detail`}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/" className="inline-flex items-center text-foreground/70 hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'zh' ? '返回项目列表' : 'Back to Projects'}
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-4">{title}</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">{description}</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12"
        >
          {project.id === 1 ? (
            <div>
              <video 
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" 
                controls 
                poster="/images/roomify-main.jpg"
              >
                <source src="/videos/roomify_demo.mp4" type="video/mp4" />
                <p>{language === 'zh' ? '您的浏览器不支持视频播放。' : 'Your browser does not support video playback.'}</p>
              </video>
              <p className="text-center text-sm text-muted-foreground mt-4">
                {language === 'zh' ? '演示视频 - 展示Roomify系统的完整功能' : 'Demo Video - Showcasing Roomify System Features'}
              </p>
            </div>
          ) : (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.aside
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="glass-effect rounded-2xl p-6 sticky top-28">
              <h3 className="text-xl font-semibold mb-4">{language === 'zh' ? '项目信息' : 'Project Info'}</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground/80">{language === 'zh' ? '技术栈' : 'Technologies'}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground/80">{language === 'zh' ? '链接' : 'Links'}</p>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline" onClick={(e) => handleLinkClick(e, '#')}>
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </Button>
                    <Button size="sm" variant="outline" onClick={(e) => handleLinkClick(e, '#')}>
                      <ExternalLink className="w-4 h-4 mr-2" /> {language === 'zh' ? '访问' : 'Live Demo'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.main
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="prose max-w-none text-foreground/80 prose-headings:font-display prose-headings:gradient-text prose-a:text-indigo-500 hover:prose-a:text-indigo-600">
              <section>
                <h2>{details.about.title}</h2>
                <img 
                  className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                  alt="Roomify系统头图" 
                  src="/images/roomify-head.jpg" 
                />
                <p>{details.about.content}</p>
              </section>
              

              <section>
                <h2>{details.process.title}</h2>
                <p>{details.process.content}</p>
                <img 
                  className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                  alt="Roomify系统管线流程图" 
                  src="/images/roomify-pipeline.jpg" 
                />
              </section>
              <section>
                <h2>{language === 'zh' ? '跨现实创作工具' : 'Cross-Reality Authoring'}</h2>
                <p>{language === 'zh' ? 'Roomify 配套的跨现实创作界面让创作与体验无缝切换：在 MR 中看到覆盖于真实家的"线框脚手架"，用手柄/语音做精细编辑与再生成；在 VR 中即时预览沉浸效果。分层控制（全局风格—对象语义—细节属性）既保证效率，又保留创作者对关键元素的掌控。' : 'A cross-reality authoring tool lets creators iterate in MR and preview in VR. In MR, labeled wireframe scaffolds sit over the physical room for precise edits and selective regeneration; in VR, users evaluate the full immersive result. Hierarchical controls (global style → object semantics → fine attributes) balance automation with human agency.'}</p>
                <img 
                  className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                  alt="Roomify跨现实创作工具界面" 
                  src="/images/roomify-mr.jpg" 
                />
              </section>

              <section>
                <h2>{details.outcome.title}</h2>
                <p>{details.outcome.content}</p>
                
                <h3>{language === 'zh' ? 'VR用户对比实验' : 'VR User Comparison Study'}</h3>
                <img 
                  className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                  alt="VR用户测试场景" 
                  src="/images/roomify-usertest1.jpg" 
                />
                <img 
                  className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                  alt="VR用户测试数据分析" 
                  src="/images/roomify-analysis1.jpg" 
                />
                
                <h3>{language === 'zh' ? '设计专业人士评估' : 'Design Professional Evaluation'}</h3>
                <img 
                  className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                  alt="设计专业人士测试场景" 
                  src="/images/roomify-usertest2.jpg" 
                />
                <img 
                  className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                  alt="设计专业人士评估数据分析" 
                  src="/images/roomify-analysis2.jpg" 
                />
              </section>
            </div>
          </motion.main>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;