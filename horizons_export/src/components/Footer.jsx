import React from 'react';
import ContactLinks from './ContactLinks';

export default function Footer({ language }) {
  return <footer className="site-footer shell">
    <span>© {new Date().getFullYear()} Yunxiang Ma</span>
    <ContactLinks language={language} />
  </footer>;
}
