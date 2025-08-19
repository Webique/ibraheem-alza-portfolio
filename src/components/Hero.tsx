import React from 'react';
import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { isRTL, t } = useLanguage();

  const handleContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCV = () => {
    // Open the CV PDF file from public folder
    window.open('/cv.pdf', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://linkedin.com/in/ibraheem-alzhrani', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-width relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                  <span className="gradient-text">{t('hero.title')}</span>
                </h1>
                <h2 className="font-display text-2xl md:text-3xl text-white">
                  {t('hero.position')}
                </h2>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed text-white max-w-2xl mx-auto">
                {t('hero.description')}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button
                onClick={handleContact}
                className="btn-gold text-lg px-8 py-6 group w-full sm:w-auto"
              >
                {t('hero.contact')}
                <ArrowRight className={`w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'group-hover:-translate-x-1' : ''}`} />
              </Button>
              
              <div className="flex gap-4 w-full sm:w-auto justify-center">
                <Button
                  onClick={handleCV}
                  variant="outline"
                  className="btn-navy border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-6 flex-1 sm:flex-none"
                >
                  <Download className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                  {t('hero.cv')}
                </Button>
                
                <Button
                  onClick={handleLinkedIn}
                  variant="outline"
                  className="btn-navy border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-6 flex-1 sm:flex-none"
                >
                  <Linkedin className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                  {t('hero.linkedin')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;