import React from 'react';
import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import portraitImage from '@/assets/ibraheem-portrait.jpg';

const Hero = () => {
  const { isRTL, t } = useLanguage();

  const handleContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCV = () => {
    // In a real implementation, this would trigger a CV download
    window.open('#', '_blank');
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                  <span className="gradient-text">{t('hero.title')}</span>
                </h1>
                <h2 className="font-display text-2xl md:text-3xl text-muted-foreground">
                  {t('hero.position')}
                </h2>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button
                onClick={handleContact}
                className="btn-gold text-lg px-8 py-6 group"
              >
                {t('hero.contact')}
                <ArrowRight className={`w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'group-hover:-translate-x-1' : ''}`} />
              </Button>
              
              <div className="flex gap-4">
                <Button
                  onClick={handleCV}
                  variant="outline"
                  className="btn-navy border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-6"
                >
                  <Download className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                  {t('hero.cv')}
                </Button>
                
                <Button
                  onClick={handleLinkedIn}
                  variant="outline"
                  className="btn-navy border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-6"
                >
                  <Linkedin className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                  {t('hero.linkedin')}
                </Button>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className={`flex justify-center ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="relative animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="relative w-80 h-96 md:w-96 md:h-112">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-2xl animate-glow"></div>
                
                {/* Portrait Container */}
                <div className="relative bg-gradient-card rounded-2xl p-2 shadow-premium">
                  <img
                    src={portraitImage}
                    alt="Ibraheem Alzahrani - Operations Manager"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-premium-black/20 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
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