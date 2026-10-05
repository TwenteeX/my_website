import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import ResearchVenn from './ResearchVenn';
import ContactLinks from './ContactLinks';

export default function About({ language }) {
  const zh = language === 'zh';
  return <section id="about" className="section shell">
    <header className="section-heading"><div><p className="eyebrow">{zh ? '关于我' : 'A little background'}</p><h1>{zh ? '从建筑到空间智能' : 'From architecture to spatial intelligence'}</h1></div></header>
    <div className="about-grid">
      <div className="about-copy">
        <p>{zh ? '我在清华大学建筑学院接受本科训练，目前在卡耐基梅隆大学攻读计算设计硕士，方向为应用人工智能与机器学习。建筑训练让我关注身体、物体与环境的关系；现在，我将这些问题带入人机交互与人工智能研究。' : 'I trained in architecture at Tsinghua University and am pursuing an M.S. in Computational Design at Carnegie Mellon, on the Applied AI & Machine Learning track. Architecture taught me to attend to relationships between bodies, objects, and environments. I now bring those questions to human–computer interaction and AI.'}</p>
        <p>{zh ? '我在清华的研究助理工作中参与开发 Roomify，在字节跳动 Seed 的实习中负责视觉语言模型的 3D 编程数据策略。我的实践涵盖空间推理、XR 交互、原型开发与用户研究。' : 'At Tsinghua, I helped develop Roomify as a research assistant. At ByteDance Seed, I worked on data strategy for 3D coding in vision-language models. My practice spans spatial reasoning, XR interaction, prototyping, and user research.'}</p>
        <ContactLinks language={language} />
        <div className="about-links">
          <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">{zh ? '查看简历' : 'View résumé'}<ArrowUpRight size={15} /></a>
          <a className="text-link" href="/resume.pdf" download="Yunxiang_Ma_Resume.pdf">{zh ? '下载 PDF' : 'Download PDF'}<Download size={14} /></a>
        </div>
      </div>
      <figure className="about-portrait">
        <img src="/images/yunxiang-tsinghua-graduation.webp" alt={zh ? '马云翔在清华大学毕业时的留影' : 'Yunxiang Ma at his Tsinghua University graduation'} width={1400} height={1400} />
        <figcaption>{zh ? '清华大学毕业留影' : 'Graduation at Tsinghua University'}</figcaption>
      </figure>
    </div>
    <div className="about-research">
      <div className="about-research-copy">
        <p className="eyebrow">{zh ? '研究兴趣' : 'Research interests'}</p>
        <h2>{zh ? '从关系中理解空间' : 'Understanding space through relationships'}</h2>
        <p>{zh ? '我关注人如何通过身体与环境交互，以及人工智能如何理解这些关系、支持新的空间体验。' : 'I explore how people interact with their surroundings through the body, and how AI can understand those relationships to support new spatial experiences.'}</p>
      </div>
      <ResearchVenn language={language} />
    </div>
  </section>;
}
