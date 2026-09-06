import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
export default function Header({language,setLanguage}) {
 const [open,setOpen]=useState(false); const zh=language==='zh';
 const links=[['projects',zh?'项目':'Work'],['interest',zh?'实践':'Practice'],['about',zh?'关于':'About'],['journey',zh?'旅程':'Journey']];
 return <header className="site-header"><nav className="shell nav-bar" aria-label={zh?'主导航':'Main navigation'}><Link to="/#hero" className="wordmark" onClick={()=>setOpen(false)}>Yunxiang Ma<span className="wordmark-cn">马云翔</span></Link><div className="nav-desktop">{links.map(([id,label])=><Link key={id} to={'/#'+id}>{label}</Link>)}</div><div className="nav-actions"><button className="language-button" onClick={()=>setLanguage(zh?'en':'zh')} aria-label={zh?'Switch to English':'切换为中文'}>{zh?'EN':'中文'}</button><a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">{zh?'简历':'Résumé'}<ArrowUpRight size={14}/></a><button className="menu-button" aria-label={zh?'切换导航菜单':'Toggle navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X size={20}/>:<Menu size={20}/>}</button></div></nav>{open&&<div className="mobile-nav shell" id="mobile-navigation">{links.map(([id,label])=><Link key={id} to={'/#'+id} onClick={()=>setOpen(false)}>{label}</Link>)}</div>}</header>
}
