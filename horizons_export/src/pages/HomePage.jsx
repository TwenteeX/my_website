import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Interest from '@/components/Interest';

const HomePage = ({ language }) => {
  return (
    <>
      <Helmet>
        <title>AI Product Manager & Designer - Portfolio</title>
        <meta name="description" content="Professional AI Product Manager, Data Visualization Designer, and Computational Designer showcasing interdisciplinary innovation projects and research." />
        <meta name="keywords" content="AI Product Manager, Data Visualization, Computational Design, Product Operations, User Research, Creative Design" />
        <meta property="og:title" content="AI Product Manager & Designer - Portfolio" />
        <meta property="og:description" content="Professional AI Product Manager, Data Visualization Designer, and Computational Designer showcasing interdisciplinary innovation projects and research." />
        <meta property="og:type" content="website" />
      </Helmet>
      <main>
        <Hero language={language} />
        <Projects language={language} />
        <Interest language={language} />
        <About language={language} />
      </main>
    </>
  );
};

export default HomePage;