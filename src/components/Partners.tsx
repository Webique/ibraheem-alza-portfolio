import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Partners = () => {
  const { t } = useLanguage();

  const partners = [
    'Al-Maha Mall',
    'Tulay',
    'Triple Seven',
    'Over Jar',
    'Noble Chocolate'
  ];

  return (
    <section id="partners" className="section-padding bg-muted/20">
      <div className="container-width">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('partners.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted partnerships that drive mutual success and growth
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`card-premium p-6 text-center hover-lift animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-premium-black">
                  {partner.charAt(0)}
                </span>
              </div>
              
              <h3 className="font-semibold text-foreground text-sm">
                {partner}
              </h3>
            </div>
          ))}
        </div>

        {/* Partnership Philosophy */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-display italic text-foreground/80 leading-relaxed">
              "Success is built on strategic partnerships that create value for all stakeholders"
            </blockquote>
            <cite className="block mt-6 text-lg text-muted-foreground">
              — Ibraheem Alzahrani
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;