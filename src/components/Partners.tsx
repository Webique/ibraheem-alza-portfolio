import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Partners = () => {
  const { language } = useLanguage();

  // Single set of partners that will be duplicated in CSS for seamless loop
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
    <section id="partners" className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-width relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 gradient-text leading-tight pb-4">
            {language === 'ar' ? 'شركاء النجاح' : 'Partners'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'شراكات موثوقة تدفع النجاح المتبادل والنمو'
              : 'Trusted partnerships that drive mutual success and growth'
            }
          </p>
        </div>

        {/* Partners Marquee - EXACTLY THE SAME FOR BOTH LANGUAGES */}
        <div className="mb-20 overflow-hidden">
          <div className="partners-marquee">
            <div className="partners-track">
              {/* First set */}
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="partner-item">
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
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {/* Second set - exact duplicate for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="partner-item">
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
                          {partner.name.charAt(0)}
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
              <blockquote className="text-2xl md:text-3xl font-display italic text-foreground/90 leading-relaxed mb-6">
                {language === 'ar' 
                  ? 'النجاح مبني على الشراكات الاستراتيجية التي تخلق قيمة لجميع الأطراف المعنية'
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