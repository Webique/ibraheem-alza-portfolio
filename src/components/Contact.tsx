import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-gradient-hero text-primary-foreground">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              {t('contact.ready')}
            </p>
          </div>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div>
              <h3 className="font-display text-2xl font-bold mb-6 text-secondary text-center">
                {t('contact.info')}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">{t('contact.emailLabel')}</p>
                    <a 
                      href="mailto:info@ibraheemzhrani.com" 
                      className="text-secondary hover:text-secondary-hover transition-colors"
                    >
                      info@ibraheemzhrani.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">{t('contact.instagram')}</p>
                    <a 
                      href="https://instagram.com/ibraheemzhrani" 
                      className="text-secondary hover:text-secondary-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @ibraheemzhrani
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">{t('contact.snapchat')}</p>
                    <a 
                      href="https://snapchat.com/add/ibraheemzhrani" 
                      className="text-secondary hover:text-secondary-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ibraheemzhrani
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">{t('contact.whatsapp')}</p>
                    <a 
                      href="https://wa.me/966530536556" 
                      className="text-secondary hover:text-secondary-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +966530536556
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">{t('contact.linkedin')}</p>
                    <a 
                      href="https://linkedin.com/in/ibraheem-alzhrani" 
                      className="text-secondary hover:text-secondary-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/ibraheem-alzhrani
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:col-span-2 lg:col-span-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">{t('contact.location')}</p>
                    <p className="text-primary-foreground/80">{t('contact.countries')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="text-center">
              <h4 className="font-display text-xl font-bold mb-4 text-secondary">
                {t('languages.title')}
              </h4>
              <div className="space-y-2">
                <p className="text-primary-foreground/90">{t('languages.arabic')}</p>
                <p className="text-primary-foreground/90">{t('languages.english')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;