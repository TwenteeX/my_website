
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projects';

const Projects = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = {
    zh: {
      title: '精选项目',
      subtitle: '技术与创意的完美融合',
      categories: [
        { id: 'all', name: '全部' },
        { id: 'ai', name: 'AI产品' },
        { id: 'visualization', name: '数据可视化' },
        { id: 'research', name: '学术研究' },
        { id: 'creative', name: '创意项目' }
      ],
    },
    en: {
      title: 'Featured Projects',
      subtitle: 'Perfect Fusion of Technology and Creativity',
      categories: [
        { id: 'all', name: 'All' },
        { id: 'ai', name: 'AI Products' },
        { id: 'visualization', name: 'Data Viz' },
        { id: 'research', name: 'Research' },
        { id: 'creative', name: 'Creative' }
      ],
    }
  };

  const currentProjects = projectsData[language];
  const filteredProjects = activeCategory === 'all' 
    ? currentProjects
    : currentProjects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            {content[language].title}
          </h2>
          <p className="text-xl text-foreground/70">
            {content[language].subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {content[language].categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-2 transition-all ${
                activeCategory === category.id
                  ? 'bg-gray-800 text-white glow-effect'
                  : 'text-foreground/70'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden group transition-all duration-300"
            >
              <Link to={`/projects/${project.id}`}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="w-full h-full"
                >
                  <div className="relative overflow-hidden">
                    <img
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={project.title}
                      src={project.id === 1 ? "/images/roomify-main.jpg" : "https://images.unsplash.com/photo-1572177812156-58036aae439c"} />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
