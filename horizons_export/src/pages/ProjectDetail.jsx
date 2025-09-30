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
                poster="/images/roomify-main.png"
              >
                <source src="/videos/roomify_demo.mp4" type="video/mp4" />
                <p>{language === 'zh' ? '您的浏览器不支持视频播放。' : 'Your browser does not support video playback.'}</p>
              </video>
              <p className="text-center text-sm text-muted-foreground mt-4">
                {language === 'zh' ? '演示视频 - 展示Roomify系统的完整功能' : 'Demo Video - Showcasing Roomify System Features'}
              </p>
            </div>
          ) : project.id === 2 ? (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="/images/boardgame-head.png" />
          ) : project.id === 3 ? (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="/images/imagine-head.png" />
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
                {project.id === 1 ? (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="Roomify系统头图" 
                    src="/images/roomify-head.png" 
                  />
                ) : project.id === 2 ? (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="Cognitive Tracks项目概述" 
                    src="/images/boardgame-flowchart.png" 
                  />
                ) : project.id === 3 ? (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="EEG展览设计概念方案" 
                    src="/images/imagine-experiment.png" 
                  />
                ) : null}
                <p>{details.about.content}</p>
              </section>
              

              <section>
                <h2>{details.process.title}</h2>
                <p>{details.process.content}</p>
                {project.id === 1 ? (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="Roomify系统管线流程图" 
                    src="/images/roomify-pipeline.png" 
                  />
                ) : project.id === 2 ? (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="Cognitive Tracks实验设计" 
                    src="/images/boardgame-experiement.png" 
                  />
                ) : project.id === 3 ? (
                  <>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG实验设备设置" 
                      src="/images/imagine-equipment.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG实验数据采集" 
                      src="/images/imagine-data.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG实验变量分析" 
                      src="/images/imagine-variables.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG数据框架结构" 
                      src="/images/imagine-dataframe.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG实验装置" 
                      src="/images/apparatus.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG基线校正" 
                      src="/images/imagine-baseline.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG机器学习模型" 
                      src="/images/imagine-ml.png" 
                    />
                  </>
                ) : null}
              </section>
              {project.id === 1 ? (
                <section>
                  <h2>{language === 'zh' ? '跨现实创作工具' : 'Cross-Reality Authoring'}</h2>
                  <p>{language === 'zh' ? 'Roomify 配套的跨现实创作界面让创作与体验无缝切换：在 MR 中看到覆盖于真实家的"线框脚手架"，用手柄/语音做精细编辑与再生成；在 VR 中即时预览沉浸效果。分层控制（全局风格—对象语义—细节属性）既保证效率，又保留创作者对关键元素的掌控。' : 'A cross-reality authoring tool lets creators iterate in MR and preview in VR. In MR, labeled wireframe scaffolds sit over the physical room for precise edits and selective regeneration; in VR, users evaluate the full immersive result. Hierarchical controls (global style → object semantics → fine attributes) balance automation with human agency.'}</p>
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="Roomify跨现实创作工具界面" 
                    src="/images/roomify-mr.png" 
                  />
                </section>
              ) : project.id === 2 ? (
                <section>
                  <h2>{language === 'zh' ? '桌游转译与组件' : 'Game Translation & Components'}</h2>
                  <p>{language === 'zh' ? '将研究结果转化为三类实体组件：① 六边格/变形六边格拼图，以颜色编码访问密度；② 3D打印的11处站点模型；③ 底图棋盘。规则上，玩家先拼图成图并放置模型，随后从入口沿六边形边行进，依据密度/情绪线索选择路径，记录各自"认知轨迹"。' : 'Insights are embodied in three components: (1) hex and deformed-hex tiles color-coded by visiting density; (2) 3D-printed models of the 11 clustered sites; (3) a base map board. Players first assemble the map and place models, then start from an entry and move along hex edges, choosing routes using density/emotion cues to inscribe their personal "cognitive tracks."'}</p>
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="Cognitive Tracks桌游组件设计" 
                    src="/images/boardgame-design.png" 
                  />
                </section>
              ) : project.id === 3 ? (
                <>
                  <section>
                    <h2>{language === 'zh' ? '原型设计' : 'Prototyping'}</h2>
                    <p>{language === 'zh' ? 'EEG findings were translated into a 3×3×3 m modular spatial prototype. A shape grammar was developed to generate 16 spatial variants, differentiated by publicness, posture, and flow logic. These modules were then assembled with vertical and horizontal circulation units to create a flexible, future-oriented exhibition system. The prototype demonstrated how neuroscientific data could inform the grammar of space, making architectural experience directly responsive to human emotion.' : 'EEG findings were translated into a 3×3×3 m modular spatial prototype. A shape grammar was developed to generate 16 spatial variants, differentiated by publicness, posture, and flow logic. These modules were then assembled with vertical and horizontal circulation units to create a flexible, future-oriented exhibition system. The prototype demonstrated how neuroscientific data could inform the grammar of space, making architectural experience directly responsive to human emotion.'}</p>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG展览体验设计" 
                      src="/images/imagine-experience.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG展览原型设计" 
                      src="/images/imagine-prototype.png" 
                    />
              </section>
                  <section>
                    <h2>{language === 'zh' ? '计算设计' : 'Computational Design'}</h2>
                    <p>{language === 'zh' ? 'The computational design workflow integrated EEG-informed emotion recognition with parametric architecture. Grasshopper scripts and custom algorithms encoded modular assembly rules, enabling scalable and adaptable exhibition layouts. Real-time personalization was proposed: as EEG data streams are analyzed, the system recommends navigation paths tailored to each visitor\'s affective state. This shifts the role of architecture from static form to a dynamic interface between space and embodied perception.' : 'The computational design workflow integrated EEG-informed emotion recognition with parametric architecture. Grasshopper scripts and custom algorithms encoded modular assembly rules, enabling scalable and adaptable exhibition layouts. Real-time personalization was proposed: as EEG data streams are analyzed, the system recommends navigation paths tailored to each visitor\'s affective state. This shifts the role of architecture from static form to a dynamic interface between space and embodied perception.'}</p>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG形态文法设计" 
                      src="/images/imagine-shapegrammar.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG Grasshopper参数化设计" 
                      src="/images/imagine-grasshopper.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG模块组合设计" 
                      src="/images/imagine-combination.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG设计细节" 
                      src="/images/imagine-details.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="EEG最终设计成果" 
                      src="/images/imagine-final.png" 
                    />
                  </section>
                </>
              ) : null}

              <section>
                <h2>{details.outcome.title}</h2>
                <p>{details.outcome.content}</p>
                
                {project.id === 1 ? (
                  <>
                    <h3>{language === 'zh' ? 'VR用户对比实验' : 'VR User Comparison Study'}</h3>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="VR用户测试场景" 
                      src="/images/roomify-usertest1.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="VR用户测试数据分析" 
                      src="/images/roomify-analysis1.png" 
                    />
                    
                    <h3>{language === 'zh' ? '设计专业人士评估' : 'Design Professional Evaluation'}</h3>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="设计专业人士测试场景" 
                      src="/images/roomify-usertest2.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="设计专业人士评估数据分析" 
                      src="/images/roomify-analysis2.png" 
                    />
                  </>
                ) : project.id === 2 ? (
                  <>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="Cognitive Tracks研究结果" 
                      src="/images/boardgame-result.png" 
                    />
                    
                    <h3>{language === 'zh' ? '数据聚类分析' : 'Data Clustering Analysis'}</h3>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="Cognitive Tracks数据聚类分析" 
                      src="/images/boardgame-clustering.png" 
                    />
                    
                    <h3>{language === 'zh' ? '交互流程与AR扩展' : 'Interaction Flow & AR'}</h3>
                    <p>{language === 'zh' ? '流程分为四步：Step1 拼图成图 → Step2 替换/放置建筑 → Step3 开始旅程（按边移动并连线成路） → Step4 手机AR查看站点信息。最终可叠加展示不同玩家的路径差异（如"偏历史"与"偏自然"的认知轨迹）。' : 'The process is divided into four steps: Step1 Assemble the map → Step2 Replace/place buildings → Step3 Start journey (move along edges and connect paths) → Step4 Use mobile AR to view site information. Finally, different players\' path differences can be overlaid and displayed (such as "history-oriented" and "nature-oriented" cognitive tracks).'}</p>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="Cognitive Tracks AR交互效果" 
                      src="/images/boardgame-effect.png" 
                    />
                  </>
                ) : null}
              </section>
            </div>
          </motion.main>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;