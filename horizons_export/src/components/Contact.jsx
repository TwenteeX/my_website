import React from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

const Contact = ({ language }) => {
  const content = {
    zh: {
      title: '联系我',
      email: 'yunxianm@andrew.cmu.edu',
      links: [
        { name: 'GitHub', url: 'https://github.com/TwenteeX' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yunxiang-ma-39a970332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
        { name: 'Google Scholar', url: '#' },
      ]
    },
    en: {
      title: 'Contact Me',
      email: 'yunxianm@andrew.cmu.edu',
      links: [
        { name: 'GitHub', url: 'https://github.com/TwenteeX' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yunxiang-ma-39a970332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
        { name: 'Google Scholar', url: '#' },
      ]
    }
  };

  const handleLinkClick = (e, url) => {
    if (url === '#') {
      e.preventDefault();
      toast({
        title: "🚧 Feature in development",
        description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
      });
    }
  };

  return (
    <section id="contact" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2">{content[language].title}</h3>
          <a href={`mailto:${content[language].email}`} className="text-base text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
            {content[language].email}
          </a>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            {content[language].links.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                onClick={(e) => handleLinkClick(e, link.url)}
                whileHover={{ y: -2 }}
                className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;