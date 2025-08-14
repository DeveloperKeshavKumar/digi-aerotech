import { BusinessData } from '@/types/business.types';
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
  IconRocket,
  IconMail,
  IconPlanet,
  IconTrendingUp,
  IconBrain,
  IconBulb,
  IconGraph
} from '@tabler/icons-react';
import { Lightbulb } from 'lucide-react';
import React from 'react';

export const startupsEntrepreneurs: BusinessData = {
  id: '13',
  image: '/business/startups-entrepreneurs-digital-marketing.webp',
  slug: 'startups-entrepreneurs-digital-marketing',
  name: 'Startups & Entrepreneurs Digital Marketing Agency',
  
  hero: {
    name: 'Startup & Entrepreneur Marketing Experts',
    initial: 'Launch & Scale Your Startup with',
    headlineKeywords: [
      'Expert Startup Digital Marketing',
      'Entrepreneur Growth Strategies',
      'Innovation Brand Building'
    ],
    brandLine: 'Get 7X Faster Growth & Build Disruptive Brand Presence',
    subheadline: 'Our proven startup marketing strategies help entrepreneurs, tech startups, and innovative companies in India achieve 520% faster growth, build investor confidence, and scale from idea to market leader through data-driven digital campaigns.',
    ctaButtons: [
      {
        text: 'Get Free Startup Marketing Audit',
        link: '/free-startup-marketing-audit',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'View Startup Success Stories',
        link: '/startup-marketing-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
    backgroundImage: '/business/innovative-startup-workspace.webp'
  },

  services: {
    title: 'Complete Startup & Entrepreneur Digital Marketing Services',
    subtitle: 'Everything Your Startup Needs to Disrupt Markets & Scale Fast',
    description: 'Comprehensive digital marketing solutions designed specifically for startups, entrepreneurs, tech companies, and innovative businesses. Our growth-hacking strategies help startups build brand awareness, attract investors, acquire customers, and scale rapidly in competitive markets.',
    items: [
      {
        id: '360-digital-marketing',
        title: 'Complete Startup Digital Marketing',
        description: 'Integrated omnichannel marketing campaigns combining growth hacking, viral marketing, investor relations, and customer acquisition strategies to maximize startup visibility and accelerate business growth.',
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: '/360-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'Social Media Startup Advertising',
        description: 'Targeted Meta advertising campaigns focusing on early adopters, tech enthusiasts, and potential customers with disruptive messaging that builds startup buzz and drives user acquisition.',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: '/meta-ads'
      },
      {
        id: 'google-ads',
        title: 'Google Ads for Startups',
        description: 'Strategic PPC campaigns targeting innovation-focused searches, problem-solution keywords, and startup ecosystem terms that connect with potential customers and investors.',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: '/google-ads'
      },
      {
        id: 'other-ads',
        title: 'LinkedIn & YouTube Startup Advertising',
        description: 'Professional advertising on LinkedIn and YouTube targeting investors, industry leaders, and potential partners with startup pitch videos and thought leadership content.',
        icon: React.createElement(IconBrandYoutube, { size: 30 }),
        link: '/other-ads'
      },
      {
        id: 'local-seo',
        title: 'Startup Local SEO',
        description: 'Optimize for location-based startup searches, innovation hubs, and local entrepreneurship keywords to build community presence and attract local talent and customers.',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: '/local-seo'
      },
      {
        id: 'ecommerce-marketing',
        title: 'Startup Product Launch Optimization',
        description: 'Conversion-optimized product launch strategies, subscription models, freemium conversions, and customer onboarding funnels that maximize startup revenue and growth metrics.',
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        link: '/ecommerce-marketing'
      },
      {
        id: 'web-design-development',
        title: 'Startup Website Development',
        description: 'Investor-ready websites with product demos, founder stories, growth metrics, investor relations pages, and conversion-optimized landing pages that build startup credibility.',
        icon: React.createElement(IconCode, { size: 30 }),
        link: '/web-design-development'
      },
      {
        id: 'social-media-marketing',
        title: 'Startup Social Media Marketing',
        description: 'Strategic social media management across LinkedIn, Twitter, and industry platforms with thought leadership content, startup journey storytelling, and community building.',
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: '/social-media-marketing'
      },
      {
        id: 'seo-services',
        title: 'Startup SEO Services',
        description: 'Comprehensive SEO for startups targeting innovation keywords, industry disruption terms, and solution-based searches to increase visibility among target audiences.',
        icon: React.createElement(IconSeo, { size: 30 }),
        link: '/seo-services'
      },
      {
        id: 'gmb-services',
        title: 'Google Business Profile for Startups',
        description: 'Optimized Google My Business profiles with startup information, team photos, innovation showcases, and regular updates to build local startup ecosystem presence.',
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: '/gmb-services'
      },
      {
        id: 'aso-services',
        title: 'Startup App Store Optimization',
        description: 'Improve visibility for startup mobile applications in app stores by optimizing for innovation keywords, problem-solving apps, and disruptive technology searches.',
        icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
        link: '/aso-services'
      },
      {
        id: 'mobile-apps-development',
        title: 'Custom Startup Mobile Applications',
        description: 'MVP and scalable mobile applications with user analytics, growth tracking, customer feedback systems, and iterative improvement capabilities for startup success.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: '/mobile-apps-development'
      },
      {
        id: 'website-maintenance',
        title: 'Startup Website Maintenance',
        description: 'Ongoing website support including growth metric updates, product feature additions, investor information management, and performance optimization for startup sites.',
        icon: React.createElement(IconSettings, { size: 30 }),
        link: '/website-maintenance'
      },
      {
        id: 'leads-generation',
        title: 'Startup Customer & Investor Lead Generation',
        description: 'Multi-channel lead generation targeting early adopters, potential investors, strategic partners, and beta users using growth hacking techniques and viral campaigns.',
        icon: React.createElement(IconUsers, { size: 30 }),
        link: '/leads-generation'
      },
      {
        id: 'marketing-automation',
        title: 'Startup Marketing Automation',
        description: 'Automated email campaigns, CRM integration, and growth funnel optimization for customer onboarding, investor updates, user engagement, and retention strategies.',
        icon: React.createElement(IconRobot, { size: 30 }),
        link: '/marketing-automation'
      }
    ]
  },

  stats: {
    title: "Proven Startup Marketing Results",
    subtitle: "Data-Driven Success for Entrepreneurs & Innovation Companies",
    items: [
      {
        icon: React.createElement(IconRocket, { size: 30 }),
        title: 'Growth Acceleration',
        value: '520%',
        description: 'Average faster growth rate achieved by startups within 120 days of our marketing campaigns',
      },
      {
        icon: React.createElement(IconTarget, { size: 30 }),
        title: 'Customer Acquisition',
        value: '6.8X',
        description: 'Improvement in customer acquisition rates and user onboarding through optimized growth funnels',
      },
      {
        icon: React.createElement(Lightbulb, { size: 30 }),
        title: 'Funding Success',
        value: '340%',
        description: 'Higher success rate in securing seed funding and investor interest through strategic positioning',
      },
      {
        icon: React.createElement(IconStar, { size: 30 }),
        title: 'Market Traction',
        value: '4.9/5',
        description: 'Average improvement in market validation and product-market fit indicators',
      },
    ]
  },

  testimonials: {
    title: [
      { text: "Startup & Entrepreneur " },
      { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
    ],
    subtitle: "How We've Helped Startups Scale from Idea to Market Leader",
    description: "Read testimonials from successful entrepreneurs, startup founders, and innovation companies who have transformed their businesses from concept to market dominance with our growth-focused marketing expertise.",
    items: [
      {
        id: '1',
        message: 'Our EdTech startup went from 500 users to 50,000 users within 8 months thanks to their growth hacking strategies. The viral marketing campaigns they created helped us secure Series A funding of ₹25 crores and expand to 3 countries.',
        highlight: '500 to 50,000 users and ₹25 crores Series A funding',
        stars: 5,
        name: 'Arjun Malhotra',
        designation: 'Co-Founder & CEO',
        company: 'LearnTech Innovations Bangalore'
      },
      {
        id: '2',
        message: 'Their LinkedIn and investor relations campaigns for our FinTech startup attracted 12 potential investors in 4 months. We successfully raised seed funding and their pitch deck optimization was crucial to our success.',
        highlight: 'attracted 12 investors and successfully raised seed funding',
        stars: 5,
        name: 'Priya Sharma',
        designation: 'Founder',
        company: 'PayEasy Solutions Mumbai'
      },
      {
        id: '3',
        message: 'The mobile app marketing and ASO strategies they implemented for our food delivery startup resulted in 100K+ downloads in 6 months. We now operate in 5 cities and our monthly revenue grew 800%.',
        highlight: '100K+ downloads and 800% revenue growth',
        stars: 5,
        name: 'Vikram Patel',
        designation: 'Startup Founder',
        company: 'QuickBite Delivery Delhi'
      },
      {
        id: '4',
        message: 'As a SaaS startup, we needed to build credibility fast. Their content marketing and thought leadership campaigns positioned our founder as an industry expert, leading to 300% growth in enterprise clients.',
        highlight: '300% growth in enterprise clients',
        stars: 5,
        name: 'Anita Reddy',
        designation: 'Co-Founder',
        company: 'CloudTech Solutions Hyderabad'
      },
      {
        id: '5',
        message: 'Their startup marketing automation system transformed our customer onboarding. User activation rates improved by 250% and our churn rate dropped to below 5%, making us investor-ready.',
        stars: 4,
        name: 'Suresh Kumar',
        designation: 'CEO',
        company: 'HealthApp Startup Chennai'
      },
      {
        id: '6',
        message: 'The growth hacking strategies they implemented for our e-commerce startup helped us achieve ₹1 crore revenue in our first year. We\'re now expanding to international markets with their global marketing support.',
        highlight: '₹1 crore revenue in first year',
        stars: 5,
        name: 'Kavya Gupta',
        designation: 'Entrepreneur',
        company: 'StyleCraft E-commerce Pune'
      }
    ],
  },

  cta: {
    title: 'Ready to Scale Your Startup from Zero to Hero?',
    subtitle: 'Accelerate Growth, Attract Investors, Dominate Your Market',
    description: 'Schedule your free startup marketing consultation today. Our growth experts will analyze your current traction and show you exactly how to scale rapidly, attract investors, and build a disruptive brand that dominates your market.',
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
