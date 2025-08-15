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
  IconShirt,
  IconMail,
  IconPlanet,
  IconCamera,
  IconTrendingUp,
  IconHeart,
  IconBrandTiktok
} from '@tabler/icons-react';
import React from 'react';

export const fashionBrands: BusinessData = {
  id: '5',
  image: '/business/fashion-brand-digital-marketing.webp',
  slug: 'fashion-brand-digital-marketing',
  name: 'Fashion Brand Digital Marketing Agency',
  
  hero: {
    name: 'Fashion Brand Marketing Experts',
    initial: 'Grow Your Fashion Brand with',
    headlineKeywords: [
      'Expert Fashion Digital Marketing',
      'Brand Awareness Strategies',
      'E-commerce Sales Growth'
    ],
    brandLine:'Get 6X More Sales & Build a Loyal Fashion Community',
    subheadline: 'Our proven fashion marketing strategies help clothing brands, designers, and fashion retailers in India increase online sales by 450%, build brand awareness, and create viral social media presence through targeted digital campaigns.',
    ctaButtons: [
      {
        text: 'Get Free Fashion Brand Audit',
        link: '/free-fashion-marketing-audit',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'View Fashion Success Stories',
        link: '/fashion-marketing-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
    backgroundImage: '/business/fashion-runway-photography.webp'
  },

  services: {
    title: 'Complete Fashion Brand Digital Marketing Services',
    subtitle: 'Everything Your Fashion Business Needs to Dominate the Style Industry',
    description: 'Comprehensive digital marketing solutions designed specifically for fashion brands, clothing designers, apparel retailers, and style influencers. Our data-driven strategies help fashion businesses increase brand visibility, drive e-commerce sales, and build passionate communities of fashion enthusiasts.',
    items: [
      {
        id: '360-digital-marketing',
        title: 'Complete Fashion Brand Marketing',
        description: 'Integrated omnichannel marketing campaigns combining influencer partnerships, visual content, social commerce, and trend-based strategies to maximize fashion brand visibility and sales across all platforms.',
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: '/360-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'Instagram & Facebook Fashion Advertising',
        description: 'Visually stunning Meta ad campaigns featuring lookbooks, styling videos, and user-generated content to reach fashion-forward audiences and drive e-commerce conversions.',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: '/meta-ads'
      },
      {
        id: 'google-ads',
        title: 'Google Ads for Fashion Brands',
        description: 'Targeted PPC campaigns for high-intent fashion searches like "designer dresses online", "trendy accessories", and "fashion brands India" that drive qualified traffic and sales.',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: '/google-ads'
      },
      {
        id: 'other-ads',
        title: 'TikTok & YouTube Fashion Advertising',
        description: 'Engaging video content showcasing fashion hauls, styling tips, and brand stories on TikTok and YouTube to capture Gen Z and millennial fashion audiences.',
        icon: React.createElement(IconBrandTiktok, { size: 30 }),
        link: '/other-ads'
      },
      {
        id: 'local-seo',
        title: 'Fashion Brand Local SEO',
        description: 'Optimize for location-based fashion searches like "boutiques near me", "fashion stores in [city]", and "designer clothing [location]" to drive foot traffic to physical stores.',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: '/local-seo'
      },
      {
        id: 'ecommerce-marketing',
        title: 'Fashion E-commerce Optimization',
        description: 'Comprehensive e-commerce marketing for fashion brands including product page optimization, abandoned cart recovery, upselling strategies, and conversion rate optimization.',
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        link: '/ecommerce-marketing'
      },
      {
        id: 'web-design-development',
        title: 'Fashion Website Development',
        description: 'Stunning, mobile-responsive fashion websites with e-commerce capabilities, lookbook galleries, size guides, customer reviews, and seamless checkout experiences.',
        icon: React.createElement(IconCode, { size: 30 }),
        link: '/web-design-development'
      },
      {
        id: 'social-media-marketing',
        title: 'Fashion Social Media Marketing',
        description: 'Strategic social media management across Instagram, TikTok, Pinterest, and Facebook with trend-focused content, influencer collaborations, and community building.',
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: '/social-media-marketing'
      },
      {
        id: 'seo-services',
        title: 'Fashion SEO Services',
        description: 'Comprehensive SEO for fashion brands targeting keywords like "sustainable fashion India", "designer wear online", and trend-based searches to increase organic visibility.',
        icon: React.createElement(IconSeo, { size: 30 }),
        link: '/seo-services'
      },
      {
        id: 'gmb-services',
        title: 'Google Business Profile for Fashion Stores',
        description: 'Optimized Google My Business profiles with fashion photography, customer reviews, collection highlights, and regular posts to dominate local fashion searches.',
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: '/gmb-services'
      },
      {
        id: 'aso-services',
        title: 'Fashion App Store Optimization',
        description: 'Improve visibility and downloads for fashion mobile apps in app stores by optimizing for "fashion shopping", "style apps", and "clothing brands" searches.',
        icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
        link: '/aso-services'
      },
      {
        id: 'mobile-apps-development',
        title: 'Custom Fashion Mobile Apps',
        description: 'Feature-rich fashion apps with virtual try-on, style recommendations, wishlist functionality, exclusive app offers, and social sharing capabilities.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: '/mobile-apps-development'
      },
      {
        id: 'website-maintenance',
        title: 'Fashion Website Maintenance',
        description: 'Ongoing website support including seasonal collection updates, trend integration, inventory management, and performance optimization for fashion e-commerce sites.',
        icon: React.createElement(IconSettings, { size: 30 }),
        link: '/website-maintenance'
      },
      {
        id: 'leads-generation',
        title: 'Fashion Customer Acquisition',
        description: 'Multi-channel lead generation using style quizzes, lookbook downloads, exclusive previews, and conversion-optimized campaigns that attract fashion-conscious customers.',
        icon: React.createElement(IconUsers, { size: 30 }),
        link: '/leads-generation'
      },
      {
        id: 'marketing-automation',
        title: 'Fashion Marketing Automation',
        description: 'Automated email and SMS campaigns for new collection launches, personalized style recommendations, abandoned cart recovery, and customer loyalty programs.',
        icon: React.createElement(IconRobot, { size: 30 }),
        link: '/marketing-automation'
      }
    ]
  },

  stats: {
    title: "Proven Fashion Marketing Results",
    subtitle: "Data-Driven Success for Fashion & Style Businesses",
    items: [
      {
        icon: React.createElement(IconTrendingUp, { size: 30 }),
        title: 'Sales Growth',
        value: '450%',
        description: 'Average increase in online fashion sales within 6 months of our marketing campaigns',
      },
      {
        icon: React.createElement(IconHeart, { size: 30 }),
        title: 'Brand Engagement',
        value: '8.5X',
        description: 'Improvement in social media engagement and brand community interaction',
      },
      {
        icon: React.createElement(IconUsers, { size: 30 }),
        title: 'Customer Base',
        value: '320%',
        description: 'Growth in fashion brand following and customer acquisition across all channels',
      },
      {
        icon: React.createElement(IconStar, { size: 30 }),
        title: 'Brand Recognition',
        value: '4.8/5',
        description: 'Average brand awareness score improvement through strategic marketing campaigns',
      },
    ]
  },

  testimonials: {
    title: [
      { text: "Fashion Brand " },
      { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
    ],
    subtitle: "How We've Helped Fashion Businesses Thrive",
    description: "Read testimonials from successful fashion designers, clothing brand owners, and style entrepreneurs who have transformed their businesses with our digital marketing expertise.",
    items: [
      {
        id: '1',
        message: 'Our fashion brand\'s online sales increased by 520% within 8 months thanks to their Instagram and influencer marketing campaigns. The content they create perfectly captures our brand aesthetic and attracts our target audience.',
        highlight: 'online sales increased by 520% within 8 months',
        stars: 5,
        name: 'Ananya Malhotra',
        designation: 'Fashion Designer & Brand Owner',
        company: 'Ethereal Couture Mumbai'
      },
      {
        id: '2',
        message: 'Their TikTok and YouTube strategies made our sustainable fashion brand viral. We gained 50K followers in 3 months and our eco-friendly clothing line is now sold out every launch.',
        highlight: 'gained 50K followers in 3 months',
        stars: 5,
        name: 'Rohan Sharma',
        designation: 'Sustainable Fashion Entrepreneur',
        company: 'Green Threads Delhi'
      },
      {
        id: '3',
        message: 'The e-commerce optimization and Google Ads campaigns they managed brought in 300% more customers. Our conversion rate improved dramatically and average order value increased by 60%.',
        highlight: '300% more customers and 60% higher order value',
        stars: 5,
        name: 'Priya Patel',
        designation: 'Online Boutique Owner',
        company: 'Chic Styles Ahmedabad'
      },
      {
        id: '4',
        message: 'Working with this team transformed our traditional textile business into a modern fashion brand. Their digital strategies helped us reach younger customers and increase revenue by 400%.',
        highlight: 'increase revenue by 400%',
        stars: 5,
        name: 'Rajesh Gupta',
        designation: 'Fashion Business Owner',
        company: 'Heritage Weaves Jaipur'
      },
      {
        id: '5',
        message: 'As a new fashion designer, I struggled with brand visibility. Their social media marketing and influencer collaborations got my designs featured in fashion magazines and increased sales by 280%.',
        stars: 4,
        name: 'Kavya Nair',
        designation: 'Independent Fashion Designer',
        company: 'Threads of Kerala'
      },
      {
        id: '6',
        message: 'The mobile app they developed for our fashion brand has been incredible. Customers love the virtual try-on feature and our app-exclusive sales drive 40% of our total revenue.',
        highlight: 'app-exclusive sales drive 40% of total revenue',
        stars: 5,
        name: 'Neha Singh',
        designation: 'Fashion Brand Marketing Head',
        company: 'Urban Diva Bangalore'
      }
    ],
  },

  cta: {
    title: 'Ready to Make Your Fashion Brand the Next Big Thing?',
    subtitle: 'Get More Sales, Build Brand Loyalty, Dominate Fashion Markets',
    description: 'Schedule your free fashion marketing consultation today. Our fashion industry experts will analyze your brand positioning and show you exactly how to increase sales and build a passionate customer community.',
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
