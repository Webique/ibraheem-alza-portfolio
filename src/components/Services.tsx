import React from 'react';
import { 
  Building2, 
  Lightbulb, 
  Target, 
  Users, 
  Store, 
  TrendingUp, 
  Shield, 
  Laptop,
  ChefHat,
  CheckCircle,
  Monitor,
  Search
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Building2,
      titleAr: 'خدمة إدارة وتشغيل الفروع',
      titleEn: 'Branch & Multi-Unit Operations Management',
      descriptionAr: 'نساعد أصحاب الأعمال على إدارة وتشغيل الفروع والمشاريع باحترافية لضمان الجودة والاستمرارية.',
      descriptionEn: 'We professionally manage and operate branches to ensure consistency, quality, and continuity.',
      pointsAr: [
        'وضع أنظمة تشغيل قياسية (SOPs) لكل قسم.',
        'متابعة الأداء التشغيلي اليومي والتأكد من الالتزام بالمعايير.',
        'مراقبة جودة المنتجات والخدمات المقدمة للعملاء.',
        'إدارة فرق العمل وجدولة المهام بشكل فعال.',
        'تحليل مؤشرات الأداء (KPIs) لمعرفة نقاط القوة والضعف.'
      ],
      pointsEn: [
        'Developing department-wide Standard Operating Procedures (SOPs).',
        'Monitoring daily operations and compliance with standards.',
        'Auditing product and service quality.',
        'Workforce management and effective scheduling.',
        'KPI tracking to identify strengths and gaps.'
      ],
      valueAr: 'رفع كفاءة التشغيل، تقليل الأخطاء، وتحسين تجربة العملاء.',
      valueEn: 'Higher efficiency, fewer errors, and a better guest experience.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: ChefHat,
      titleAr: 'خدمة تطوير العلامات التجارية والمفاهيم',
      titleEn: 'Brand Identity & Concept Development',
      descriptionAr: 'نبتكر أو نعيد تصميم هوية البراند بما يواكب السوق ويجذب العملاء.',
      descriptionEn: 'We craft or refresh your brand identity and concept to fit the market and attract customers.',
      pointsAr: [
        'تصميم/تحديث الهوية البصرية والشعار.',
        'ابتكار أو تطوير مفهوم المطعم أو الكافيه.',
        'تصميم قائمة منتجات تعكس الهوية.',
        'تحليل السوق وتمييز البراند عن المنافسين.',
        'تطوير استراتيجيات تسويقية متكاملة.'
      ],
      pointsEn: [
        'Visual identity and logo design or refresh.',
        'Restaurant/café concept ideation and development.',
        'Menu design aligned with brand positioning.',
        'Market analysis and differentiation strategy.',
        'Integrated marketing strategies.'
      ],
      valueAr: 'شخصية براند قوية وقدرة أعلى على المنافسة والانتشار.',
      valueEn: 'A distinctive brand with stronger competitiveness and reach.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: TrendingUp,
      titleAr: 'خدمة الكفاءة التشغيلية وضبط التكاليف',
      titleEn: 'Operational Efficiency & Cost Control',
      descriptionAr: 'نقلل المصروفات ونزيد الربحية دون المساس بالجودة.',
      descriptionEn: 'We reduce operating expenses and boost margins without compromising quality.',
      pointsAr: [
        'تحسين الشراء والتفاوض مع الموردين.',
        'سياسات مخزون ذكية لتقليل الهدر.',
        'متابعة التكاليف وتحديد فرص التوفير.',
        'تسعير المنتجات لتحقيق أفضل هامش ربح.',
        'تقارير تشغيلية ومالية دورية لصانع القرار.'
      ],
      pointsEn: [
        'Procurement optimization and vendor negotiations.',
        'Smart inventory policies to minimize waste.',
        'Cost tracking and savings opportunities.',
        'Menu pricing for optimal profit margins.',
        'Periodic financial & operational reporting.'
      ],
      valueAr: 'سيطرة أعلى على المصروفات وهوامش ربح أفضل.',
      valueEn: 'Greater cost control and improved profitability.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Users,
      titleAr: 'خدمة التدريب وتطوير الفريق',
      titleEn: 'Team Training & Development',
      descriptionAr: 'نُعِد برامج تدريب لبناء فرق قوية وقادرة على الأداء العالي.',
      descriptionEn: 'We design training programs that build high-performing teams.',
      pointsAr: [
        'خدمة العملاء وتجربة الضيف.',
        'سلامة الغذاء وجودة التشغيل.',
        'إعداد القادة والمديرين.',
        'مهارات البيع والإقناع.',
        'ورش عملية وتدريب أثناء العمل (OJT).'
      ],
      pointsEn: [
        'Customer service & guest experience.',
        'Food safety and operational quality.',
        'Leadership and supervisory skills.',
        'Sales techniques and upselling.',
        'Hands-on workshops and on-the-job training.'
      ],
      valueAr: 'استمرارية التميز وجودة الأداء على المدى الطويل.',
      valueEn: 'Sustained excellence and consistent performance.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Building2,
      titleAr: 'خدمة إدارة افتتاح الفروع الجديدة',
      titleEn: 'New Branch Launch Management',
      descriptionAr: 'نُدير افتتاح الفروع من الفكرة حتى التشغيل الكامل.',
      descriptionEn: 'End-to-end launch management from planning to full operations.',
      pointsAr: [
        'دراسة الجدوى التشغيلية للموقع.',
        'اختيار وتوريد المعدات واللوازم.',
        'تجهيز الموقع وفق المعايير التشغيلية.',
        'توظيف وتدريب الفريق قبل الافتتاح.',
        'إدارة تجربة الافتتاح (Soft/Grand Opening).'
      ],
      pointsEn: [
        'Operational feasibility for the location.',
        'Equipment sourcing and vendor coordination.',
        'Site setup to operational standards.',
        'Hiring and pre-opening training.',
        'Soft/grand opening management.'
      ],
      valueAr: 'اختصار الوقت والجهد وضمان انطلاقة ناجحة.',
      valueEn: 'Faster time-to-open and a flawless first impression.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: TrendingUp,
      titleAr: 'خدمة نمو المبيعات وتجربة العملاء',
      titleEn: 'Sales Growth & Guest Experience',
      descriptionAr: 'نرفع المبيعات بتحليل سلوك العملاء وتحسين التجربة.',
      descriptionEn: 'We grow sales through data-driven strategies and superior experiences.',
      pointsAr: [
        'تحليل رحلة العميل واقتراح حلول رفع المبيعات.',
        'برامج ولاء للاحتفاظ بالعملاء.',
        'حملات ترويجية مبتكرة.',
        'تحسين تجربة الضيف داخل الفروع.',
        'زيارات ميدانية وتوصيات دورية.'
      ],
      pointsEn: [
        'Customer journey analysis and revenue uplift ideas.',
        'Loyalty programs to improve retention.',
        'Creative promotional campaigns.',
        'In-store guest experience improvements.',
        'Field audits and periodic recommendations.'
      ],
      valueAr: 'إيرادات أعلى وعلاقة أقوى مع العملاء.',
      valueEn: 'Higher revenue and stronger customer relationships.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: CheckCircle,
      titleAr: 'خدمة الجودة وسلامة الغذاء',
      titleEn: 'Quality & Food Safety Systems',
      descriptionAr: 'نطبق أنظمة ومعايير عالمية لضمان أعلى مستويات الجودة والسلامة.',
      descriptionEn: 'Global-standard quality and food safety systems.',
      pointsAr: [
        'تطبيق معايير HACCP وISO.',
        'زيارات تفتيش وتدقيق دوري.',
        'تقارير نظافة وجودة تفصيلية.',
        'تدريب على الممارسات الصحية السليمة.',
        'متابعة الالتزام اليومي بمعايير السلامة.'
      ],
      pointsEn: [
        'Implementing HACCP and ISO frameworks.',
        'Regular audits and inspections.',
        'Detailed cleanliness & quality reports.',
        'Staff training on hygiene best practices.',
        'Daily compliance monitoring.'
      ],
      valueAr: 'حماية البراند وتعزيز ثقة العملاء.',
      valueEn: 'Brand protection and stronger customer trust.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Monitor,
      titleAr: 'خدمة التحول الرقمي والأنظمة',
      titleEn: 'Digital Transformation & Systems',
      descriptionAr: 'نُدخِل التكنولوجيا في التشغيل لرفع الكفاءة وسهولة المتابعة.',
      descriptionEn: 'Digital tools that streamline operations and visibility.',
      pointsAr: [
        'أنظمة نقاط البيع (POS) وإدارة المخزون.',
        'ربط مالي وتشغيلي عبر ERP.',
        'تقارير ذكية للمبيعات والمصروفات.',
        'لوحات تحكم لاتخاذ القرار بسرعة.',
        'حلول تقنية لتجربة عميل أسرع وأسهل.'
      ],
      pointsEn: [
        'POS and inventory management systems.',
        'ERP integration for finance and operations.',
        'Smart reporting for sales and expenses.',
        'Executive dashboards for faster decisions.',
        'Tech solutions for a faster, easier guest journey.'
      ],
      valueAr: 'رؤية أوضح وقرارات أسرع وتوفير في الوقت.',
      valueEn: 'Clearer insights, faster decisions, and time savings.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: ChefHat,
      titleAr: 'خدمة إعداد وتطوير الوصفات',
      titleEn: 'Recipe Development & Optimization',
      descriptionAr: 'نبتكر وصفات جديدة ونحسّن الحالية بما يواكب ذوق العملاء واتجاهات السوق.',
      descriptionEn: 'We create new recipes and optimize existing ones for taste, cost, and consistency.',
      pointsAr: [
        'ابتكار أطباق ومشروبات خاصة ومميزة.',
        'تحسين الوصفات لتقليل التكلفة وزيادة الجودة.',
        'توثيق احترافي للوصفات لضمان ثبات الطعم.',
        'حساب تكلفة كل وصفة وربطها بالربحية.',
        'تدريب الطهاة والبارستا على التطبيق العملي.'
      ],
      pointsEn: [
        'Signature dishes and beverages development.',
        'Cost-optimized recipe improvements.',
        'Professional recipe documentation for consistency.',
        'Recipe costing tied to profitability.',
        'Practical training for chefs and baristas.'
      ],
      valueAr: 'طابع خاص للبراند، ضبط جودة، ورضا عملاء أعلى.',
      valueEn: 'Unique brand identity, tighter quality control, and happier guests.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Search,
      titleAr: 'خدمة المتسوق الخفي',
      titleEn: 'Mystery Shopper Service',
      descriptionAr: 'ننفّذ زيارات سرّية للفروع لقياس تجربة الضيف على أرض الواقع واكتشاف فرص التحسين بسرعة.',
      descriptionEn: 'We conduct discreet, in-person visits to objectively measure the real guest experience and spot improvement opportunities.',
      pointsAr: [
        'زيارات دورية بأوقات مختلفة (ذروة/خارج الذروة) وفق سيناريوهات محددة.',
        'تقييم رحلة الضيف: الاستقبال، السرعة، الدقة، النظافة، جودة المنتج، المظهر، والالتزام بالسياسات.',
        'قياس البيع الإضافي (Upselling) والتعامل مع الشكاوى والطلبات الخاصة.',
        'نماذج تقييم مُوَحَّدة (Scorecards) مع أدلة داعمة عند الإمكان.',
        'تقرير تنفيذي لوحة متابعة بخطة إجراءات تصحيحية (CAPA) ومسؤوليات وجدول زمني.'
      ],
      pointsEn: [
        'Scheduled mystery visits at varied times (peak/off-peak) with predefined scenarios.',
        'Full journey audit: greeting, speed, accuracy, cleanliness, product quality, appearance, and policy compliance.',
        'Assessment of upselling, complaint handling, and special requests.',
        'Standardized scorecards with supporting evidence where possible.',
        'Executive report and dashboard with a corrective action plan (CAPA), owners, and timelines.'
      ],
      valueAr: 'رؤية محايدة لأداء الفروع، تحسين فوري للتجربة، رفع رضا الضيوف وزيادة المبيعات.',
      valueEn: 'Unbiased performance insights, faster improvements, higher guest satisfaction, and increased sales.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-width">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {language === 'ar' ? 'الخدمات' : 'Services'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'حلول تشغيلية واستشارية متكاملة لنجاح أعمالك'
              : 'Integrated Operational & Consulting Solutions for Your Business Success'
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-premium p-8 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-foreground leading-tight mb-2">
                    {language === 'ar' ? service.titleAr : service.titleEn}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === 'ar' ? service.descriptionAr : service.descriptionEn}
                  </p>
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-4">
                {/* Service Points */}
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                    {language === 'ar' ? 'تشمل الخدمة:' : 'Includes:'}
                  </h4>
                  <ul className="space-y-2">
                    {(language === 'ar' ? service.pointsAr : service.pointsEn).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Value Proposition */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1">
                    ✨ {language === 'ar' ? 'القيمة:' : 'Value:'}
                  </p>
                  <p className="text-sm font-medium">
                    {language === 'ar' ? service.valueAr : service.valueEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="card-premium p-8 md:p-12 bg-gradient-hero text-primary-foreground max-w-3xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-secondary">
              {language === 'ar' 
                ? 'هل أنت مستعد لتحسين عملياتك؟'
                : 'Are you ready to improve your operations?'
              }
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-6">
              {language === 'ar'
                ? 'دعنا نناقش كيف يمكننا دفع الكفاءة والنمو في عملك.'
                : 'Let\'s discuss how we can drive efficiency and growth in your business.'
              }
            </p>
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-secondary text-premium-black px-8 py-3 rounded-full font-semibold hover:bg-secondary/80 transition-colors duration-300 hover-lift"
            >
              {language === 'ar' ? 'تواصل معي' : 'Contact Me'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;