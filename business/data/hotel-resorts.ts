import { BusinessData } from '@/types/business.types';
import { IconAd, IconBrandGoogle, IconBrandInstagram, IconBrandMeta, IconBrandTripadvisor, IconChartArea, IconCode, IconDeviceMobile, IconEyeBolt, IconMapPin, IconMapSearch, IconPlanet, IconPlayerPlay, IconRobot, IconSeo, IconSettings, IconShoppingCart, IconTrophy, IconUsers, IconUsersGroup, IconBed, IconCalendar, IconChefHat, IconPhoto } from '@tabler/icons-react';
import React from 'react';

export const hotelsResorts: BusinessData = {
  id: '2',
  image: '/business/hotel-resort.jpg',
  slug: 'hotels-resorts',
  name: 'Hotels & Resorts',
  hero: {
    name: 'Luxury Hospitality Marketing',
    initial: 'Increase your bookings with ',
    headlineKeywords: [
      'direct reservations',
      'higher ADR',
      'year-round occupancy'
    ],
    brandLine: 'Digital solutions for 5-star hospitality performance',
    subheadline: 'Our revenue management strategies help luxury properties achieve 22-35% more direct bookings at 15-25% higher average daily rates',
    ctaButtons: [
      {
        text: 'Get Free Revenue Audit',
        link: '/free-revenue-audit',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'View Client Results',
        link: '/hospitality-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
    backgroundImage: '/business/hotel-resorts.jpeg'
  },
  services: {
    title: 'Hospitality Digital Marketing Suite',
    description: 'Comprehensive solutions designed to maximize occupancy rates, increase direct bookings, and enhance guest experiences for luxury hotels and resorts.',
    items: [
      {
        id: '360-digital-marketing',
        title: '360° Hospitality Marketing',
        description: 'Integrated campaigns across metasearch, OTAs, and direct channels to optimize revenue per available room (RevPAR).',
        icon: React.createElement(IconPlanet, { size: 30 }),
        url:'hotel-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'Social Media for Hotels',
        description: 'Visual storytelling campaigns showcasing amenities, events, and special packages to inspire bookings.',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        url: 'hotel-social-media'
      },
      {
        id: 'google-ads',
        title: 'Hotel PPC Management',
        description: 'Performance-based campaigns targeting "luxury resort [destination]" and "boutique hotel deals" keywords.',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        url: 'hotel-google-ads'
      },
      {
        id: 'other-ads',
        title: 'TripAdvisor & OTA Ads',
        description: 'Strategic bidding on Booking.com, Expedia, and TripAdvisor to capture high-intent travelers.',
        icon: React.createElement(IconBrandTripadvisor, { size: 30 }),
        url: 'hotel-ota-ads'
      },
      {
        id: 'local-seo',
        title: 'Local SEO for Hotels',
        description: 'Dominate "best hotels in [city]" and "luxury resorts near me" search results with our GEO-optimized strategy.',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        url:'hotel-local-seo'
      },
      {
        id: 'ecommerce-marketing',
        title: 'Booking Engine Optimization',
        description: 'Increase direct conversions by 40-60% with our frictionless booking flow and upsell strategies.',
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        url:'hotel-booking-optimization'
      },
      {
        id: 'web-design-development',
        title: 'Hotel Website Design',
        description: 'Mobile-optimized sites with real-time availability, virtual tours, and AI concierge for instant guest service.',
        icon: React.createElement(IconCode, { size: 30 }),
        url:'hotel-website-design'
      },
      {
        id: 'social-media-marketing',
        title: 'Instagram & TikTok for Resorts',
        description: 'Showcase property aesthetics, guest experiences, and influencer collaborations to drive aspirational bookings.',
        icon: React.createElement(IconPhoto, { size: 30 }),
        url: 'resort-social-media'
      },
      {
        id: 'aso-services',
        title: 'Hotel App Marketing',
        description: 'Increase mobile bookings with app store optimization for "hotel [destination]" searches.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        url: 'hotel-app-marketing'
      },
      {
        id: 'seo-services',
        title: 'Luxury Hotel SEO',
        description: 'Content strategy targeting high-value keywords like "honeymoon suites [location]" and "all-inclusive beach resorts".',
        icon: React.createElement(IconSeo, { size: 30 }),
        url: 'luxury-hotel-seo'
      },
      {
        id: 'gmb-services',
        title: 'Google Hotel Listings',
        description: 'Enhanced profiles with room types, amenities, and real-time pricing in Google Travel results.',
        icon: React.createElement(IconBed, { size: 30 }),
        url: 'google-hotel-listings'
      },
      {
        id: 'mobile-apps-development',
        title: 'Resort Mobile Apps',
        description: 'Custom apps with digital check-in, spa booking, and personalized guest experiences.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        url: 'resort-mobile-apps'
      },
      {
        id: 'website-maintenance',
        title: 'Hotel CMS Management',
        description: 'Daily updates for room rates, packages, and seasonal promotions across all digital channels.',
        icon: React.createElement(IconCalendar, { size: 30 }),
        url: 'hotel-cms-management'
      },
      {
        id: 'leads-generation',
        title: 'Group Booking Leads',
        description: 'Targeted campaigns for MICE (Meetings, Incentives, Conferences, Exhibitions) and wedding planners.',
        icon: React.createElement(IconUsers, { size: 30 }),
        url: 'hotel-group-bookings'
      },
      {
        id: 'marketing-automation',
        title: 'Guest Journey Automation',
        description: 'Pre-arrival to post-stay email/SMS sequences that increase repeat bookings by 35-50%.',
        icon: React.createElement(IconChefHat, { size: 30 }),
        url: 'hotel-guest-automation'
      }
    ],
  },
  stats: {
    title: "Hospitality Performance Metrics",
    items: [
      {
        icon: React.createElement(IconAd, { size: 30 }),
        title: 'Direct Bookings Growth',
        value: '240%',
        description: 'Average increase in commission-free reservations',
      },
      {
        icon: React.createElement(IconChartArea, { size: 30 }),
        title: 'ADR Improvement',
        value: '28%',
        description: 'Higher average daily rates through dynamic pricing',
      },
      {
        icon: React.createElement(IconEyeBolt, { size: 30 }),
        title: 'Website Engagement',
        value: '3.5x',
        description: 'Longer session duration on optimized hotel sites',
      },
      {
        icon: React.createElement(IconUsersGroup, { size: 30 }),
        title: 'Repeat Guest Rate',
        value: '45%',
        description: 'Of total bookings from loyalty program members',
      },
    ]
  },
  testimonials: {
    title: [
      { text: "Hotelier " },
      { text: "Testimonials", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
    ],
    items: [
      {
        id: '1',
        message:
          'Our direct bookings increased by 180% within 6 months of implementing their digital strategy. The ROI has been phenomenal...',
        stars: 5,
        name: 'Rajiv Malhotra',
        designation: 'General Manager',
        company: 'Taj Lakeside Udaipur',
      },
      {
        id: '2',
        message:
          'Their metasearch management helped us reduce OTA dependency from 72% to 38% while maintaining 92% occupancy...',
        stars: 5,
        name: 'Priya Nair',
        designation: 'Revenue Director',
        company: 'The Leela Palace',
      },
      {
        id: '3',
        message:
          'The AI-powered booking engine they implemented increased our upsell revenue by ₹2.8M in the first quarter alone...',
        stars: 4.5,
        name: 'Arjun Kapoor',
        designation: 'Owner',
        company: 'Wildflower Hall Shimla',
      },
      {
        id: '4',
        message:
          "Their Instagram Reels strategy brought us 12,000 new followers and ₹4.2M in direct bookings in 90 days...",
        stars: 5,
        name: 'Meera Patel',
        designation: 'Marketing Head',
        company: 'Kumarakom Lake Resort',
      }
    ],
  },
  cta: {
    title: 'Ready to Transform Your Hotel\'s Digital Presence?',
    subtitle: 'Speak With Our Hospitality Specialists',
    description:
      'Get a free performance audit of your current digital marketing and revenue management systems.',
  },
};