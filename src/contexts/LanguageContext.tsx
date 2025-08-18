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
    
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.role1.title': 'Group Operations Manager',
    'portfolio.role1.company': 'Al-Maha Group',
    'portfolio.role1.period': '2024–Present',
    'portfolio.role1.description': 'Multi-sector ops (F&B, retail, real estate, manufacturing, entertainment). Centralized procurement → 15% cost cut. Unified SOPs → 92% guest satisfaction. Led 250+ staff, launched training academy (+18% retention). ERP/POS rollout → 98% accuracy, 57% faster closing. Earned Green Enterprise certificate.',
    
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
    
    // Achievements
    'achievements.title': 'Achievements',
    'achievements.1': '50%+ cost reduction with central factory & in-house coffee roastery.',
    'achievements.2': 'Zero violations with ISO 9001 food-safety compliance.',
    'achievements.3': 'Menu innovation, staff training, and performance programs driving growth.',
    'achievements.4': 'Launched cross-brand academy (+18% retention).',
    'achievements.5': '"Green Enterprise" sustainability certification.',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    
    // Footer
    'footer.language': 'Language',
    'footer.copyright': '© 2025 Ibraheem Alzahrani',
    
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
    
    // Partners
    'partners.title': 'Partners',
    'partners.list': 'Al-Maha Mall, Tulay, Triple Seven, Over Jar, Noble Chocolate'
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
    
    // Portfolio
    'portfolio.title': 'أعمالي',
    'portfolio.role1.title': 'مدير العمليات الجماعية',
    'portfolio.role1.company': 'مجموعة المها',
    'portfolio.role1.period': '2024 – حتى الآن',
    'portfolio.role1.description': 'قيادة العمليات في عدة قطاعات (الأغذية والمشروبات، التجزئة، العقارات، التصنيع، الترفيه). المشتريات المركزية → خفض التكاليف 15%. إجراءات تشغيل موحدة → رضا العملاء 92%. قيادة أكثر من 250 موظف وإطلاق أكاديمية تدريب (+18% احتفاظ). دمج أنظمة ERP/POS → %98 دقة، %57 إغلاق أسرع. شهادة "المؤسسة الخضراء".',
    
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
    
    // Achievements
    'achievements.title': 'النجاحات',
    'achievements.1': 'خفض التكاليف بنسبة +50% عبر مصنع مركزي ومحمصة قهوة داخلية.',
    'achievements.2': 'صفر مخالفات مع التزام كامل بمعايير ISO 9001 وسلامة الغذاء.',
    'achievements.3': 'ابتكار قوائم، تدريب الموظفين، وبرامج أداء عززت النمو.',
    'achievements.4': 'إطلاق أكاديمية مشتركة للعلامات (+18% احتفاظ).',
    'achievements.5': 'شهادة الاستدامة "المؤسسة الخضراء".',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.info': 'معلومات التواصل',
    
    // Footer
    'footer.language': 'اختيار اللغة',
    'footer.copyright': '© 2025 إبراهيم الزهراني',
    
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
    
    // Partners
    'partners.title': 'شركاء النجاح',
    'partners.list': 'المها مول، تولاي، تربل سفن، أوفر جار، نوبل شوكليت'
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