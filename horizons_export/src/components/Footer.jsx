
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = ({ language }) => {
  const content = {
    zh: {
      copyright: '版权所有',
      madeWith: '用',
      and: '和',
      crafted: '精心制作',
      backToTop: '回到顶部'
    },
    en: {
      copyright: 'All rights reserved',
      madeWith: 'Made with',
      and: 'and',
      crafted: 'crafted with care',
      backToTop: 'Back to top'
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-foreground/70 mb-2">
                © 2024 Portfolio. {content[language].copyright}.
              </p>
              <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-start">
                {content[language].madeWith}
                <Heart className="w-4 h-4 mx-1 text-gray-500" />
                {content[language].and}
                <span className="ml-1 gradient-text font-medium">React</span>
              </p>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              {content[language].backToTop}
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
