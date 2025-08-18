import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MetricProps {
  number: string;
  label: string;
  suffix?: string;
  delay?: number;
}

const AnimatedMetric: React.FC<MetricProps> = ({ number, label, suffix = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`text-center transition-all duration-1000 ${isVisible ? 'animate-counter' : 'opacity-0'}`}>
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">
        {number}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};

const Metrics = () => {
  const { t } = useLanguage();

  const metrics = [
    { number: '9', suffix: '+', label: t('metrics.years'), delay: 100 },
    { number: '3', label: t('metrics.countries'), delay: 200 },
    { number: '6', label: t('metrics.brands'), delay: 300 },
    { number: '100M', label: t('metrics.opex'), delay: 400 },
    { number: '1M', suffix: '+', label: t('metrics.visitors'), delay: 500 },
    { number: '92', suffix: '%', label: t('metrics.satisfaction'), delay: 600 },
    { number: '98', suffix: '%', label: t('metrics.accuracy'), delay: 700 },
    { number: '57', suffix: '%', label: t('metrics.closing'), delay: 800 },
    { number: '15', suffix: '%', label: t('metrics.cost'), delay: 900 },
    { number: '30', suffix: '%', label: t('metrics.incidents'), delay: 1000 },
    { number: '18', suffix: '%', label: t('metrics.retention'), delay: 1100 },
  ];

  return (
    <section id="metrics" className="section-padding bg-gradient-hero text-primary-foreground">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary">
            {t('metrics.title')}
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Data-driven results across multiple sectors and markets
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <AnimatedMetric
              key={index}
              number={metric.number}
              suffix={metric.suffix}
              label={metric.label}
              delay={metric.delay}
            />
          ))}
        </div>

        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;