import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clapperboard } from 'lucide-react';

export default function Interest({ language }) {
  const zh = language === 'zh';
  const items = [
    { id: 1, title: zh ? '影像与叙事' : 'Film & storytelling', text: zh ? '纪录、剪辑与学生媒体制作。' : 'Documentary work, editing, and student media.', image: null },
    { id: 2, title: zh ? '音乐创作' : 'Music & performance', text: zh ? '原创歌曲、乐队合作与现场演出。' : 'Original songs, band collaborations, and live performance.', image: '/images/music-head.png' },
    { id: 3, title: zh ? '展览实践' : 'Exhibitions', text: zh ? '通过展品编排与空间设计组织观看。' : 'Arranging objects and spaces for an audience.', image: '/images/exhibition-head.png' },
  ];
  return <section id="interest" className="section shell">
    <header className="section-heading"><div><p className="eyebrow">{zh ? '创作实践' : 'Creative practice'}</p><h1>{zh ? '研究之外' : 'Outside the studio'}</h1></div><p>{zh ? '影像、声音与展览也是我的观察方式。' : 'Other ways of observing, composing, and making.'}</p></header>
    <div className="practice-grid">{items.map((item) => <Link to={'/interests/' + item.id} key={item.id} className="practice-card">
      {item.image ? <img src={item.image} alt="" width="600" height="360" /> : <div className="film-cover"><Clapperboard size={36} strokeWidth={1} /><span>Zijing Media</span><small>2021—2025</small></div>}
      <div className="practice-copy"><h2>{item.title}<ArrowUpRight size={16} strokeWidth={1.3} /></h2><p>{item.text}</p></div>
    </Link>)}</div>
  </section>;
}
