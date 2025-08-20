import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Partners = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

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
      name: 'Athar',
      logo: '/ath.png',
      initial: 'A'
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const scrollDirection = 1; // 1 for right, -1 for left

    const scroll = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed * scrollDirection;
        
        // Reset position when reaching the end
        if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
    };

    const intervalId = setInterval(scroll, 50); // Update every 50ms for smooth scrolling

    return () => clearInterval(intervalId);
  }, []);

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

        {/* Partners Horizontal Bar with Auto-scroll */}
        <div 
          ref={scrollRef}
          className="flex items-center gap-8 lg:gap-12 mb-16 overflow-hidden"
        >
          {/* Duplicate partners for seamless scrolling */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 animate-scale-in"
              style={{ animationDelay: `${(index % partners.length) * 0.1}s` }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center overflow-hidden">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain rounded-full"
                  />
                ) : (
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                    {partner.initial}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Philosophy */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
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