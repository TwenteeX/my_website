import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projects';

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
          ) : project.id === 4 ? (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="/images/hongkong-head.png" />
          ) : project.id === 5 ? (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="/images/pet-head.png" />
          ) : project.id === 6 ? (
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="/images/vr-head.png" />
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
            <div className="prose max-w-none text-foreground/80 prose-headings:font-display prose-headings:gradient-text prose-a:text-indigo-500 hover:prose-a:text-indigo-600 prose-h2:text-2xl prose-h2:font-bold prose-h3:text-xl prose-h3:font-bold">
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
              ) : project.id === 4 ? (
                <>
                  <section>
                    <h2>{language === 'zh' ? '聚类分析' : 'Clustering Analysis'}</h2>
                    <p>{language === 'zh' ? '研究对语义分割后的街景进行色彩识别与提取，并将 RGB 色彩数据转换到 HSV 空间进行特征归一化。随后通过 PCA 主成分降维及 k-means 聚类，对不同街段的色彩模式进行分类，得到具有代表性的视觉群组。进一步使用聚类结果与空间分区进行对比，揭示了街道色彩与功能区域之间的对应关系。' : 'Color features were extracted from the segmented street view images, with RGB values normalized in HSV space. Principal Component Analysis (PCA) was applied for dimensionality reduction, followed by k-means clustering to classify distinct color patterns across the corridor. These clusters were mapped against functional divisions of the city fabric, revealing correlations between chromatic characteristics and specific urban zones.'}</p>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="香港城市色彩聚类分析" 
                      src="/images/hongkong-clustering.png" 
                    />
              </section>
                  <section>
                    <h2>{language === 'zh' ? '结果讨论' : 'Results & Discussion'}</h2>
                    <p>{language === 'zh' ? '分析结果显示，中环区高密度办公与商业空间对应的街段往往呈现低饱和度与冷色调，强化了其"效率与秩序"的视觉印象；而半山区住宅及混合功能区域则呈现较高饱和度与暖色调，营造出更为生活化与日常化的氛围。研究揭示了微观色彩差异如何折射出宏观的空间分异，为理解城市色彩感知和规划提供了新的视角。' : 'The results indicate that Central\'s dense office and commercial districts are characterized by low-saturation, cool-toned color palettes, reinforcing impressions of efficiency and order. In contrast, the Mid-Levels\' residential and mixed-use zones display higher saturation and warmer tones, reflecting a more domestic and everyday atmosphere. These findings highlight how micro-level color patterns reflect macro-level spatial differentiation, offering new perspectives for urban color perception and planning.'}</p>
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
                    <h2>{language === 'zh' ? 'Storyboard | 场景故事板' : 'Storyboard'}</h2>
                    <p>{language === 'zh' ? 'Storyboard 展示了用户在不同场景下的使用体验：浏览宠物动态、参加领养活动、在社区分享经验或寻求帮助。通过具体场景化的叙述，验证了功能组的合理性与交互流程的完整性。' : 'The storyboard illustrates user interactions across different contexts: browsing pet updates, attending adoption events, sharing experiences in the community, or seeking assistance. These scenarios validate the relevance of functional groups and ensure a seamless interaction flow.'}</p>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="Pet's Tribe场景故事板" 
                      src="/images/pet-storyboard.png" 
                    />
                  </section>
                  <section>
                    <h2>{language === 'zh' ? 'Prototype设计' : 'Prototype Design'}</h2>
                    <p>{language === 'zh' ? '设计流程从低保真原型出发，逐步演进到高保真界面。最终的 Hi-Fi Prototype 采用 Figma 搭建，涵盖登录与用户分流、社区界面、协助界面和个人日记模块。设计目标包括学习成本低、功能匹配度高、操作效率快、容错率强以及具有吸引力的视觉体验。用户测试计划涵盖任务完成率、错误恢复率、SUS 可用性量表等指标，为后续迭代优化提供数据支撑。' : 'The design process progressed from low-fidelity sketches to high-fidelity prototypes. The final Hi-Fi Prototype, built in Figma, included modules for login and user diversion, community interface, assistance interface, and diary functions. Design goals emphasized ease of learning, functional effectiveness, efficiency, error tolerance, and engaging aesthetics. Planned user testing employed metrics such as task success rate, error recovery, and the SUS usability scale, providing data-driven guidance for further iterations.'}</p>
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
                    <h2>{language === 'zh' ? '用户采访' : 'User Research'}</h2>
                    <p>{language === 'zh' ? '在访谈中，夫妻分别绘制了"前住所"和"现住所"的平面图，并用折线图记录了他们在一年和一天中不同时间段的情绪变化。这些主观表达帮助我识别了关键的场景与氛围：前住所的家庭晚餐象征着温暖与团聚，而现住所的夜晚阅读体现了安静与陪伴。这些情绪线索直接影响了后续的空间选择与虚拟环境的氛围营造。' : 'During interviews, the couple sketched floor plans of both their previous and present residences, alongside line charts mapping their moods across months and daily cycles. These subjective visualizations highlighted emotionally resonant moments: family dinners at dusk in their former home represented warmth and togetherness, while nightly reading in the present living room embodied quiet companionship. These insights shaped the selection of scenes and atmosphere in the VR reconstruction.'}</p>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="VR用户采访与草图绘制" 
                      src="/images/vr-sketch.png" 
                    />
              </section>
                  <section>
                    <h2>{language === 'zh' ? '用户体验' : 'User Experience'}</h2>
                    <p>{language === 'zh' ? '最终的 VR 场景融合了 3D 扫描的家具与环境元素、AI 生成的天空盒、以及真实录制的音景（如鸟鸣、城市噪声、宠物声）。用户在佩戴头显后，可以自由地在记忆化的居所中移动和感受，重新体会那些与时间、空间和亲密关系交织的细微瞬间。' : 'The final VR environment combined 3D-scanned furniture and objects, AI-generated skyboxes, and authentic soundscapes (such as birdsong, city noise, and pet sounds). With a headset, users could navigate freely within the reconstructed memory-space, reliving intimate moments where time, place, and companionship intertwined.'}</p>
                    <img 
                      className="w-full h-auto object-cover rounded-lg shadow-lg my-8" 
                      alt="VR用户体验场景" 
                      src="/images/vr-experience.png" 
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