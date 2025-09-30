import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ProjectDetail from '@/pages/ProjectDetail';
import InterestDetail from '@/pages/InterestDetail';
import Contact from '@/components/Contact';

function App() {
  const [language, setLanguage] = useState('en');
  const location = useLocation();

  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <Header language={language} setLanguage={setLanguage} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/projects/:id" element={<ProjectDetail language={language} />} />
          <Route path="/interests/:id" element={<InterestDetail language={language} />} />
        </Routes>
      </AnimatePresence>
      <Contact language={language} />
      <Footer language={language} />
      <Toaster />
    </div>
  );
}

export default App;