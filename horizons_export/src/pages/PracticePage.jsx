import React from 'react';
import { Helmet } from 'react-helmet';
import Interest from '@/components/Interest';

export default function PracticePage({ language }) {
  const zh = language === 'zh';
  return <main id="main" tabIndex={-1} className="collection-page">
    <Helmet><title>{zh ? '实践' : 'Practice'} — Yunxiang Ma</title><meta name="description" content={zh ? '影像、音乐与展览：研究之外的创作实践。' : 'Film, music, and exhibitions: other ways of observing, composing, and making.'} /></Helmet>
    <Interest language={language} />
  </main>;
}
