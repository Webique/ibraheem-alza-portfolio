import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-hero text-primary-foreground">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Ready to discuss your operational challenges and opportunities? Let's connect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="font-display text-2xl font-bold mb-6 text-secondary">
                  {t('contact.info')}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary-foreground">Email</p>
                      <a 
                        href="mailto:xhemax.4@gmail.com" 
                        className="text-secondary hover:text-secondary-hover transition-colors"
                      >
                        xhemax.4@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary-foreground">WhatsApp</p>
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
                      <p className="font-semibold text-primary-foreground">LinkedIn</p>
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

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary-foreground">Location</p>
                      <p className="text-primary-foreground/80">KSA • Belgium • Kuwait</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h4 className="font-display text-xl font-bold mb-4 text-secondary">
                  {t('languages.title')}
                </h4>
                <div className="space-y-2">
                  <p className="text-primary-foreground/90">{t('languages.arabic')}</p>
                  <p className="text-primary-foreground/90">{t('languages.english')}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t('contact.name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-secondary"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('contact.email')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-secondary"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder={t('contact.message')}
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-secondary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gold text-lg py-6 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-premium-black border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      {t('contact.send')}
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;