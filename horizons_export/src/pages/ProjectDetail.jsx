import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { FormattedBody } from '@/components/ProjectFormattedContent';

const ProjectDetail = ({ language }) => {
  const { id } = useParams();
  const project = projectsData[language].find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">{description}</p>
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
          ) : project.id === 7 ? (
            <div>
              <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/qbZ14Et57BM"
                  title="SyneSound Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                {language === 'zh' ? '演示视频 - SyneSound 视觉转音乐创作系统' : 'Demo Video - SyneSound Visual-to-Musical Creation System'}
              </p>
            </div>
          ) : project.id === 2 ? (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="/images/boardgame-head.png" />
          ) : project.id === 3 ? (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="/images/imagine-head.png" />
          ) : project.id === 4 ? (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="/images/hongkong-head.png" />
          ) : project.id === 5 ? (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="/images/pet-head.png" />
          ) : project.id === 6 ? (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="/images/vr-head.png" />
          ) : project.id === 8 ? (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="/images/domesticade-heroimage.png" />
          ) : project.id === 9 ? (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="/images/VLMFT-method.png" />
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
                  <p className="font-semibold text-foreground/80">{language === 'zh' ? '项目年份' : 'Year'}</p>
                  <p className="mt-1 text-foreground/70">
                    {project.id === 1 && '2025'}
                    {project.id === 2 && '2023'}
                    {project.id === 3 && '2024'}
                    {project.id === 4 && '2024'}
                    {project.id === 5 && '2023'}
                    {project.id === 6 && '2024'}
                    {project.id === 7 && '2025'}
                    {project.id === 8 && '2026'}
                    {project.id === 9 && '2026'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground/80">{language === 'zh' ? '项目成员' : 'Members'}</p>
                  <p className="mt-1 text-foreground/70">
                    {project.id === 1 && 'Xueyang Wang, Qinxuan Cen, Weitao Bi, Yunxiang Ma'}
                    {project.id === 2 && (language === 'zh' ? '独立完成' : 'Individual Work')}
                    {project.id === 3 && 'Yunxiang Ma, Yutong Wu'}
                    {project.id === 4 && 'Yunxiang Ma, Jing Zhuang, Tino Zhu'}
                    {project.id === 5 && 'Yunxiang Ma, Yuying Zhang, Xinning He, Rhone Ryan Huang Ern'}
                    {project.id === 6 && (language === 'zh' ? '独立完成' : 'Individual Work')}
                    {project.id === 7 && 'Yongyi Xiong, Yunxiang Ma'}
                    {project.id === 8 && 'Yunxiang Ma'}
                    {project.id === 9 && 'Yunxiang Ma'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground/80">{language === 'zh' ? '技术栈' : 'Technologies'}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">{tag}</span>
                    ))}
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
            <div className="max-w-none text-foreground/80 [&_a]:text-indigo-500 [&_a:hover]:text-indigo-600">
              <section>
                <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight first:mt-0">{details.about.title}</h2>
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
                ) : project.id === 4 ? (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="香港城市色彩分析项目概述" 
                    src="/images/hongkong-head.png" 
                  />
                ) : project.id === 5 ? (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="Pet's Tribe项目概述" 
                    src="/images/pet-head.png" 
                  />
                ) : project.id === 6 ? (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="Feeling Home in Memory项目概念图" 
                    src="/images/vr-head.png" 
                  />
                ) : project.id === 7 ? (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="SyneSound项目概述" 
                    src="/images/SyneSound 1.png" 
                  />
                ) : null}
                <FormattedBody content={details.about.content} />
                {project.id === 7 && (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="SyneSound系统界面" 
                    src="/images/SyneSound 2.png" 
                  />
                )}
              </section>
              

              <section>
                <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight">{details.process.title}</h2>
                {project.id === 7 && (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="SyneSound核心功能映射" 
                    src="/images/SyneSound 3.png" 
                  />
                )}
                <FormattedBody content={details.process.content} />
                {project.id === 7 && (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="SyneSound视觉语法系统" 
                    src="/images/SyneSound 4.png" 
                  />
                )}
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
                    src="/images/boardgame-experiment.png" 
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
                ) : project.id === 4 ? (
                  <>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="香港街景数据爬取" 
                      src="/images/hongkong-data.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="香港街景要素提取" 
                      src="/images/hongkong-extraction.png" 
                    />
                  </>
                ) : project.id === 5 ? (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="Pet's Tribe产品概念框架" 
                    src="/images/pet-structure.png" 
                  />
                ) : project.id === 6 ? (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="VR工作流程图" 
                    src="/images/vr-workflow.png" 
                  />
                ) : null}
              </section>
              {project.id === 1 ? (
                <section>
                  <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight">{language === 'zh' ? '跨现实创作工具' : 'Cross-Reality Authoring'}</h2>
                  <FormattedBody
                    content={
                      language === 'zh'
                        ? '### MR 与 VR 一体化创作\n\nRoomify 配套的跨现实创作界面让创作与体验无缝切换：在 MR 中看到覆盖于真实家的「线框脚手架」，用手柄或语音做精细编辑与再生成；在 VR 中即时预览沉浸效果。\n\n### 分层控制\n\n分层控制（全局风格—对象语义—细节属性）既保证效率，又保留创作者对关键元素的掌控。'
                        : '### MR and VR in one loop\n\nA cross-reality authoring tool lets creators iterate in MR and preview in VR. In MR, labeled wireframe scaffolds sit over the physical room for precise edits and selective regeneration; in VR, users evaluate the full immersive result.\n\n### Layered control\n\nHierarchical controls (global style → object semantics → fine attributes) balance automation with human agency.'
                    }
                  />
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="Roomify跨现实创作工具界面" 
                    src="/images/roomify-mr.png" 
                  />
                </section>
              ) : project.id === 2 ? (
                <section>
                  <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight">{language === 'zh' ? '桌游转译与组件' : 'Game Translation & Components'}</h2>
                  <FormattedBody
                    content={
                      language === 'zh'
                        ? '### 三类实体组件\n\n将研究结果转化为三类实体组件：① 六边格 / 变形六边格拼图，以颜色编码访问密度；② 3D 打印的 11 处站点模型；③ 底图棋盘。\n\n### 游戏规则\n\n玩家先拼图成图并放置模型，随后从入口沿六边形边行进，依据密度与情绪线索选择路径，记录各自的「认知轨迹」。'
                        : '### Three physical layers\n\nInsights are embodied in three components: (1) hex and deformed-hex tiles color-coded by visiting density; (2) 3D-printed models of the 11 clustered sites; (3) a base map board.\n\n### How play works\n\nPlayers assemble the map and place models, start from an entry, move along hex edges, and choose routes using density and emotion cues to inscribe their personal “cognitive tracks.”'
                    }
                  />
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="Cognitive Tracks桌游组件设计" 
                    src="/images/boardgame-design.png" 
                  />
                </section>
              ) : project.id === 3 ? (
                <>
                  <section>
                    <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight">{language === 'zh' ? '原型设计' : 'Prototyping'}</h2>
                    <FormattedBody
                      content={
                        language === 'zh'
                          ? '### 模块化空间原型\n\n脑电研究成果被转译为一座 3×3×3 m 的模块化空间原型。团队建立了形态文法（shape grammar），用于生成 16 种在空间公共性、身体姿态与流线逻辑上各不相同的空间变体。\n\n### 展览系统\n\n这些模块再与垂直、水平交通单元拼装，形成面向未来的柔性展览系统，示范了神经科学数据如何参与空间的「文法」，使建筑体验能够回应人的情绪状态。'
                          : '### Modular spatial prototype\n\nEEG findings were translated into a 3×3×3 m modular spatial prototype. A shape grammar generates 16 spatial variants differentiated by publicness, posture, and flow logic.\n\n### Exhibition system\n\nModules assemble with vertical and horizontal circulation into a flexible, future-oriented exhibition system—demonstrating how neuroscientific data can inform the grammar of space so architectural experience responds to human emotion.'
                      }
                    />
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
                    <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight">{language === 'zh' ? '计算设计' : 'Computational Design'}</h2>
                    <FormattedBody
                      content={
                        language === 'zh'
                          ? '### 参数化与工作流\n\n计算设计流程将基于脑电的情绪识别与参数化建筑结合：Grasshopper 脚本与自定义算法编码模块拼装规则，使展览布局可扩展、可适配。\n\n### 实时个性化\n\n方案提出实时个性化：当脑电流数据被分析后，系统可为每位参观者推荐与其情感状态相匹配的参观路径，从而让建筑从静态形体转变为连接空间与具身感知的动态界面。'
                          : '### Parametric workflow\n\nThe computational design workflow integrates EEG-informed emotion recognition with parametric architecture. Grasshopper scripts and custom algorithms encode modular assembly rules for scalable, adaptable layouts.\n\n### Real-time personalization\n\nAs EEG streams are analyzed, the system can recommend navigation paths tailored to each visitor’s affective state—shifting architecture from static form to a dynamic interface between space and embodied perception.'
                      }
                    />
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
              ) : project.id === 4 ? (
                <>
                  <section>
                    <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight">{language === 'zh' ? '聚类分析' : 'Clustering Analysis'}</h2>
                    <FormattedBody
                      content={
                        language === 'zh'
                          ? '### 特征与降维\n\n研究对语义分割后的街景进行色彩识别与提取，并将 RGB 转换到 HSV 空间做归一化。随后通过 PCA 降维与 k-means 聚类，对不同街段的色彩模式分类，得到具有代表性的视觉群组。\n\n### 与城市结构对照\n\n进一步将聚类结果与空间分区对照，揭示街道色彩特征与功能片区之间的对应关系。'
                          : '### Features and dimensionality reduction\n\nColor features are extracted from segmented street views, with RGB normalized in HSV space. PCA reduces dimensionality before k-means classifies distinct color patterns along the corridor.\n\n### Urban structure\n\nClusters are mapped against functional divisions of the fabric, linking chromatic characteristics to specific urban zones.'
                      }
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="香港城市色彩聚类分析" 
                      src="/images/hongkong-clustering.png" 
                    />
              </section>
                  <section>
                    <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight">{language === 'zh' ? '结果讨论' : 'Results & Discussion'}</h2>
                    <FormattedBody
                      content={
                        language === 'zh'
                          ? '### 中环与半山\n\n分析显示：中环高密度办公与商业片区对应的路段往往低饱和度、偏冷色，强化「效率与秩序」的视觉印象；半山区住宅与混合功能区则饱和度更高、色调更暖，更具生活感与日常氛围。\n\n### 启示\n\n微观色彩差异折射出宏观空间分异，为城市色彩感知与规划提供了新的阅读角度。'
                          : '### Central versus Mid-Levels\n\nCentral’s dense office and commercial districts skew toward low-saturation, cool palettes—reinforcing impressions of efficiency and order. Mid-Levels residential and mixed-use zones show higher saturation and warmer tones—more domestic and everyday.\n\n### Takeaways\n\nMicro-level color patterns reflect macro-level spatial differentiation, offering fresh perspectives on urban color perception and planning.'
                      }
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="香港城市色彩分析结果" 
                      src="/images/hongkong-result.png" 
                    />
                  </section>
                </>
              ) : project.id === 5 ? (
                <>
                  <section>
                    <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight">{language === 'zh' ? 'Storyboard | 场景故事板' : 'Storyboard'}</h2>
                    <FormattedBody
                      content={
                        language === 'zh'
                          ? '### 场景叙事\n\n故事板呈现用户在不同情境下的体验：浏览宠物动态、参与领养活动、在社区分享经验或寻求帮助。\n\n### 设计验证\n\n借助具体场景化叙述，检验各功能组的合理性以及端到端交互流程的完整性。'
                          : '### Scenario narratives\n\nStoryboards follow users browsing pet updates, joining adoption events, sharing in the community, or seeking help.\n\n### Design validation\n\nThese concrete scenarios stress-test functional groups and end-to-end flows.'
                      }
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="Pet's Tribe场景故事板" 
                      src="/images/pet-storyboard.png" 
                    />
                  </section>
                  <section>
                    <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight">{language === 'zh' ? 'Prototype设计' : 'Prototype Design'}</h2>
                    <FormattedBody
                      content={
                        language === 'zh'
                          ? '### 从低保真到高保真\n\n流程由低保真草图演进至高保真界面；最终 Hi-Fi 原型在 Figma 中搭建，覆盖登录与用户分流、社区、协助与个人日记等模块。\n\n### 目标与度量\n\n设计强调易学性、功能契合、效率、容错与视觉吸引力；计划中的可用性测试关注任务成功率、错误恢复与 SUS 量表，为迭代提供数据依据。'
                          : '### From Lo-Fi to Hi-Fi\n\nThe flow moves from sketches to high-fidelity screens. The final Figma prototype spans login and diversion, community, assistance, and diary modules.\n\n### Goals and metrics\n\nDesign goals emphasize learnability, fit, efficiency, resilience, and aesthetics; planned testing tracks task success, error recovery, and SUS scores.'
                      }
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="Pet's Tribe原型设计1" 
                      src="/images/pet-prototype1.png" 
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="Pet's Tribe原型设计2" 
                      src="/images/pet-prototype2.png" 
                    />
                  </section>
                </>
              ) : project.id === 6 ? (
                <>
                  <section>
                    <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight">{language === 'zh' ? '用户采访' : 'User Research'}</h2>
                    <FormattedBody
                      content={
                        language === 'zh'
                          ? '### 绘图与情绪曲线\n\n访谈中，夫妻二人分别绘制「前住所」与「现住所」平面图，并用折线记录一年中、一天里不同时段的情绪起伏。\n\n### 关键氛围\n\n这些主观材料帮我锚定场景与氛围：前住所黄昏的家庭晚餐承载温暖与团聚；现住所夜间客厅阅读则是安静与陪伴。线索直接影响后续空间选择与虚拟环境的氛围设计。'
                          : '### Maps and mood traces\n\nThe couple sketched floor plans of their former and current homes and plotted moods across months and days.\n\n### Emotional anchors\n\nFamily dinners at dusk in the old home read as warmth and togetherness; nightly reading in the new living room reads as quiet companionship—guiding scene selection and atmosphere in VR.'
                      }
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="VR用户采访与草图绘制" 
                      src="/images/vr-sketch.png" 
                    />
              </section>
                  <section>
                    <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight">{language === 'zh' ? '用户体验' : 'User Experience'}</h2>
                    <FormattedBody
                      content={
                        language === 'zh'
                          ? '### 沉浸要素\n\n最终 VR 场景揉合 3D 扫描的家具与环境、AI 天空盒，以及实录音景（鸟鸣、城市噪声、宠物声等）。\n\n### 在场感受\n\n佩戴头显后，用户可在「记忆化的家」中自由走动，重新触及与时间、空间和亲密关系交织的瞬间。'
                          : '### Immersion layers\n\nThe VR scene blends scanned furniture and props, AI skyboxes, and recorded soundscapes—birdsong, city noise, pets, and more.\n\n### Presence\n\nHeadset users move through a memory-infused home, revisiting moments where time, place, and companionship intertwine.'
                      }
                    />
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="VR用户体验场景" 
                      src="/images/vr-experience.png" 
                    />
                  </section>
                </>
              ) : null}

              <section>
                <h2 className="mt-12 mb-6 text-2xl md:text-[1.85rem] font-bold font-display gradient-text tracking-tight">{details.outcome.title}</h2>
                {project.id === 7 && (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="SyneSound产品价值" 
                    src="/images/SyneSound 5.png" 
                  />
                )}
                <FormattedBody content={details.outcome.content} />
                {project.id === 7 && (
                  <img 
                    className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                    alt="SyneSound用户研究计划" 
                    src="/images/SyneSound 6.png" 
                  />
                )}
                
                {project.id === 1 ? (
                  <>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mt-10 mb-4">{language === 'zh' ? 'VR用户对比实验' : 'VR User Comparison Study'}</h3>
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
                    
                    <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mt-10 mb-4">{language === 'zh' ? '设计专业人士评估' : 'Design Professional Evaluation'}</h3>
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
                    
                    <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mt-10 mb-4">{language === 'zh' ? '数据聚类分析' : 'Data Clustering Analysis'}</h3>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="Cognitive Tracks数据聚类分析" 
                      src="/images/boardgame-clustering.png" 
                    />
                    
                    <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mt-10 mb-4">{language === 'zh' ? '交互流程与AR扩展' : 'Interaction Flow & AR'}</h3>
                    <FormattedBody
                      content={
                        language === 'zh'
                          ? '### 四步玩法\n\n流程分为四步：① 拼图成图 → ② 替换 / 放置建筑 → ③ 沿六边形边移动并连线成路 → ④ 用手机 AR 查看站点信息。\n\n### 差异化路径\n\n最终可叠加展示不同玩家的路径差异（例如「偏历史」与「偏自然」的认知轨迹）。'
                          : '### Four-step flow\n\nStep 1: assemble the map. Step 2: replace or place buildings. Step 3: move along hex edges and connect paths. Step 4: open mobile AR for site details.\n\n### Divergent tracks\n\nOverlay different players’ routes—e.g., history- versus nature-oriented cognitive tracks.'
                      }
                    />
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