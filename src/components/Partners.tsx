import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Partners = () => {
  const { language } = useLanguage();

  const partners = [
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
    <section id="partners" className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-width relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {language === 'ar' ? 'شركاء النجاح' : 'Trusted Partners'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'شراكات استراتيجية تدفع النمو والتميز في كل مشروع'
              : 'Strategic partnerships that drive growth and excellence in every project'
            }
          </p>
        </div>

        {/* Seamless Infinite Marquee */}
        <div className="relative mb-20">
          {/* Marquee Container */}
          <div className="marquee-container overflow-hidden">
            {/* Single Row - Moving Right to Left */}
            <div className="marquee-track">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="marquee-item">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain rounded-lg hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                        <span className="text-2xl md:text-3xl font-bold text-white">
                          {partner.initial}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {/* Second set - exact duplicate for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="marquee-item">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain rounded-lg hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                        <span className="text-2xl md:text-3xl font-bold text-white">
                          {partner.initial}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {/* Third set - for perfect seamless loop */}
              {partners.map((partner, index) => (
                <div key={`third-${index}`} className="marquee-item">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain rounded-lg hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                        <span className="text-2xl md:text-3xl font-bold text-white">
                          {partner.initial}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Philosophy */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-secondary/10 via-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-sm">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🤝</span>
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-display italic text-foreground/90 leading-relaxed mb-6">
                {language === 'ar' 
                  ? 'النجاح مبني على الشراكات الاستراتيجية التي تدفع النمو والتميز في كل مشروع'
                  : 'Success is built on strategic partnerships that create value for all stakeholders'
                }
              </blockquote>
              
              <cite className="block text-lg text-muted-foreground">
                — Ibraheem Alzahrani
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;