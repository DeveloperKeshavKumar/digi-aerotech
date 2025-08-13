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
    brandLine: [
      {
        text: 'Get 4X More Direct Bookings & Higher RevPAR',
        gradient: false,
      }
    ],
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
        id: 'ecommerce-marketing',
        title: 'Hotel Booking Engine Optimization',
        description: 'Conversion-optimized direct booking systems, package deals, upselling strategies, and checkout flows that maximize revenue and reduce OTA dependency.',
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        link: '/ecommerce-marketing'
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
      {
        id: 'website-maintenance',
        title: 'Hotel Website Maintenance',
        description: 'Ongoing website support including rate updates, seasonal promotions, amenity information management, and performance optimization for hospitality websites.',
        icon: React.createElement(IconSettings, { size: 30 }),
        link: '/website-maintenance'
      },
      {
        id: 'leads-generation',
        title: 'Hotel Lead Generation',
        description: 'Multi-channel lead generation using vacation guides, exclusive offers, event packages, and conversion-optimized landing pages that attract potential guests.',
        icon: React.createElement(IconUsers, { size: 30 }),
        link: '/leads-generation'
      },
      {
        id: 'marketing-automation',
        title: 'Hospitality Marketing Automation',
        description: 'Automated email and SMS campaigns for booking confirmations, pre-arrival communications, post-stay follow-ups, loyalty programs, and win-back sequences.',
        icon: React.createElement(IconRobot, { size: 30 }),
        link: '/marketing-automation'
      }
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

  testimonials: {
    title: [
      { text: "Hotel & Resort " },
      { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
    ],
    subtitle: "How We've Helped Hospitality Businesses Thrive",
    description: "Read testimonials from successful hotel owners, resort managers, and hospitality brands who have transformed their businesses with our digital marketing expertise.",
    items: [
      {
        id: '1',
        message: 'Our direct bookings increased by 280% within 4 months of working with this team. Their SEO strategies got us ranking #1 for "luxury hotels Goa" and we\'re no longer dependent on expensive OTA commissions.',
        highlight: 'direct bookings increased by 280% within 4 months',
        stars: 5,
        name: 'Arjun Malhotra',
        designation: 'Hotel Owner',
        company: 'SeaShore Luxury Resort Goa'
      },
      {
        id: '2',
        message: 'The social media campaigns featuring our property and local attractions brought in 150 new guests last quarter. Their content strategy perfectly captures the essence of our hill station resort.',
        highlight: 'brought in 150 new guests last quarter',
        stars: 5,
        name: 'Meera Sharma',
        designation: 'Resort Manager',
        company: 'Mountain View Resort Shimla'
      },
      {
        id: '3',
        message: 'Their Google Ads campaigns for our boutique hotel have been phenomenal. We\'re getting high-quality bookings at 40% lower cost per acquisition than our previous agency.',
        highlight: '40% lower cost per acquisition',
        stars: 5,
        name: 'Rajesh Patel',
        designation: 'General Manager',
        company: 'Heritage Palace Hotel Rajasthan'
      },
      {
        id: '4',
        message: 'The new website with integrated booking engine they developed has revolutionized our business. Online bookings increased by 350% and our RevPAR has never been higher.',
        highlight: 'online bookings increased by 350%',
        stars: 5,
        name: 'Priya Nair',
        designation: 'Marketing Director',
        company: 'Backwater Resorts Kerala'
      },
      {
        id: '5',
        message: 'As a beach resort owner, I needed marketing that showcased our stunning location. Their photography and video content has made our Instagram viral, leading to 200+ inquiries monthly.',
        stars: 4,
        name: 'Vikram Singh',
        designation: 'Resort Owner',
        company: 'Sunset Beach Resort Andaman'
      },
      {
        id: '6',
        message: 'Their marketing automation system has transformed our guest experience. From booking confirmation to post-stay follow-ups, everything is seamless. Our repeat guest rate increased by 65%.',
        highlight: 'repeat guest rate increased by 65%',
        stars: 5,
        name: 'Anita Gupta',
        designation: 'Operations Manager',
        company: 'City Business Hotel Chain'
      }
    ],
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
