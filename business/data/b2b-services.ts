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
  IconBriefcase,
  IconMail,
  IconPlanet,
  IconTrendingUp,
  IconBuilding,
  IconNetwork
} from '@tabler/icons-react';
import { Handshake } from 'lucide-react';
import React from 'react';

export const b2bServices: BusinessData = {
  id: '6',
  image: '/business/b2b-services-digital-marketing.webp',
  slug: 'b2b-services-digital-marketing',
  name: 'B2B Services Digital Marketing Agency',
  
  hero: {
    name: 'B2B Services Marketing Experts',
    initial: 'Scale Your B2B Business with',
    headlineKeywords: [
      'Expert B2B Digital Marketing',
      'Lead Generation Strategies',
      'Business Growth Solutions'
    ],
    brandLine: 'Get 5X More Qualified B2B Leads & Higher Conversion Rates',
    subheadline: 'Our proven B2B marketing strategies help service companies, consultants, and business solution providers in India generate 380% more qualified leads, shorten sales cycles, and build authority in their industries through targeted digital campaigns.',
    ctaButtons: [
      {
        text: 'Get Free B2B Marketing Audit',
        link: '/free-b2b-marketing-audit',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'View B2B Success Stories',
        link: '/b2b-marketing-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
    backgroundImage: '/business/professional-b2b-meeting.webp'
  },

  services: {
    title: 'Complete B2B Services Digital Marketing Solutions',
    subtitle: 'Everything Your Business Services Company Needs to Dominate Your Industry',
    description: 'Comprehensive digital marketing solutions designed specifically for B2B service providers, consultancies, agencies, and professional services. Our data-driven strategies help B2B businesses generate high-quality leads, establish thought leadership, and accelerate business growth.',
    items: [
      {
        id: '360-digital-marketing',
        title: 'Complete B2B Digital Marketing',
        description: 'Integrated omnichannel marketing campaigns combining LinkedIn marketing, content strategy, account-based marketing, and lead nurturing to maximize B2B visibility and drive qualified business opportunities.',
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: '/360-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'LinkedIn & Facebook B2B Advertising',
        description: 'Targeted Meta and LinkedIn ad campaigns focusing on decision-makers, industry professionals, and C-suite executives to generate high-value B2B leads and business partnerships.',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: '/meta-ads'
      },
      {
        id: 'google-ads',
        title: 'Google Ads for B2B Services',
        description: 'Strategic PPC campaigns targeting high-intent B2B searches like "business consulting services", "enterprise solutions", and industry-specific keywords that drive qualified business inquiries.',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: '/google-ads'
      },
      {
        id: 'other-ads',
        title: 'LinkedIn & YouTube B2B Advertising',
        description: 'Professional video content and thought leadership ads on LinkedIn and YouTube to build brand authority, showcase expertise, and attract enterprise clients.',
        icon: React.createElement(IconBrandYoutube, { size: 30 }),
        link: '/other-ads'
      },
      {
        id: 'local-seo',
        title: 'Local B2B SEO',
        description: 'Optimize for location-based B2B searches like "business services in [city]", "consultants near me", and "professional services [location]" to capture local business opportunities.',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: '/local-seo'
      },
      {
        id: 'ecommerce-marketing',
        title: 'B2B Sales Funnel Optimization',
        description: 'Conversion-optimized B2B sales funnels, proposal systems, client portals, and subscription service platforms that streamline the B2B buying process and increase deal closure rates.',
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        link: '/ecommerce-marketing'
      },
      {
        id: 'web-design-development',
        title: 'Professional B2B Website Development',
        description: 'Corporate-grade websites with case studies, client testimonials, service portfolios, lead capture forms, and professional credibility elements that convert business prospects into clients.',
        icon: React.createElement(IconCode, { size: 30 }),
        link: '/web-design-development'
      },
      {
        id: 'social-media-marketing',
        title: 'B2B Social Media Marketing',
        description: 'Strategic LinkedIn, Twitter, and industry platform management with thought leadership content, industry insights, and professional networking that builds business relationships.',
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: '/social-media-marketing'
      },
      {
        id: 'seo-services',
        title: 'B2B SEO Services',
        description: 'Comprehensive SEO for B2B services targeting keywords like "enterprise solutions", "business consulting", and industry-specific terms to increase organic visibility among decision-makers.',
        icon: React.createElement(IconSeo, { size: 30 }),
        link: '/seo-services'
      },
      {
        id: 'gmb-services',
        title: 'Google Business Profile for B2B',
        description: 'Optimized Google My Business profiles with professional imagery, client reviews, service descriptions, and regular updates to dominate local B2B searches.',
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: '/gmb-services'
      },
      {
        id: 'aso-services',
        title: 'B2B App Store Optimization',
        description: 'Improve visibility and downloads for B2B mobile applications in app stores by optimizing for "business apps", "enterprise software", and professional service searches.',
        icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
        link: '/aso-services'
      },
      {
        id: 'mobile-apps-development',
        title: 'Custom B2B Mobile Applications',
        description: 'Enterprise-grade mobile applications with client management, project tracking, communication tools, and business intelligence features tailored for B2B service delivery.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: '/mobile-apps-development'
      },
      {
        id: 'website-maintenance',
        title: 'B2B Website Maintenance',
        description: 'Ongoing website support including case study updates, service portfolio management, client testimonial integration, and performance optimization for professional B2B sites.',
        icon: React.createElement(IconSettings, { size: 30 }),
        link: '/website-maintenance'
      },
      {
        id: 'leads-generation',
        title: 'B2B Lead Generation',
        description: 'Multi-channel B2B lead generation using whitepapers, industry reports, webinars, and conversion-optimized campaigns that attract decision-makers and generate sales-ready opportunities.',
        icon: React.createElement(IconUsers, { size: 30 }),
        link: '/leads-generation'
      },
      {
        id: 'marketing-automation',
        title: 'B2B Marketing Automation',
        description: 'Automated email sequences, CRM integration, lead scoring, and nurture campaigns designed for complex B2B sales cycles and multi-stakeholder decision processes.',
        icon: React.createElement(IconRobot, { size: 30 }),
        link: '/marketing-automation'
      }
    ]
  },

  stats: {
    title: "Proven B2B Marketing Results",
    subtitle: "Data-Driven Success for Business Service Providers",
    items: [
      {
        icon: React.createElement(IconTrendingUp, { size: 30 }),
        title: 'Lead Quality',
        value: '380%',
        description: 'Average increase in qualified B2B leads within 90 days of our marketing campaigns',
      },
      {
        icon: React.createElement(Handshake, { size: 30 }),
        title: 'Deal Closure',
        value: '4.5X',
        description: 'Improvement in sales conversion rates and deal closure speed through optimized funnels',
      },
      {
        icon: React.createElement(IconBuilding, { size: 30 }),
        title: 'Enterprise Clients',
        value: '250%',
        description: 'Growth in enterprise client acquisition and high-value contract wins',
      },
      {
        icon: React.createElement(IconStar, { size: 30 }),
        title: 'Industry Authority',
        value: '4.9/5',
        description: 'Average improvement in brand authority and thought leadership positioning',
      },
    ]
  },

  testimonials: {
    title: [
      { text: "B2B Services " },
      { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
    ],
    subtitle: "How We've Helped B2B Companies Scale",
    description: "Read testimonials from successful B2B service providers, consultants, and business solution companies who have transformed their lead generation with our digital marketing expertise.",
    items: [
      {
        id: '1',
        message: 'Our B2B consulting firm\'s lead quality improved by 420% within 6 months of working with this team. Their LinkedIn campaigns and content strategy positioned us as industry thought leaders, resulting in 3 major enterprise contracts.',
        highlight: 'lead quality improved by 420% and 3 major enterprise contracts',
        stars: 5,
        name: 'Vikram Agarwal',
        designation: 'Managing Director',
        company: 'Strategic Business Solutions Mumbai'
      },
      {
        id: '2',
        message: 'The SEO and content marketing strategies they implemented got our IT services company ranking #1 for "enterprise software solutions India". Our monthly qualified leads increased from 15 to 180.',
        highlight: 'monthly qualified leads increased from 15 to 180',
        stars: 5,
        name: 'Priya Sharma',
        designation: 'CEO',
        company: 'TechForward Solutions Bangalore'
      },
      {
        id: '3',
        message: 'Their Google Ads and LinkedIn campaigns for our financial services firm have been phenomenal. We\'re getting C-level executive inquiries and our average deal size increased by 60%.',
        highlight: 'average deal size increased by 60%',
        stars: 5,
        name: 'Rajesh Malhotra',
        designation: 'Partner',
        company: 'Corporate Finance Associates Delhi'
      },
      {
        id: '4',
        message: 'As a management consulting firm, we needed marketing that reflected our expertise. Their thought leadership content and webinar campaigns generated 250 high-quality prospects in 4 months.',
        highlight: 'generated 250 high-quality prospects in 4 months',
        stars: 5,
        name: 'Anita Patel',
        designation: 'Senior Partner',
        company: 'Excellence Consulting Group Ahmedabad'
      },
      {
        id: '5',
        message: 'Their B2B marketing automation setup transformed our lead nurturing process. Our sales team now focuses on qualified opportunities, increasing our conversion rate by 75%.',
        stars: 4,
        name: 'Suresh Reddy',
        designation: 'Business Development Head',
        company: 'Enterprise Solutions Hyderabad'
      },
      {
        id: '6',
        message: 'The professional website and case study portfolio they developed for our HR consulting firm has been incredible. We now attract Fortune 500 clients and our revenue grew 300%.',
        highlight: 'revenue grew 300% and attract Fortune 500 clients',
        stars: 5,
        name: 'Meera Gupta',
        designation: 'Founder',
        company: 'People First Consulting Pune'
      }
    ],
  },

  cta: {
    title: 'Ready to Dominate Your B2B Market?',
    subtitle: 'Get More Qualified Leads, Close Bigger Deals, Scale Your B2B Business',
    description: 'Schedule your free B2B marketing consultation today. Our business marketing experts will analyze your current lead generation strategies and show you exactly how to attract high-value clients and accelerate growth.',
    backgroundColor: 'bg-gradient-to-r from-gray-900 to-black',
  },

  showSections: {
    hero: true,
    companies: true,
    services: true,
    stats: true,
    testimonials: true,
    cta: true,
  },

 
};
