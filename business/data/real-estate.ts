import { BusinessData } from '@/types/business.types';
import { IconAd, IconBrandGoogle, IconBrandInstagram, IconBrandMeta, IconChartArea, IconCode, IconDeviceMobile, IconEyeBolt, IconMapPin, IconMapSearch, IconPlanet, IconPlayerPlay, IconRobot, IconSeo, IconSettings, IconShoppingCart, IconTrophy, IconUsers, IconUsersGroup, IconMail, IconCamera, IconVideo, IconBrain, IconTarget } from '@tabler/icons-react';
import React from 'react';

export const realEstate: BusinessData = {
  id: '1',
  image: '/business/real-estate-digital-marketing.webp',
  slug: 'real-estate-digital-marketing',
  name: 'Real Estate Digital Marketing Agency',

  hero: {
    name: 'Real Estate Digital Marketing Experts',
    initial: 'Sell Properties 47% Faster with',
    headlineKeywords: [
      'Experts of Digital Marketing',
      'Proven Lead Generation Strategies',
      'Premium Property Promotion'
    ],
    brandLine: [
      {
        text: 'Get 3-5X More Qualified Buyer Leads for Your Listings',
        gradient:false,
      }
    ],
    subheadline: 'Our data-driven real estate marketing solutions help agents, brokers, and developers in India sell properties 47% faster at 12-18% higher prices through targeted digital campaigns.',
    ctaButtons: [
      {
        text: 'Book A Strategy Call',
        link: '/free-real-estate-marketing-audit',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'View Success Stories',
        link: '/results/real-estate-marketing-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
    backgroundImage: '/business/luxury-real-estate-marketing.webp'
  },

  services: {
    title: 'Complete Real Estate Digital Marketing Services',
    subtitle: 'Everything Your Real Estate Business Needs to Dominate Online',
    description: 'Comprehensive digital marketing solutions designed specifically for real estate professionals. Our proven strategies help realtors, property developers, and brokers generate 300% more qualified leads and sell properties faster in today\'s competitive market.',
    items: [
      {
        id: '360-digital-marketing',
        title: 'Complete Real Estate Digital Marketing',
        description: 'Comprehensive omnichannel marketing campaigns combining SEO, PPC, social media, and content marketing to maximize property exposure across all digital touchpoints and generate qualified buyer leads.',
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: '/360-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'Facebook & Instagram Property Ads',
        description: 'Highly-targeted Meta advertising campaigns featuring stunning property photos, virtual tours, and carousel ads to reach qualified home buyers and real estate investors in your target market.',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: '/meta-ads'
      },
      {
        id: 'google-ads',
        title: 'Google Ads for Real Estate',
        description: 'Capture high-intent buyers searching for "homes for sale in [city]" and "properties near me" with targeted Google Search and Display campaigns that deliver qualified leads.',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: '/google-ads'
      },
      {
        id: 'other-ads',
        title: 'YouTube & Display Advertising',
        description: 'Engaging video property tours and rich media ads on premium platforms to showcase listings with immersive content that attracts serious buyers and investors.',
        icon: React.createElement(IconPlayerPlay, { size: 30 }),
        link: '/other-ads'
      },
      {
        id: 'local-seo',
        title: 'Local SEO for Real Estate',
        description: 'Dominate "realtor near me" and neighborhood-specific property searches with geo-targeted optimization strategies that put your listings in front of local buyers.',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: '/local-seo'
      },
      {
        id: 'ecommerce-marketing',
        title: 'Property Marketplace Optimization',
        description: 'Enhanced listing optimization for 99acres, MagicBricks, Housing.com and other property portals with professional descriptions and strategic keyword placement.',
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        link: '/ecommerce-marketing'
      },
      {
        id: 'web-design-development',
        title: 'Real Estate Website Development',
        description: 'Mobile-responsive realtor websites with IDX/MLS integration, virtual tour capabilities, lead capture forms, and mortgage calculators that convert visitors into clients.',
        icon: React.createElement(IconCode, { size: 30 }),
        link: '/web-design-development'
      },
      {
        id: 'social-media-marketing',
        title: 'Social Media Marketing for Realtors',
        description: 'Strategic social media management across Facebook, Instagram, and LinkedIn with engaging property content, neighborhood insights, and community building that drives leads.',
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: '/social-media-marketing'
      },
      {
        id: 'seo-services',
        title: 'Real Estate SEO Services',
        description: 'Comprehensive SEO optimization for real estate websites targeting high-value keywords like "luxury homes [city]", "properties for sale", and local market searches.',
        icon: React.createElement(IconSeo, { size: 30 }),
        link: '/seo-services'
      },
      {
        id: 'gmb-services',
        title: 'Google Business Profile Management',
        description: 'Optimized Google My Business profiles with property photos, client testimonials, regular posts, and Q&A management to dominate local real estate searches.',
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: '/gmb-services'
      },
      {
        id: 'aso-services',
        title: 'Real Estate App Store Optimization',
        description: 'For real estate brokerages with mobile apps - improve app discoverability and downloads for "property search apps" and "real estate apps" in app stores.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: '/aso-services'
      },
      {
        id: 'mobile-apps-development',
        title: 'Custom Real Estate Mobile Apps',
        description: 'Feature-rich mobile applications with property search, AR virtual tours, mortgage calculators, push notifications for new listings, and seamless lead management.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: '/mobile-apps-development'
      },
      {
        id: 'website-maintenance',
        title: 'Real Estate Website Maintenance',
        description: 'Ongoing website support including security updates, performance optimization, MLS integration maintenance, and regular content updates to keep your site running smoothly.',
        icon: React.createElement(IconSettings, { size: 30 }),
        link: '/website-maintenance'
      },
      {
        id: 'leads-generation',
        title: 'Real Estate Lead Generation',
        description: 'Multi-channel lead generation campaigns using landing pages, lead magnets, chatbots, and conversion optimization to capture and qualify potential home buyers and sellers.',
        icon: React.createElement(IconUsers, { size: 30 }),
        link: '/leads-generation'
      },
      {
        id: 'marketing-automation',
        title: 'Real Estate Marketing Automation',
        description: 'Automated email and SMS sequences, CRM integration, and behavioral trigger campaigns that nurture leads from first contact to successful property transactions.',
        icon: React.createElement(IconRobot, { size: 30 }),
        link: '/marketing-automation'
      }
    ],
  },
  stats: {
    title: "Proven Real Estate Marketing Results",
    subtitle: "Data-Driven Success for Real Estate Professionals",
    items: [
      {
        icon: React.createElement(IconUsers, { size: 30 }),
        title: 'More Qualified Leads',
        value: '350%',
        description: 'Average increase in buyer inquiries within 90 days of our real estate marketing campaigns',
      },
      {
        icon: React.createElement(IconChartArea, { size: 30 }),
        title: 'Faster Property Sales',
        value: '47%',
        description: 'Reduction in average days on market for our clients\' property listings',
      },
      {
        icon: React.createElement(IconEyeBolt, { size: 30 }),
        title: 'Higher Property Views',
        value: '6X',
        description: 'Increase in online property views and engagement across all digital platforms',
      },
      {
        icon: React.createElement(IconTrophy, { size: 30 }),
        title: 'Client Success Rate',
        value: '98%',
        description: 'Of real estate professionals see measurable growth within 6 months',
      },
    ]
  },

  testimonials: {
    title: [
      { text: "Real Estate " },
      { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
    ],
    subtitle: "How We\'ve Helped Real Estate Professionals Grow",
    description: "Read testimonials from successful realtors, brokers, and property developers who have transformed their business with our digital marketing expertise.",
    items: [
      {
        id: '1',
        message: 'Working with this real estate marketing team has been a game-changer for my property business. They helped me generate 250% more leads and I\'m selling properties 40% faster than before. Their SEO strategies got my listings on the first page of Google for competitive keywords.',
        highlight: '250% more leads and selling properties 40% faster',
        stars: 5,
        name: 'Rajesh Sharma',
        designation: 'Senior Real Estate Agent',
        company: 'Mumbai Properties'
      },
      {
        id: '2',
        message: 'As a luxury property developer, I needed marketing that matched the quality of my projects. Their team created stunning virtual tours, targeted the right affluent audience, and helped us sell 85% of our inventory within 6 months of launch.',
        highlight: 'sold 85% of inventory within 6 months',
        stars: 5,
        name: 'Priya Patel',
        designation: 'Property Developer',
        company: 'Luxury Homes Delhi'
      },
      {
        id: '3',
        message: 'Their Google Ads campaigns for my real estate business have been phenomenal. I\'m getting high-quality buyer leads at 30% lower cost than my previous agency, and the lead-to-closing rate has improved significantly.',
        highlight: 'high-quality leads at 30% lower cost',
        stars: 5,
        name: 'Amit Kumar',
        designation: 'Real Estate Broker',
        company: 'Bangalore Realty'
      },
      {
        id: '4',
        message: 'The social media marketing for my real estate brand has been exceptional. My Instagram and Facebook pages now showcase properties beautifully, and I\'m getting inquiries from serious buyers who are ready to purchase.',
        stars: 4,
        name: 'Neha Singh',
        designation: 'Independent Realtor',
        company: 'Pune Properties'
      },
      {
        id: '5',
        message: 'Their real estate website development service is outstanding. The new website with MLS integration and lead capture forms has increased my online inquiries by 400%. The mobile experience is fantastic too.',
        highlight: 'increased online inquiries by 400%',
        stars: 5,
        name: 'Vikash Gupta',
        designation: 'Real Estate Team Leader',
        company: 'Gurgaon Homes'
      },
      {
        id: '6',
        message: 'I specialialize in commercial real estate, and their B2B marketing strategies have helped me connect with serious investors and corporate clients. The ROI on their services has been incredible.',
        stars: 5,
        name: 'Suresh Reddy',
        designation: 'Commercial Real Estate Specialist',
        company: 'Hyderabad Commercial'
      }
    ],
  },

  cta: {
    title: 'Ready to Dominate Your Local Real Estate Market?',
    subtitle: 'Get More Listings, Close More Deals, Grow Your Real Estate Business',
    description: 'Schedule your free real estate marketing consultation today. Our experts will analyze your current marketing efforts and show you exactly how to generate more qualified leads and sell properties faster.',
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
