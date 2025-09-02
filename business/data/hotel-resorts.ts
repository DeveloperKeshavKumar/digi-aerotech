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
  IconCamera,
  IconMail,
  IconPlanet,
  IconBed,
  IconPlane
} from '@tabler/icons-react';
import React from 'react';

export const hotelResorts: BusinessData = {
  id: '2',
  image: '/business/hotel-resort-digital-marketing.webp',
  slug: 'hotel-resort-digital-marketing',
  name: 'Hotel & Resort Digital Marketing Agency',

  hero: {
    name: 'Hotel & Resort Marketing Experts',
    initial: 'Increase Your Hotel Bookings with',
    headlineKeywords: [
      'Direct Booking Strategies',
      'Revenue Growth Solutions',
      'Experts of Digital Marketing',
    ],
    brandLine: 'Get 4X More Direct Bookings & Higher RevPAR',
    subheadline: 'Our proven hospitality marketing strategies help hotels, resorts, and boutique properties in India increase direct bookings by 320% and reduce OTA dependency while maximizing revenue per available room.',
    ctaButtons: [
      {
        text: 'Get Free Hotel Marketing Audit',
        link: '/contact',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'View Hotel Success Stories',
        link: '/results/hotel-marketing-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
  },

  services: {
    title: 'Complete Hotel & Resort Digital Marketing Services',
    subtitle: 'Everything Your Hospitality Business Needs to Maximize Direct Bookings',
    businessName: "hotel-resorts",
    description: 'Comprehensive digital marketing solutions designed specifically for hotels, resorts, boutique properties, and hospitality brands.',
    items: [
      {
        id: '360-digital-marketing',
        title: 'Complete Hotel Digital Marketing',
        description: 'Integrated omnichannel marketing campaigns combining SEO, paid advertising, social media, and email marketing to maximize hotel visibility and drive direct bookings across all platforms.',
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: '/360-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'Facebook & Instagram Hotel Advertising',
        description: 'Visually stunning Meta ad campaigns featuring property photos, virtual tours, and special packages to attract travelers and drive direct bookings from social media.',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: '/meta-ads'
      },
      {
        id: 'google-ads',
        title: 'Google Ads for Hotels',
        description: 'Targeted PPC campaigns for high-intent searches like "hotels in [city]", "luxury resorts near [location]", and "weekend getaway packages" that drive qualified bookings.',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: '/google-ads'
      },
      {
        id: 'other-ads',
        title: 'YouTube & Display Advertising',
        description: 'Engaging video content showcasing hotel amenities, destination highlights, and guest experiences on YouTube and travel-related websites to build brand awareness.',
        icon: React.createElement(IconBrandYoutube, { size: 30 }),
        link: '/other-ads'
      },
      {
        id: 'local-seo',
        title: 'Local SEO for Hotels',
        description: 'Dominate local hospitality searches like "best hotel in [city]", "luxury resorts near me", and destination-specific keywords with location-based optimization strategies.',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: '/local-seo'
      },
      {
        id: 'web-design-development',
        title: 'Hotel Website Development',
        description: 'Mobile-responsive hospitality websites with integrated booking engines, virtual tours, amenity showcases, and seamless user experience that converts visitors into guests.',
        icon: React.createElement(IconCode, { size: 30 }),
        link: '/web-design-development'
      },
      {
        id: 'social-media-marketing',
        title: 'Hotel Social Media Marketing',
        description: 'Strategic social media management across Instagram, Facebook, and TikTok with stunning property visuals, guest experiences, and destination content that drives bookings.',
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: '/social-media-marketing'
      },
      {
        id: 'seo-services',
        title: 'Hospitality SEO Services',
        description: 'Comprehensive SEO for hotels targeting keywords like "luxury hotels [destination]", "beach resorts [location]", and travel-related searches to increase organic visibility.',
        icon: React.createElement(IconSeo, { size: 30 }),
        link: '/seo-services'
      },
      {
        id: 'gmb-services',
        title: 'Google Business Profile for Hotels',
        description: 'Optimized Google My Business profiles with stunning property photos, guest reviews, amenity details, and regular posts to dominate local hospitality searches.',
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: '/gmb-services'
      },
      {
        id: 'aso-services',
        title: 'Hotel App Store Optimization',
        description: 'Improve visibility and downloads for hotel mobile apps in app stores by optimizing for "hotel booking", "resort finder", and "travel accommodation" searches.',
        icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
        link: '/aso-services'
      },
      {
        id: 'mobile-apps-development',
        title: 'Custom Hotel Mobile Apps',
        description: 'Feature-rich hospitality apps with room booking, concierge services, in-app dining orders, guest communications, and loyalty program integration.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: '/mobile-apps-development'
      },
      // {
      //   id: 'website-maintenance',
      //   title: 'Hotel Website Maintenance',
      //   description: 'Ongoing website support including rate updates, seasonal promotions, amenity information management, and performance optimization for hospitality websites.',
      //   icon: React.createElement(IconSettings, { size: 30 }),
      //   link: '/website-maintenance'
      // },
      {
        id: 'leads-generation',
        title: 'Hotel Lead Generation',
        description: 'Multi-channel lead generation using vacation guides, exclusive offers, event packages, and conversion-optimized landing pages that attract potential guests.',
        icon: React.createElement(IconUsers, { size: 30 }),
        link: '/leads-generation'
      },
    ]
  },

  stats: {
    title: "Proven Hospitality Marketing Results",
    subtitle: "Data-Driven Success for Hotel & Resort Businesses",
    items: [
      {
        icon: React.createElement(IconBed, { size: 30 }),
        title: 'Direct Bookings',
        value: '320%',
        description: 'Average increase in direct hotel bookings within 6 months of our marketing campaigns',
      },
      {
        icon: React.createElement(IconTarget, { size: 30 }),
        title: 'Revenue Growth',
        value: '4.2X',
        description: 'Improvement in RevPAR (Revenue Per Available Room) through optimized pricing and marketing',
      },
      {
        icon: React.createElement(IconChartArea, { size: 30 }),
        title: 'Online Visibility',
        value: '275%',
        description: 'Increase in local search rankings and travel platform visibility for hospitality keywords',
      },
      {
        icon: React.createElement(IconStar, { size: 30 }),
        title: 'Guest Satisfaction',
        value: '4.8/5',
        description: 'Average rating improvement through enhanced digital experience and communication',
      },
    ]
  },

  cta: {
    title: 'Ready to Maximize Your Hotel Revenue?',
    subtitle: 'Get More Direct Bookings, Reduce OTA Dependency, Grow Your Hospitality Business',
    description: 'Schedule your free hospitality marketing consultation today. Our hotel marketing experts will analyze your current booking channels and show you exactly how to increase direct reservations and revenue.',
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
