import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero({ language }) {
  const zh = language === 'zh';
  return (
    <section id="hero" className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">{zh ? '计算设计 · 人机交互' : 'Computational design · Human–computer interaction'}</p>
        <h1 id="hero-title">{zh ? '你好，我是马云翔。' : 'Hi, I’m Yunxiang Ma.'}</h1>
        <p className="hero-description"><span>{zh ? '从空间出发，' : 'Understanding space.'}</span>{' '}<span>{zh ? '理解人与智能。' : 'Designing with it.'}</span></p>
        <Link className="hero-work-link" to="/work"><span>{zh ? '查看我的作品' : 'See my works'}</span><ArrowRight size={19} strokeWidth={1.2} /></Link>
      </div>
      <div className="hero-footnote"><span>{zh ? '建筑 · 计算 · 交互' : 'Architecture · Computation · Interaction'}</span><span>{zh ? '卡耐基梅隆大学 · 计算设计' : 'Computational Design · Carnegie Mellon University'}</span></div>
    </section>
  );
}
