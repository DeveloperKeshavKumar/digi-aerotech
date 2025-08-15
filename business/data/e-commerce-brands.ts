import { BusinessData } from '@/business/business.types';
import {
  IconBrandMeta,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandYoutube,
  IconMapSearch,
  IconShoppingCart,
  IconCode,
  IconSeo,
  IconDeviceMobile,
  IconCalendar,
  IconUsers,
  IconUsersGroup,
  IconRobot,
  IconChartArea,
  IconAd,
  IconTrophy,
  IconSettings,
  IconMapPin,
  IconBrandGooglePlay,
  IconTarget,
  IconStar,
  IconShoppingBag,
  IconMail,
  IconPlanet,
  IconCreditCard,
  IconTrendingUp,
  IconPackage,
  IconTruck,
  IconGift
} from '@tabler/icons-react';
import React from 'react';

export const ecommerceBrands: BusinessData = {
  id: '16',
  image: '/business/ecommerce-brands-digital-marketing.webp',
  slug: 'ecommerce-brands-digital-marketing',
  name: 'E-commerce Brands Digital Marketing Agency',
  
  hero: {
    name: 'E-commerce Marketing Experts',
    initial: 'Scale Your Online Store with',
    headlineKeywords: [
      'Expert E-commerce Digital Marketing',
      'Online Sales Growth Strategies',
      'Conversion Rate Optimization'
    ],
    brandLine: 'Get 8X More Sales & Build Profitable Online Brand',
    subheadline: 'Our proven e-commerce marketing strategies help online stores, D2C brands, and digital retailers in India increase sales by 650%, boost conversion rates by 5X, and build loyal customer communities through data-driven performance marketing and optimization.',
    ctaButtons: [
      {
        text: 'Get Free E-commerce Marketing Audit',
        link: '/free-ecommerce-marketing-audit',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'View E-commerce Success Stories',
        link: '/ecommerce-marketing-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
    backgroundImage: '/business/modern-ecommerce-success.webp'
  },

  services: {
    title: 'Complete E-commerce Digital Marketing Services',
    subtitle: 'Everything Your Online Store Needs to Maximize Sales & Growth',
    description: 'Comprehensive digital marketing solutions designed specifically for e-commerce brands, online retailers, D2C companies, and digital marketplaces. Our conversion-focused strategies help e-commerce businesses increase online sales, optimize customer acquisition costs, and build profitable brand communities.',
    items: [
      {
        id: '360-digital-marketing',
        title: 'Complete E-commerce Digital Marketing',
        description: 'Integrated omnichannel marketing campaigns combining performance advertising, conversion optimization, customer lifecycle management, and brand building to maximize e-commerce revenue and profitability.',
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: '/services/360-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'Facebook & Instagram E-commerce Advertising',
        description: 'High-converting Meta advertising campaigns featuring product catalogs, dynamic retargeting, lookalike audiences, and social commerce integration that drive sales and build brand awareness.',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: '/services/meta-ads'
      },
      {
        id: 'google-ads',
        title: 'Google Ads for E-commerce',
        description: 'Strategic PPC campaigns including Shopping Ads, Search Ads, and Performance Max campaigns targeting high-intent buyers and product searches that maximize ROAS and drive qualified traffic.',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: '/services/google-ads'
      },
      {
        id: 'other-ads',
        title: 'YouTube & Performance Display Advertising',
        description: 'Video commerce advertising on YouTube and programmatic display campaigns showcasing products, unboxing videos, and brand stories that drive awareness and conversions.',
        icon: React.createElement(IconBrandYoutube, { size: 30 }),
        link: '/services/other-ads'
      },
      {
        id: 'local-seo',
        title: 'E-commerce Local SEO',
        description: 'Optimize for location-based product searches, "near me" shopping queries, and local marketplace visibility to capture customers looking for products in their area.',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: '/services/local-seo'
      },
      {
        id: 'ecommerce-marketing',
        title: 'Advanced E-commerce Optimization',
        description: 'Comprehensive conversion rate optimization, checkout funnel improvements, abandoned cart recovery, upselling strategies, and customer lifetime value maximization for online stores.',
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        link: '/services/ecommerce-marketing'
      },
      {
        id: 'web-design-development',
        title: 'E-commerce Website Development',
        description: 'High-converting e-commerce websites with mobile optimization, fast loading speeds, secure payment gateways, product showcases, and seamless shopping experiences that drive sales.',
        icon: React.createElement(IconCode, { size: 30 }),
        link: '/services/web-design-development'
      },
      {
        id: 'social-media-marketing',
        title: 'E-commerce Social Media Marketing',
        description: 'Strategic social commerce across Instagram, Facebook, TikTok, and Pinterest with product showcases, user-generated content, influencer partnerships, and community building.',
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: '/services/social-media-marketing'
      },
      {
        id: 'seo-services',
        title: 'E-commerce SEO Services',
        description: 'Comprehensive SEO for online stores targeting product keywords, category pages, brand terms, and commercial searches to increase organic traffic and sales.',
        icon: React.createElement(IconSeo, { size: 30 }),
        link: '/services/seo-services'
      },
      {
        id: 'gmb-services',
        title: 'Google Business Profile for E-commerce',
        description: 'Optimized Google My Business profiles for e-commerce brands with product photos, customer reviews, business information, and local shopping integration.',
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: '/services/gmb-services'
      },
      {
        id: 'aso-services',
        title: 'E-commerce App Store Optimization',
        description: 'Improve visibility for e-commerce mobile apps in app stores by optimizing for "online shopping", "product finder", and brand-specific searches that drive app downloads.',
        icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
        link: '/services/aso-services'
      },
      {
        id: 'mobile-apps-development',
        title: 'Custom E-commerce Mobile Apps',
        description: 'Feature-rich shopping apps with personalized recommendations, push notifications, loyalty programs, one-click checkout, and seamless mobile commerce experience.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: '/services/mobile-apps-development'
      },
      {
        id: 'website-maintenance',
        title: 'E-commerce Website Maintenance',
        description: 'Ongoing e-commerce support including product updates, inventory management, security patches, performance optimization, and seasonal campaign implementation.',
        icon: React.createElement(IconSettings, { size: 30 }),
        link: '/services/website-maintenance'
      },
      {
        id: 'leads-generation',
        title: 'E-commerce Customer Acquisition',
        description: 'Multi-channel lead generation using email capture, product recommendations, exclusive offers, and conversion-optimized campaigns that attract high-value customers.',
        icon: React.createElement(IconUsers, { size: 30 }),
        link: '/services/leads-generation'
      },
      {
        id: 'marketing-automation',
        title: 'E-commerce Marketing Automation',
        description: 'Automated email marketing, abandoned cart recovery, customer segmentation, personalized product recommendations, and lifecycle marketing campaigns for maximum revenue.',
        icon: React.createElement(IconRobot, { size: 30 }),
        link: '/services/marketing-automation'
      }
    ]
  },

  stats: {
    title: "Proven E-commerce Marketing Results",
    subtitle: "Data-Driven Success for Online Retail Businesses",
    items: [
      {
        icon: React.createElement(IconTrendingUp, { size: 30 }),
        title: 'Sales Growth',
        value: '650%',
        description: 'Average increase in online sales revenue within 6 months of our e-commerce marketing campaigns',
      },
      {
        icon: React.createElement(IconTarget, { size: 30 }),
        title: 'Conversion Rate',
        value: '5.2X',
        description: 'Improvement in e-commerce conversion rates through advanced optimization and user experience enhancements',
      },
      {
        icon: React.createElement(IconShoppingBag, { size: 30 }),
        title: 'Customer Acquisition',
        value: '420%',
        description: 'Growth in new customer acquisition and repeat purchase rates across all marketing channels',
      },
      {
        icon: React.createElement(IconStar, { size: 30 }),
        title: 'Customer Satisfaction',
        value: '4.9/5',
        description: 'Average improvement in customer experience and brand loyalty through strategic marketing',
      },
    ]
  },

  testimonials: {
    title: [
      { text: "E-commerce Brand " },
      { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
    ],
    subtitle: "How We've Helped Online Stores Scale to 7-Figure Revenue",
    description: "Read testimonials from successful e-commerce entrepreneurs, D2C brand owners, and online retailers who have transformed their businesses with our performance-driven marketing expertise.",
    items: [
      {
        id: '1',
        message: 'Our fashion e-commerce brand went from ₹50 lakhs to ₹5 crores annual revenue within 18 months thanks to their Facebook Ads and conversion optimization strategies. The ROAS consistently stays above 4X and our customer acquisition cost dropped by 60%.',
        highlight: '₹50 lakhs to ₹5 crores revenue and 4X ROAS',
        stars: 5,
        name: 'Priya Sharma',
        designation: 'Founder & CEO',
        company: 'StyleHub Fashion E-commerce Mumbai'
      },
      {
        id: '2',
        message: 'Their Google Shopping Ads and SEO strategies for our electronics store increased organic traffic by 480% and paid search revenue by 350%. We now dominate search results for our product categories and rank above Amazon for key terms.',
        highlight: '480% organic traffic increase and rank above Amazon',
        stars: 5,
        name: 'Rajesh Patel',
        designation: 'E-commerce Director',
        company: 'TechMart Electronics Ahmedabad'
      },
      {
        id: '3',
        message: 'The abandoned cart recovery and email marketing automation they implemented recovered ₹2.5 crores in lost sales last year. Our email marketing now generates 35% of total revenue and customer lifetime value doubled.',
        highlight: 'recovered ₹2.5 crores and doubled customer lifetime value',
        stars: 5,
        name: 'Vikram Singh',
        designation: 'Co-Founder',
        company: 'HomeDecor Online Store Delhi'
      },
      {
        id: '4',
        message: 'As a D2C skincare brand, their influencer marketing and social commerce strategies helped us achieve ₹10 crores revenue in our second year. We\'re now the fastest-growing beauty brand on Instagram with 500K+ followers.',
        highlight: '₹10 crores revenue and 500K+ followers',
        stars: 5,
        name: 'Kavya Reddy',
        designation: 'Brand Owner',
        company: 'GlowUp Skincare Bangalore'
      },
      {
        id: '5',
        message: 'Their mobile app development and ASO strategies for our grocery delivery business resulted in 200K+ app downloads and 300% increase in mobile orders. The app now drives 70% of our total sales.',
        stars: 4,
        name: 'Suresh Kumar',
        designation: 'CEO',
        company: 'FreshCart Grocery Delivery Chennai'
      },
      {
        id: '6',
        message: 'The marketplace optimization and Amazon advertising they manage for our home appliances brand increased our Amazon revenue by 800%. We\'re now a top-rated seller with consistent best-seller badges across multiple categories.',
        highlight: 'Amazon revenue increased by 800%',
        stars: 5,
        name: 'Anita Gupta',
        designation: 'E-commerce Manager',
        company: 'SmartHome Appliances Pune'
      }
    ],
  },

  cta: {
    title: 'Ready to Scale Your E-commerce Brand to 7-Figures?',
    subtitle: 'Increase Sales, Optimize Conversions, Build Profitable Online Business',
    description: 'Schedule your free e-commerce marketing consultation today. Our performance marketing experts will analyze your current online store and show you exactly how to increase sales, improve conversions, and build a profitable e-commerce empire.',
    backgroundColor: 'bg-gradient-to-r from-gray-900 to-black',
  },

  showSections: {
    hero: true,
    companies: false,
    services: true,
    stats: true,
    testimonials: true,
    cta: true,
  }
};
