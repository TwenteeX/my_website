import React from 'react';
import { Helmet } from 'react-helmet';
import Projects from '@/components/Projects';

export default function WorkPage({ language }) {
  const zh = language === 'zh';
  return <main id="main" tabIndex={-1} className="collection-page">
    <Helmet><title>{zh ? '作品' : 'Work'} — Yunxiang Ma</title><meta name="description" content={zh ? '探索马云翔在空间智能、人机交互、计算设计与产品方面的项目。' : 'Explore projects in spatial intelligence, human–computer interaction, computational design, and products.'} /></Helmet>
    <Projects language={language} />
  </main>;
}
