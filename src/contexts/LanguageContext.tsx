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
    'nav.about': 'About',
    'nav.metrics': 'Metrics',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.achievements': 'Achievements',
    'nav.partners': 'Partners',
    'nav.development': 'Development',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'IBRAHEEM ALZAHRANI',
    'hero.position': 'Operations Manager',
    'hero.description': 'Operations & F&B leader across KSA • Belgium • Kuwait — scaling brands, cutting costs, and elevating customer experience.',
    'hero.contact': 'Contact Me',
    'hero.cv': 'Download CV',
    'hero.linkedin': 'LinkedIn',
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'Operations Manager with 9+ years in F&B (KSA, Belgium, Kuwait). Proven record of 50%+ cost reductions, multi-site scaling, and double-digit sales growth. Expert in strategic planning, supply-chain optimization, and cross-cultural leadership. Upholds ISO 9001 and food-safety standards. Builds high-performance teams, negotiates win–win vendor contracts, and turns data into decisive, growth-focused action.',
    'about.sectors': 'Sectors: F&B, retail, entertainment, real estate',
    'about.philosophy': 'Philosophy: efficiency • innovation • customer satisfaction',
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
    
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.role1.title': 'Group Operations Manager',
    'portfolio.role1.company': 'Al-Maha Group',
    'portfolio.role1.period': '2024–Present',
    'portfolio.role1.description': 'Multi-sector ops (F&B, retail, real estate, manufacturing, entertainment). Centralized procurement → 15% cost cut. Unified SOPs → 92% guest satisfaction. Led 250+ staff, launched training academy (+18% retention). ERP/POS rollout → 98% accuracy, 57% faster closing. Earned Green Enterprise certificate.',
    'portfolio.description': 'Leadership roles across multiple sectors and markets',
    'portfolio.current': 'Current',
    
    'portfolio.role2.title': 'Barista Head',
    'portfolio.role2.company': 'Ground Handling',
    'portfolio.role2.period': '2022–2023',
    
    'portfolio.role3.title': 'Area Supervisor',
    'portfolio.role3.company': 'OverJar',
    'portfolio.role3.period': '2020–2022',
    
    'portfolio.role4.title': 'Chief Executive Director',
    'portfolio.role4.company': 'Noble Chocolate & Café',
    'portfolio.role4.period': '2016–2019',
    
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
    'services.description': 'Comprehensive operational excellence across multiple business functions',
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
    'contact.whatsapp': 'WhatsApp',
    'contact.linkedin': 'LinkedIn',
    'contact.location': 'Location',
    'contact.countries': 'KSA • Belgium • Kuwait',
    'contact.sending': 'Sending...',
    'contact.successTitle': 'Message sent successfully!',
    'contact.successDesc': 'Thank you for your message. I\'ll get back to you soon.',
    
    // Footer
    'footer.language': 'Language',
    'footer.copyright': '© 2025 Ibraheem Alzahrani',
    'footer.operations': 'Operations excellence across KSA, Belgium, and Kuwait',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.linkedinProfile': 'LinkedIn Profile',
    'footer.cv': 'CV',
    'footer.builtWith': 'Built with excellence • Powered by innovation',
    
    // Education
    'education.title': 'Education',
    'education.degree': 'Bachelor\'s Degree in Accounting',
    'education.university': 'King Khalid University, KSA, 2017',
    
    // Languages
    'languages.title': 'Languages',
    'languages.arabic': 'Arabic (Native)',
    'languages.english': 'English (Fluent)',
    
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
    'partners.alMaha': 'Al-Maha Mall',
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
    'nav.about': 'نبذة عني',
    'nav.metrics': 'الإنجازات بالأرقام',
    'nav.portfolio': 'أعمالي',
    'nav.services': 'الخدمات',
    'nav.achievements': 'النجاحات',
    'nav.partners': 'شركاء النجاح',
    'nav.development': 'التطوير المهني',
    'nav.contact': 'تواصل معي',
    
    // Hero Section
    'hero.title': 'إبراهيم الزهراني',
    'hero.position': 'مدير عمليات',
    'hero.description': 'خبير قيادة العمليات والضيافة عبر السعودية وبلجيكا والكويت — نمو العلامات، خفض التكاليف، ورفع تجربة العملاء.',
    'hero.contact': 'تواصل معي',
    'hero.cv': 'تحميل السيرة الذاتية',
    'hero.linkedin': 'لينكدإن',
    
    // About Section
    'about.title': 'نبذة عني',
    'about.description': 'مدير عمليات بخبرة تتجاوز 9 سنوات في قطاع الأغذية والمشروبات (السعودية، بلجيكا، الكويت). سجل مثبت في خفض التكاليف بأكثر من 50% وتوسيع فروع متعددة وتحقيق نمو مضاعف في المبيعات. خبير في التخطيط الاستراتيجي وسلاسل الإمداد وقيادة الفرق متعددة الثقافات، مع التزام بمعايير ISO 9001 وسلامة الغذاء. متمكن في بناء فرق عالية الأداء وعقود توريد رابحة وتحويل البيانات إلى قرارات نمو فعّالة.',
    'about.sectors': 'القطاعات: الأغذية والمشروبات، التجزئة، الترفيه، العقارات',
    'about.philosophy': 'الفلسفة: الكفاءة • الابتكار • رضا العملاء',
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
    
    // Portfolio
    'portfolio.title': 'أعمالي',
    'portfolio.role1.title': 'مدير العمليات الجماعية',
    'portfolio.role1.company': 'مجموعة المها',
    'portfolio.role1.period': '2024 – حتى الآن',
    'portfolio.role1.description': 'قيادة العمليات في عدة قطاعات (الأغذية والمشروبات، التجزئة، العقارات، التصنيع، الترفيه). المشتريات المركزية → خفض التكاليف 15%. إجراءات تشغيل موحدة → رضا العملاء 92%. قيادة أكثر من 250 موظف وإطلاق أكاديمية تدريب (+18% احتفاظ). دمج أنظمة ERP/POS → %98 دقة، %57 إغلاق أسرع. شهادة "المؤسسة الخضراء".',
    'portfolio.description': 'الأدوار القيادية عبر عدة قطاعات وأسواق',
    'portfolio.current': 'الحالي',
    
    'portfolio.role2.title': 'رئيس قسم الباريستا',
    'portfolio.role2.company': 'جراوند هاندلينغ',
    'portfolio.role2.period': '2022 – 2023',
    
    'portfolio.role3.title': 'مشرف منطقة',
    'portfolio.role3.company': 'أوفر جار',
    'portfolio.role3.period': '2020 – 2022',
    
    'portfolio.role4.title': 'المدير التنفيذي',
    'portfolio.role4.company': 'نوبل شوكليت آند كافيه',
    'portfolio.role4.period': '2016 – 2019',
    
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
    'services.description': 'التميز التشغيلي الشامل عبر وظائف الأعمال المتعددة',
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
    'contact.whatsapp': 'واتساب',
    'contact.linkedin': 'لينكدإن',
    'contact.location': 'الموقع',
    'contact.countries': 'السعودية • بلجيكا • الكويت',
    'contact.sending': 'جاري الإرسال...',
    'contact.successTitle': 'تم إرسال الرسالة بنجاح!',
    'contact.successDesc': 'شكراً لك على رسالتك. سأرد عليك قريباً.',
    
    // Footer
    'footer.language': 'اختيار اللغة',
    'footer.copyright': '© 2025 إبراهيم الزهراني',
    'footer.operations': 'التميز التشغيلي عبر السعودية وبلجيكا والكويت',
    'footer.quickLinks': 'روابط سريعة',
    'footer.connect': 'تواصل معي',
    'footer.linkedinProfile': 'ملف لينكدإن',
    'footer.cv': 'السيرة الذاتية',
    'footer.builtWith': 'مبني بالتميز • مدعوم بالابتكار',
    
    // Education
    'education.title': 'التعليم',
    'education.degree': 'بكالوريوس محاسبة',
    'education.university': 'جامعة الملك خالد، السعودية، 2017',
    
    // Languages
    'languages.title': 'اللغات',
    'languages.arabic': 'العربية (لغة أم)',
    'languages.english': 'الإنجليزية (بطلاقة)',
    
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
    'partners.alMaha': 'المها مول',
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
  const [language, setLanguage] = useState<Language>('en');
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