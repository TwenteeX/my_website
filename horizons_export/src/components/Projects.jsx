import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProjectImage from '@/components/ProjectImage';
import { projectsData } from '@/data/projects';
import { orderProjects, projectCards, projectFilters, projectImages } from '@/data/projectCatalog';

export default function Projects({ language }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const zh = language === 'zh';
  const category = projectFilters.find((filter) => filter.id === searchParams.get('category')) || projectFilters[0];
  const allProjects = orderProjects(projectsData[language]);
  const projects = allProjects.filter((project) => !category.ids || category.ids.includes(project.id));
  const workSearch = searchParams.toString() ? '?' + searchParams.toString() : '';

  function selectCategory(id) {
    setSearchParams(id === 'all' ? {} : { category: id }, { preventScrollReset: true });
    // The filter stays visible on long indexes; return the results to its lower edge.
    document.getElementById('project-filters')?.scrollIntoView({ block: 'start', behavior: 'instant' });
  }

  return (
    <section id="projects" className="section shell">
      <header className="section-heading">
        <div><p className="eyebrow">{zh ? '研究与设计' : 'Research & design'}</p><h1>{zh ? '作品' : 'Work'}</h1></div>
        <p>{zh ? '探索空间、计算与交互之间的可能。' : 'Explorations in space, computation, and interaction.'}</p>
      </header>
      <div className="filter-bar" id="project-filters" role="group" aria-label={zh ? '项目分类' : 'Project categories'}>
        {projectFilters.map((filter) => (
          <button key={filter.id} aria-pressed={filter.id === category.id} className={filter.id === category.id ? 'active' : ''} onClick={() => selectCategory(filter.id)}>
            {filter[language]}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status" aria-live="polite">{zh ? '显示 ' + projects.length + ' 个项目' : 'Showing ' + projects.length + (projects.length === 1 ? ' project' : ' projects')}</p>
      <div className="project-grid">
        {projects.map((project, index) => {
          const card = projectCards[project.id] || {};
          return <Link key={project.id} to={'/projects/' + project.id} state={{ workSearch }} className="project-card">
            <div className={'project-image' + (card.fit === 'contain' ? ' image-contain' : '')}>
              <ProjectImage src={card.image || projectImages[project.id]} poster={card.poster} alt="" loading={index < 3 ? 'eager' : 'lazy'} decoding="async" width="720" height="405" />
            </div>
            <div className="project-copy">
              <div className="project-title"><h2>{project.title}</h2><ArrowUpRight size={16} strokeWidth={1.3} aria-hidden="true" /></div>
              <p>{card[language] || project.description}</p>
              <div className="project-meta"><span>{project.year}</span>{card.recognition && <span>{card.recognition}</span>}</div>
            </div>
          </Link>;
        })}
      </div>
    </section>
  );
}
