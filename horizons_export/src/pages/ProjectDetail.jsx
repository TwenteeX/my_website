import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { projectImages, projectCards, orderProjects } from '@/data/projectCatalog';
import ProjectImage from '@/components/ProjectImage';
import ProjectSection from '@/components/ProjectSection';
import MethodFigure from '@/components/MethodFigure';

export default function ProjectDetail({ language }) {
  const { id } = useParams();
  const location = useLocation();
  const workSearch = location.state?.workSearch || '';
  const backTo = '/work' + workSearch;
  const zh = language === 'zh';
  const projects = orderProjects(projectsData[language]);
  const project = projects.find(p => String(p.id) === id);

  if (!project) return <main tabIndex={-1} id="main" className="not-found shell">
    <h1>{zh ? '项目不存在' : 'Project not found'}</h1>
    <Link to={backTo}>{zh ? '返回项目' : 'Back to work'}</Link>
  </main>;

  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const poster = projectCards[project.id]?.poster;
  const intro = project.sections[0]?.fullWidth ? project.sections[0] : null;
  const sections = intro ? project.sections.slice(1) : project.sections;

  return <main tabIndex={-1} id="main" className="detail-page shell">
    <Helmet>
      <title>{project.title} — Yunxiang Ma</title>
      <meta name="description" content={project.description} />
    </Helmet>
    <Link className="detail-back" to={backTo}><ArrowLeft size={15} />{zh ? '全部项目' : 'All work'}</Link>
    <header className="detail-header">
      <p className="eyebrow">{project.year} / {zh ? '研究与设计' : 'Research & design'}</p>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </header>
    {!project.coverInSections && (project.coverStyle === 'method' ? <MethodFigure src={projectImages[project.id]} language={language} /> : <div className={'detail-cover' + (project.coverFit === 'cover' ? ' detail-cover-crop' : '')}>
      <ProjectImage key={project.id} src={projectImages[project.id]} poster={poster} alt={project.title} controls language={language} {...(poster ? { width: 1280, height: 720, style: { height: 'auto' } } : {})} />
    </div>)}
    {intro && <div className="detail-body detail-intro"><ProjectSection section={intro} project={project} language={language} /></div>}
    <div className="detail-layout">
      <aside>
        <dl className="detail-sidebar">
          <div><dt>{zh ? '年份' : 'Year'}</dt><dd>{project.year}</dd></div>
          <div><dt>{zh ? '团队' : 'Team'}</dt><dd>{project.members}</dd></div>
          {project.facts?.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
          <div><dt>{zh ? '方向与方法' : 'Focus & methods'}</dt><dd className="detail-tags">{project.tags.map(t => <span key={t}>{t}</span>)}</dd></div>
          {project.links.length > 0 && <div>
            <dt>{zh ? '研究资料' : 'Resources'}</dt>
            <dd>{project.links.map(l => <a className="text-link" style={{ display: 'flex', marginBottom: 10 }} key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label}<ArrowUpRight size={14} /></a>)}</dd>
          </div>}
        </dl>
      </aside>
      <article className="detail-body">
        {project.id === 7 && <section>
          <h2>{zh ? '演示' : 'Demonstration'}</h2>
          <iframe className="practice-player" src="https://www.youtube.com/embed/qbZ14Et57BM" title="SyneSound demonstration" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </section>}
        {sections.map(s => <ProjectSection key={s.title} section={s} project={project} language={language} />)}
      </article>
    </div>
    <div className="detail-next">
      <Link to={backTo}>{zh ? '全部项目' : 'All work'}</Link>
      <Link className="text-link" to={'/projects/' + next.id} state={{ workSearch }}>{next.title}<ArrowRight size={16} /></Link>
    </div>
  </main>;
}
