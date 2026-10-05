import React from 'react';

export default function ProjectSection({ section: s, project, language }) {
  const zh = language === 'zh';
  const screenGallery = s.imageLayout === 'screens';
  const table = s.table && <div className="detail-table-scroll" role="region" aria-label={s.table.caption} tabIndex={0}>
    <table className="detail-table">
      <caption>{s.table.caption}</caption>
      <thead><tr>{s.table.columns.map(c => <th scope="col" key={c}>{c}</th>)}</tr></thead>
      <tbody>{s.table.rows.map((row, r) => <tr key={r}>{row.map((cell, c) => c === 0 ? <th scope="row" key={c}>{cell}</th> : <td key={c}>{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>;

  return <section>
    <h2>{s.title}</h2>
    {s.content.split('\n\n').map((p, j) => <p key={j} style={{ marginBottom: 16 }}>{p}</p>)}
    {s.video && <figure className="detail-video">
      <video key={s.video.src} controls playsInline preload="metadata" poster={s.video.poster} width={s.video.width} height={s.video.height} aria-label={s.video.title}>
        <source src={s.video.src} type="video/mp4" />
        <a href={s.video.src}>{zh ? '下载视频' : 'Download video'}</a>
      </video>
      <figcaption>{s.video.caption}</figcaption>
    </figure>}
    {!s.tableAfterImages && table}
    {screenGallery && <p className="screen-gallery-hint">{zh ? '横向滑动浏览界面，点击可查看大图。' : 'Scroll through the screens; select one to view it full size.'}</p>}
    <div className={screenGallery ? 'detail-screen-grid' : s.imageLayout === 'grid' ? 'detail-figure-grid' + (s.imageColumns === 3 ? ' detail-figure-grid-three' : '') : undefined}
      {...(screenGallery ? { role: 'region', 'aria-label': s.title, tabIndex: 0 } : {})}>
      {s.images.map((src, j) => {
        const caption = s.imageCaptions?.[j] || `${s.title} · ${String(j + 1).padStart(2, '0')}`;
        const credit = s.imageCredits?.[j];
        const fullSize = s.fullSizeImages?.[j] || src;
        const picture = <img src={src} alt={s.imageCaptions?.[j] || `${project.title} — ${s.title} ${j + 1}`} width={s.imageDimensions?.[j]?.[0]} height={s.imageDimensions?.[j]?.[1]} loading="lazy" />;
        return <figure key={src} className={s.imageSpans?.[j] > 1 ? 'figure-wide' : undefined}>
          {s.zoomImages ? <a className="figure-expand" href={fullSize} target="_blank" rel="noreferrer" aria-label={`${zh ? '查看原图' : 'View full size'}: ${caption}`}>{picture}</a> : picture}
          <figcaption>{caption}{credit && <a className="figure-size-link" href={credit.url} target="_blank" rel="noreferrer">{credit.label} ↗</a>}{s.zoomImages && <a className="figure-size-link" href={fullSize} target="_blank" rel="noreferrer">{zh ? '查看原图 ↗' : 'View full size ↗'}</a>}</figcaption>
        </figure>;
      })}
    </div>
    {s.tableAfterImages && table}
  </section>;
}
