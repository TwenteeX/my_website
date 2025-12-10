export const projectsData = {
  en: [
    {
      id: 1,
      title: 'Roomify',
      category: 'products',
      description: 'Spatially grounded generative pipeline for immersive VR/MR authoring and user-centered evaluation',
      tags: ['Generative AI', 'Spatial Computing', 'UX Design', 'Product Design'],
      image: 'Roomify VR/MR spatial computing interface with generative pipeline',
      featured: true,
      details: {
        about: {
          title: 'About The Project',
          content: 'Roomify is a spatially grounded generative system that treats your real room as a "spatial container." It preserves layout and furniture affordances while radically transforming the environment into a cohesive theme (e.g., wizard academy, pirate cabin), resolving the classic VR trade-off between immersion and spatial awareness without relying on immersion-breaking passthrough views.'
        },
        process: {
          title: 'How It Works',
          content: 'The pipeline has four stages: Scene Understanding (video SLAM + semantic parsing to oriented 3D boxes and a global JSON scaffold) → Style Extraction & Mapping (derive keywords from text/reference images and produce mapping tables for walls/floors, objects, and environment) → Multimodal Generation (reference-guided stylized images and 3D assets, PBR materials, and skyboxes) → Spatial Registration & Assembly (place assets with pose- and geometry-aware alignment, maintaining predictable navigation and functional consistency).',
          image: 'Roomify system architecture and pipeline flow diagram'
        },
        outcome: {
          title: 'Studies & Outcomes',
          content: 'Two evaluations demonstrate effectiveness: With 18 VR users, Roomify achieved significantly higher presence/immersion than passthrough (+~63%) and fully virtual (+~26%) conditions, while keeping spatial awareness at a strong, usable level. With 8 design professionals, Roomify proved valuable as a creative prototyping tool, supporting expressive, workflow-friendly iterations across diverse spaces and themes.'
        }
      }
    },
    {
      id: 2,
      title: 'Cognitive Tracks',
      category: 'compdesign',
      description: 'Data-driven visitor paths: from behavior mining to a board game with AR',
      tags: ['Data Mining', 'NLP', 'Boardgame Design'],
      image: 'Cognitive Tracks board game with AR integration and data visualization',
      featured: true,
      details: {
        about: {
          title: 'Overview',
          content: 'Set on Tsinghua\'s campus, the project fuses real GPS traces + social media text to identify stopping points, typical routes, and affective patterns. These insights are translated into an interactive hex-grid board game coupled with a mobile AR layer that guides visitors and strengthens spatial cognition and engagement.'
        },
        process: {
          title: 'Study Setup & Methods',
          content: 'Under Prof. Weixin Huang\'s mentorship (Aug–Sep 2023, Beijing; individual work), the study tracked 50 participants on random tours. Using Python (Jupyter), K-Means, NLP, and 3D printing, we cleaned paths via Haversine distance and 60-second average velocity. Points in the lowest 5% of speed (v < 0.674 m/s) were treated as stopping candidates; density filtering and K-Means produced 11 representative sites and their visiting sequences. In parallel, ~200 Xiaohongshu posts were mined for word frequencies and affective maps, which were fused with physical stopping distributions to build a combined "digital–physical" density layer.',
          image: 'Cognitive Tracks research methodology and data processing flowchart'
        },
        outcome: {
          title: 'Key Findings',
          content: 'Visualizations show that velocity troughs align with salient sites; some slow-downs stem from congestion, not attraction; groups diverge in sequence and dwell intensity by preference (history/architecture/nature). These patterns inform the Visiting Density Map, Digital Emotion Map, and Physical Stopping Points Map as multi-layer bases.'
        }
      }
    },
    {
      id: 3,
      title: 'EEG-informed Exhibition Design',
      category: 'compdesign',
      description: 'Multisensory & Embodied Exhibition Design with EEG-informed Personalization',
      tags: ['EEG', 'Machine Learning', 'UX Design', 'Parametric Architecture'],
      image: 'EEG-informed exhibition personalized by real-time emotion recognition',
      featured: true,
      details: {
        about: {
          title: 'Conceptual Proposal',
          content: 'The project Multisensory & Embodied Exhibition Design with EEG-informed Personalization explores how real-time brainwave data can shape immersive spatial experiences. Instead of architecture being inherently “active,” the visitor’s embodied perception drives the spatial narrative. By integrating electroencephalography (EEG)-based emotional recognition with modular exhibition design, the project proposes a system where personalized navigation routes are generated according to individual affective states. This concept was showcased at the 2025 Tsinghua School of Architecture Undergraduate Works Exhibition as a group project, emphasizing the fusion of neuroscience, computation, and spatial design.'
        },
        process: {
          title: 'Experiment Performance',
          content: 'Three controlled EEG experiments were conducted, each involving eight participants. Using a 16-channel OpenBCI headset at 256 Hz, the sessions lasted 15–20 minutes with stimuli segmented into 15-second epochs. Three conditions were tested: visual-only, auditory-only, and audiovisual fusion. Complementary physiological data were collected through GSR and EMG sensors for verification. This experimental framework allowed a rigorous exploration of how different sensory modalities interact to shape emotional responses.',
          image: 'EEG experiment setup and protocol'
        },
        outcome: {
          title: 'Data Analysis',
          content: 'Preprocessing followed the MNE pipeline: band-pass and 50 Hz notch filtering, ICA for artifact removal, and baseline correction. Features extracted included power spectral density (PSD) across alpha, beta, and gamma bands, as well as time-domain statistics. Data were standardized across participants, and emotional labels were defined using Russell’s Valence–Arousal model. Deep learning models such as SVM, KNN, and Random Forest were tested, with Random Forest achieving the best accuracy. Cross-validation revealed that combining positive or negative visual and auditory stimuli often shifted emotional responses toward neutrality, while maintaining their polarity.'
        }
      }
    },
    {
      id: 4,
      title: 'Colors of Hongkong',
      category: 'dataviz',
      description: 'Urban color analysis along Central–Mid-Levels Escalator using computer vision and ML clustering',
      tags: ['Urban Analysis', 'Computer Vision', 'ML', 'Clustering'],
      image: 'Hong Kong urban color analysis with street view segmentation and clustering',
      featured: true,
      details: {
        about: {
          title: 'Historical Background',
          content: 'This research focuses on the urban corridor along the Central–Mid-Levels Escalator in Hong Kong, a space rich in historical and cultural interweaving. The area encompasses heritage sites such as the Central Market, Graham Street Market, and Tai Kwun, as well as religious spaces like the Hong Kong Baptist Church and the Jamia Mosque. The urban fabric reflects a complex cultural collage, characterized by the juxtaposition of Christian and Muslim spaces, the typological contrast between Chinese and Western markets, and hybridized architectural styles.'
        },
        process: {
          title: 'Image Crawling',
          content: 'Using the Google Street Map API, the research collected street view images along the escalator corridor. These images were processed with the DeepLabV3 semantic segmentation model to extract elements such as buildings, trees, signboards, sidewalks, and the sky. This automated pipeline generated a continuous dataset of urban scenes, providing the basis for subsequent analyses of color composition and human-scale perception.',
          image: 'Hong Kong street view image crawling and semantic segmentation process'
        },
        outcome: {
          title: 'Clustering Analysis',
          content: 'Color features were extracted from the segmented street view images, with RGB values normalized in HSV space. Principal Component Analysis (PCA) was applied for dimensionality reduction, followed by k-means clustering to classify distinct color patterns across the corridor. These clusters were mapped against functional divisions of the city fabric, revealing correlations between chromatic characteristics and specific urban zones.'
        }
      }
    },
    {
      id: 5,
      title: 'Pet\'s Tribe',
      category: 'products',
      description: 'Multifunctional mobile platform for pet lovers, owners, and animal organizations',
      tags: ['UX Design', 'Mobile App', 'Product Design'],
      image: 'Pet\'s Tribe mobile app interface with community and adoption features',
      featured: false,
      details: {
        about: {
          title: 'Market Research & Competitor Analysis',
          content: 'With China\'s pet industry rapidly expanding—reaching nearly 200 million pets and a 52% online platform penetration rate in 2022—the market still lacks a unified solution. Existing apps are fragmented: some focus on daily recording ("YouChong"), others on commerce ("Pet Market"), and some on adoption services ("Pet Adoption Center"). However, none provide a comprehensive ecosystem combining social interaction, pet adoption, and offline activities.'
        },
        process: {
          title: 'Product Concept Framework',
          content: 'We proposed "Pets\' Tribe", a multifunctional mobile platform designed for pet lovers, owners, and animal organizations. Its concept framework consists of three major functional groups: Assistance: adoption processes, veterinary support, and information sharing. Community: browsing updates, sharing experiences, and organizing offline events. Diary: recording pet routines with adjustable privacy settings. This framework fosters a reciprocal ecosystem where individual and organizational users meet mutual needs and sustain a thriving pet community.',
          image: 'Pet\'s Tribe product concept framework diagram'
        },
        outcome: {
          title: 'Prototype Design',
          content: 'The design process progressed from low-fidelity sketches to high-fidelity prototypes. The final Hi-Fi Prototype, built in Figma, included modules for login and user diversion, community interface, assistance interface, and diary functions. Design goals emphasized ease of learning, functional effectiveness, efficiency, error tolerance, and engaging aesthetics. Planned user testing employed metrics such as task success rate, error recovery, and the SUS usability scale, providing data-driven guidance for further iterations.'
        }
      }
    },
    {
      id: 6,
      title: 'Feeling Home in Memory',
      category: 'xr',
      description: 'VR reconstruction of domestic memories through 3D scanning and immersive storytelling',
      tags: ['UX Design', 'VR', '3D Scanning', 'Unity'],
      image: 'VR home memory reconstruction with 3D scanning and immersive experience',
      featured: false,
      details: {
        about: {
          title: 'Concept',
          content: 'The outlines of a home in memory are shaped by the warmth of details. This project recreates, through Virtual Reality (VR), the domestic scenes of a couple passionate about gardening and interior design. They have adopted one bunny and two cats, Xuehuan and Kele, whose playful presence in the garden reflected a sense of harmony during the interview. Guided by two threads—PLACE and TIME—I captured their two most significant memories: a family dinner at dusk in their previous residence, and nightly reading in the living room at their present home.'
        },
        process: {
          title: 'Workflow',
          content: 'The project followed a complete digital reconstruction workflow: 3D Scanning: Capturing the home environment with a mobile device to generate high-fidelity spatial models. User Research: Conducting in-depth interviews and sketch mapping to document their emotional experiences tied to space and time. Unity Construction: Integrating scanned rooms, objects, and ambient soundscapes in Unity to create an immersive interactive environment. User Testing: Participants revisited their reconstructed memories through VR headsets, embodying the lived warmth of their home.',
          image: 'VR workflow diagram showing 3D scanning to Unity integration process'
        },
        outcome: {
          title: 'User Experience',
          content: 'The final VR environment combined 3D-scanned furniture and objects, AI-generated skyboxes, and authentic soundscapes (such as birdsong, city noise, and pet sounds). With a headset, users could navigate freely within the reconstructed memory-space, reliving intimate moments where time, place, and companionship intertwined.'
        }
      }
    },
    {
      id: 7,
      title: 'SyneSound',
      category: 'products',
      description: 'An inclusive music creation system that transforms visual elements into music, designed for non-musicians and the deaf and hard-of-hearing community. Winner of Best Idea at 2025 CMU NOVA Hackathon.',
      tags: ['AI', 'Music Generation', 'Accessibility', 'Synesthesia', 'Web App'],
      image: 'SyneSound visual-to-musical creation system with color mapping interface',
      featured: true,
      details: {
        about: {
          title: 'Project Overview',
          content: 'SyneSound is an inclusive music creation system developed by X-MA Group (team members: Yongyi Xiong, Yunxiang Ma) that enables music composition through visual-to-musical transformation. The project aims to provide a new creative pathway for non-musicians and the deaf and hard-of-hearing (DHH) community. The core concept is "composing through vision, not hearing." It uses synesthesia (the phenomenon where one sensory experience triggers another) as a design metaphor, creating a shared canvas where visual elements can be directly transformed into musical structures. Instead of complex music theory notation, SyneSound establishes an intuitive "visual grammar" that controls musical parameters through color, shape, and motion.'
        },
        process: {
          title: 'Core Semantics & Mappings',
          content: 'The system maps visual properties to musical elements: Mode & Palette: Hue maps to musical modes (warm hues → Ionian/major, yellow-green → Lydian/Dorian, cyan-blue → Aeolian/minor, magenta-violet → Phrygian), ensuring harmonious compositions through "safe choices" for non-professionals. Notes & Chords: Balls represent musical events—single-color balls produce single notes, while mixed colors generate chords. Rotation controls chord inversion, size controls note duration, opacity controls dynamics/velocity, and position maps to timeline (X-axis) and register/octave (Y-axis). Rhythm: Visual "wobble" or vibration represents rhythm—frequency maps to tempo and beat density, amplitude to accent strength, and phase to swing/humanization. Style: Semi-transparent background panels set musical styles (Ambient, Classical, Electronic, Jazz, etc.), determining BPM ranges, groove templates, and instrumentation. The frontend uses React + Canvas (Konva) + Tone.js for interactive creation, while the backend leverages Agentuity as a cloud gateway and orchestrator, OpenAI for intent inference and prompt generation, and Meta MusicGen (via Replicate) for audio generation.'
        },
        outcome: {
          title: 'Product Value & Vision',
          content: 'SyneSound addresses key challenges: Lowering barriers by enabling non-musicians and DHH creators to compose through visual means, without relying on hearing or music theory knowledge. Transparent creation through an explainable canvas where visual elements correspond to clear musical structures, rather than a "black box" AI generator. Emotional visualization where colors and motion directly convey harmony and rhythm, making the creator\'s emotional intent clear and readable to others, including hearing individuals. The team plans to conduct user studies on "emotional consistency" where DHH creators compose using only the visual canvas, and hearing listeners evaluate the generated audio, testing whether visual expressions accurately convey emotions through music.'
        }
      }
    }
  ],
  zh: [
    {
      id: 1,
      title: 'Roomify',
      category: 'products',
      description: '空间锚定的生成式系统，沉浸式VR/MR创作工具，用户中心化评估',
      tags: ['生成式AI', '空间计算', '用户体验', '产品设计'],
      image: 'Roomify VR/MR空间计算界面与生成式管线',
      featured: true,
      details: {
        about: {
          title: '项目概述',
          content: 'Roomify 是一个"空间锚定"的生成式系统：它以用户的真实房间为"空间容器"，在保持空间结构与家具可用性的前提下，将场景一键变为特定主题（如魔法学院、海盗船舱等）并提供沉浸式体验。它弥合了传统 VR 在"沉浸感"与"空间感知"之间的取舍：不过度依赖透视画面（破坏临场），也不牺牲物理环境的功能逻辑。'
        },
        process: {
          title: '工作原理',
          content: '系统包含四个阶段：场景理解（视频 SLAM 与语义解析，输出带方向的 3D 边界盒与全局 JSON 脚手架）→ 风格提取与映射（从文字/参考图抽取风格关键词，生成墙地面、家具、环境三类映射表与约束）→ 多模态生成（参考引导的风格化图像与 3D 物体、PBR 纹理与天空盒）→ 空间组装注册（按几何与相机位姿将生成资产精准落位，保持导航可预期与功能可用）。',
          image: 'Roomify系统架构与管线流程图'
        },
        outcome: {
          title: '用户研究与成效',
          content: '两项评测验证了方法有效性：18 名 VR 用户对比实验显示：相较"透视基线"和"全虚拟场景"，Roomify 显著提升临场感/沉浸（对透视提升约 63%，对全虚拟提升约 26%），同时保持中等偏上的空间认知与可导航性。8 名设计专业人士评估其作为创意原型工具的表达力与工作流价值，认可在多场景、多主题下快速出形且可控。'
        }
      }
    },
    {
      id: 2,
      title: 'Cognitive Tracks',
      category: 'compdesign',
      description: '数据驱动的参观路径—从行为挖掘到桌游与AR',
      tags: ['数据挖掘', '自然语言处理', '桌游设计'],
      image: 'Cognitive Tracks桌游与AR集成及数据可视化',
      featured: true,
      details: {
        about: {
          title: '项目概述',
          content: '本项目以清华校园为场景，综合"真实轨迹 + 社交媒体文本"的双源数据，识别游客的停留点、典型路径与情绪分布，并将研究成果转译为一套可互动的六边格桌游与手机AR体验，用以引导游客、强化空间认知与参与感。'
        },
        process: {
          title: '研究设定与方法',
          content: '在导师黄巍昕指导下（2023.08–09，北京，独立完成），记录50名受试者的随机游览轨迹；采用 Python（Jupyter）、K-Means 聚类、NLP 文本分析与3D打印。轨迹以 Haversine 距离与60秒平均速度计算清洗平滑；将速度处于底部5%（v < 0.674 m/s）的点判定为候选停留点，并经密度筛选与K-Means 提取11处代表性站点及其典型访问序列。同时抓取小红书相关贴文（约200条）做词频与情感（Emotion）映射，与物理停留分布叠合形成"数字—物理"双重密度图。',
          image: 'Cognitive Tracks研究方法与数据处理流程图'
        },
        outcome: {
          title: '关键发现',
          content: '可视化结果显示：停留速度谷值与显著景点相吻合；部分速度下降源于拥堵而非兴趣；不同人群在"历史/建筑/自然"等偏好上呈现截然不同的访问顺序与停留强度。据此形成访问密度图（Visiting Density Map）、情绪热力图（Digital Emotion Map）与停留点图（Physical Stopping Points Map）等多层信息底板。'
        }
      }
    },
    {
      id: 3,
      title: '基于EEG的多感官具身化展览设计',
      category: 'compdesign',
      description: 'Multisensory & Embodied Exhibition Design with EEG-informed Personalization',
      tags: ['EEG', '机器学习', '用户体验', '参数化建筑'],
      image: '基于EEG的情绪识别驱动的个性化展览体验',
      featured: true,
      details: {
        about: {
          title: '概念性方案',
          content: '本项目 基于EEG个性化的多感官与具身化展览设计 探索如何通过实时脑电波数据来塑造沉浸式空间体验。展览空间本身并非“主动”，而是由参观者的具身感知来驱动空间叙事。通过将基于脑电（EEG）的情绪识别与模块化展览设计相结合，本项目提出了一种体验驱动的系统：参观路径根据个体情绪状态实时生成。该项目以团队合作形式在 2025年清华大学建筑学院本科作品展 中展出，体现了神经科学、计算设计与空间建构的跨界融合。'
        },
        process: {
          title: '实验实施',
          content: '实验部分共设计并实施了三组对照实验，每组8位受试者。使用16通道的 OpenBCI 脑电设备，采样率为256 Hz，每次实验持续15–20分钟，刺激被划分为15秒的片段。实验条件包括：仅视觉、仅听觉、以及视听融合。同时收集了皮电（GSR）和肌电（EMG）等辅助生理数据以进行交叉验证。该实验框架为探讨多模态感官输入对情绪反应的交互作用提供了严谨依据。',
          image: 'EEG实验设置与流程'
        },
        outcome: {
          title: '数据分析',
          content: '数据分析采用了 MNE 标准流程：带通滤波与50Hz陷波滤波、独立成分分析（ICA）去除伪迹，以及基线校正。提取特征包括 α、β、γ 三个主要频段的功率谱密度（PSD），以及时域统计特征。所有数据在参与者间标准化，情绪标签采用 Russell 的 效价-唤醒度模型。实验测试了多种机器学习方法（SVM、KNN、随机森林等），其中随机森林表现最佳。交叉验证表明，当积极或消极的视觉与听觉刺激叠加时，情绪反应往往趋向中性，但整体的正负极性仍保持。'
        }
      }
    },
    {
      id: 4,
      title: 'Colors of Hongkong',
      category: 'compdesign',
      description: '基于计算机视觉与机器学习的香港中环扶梯沿线城市色彩分析',
      tags: ['城市分析', '计算机视觉', '机器学习', '聚类分析'],
      image: '香港城市色彩分析：街景分割与聚类研究',
      featured: true,
      details: {
        about: {
          title: '历史背景',
          content: '该研究以香港中环至半山区的中部扶梯沿线为研究对象。该片区是一个历史与文化交织的空间走廊，既包含如中环街市、嘉咸街市集、太古馆等历史文化遗址，也包含香港浸信会教堂、贾米亚清真寺等宗教空间。这里形成了多元的文化拼贴：中西合并的建筑风格、基督与伊斯兰宗教空间的并置、市场类型的中西对照，共同构成了复杂的城市社会节点。'
        },
        process: {
          title: '图片爬取',
          content: '研究通过 Google Street Map API 抓取扶梯沿线的街景图像，并利用 DeepLabV3 模型进行语义分割，将建筑、树木、招牌、道路等要素从街景图中提取出来。通过自动化的图像获取与处理，形成了具有空间连续性的街景数据库，为后续的色彩与视觉感知分析提供了基础。',
          image: '香港街景图像爬取与语义分割处理流程'
        },
        outcome: {
          title: '聚类分析',
          content: '研究对语义分割后的街景进行色彩识别与提取，并将 RGB 色彩数据转换到 HSV 空间进行特征归一化。随后通过 PCA 主成分降维及 k-means 聚类，对不同街段的色彩模式进行分类，得到具有代表性的视觉群组。进一步使用聚类结果与空间分区进行对比，揭示了街道色彩与功能区域之间的对应关系。'
        }
      }
    },
    {
      id: 5,
      title: 'Pet\'s Tribe',
      category: 'products',
      description: '为宠物爱好者、宠物主人及动物组织打造的多功能移动平台',
      tags: ['用户体验', '移动应用', '产品设计'],
      image: 'Pet\'s Tribe移动应用界面：社区与领养功能',
      featured: false,
      details: {
        about: {
          title: '市场调研与竞品分析',
          content: '随着中国宠物行业的快速发展，宠物数量已接近两亿，线上平台渗透率在2022年达到52%。然而，目前市面上的应用大多功能分散：有的仅限于记录宠物日常（如"有宠"），有的偏重商业化购物（如"宠物市场"），也有面向公益领养的平台（如"宠物帮领养中心"），但整体缺乏一个能够同时整合社交互动、宠物领养与线下活动的集中平台。'
        },
        process: {
          title: '产品概念框架',
          content: '本项目提出 "Pets\' Tribe" —— 一个为宠物爱好者、宠物主人及动物组织打造的多功能移动平台。产品框架分为三大功能组：Assistance 协助：领养流程、宠物医疗、信息互助；Community 社区：动态浏览、经验分享、线下活动组织；Diary 日记：宠物日常记录与云端展示，用户可自由选择隐私等级。通过这一框架，用户群体（个体用户与组织用户）可以互补需求，形成良性社区生态。',
          image: 'Pet\'s Tribe产品概念框架图'
        },
        outcome: {
          title: 'Prototype设计',
          content: '设计流程从低保真原型出发，逐步演进到高保真界面。最终的 Hi-Fi Prototype 采用 Figma 搭建，涵盖登录与用户分流、社区界面、协助界面和个人日记模块。设计目标包括学习成本低、功能匹配度高、操作效率快、容错率强以及具有吸引力的视觉体验。用户测试计划涵盖任务完成率、错误恢复率、SUS 可用性量表等指标，为后续迭代优化提供数据支撑。'
        }
      }
    },
    {
      id: 6,
      title: 'Feeling Home in Memory',
      category: 'xr',
      description: '通过3D扫描与沉浸式叙事重建家庭记忆的VR体验',
      tags: ['用户体验', 'VR', '3D扫描', 'Unity'],
      image: 'VR家庭记忆重建：3D扫描与沉浸式体验',
      featured: false,
      details: {
        about: {
          title: '概念',
          content: '记忆中的家由细节的温度勾勒而成。本项目通过虚拟现实（VR）重现了一对热爱园艺和室内设计的夫妻的家庭场景。他们收养了一只兔子和两只猫——雪环和可乐。在采访时，猫穿梭于花园与屋内，呈现出人与动物和谐共处的氛围。我以"空间（PLACE）"与"时间（TIME）"为双重线索，引导他们回忆并叙述了两个最具意义的场景：黄昏时分的家庭晚餐（前住所），以及夜晚在客厅中静静阅读（现住所）。'
        },
        process: {
          title: '工作流程',
          content: '项目采用了完整的数字化重建流程：3D 扫描：通过移动设备扫描居住空间，获取高保真度的空间模型。用户研究：通过深度访谈和草图绘制，记录他们对不同时间段与空间细节的情绪体验。Unity 场景搭建：将空间、家具与环境音效导入 Unity，实现互动性与沉浸感的虚拟空间构建。用户测试：参与者佩戴 VR 设备进入场景，体验被记忆重新唤起的"家"。',
          image: 'VR工作流程图：从3D扫描到Unity集成的完整流程'
        },
        outcome: {
          title: '用户体验',
          content: '最终的 VR 场景融合了 3D 扫描的家具与环境元素、AI 生成的天空盒、以及真实录制的音景（如鸟鸣、城市噪声、宠物声）。用户在佩戴头显后，可以自由地在记忆化的居所中移动和感受，重新体会那些与时间、空间和亲密关系交织的细微瞬间。'
        }
      }
    },
    {
      id: 7,
      title: 'SyneSound',
      category: 'products',
      description: '一个包容性的音乐创作系统，将视觉元素转化为音乐，为非音乐专业人士和听障群体设计。荣获2025 CMU NOVA Hackathon最佳创意奖。',
      tags: ['AI', '音乐生成', '无障碍设计', '联觉', 'Web应用'],
      image: 'SyneSound视觉转音乐创作系统与色彩映射界面',
      featured: true,
      details: {
        about: {
          title: '项目概述',
          content: 'SyneSound 是由 X-MA Group（团队成员：Yongyi Xiong, Yunxiang Ma）开发的一个具有包容性的音乐创作系统。该项目旨在通过"视觉转化为音乐"（Visual-to-Musical）的方式，为非音乐专业人士以及听障（DHH - Deaf and Hard-of-Hearing）群体提供一种全新的创作途径。项目的核心理念是"通过视觉而非听觉来作曲"。它将联觉（Synesthesia，即一种感官刺激引发另一种感官体验的现象）作为设计隐喻和切入点，构建了一个让视觉元素可以直接转化为音乐结构的共享画布。SyneSound 并没有使用复杂的乐理符号，而是建立了一套直观的"视觉语法"，通过颜色、形状和运动来控制音乐参数。'
        },
        process: {
          title: '核心功能与语义映射',
          content: '系统建立了视觉属性到音乐元素的映射关系：调式与色彩：系统利用色调来映射音乐的调式（Mode），暖色调对应 Ionian（自然大调），黄绿色对应 Lydian/Dorian，青蓝色对应 Aeolian（自然小调），洋红-紫色对应 Phrygian，以此限制可用音符，确保非专业人士也能创作出和谐的音乐（"安全选择"）。音符与和弦：球体（Ball）代表一个音乐事件，拖入单色球体产生单音，混合颜色则自动生成和弦。旋转控制和弦转位，大小控制音符时值/持续时间，透明度控制力度/音量，位置映射到时间线（X轴）和音区/八度（Y轴）。节奏与动态：节奏通过视觉上的"颤动"（Wobble）来表现，频率对应速度和打击密度，振幅对应重音强度，相位对应摇摆节奏或人性化处理。风格：用户可以通过选择半透明的背景板来设定音乐风格（如 Ambient, Classical, Electronic, Jazz 等），这决定了生成的 BPM 范围、律动模板和配器。前端使用 React + Canvas (Konva) + Tone.js 提供自由画布、调式调色板、速度滑块和风格选择器等交互功能，用户通过拖拽球体、混合颜色和设置振动频率来完成创作。后端使用 Agentuity 作为云端网关和编排器处理数据流，系统将前端的视觉场景整合并推断用户的音乐意图，转换为 JSON 格式，利用 OpenAI 生成详细的音乐描述提示词，最后使用 Meta MusicGen（通过 Replicate 调用）将提示词渲染为最终音频。'
        },
        outcome: {
          title: '产品价值与愿景',
          content: 'SyneSound 试图解决以下痛点：降低门槛：让非音乐人和听障创作者可以通过"看"来作曲，无需依靠听力或乐理知识。透明化创作：并非简单的"黑盒"AI 生成，而是建立一个可解释的画布，让视觉元素对应明确的音乐结构。情感可视化：颜色和运动能够直接传达和谐与律动，使得创作者的情感意图对他（她）人（包括听力正常者）是清晰可读的。团队计划进行一项关于"情感一致性"（Emotional Consistency）的用户研究：听障创作者仅使用视觉画布作曲，听力正常的听众仅听生成的音频，两人背对背无交流，双方分别选择情感标签（如快乐、悲伤、神秘等）并在效价-唤醒度（Valence-Arousal）量表上打分，以验证视觉表达的情感是否通过音乐准确传达给了听众。'
        }
      }
    }
  ]
};