import { BusinessData } from '@/types/business.types';
import {
  IconChefHat,
  IconBrandGoogle,
  IconBrandMeta,
  IconBrandInstagram,
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
  IconMapPin,
  IconSettings,
} from '@tabler/icons-react';
import React from 'react';

export const restaurantsCafes: BusinessData = {
  id: '4',
  image: '/business/restaurant-cafe.jpg',
  slug: 'restaurants-cafes',
  name: 'Restaurants & Cafés',
  hero: {
    name: 'Digital Marketing for Restaurants',
    initial: 'Drive more diners with ',
    headlineKeywords: [
      'online reservations',
      'local search visibility',
      'loyal customer growth'
    ],
    brandLine: 'Smart marketing for culinary brands that crave results',
    subheadline: 'We help restaurants and cafés increase footfall and orders by up to 200% using SEO, ads, and automation.',
    ctaButtons: [
      {
        text: 'Get Free Performance Audit',
        link: '/free-revenue-audit',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'See Our Client Results',
        link: '/restaurant-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
    backgroundImage: '/business/restaurant-hero.jpg'
  },
  services: {
    title: 'Restaurant Marketing Services',
    description: 'A complete digital suite designed to boost online reservations, grow delivery orders, and build repeat customers for restaurants, cafés, and food chains.',
    items: [
      {
        id: '360-digital-marketing',
        title: '360° Restaurant Marketing',
        description: 'Unified campaigns across SEO, social media, and ads to drive bookings, orders, and walk-ins.',
        icon: React.createElement(IconChartArea, { size: 30 }),
        url: 'restaurant-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'Meta Ads for Restaurants',
        description: 'Instagram & Facebook campaigns that showcase food, ambiance, and seasonal promotions.',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        url: 'restaurant-meta-ads'
      },
      {
        id: 'google-ads',
        title: 'Google Ads for Dining Spots',
        description: 'Target “best cafés in [city]” and “restaurants near me” with high-ROI search ads.',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        url: 'restaurant-google-ads'
      },
      {
        id: 'other-ads',
        title: 'Display & Video Ads',
        description: 'YouTube and banner ads to boost visibility during peak dining hours and festive seasons.',
        icon: React.createElement(IconAd, { size: 30 }),
        url: 'restaurant-other-ads'
      },
      {
        id: 'local-seo',
        title: 'Local SEO for Restaurants',
        description: 'Own the map with top rankings for “best brunch near me” and location-based food searches.',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        url: 'restaurant-local-seo'
      },
      {
        id: 'ecommerce-marketing',
        title: 'Online Order Optimization',
        description: 'Increase direct orders by improving your digital menu, checkout flow, and delivery UX.',
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        url: 'restaurant-order-optimization'
      },
      {
        id: 'web-design-development',
        title: 'Restaurant Website Design',
        description: 'Beautiful, mobile-first websites with booking engines, menus, reviews, and gallery sections.',
        icon: React.createElement(IconCode, { size: 30 }),
        url: 'restaurant-web-design'
      },
      {
        id: 'social-media-marketing',
        title: 'Instagram for Food Brands',
        description: 'Engaging reels, influencer partnerships, and campaigns that go viral and drive reservations.',
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        url: 'restaurant-social-media'
      },
      {
        id: 'seo-services',
        title: 'SEO for Food & Beverage',
        description: 'Rank for high-value keywords like “romantic dinner [city]” and “late night café near me”.',
        icon: React.createElement(IconSeo, { size: 30 }),
        url: 'restaurant-seo'
      },
      {
        id: 'gmb-services',
        title: 'Google Business Optimization',
        description: 'Enhance your listing with photos, reviews, real-time hours, and order/reserve buttons.',
        icon: React.createElement(IconMapPin, { size: 30 }),
        url: 'restaurant-gmb'
      },
      {
        id: 'aso-services',
        title: 'Restaurant App ASO',
        description: 'Rank your food app for local delivery searches on App Store & Google Play.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        url: 'restaurant-aso'
      },
      {
        id: 'mobile-apps-development',
        title: 'Restaurant App Development',
        description: 'Custom food ordering apps with loyalty rewards, reservation booking, and push notifications.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        url: 'restaurant-mobile-apps'
      },
      {
        id: 'website-maintenance',
        title: 'Menu & Website Updates',
        description: 'Keep your online presence fresh with regular updates for menus, events, and seasonal offers.',
        icon: React.createElement(IconCalendar, { size: 30 }),
        url: 'restaurant-website-maintenance'
      },
      {
        id: 'leads-generation',
        title: 'Group Bookings & Catering Leads',
        description: 'Generate large event, party, and corporate catering inquiries through smart campaigns.',
        icon: React.createElement(IconUsers, { size: 30 }),
        url: 'restaurant-lead-generation'
      },
      {
        id: 'marketing-automation',
        title: 'Restaurant Automation & Loyalty',
        description: 'Automated campaigns to bring back guests with birthday deals, loyalty points, and feedback flows.',
        icon: React.createElement(IconRobot, { size: 30 }),
        url: 'restaurant-marketing-automation'
      }
    ]
  },
  stats: {
    title: 'Performance-Driven Dining Results',
    items: [
      {
        icon: React.createElement(IconAd, { size: 30 }),
        title: 'Increase in Bookings',
        value: '170%',
        description: 'More online table reservations and pre-orders in 60 days'
      },
      {
        icon: React.createElement(IconChartArea, { size: 30 }),
        title: 'SEO Ranking Boost',
        value: '+260%',
        description: 'Improved rankings for high-intent food keywords'
      },
      {
        icon: React.createElement(IconUsersGroup, { size: 30 }),
        title: 'Customer Retention',
        value: '47%',
        description: 'More repeat guests with loyalty and automation strategies'
      },
      {
        icon: React.createElement(IconSettings, { size: 30 }),
        title: 'Google Ads ROI',
        value: '6.2x',
        description: 'Return on ad spend via search & map campaigns'
      }
    ]
  },
  testimonials: {
    title: [
      { text: "Food Business " },
      { text: "Testimonials", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
    ],
    items: [
      {
        id: '1',
        message:
          'We jumped to the top 3 on Google Maps for “Italian restaurants in Indiranagar” and doubled our weekend bookings.',
        stars: 5,
        name: 'Arjun Desai',
        designation: 'Co-founder',
        company: 'Trattoria Italiano, Bangalore'
      },
      {
        id: '2',
        message:
          'Their Instagram ads and Reels strategy helped us hit 50K followers and brought in a ton of foot traffic.',
        stars: 5,
        name: 'Fatima Khan',
        designation: 'Marketing Manager',
        company: 'Chai Junction, Hyderabad'
      },
      {
        id: '3',
        message:
          'Our online ordering improved by 3X once they redesigned the site and checkout. Great team!',
        stars: 4.5,
        name: 'Neeraj Malhotra',
        designation: 'Owner',
        company: 'The Urban Curry, Pune'
      },
      {
        id: '4',
        message:
          "Catering leads went up by 200% within 3 months. We're now booking large parties regularly.",
        stars: 5,
        name: 'Sneha Rao',
        designation: 'General Manager',
        company: 'Coastal Treats, Goa'
      }
    ]
  },
  cta: {
    title: 'Hungry for More Diners & Orders?',
    subtitle: 'Let’s Grow Your Restaurant Online',
    description:
      'Request a free digital audit and discover how to fill tables, grow delivery, and build loyal customers.',
  }
};
