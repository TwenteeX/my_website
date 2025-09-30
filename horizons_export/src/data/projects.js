export const projectsData = {
  en: [
    {
      id: 1,
      title: 'Roomify',
      category: 'ai',
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
      title: 'Urban Data Visualization',
      category: 'visualization',
      description: 'Real-time urban data analysis and visualization platform with multi-dimensional exploration',
      tags: ['D3.js', 'Data Analysis', 'Interaction Design'],
      image: 'Urban data visualization dashboard with charts and maps',
      featured: true,
      details: {
        about: {
          title: 'About The Project',
          content: 'This platform was developed for urban planners and researchers to explore complex city data. It integrates various datasets like traffic, pollution, and demographics, presenting them in an interactive and easy-to-understand format. The core technology is D3.js, allowing for custom and high-performance visualizations.'
        },
        process: {
          title: 'Design & Development Process',
          content: 'We collaborated closely with urban planners to define key metrics and visualization types. The design phase focused on creating a flexible dashboard that could handle diverse data sources. Development involved building a robust data pipeline and crafting custom interactive charts and maps using D3.js and React.',
          image: 'Wireframe of the interactive map interface'
        },
        outcome: {
          title: 'Outcome & Results',
          content: 'The platform is now used by several city planning departments, enabling data-driven decision-making. It has been praised for its intuitive design and powerful analytical capabilities, and was featured in a major design publication.'
        }
      }
    },
    {
      id: 3,
      title: 'Computational Design Research',
      category: 'research',
      description: 'Computational design methodology research published in top-tier conferences',
      tags: ['Academic Research', 'Algorithm Design', 'Publication'],
      image: 'Academic research visualization with computational design patterns',
      featured: false,
      details: {
        about: {
          title: 'About The Research',
          content: 'This academic research explores new methodologies in computational design, focusing on generative algorithms for architectural and product design. The work proposes a novel framework that combines machine learning with traditional design principles to create unique and optimized forms.'
        },
        process: {
          title: 'Research Process',
          content: 'The research involved a literature review, development of a new algorithmic framework, and a series of experiments to validate the approach. The results were documented in a research paper, which included visualizations of the generated designs and a comparative analysis with existing methods.',
          image: 'Generative art created by the algorithm'
        },
        outcome: {
          title: 'Outcome & Results',
          content: 'The research paper was accepted and published at the prestigious ACM CHI conference, where it received a Best Paper Honorable Mention. The proposed framework has since been adopted by other researchers in the field.'
        }
      }
    },
    {
      id: 4,
      title: 'Interactive Music Installation',
      category: 'creative',
      description: 'Immersive interactive installation art combining AI and music',
      tags: ['Installation Art', 'Music Tech', 'Interaction Design'],
      image: 'Interactive music installation with AI-powered sound visualization',
      featured: true,
      details: {
        about: {
          title: 'About The Project',
          content: 'This project is an immersive art installation where participants\' movements are translated into music and visuals in real-time. An AI model analyzes motion data from sensors and generates corresponding audio-visual patterns, creating a unique and collaborative artistic experience.'
        },
        process: {
          title: 'Design & Development Process',
          content: 'The concept was developed through a series of creative workshops. We used Processing and Ableton Live, connected via custom software, to build the interactive system. The AI component, a custom-trained neural network, was the core of the generative engine. Physical installation involved setting up projectors, speakers, and motion sensors in a gallery space.',
          image: 'Behind the scenes shot of the installation setup'
        },
        outcome: {
          title: 'Outcome & Results',
          content: 'The installation was exhibited at a major digital arts festival and received overwhelmingly positive feedback from visitors. It was praised for its innovative use of technology to foster creativity and human connection.'
        }
      }
    },
    {
      id: 5,
      title: 'User Behavior Analytics',
      category: 'ai',
      description: 'AI-powered user behavior prediction and analysis platform',
      tags: ['User Research', 'Behavior Analysis', 'AI Algorithms'],
      image: 'User behavior analytics dashboard with AI insights',
      featured: false,
      details: {
        about: {
          title: 'About The Project',
          content: 'This platform provides businesses with deep insights into their users\' behavior. It uses machine learning to identify patterns, predict churn, and segment users based on their actions. The goal is to empower product teams to make data-informed decisions.'
        },
        process: {
          title: 'Design & Development Process',
          content: 'The project involved building a scalable data ingestion and processing pipeline. We developed several predictive models for churn and user lifetime value. The dashboard was designed to present complex data in a clear and actionable way, with a focus on storytelling through data.',
          image: 'Diagram of the user segmentation model'
        },
        outcome: {
          title: 'Outcome & Results',
          content: 'The platform helped a pilot group of SaaS companies reduce their churn rate by an average of 10% within the first three months. It provided valuable insights that led to significant product improvements.'
        }
      }
    },
    {
      id: 6,
      title: 'Scientific Data Visualization',
      category: 'visualization',
      description: 'Innovative visualization solutions for complex scientific data',
      tags: ['Scientific Viz', 'Data Design', 'Research Tools'],
      image: 'Scientific data visualization with complex molecular structures',
      featured: false,
      details: {
        about: {
          title: 'About The Project',
          content: 'This project focused on creating novel visualization tools for molecular biologists. The goal was to represent complex protein structures and interactions in a way that was both accurate and intuitive, facilitating new scientific discoveries.'
        },
        process: {
          title: 'Design & Development Process',
          content: 'We worked in close collaboration with scientists to understand their needs and the challenges of existing tools. Using WebGL and Three.js, we developed a high-performance 3D viewer that could render large molecular datasets in the browser. The design process was iterative, with constant feedback from the scientific community.',
          image: '3D model of a protein structure rendered in the application'
        },
        outcome: {
          title: 'Outcome & Results',
          content: 'The tool is now used by several research labs and has contributed to new findings in protein research. It was presented at a scientific conference and is available as an open-source project.'
        }
      }
    }
  ],
  zh: [
    {
      id: 1,
      title: 'Roomify',
      category: 'ai',
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
      title: '城市数据可视化平台',
      category: 'visualization',
      description: '实时城市数据分析与可视化，支持多维度数据探索',
      tags: ['D3.js', '数据分析', '交互设计'],
      image: 'Urban data visualization dashboard with charts and maps',
      featured: true,
      details: {
        about: {
          title: '关于项目',
          content: '该平台是为城市规划者和研究人员开发的，用于探索复杂的城市数据。它集成了交通、污染和人口统计等各种数据集，并以交互式且易于理解的格式呈现。核心技术是D3.js，可实现自定义和高性能的可视化。'
        },
        process: {
          title: '设计与开发流程',
          content: '我们与城市规划者密切合作，定义关键指标和可视化类型。设计阶段的重点是创建一个可以处理不同数据源的灵活仪表板。开发涉及构建强大的数据管道，并使用D3.js和React制作自定义的交互式图表和地图。',
          image: 'Wireframe of the interactive map interface'
        },
        outcome: {
          title: '成果与结果',
          content: '该平台现已被多个城市规划部门使用，实现了数据驱动的决策。它因其直观的设计和强大的分析能力而受到赞誉，并被一家主要的设计出版物报道。'
        }
      }
    },
    {
      id: 3,
      title: '计算设计研究',
      category: 'research',
      description: '发表于顶级会议的计算设计方法论研究',
      tags: ['学术研究', '算法设计', '论文发表'],
      image: 'Academic research visualization with computational design patterns',
      featured: false,
      details: {
        about: {
          title: '关于研究',
          content: '这项学术研究探索了计算设计的新方法，专注于建筑和产品设计的生成算法。该工作提出了一个新颖的框架，将机器学习与传统设计原则相结合，以创造独特且优化的形式。'
        },
        process: {
          title: '研究流程',
          content: '研究涉及文献综述、新算法框架的开发以及一系列验证该方法的实验。结果记录在一篇研究论文中，其中包括生成设计的可视化以及与现有方法的比较分析。',
          image: 'Generative art created by the algorithm'
        },
        outcome: {
          title: '成果与结果',
          content: '该研究论文被著名的ACM CHI会议接受并发表，并获得了最佳论文荣誉提名。所提出的框架此后被该领域的其他研究人员采用。'
        }
      }
    },
    {
      id: 4,
      title: '交互音乐装置',
      category: 'creative',
      description: '结合AI与音乐的沉浸式交互装置艺术作品',
      tags: ['装置艺术', '音乐技术', '交互设计'],
      image: 'Interactive music installation with AI-powered sound visualization',
      featured: true,
      details: {
        about: {
          title: '关于项目',
          content: '这个项目是一个沉浸式艺术装置，参与者的动作被实时翻译成音乐和视觉效果。一个AI模型分析来自传感器的运动数据，并生成相应的视听模式，创造出独特而协作的艺术体验。'
        },
        process: {
          title: '设计与开发流程',
          content: '概念是通过一系列创意工作坊发展起来的。我们使用Processing和Ableton Live，通过自定义软件连接，来构建交互系统。AI组件是一个定制训练的神经网络，是生成引擎的核心。物理安装涉及在画廊空间设置投影仪、扬声器和运动传感器。',
          image: 'Behind the scenes shot of the installation setup'
        },
        outcome: {
          title: '成果与结果',
          content: '该装置在一个大型数字艺术节上展出，并收到了参观者压倒性的积极反馈。它因其创新地使用技术来促进创造力和人际联系而受到赞扬。'
        }
      }
    },
    {
      id: 5,
      title: '用户行为分析工具',
      category: 'ai',
      description: '基于AI的用户行为预测与分析平台',
      tags: ['用户研究', '行为分析', 'AI算法'],
      image: 'User behavior analytics dashboard with AI insights',
      featured: false,
      details: {
        about: {
          title: '关于项目',
          content: '该平台为企业提供对其用户行为的深入洞察。它使用机器学习来识别模式、预测流失，并根据用户的行为对用户进行细分。目标是使产品团队能够做出数据驱动的决策。'
        },
        process: {
          title: '设计与开发流程',
          content: '该项目涉及构建一个可扩展的数据提取和处理管道。我们为流失和用户生命周期价值开发了几个预测模型。仪表板旨在以清晰和可操作的方式呈现复杂数据，重点是通过数据讲故事。',
          image: 'Diagram of the user segmentation model'
        },
        outcome: {
          title: '成果与结果',
          content: '该平台帮助一组试点SaaS公司在头三个月内平均将流失率降低了10%。它提供了宝贵的见解，导致了重大的产品改进。'
        }
      }
    },
    {
      id: 6,
      title: '科学数据可视化',
      category: 'visualization',
      description: '复杂科学数据的创新可视化解决方案',
      tags: ['科学可视化', '数据设计', '研究工具'],
      image: 'Scientific data visualization with complex molecular structures',
      featured: false,
      details: {
        about: {
          title: '关于项目',
          content: '该项目专注于为分子生物学家创建新颖的可视化工具。目标是以既准确又直观的方式表示复杂的蛋白质结构和相互作用，从而促进新的科学发现。'
        },
        process: {
          title: '设计与开发流程',
          content: '我们与科学家密切合作，了解他们的需求和现有工具的挑战。使用WebGL和Three.js，我们开发了一个高性能的3D查看器，可以在浏览器中渲染大型分子数据集。设计过程是迭代的，不断收到科学界的反馈。',
          image: '3D model of a protein structure rendered in the application'
        },
        outcome: {
          title: '成果与结果',
          content: '该工具现已被多个研究实验室使用，并为蛋白质研究的新发现做出了贡献。它在一个科学会议上作了介绍，并作为一个开源项目提供。'
        }
      }
    }
  ]
};