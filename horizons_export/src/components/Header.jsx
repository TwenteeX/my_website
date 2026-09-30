import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Header({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const { pathname } = useLocation();
  const zh = language === 'zh';
  const links = [
    ['/', zh ? '首页' : 'Home'],
    ['/work', zh ? '作品' : 'Work'],
    ['/practice', zh ? '实践' : 'Practice'],
    ['/about', zh ? '关于' : 'About'],
  ];
  const active = (path) => path === pathname ||
    (path === '/work' && pathname.startsWith('/projects/')) ||
    (path === '/practice' && pathname.startsWith('/interests/'));
  useEffect(() => { setOpen(false); }, [pathname]);
  const renderLinks = () => links.map(([path, label]) => (
    <Link key={path} to={path} aria-current={active(path) ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>
  ));

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); }
    }}>
      <nav className="shell nav-bar" aria-label={zh ? '主导航' : 'Main navigation'}>
        <Link to="/" className="wordmark" onClick={() => setOpen(false)}>{zh ? '马云翔' : 'Yunxiang Ma'}</Link>
        <div className="nav-desktop">{renderLinks()}</div>
        <div className="nav-actions">
          <button className="language-button" onClick={() => setLanguage(zh ? 'en' : 'zh')} aria-label={zh ? 'Switch to English' : '切换为中文'}>{zh ? 'EN' : '中文'}</button>
          <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">{zh ? '简历' : 'Résumé'}<ArrowUpRight size={13} /></a>
          <button ref={menuButton} className="menu-button" aria-label={zh ? '切换导航菜单' : 'Toggle navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      <nav hidden={!open} className="mobile-nav" id="mobile-navigation" aria-label={zh ? '移动端导航' : 'Mobile navigation'}><div className="shell">{renderLinks()}</div></nav>
    </header>
  );
}
