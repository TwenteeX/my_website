import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';

const WorkPage = lazy(() => import('@/pages/WorkPage'));
const PracticePage = lazy(() => import('@/pages/PracticePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const InterestDetail = lazy(() => import('@/pages/InterestDetail'));

// Preserve links shared before homepage sections became separate pages.
const legacySections = {
  '#projects': '/work', '#interest': '/practice', '#about': '/about',
  '#journey': '/about#journey', '#contact': '/about', '#hero': '/',
};

function PageFocus({ children }) {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(null);
  useEffect(() => {
    const section = hash ? document.getElementById(hash.slice(1)) : null;
    if (section) section.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (previousPath.current !== null) {
      document.getElementById('main')?.focus({ preventScroll: true });
    }
    previousPath.current = pathname;
  }, [pathname, hash]);
  return children;
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('portfolio-language') === 'zh' ? 'zh' : 'en'; }
    catch { return 'en'; }
  });
  const location = useLocation();
  const zh = language === 'zh';
  const isHome = location.pathname === '/';
  const legacyTarget = isHome ? legacySections[location.hash] : null;

  useEffect(() => {
    document.documentElement.lang = zh ? 'zh-CN' : 'en';
    try { localStorage.setItem('portfolio-language', language); } catch { /* Storage may be disabled. */ }
  }, [language, zh]);

  return (
    <div className={isHome ? 'site-layout is-home' : 'site-layout'}>
      <a className="skip-link" href="#main">{zh ? '跳转到正文' : 'Skip to content'}</a>
      <Header language={language} setLanguage={setLanguage} />
      <Suspense fallback={<main id="main" tabIndex={-1} className="route-loading shell" aria-busy="true">{zh ? '正在加载…' : 'Loading…'}</main>}>
        <PageFocus>
          <Routes>
            <Route path="/" element={legacyTarget ? <Navigate to={legacyTarget} replace /> : <HomePage language={language} />} />
            <Route path="/work" element={<WorkPage language={language} />} />
            <Route path="/practice" element={<PracticePage language={language} />} />
            <Route path="/about" element={<AboutPage language={language} />} />
            <Route path="/journey" element={<Navigate to="/about#journey" replace />} />
            <Route path="/projects/:id" element={<ProjectDetail language={language} />} />
            <Route path="/interests/:id" element={<InterestDetail language={language} />} />
            <Route path="*" element={<main id="main" tabIndex={-1} className="not-found shell"><h1>404</h1><p>{zh ? '页面不存在。' : 'This page could not be found.'}</p><Link className="text-link" to="/">{zh ? '返回首页' : 'Return home'}</Link></main>} />
          </Routes>
        </PageFocus>
      </Suspense>
      {!isHome && <Footer language={language} />}
    </div>
  );
}
