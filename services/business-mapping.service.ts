export interface BusinessData {
  id: string;
  name: string;
  image: string;
  slug: string;
  keywords: string[];
  painPoints: string[];
  benefits: string[];
  industries: string[];
  targetAudience: string;
  businessType: 'B2B' | 'B2C' | 'Both';
  urgencyFactors: string[];
  successMetrics: string[];
}

export const businessRegistry: Record<string, BusinessData> = {
  'for-real-estate': {
    id: '1',
    name: 'Real Estate',
    image: '/business/real-estate.jpeg',
    slug: 'for-real-estate',
    keywords: ['property', 'real estate', 'listings', 'buyers', 'sellers', 'agents', 'brokers'],
    painPoints: [
      'Low online visibility for property listings',
      'Difficulty generating qualified leads',
      'Competition from major real estate portals',
      'Lack of professional online presence',
      'Ineffective lead nurturing systems'
    ],
    benefits: [
      'Increased property inquiries',
      'Better lead qualification',
      'Enhanced brand credibility',
      'Streamlined property showcasing',
      'Automated lead management'
    ],
    industries: ['Residential Real Estate', 'Commercial Real Estate', 'Property Management'],
    targetAudience: 'property buyers, sellers, and investors',
    businessType: 'Both',
    urgencyFactors: ['Market competition', 'Seasonal demand', 'Interest rate changes'],
    successMetrics: ['Property inquiries', 'Lead conversion rate', 'Virtual tour engagement']
  },
  'for-hotel-resorts': {
    id: '2',
    name: 'Hotel & Resorts',
    image: '/business/hotel-resorts.jpeg',
    slug: 'for-hotel-resorts',
    keywords: ['hospitality', 'hotels', 'resorts', 'bookings', 'guests', 'travel', 'accommodation'],
    painPoints: [
      'High dependency on OTA commissions',
      'Seasonal booking fluctuations',
      'Competition from vacation rentals',
      'Poor direct booking conversion',
      'Inadequate guest experience management'
    ],
    benefits: [
      'Increased direct bookings',
      'Reduced OTA dependency',
      'Enhanced guest experience',
      'Better revenue management',
      'Improved online reputation'
    ],
    industries: ['Hotels', 'Resorts', 'Boutique Hotels', 'Business Hotels'],
    targetAudience: 'travelers, tourists, and business guests',
    businessType: 'B2C',
    urgencyFactors: ['Peak season preparation', 'OTA commission increases', 'Travel trend changes'],
    successMetrics: ['Direct booking rate', 'Revenue per room', 'Guest satisfaction scores']
  },
  'for-gyms-fitness': {
    id: '3',
    name: 'Gyms & Fitness',
    image: '/business/gyms.jpeg',
    slug: 'for-gyms-fitness',
    keywords: ['fitness', 'gym', 'workout', 'training', 'health', 'wellness', 'members'],
    painPoints: [
      'High membership churn rates',
      'Difficulty attracting new members',
      'Competition from online fitness',
      'Seasonal membership drops',
      'Poor member engagement'
    ],
    benefits: [
      'Increased membership signups',
      'Better member retention',
      'Enhanced community building',
      'Improved class bookings',
      'Stronger brand presence'
    ],
    industries: ['Gyms', 'Fitness Centers', 'Personal Training', 'Group Fitness'],
    targetAudience: 'fitness enthusiasts, health-conscious individuals',
    businessType: 'B2C',
    urgencyFactors: ['New Year fitness resolutions', 'Summer body preparation', 'Post-pandemic recovery'],
    successMetrics: ['Member acquisition cost', 'Retention rate', 'Class attendance']
  },
  'for-restaurants-cafes': {
    id: '4',
    name: 'Restaurants & Cafes',
    image: '/business/cafes.jpeg',
    slug: 'for-restaurants-cafes',
    keywords: ['restaurant', 'cafe', 'food', 'dining', 'delivery', 'takeout', 'cuisine'],
    painPoints: [
      'High delivery platform commissions',
      'Difficulty building customer loyalty',
      'Competition from food delivery apps',
      'Poor online ordering experience',
      'Ineffective social media presence'
    ],
    benefits: [
      'Increased direct orders',
      'Better customer loyalty',
      'Enhanced brand visibility',
      'Improved online reputation',
      'Streamlined operations'
    ],
    industries: ['Restaurants', 'Cafes', 'Quick Service', 'Fine Dining'],
    targetAudience: 'food lovers, local diners, delivery customers',
    businessType: 'B2C',
    urgencyFactors: ['Peak dining seasons', 'Food delivery competition', 'Local market changes'],
    successMetrics: ['Direct order percentage', 'Customer lifetime value', 'Online review ratings']
  },
  'for-fashion-brands': {
    id: '5',
    name: 'Fashion Brands',
    image: '/business/fashion-brands.jpeg',
    slug: 'for-fashion-brands',
    keywords: ['fashion', 'clothing', 'apparel', 'style', 'trends', 'retail', 'brands'],
    painPoints: [
      'Fast-changing fashion trends',
      'High customer acquisition costs',
      'Inventory management challenges',
      'Brand differentiation difficulties',
      'Seasonal sales fluctuations'
    ],
    benefits: [
      'Stronger brand identity',
      'Better trend adoption',
      'Increased brand loyalty',
      'Enhanced customer experience',
      'Higher conversion rates'
    ],
    industries: ['Fashion Retail', 'Designer Brands', 'Streetwear', 'Luxury Fashion'],
    targetAudience: 'fashion-conscious consumers, style enthusiasts',
    businessType: 'B2C',
    urgencyFactors: ['Fashion season changes', 'Trend cycles', 'Competitor launches'],
    successMetrics: ['Brand engagement', 'Return customer rate', 'Average order value']
  },
  'for-b2b-services': {
    id: '6',
    name: 'B2B Services',
    image: '/business/b2b-services.jpeg',
    slug: 'for-b2b-services',
    keywords: ['B2B', 'business services', 'enterprise', 'solutions', 'consulting', 'professional'],
    painPoints: [
      'Long sales cycles',
      'Complex decision-making processes',
      'Difficulty demonstrating ROI',
      'Lead qualification challenges',
      'Competition from established players'
    ],
    benefits: [
      'Shortened sales cycles',
      'Better lead qualification',
      'Enhanced credibility',
      'Improved thought leadership',
      'Stronger client relationships'
    ],
    industries: ['Consulting', 'Software Services', 'Professional Services', 'Technology Solutions'],
    targetAudience: 'business decision-makers, C-suite executives',
    businessType: 'B2B',
    urgencyFactors: ['Budget cycles', 'Technology upgrades', 'Regulatory changes'],
    successMetrics: ['Lead quality score', 'Sales cycle length', 'Client retention rate']
  },
  'for-consultants': {
    id: '7',
    name: 'Consultants & Coaches',
    image: '/business/consultants.jpeg',
    slug: 'for-consultants',
    keywords: ['consulting', 'coaching', 'advisory', 'expertise', 'guidance', 'professional'],
    painPoints: [
      'Difficulty establishing thought leadership',
      'Inconsistent lead generation',
      'Price justification challenges',
      'Competition from online courses',
      'Building trust with prospects'
    ],
    benefits: [
      'Enhanced thought leadership',
      'Consistent lead flow',
      'Premium positioning',
      'Stronger personal brand',
      'Improved client acquisition'
    ],
    industries: ['Business Consulting', 'Life Coaching', 'Executive Coaching', 'Specialized Advisory'],
    targetAudience: 'professionals seeking growth, business owners',
    businessType: 'Both',
    urgencyFactors: ['Industry changes', 'Skill development needs', 'Career transitions'],
    successMetrics: ['Consultation bookings', 'Client success stories', 'Referral rate']
  },
  'for-local-businesses': {
    id: '8',
    name: 'Local Businesses',
    image: '/business/locals.png',
    slug: 'for-local-businesses',
    keywords: ['local', 'community', 'neighborhood', 'small business', 'local services'],
    painPoints: [
      'Limited online visibility',
      'Competition from big chains',
      'Difficulty reaching local customers',
      'Poor Google My Business presence',
      'Lack of online reviews'
    ],
    benefits: [
      'Increased local visibility',
      'Better community connection',
      'Higher foot traffic',
      'Improved local rankings',
      'Enhanced reputation management'
    ],
    industries: ['Retail', 'Services', 'Healthcare', 'Professional Services'],
    targetAudience: 'local community members, nearby residents',
    businessType: 'Both',
    urgencyFactors: ['Local competition', 'Community events', 'Seasonal changes'],
    successMetrics: ['Local search rankings', 'Store visits', 'Local review ratings']
  },
  'for-pharma-companies': {
    id: '9',
    name: 'Pharma Companies',
    image: '/business/pharma.jpeg',
    slug: 'for-pharma-companies',
    keywords: ['pharmaceutical', 'healthcare', 'medicines', 'drugs', 'medical', 'health'],
    painPoints: [
      'Strict regulatory compliance',
      'Complex approval processes',
      'Trust and credibility building',
      'Educational content requirements',
      'Ethical marketing constraints'
    ],
    benefits: [
      'Enhanced credibility',
      'Better patient education',
      'Improved brand trust',
      'Regulatory compliant marketing',
      'Stronger healthcare partnerships'
    ],
    industries: ['Pharmaceuticals', 'Biotechnology', 'Medical Devices', 'Healthcare'],
    targetAudience: 'healthcare professionals, patients, medical institutions',
    businessType: 'Both',
    urgencyFactors: ['Regulatory changes', 'Drug launches', 'Clinical trial results'],
    successMetrics: ['Brand awareness', 'Healthcare professional engagement', 'Patient education reach']
  },
  'for-interior-designers': {
    id: '10',
    name: 'Interior Designers',
    image: '/business/interior-designers.jpeg',
    slug: 'for-interior-designers',
    keywords: ['interior design', 'home decor', 'space planning', 'renovation', 'architecture'],
    painPoints: [
      'Portfolio presentation challenges',
      'Difficulty showcasing design process',
      'Competition from DIY trends',
      'Client visualization difficulties',
      'Seasonal project variations'
    ],
    benefits: [
      'Stunning portfolio showcase',
      'Better client visualization',
      'Enhanced design credibility',
      'Improved project documentation',
      'Stronger brand differentiation'
    ],
    industries: ['Residential Design', 'Commercial Design', 'Hospitality Design', 'Retail Design'],
    targetAudience: 'homeowners, business owners, property developers',
    businessType: 'Both',
    urgencyFactors: ['Home renovation trends', 'Property development cycles', 'Design season peaks'],
    successMetrics: ['Project inquiries', 'Portfolio engagement', 'Client referrals']
  },
  'for-travel-tourism': {
    id: '11',
    name: 'Travel & Tourism',
    image: '/business/travel-tourism.jpeg',
    slug: 'for-travel-tourism',
    keywords: ['travel', 'tourism', 'vacation', 'trips', 'destinations', 'tours', 'adventure'],
    painPoints: [
      'Seasonal demand fluctuations',
      'High competition from OTAs',
      'Travel trend changes',
      'Destination marketing challenges',
      'Customer experience management'
    ],
    benefits: [
      'Increased direct bookings',
      'Better destination marketing',
      'Enhanced travel experience',
      'Improved customer loyalty',
      'Stronger brand presence'
    ],
    industries: ['Travel Agencies', 'Tour Operators', 'Destination Management', 'Adventure Tourism'],
    targetAudience: 'travelers, adventure seekers, vacation planners',
    businessType: 'B2C',
    urgencyFactors: ['Travel seasons', 'Destination trends', 'Economic factors'],
    successMetrics: ['Booking conversion rate', 'Customer satisfaction', 'Repeat bookings']
  },
  'for-doctors-clinics': {
    id: '12',
    name: 'Doctors & Clinics',
    image: '/business/doctors-clinics.jpeg',
    slug: 'for-doctors-clinics',
    keywords: ['healthcare', 'medical', 'doctors', 'clinics', 'patients', 'treatment', 'health'],
    painPoints: [
      'Patient acquisition challenges',
      'Online appointment scheduling',
      'Building patient trust',
      'Managing online reputation',
      'Healthcare compliance requirements'
    ],
    benefits: [
      'Increased patient bookings',
      'Better patient communication',
      'Enhanced practice reputation',
      'Streamlined operations',
      'Improved patient education'
    ],
    industries: ['General Practice', 'Specialist Clinics', 'Dental Clinics', 'Alternative Medicine'],
    targetAudience: 'patients, healthcare seekers, medical professionals',
    businessType: 'B2C',
    urgencyFactors: ['Health emergencies', 'Seasonal health issues', 'Medical practice competition'],
    successMetrics: ['Patient appointments', 'Online reviews', 'Patient retention rate']
  },
  'for-startups-entrepreneurs': {
    id: '13',
    name: 'Startups & Entrepreneurs',
    image: '/business/startups.jpeg',
    slug: 'for-startups-entrepreneurs',
    keywords: ['startup', 'entrepreneur', 'innovation', 'business', 'growth', 'venture', 'scale'],
    painPoints: [
      'Limited marketing budgets',
      'Brand awareness challenges',
      'Rapid scaling requirements',
      'Market validation needs',
      'Competition from established players'
    ],
    benefits: [
      'Cost-effective marketing',
      'Rapid brand building',
      'Scalable solutions',
      'Market penetration',
      'Investor-ready presentation'
    ],
    industries: ['Technology Startups', 'E-commerce', 'SaaS', 'Mobile Apps'],
    targetAudience: 'early adopters, tech-savvy users, investors',
    businessType: 'Both',
    urgencyFactors: ['Funding rounds', 'Product launches', 'Market entry timing'],
    successMetrics: ['User acquisition', 'Growth rate', 'Market traction']
  },
  'for-b2c-services': {
    id: '14',
    name: 'B2C Services',
    image: '/business/b2c-services.jpeg',
    slug: 'for-b2c-services',
    keywords: ['consumer services', 'B2C', 'retail', 'customer', 'service', 'personal'],
    painPoints: [
      'High customer acquisition costs',
      'Brand loyalty challenges',
      'Seasonal demand variations',
      'Price competition pressure',
      'Customer experience expectations'
    ],
    benefits: [
      'Lower acquisition costs',
      'Stronger customer loyalty',
      'Better brand positioning',
      'Enhanced customer experience',
      'Improved retention rates'
    ],
    industries: ['Personal Services', 'Home Services', 'Beauty & Wellness', 'Entertainment'],
    targetAudience: 'individual consumers, families, lifestyle-focused customers',
    businessType: 'B2C',
    urgencyFactors: ['Consumer trends', 'Seasonal peaks', 'Economic conditions'],
    successMetrics: ['Customer lifetime value', 'Retention rate', 'Brand loyalty score']
  },
  'for-educational-institutions': {
    id: '15',
    name: 'Educational Institutions',
    image: '/business/educational.jpeg',
    slug: 'for-educational-institutions',
    keywords: ['education', 'learning', 'students', 'courses', 'training', 'academic', 'school'],
    painPoints: [
      'Student enrollment challenges',
      'Competition from online education',
      'Parent and student engagement',
      'Educational outcome demonstration',
      'Technology adoption barriers'
    ],
    benefits: [
      'Increased enrollment',
      'Better student engagement',
      'Enhanced parent communication',
      'Improved brand reputation',
      'Streamlined admissions'
    ],
    industries: ['K-12 Schools', 'Higher Education', 'Training Institutes', 'Online Education'],
    targetAudience: 'students, parents, working professionals',
    businessType: 'B2C',
    urgencyFactors: ['Academic calendars', 'Admission seasons', 'Educational policy changes'],
    successMetrics: ['Enrollment rate', 'Student satisfaction', 'Academic performance']
  },
  'for-e-commerce-brands': {
    id: '16',
    name: 'E-Commerce Brands',
    image: '/business/ecommerce.jpeg',
    slug: 'for-e-commerce-brands',
    keywords: ['ecommerce', 'online shopping', 'retail', 'products', 'sales', 'digital commerce'],
    painPoints: [
      'High cart abandonment rates',
      'Fierce marketplace competition',
      'Customer acquisition costs',
      'Inventory management complexities',
      'Brand differentiation challenges'
    ],
    benefits: [
      'Reduced cart abandonment',
      'Increased conversion rates',
      'Better customer retention',
      'Enhanced brand loyalty',
      'Improved average order value'
    ],
    industries: ['Online Retail', 'Marketplace Sellers', 'D2C Brands', 'Digital Products'],
    targetAudience: 'online shoppers, digital consumers, mobile users',
    businessType: 'B2C',
    urgencyFactors: ['Shopping seasons', 'Competitor pricing', 'Platform algorithm changes'],
    successMetrics: ['Conversion rate', 'Customer acquisition cost', 'Lifetime value']
  }
};

export const getBusinessBySlug = (slug: string): BusinessData | undefined => {
  return businessRegistry[slug];
};

export const getAllBusinessSlugs = (): string[] => {
  return Object.keys(businessRegistry);
};

export const getBusinessesByType = (type: 'B2B' | 'B2C' | 'Both'): BusinessData[] => {
  return Object.values(businessRegistry).filter(business => 
    business.businessType === type || business.businessType === 'Both'
  );
};