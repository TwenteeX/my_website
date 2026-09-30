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
      <ResearchVenn language={language} />
    </div>
  </section>;
}
