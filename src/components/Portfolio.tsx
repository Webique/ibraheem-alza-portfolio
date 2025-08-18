import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  const roles = [
    {
      title: t('portfolio.role1.title'),
      company: t('portfolio.role1.company'),
      period: t('portfolio.role1.period'),
      description: t('portfolio.role1.description'),
      current: true,
      logo: null,
    },
    {
      title: t('portfolio.role2.title'),
      company: t('portfolio.role2.company'),
      period: t('portfolio.role2.period'),
      current: false,
      logo: null,
    },
    {
      title: t('portfolio.role3.title'),
      company: t('portfolio.role3.company'),
      period: t('portfolio.role3.period'),
      current: false,
      logo: '/overjar.png',
    },
    {
      title: t('portfolio.role4.title'),
      company: t('portfolio.role4.company'),
      period: t('portfolio.role4.period'),
      current: false,
      logo: '/novell.jpeg',
    },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('portfolio.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('portfolio.description')}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary to-secondary"></div>

            {/* Roles */}
            <div className="space-y-12">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className={`relative pl-20 animate-slide-in-left`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-5 h-5 rounded-full border-4 border-background ${
                    role.current ? 'bg-secondary animate-glow' : 'bg-primary'
                  }`}></div>

                  {/* Content Card */}
                  <div className="card-premium p-6 md:p-8 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                          {role.title}
                        </h3>
                        <div className="flex items-center gap-4 text-muted-foreground mb-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <div className="flex items-center gap-4">
                              {role.logo && (
                                <img 
                                  src={role.logo} 
                                  alt={`${role.company} logo`}
                                  className="w-20 h-20 object-contain rounded-xl border-2 border-border shadow-lg"
                                />
                              )}
                              <span className="font-medium text-lg">{role.company}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{role.period}</span>
                          </div>
                        </div>
                      </div>

                      {role.current && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                          <TrendingUp className="w-4 h-4" />
                          <span>{t('portfolio.current')}</span>
                        </div>
                      )}
                    </div>

                    {role.description && (
                      <p className="text-foreground/80 leading-relaxed">
                        {role.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;