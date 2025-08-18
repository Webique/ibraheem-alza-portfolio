import React from 'react';
import { 
  Building2, 
  Lightbulb, 
  Target, 
  Users, 
  Store, 
  TrendingUp, 
  Shield, 
  Laptop 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('services.1'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Lightbulb,
      title: t('services.2'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Target,
      title: t('services.3'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Users,
      title: t('services.4'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Store,
      title: t('services.5'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: TrendingUp,
      title: t('services.6'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Shield,
      title: t('services.7'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Laptop,
      title: t('services.8'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-width">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive operational excellence across multiple business functions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-premium p-6 hover-lift animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              
              <h3 className="font-semibold text-lg text-foreground leading-tight">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="card-premium p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Ready to optimize your operations?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Let's discuss how we can drive efficiency and growth in your business.
            </p>
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-gold px-8 py-3 font-semibold"
            >
              {t('hero.contact')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;