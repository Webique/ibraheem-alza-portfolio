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
            
            <p className="text-primary-foreground/60 leading-relaxed">
              Operations excellence across KSA, Belgium, and Kuwait
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-secondary">Quick Links</h4>
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
            <h4 className="font-semibold text-lg text-secondary">Connect</h4>
            
            <div className="space-y-4">
              <a
                href="mailto:xhemax.4@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">xhemax.4@gmail.com</span>
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
                href="https://linkedin.com/in/ibraheem-alzhrani"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn Profile</span>
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
              
              <Button
                variant="outline"
                size="sm"
                className="border-secondary text-secondary hover:bg-secondary hover:text-premium-black"
              >
                <Download className="w-4 h-4 mr-2" />
                CV
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
              Built with excellence • Powered by innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;