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
  IconHeart,
  IconMail,
  IconPlanet,
  IconShoppingBag,
  IconTrendingUp,
  IconUserCheck,
  IconPhone,
  IconClock
} from '@tabler/icons-react';
import React from 'react';

export const b2cServices: BusinessData = {
  id: '14',
  image: '/business/b2c-services-digital-marketing.webp',
  slug: 'b2c-services-digital-marketing',
  name: 'B2C Services Digital Marketing Agency',

  hero: {
    name: 'B2C Services Marketing Experts',
    initial: 'Grow Your Consumer Service Business with',
    headlineKeywords: [
      'Expert B2C Digital Marketing',
      'Customer Acquisition Strategies',
      'Service Brand Growth Solutions'
    ],
    brandLine: 'Get 5X More Customers & Build Lasting Consumer Relationships',
    subheadline: 'Our proven B2C services marketing strategies help home services, personal care, lifestyle services, and consumer-focused businesses in India attract 450% more customers, build brand loyalty, and increase customer lifetime value through targeted digital campaigns.',
    ctaButtons: [
      {
        text: 'Get Free B2C Marketing Audit',
        link: '/free-b2c-marketing-audit',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'View B2C Success Stories',
        link: '/b2c-marketing-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
    backgroundImage: '/business/happy-customers-b2c-services.webp'
  },

  services: {
    title: 'Complete B2C Services Digital Marketing Solutions',
    subtitle: 'Everything Your Consumer Service Business Needs to Attract More Customers',
    businessName: 'b2c-services',
    description: 'Comprehensive digital marketing solutions designed specifically for B2C service providers, home services, personal care businesses, and consumer-focused enterprises. Our customer-centric strategies help B2C businesses attract quality customers, build brand trust, and create loyal customer communities.',
    items: [
      {
        id: '360-digital-marketing',
        title: 'Complete B2C Services Marketing',
        description: 'Integrated omnichannel marketing campaigns combining customer journey mapping, emotional branding, social proof strategies, and customer retention programs to maximize B2C service visibility and customer acquisition.',
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: '/services/360-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'Facebook & Instagram B2C Advertising',
        description: 'Targeted Meta advertising campaigns focusing on consumer demographics, lifestyle interests, and local service needs with emotional storytelling that drives service bookings and customer engagement.',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: '/services/meta-ads'
      },
      {
        id: 'google-ads',
        title: 'Google Ads for Consumer Services',
        description: 'Strategic PPC campaigns targeting high-intent consumer searches like "home cleaning services", "beauty salon near me", and lifestyle service keywords that connect with customers ready to book.',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: '/services/google-ads'
      },
      {
        id: 'other-ads',
        title: 'YouTube & Display B2C Advertising',
        description: 'Engaging video content and display advertising showcasing service benefits, customer testimonials, and lifestyle improvements to build consumer trust and drive service inquiries.',
        icon: React.createElement(IconBrandYoutube, { size: 30 }),
        link: '/services/other-ads'
      },
      {
        id: 'local-seo',
        title: 'Local B2C Services SEO',
        description: 'Dominate local consumer searches like "services near me", "[service type] in [city]", and neighborhood-specific keywords to attract customers in your service area.',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: '/services/local-seo'
      },
      {
        id: 'ecommerce-marketing',
        title: 'B2C Service Booking Optimization',
        description: 'Conversion-optimized booking systems, service package sales, subscription models, and customer retention strategies that maximize customer lifetime value and repeat bookings.',
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        link: '/services/ecommerce-marketing'
      },
      {
        id: 'web-design-development',
        title: 'B2C Services Website Development',
        description: 'Customer-friendly websites with service showcases, online booking systems, customer testimonials, before/after galleries, and trust-building elements that convert visitors into customers.',
        icon: React.createElement(IconCode, { size: 30 }),
        link: '/services/web-design-development'
      },
      {
        id: 'social-media-marketing',
        title: 'B2C Social Media Marketing',
        description: 'Strategic social media management across Facebook, Instagram, and TikTok with customer-focused content, service demonstrations, and community building that drives customer engagement.',
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: '/services/social-media-marketing'
      },
      {
        id: 'seo-services',
        title: 'Consumer Services SEO',
        description: 'Comprehensive SEO for B2C services targeting customer-focused keywords, service-related searches, and local market terms to increase visibility among potential customers.',
        icon: React.createElement(IconSeo, { size: 30 }),
        link: '/services/seo-services'
      },
      {
        id: 'gmb-services',
        title: 'Google Business Profile for B2C Services',
        description: 'Optimized Google My Business profiles with service photos, customer reviews, booking capabilities, and regular updates to dominate local consumer service searches.',
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: '/services/gmb-services'
      },
      {
        id: 'aso-services',
        title: 'B2C Service App Optimization',
        description: 'Improve visibility for consumer service apps in app stores by optimizing for "home services", "beauty services", and "lifestyle apps" searches that customers use.',
        icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
        link: '/services/aso-services'
      },
      {
        id: 'mobile-apps-development',
        title: 'Custom B2C Service Mobile Apps',
        description: 'User-friendly mobile applications with service booking, customer profiles, loyalty programs, push notifications, and seamless payment systems for enhanced customer experience.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: '/services/mobile-apps-development'
      },
      {
        id: 'website-maintenance',
        title: 'B2C Services Website Maintenance',
        description: 'Ongoing website support including service updates, customer testimonial management, seasonal promotions, and performance optimization for consumer service websites.',
        icon: React.createElement(IconSettings, { size: 30 }),
        link: '/services/website-maintenance'
      },
      {
        id: 'leads-generation',
        title: 'B2C Customer Acquisition',
        description: 'Multi-channel lead generation using customer referral programs, promotional offers, service trials, and conversion-optimized campaigns that attract quality consumers.',
        icon: React.createElement(IconUsers, { size: 30 }),
        link: '/services/leads-generation'
      },
      {
        id: 'marketing-automation',
        title: 'B2C Marketing Automation',
        description: 'Automated email and SMS campaigns for appointment reminders, follow-up services, customer feedback collection, loyalty rewards, and personalized service recommendations.',
        icon: React.createElement(IconRobot, { size: 30 }),
        link: '/services/marketing-automation'
      }
    ]
  },

  stats: {
    title: "Proven B2C Services Marketing Results",
    subtitle: "Data-Driven Success for Consumer Service Businesses",
    items: [
      {
        icon: React.createElement(IconTrendingUp, { size: 30 }),
        title: 'Customer Growth',
        value: '450%',
        description: 'Average increase in new customer acquisition within 90 days of our B2C marketing campaigns',
      },
      {
        icon: React.createElement(IconTarget, { size: 30 }),
        title: 'Service Bookings',
        value: '5.5X',
        description: 'Improvement in service booking rates and customer conversion through optimized marketing funnels',
      },
      {
        icon: React.createElement(IconHeart, { size: 30 }),
        title: 'Customer Retention',
        value: '380%',
        description: 'Growth in repeat customers and customer lifetime value through relationship building strategies',
      },
      {
        icon: React.createElement(IconStar, { size: 30 }),
        title: 'Customer Satisfaction',
        value: '4.8/5',
        description: 'Average improvement in customer satisfaction scores and service recommendation rates',
      },
    ]
  },

  testimonials: {
    title: [
      { text: "B2C Services " },
      { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
    ],
    subtitle: "How We've Helped Consumer Service Businesses Thrive",
    description: "Read testimonials from successful B2C service providers, home service businesses, and consumer-focused companies who have transformed their customer acquisition with our marketing expertise.",
    items: [
      {
        id: '1',
        message: 'Our home cleaning service business transformed completely within 5 months of working with this team. Their Google Ads and local SEO strategies increased our monthly bookings from 50 to 320, and we expanded to 3 new neighborhoods.',
        highlight: 'monthly bookings from 50 to 320 and expanded to 3 neighborhoods',
        stars: 5,
        name: 'Priya Sharma',
        designation: 'Business Owner',
        company: 'SparkleClean Home Services Mumbai'
      },
      {
        id: '2',
        message: 'Their Facebook and Instagram campaigns for our beauty salon brought in 280 new customers in 4 months. The before/after content strategy they created made our posts viral, and we\'re now booked 3 weeks in advance.',
        highlight: '280 new customers and booked 3 weeks in advance',
        stars: 5,
        name: 'Kavya Patel',
        designation: 'Salon Owner',
        company: 'Glamour Studio Ahmedabad'
      },
      {
        id: '3',
        message: 'As a personal fitness trainer, I struggled to find clients online. Their lead generation campaigns and Google My Business optimization now bring me 40-50 inquiries monthly, and my training slots are fully booked.',
        highlight: '40-50 inquiries monthly with fully booked slots',
        stars: 5,
        name: 'Rajesh Kumar',
        designation: 'Personal Fitness Trainer',
        company: 'FitLife Personal Training Delhi'
      },
      {
        id: '4',
        message: 'Their marketing automation system for our home maintenance service has been incredible. Customer retention improved by 70% and our average customer lifetime value doubled through personalized follow-ups.',
        highlight: '70% better retention and doubled customer lifetime value',
        stars: 5,
        name: 'Suresh Reddy',
        designation: 'Service Manager',
        company: 'FixIt Home Solutions Hyderabad'
      },
      {
        id: '5',
        message: 'The mobile app they developed for our laundry service revolutionized our business. Customers love the pickup scheduling feature, and our orders increased by 400% with the convenience factor.',
        stars: 4,
        name: 'Meera Gupta',
        designation: 'Laundry Business Owner',
        company: 'QuickWash Laundry Pune'
      },
      {
        id: '6',
        message: 'Their social media marketing for our pet grooming service created a loyal community of pet owners. Our monthly revenue increased 350% and we now have customers traveling from 5 different areas.',
        highlight: '350% revenue increase with customers from 5 areas',
        stars: 5,
        name: 'Vikram Singh',
        designation: 'Pet Grooming Specialist',
        company: 'Pawsome Care Bangalore'
      }
    ],
  },

  cta: {
    title: 'Ready to Transform Your Consumer Service Business?',
    subtitle: 'Get More Customers, Build Brand Loyalty, Grow Your B2C Service Revenue',
    description: 'Schedule your free B2C marketing consultation today. Our consumer marketing experts will analyze your current customer acquisition strategies and show you exactly how to attract more customers and build lasting relationships.',
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
