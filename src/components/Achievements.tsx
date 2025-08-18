import React from 'react';
import { Award, CheckCircle, Star, Trophy, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Achievements = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Zap,
      title: t('achievements.1'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Shield,
      title: t('achievements.2'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: TrendingUp,
      title: t('achievements.3'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Users,
      title: t('achievements.4'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Award,
      title: t('achievements.5'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container-width">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('achievements.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('achievements.description')}
          </p>
        </div>

        {/* Achievements List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`card-premium p-6 md:p-8 hover-lift animate-slide-in-left`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 ${achievement.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-lg text-foreground leading-relaxed text-center">
                    {achievement.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="card-premium p-8 md:p-12 bg-gradient-hero text-primary-foreground max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center animate-glow">
                <Trophy className="w-10 h-10 text-premium-black" />
              </div>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-secondary">
              {t('achievements.iso.title')}
            </h3>
            <p className="text-lg text-primary-foreground/80">
              {t('achievements.iso.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;