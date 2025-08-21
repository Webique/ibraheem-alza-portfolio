import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.metrics': 'Metrics',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.achievements': 'Achievements',
    'nav.partners': 'Partners',
    'nav.development': 'Development',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'IBRAHEEM ALZAHRANI',
    'hero.position': 'Business Leader',
    'hero.description': 'Business & F&B leader across KSA • Belgium • Kuwait — scaling brands, cutting costs, and elevating customer experience.',
    'hero.contact': 'Contact Me',
    'hero.cv': 'Download CV',
    'hero.linkedin': 'LinkedIn',
    
    // About Section
    'about.title': 'About Us',
    'about.description': 'We believe that the success of any project starts with smart operations, a strong brand identity, and a customer experience that lasts.\n\nWe help business owners transform ideas into leading brands through integrated solutions, including:\n\n• Building strong operational structures\n• Developing signature recipes and unique products\n• Designing strategies for growth and expansion\n• Ensuring the highest standards of quality and food safety\n\nOur journey began with a passion for the F&B sector and has expanded into retail, entertainment, and real estate. Today, we work with our clients as true partners, leveraging our expertise to create businesses that are more efficient, profitable, and sustainable.',
    'about.sectors': 'Sectors: F&B, retail, entertainment, real estate',
    'about.philosophy': 'Our Values: Passion • Partnership • Quality • Innovation',
    'about.years': 'Years Experience',
    'about.countries': 'Countries',
    'about.costReduction': 'Cost Reduction',
    'about.multiSector': 'Multi-sector leadership',
    'about.countriesList': 'KSA • Belgium • Kuwait',
    'about.efficiencyGains': 'Proven efficiency gains',
    
    // Metrics
    'metrics.title': 'Key Metrics',
    'metrics.years': 'Years Experience',
    'metrics.countries': 'Countries',
    'metrics.brands': 'Brands Managed',
    'metrics.opex': 'SAR 100M OPEX',
    'metrics.visitors': 'Visitors',
    'metrics.satisfaction': 'Guest Satisfaction',
    'metrics.accuracy': 'Data Accuracy',
    'metrics.closing': 'Faster Closing',
    'metrics.cost': 'Cost Reduction',
    'metrics.incidents': 'Fewer Incidents',
    'metrics.retention': 'Retention',
    'metrics.description': 'Data-driven results across multiple sectors and markets',
    

    
    // Services
    'services.title': 'Services',
    'services.1': 'Branch & Multi-Unit Operations Management',
    'services.2': 'Brand & Concept Development',
    'services.3': 'Operational Efficiency & Cost Control',
    'services.4': 'Training & Team Development',
    'services.5': 'New Store Opening Management',
    'services.6': 'Sales Growth & Customer Experience',
    'services.7': 'Quality & Food Safety Management',
    'services.8': 'Digital Transformation & Systems',
    'services.description': 'Integrated Operational & Consulting Solutions for Your Business Success',
    'services.cta.title': 'Ready to optimize your operations?',
    'services.cta.description': 'Let\'s discuss how we can drive efficiency and growth in your business.',
    
    // Achievements
    'achievements.title': 'Achievements',
    'achievements.1': '50%+ cost reduction with central factory & in-house coffee roastery.',
    'achievements.2': 'Zero violations with ISO 9001 food-safety compliance.',
    'achievements.3': 'Menu innovation, staff training, and performance programs driving growth.',
    'achievements.4': 'Launched cross-brand academy (+18% retention).',
    'achievements.5': '"Green Enterprise" sustainability certification.',
    'achievements.description': 'Measurable impact and recognition across operational excellence initiatives',
    'achievements.iso.title': 'ISO 9001 Certified Operations',
    'achievements.iso.description': 'Maintaining zero violations while implementing world-class quality management systems',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    'contact.ready': 'Ready to discuss your operational challenges and opportunities? Let\'s connect.',
    'contact.emailLabel': 'Email',
    'contact.instagram': 'Instagram',
    'contact.snapchat': 'Snapchat',
    'contact.domain': 'Domain',
    'contact.whatsapp': 'WhatsApp',
    'contact.linkedin': 'LinkedIn',
    'contact.location': 'Location',
    'contact.countries': 'Saudi Arabia, Riyadh',
    'contact.sending': 'Sending...',
    'contact.successTitle': 'Message sent successfully!',
    'contact.successDesc': 'Thank you for your message. I\'ll get back to you soon.',
    
    // Footer
    'footer.language': 'Language',
    'footer.copyright': '© 2025 Ibraheem Alzahrani',
    'footer.operations': 'Operations excellence across KSA, Belgium, and Kuwait',
    'footer.location': 'Saudi Arabia, Riyadh',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.linkedinProfile': 'LinkedIn Profile',
    'footer.cv': 'CV',
    'footer.builtWith': 'Built with excellence • Powered by innovation',
    
    // Education
    'education.title': 'Education',
    'education.degree': 'Bachelor\'s Degree in Accounting',
    'education.university': 'King Khalid University, KSA, 2017',
    
    // Development
    'development.title': 'Professional Development',
    'development.list': 'Leadership, TOT, Financial Accounting, ISO 9001 Quality Management, Emotional Intelligence, Project Planning, Report Writing, Time Management.',
    'development.description': 'Continuous learning and professional growth across core competencies',
    'development.leadership': 'Leadership',
    'development.tot': 'TOT',
    'development.financial': 'Financial Accounting',
    'development.iso': 'ISO 9001 Quality Management',
    'development.ei': 'Emotional Intelligence',
    'development.planning': 'Project Planning',
    'development.reports': 'Report Writing',
    'development.time': 'Time Management',
    
    // Partners
    'partners.title': 'Partners',
    'partners.list': 'Al-Maha Mall, Tulay, Triple Seven, Over Jar, Noble Chocolate',
    'partners.description': 'Trusted partnerships that drive mutual success and growth',
    'partners.philosophy': 'Success is built on strategic partnerships that create value for all stakeholders',

    'partners.tulay': 'Tulay',
    'partners.tripleSeven': 'Triple Seven',
    'partners.overJar': 'Over Jar',
    'partners.noble': 'Noble Chocolate',
    
    // NotFound
    'notfound.title': '404',
    'notfound.message': 'Oops! Page not found',
    'notfound.return': 'Return to Home'
  },
  ar: {
    // Navigation
    'nav.home': 'الصفحة الرئيسية',
    'nav.about': 'من نحن',
    'nav.metrics': 'الإنجازات بالأرقام',
    'nav.portfolio': 'أعمالي',
    'nav.services': 'الخدمات',
    'nav.achievements': 'النجاحات',
    'nav.partners': 'شركاء النجاح',
    'nav.development': 'التطوير المهني',
    'nav.contact': 'تواصل معي',
    
    // Hero Section
    'hero.title': 'إبراهيم الزهراني',
    'hero.position': 'قائد الأعمال',
    'hero.description': 'خبير قيادة الأعمال والضيافة عبر السعودية وبلجيكا والكويت — نمو العلامات، خفض التكاليف، ورفع تجربة العملاء.',
    'hero.contact': 'تواصل معي',
    'hero.cv': 'تحميل السيرة الذاتية',
    'hero.linkedin': 'لينكدإن',
    
    // About Section
    'about.title': 'من نحن',
    'about.description': 'نحن فريق يؤمن أن نجاح أي مشروع يبدأ من التشغيل الذكي، والهوية القوية، والتجربة التي تبقى في ذاكرة العملاء.\n\nنساعد أصحاب الأعمال على تحويل أفكارهم إلى علامات تجارية رائدة عبر حلول متكاملة تشمل:\n\n• بناء الهياكل التشغيلية القوية\n• تطوير الوصفات والمنتجات المميزة\n• صياغة استراتيجيات النمو والانتشار\n• ضمان أعلى معايير الجودة وسلامة الغذاء\n\nقصتنا بدأت بشغف في عالم الأغذية والمشروبات، وتطورت لتشمل التجزئة والترفيه والعقارات. اليوم، نعمل مع عملائنا كشركاء حقيقيين في النجاح، حيث نضع خبرتنا بين أيديهم لخلق أعمال أكثر كفاءة وربحية واستدامة.',
    'about.sectors': 'القطاعات: الأغذية والمشروبات، التجزئة، الترفيه، العقارات',
    'about.philosophy': 'قيمنا: الشغف • الشراكة • الجودة • الابتكار',
    'about.years': 'سنوات خبرة',
    'about.countries': 'دول',
    'about.costReduction': 'خفض تكاليف',
    'about.multiSector': 'قيادة متعددة القطاعات',
    'about.countriesList': 'السعودية • بلجيكا • الكويت',
    'about.efficiencyGains': 'مكاسب كفاءة مثبتة',
    
    // Metrics
    'metrics.title': 'الإنجازات بالأرقام',
    'metrics.years': 'سنوات خبرة',
    'metrics.countries': 'دول',
    'metrics.brands': 'علامات تجارية مدارة',
    'metrics.opex': '100 مليون ريال مصاريف تشغيل',
    'metrics.visitors': 'زائر',
    'metrics.satisfaction': 'رضا العملاء',
    'metrics.accuracy': 'دقة البيانات',
    'metrics.closing': 'إغلاق مالي أسرع',
    'metrics.cost': 'خفض تكاليف',
    'metrics.incidents': 'تقليل الحوادث',
    'metrics.retention': 'زيادة الاحتفاظ بالموظفين',
    'metrics.description': 'نتائج مدعومة بالبيانات عبر عدة قطاعات وأسواق',
    

    
    // Services
    'services.title': 'الخدمات',
    'services.1': 'إدارة وتشغيل الفروع',
    'services.2': 'تطوير العلامات التجارية والمفهوم',
    'services.3': 'الكفاءة التشغيلية وخفض التكاليف',
    'services.4': 'التدريب وتطوير الفرق',
    'services.5': 'إدارة افتتاح الفروع الجديدة',
    'services.6': 'نمو المبيعات وتجربة العملاء',
    'services.7': 'إدارة الجودة وسلامة الغذاء',
    'services.8': 'التحول الرقمي وإدارة الأنظمة',
    'services.description': 'حلول تشغيلية واستشارية متكاملة لنجاح أعمالك',
    'services.cta.title': 'هل أنت مستعد لتحسين عملياتك؟',
    'services.cta.description': 'دعنا نناقش كيف يمكننا دفع الكفاءة والنمو في عملك.',
    
    // Achievements
    'achievements.title': 'النجاحات',
    'achievements.1': 'خفض التكاليف بنسبة +50% عبر مصنع مركزي ومحمصة قهوة داخلية.',
    'achievements.2': 'صفر مخالفات مع التزام كامل بمعايير ISO 9001 وسلامة الغذاء.',
    'achievements.3': 'ابتكار قوائم، تدريب الموظفين، وبرامج أداء عززت النمو.',
    'achievements.4': 'إطلاق أكاديمية مشتركة للعلامات (+18% احتفاظ).',
    'achievements.5': 'شهادة الاستدامة "المؤسسة الخضراء".',
    'achievements.description': 'تأثير قابل للقياس وتقدير عبر مبادرات التميز التشغيلي',
    'achievements.iso.title': 'عمليات معتمدة ISO 9001',
    'achievements.iso.description': 'الحفاظ على صفر مخالفات مع تطبيق أنظمة إدارة الجودة العالمية',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.info': 'معلومات التواصل',
    'contact.ready': 'هل أنت مستعد لمناقشة تحدياتك وفرصك التشغيلية؟ دعنا نتواصل.',
    'contact.emailLabel': 'البريد الإلكتروني',
    'contact.instagram': 'إنستغرام',
    'contact.snapchat': 'سناب شات',
    'contact.domain': 'الدومين',
    'contact.whatsapp': 'واتساب',
    'contact.linkedin': 'لينكدإن',
    'contact.location': 'الموقع',
    'contact.countries': 'السعودية، الرياض',
    'contact.sending': 'جاري الإرسال...',
    'contact.successTitle': 'تم إرسال الرسالة بنجاح!',
    'contact.successDesc': 'شكراً لك على رسالتك. سأرد عليك قريباً.',
    
    // Footer
    'footer.language': 'اختيار اللغة',
    'footer.copyright': '© 2025 إبراهيم الزهراني',
    'footer.operations': 'التميز التشغيلي عبر السعودية، بلجيكا، والكويت',
    'footer.location': 'السعودية، الرياض',
    'footer.quickLinks': 'روابط سريعة',
    'footer.connect': 'تواصل معي',
    'footer.linkedinProfile': 'ملف لينكدإن',
    'footer.cv': 'السيرة الذاتية',
    'footer.builtWith': 'مبني بالتميز • مدعوم بالابتكار',
    
    // Education
    'education.title': 'التعليم',
    'education.degree': 'بكالوريوس محاسبة',
    'education.university': 'جامعة الملك خالد، السعودية، 2017',
    
    // Development
    'development.title': 'التطوير المهني',
    'development.list': 'القيادة والإدارة، تدريب المدربين، المحاسبة المالية، نظام الجودة ISO 9001، الذكاء العاطفي، تخطيط المشاريع، كتابة التقارير، إدارة الوقت.',
    'development.description': 'التعلم المستمر والنمو المهني عبر الكفاءات الأساسية',
    'development.leadership': 'القيادة',
    'development.tot': 'تدريب المدربين',
    'development.financial': 'المحاسبة المالية',
    'development.iso': 'نظام الجودة ISO 9001',
    'development.ei': 'الذكاء العاطفي',
    'development.planning': 'تخطيط المشاريع',
    'development.reports': 'كتابة التقارير',
    'development.time': 'إدارة الوقت',
    
    // Partners
    'partners.title': 'شركاء النجاح',
    'partners.list': 'المها مول، تولاي، تربل سفن، أوفر جار، نوبل شوكليت',
    'partners.description': 'شراكات موثوقة تدفع النجاح المتبادل والنمو',
    'partners.philosophy': 'النجاح مبني على الشراكات الاستراتيجية التي تخلق قيمة لجميع الأطراف المعنية',

    'partners.tulay': 'تولاي',
    'partners.tripleSeven': 'تربل سفن',
    'partners.overJar': 'أوفر جار',
    'partners.noble': 'نوبل شوكليت',
    
    // NotFound
    'notfound.title': '404',
    'notfound.message': 'أوه! الصفحة غير موجودة',
    'notfound.return': 'العودة للصفحة الرئيسية'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const isRTL = language === 'ar';

  useEffect(() => {
    // Set document direction and lang
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};