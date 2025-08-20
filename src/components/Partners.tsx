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

  // Duplicate partners multiple times for seamless infinite loop
  const marqueePartners = [...partners, ...partners, ...partners, ...partners, ...partners];

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

        {/* Marquee Container */}
        <div className="relative">
          {/* Marquee Track */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {marqueePartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 group"
                >
                  <div className="w-24 h-24 flex items-center justify-center">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain rounded-lg hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {partner.initial}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>

        {/* Partnership Philosophy */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
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