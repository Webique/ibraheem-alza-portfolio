import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Partners = () => {
  const { t } = useLanguage();

  const partners = [
    {
      name: t('partners.tulay'),
      logo: null,
      initial: t('partners.tulay').charAt(0)
    },
    {
      name: 'Triple Seven',
      logo: '/tripleseven.png',
      initial: 'T'
    },
    {
      name: 'Over Jar',
      logo: '/overjar.png',
      initial: 'O'
    },
    {
      name: 'Noble Chocolate',
      logo: '/novell.jpeg',
      initial: 'N'
    },
    {
      name: 'Frykit',
      logo: '/frykit.png',
      initial: 'F'
    },
    {
      name: 'Flowers Beach',
      logo: '/flowersbeach.jpeg',
      initial: 'F'
    },
    {
      name: 'Ath',
      logo: '/ath.png',
      initial: 'A'
    }
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
            {t('partners.description')}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`card-premium p-6 text-center hover-lift animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-16 h-16 object-contain rounded-full"
                  />
                ) : (
                  <span className="text-2xl font-bold text-premium-black">
                    {partner.initial}
                  </span>
                )}
              </div>
              
              <h3 className="font-semibold text-foreground text-sm">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Partnership Philosophy */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-display italic text-foreground/80 leading-relaxed">
              {t('partners.philosophy')}
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