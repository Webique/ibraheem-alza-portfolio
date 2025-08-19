import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Metrics from '@/components/Metrics';
import Services from '@/components/Services';
import Achievements from '@/components/Achievements';
import Partners from '@/components/Partners';
import Development from '@/components/Development';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        {/* Progress Indicator */}
        <div className="scroll-indicator" style={{ width: '0%' }}></div>
        
        <Navigation />
        <Hero />
        <About />
        <Metrics />
        <Services />
        <Achievements />
        <Partners />
        <Development />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;