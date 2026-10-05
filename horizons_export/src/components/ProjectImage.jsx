import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';

export default function ProjectImage({ src, poster, alt, controls = false, language = 'en', ...imageProps }) {
  const [paused, setPaused] = useState(false);
  const zh = language === 'zh';
  const label = paused ? (zh ? '播放动画' : 'Play animation') : (zh ? '暂停动画' : 'Pause animation');

  return <>
    <picture className="project-picture">
      {poster && <source media="(prefers-reduced-motion: reduce)" srcSet={poster} />}
      <img src={paused && poster ? poster : src} alt={alt} {...imageProps} />
    </picture>
    {poster && controls && <button className="motion-toggle" onClick={() => setPaused(!paused)} aria-label={label}>
      {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
      {label}
    </button>}
  </>;
}
