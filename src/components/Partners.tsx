import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Partners = () => {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const partners = [
    { logo: '/tulay.png', name: 'Tulay' },
    { logo: '/tripleseven.png', name: 'Triple Seven' },
    { logo: '/overjar.png', name: 'Over Jar' },
    { logo: '/novell.jpeg', name: 'Noble Chocolate' },
    { logo: '/frykit.png', name: 'Frykit' },
    { logo: '/flowersbeach.jpeg', name: 'Flowers Beach' },
    { logo: '/ath.png', name: 'Athar' }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 2; // Faster speed for visible movement

    const scroll = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset when reaching the end for seamless loop
        if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
    };

    // Fast interval for smooth movement
    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="partners" className="section-padding bg-muted/20">
      <div className="container-width">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {language === 'ar' ? 'شركاء النجاح' : 'Partners'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'شراكات موثوقة تدفع النجاح المتبادل والنمو'
              : 'Trusted partnerships that drive mutual success and growth'
            }
          </p>
        </div>

        {/* Partners Horizontal Scrolling Bar */}
        <div className="mb-16 overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex items-center gap-8 lg:gap-12"
            style={{ 
              width: 'max-content',
              minWidth: '200%' // Ensure there's enough content to scroll
            }}
          >
            {/* Multiple copies for seamless infinite loop */}
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 animate-scale-in"
                style={{ animationDelay: `${(index % partners.length) * 0.1}s` }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center overflow-hidden bg-white shadow-sm">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Philosophy */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-display italic text-foreground/80 leading-relaxed">
              {language === 'ar' 
                ? 'النجاح مبني على الشراكات الاستراتيجية التي تخلق قيمة لجميع الأطراف المعنية'
                : 'Success is built on strategic partnerships that create value for all stakeholders'
              }
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