import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactLinks({ language }) {
  const zh = language === 'zh';
  return <div className="contact-links" role="group" aria-label={zh ? '联系方式' : 'Contact'}>
    <a href="https://www.linkedin.com/in/yunxiang-ma-39a970332" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={20} strokeWidth={1.5} aria-hidden="true" /></a>
    <a href="mailto:yunxianm@andrew.cmu.edu" aria-label={zh ? '发送邮件' : 'Send email'} title="yunxianm@andrew.cmu.edu"><Mail size={21} strokeWidth={1.5} aria-hidden="true" /></a>
    <a href="https://github.com/TwenteeX" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><Github size={21} strokeWidth={1.5} aria-hidden="true" /></a>
  </div>;
}
