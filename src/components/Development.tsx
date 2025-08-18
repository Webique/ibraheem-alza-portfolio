import React from 'react';
import { BookOpen, Brain, Calculator, Award, Heart, ClipboardList, Clock, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Development = () => {
  const { t } = useLanguage();

  const skills = [
    { icon: Target, name: t('development.leadership'), color: 'text-secondary', bgColor: 'bg-secondary/10' },
    { icon: BookOpen, name: t('development.tot'), color: 'text-primary', bgColor: 'bg-primary/10' },
    { icon: Calculator, name: t('development.financial'), color: 'text-secondary', bgColor: 'bg-secondary/10' },
    { icon: Award, name: t('development.iso'), color: 'text-primary', bgColor: 'bg-primary/10' },
    { icon: Heart, name: t('development.ei'), color: 'text-secondary', bgColor: 'bg-secondary/10' },
    { icon: ClipboardList, name: t('development.planning'), color: 'text-primary', bgColor: 'bg-primary/10' },
    { icon: ClipboardList, name: t('development.reports'), color: 'text-secondary', bgColor: 'bg-secondary/10' },
    { icon: Clock, name: t('development.time'), color: 'text-primary', bgColor: 'bg-primary/10' },
  ];

  return (
    <section id="development" className="section-padding">
      <div className="container-width">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('development.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('development.description')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`card-premium p-6 text-center hover-lift animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
              </div>
              
              <h3 className="font-semibold text-sm text-foreground leading-tight">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="card-premium p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-premium-black" />
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 gradient-text">
              {t('education.title')}
            </h3>
            
            <div className="space-y-2">
              <p className="text-xl font-semibold text-foreground">
                {t('education.degree')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('education.university')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;