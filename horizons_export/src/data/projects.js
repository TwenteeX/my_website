export const projectsData = {
  en: [
    {
      id: 1,
      title: 'Roomify',
      category: 'products',
      description: 'Spatially grounded generative pipeline for immersive VR/MR authoring and user-centered evaluation',
      tags: ['CHI 2026 Accepted', 'Generative AI', 'Spatial Computing', 'UX Design', 'Product Design'],
      image: 'Roomify VR/MR spatial computing interface with generative pipeline',
      featured: true,
      details: {
        about: {
          title: 'About The Project',
          content: '### Spatial container\n\nRoomify is a spatially grounded generative system that treats your real room as a “spatial container.” It preserves layout and furniture affordances while radically transforming the environment into a cohesive theme—wizard academy, pirate cabin, and beyond.\n\n### Immersion without losing the room\n\nIt resolves the classic VR tension between immersion and spatial awareness without leaning on immersion-breaking passthrough views.'
        },
        process: {
          title: 'How It Works',
          content: '### Four pipeline stages\n\n**Scene understanding** — Video SLAM plus semantic parsing produce oriented 3D boxes and a global JSON scaffold.\n\n**Style extraction & mapping** — Keywords from text or reference images drive mapping tables for walls, floors, objects, and environment.\n\n**Multimodal generation** — Reference-guided stylized imagery, 3D assets, PBR materials, and skyboxes.\n\n**Spatial registration & assembly** — Assets are placed with pose- and geometry-aware alignment so navigation stays predictable and functionally consistent.',
          image: 'Roomify system architecture and pipeline flow diagram'
        },
        outcome: {
          title: 'Studies & Outcomes',
          content: '### VR user study (n = 18)\n\nRoomify significantly improved presence and immersion versus passthrough (~+63%) and fully virtual scenes (~+26%), while keeping spatial awareness at a strong, usable level.\n\n### Professional creators (n = 8)\n\nDesign professionals valued Roomify as a creative prototyping tool—supporting expressive, workflow-friendly iteration across diverse spaces and themes.'
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
          content: '### Data fusion on campus\n\nSet on Tsinghua’s campus, the project blends real GPS traces with social-media text to locate stopping points, typical routes, and affective patterns.\n\n### From analysis to play\n\nThose insights become an interactive hex-grid board game plus a mobile AR layer that orients visitors and deepens spatial cognition.'
        },
        process: {
          title: 'Study Setup & Methods',
          content: '### Fieldwork & tooling\n\nUnder Prof. Weixin Huang (Aug–Sep 2023, Beijing; individual work), 50 participants took random tours. Paths were cleaned with Haversine distance and 60-second mean velocity in Python (Jupyter); K-Means, NLP, and 3D printing supported analysis and fabrication.\n\n### Stopping points & clusters\n\nPoints in the lowest 5% of speed (v < 0.674 m/s) seeded stopping candidates; density filtering plus K-Means yielded 11 representative sites and visit sequences.\n\n### Social layer\n\nRoughly 200 Xiaohongshu posts supplied word frequencies and affective maps, fused with physical stops into a combined digital–physical density layer.',
          image: 'Cognitive Tracks research methodology and data processing flowchart'
        },
        outcome: {
          title: 'Key Findings',
          content: '### What velocity reveals\n\nVelocity troughs line up with salient places—but some slowdowns are congestion, not attraction.\n\n### Divergent preferences\n\nGroups split by interest (history, architecture, nature) show different sequences and dwell intensity.\n\n### Layered maps\n\nThose signals feed the Visiting Density Map, Digital Emotion Map, and Physical Stopping Points Map as stacked bases for design.'
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
          content: '### EEG-informed space\n\nMultisensory & Embodied Exhibition Design with EEG-informed Personalization asks how live brainwave data can steer immersive spatial experience.\n\n### Visitor-driven narrative\n\nRather than “active” architecture by default, embodied perception drives the story.\n\n### Modular personalization\n\nEEG-based affect recognition meets modular exhibition design so navigation routes can adapt to individual emotional states—shown at the 2025 Tsinghua Architecture undergraduate exhibition as a group project bridging neuroscience, computation, and space.'
        },
        process: {
          title: 'Experiment Performance',
          content: '### Protocol\n\nThree controlled EEG studies, eight participants each. Hardware: 16-channel OpenBCI at 256 Hz; sessions 15–20 minutes with 15-second stimulus epochs.\n\n### Conditions & physiology\n\nVisual-only, auditory-only, and audiovisual fusion were compared; GSR and EMG added cross-checks.\n\n### Goal\n\nThe setup isolates how sensory modalities jointly shape emotional response.',
          image: 'EEG experiment setup and protocol'
        },
        outcome: {
          title: 'Data Analysis',
          content: '### Signal pipeline\n\nMNE-style preprocessing: band-pass and 50 Hz notch, ICA artifact rejection, baseline correction. Features span PSD (alpha/beta/gamma) and time-domain stats, standardized across subjects.\n\n### Labels & models\n\nEmotions sit on Russell’s Valence–Arousal plane; classifiers include SVM, KNN, and Random Forest—with Random Forest performing best.\n\n### Modal interactions\n\nCross-validation suggests pairing congruent positive or negative audio-visual stimuli often pulls responses toward neutrality while preserving polarity.'
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
          content: '### Corridor context\n\nThe study follows the Central–Mid-Levels Escalator—a corridor dense with layered history and culture.\n\n### Landmarks & coexistence\n\nHeritage anchors include Central Market, Graham Street Market, and Tai Kwun; sacred spaces range from Hong Kong Baptist Church to Jamia Mosque.\n\n### Urban collage\n\nChristian and Muslim places, Chinese and Western market types, and hybrid architecture sit side by side, forming a complex urban mosaic.'
        },
        process: {
          title: 'Image Crawling',
          content: '### Data capture\n\nGoogle Street imagery along the escalator route feeds an automated crawl.\n\n### Segmentation\n\nDeepLabV3 parses buildings, trees, signage, sidewalks, sky, and more—yielding a continuous, analyzable street-level dataset for color and perception studies.',
          image: 'Hong Kong street view image crawling and semantic segmentation process'
        },
        outcome: {
          title: 'Clustering Analysis',
          content: '### From pixels to clusters\n\nColors come from segmented views; RGB moves through HSV normalization. PCA reduces dimensionality before k-means separates chromatic regimes along the corridor.\n\n### Reading the city\n\nClusters align with functional districts—linking palette to urban role.'
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
          content: '### Market scale\n\nChina’s pet economy is massive—nearly 200 million pets and ~52% online penetration in 2022—yet experiences remain siloed.\n\n### Fragmented apps\n\nSome tools journal daily life (e.g., YouChong), others push commerce (Pet Market), others handle adoption (Pet Adoption Center).\n\n### The gap\n\nFew products unite social life, adoption journeys, and real-world activities in one trustworthy ecosystem.'
        },
        process: {
          title: 'Product Concept Framework',
          content: '### Pets’ Tribe pillars\n\n**Assistance** — Adoption flows, vet guidance, and shared knowledge.\n\n**Community** — Updates, storytelling, and offline meetups.\n\n**Diary** — Rituals captured with flexible privacy.\n\n### Ecosystem logic\n\nIndividuals and organizations reinforce each other—supplying care, content, and continuity for a lively pet network.',
          image: 'Pet\'s Tribe product concept framework diagram'
        },
        outcome: {
          title: 'Prototype Design',
          content: '### Iteration arc\n\nExplorations move from sketches to polished Figma Hi-Fi flows covering onboarding, diversion, community, assistance, and diary.\n\n### Experience goals\n\nLearnability, functional fit, speed, resilience, and delight anchor every screen.\n\n### Evaluation plan\n\nTask success, recovery paths, and SUS scores will steer the next build cycles.'
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
          content: '### Memory-made space\n\nThe remembered home is drawn in warm, ordinary detail.\n\n### Couple & companions\n\nVR reconstructs two gardeners and designers—and their bunny plus cats Xuehuan and Kele—whose energy threaded interview conversations.\n\n### Place & time\n\nGuided by PLACE and TIME, the piece foregrounds dusk dinner in their former flat and quiet nightly reading in today’s living room.'
        },
        process: {
          title: 'Workflow',
          content: '### Capture\n\nMobile 3D scans anchor faithful room meshes.\n\n### Listening & drawing\n\nInterviews and sketches map emotion across hours and seasons.\n\n### Build & test\n\nUnity reunites geometry, props, and spatial audio; headset sessions let participants inhabit the rebuilt warmth of home.',
          image: 'VR workflow diagram showing 3D scanning to Unity integration process'
        },
        outcome: {
          title: 'User Experience',
          content: '### Layered atmosphere\n\nScanned furnishings meet AI skies and field-recorded ambiences—birds, traffic hum, playful pets.\n\n### Embodied return\n\nVisitors roam a memory-space where time, location, and intimacy fold together.'
        }
      }
    },
    {
      id: 7,
      title: 'SyneSound',
      category: 'products',
      description: 'An inclusive music creation system that transforms visual elements into music, designed for non-musicians and the deaf and hard-of-hearing community.',
      tags: ['🏆 NOVA Winner', 'AI', 'Music Generation', 'Accessibility', 'Synesthesia', 'Web App'],
      image: 'SyneSound visual-to-musical creation system with color mapping interface',
      featured: true,
      details: {
        about: {
          title: 'Project Overview',
          content: '### Who it’s for\n\nSyneSound—by X-MA Group (Yongyi Xiong, Yunxiang Ma)—opens music-making through visual transformation for non-musicians and the Deaf and hard-of-hearing community.\n\n### Compose with vision\n\nThe mantra is simple: compose through vision, not necessarily hearing.\n\n### Synesthetic canvas\n\nSynesthesia frames the UI: color, shape, and motion replace dense notation with an approachable visual grammar.'
        },
        process: {
          title: 'Core Semantics & Mappings',
          content: '### Mode & palette\n\nHue locks to modes—warm major palettes, yellow-green Lydian/Dorian blends, cyan-blue minor moods, magenta-violet Phrygian edges—giving beginners “safe” harmonic lanes.\n\n### Notes & chords\n\nSpheres trigger musical events: solid hues yield single notes; blends spawn chords. Rotation tweaks inversion, scale sets duration, opacity drives dynamics, XY placement maps time and register.\n\n### Rhythm & style\n\nWobble encodes tempo density, accent, and swing; translucent boards choose genre presets that steer BPM, groove, and instrumentation.\n\n### Stack\n\nReact + Konva + Tone.js handle the canvas locally; Agentuity orchestrates cloud hops; OpenAI shapes prompts; Meta MusicGen on Replicate renders audio.'
        },
        outcome: {
          title: 'Product Value & Vision',
          content: '### Accessibility\n\nVisual pathways bypass traditional ear-training barriers.\n\n### Explainable AI\n\nThe canvas stays legible—every shape reads back to musical structure instead of hiding inside a black box.\n\n### Emotional legibility\n\nMotion and palette broadcast intent to collaborators—including hearing listeners.\n\n### Research horizon\n\nUpcoming “emotional consistency” studies pair DHH composers with hearing audiences to see whether visual intent survives translation into sound.'
        }
      }
    },
    {
      id: 8,
      title: 'DomestiCade',
      category: 'xr',
      description: 'From Domestic Chaos to Algorithmic Order',
      tags: ['WebXR', 'Browser AR', 'Three.js', 'Procedural Generation', 'Computer Vision', 'Serious Play'],
      image: 'DomestiCade browser AR platform game hero scene',
      featured: true,
      details: {
        about: {
          title: 'Overview',
          content: '### Photo to playable level\n\nDomestiCade is a browser-based AR platform game that turns everyday domestic environments into obstacle courses. Users photograph their surroundings; the stack reads objects and surfaces, translates them into game primitives, and rebuilds them as a stylized AR platformer level.\n\n### Hybrid authorship\n\nThe project explores co-authorship between human perception and machine interpretation—you choose and traverse the scene while algorithms surface latent level geometry. A procedural layer turns those readings into paths, hazards, collectibles, and goals.'
        },
        process: {
          title: 'Interpretation & Stack',
          content: '### ML as semantic interpreter\n\nRather than a fully generative world-builder, DomestiCade treats machine learning as a semantic interpreter: a table lip becomes a ledge, a mug reads as a pipe-like obstacle, a cluttered nook becomes a hazard zone.\n\n### AR closure\n\nThrough WebXR, those translations snap back into the user’s physical room as something you can move through and play.\n\n[[IMAGE:/images/domesticade-pipeline.png|DomestiCade technical pipeline diagram]]\n\n### Prototype architecture\n\nThe prototype stitches WebXR, Three.js, Cannon.js physics, serverless vision inference, procedural layout rules, and local 3D props—balancing fidelity to the captured scene with stable, legible gameplay.'
        },
        outcome: {
          title: 'Reflections',
          content: '### Designing with suggestion\n\nWe learned ML feels strongest in interactive systems when it contributes interpretation, suggestion, and transformation—not wholesale replacement of human intent.\n\n### Hidden affordances\n\nDomestiCade reframes the home as a field of latent affordances: familiar clutter becomes part of a fresh spatial logic for play.\n\n[[IMAGE:/images/domesticade-scene.png|DomestiCade AR gameplay scene]]'
        }
      }
    },
    {
      id: 9,
      title: 'Improving Front/Back Depth Reasoning in Vision Language Models',
      category: 'compdesign',
      description: 'Lightweight spatial cues for stable front/behind judgments in VLMs on occluded scenes.',
      tags: ['Vision-Language Models', 'Spatial Reasoning', 'QLoRA', 'Qwen2.5-VL', 'InstaOrder', 'COCO'],
      image: 'VLM front/back depth reasoning task and method overview',
      featured: true,
      details: {
        about: {
          title: 'Motivation, Task & Method',
          content: '### Problem setting\n\nThis project investigates whether lightweight spatial cues can improve front/behind reasoning in vision-language models. Given an image and two marked objects, the model must decide whether Object A is in front of or behind Object B. We focus on occluded scenes, where current VLMs often rely on unstable visual shortcuts.\n\n[[IMAGE:/images/VLMFT-img.png|Task example: original image and marked Objects A and B]]\n\n### Research question\n\nCan a smaller 7B vision-language model learn more stable front/behind judgments when given explicit spatial metadata, such as bounding box coordinates and 2D overlap flags?\n\n### Dataset and task\n\nWe use InstaOrder annotations paired with COCO 2017 images. Each sample contains two localized objects, A and B, and the model answers whether A is in front of or behind B. To avoid label shortcuts, we construct a directionally balanced and image-disjoint split: each object pair appears in both directions, with flipped labels.\n\nThe final dataset contains 26,046 training samples, 2,746 validation samples, and 2,952 test samples, balanced at 50% front and 50% behind.\n\n[[IMAGE:/images/VLMFT-sourcedata.png|InstaOrder paired with COCO 2017 — dataset overview]]\n\n### Method\n\nWe compare zero-shot and fine-tuned versions of Qwen2.5-VL. All settings use marked images with red and blue boxes for Object A and Object B. We then test whether two types of structured text cues improve reasoning:\n\nBBox cue: explicit bounding box coordinates for A and B.\n\nOverlap cue: a binary flag indicating whether the two boxes overlap in 2D.\n\nThe main method fine-tunes Qwen2.5-VL 7B with QLoRA, using 4-bit quantization and low-rank adapters. This allows the model to learn the front/behind task efficiently without full model fine-tuning.'
        },
        process: {
          title: 'Findings',
          content: '### Key finding 1: reducing label bias\n\nThe 7B zero-shot model performs close to chance overall, but its errors are not random. It strongly prefers one direction: 74.53% accuracy on front queries but only 26.49% on behind queries. This reveals a severe directional guessing bias.\n\nAfter QLoRA tuning with spatial cues, this imbalance is largely corrected. The best model, 7B + bbox + overlap, reaches 93.56% accuracy on front and 91.73% on behind.\n\n[[IMAGE:/images/VLMFT-result1.png|Accuracy by target label — correction of front/behind bias (Figure 4)]]\n\n### Key finding 2: spatial cues make the 7B model competitive\n\nPrompt-only spatial cues improve the 7B model moderately, raising raw accuracy to around 65–66%. However, the largest improvement comes from fine-tuning. All QLoRA-tuned 7B variants exceed 91% raw accuracy, outperforming the 72B zero-shot reference, which reaches 70.16%.\n\nThe strongest configuration, 7B + bbox + overlap, achieves:\n\n92.65% raw accuracy\n\n96.82% consistency score\n\n91.06% pair accuracy\n\n### Key finding 3: occlusion remains difficult\n\nAlthough spatial cue tuning greatly improves front/behind prediction, occlusion remains challenging. The best model reaches 96.08% accuracy when the two boxes do not overlap, but drops to 75.80% when they overlap.\n\nThis suggests that bbox coordinates and binary overlap flags help the model use spatial structure, but they do not fully solve visually ambiguous occlusion.\n\n[[IMAGE:/images/VLMFT-result2.png|Accuracy under overlap split — success and remaining limitation (Figure 3)]]\n\n### Remaining challenge\n\nPerformance also decreases as bbox IoU increases. The strongest model reaches 93.08% accuracy when IoU is zero, but drops to 77.78% when IoU is greater than 0.3. This shows that stronger object overlap still makes front/behind reasoning harder, even after fine-tuning.\n\n[[IMAGE:/images/VLMFT-result3.png|Accuracy across bbox IoU buckets (Figure 5)]]'
        },
        outcome: {
          title: 'Reflection',
          content: '### Takeaways\n\nThis project shows that a smaller VLM can outperform a much larger zero-shot model on a specific spatial reasoning task when given targeted supervision and explicit spatial cues. At the same time, the results reveal a clear boundary: improving a model on a controlled front/behind benchmark does not necessarily mean that it has solved general spatial reasoning.\n\n### Future work\n\nFuture work should test transfer to broader VLM benchmarks and explore richer visibility-aware cues, such as segmentation masks, visible area ratios, relative scale, and depth priors.'
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
      tags: ['CHI 2026 Accepted', '生成式AI', '空间计算', '用户体验', '产品设计'],
      image: 'Roomify VR/MR空间计算界面与生成式管线',
      featured: true,
      details: {
        about: {
          title: '项目概述',
          content: '### 空间容器\n\nRoomify 是「空间锚定」的生成式系统：以用户的真实房间为容器，在保留结构与家具可供性的前提下，将环境一键转换为魔法学院、海盗船舱等连贯主题。\n\n### 沉浸与认知的平衡\n\n它在「沉浸感」与「空间感知」之间寻找支点：减少破坏临场的透视依赖，同时不牺牲物理空间的功能逻辑。'
        },
        process: {
          title: '工作原理',
          content: '### 四阶段管线\n\n**场景理解** — 视频 SLAM 与语义解析输出带朝向的 3D 边界框与全局 JSON 脚手架。\n\n**风格提取与映射** — 从文本或参考图抽取关键词，生成墙地面、物体与环境的映射表与约束。\n\n**多模态生成** — 参考引导的风格化图像、3D 资产、PBR 与天空盒。\n\n**空间组装注册** — 结合位姿与几何将资产精准落位，保证导航可预期、交互可用。',
          image: 'Roomify系统架构与管线流程图'
        },
        outcome: {
          title: '用户研究与成效',
          content: '### VR 用户对比（n = 18）\n\n相较「透视基线」与「全虚拟场景」，Roomify 显著提升临场感 / 沉浸（约 +63% / +26%），同时维持可用的空间认知与导航表现。\n\n### 设计专业人士（n = 8）\n\n团队认可其作为创意原型工具的表达力与工作流价值：在多空间、多主题下能快速迭代且保持可控。'
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
          content: '### 双源数据\n\n项目以清华校园为试验场，融合 GPS 轨迹与社交媒体文本，识别停留热点、典型路径与情绪分布。\n\n### 从分析到游玩\n\n研究结果转译为六边格桌游与手机 AR：引导访客行走，强化空间认知与参与感。'
        },
        process: {
          title: '研究设定与方法',
          content: '### 田野与工具链\n\n在导师黄巍昕指导下（2023.08–09，北京；独立完成），跟踪 50 名随机游览者；使用 Python（Jupyter）、K-Means、NLP 与 3D 打印清洗与分析轨迹。\n\n### 停留识别\n\n以 Haversine 距离与 60 秒平均速度平滑路径；速度最低 5%（v < 0.674 m/s）视为候选停留，经密度筛选与 K-Means 得到 11 处代表性站点及典型序列。\n\n### 数字—物理叠合\n\n抓取约 200 条小红书贴文做词频与情感映射，与物理停留分布叠加，形成双重密度底板。',
          image: 'Cognitive Tracks研究方法与数据处理流程图'
        },
        outcome: {
          title: '关键发现',
          content: '### 速度揭示什么\n\n速度低谷往往对齐显著景点，但也有减速来自拥堵而非吸引力。\n\n### 偏好分化\n\n「历史 / 建筑 / 自然」取向的人群在路径顺序与停留强度上差异明显。\n\n### 多层地图\n\n由此沉淀访问密度图、数字情绪热力图与物理停留点图等信息层，为设计提供底座。'
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
          content: '### EEG 驱动的空间叙事\n\n「基于 EEG 个性化的多感官与具身化展览设计」探讨实时脑电如何塑造沉浸式体验。\n\n### 参观者主导\n\n空间并非预设「主动」，而是由具身感知推动叙事。\n\n### 模块化路径\n\n脑电情绪识别与模块化展陈结合，路径可随个体情感状态调整；方案于 2025 清华大学建筑学院本科作品展以团队形式展出，串联神经科学、计算设计与空间建构。'
        },
        process: {
          title: '实验实施',
          content: '### 实验设计\n\n三组对照实验，每组 8 人；16 通道 OpenBCI，采样率 256 Hz；单次 15–20 分钟，刺激以 15 秒为单元切段。\n\n### 条件与生理佐证\n\n对比纯视觉、纯听觉与视听融合；同步采集 GSR、EMG 做交叉验证。\n\n### 研究问题\n\n框架用于审视多模态输入如何共同塑造情绪反应。',
          image: 'EEG实验设置与流程'
        },
        outcome: {
          title: '数据分析',
          content: '### 信号处理\n\n遵循 MNE 流程：带通与 50 Hz 陷波、ICA 去伪迹、基线校正；特征含 α/β/γ PSD 与时域统计，并在被试间标准化。\n\n### 标签与模型\n\n情绪标注基于 Russell 效价—唤醒度空间；比较 SVM、KNN、随机森林等，随机森林表现最佳。\n\n### 跨模态效应\n\n交叉验证显示：积极或消极视听叠加时常使反应趋向中性，但整体正负倾向仍可辨识。'
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
          content: '### 走廊语境\n\n研究沿中环—半山扶梯展开，这段路径承载厚重的历史与文化层积。\n\n### 地标与共存\n\n从中环街市、嘉咸街市集、大馆，到香港浸信会教堂、清真寺等宗教场所，空间多元并置。\n\n### 城市拼贴\n\n中西建筑语法、不同信仰空间与市场类型的对照，共同构成复杂的城市节点。'
        },
        process: {
          title: '图片爬取',
          content: '### 数据采集\n\n借助 Google 街景 API 获取扶梯沿线连续影像。\n\n### 语义分割\n\nDeepLabV3 提取建筑、树木、招牌、路面、天空等要素，为色彩与人尺度感知分析奠定统一数据底。',
          image: '香港街景图像爬取与语义分割处理流程'
        },
        outcome: {
          title: '聚类分析',
          content: '### 从像素到簇\n\n在分割结果上提取色彩，RGB 转 HSV 归一化；PCA 降维后以 k-means 划分色域模式。\n\n### 对照城市结构\n\n聚类结果与功能分区比对，揭示街道色彩与片区角色之间的关联。'
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
          content: '### 行业体量\n\n中国宠物经济高速增长，宠物数量接近两亿，2022 年线上渗透率约 52%。\n\n### 产品碎片化\n\n既有工具偏重日记（如「有宠」）、电商（「宠物市场」）或领养（「宠物帮领养中心」）。\n\n### 机会\n\n缺少同时整合社交、领养与线下活动的统一平台。'
        },
        process: {
          title: '产品概念框架',
          content: '### Pets\' Tribe 三角结构\n\n**协助（Assistance）** — 领养流程、宠物医疗与信息互助。\n\n**社区（Community）** — 动态、经验分享与线下活动组织。\n\n**日记（Diary）** — 日常记录与可选隐私的云端展示。\n\n### 生态闭环\n\n个体用户与机构用户互补需求，维系可持续的宠物社群。',
          image: 'Pet\'s Tribe产品概念框架图'
        },
        outcome: {
          title: 'Prototype设计',
          content: '### 迭代路径\n\n由低保真草图演进至高保真 Figma 原型，覆盖登录分流、社区、协助与日记。\n\n### 体验目标\n\n强调易学、功能契合、效率、容错与视觉吸引力。\n\n### 验证指标\n\n任务成功率、错误恢复与 SUS 量表将驱动下一轮优化。'
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
          content: '### 记忆里的温度\n\n家的轮廓由琐碎细节的温度勾勒。\n\n### 人物与伴侣动物\n\nVR 重现一对热衷园艺与室内设计的夫妻；他们与兔子、猫咪雪环和可乐共处，访谈时猫在花园与室内穿梭，氛围柔和。\n\n### 空间与时间双线\n\n以 PLACE 与 TIME 为线索，锚定两段记忆：旧宅黄昏的家庭晚餐，与新居夜里客厅的安静阅读。'
        },
        process: {
          title: '工作流程',
          content: '### 扫描\n\n移动设备扫描居住空间，获取可用网格。\n\n### 访谈与制图\n\n深度访谈与手绘记录情绪如何附着在不同时间与角落。\n\n### 搭建与测试\n\nUnity 整合模型、物件与空间音频；受试者戴头显重返「被唤醒的家」。',
          image: 'VR工作流程图：从3D扫描到Unity集成的完整流程'
        },
        outcome: {
          title: '用户体验',
          content: '### 多层氛围\n\n场景揉合扫描家具、AI 天空盒与实录音景（鸟鸣、城市底噪、宠物声等）。\n\n### 在场的回访\n\n用户可在记忆化的居所中慢行，触摸与时间、空间、亲密关系交织的瞬间。'
        }
      }
    },
    {
      id: 7,
      title: 'SyneSound',
      category: 'products',
      description: '一个包容性的音乐创作系统，将视觉元素转化为音乐，为非音乐专业人士和听障群体设计。',
      tags: ['🏆 NOVA Winner', 'AI', '音乐生成', '无障碍设计', '联觉', 'Web应用'],
      image: 'SyneSound视觉转音乐创作系统与色彩映射界面',
      featured: true,
      details: {
        about: {
          title: '项目概述',
          content: '### 服务对象\n\nSyneSound 由 X-MA Group（Yongyi Xiong、Yunxiang Ma）打造，面向非音乐人及听障（DHH）社群，用视觉驱动作曲。\n\n### 核心理念\n\n「用看的，而不是只用听的」完成音乐表达。\n\n### 联觉式画布\n\n以联觉为隐喻：颜色、形状与运动构成直观的视觉语法，取代繁复五线谱。'
        },
        process: {
          title: '核心功能与语义映射',
          content: '### 调式与调色盘\n\n色相映射调式：暖色偏 Ionian，黄绿衔接 Lydian/Dorian，青蓝走向 Aeolian，洋红—紫落在 Phrygian，为非专业人士提供「安全」音域。\n\n### 音符与和弦\n\n球体触发事件：纯色出单音，混色成和弦；旋转调转位，尺度控时值，透明度控力度，XY 轴映射时间与音区。\n\n### 节奏与风格\n\nWobble 编码速度与密度、重音与摇摆；半透明底板锁定 Ambient / Classical / Electronic / Jazz 等风格模板与 BPM 区间。\n\n### 技术栈\n\n前端 React + Konva + Tone.js；Agentuity 编排云端；OpenAI 生成提示；Meta MusicGen（Replicate）渲染音频。'
        },
        outcome: {
          title: '产品价值与愿景',
          content: '### 降低门槛\n\n无需传统听力训练也能创作。\n\n### 可解释界面\n\n画布上的图形始终对应可辨识的和声结构，而非不可见的黑盒。\n\n### 情感可读\n\n色彩与运动向外传递情绪，便于协作与共鸣。\n\n### 研究展望\n\n规划「情感一致性」实验：听障创作者仅凭画布创作，健听听众只听音频，双方在 Valence-Arousal 量表上对齐情绪标签，检验视觉—听觉的情感传递。'
        }
      }
    },
    {
      id: 8,
      title: 'DomestiCade',
      category: 'xr',
      description: '从居家混沌到算法秩序',
      tags: ['WebXR', '浏览器AR', 'Three.js', '程序化生成', '计算机视觉', '严肃游戏'],
      image: 'DomestiCade 浏览器 AR 平台跳跃游戏主视觉',
      featured: true,
      details: {
        about: {
          title: '概述',
          content: '### 从照片到可玩关卡\n\nDomestiCade 是基于浏览器的 AR 平台跳跃游戏：把日常居家环境变成障碍赛道。用户拍摄周遭，系统解析物体与表面，转译为游戏元素，再重构为风格化的 AR 关卡。\n\n### 混合创作权\n\n探索「人的感知」与「机器解读」如何共享作者性——你选择场景并穿行其中，算法揭示环境中潜藏的平台结构；程序化管线再将解读转化为路径、危险物、金币与终点。'
        },
        process: {
          title: '诠释与技术架构',
          content: '### 机器学习作为语义诠释者\n\n不把 AI 当作完整世界生成器，而定位为语义诠释者：桌沿可以是平台，杯子可类比管道障碍，杂乱角落可升格为危险区。\n\n### 回到真实空间的 AR\n\n经由 WebXR，这些翻译被嵌回用户的物理房间，成为可穿梭游玩的关卡。\n\n[[IMAGE:/images/domesticade-pipeline.png|DomestiCade 系统技术管线示意图]]\n\n### 原型架构\n\n原型整合 WebXR、Three.js、Cannon.js 物理、无服务器视觉推理、程序化关卡规则与本地 3D 资产，在「贴合实拍场景」与「玩法稳定」之间取得平衡。'
        },
        outcome: {
          title: '反思',
          content: '### 以建议而非取代来设计\n\n我们体会到：当机器学习提供诠释、建议与转化，而非覆盖人的意图时，在交互系统中最具说服力。\n\n### 隐藏的可供性\n\nDomestiCade 把家视作隐藏可供性的场域——熟悉杂物融入一套崭新的空间游玩逻辑。\n\n[[IMAGE:/images/domesticade-scene.png|DomestiCade AR 游玩场景]]'
        }
      }
    },
    {
      id: 9,
      title: '改善视觉语言模型中的前后深度推理',
      category: 'compdesign',
      description: '轻量级空间提示提升 VLM 在遮挡场景下的前后关系判断稳定性。',
      tags: ['视觉语言模型', '空间推理', 'QLoRA', 'Qwen2.5-VL', 'InstaOrder', 'COCO'],
      image: 'VLM 前后深度推理任务与方法概览',
      featured: true,
      details: {
        about: {
          title: '动机、任务与方法',
          content: '### 问题设定\n\n本项目研究轻量级空间提示是否能够提升视觉语言模型的前后深度推理能力。给定一张图像和两个被标注的物体，模型需要判断 Object A 位于 Object B 的前方还是后方。我们关注遮挡场景，因为当前 VLM 在这类空间关系中常常依赖不稳定的视觉捷径。\n\n[[IMAGE:/images/VLMFT-img.png|任务示例：原图与标注 Object A / B 的版本]]\n\n### 研究问题\n\n当提供显式空间元信息，例如 bounding box 坐标和二维重叠标记时，一个较小的 7B 视觉语言模型能否学习到更稳定的前后关系判断？\n\n### 数据集与任务\n\n我们使用 InstaOrder 标注，并与 COCO 2017 图像配对。每个样本包含两个被定位的物体 A 和 B，模型需要回答 A 在 B 前面还是后面。为了避免标签捷径，我们构建了方向平衡且图像不重叠的数据划分：每一对物体都会以两个方向出现，并翻转标签。\n\n最终数据集包含 26,046 个训练样本、2,746 个验证样本和 2,952 个测试样本，其中 front 与 behind 各占 50%。\n\n[[IMAGE:/images/VLMFT-sourcedata.png|InstaOrder 与 COCO 2017 配对 — 数据概览]]\n\n### 方法\n\n我们比较了 Qwen2.5-VL 的 zero-shot 与 fine-tuned 版本。所有实验都使用带有红色和蓝色框的 marked images 来标出 Object A 和 Object B。在此基础上，我们测试两类结构化文本空间提示是否能够提升推理效果：\n\nBBox cue：提供 A 和 B 的 bounding box 坐标。\n\nOverlap cue：提供两个框在二维图像中是否重叠的二元标记。\n\n主要方法使用 QLoRA 对 Qwen2.5-VL 7B 进行参数高效微调，通过 4-bit 量化和低秩适配器，让模型在不进行完整微调的情况下学习前后关系判断。'
        },
        process: {
          title: '关键发现',
          content: '### 关键发现一：减少标签偏置\n\n7B zero-shot 模型的整体表现接近随机水平，但它的错误并不是随机的。它明显偏向某一个方向：在 front 样本上达到 74.53% 准确率，但在 behind 样本上只有 26.49%。这说明模型存在严重的方向性猜测偏置。\n\n在使用空间提示进行 QLoRA 微调后，这种不平衡被大幅修正。最佳模型 7B + bbox + overlap 在 front 上达到 93.56%，在 behind 上达到 91.73%。\n\n[[IMAGE:/images/VLMFT-result1.png|按目标标签的准确率 — front/behind 偏置修正（图 4）]]\n\n### 关键发现二：空间提示让 7B 模型具备竞争力\n\n仅在 prompt 中加入空间提示，可以让 7B 模型有中等幅度提升，raw accuracy 提高到约 65–66%。但最大提升来自微调。所有 QLoRA 微调后的 7B 版本都超过 91% raw accuracy，超过了 72B zero-shot 参考模型的 70.16%。\n\n最佳配置 7B + bbox + overlap 达到：\n\n92.65% Raw Accuracy\n\n96.82% Consistency Score\n\n91.06% Pair Accuracy\n\n### 关键发现三：遮挡仍然是核心难点\n\n尽管空间提示微调显著提升了前后关系预测，遮挡仍然是困难点。最佳模型在两个框不重叠时达到 96.08% 准确率，但在两个框重叠时下降到 75.80%。\n\n这说明 bbox 坐标和二元 overlap 标记确实帮助模型利用空间结构，但它们并不能完全解决视觉上模糊的遮挡推理。\n\n[[IMAGE:/images/VLMFT-result2.png|按重叠划分的准确率 — 成效与尚未解决的局限（图 3）]]\n\n### 剩余问题\n\n随着 bbox IoU 增大，模型表现也会下降。最佳模型在 IoU 为 0 时达到 93.08% 准确率，但当 IoU 大于 0.3 时下降到 77.78%。这说明即使经过微调，更强的物体重叠仍然会让前后关系推理变得困难。\n\n[[IMAGE:/images/VLMFT-result3.png|按 bbox IoU 分桶的准确率（图 5）]]'
        },
        outcome: {
          title: '反思',
          content: '### 总结\n\n这个项目表明，在特定空间推理任务上，如果提供有针对性的监督和显式空间提示，一个较小的 VLM 可以超过更大的 zero-shot 模型。同时，结果也揭示了明确边界：在受控的 front/behind benchmark 上取得提升，并不意味着模型已经解决了通用空间推理问题。\n\n### 未来工作\n\n未来工作应进一步测试这种微调是否能迁移到更广泛的 VLM benchmark，并探索更丰富的 visibility-aware cues，例如 segmentation masks、visible area ratio、relative scale 和 depth priors。'
        }
      }
    }
  ]
};