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
  IconChefHat,
  IconMail,
  IconPlanet,
  IconTools,
  IconClock,
  IconPhone
} from '@tabler/icons-react';
import React from 'react';

export const restaurantsCafes: BusinessData = {
  id: '4',
  image: '/business/restaurant-cafe-digital-marketing.webp',
  slug: 'restaurant-cafe-digital-marketing',
  name: 'Restaurant & Cafe Digital Marketing Agency',

  hero: {
    name: 'Restaurant & Cafe Marketing Experts',
    initial: 'Fill Your Tables & Boost Sales with',
    headlineKeywords: [
      'Food Delivery Optimization',
      'Experts of Digital Marketing',
      'Dine-In Customer Growth'
    ],
    brandLine: 'Get 5X More Customers & Higher Revenue',
    subheadline: 'Our proven restaurant marketing strategies help cafes, restaurants, and food businesses in India increase foot traffic by 280%, boost online orders by 350%, and build loyal customer communities through targeted digital campaigns.',
    ctaButtons: [
      {
        text: 'Get Free Restaurant Marketing Audit',
        link: '/contact',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'View Restaurant Success Stories',
        link: '/restaurant-marketing-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
    backgroundImage: '/business/modern-restaurant-cafe-ambiance.webp'
  },

  services: {
    title: 'Complete Restaurant & Cafe Digital Marketing Services',
    subtitle: 'Everything Your Food Business Needs to Attract More Customers',
    businessName: "restaurants-cafes",
    description: 'Comprehensive digital marketing solutions designed specifically for restaurants, cafes, food trucks, and culinary businesses. Our data-driven strategies help food service businesses increase dine-in customers, boost delivery orders, and build lasting customer relationships.',
    items: [
      {
        id: '360-digital-marketing',
        title: 'Complete Restaurant Digital Marketing',
        description: 'Integrated omnichannel marketing campaigns combining local SEO, food photography, social media, and review management to maximize restaurant visibility and drive both dine-in and delivery orders.',
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: '/360-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'Facebook & Instagram Restaurant Advertising',
        description: 'Mouth-watering Meta ad campaigns featuring food photography, video content, and special promotions to attract food lovers and drive reservations, takeout, and delivery orders.',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: '/meta-ads'
      },
      {
        id: 'google-ads',
        title: 'Google Ads for Restaurants',
        description: 'Targeted PPC campaigns for high-intent searches like "restaurants near me", "food delivery [city]", and "best [cuisine] restaurant" that drive hungry customers to your establishment.',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: '/google-ads'
      },
      {
        id: 'other-ads',
        title: 'YouTube & Display Advertising',
        description: 'Engaging video content showcasing signature dishes, chef stories, and restaurant atmosphere on YouTube and food-related websites to build brand awareness and attract food enthusiasts.',
        icon: React.createElement(IconBrandYoutube, { size: 30 }),
        link: '/other-ads'
      },
      {
        id: 'local-seo',
        title: 'Local SEO for Restaurants',
        description: 'Dominate local food searches like "best restaurant in [city]", "[cuisine] near me", and "lunch delivery" with location-based optimization strategies that get you found by hungry customers.',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: '/local-seo'
      },
      {
        id: 'ecommerce-marketing',
        title: 'Food Delivery & Online Ordering Optimization',
        description: 'Optimization for food delivery platforms like Zomato, Swiggy, and direct online ordering systems to increase visibility, orders, and average order value.',
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        link: '/ecommerce-marketing'
      },
      {
        id: 'web-design-development',
        title: 'Restaurant Website Development',
        description: 'Mobile-responsive restaurant websites with online menus, reservation systems, food gallery, customer reviews, and integrated ordering capabilities that convert visitors into customers.',
        icon: React.createElement(IconCode, { size: 30 }),
        link: '/web-design-development'
      },
      {
        id: 'social-media-marketing',
        title: 'Restaurant Social Media Marketing',
        description: 'Strategic social media management across Instagram, Facebook, and TikTok with appetizing food content, behind-the-scenes videos, and community engagement that drives foot traffic.',
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: '/social-media-marketing'
      },
      {
        id: 'seo-services',
        title: 'Restaurant SEO Services',
        description: 'Comprehensive SEO for restaurants targeting keywords like "fine dining [city]", "authentic [cuisine] restaurant", and food-related searches to increase organic visibility.',
        icon: React.createElement(IconSeo, { size: 30 }),
        link: '/seo-services'
      },
      {
        id: 'gmb-services',
        title: 'Google Business Profile for Restaurants',
        description: 'Optimized Google My Business profiles with professional food photography, customer reviews, menu highlights, and regular posts to dominate local restaurant searches.',
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: '/gmb-services'
      },
      {
        id: 'aso-services',
        title: 'Restaurant App Store Optimization',
        description: 'Improve visibility and downloads for restaurant mobile apps in app stores by optimizing for "food delivery", "restaurant finder", and "online ordering" searches.',
        icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
        link: '/aso-services'
      },
      {
        id: 'mobile-apps-development',
        title: 'Custom Restaurant Mobile Apps',
        description: 'Feature-rich restaurant apps with online ordering, table reservations, loyalty programs, push notifications for offers, and customer feedback systems.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: '/mobile-apps-development'
      },
      {
        id: 'website-maintenance',
        title: 'Restaurant Website Maintenance',
        description: 'Ongoing website support including menu updates, seasonal promotions, event listings, reservation system maintenance, and performance optimization.',
        icon: React.createElement(IconSettings, { size: 30 }),
        link: '/website-maintenance'
      },
      {
        id: 'leads-generation',
        title: 'Restaurant Customer Acquisition',
        description: 'Multi-channel lead generation using special offers, loyalty programs, food events, and conversion-optimized campaigns that attract new customers and increase repeat visits.',
        icon: React.createElement(IconUsers, { size: 30 }),
        link: '/leads-generation'
      },
      {
        id: 'marketing-automation',
        title: 'Restaurant Marketing Automation',
        description: 'Automated email and SMS campaigns for reservation confirmations, birthday offers, loyalty rewards, new menu announcements, and customer re-engagement sequences.',
        icon: React.createElement(IconRobot, { size: 30 }),
        link: '/marketing-automation'
      }
    ]
  },

  stats: {
    title: "Proven Restaurant Marketing Results",
    subtitle: "Data-Driven Success for Food & Beverage Businesses",
    items: [
      {
        icon: React.createElement(IconUsers, { size: 30 }),
        title: 'Customer Growth',
        value: '280%',
        description: 'Average increase in foot traffic and new customers within 90 days of our marketing campaigns',
      },
      {
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        title: 'Online Orders',
        value: '350%',
        description: 'Improvement in delivery and takeout orders through optimized digital presence',
      },
      {
        icon: React.createElement(IconChartArea, { size: 30 }),
        title: 'Revenue Boost',
        value: '5.2X',
        description: 'Average revenue increase through comprehensive digital marketing strategies',
      },
      {
        icon: React.createElement(IconStar, { size: 30 }),
        title: 'Customer Satisfaction',
        value: '4.7/5',
        description: 'Average rating improvement through enhanced online presence and customer engagement',
      },
    ]
  },
  cta: {
    title: 'Ready to Fill Your Restaurant Every Night?',
    subtitle: 'Get More Customers, Increase Orders, Grow Your Food Business',
    description: 'Schedule your free restaurant marketing consultation today. Our food industry experts will analyze your current marketing efforts and show you exactly how to attract more customers and increase revenue.',

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
