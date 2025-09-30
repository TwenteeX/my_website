import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const content = {
    en: {
      nav: ['Home', 'Projects', 'Interest', 'About', 'Contact'],
      navLinks: ['#hero', '#projects', '#interest', '#about', '#contact']
    },
    zh: {
      nav: ['首页', '项目', '兴趣', '关于', '联系'],
      navLinks: ['#hero', '#projects', '#interest', '#about', '#contact']
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      navigate('/');
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const element = document.querySelector(link);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on homepage, just scroll to section
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const LanguageSwitcher = ({ isMobile = false }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={`flex items-center gap-2 ${isMobile ? 'w-full justify-start' : ''}`}>
          <Globe className="w-4 h-4" />
          <span>{language === 'en' ? 'English' : '中文'}</span>
          {!isMobile && <ChevronDown className="w-4 h-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isMobile ? "start" : "end"} className="glass-effect">
        <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('zh')}>中文</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-display font-bold gradient-text"
          >
            Yunxiang Ma
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {content[language].nav.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(content[language].navLinks[index])}
                whileHover={{ scale: 1.1 }}
                className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
              >
                {item}
              </motion.button>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <div className="glass-effect rounded-lg p-4 flex flex-col gap-2">
              {content[language].nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(content[language].navLinks[index])}
                  className="block py-2 text-foreground/80 hover:text-foreground transition-colors text-left"
                >
                  {item}
                </button>
              ))}
              <LanguageSwitcher isMobile={true} />
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;