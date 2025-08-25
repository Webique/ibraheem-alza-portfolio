import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Partners: React.FC = () => {
  const { language } = useLanguage();

  // Partners with their logos
  const partners = [
    { logo: '/tripleseven.png', name: 'Triple Seven' },
    { logo: '/overjar.png', name: 'Over Jar' },
    { logo: '/novell.jpeg', name: 'Noble Chocolate' },
    { logo: '/frykit.png', name: 'Frykit' },
    { logo: '/flowersbeach.jpeg', name: 'Flowers Beach' },
    { logo: '/novel.png', name: 'Novel' },
    { logo: '/ath.png', name: 'Ath' }
  ];

  return (
    <section id="partners" className="py-24 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 gradient-text leading-tight pb-4">
            {language === 'ar' ? 'شركاء النجاح' : 'Trusted Partners'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'شراكات موثوقة تدفع النجاح المتبادل والنمو المستدام'
              : 'Trusted partnerships that drive mutual success and sustainable growth'
            }
          </p>
        </div>

        {/* Simple Working CSS Marquee */}
        <div className="mb-20 overflow-hidden">
          <div
            className="marquee-wrapper"
            {...(language === 'ar' ? { dir: 'ltr' } : {})}
          >
            <div className="marquee-content">
              {/* First set */}
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="marquee-item">
                  <div className="group relative">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain rounded-xl hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                        <span className="text-3xl md:text-4xl font-bold text-white">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    {/* Hover Effect Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
              {/* Second set - duplicate for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="marquee-item">
                  <div className="group relative">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain rounded-xl hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                        <span className="text-3xl md:text-4xl font-bold text-white">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    {/* Hover Effect Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Philosophy */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-secondary/10 via-primary/10 to-secondary/10 rounded-3xl p-10 md:p-16 border border-white/20 backdrop-blur-sm relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-secondary transform rotate-12 scale-150"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <blockquote className="text-2xl md:text-4xl font-display italic text-foreground/90 leading-relaxed mb-8">
                {language === 'ar' 
                  ? 'النجاح مبني على الشراكات الاستراتيجية التي تخلق قيمة لجميع الأطراف المعنية'
                  : 'Success is built on strategic partnerships that create value for all stakeholders'
                }
              </blockquote>
              
              <cite className="text-lg md:text-xl text-muted-foreground font-medium">
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