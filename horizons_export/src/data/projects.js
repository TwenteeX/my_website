export const projectsData = {
  "en": [
    {
      "id": 1,
      "category": "products",
      "tags": [
        "CHI 2026",
        "UIST 2026 Demo",
        "Generative AI",
        "Spatial computing",
        "XR interaction"
      ],
      "featured": true,
      "title": "Roomify",
      "description": "Transforming real rooms into themed virtual environments, with spatial layout and physical affordances intact.",
      "year": "2025—2026",
      "members": "Xueyang Wang, Qinxuan Cen, Weitao Bi, Yunxiang Ma",
      "sections": [
        {
          "title": "Spatially grounded generation",
          "content": "Roomify creates themed VR environments from real rooms. It retains the layout and functional relationships of furniture while changing their visual form. The research asks how generative environments can support immersion without removing a user’s awareness of the physical room.",
          "images": [
            "/images/roomify-head.png"
          ]
        },
        {
          "title": "System & interaction",
          "content": "The pipeline combines scene understanding, style reasoning, content generation, and spatial registration. Video SLAM and semantic parsing produce a 3D scaffold; text or image references guide the generation of objects, materials, and surroundings.\n\nI co-designed the system and its XR interaction modules, and integrated an agent workflow using SLAM3R, SpatialLM, image generation, and 3D generation. Creators can inspect a spatial scaffold in MR, edit individual objects, regenerate selected elements, and preview the result in VR.",
          "images": [
            "/images/roomify-pipeline.png",
            "/images/roomify-mr.png"
          ]
        },
        {
          "title": "Evaluation",
          "content": "We evaluated Roomify with 18 VR users and 8 design professionals. Reported immersion increased by 63% over passthrough and 26% over a fully virtual baseline. Design participants rated spatial awareness at 5.95/7 and creative support at 6.08/7.\n\nThe work was accepted at CHI 2026. A live demonstration was also accepted for UIST 2026.",
          "images": [
            "/images/roomify-usertest1.png",
            "/images/roomify-analysis1.png",
            "/images/roomify-usertest2.png",
            "/images/roomify-analysis2.png"
          ]
        }
      ],
      "links": [
        {
          "label": "Paper · arXiv",
          "url": "https://doi.org/10.48550/arXiv.2603.04917"
        },
        {
          "label": "Code · GitHub",
          "url": "https://github.com/NiceStone-Hill/Virtual_Merge_Generation"
        }
      ]
    },
    {
      "id": 2,
      "category": "compdesign",
      "tags": [
        "Data Mining",
        "NLP",
        "Boardgame Design"
      ],
      "featured": true,
      "title": "Cognitive Tracks",
      "description": "Turning campus movement data and visitors’ accounts into a board game and an AR guide.",
      "year": "2023",
      "members": "Individual project",
      "sections": [
        {
          "title": "Reading a campus through movement",
          "content": "This individual project studies how people navigate Tsinghua’s campus. GPS traces and social-media posts identify places where visitors pause, the routes they take, and the associations they form. The findings inform a hexagonal board game and a mobile AR guide.",
          "images": [
            "/images/boardgame-flowchart.png"
          ]
        },
        {
          "title": "Fieldwork & analysis",
          "content": "Under the supervision of Prof. Weixin Huang, I collected routes from 50 participants in August–September 2023. Python processing used Haversine distance and 60-second mean velocity to clean movement data. Low-speed samples (below 0.674 m/s) provided initial stopping candidates; density filtering and K-means identified 11 representative sites.\n\nAround 200 Xiaohongshu posts contributed word-frequency and affective information. Combining these sources produced maps of visiting density, digital emotion, and physical stopping points.",
          "images": [
            "/images/boardgame-experiment.png",
            "/images/boardgame-clustering.png"
          ]
        },
        {
          "title": "From analysis to play",
          "content": "The board and its components translate route patterns into choices players can make. The AR layer provides location-specific information.\n\nSlower movement sometimes indicated congestion rather than interest, so velocity alone could not explain visitor preferences. Comparing interests in history, architecture, and nature helped distinguish different visiting sequences and dwell patterns.",
          "images": [
            "/images/boardgame-design.png",
            "/images/boardgame-result.png",
            "/images/boardgame-effect.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 3,
      "category": "compdesign",
      "tags": [
        "EEG",
        "Machine Learning",
        "UX Design",
        "Parametric Architecture"
      ],
      "featured": true,
      "title": "EEG-informed Exhibition Design",
      "description": "Studying emotional responses to audiovisual stimuli and using the findings to inform modular exhibition spaces.",
      "year": "2024—2025",
      "members": "Yunxiang Ma, Yutong Wu",
      "sections": [
        {
          "title": "From perception to spatial design",
          "content": "This group project connects EEG-based emotion recognition with modular exhibition design. It investigates how visual and auditory stimuli influence emotional response, then uses these findings to propose personalized routes through an exhibition. The work was selected for Tsinghua Architecture’s 2025 undergraduate exhibition.",
          "images": [
            "/images/imagine-experiment.png"
          ]
        },
        {
          "title": "Experimental study",
          "content": "Three controlled studies, each with eight participants, compared visual, auditory, and audiovisual conditions. We recorded EEG using a 16-channel OpenBCI device at 256 Hz, with GSR and EMG as supplementary measures. Sessions lasted 15–20 minutes with 15-second stimulus epochs.\n\nPreprocessing included band-pass and 50 Hz notch filtering, ICA artifact rejection, and baseline correction. We extracted power-spectrum and time-domain features, and compared SVM, KNN, and Random Forest classifiers using valence–arousal labels. Random Forest performed best among the tested classifiers.",
          "images": [
            "/images/imagine-equipment.png",
            "/images/imagine-data.png",
            "/images/imagine-variables.png",
            "/images/imagine-dataframe.png",
            "/images/apparatus.png",
            "/images/imagine-baseline.png",
            "/images/imagine-ml.png"
          ]
        },
        {
          "title": "Modular proposal",
          "content": "A 3 × 3 × 3 m prototype translates the study into spatial modules. A shape grammar defines 16 variants with different degrees of publicness, body posture, and circulation. Grasshopper scripts organize their assembly with horizontal and vertical circulation elements.\n\nThe proposal uses affect recognition to inform route recommendations. Personalized route recommendations remain a proposal for further evaluation.",
          "images": [
            "/images/imagine-experience.png",
            "/images/imagine-prototype.png",
            "/images/imagine-shapegrammar.png",
            "/images/imagine-grasshopper.png",
            "/images/imagine-combination.png",
            "/images/imagine-details.png",
            "/images/imagine-final.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 4,
      "category": "dataviz",
      "tags": [
        "Urban Analysis",
        "Computer Vision",
        "ML",
        "Clustering"
      ],
      "featured": true,
      "title": "Colors of Hong Kong",
      "description": "Mapping street-level color patterns along Hong Kong’s Central–Mid-Levels Escalator.",
      "year": "2024",
      "members": "Yunxiang Ma, Jing Zhuang, Tino Zhu",
      "sections": [
        {
          "title": "A street-level study",
          "content": "The study follows the Central–Mid-Levels Escalator, where commercial, residential, and heritage spaces meet. We examine how street-level color patterns relate to the corridor’s changing urban functions.",
          "images": []
        },
        {
          "title": "Computer vision & clustering",
          "content": "Street-view imagery was collected along the route and segmented with DeepLabV3 into elements such as buildings, trees, signs, pavement, and sky. We extracted color features, converted RGB values to HSV, reduced dimensionality with PCA, and grouped patterns with K-means.",
          "images": [
            "/images/hongkong-data.png",
            "/images/hongkong-extraction.png",
            "/images/hongkong-clustering.png"
          ]
        },
        {
          "title": "Color & urban function",
          "content": "Within the sampled route, Central’s office and commercial areas tended toward cooler, less saturated palettes. Residential and mixed-use areas in Mid-Levels showed warmer, more saturated tones. Mapping these clusters provides a way to compare visual character with land use.",
          "images": [
            "/images/hongkong-result.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 5,
      "category": "products",
      "tags": [
        "UX Design",
        "Mobile App",
        "Product Design"
      ],
      "featured": false,
      "title": "Pet’s Tribe",
      "description": "A mobile product concept bringing pet communities, adoption support, and everyday care into one place.",
      "year": "2023",
      "members": "Yunxiang Ma, Yuying Zhang, Xinning He, Rhone Ryan Huang Ern",
      "sections": [
        {
          "title": "Product question",
          "content": "Pet owners and animal organizations often use separate services for community, adoption, and daily care. Pet’s Tribe explores how these activities could share a consistent mobile experience. Competitor research informed three areas: assistance, community, and a personal diary.",
          "images": []
        },
        {
          "title": "Information architecture",
          "content": "The assistance area supports adoption and care information. Community features organize posts and offline activities. The diary lets owners document daily life with privacy controls. Storyboards connect these features to different user needs and routines.",
          "images": [
            "/images/pet-structure.png",
            "/images/pet-storyboard.png"
          ]
        },
        {
          "title": "Prototype & next evaluation",
          "content": "The design progressed from sketches to a high-fidelity Figma prototype covering sign-in, user pathways, community, assistance, and diary screens. Planned usability evaluation would measure task completion, error recovery, and System Usability Scale scores; these are proposed measures, not reported results.",
          "images": [
            "/images/pet-prototype1.png",
            "/images/pet-prototype2.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 6,
      "category": "xr",
      "tags": [
        "UX Design",
        "VR",
        "3D Scanning",
        "Unity"
      ],
      "featured": false,
      "title": "Feeling Home in Memory",
      "description": "Reconstructing a couple’s memories of home through interviews, 3D scanning, and VR.",
      "year": "2024",
      "members": "Individual project",
      "sections": [
        {
          "title": "Listening to a remembered home",
          "content": "In July 2024, I interviewed a couple in Chongqing about their former and current homes. Their accounts of daily routines, shared spaces, and pets became the basis for an individual VR project about domestic memory.",
          "images": []
        },
        {
          "title": "Interviews, drawings & capture",
          "content": "The couple drew floor plans and traced changes in mood across a day and a year. Two scenes guided the reconstruction: family dinner at dusk in the former home, and reading at night in the current living room.\n\nMobile 3D scanning captured rooms and furniture. I assembled the scenes in Unity, using interview drawings to guide the selection of objects, light, and atmosphere.",
          "images": [
            "/images/vr-sketch.png",
            "/images/vr-workflow.png"
          ]
        },
        {
          "title": "The VR experience",
          "content": "The final scenes combine scanned objects, generated skyboxes, and recorded soundscapes, including birds, traffic, and pets. Participants can move through the reconstructed rooms in a headset. The project treats personal accounts as design material, attending to the ordinary details that make a place feel like home.",
          "images": [
            "/images/vr-experience.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 7,
      "category": "products",
      "tags": [
        "NOVA Most InNOVAtive Prize",
        "AI",
        "Music Generation",
        "Accessibility",
        "Synesthesia",
        "Web App"
      ],
      "featured": true,
      "title": "SyneSound",
      "description": "A visual music-making interface that maps color, shape, and motion to musical structure.",
      "year": "2025",
      "members": "Yongyi Xiong, Yunxiang Ma",
      "sections": [
        {
          "title": "Composing through visual choices",
          "content": "Developed by Yongyi Xiong and Yunxiang Ma, SyneSound explores visual composition for people without musical training and for Deaf and hard-of-hearing creators. Users arrange visual elements to specify musical ideas. The project received CMU NOVA’s Most InNOVAtive Prize.",
          "images": [
            "/images/SyneSound 1.png",
            "/images/SyneSound 2.png"
          ]
        },
        {
          "title": "Visual-to-musical mapping",
          "content": "Hue maps to modes; solid colors represent notes and blended colors represent chords. Position controls time and register, size sets duration, opacity controls dynamics, and rotation changes chord inversion. Motion encodes tempo, accent, and swing.\n\nReact, Konva, and Tone.js support the canvas and local interaction. Agentuity coordinates the generation workflow; OpenAI prepares prompts and MusicGen on Replicate generates audio.",
          "images": [
            "/images/SyneSound 3.png",
            "/images/SyneSound 4.png"
          ]
        },
        {
          "title": "Design intent & open questions",
          "content": "Explicit visual mappings let collaborators discuss musical structure without relying entirely on notation or listening. The proposed next study pairs Deaf and hard-of-hearing composers with hearing audiences to examine whether the intended emotion is preserved in the generated music. Accessibility and emotional correspondence remain questions for evaluation.",
          "images": [
            "/images/SyneSound 5.png",
            "/images/SyneSound 6.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 8,
      "category": "xr",
      "tags": [
        "WebXR",
        "Browser AR",
        "Three.js",
        "Procedural Generation",
        "Computer Vision",
        "Serious Play"
      ],
      "featured": true,
      "title": "DomestiCade",
      "description": "Turning photographs of everyday rooms into playable AR obstacle courses.",
      "year": "2026",
      "members": "Xinyi Li, Yongyi Xiong, Yunxiang Ma",
      "sections": [
        {
          "title": "A room as a game level",
          "content": "DomestiCade is a browser-based AR platform game. A photograph of the surrounding room supplies objects and surfaces that the system translates into platforms, obstacles, collectibles, and goals. Players choose the scene; computational rules interpret its possibilities for play.",
          "images": []
        },
        {
          "title": "Interpretation & implementation",
          "content": "Computer vision provides semantic information for procedural level rules: a table edge can become a ledge, while a small object can become an obstacle. WebXR registers the resulting level in the physical room. The prototype uses Three.js, Cannon.js physics, serverless vision inference, and local 3D assets.",
          "images": [
            "/images/domesticade-pipeline.png"
          ]
        },
        {
          "title": "What the prototype explores",
          "content": "The project examines how machine interpretation can contribute to a spatial game while keeping the player’s choice of place visible in the result. Its procedural rules balance recognizable room structure with navigable, playable geometry.",
          "images": [
            "/images/domesticade-scene.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 9,
      "category": "compdesign",
      "tags": [
        "Vision-Language Models",
        "Spatial Reasoning",
        "QLoRA",
        "Qwen2.5-VL",
        "InstaOrder",
        "COCO"
      ],
      "featured": true,
      "title": "Spatial Depth Reasoning in VLMs",
      "description": "Fine-tuning a 7B vision-language model to make more consistent front–back judgments in images.",
      "year": "2026",
      "members": "Jingwu Wang, Yongyi Xiong, Yunxiang Ma",
      "sections": [
        {
          "title": "Task & dataset",
          "content": "Given an image and two marked objects, the model predicts whether Object A is in front of or behind Object B. We use InstaOrder annotations with COCO images and construct direction-balanced, image-disjoint splits. Each pair appears in both directions with reversed labels.\n\nThe dataset contains 26,046 training, 2,746 validation, and 2,952 test samples, with equal proportions of front and behind labels.",
          "images": [
            "/images/VLMFT-img.png",
            "/images/VLMFT-sourcedata.png"
          ]
        },
        {
          "title": "Controlled experiments",
          "content": "We compared zero-shot and QLoRA-tuned Qwen2.5-VL models across eight experimental settings. The inputs combine marked images with bounding-box coordinates and a binary 2D-overlap flag. QLoRA uses 4-bit quantization and low-rank adapters to fine-tune the 7B model.\n\nI worked on data curation, experimental design, evaluation, and a reproducible training pipeline. Diagnostics examined label bias, overlap, IoU, pairwise consistency, and accuracy.",
          "images": [
            "/images/VLMFT-method.png"
          ]
        },
        {
          "title": "Results & limitations",
          "content": "The strongest configuration achieved 92.65% accuracy, 96.82% consistency, and 91.06% pair accuracy, compared with 70.16% accuracy for the 72B zero-shot reference. Directional bias decreased: front and behind accuracy reached 93.56% and 91.73%, respectively.\n\nOverlap remained difficult. Accuracy was 96.08% for non-overlapping boxes and 75.80% for overlapping boxes. These results establish improvement on this controlled task; they do not establish general spatial reasoning. Broader benchmark transfer and richer visibility cues remain future work.",
          "images": [
            "/images/VLMFT-result1.png",
            "/images/VLMFT-result2.png",
            "/images/VLMFT-result3.png"
          ]
        }
      ],
      "links": [
        {
          "label": "Code · GitHub",
          "url": "https://github.com/yongyi2002/10623_project"
        }
      ]
    }
  ],
  "zh": [
    {
      "id": 1,
      "category": "products",
      "tags": [
        "CHI 2026",
        "UIST 2026 Demo",
        "Generative AI",
        "Spatial computing",
        "XR interaction"
      ],
      "featured": true,
      "title": "Roomify",
      "description": "将真实房间转化为主题化虚拟环境，同时保留空间布局与实体物件的使用方式。",
      "year": "2025—2026",
      "members": "Xueyang Wang, Qinxuan Cen, Weitao Bi, Yunxiang Ma",
      "sections": [
        {
          "title": "以真实空间为基础的生成",
          "content": "Roomify 基于真实房间生成主题化 VR 环境，在改变视觉形态的同时保留家具布局与功能关系。研究关注生成式环境如何增强沉浸感，同时维持用户对物理空间的感知。",
          "images": [
            "/images/roomify-head.png"
          ]
        },
        {
          "title": "系统与交互",
          "content": "系统由场景理解、风格推理、内容生成与空间配准四个阶段组成。视频 SLAM 与语义解析构建三维框架，文本或图像参考引导物体、材质及环境生成。\n\n我参与系统与 XR 交互模块设计，整合了 SLAM3R、SpatialLM、图像生成和三维生成的智能体工作流。创作者可以在 MR 中查看空间框架、编辑物体、局部重新生成，并在 VR 中预览结果。",
          "images": [
            "/images/roomify-pipeline.png",
            "/images/roomify-mr.png"
          ]
        },
        {
          "title": "评估",
          "content": "研究邀请 18 名 VR 用户和 8 名设计专业人士参与评估。报告的沉浸感相较透视基线提高 63%，相较全虚拟基线提高 26%。设计参与者对空间感知与创作支持的评分分别为 5.95/7 和 6.08/7。\n\n研究获 CHI 2026 录用，现场演示获 UIST 2026 Demos 录用。",
          "images": [
            "/images/roomify-usertest1.png",
            "/images/roomify-analysis1.png",
            "/images/roomify-usertest2.png",
            "/images/roomify-analysis2.png"
          ]
        }
      ],
      "links": [
        {
          "label": "Paper · arXiv",
          "url": "https://doi.org/10.48550/arXiv.2603.04917"
        },
        {
          "label": "Code · GitHub",
          "url": "https://github.com/NiceStone-Hill/Virtual_Merge_Generation"
        }
      ]
    },
    {
      "id": 2,
      "category": "compdesign",
      "tags": [
        "Data Mining",
        "NLP",
        "Boardgame Design"
      ],
      "featured": true,
      "title": "Cognitive Tracks",
      "description": "将校园行动轨迹与访客叙述转化为桌游及 AR 导览。",
      "year": "2023",
      "members": "独立项目",
      "sections": [
        {
          "title": "从行动轨迹理解校园",
          "content": "这项独立研究以清华校园为场地，结合 GPS 轨迹与社交媒体文本，分析访客的停留位置、路径选择及地点印象，并将结果转化为六边形桌游和移动 AR 导览。",
          "images": [
            "/images/boardgame-flowchart.png"
          ]
        },
        {
          "title": "调研与分析",
          "content": "在黄蔚欣教授指导下，我于 2023 年 8—9 月采集了 50 位参与者的游览轨迹。使用 Python、Haversine 距离与 60 秒平均速度清洗数据，以低于 0.674 m/s 的低速样本筛选停留候选点，经密度过滤与 K-means 聚类提取 11 处代表性地点。\n\n约 200 篇小红书帖子提供词频与情感信息。两类数据共同构成游览密度图、数字情感图与物理停留点地图。",
          "images": [
            "/images/boardgame-experiment.png",
            "/images/boardgame-clustering.png"
          ]
        },
        {
          "title": "从分析到游戏",
          "content": "桌游棋盘与组件将路径模式转化为玩家可以选择的行动，AR 图层补充与地点相关的信息。\n\n低速有时来自拥堵，而非吸引力，因此不能仅凭速度解释偏好。对历史、建筑和自然等不同兴趣群体进行比较，有助于区分游览顺序与停留模式。",
          "images": [
            "/images/boardgame-design.png",
            "/images/boardgame-result.png",
            "/images/boardgame-effect.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 3,
      "category": "compdesign",
      "tags": [
        "EEG",
        "Machine Learning",
        "UX Design",
        "Parametric Architecture"
      ],
      "featured": true,
      "title": "EEG 驱动的展览设计",
      "description": "研究视听刺激下的情绪反应，并据此设计模块化展览空间。",
      "year": "2024—2025",
      "members": "Yunxiang Ma, Yutong Wu",
      "sections": [
        {
          "title": "从感知研究到空间设计",
          "content": "项目将基于 EEG 的情绪识别与模块化展览设计结合，研究视觉和听觉刺激对情绪反应的影响，并据此提出个性化参观路径。作品入选清华大学建筑学院 2025 年本科毕业展。",
          "images": [
            "/images/imagine-experiment.png"
          ]
        },
        {
          "title": "实验研究",
          "content": "三组受控实验各邀请 8 位参与者，对比视觉、听觉及视听融合条件。采用 16 通道 OpenBCI，以 256 Hz 采样，并辅以 GSR 与 EMG。每次实验持续 15—20 分钟，单个刺激时段为 15 秒。\n\n预处理包括带通与 50 Hz 陷波、ICA 伪迹剔除和基线校正。提取功率谱及时间域特征，以效价—唤醒度标注比较 SVM、KNN 与随机森林，随机森林在测试模型中表现最佳。",
          "images": [
            "/images/imagine-equipment.png",
            "/images/imagine-data.png",
            "/images/imagine-variables.png",
            "/images/imagine-dataframe.png",
            "/images/apparatus.png",
            "/images/imagine-baseline.png",
            "/images/imagine-ml.png"
          ]
        },
        {
          "title": "模块化空间方案",
          "content": "方案以 3 × 3 × 3 m 空间原型转译实验结果，通过形态文法定义 16 种在公共性、身体姿态及流线方面不同的变体。Grasshopper 脚本组织模块与水平、垂直交通单元的拼装。\n\n方案提出依据情绪识别推荐参观路径。个性化路径推荐仍属于有待进一步评估的设计方案。",
          "images": [
            "/images/imagine-experience.png",
            "/images/imagine-prototype.png",
            "/images/imagine-shapegrammar.png",
            "/images/imagine-grasshopper.png",
            "/images/imagine-combination.png",
            "/images/imagine-details.png",
            "/images/imagine-final.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 4,
      "category": "dataviz",
      "tags": [
        "Urban Analysis",
        "Computer Vision",
        "ML",
        "Clustering"
      ],
      "featured": true,
      "title": "香港的城市色彩",
      "description": "沿香港中环至半山扶梯，识别并绘制街道色彩模式。",
      "year": "2024",
      "members": "Yunxiang Ma, Jing Zhuang, Tino Zhu",
      "sections": [
        {
          "title": "街道尺度的研究",
          "content": "研究以中环至半山扶梯为线索，观察商业、住宅与历史空间相遇的街道，分析沿线色彩模式与城市功能变化的关系。",
          "images": []
        },
        {
          "title": "计算机视觉与聚类",
          "content": "沿线采集街景图像，用 DeepLabV3 识别建筑、树木、标识、铺地及天空等要素。提取色彩特征，将 RGB 转换为 HSV，经 PCA 降维后使用 K-means 对色彩模式聚类。",
          "images": [
            "/images/hongkong-data.png",
            "/images/hongkong-extraction.png",
            "/images/hongkong-clustering.png"
          ]
        },
        {
          "title": "色彩与城市功能",
          "content": "在所采集的街段中，中环办公与商业片区较多呈现冷色、低饱和度的组合；半山住宅及混合功能区则更偏暖色、较高饱和度。将聚类结果映射回街道，可以对照视觉特征与土地使用。",
          "images": [
            "/images/hongkong-result.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 5,
      "category": "products",
      "tags": [
        "UX Design",
        "Mobile App",
        "Product Design"
      ],
      "featured": false,
      "title": "Pet’s Tribe",
      "description": "整合宠物社区、领养协助与日常记录的移动产品概念。",
      "year": "2023",
      "members": "Yunxiang Ma, Yuying Zhang, Xinning He, Rhone Ryan Huang Ern",
      "sections": [
        {
          "title": "产品问题",
          "content": "宠物主人与动物组织常需分别使用社区、领养及日常照护服务。Pet’s Tribe 研究如何将这些活动整合为一致的移动体验，竞品分析形成协助、社区与个人日记三个方向。",
          "images": []
        },
        {
          "title": "信息架构",
          "content": "协助模块组织领养流程与照护信息，社区模块承载帖子与线下活动，日记模块用于记录日常并设置可见范围。故事板将这些功能与不同用户的需求和习惯联系起来。",
          "images": [
            "/images/pet-structure.png",
            "/images/pet-storyboard.png"
          ]
        },
        {
          "title": "原型与后续评估",
          "content": "设计从草图发展为 Figma 高保真原型，涵盖登录、用户分流、社区、协助与日记。后续可用性评估计划关注任务完成率、错误恢复及 SUS 评分；这些是拟采用的指标，并非已完成的测试结果。",
          "images": [
            "/images/pet-prototype1.png",
            "/images/pet-prototype2.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 6,
      "category": "xr",
      "tags": [
        "UX Design",
        "VR",
        "3D Scanning",
        "Unity"
      ],
      "featured": false,
      "title": "Feeling Home in Memory",
      "description": "通过访谈、三维扫描与 VR，重建一对夫妇关于家的记忆。",
      "year": "2024",
      "members": "独立项目",
      "sections": [
        {
          "title": "倾听关于家的记忆",
          "content": "2024 年 7 月，我在重庆采访一对夫妇，了解他们对旧居与现居的记忆。他们讲述的日常习惯、共同使用的空间及宠物，构成了这项居住记忆 VR 项目的基础。",
          "images": []
        },
        {
          "title": "访谈、绘图与扫描",
          "content": "受访者绘制平面图，并记录一天及一年中的情绪变化。两个场景成为重建重点：旧居黄昏时的家庭晚餐，以及现居客厅里的夜间阅读。\n\n通过移动三维扫描采集房间与家具，在 Unity 中重建场景，并依据访谈图纸选择物件、光线与环境氛围。",
          "images": [
            "/images/vr-sketch.png",
            "/images/vr-workflow.png"
          ]
        },
        {
          "title": "VR 体验",
          "content": "最终场景结合扫描物件、生成式天空盒与鸟鸣、交通、宠物等实录声音。体验者可以佩戴头显在重建的房间中行走。项目将个人叙述作为设计材料，关注让人产生归属感的日常细节。",
          "images": [
            "/images/vr-experience.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 7,
      "category": "products",
      "tags": [
        "NOVA Most InNOVAtive Prize",
        "AI",
        "Music Generation",
        "Accessibility",
        "Synesthesia",
        "Web App"
      ],
      "featured": true,
      "title": "SyneSound",
      "description": "将颜色、形状与运动映射为音乐结构的可视化创作界面。",
      "year": "2025",
      "members": "Yongyi Xiong, Yunxiang Ma",
      "sections": [
        {
          "title": "以视觉选择创作音乐",
          "content": "SyneSound 由 Yongyi Xiong 与 Yunxiang Ma 合作开发，面向缺少音乐训练的人群及聋人、重听创作者，探索通过编排视觉元素表达音乐想法。项目获得 CMU NOVA Most InNOVAtive Prize。",
          "images": [
            "/images/SyneSound 1.png",
            "/images/SyneSound 2.png"
          ]
        },
        {
          "title": "视觉与音乐的映射",
          "content": "色相对应调式，纯色代表单音，混色代表和弦。位置控制时间与音区，尺寸设置时值，透明度控制力度，旋转改变和弦转位，运动表达速度、重音与摇摆节奏。\n\nReact、Konva 与 Tone.js 支持画布和本地交互；Agentuity 协调生成流程，OpenAI 处理提示词，Replicate 上的 MusicGen 生成音频。",
          "images": [
            "/images/SyneSound 3.png",
            "/images/SyneSound 4.png"
          ]
        },
        {
          "title": "设计意图与待研究问题",
          "content": "明确的视觉映射帮助协作者讨论音乐结构，减少对乐谱及聆听的依赖。后续拟邀请聋人、重听创作者与健听听众共同评估，检验生成音乐是否保留创作时的情绪意图。无障碍效果与情绪对应关系仍需进一步验证。",
          "images": [
            "/images/SyneSound 5.png",
            "/images/SyneSound 6.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 8,
      "category": "xr",
      "tags": [
        "WebXR",
        "Browser AR",
        "Three.js",
        "Procedural Generation",
        "Computer Vision",
        "Serious Play"
      ],
      "featured": true,
      "title": "DomestiCade",
      "description": "将日常房间的照片转化为可游玩的 AR 障碍关卡。",
      "year": "2026",
      "members": "Xinyi Li, Yongyi Xiong, Yunxiang Ma",
      "sections": [
        {
          "title": "将房间理解为游戏关卡",
          "content": "DomestiCade 是一款基于浏览器的 AR 平台游戏。用户拍摄周围房间，系统将其中的物体与表面转译为平台、障碍、收集物及目标。玩家选择场景，计算规则解析可用于游戏的空间结构。",
          "images": []
        },
        {
          "title": "场景转译与实现",
          "content": "计算机视觉为程序化关卡规则提供语义信息，例如将桌面边缘转为平台、小型物体转为障碍。WebXR 将生成关卡配准到真实房间。原型使用 Three.js、Cannon.js 物理引擎、无服务器视觉推理与本地三维素材。",
          "images": [
            "/images/domesticade-pipeline.png"
          ]
        },
        {
          "title": "原型探索的问题",
          "content": "项目研究机器解释如何参与空间游戏设计，并在结果中保留玩家所选择场所的特征。程序化规则在可识别的房间结构与便于行动、游玩的几何关系之间进行协调。",
          "images": [
            "/images/domesticade-scene.png"
          ]
        }
      ],
      "links": []
    },
    {
      "id": 9,
      "category": "compdesign",
      "tags": [
        "Vision-Language Models",
        "Spatial Reasoning",
        "QLoRA",
        "Qwen2.5-VL",
        "InstaOrder",
        "COCO"
      ],
      "featured": true,
      "title": "视觉语言模型的空间深度推理",
      "description": "微调 7B 视觉语言模型，提高图像中前后关系判断的准确性与一致性。",
      "year": "2026",
      "members": "Jingwu Wang, Yongyi Xiong, Yunxiang Ma",
      "sections": [
        {
          "title": "任务与数据集",
          "content": "给定图像及两个标记物体，模型判断 A 在 B 的前方还是后方。研究将 InstaOrder 标注与 COCO 图像结合，构建方向平衡、图像不重叠的数据划分。同一物体对以相反方向出现，并翻转标签。\n\n数据包含 26,046 个训练样本、2,746 个验证样本与 2,952 个测试样本，前后标签各占 50%。",
          "images": [
            "/images/VLMFT-img.png",
            "/images/VLMFT-sourcedata.png"
          ]
        },
        {
          "title": "受控实验",
          "content": "研究设置八组实验，对比 Qwen2.5-VL 的零样本与 QLoRA 微调表现。输入结合标记图像、边界框坐标及二维重叠标记，通过 4-bit 量化与低秩适配器微调 7B 模型。\n\n我参与数据整理、实验设计、评估及可复现训练流程的构建，分析标签偏差、遮挡、IoU、成对一致性与准确率。",
          "images": [
            "/images/VLMFT-method.png"
          ]
        },
        {
          "title": "结果与局限",
          "content": "最佳配置达到 92.65% 准确率、96.82% 一致性及 91.06% 成对准确率，72B 零样本参照的准确率为 70.16%。方向偏差得到改善，前方与后方标签准确率分别为 93.56% 和 91.73%。\n\n遮挡仍是难点：边界框不重叠时准确率为 96.08%，重叠时降至 75.80%。结果说明模型在该受控任务上有所改善，不能据此推断其具备通用空间推理能力。跨基准迁移与更丰富的可见性线索仍有待研究。",
          "images": [
            "/images/VLMFT-result1.png",
            "/images/VLMFT-result2.png",
            "/images/VLMFT-result3.png"
          ]
        }
      ],
      "links": [
        {
          "label": "Code · GitHub",
          "url": "https://github.com/yongyi2002/10623_project"
        }
      ]
    }
  ]
};
