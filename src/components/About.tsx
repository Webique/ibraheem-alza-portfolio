import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('about.title')}
            </h2>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Description */}
            <div className="card-premium p-8 md:p-12 animate-slide-up">
              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90">
                {/* Opening Statement */}
                <p>
                  {t('about.description').split('\n\n')[0]}
                </p>
                
                {/* Services Introduction */}
                <p>
                  {t('about.description').split('\n\n')[1]}
                </p>
                
                {/* Bullet Points */}
                <div className="space-y-3 pl-4">
                  {t('about.description').split('\n\n')[2].split('\n').filter(line => line.trim().startsWith('•')).map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-secondary text-xl">•</span>
                      <span>{point.replace('•', '').trim()}</span>
                    </div>
                  ))}
                </div>
                
                {/* Journey Story */}
                <p>
                  {t('about.description').split('\n\n')[3]}
                </p>
                
                {/* Partnership Message */}
                <p>
                  {t('about.description').split('\n\n')[4]}
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-border mt-8">
                <div className="space-y-2">
                  <h4 className="font-semibold text-secondary text-sm uppercase tracking-wider">
                    {t('about.sectors').split(':')[0]}:
                  </h4>
                  <p className="text-foreground/80">
                    {t('about.sectors').split(':')[1]}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-secondary text-sm uppercase tracking-wider">
                    {t('about.philosophy').split(':')[0]}:
                  </h4>
                  <p className="text-foreground/80">
                    {t('about.philosophy').split(':')[1]}
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-premium p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-premium-black">9+</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t('about.years')}</h4>
                <p className="text-sm text-muted-foreground">{t('about.multiSector')}</p>
              </div>

              <div className="card-premium p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-gradient-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t('about.countries')}</h4>
                <p className="text-sm text-muted-foreground">{t('about.countriesList')}</p>
              </div>

              <div className="card-premium p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-premium-black">50%</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t('about.costReduction')}</h4>
                <p className="text-sm text-muted-foreground">{t('about.efficiencyGains')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;