import React from 'react';
import { Globe, Download, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-premium-black text-primary-foreground py-16">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-2xl gradient-text mb-2">
                {t('hero.title')}
              </h3>
              <p className="text-primary-foreground/80">
                {t('hero.position')}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-secondary">{t('footer.quickLinks')}</h4>
            <div className="grid grid-cols-2 gap-2">
              {['#about', '#metrics', '#portfolio', '#services', '#achievements', '#contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(link);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-primary-foreground/70 hover:text-secondary transition-colors duration-300 text-sm"
                >
                  {t(`nav.${link.substring(1)}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Actions */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-secondary">{t('footer.connect')}</h4>
            
            <div className="space-y-4">
              <a
                href="mailto:info@ibraheemzhrani.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@ibraheemzhrani.com</span>
              </a>
              
              <a
                href="https://wa.me/966530536556"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+966530536556</span>
              </a>
              
              <a
                href="https://snapchat.com/add/ibraheemzhrani"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center relative">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-yellow-400 rounded-full absolute top-1 left-1"></div>
                </div>
                <span className="text-sm">ibraheemzhrani</span>
              </a>
              
              <a
                href="https://linkedin.com/in/ibraheem-alzhrani"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">{t('footer.linkedinProfile')}</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="border-secondary text-secondary hover:bg-secondary hover:text-premium-black"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'en' ? 'العربية' : 'English'}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              {t('footer.copyright')}
            </p>
            
            <p className="text-primary-foreground/40 text-xs">
              {t('footer.builtWith')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;