import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';

export default function HomePage({ language }) {
  const zh = language === 'zh';
  return <>
    <Helmet>
      <title>Yunxiang Ma — Spatial Intelligence & Computational Design</title>
      <meta name="description" content={zh ? '马云翔的研究与设计作品：具身交互、多模态智能与生成式空间体验。' : 'Research and design by Yunxiang Ma: embodied interaction, multimodal intelligence, and generative spatial experiences.'} />
      <meta property="og:title" content="Yunxiang Ma — Research & Design" />
      <meta property="og:type" content="website" />
    </Helmet>
    <main id="main" tabIndex={-1} className="home-page"><Hero language={language} /></main>
  </>;
}
