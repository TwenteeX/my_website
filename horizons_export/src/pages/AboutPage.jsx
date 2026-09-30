import React from 'react';
import { Helmet } from 'react-helmet';
import About from '@/components/About';
import JourneyMap from '@/components/JourneyMap';

export default function AboutPage({ language }) {
  const zh = language === 'zh';
  return <main id="main" tabIndex={-1} className="collection-page">
    <Helmet><title>{zh ? '关于' : 'About'} — Yunxiang Ma</title><meta name="description" content={zh ? '从建筑到空间智能：马云翔的背景、研究方向、联系方式与学习旅程。' : 'From architecture to spatial intelligence: background, research interests, contact, and journey of Yunxiang Ma.'} /></Helmet>
    <About language={language} />
    <JourneyMap language={language} />
  </main>;
}
