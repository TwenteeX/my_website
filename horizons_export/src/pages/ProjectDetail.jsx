import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ExternalLink, Github, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { projectsData } from '@/data/projects';

const ProjectDetail = ({ language }) => {
  const { id } = useParams();
  const project = projectsData[language].find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    toast({
      title: "🚧 Feature in development",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{language === 'zh' ? '项目未找到' : 'Project not found'}</p>
      </div>
    );
  }

  const { title, description, tags, details } = project;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Helmet>
        <title>{`${title} - Project Detail`}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/" className="inline-flex items-center text-foreground/70 hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'zh' ? '返回项目列表' : 'Back to Projects'}
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-4">{title}</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">{description}</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12"
        >
          <img class="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" alt={title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.aside
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="glass-effect rounded-2xl p-6 sticky top-28">
              <h3 className="text-xl font-semibold mb-4">{language === 'zh' ? '项目信息' : 'Project Info'}</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground/80">{language === 'zh' ? '技术栈' : 'Technologies'}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground/80">{language === 'zh' ? '链接' : 'Links'}</p>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline" onClick={(e) => handleLinkClick(e, '#')}>
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </Button>
                    <Button size="sm" variant="outline" onClick={(e) => handleLinkClick(e, '#')}>
                      <ExternalLink className="w-4 h-4 mr-2" /> {language === 'zh' ? '访问' : 'Live Demo'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.main
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="prose max-w-none text-foreground/80 prose-headings:font-display prose-headings:gradient-text prose-a:text-indigo-500 hover:prose-a:text-indigo-600">
              <section>
                <h2>{details.about.title}</h2>
                <p>{details.about.content}</p>
              </section>
              
              <section>
                <h2 className="flex items-center">
                  <Video className="w-6 h-6 mr-3" />
                  {language === 'zh' ? '项目演示' : 'Project Demo'}
                </h2>
                <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center text-muted-foreground my-8">
                  <p>{language === 'zh' ? '视频演示区域' : 'Video Demo Area'}</p>
                </div>
                <p>{language === 'zh' ? '在这里，您可以嵌入项目的视频演示，例如使用 YouTube 或 Vimeo 的嵌入代码。' : 'Here you can embed a video demo of your project, for example, using an embed code from YouTube or Vimeo.'}</p>
              </section>

              <section>
                <h2>{details.process.title}</h2>
                <p>{details.process.content}</p>
                <img class="w-full h-auto object-cover rounded-lg shadow-lg my-8" alt="Project process visualization" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </section>
              <section>
                <h2>{details.outcome.title}</h2>
                <p>{details.outcome.content}</p>
              </section>
            </div>
          </motion.main>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;