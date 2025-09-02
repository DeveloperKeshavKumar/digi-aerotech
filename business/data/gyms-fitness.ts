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
  IconHeart,
  IconFlame,
  IconMail,
  IconPlanet
} from '@tabler/icons-react';
import React from 'react';

export const gymsFitness: BusinessData = {
  id: '3',
  image: '/business/gym-fitness-digital-marketing.webp',
  slug: 'gym-fitness-digital-marketing',
  name: 'Gym & Fitness Digital Marketing Agency',

  hero: {
    name: 'Gym & Fitness Marketing Experts',
    initial: 'Grow Your Fitness Business with',
    headlineKeywords: [
      'Expert Gym Digital Marketing',
      'Member Acquisition Strategies',
      'Fitness Brand Growth Solutions'
    ],
    brandLine: 'Get 3X More Gym Members & Fill Your Classes',
    subheadline: 'Our proven digital marketing strategies help gyms, fitness studios, and personal trainers in India acquire 230% more members and increase retention rates by 55% through targeted campaigns.',
    ctaButtons: [
      {
        text: 'Get Free Gym Marketing Audit',
        link: '/contact',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'View Fitness Success Stories',
        link: '/results/gym-marketing-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
    backgroundImage: '/business/modern-gym-fitness-center.webp'
  },

  services: {
    title: 'Complete Gym & Fitness Digital Marketing Services',
    subtitle: 'Everything Your Fitness Business Needs to Dominate Locally',
    businessName: "gyms-fitness",
    description: 'Comprehensive digital marketing solutions designed specifically for gyms, fitness studios, personal trainers, and wellness centers. Our data-driven strategies help fitness businesses acquire more members, fill classes, and build lasting customer relationships.',
    items: [
      {
        id: '360-digital-marketing',
        title: 'Complete Gym Digital Marketing',
        description: 'Integrated omnichannel marketing campaigns combining local SEO, targeted ads, social media, and email marketing to maximize gym visibility and member acquisition across all platforms.',
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: '/360-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'Facebook & Instagram Gym Advertising',
        description: 'High-converting Meta ad campaigns featuring workout videos, transformation stories, and membership promotions to attract fitness enthusiasts and build community engagement.',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: '/meta-ads'
      },
      {
        id: 'google-ads',
        title: 'Google Ads for Fitness Centers',
        description: 'Targeted PPC campaigns for high-intent searches like "gym near me", "personal training [city]", and "fitness classes" that drive qualified leads and trial memberships.',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: '/google-ads'
      },
      {
        id: 'other-ads',
        title: 'YouTube & Display Advertising',
        description: 'Engaging video ads showcasing gym facilities, workout demonstrations, and success stories on YouTube and fitness-related websites to build brand awareness.',
        icon: React.createElement(IconBrandYoutube, { size: 30 }),
        link: '/other-ads'
      },
      {
        id: 'local-seo',
        title: 'Local SEO for Gyms',
        description: 'Dominate local fitness searches like "best gym in [city]", "24-hour fitness center", and "yoga classes near me" with location-based optimization strategies.',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: '/local-seo'
      },
      {
        id: 'web-design-development',
        title: 'Gym Website Development',
        description: 'Mobile-responsive fitness websites with class scheduling, trainer profiles, membership plans, virtual tour capabilities, and seamless booking integration.',
        icon: React.createElement(IconCode, { size: 30 }),
        link: '/web-design-development'
      },
      {
        id: 'social-media-marketing',
        title: 'Fitness Social Media Marketing',
        description: 'Strategic social media management across Instagram, Facebook, and TikTok with workout content, member spotlights, and community building that drives engagement.',
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: '/social-media-marketing'
      },
      {
        id: 'seo-services',
        title: 'Fitness SEO Services',
        description: 'Comprehensive SEO for gyms targeting keywords like "weight loss gym [city]", "CrossFit training", and "group fitness classes" to increase organic visibility.',
        icon: React.createElement(IconSeo, { size: 30 }),
        link: '/seo-services'
      },
      {
        id: 'gmb-services',
        title: 'Google Business Profile for Gyms',
        description: 'Optimized Google My Business profiles with facility photos, class schedules, member reviews, and regular posts to dominate local fitness searches.',
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: '/gmb-services'
      },
      {
        id: 'aso-services',
        title: 'Fitness App Store Optimization',
        description: 'Improve visibility and downloads for gym mobile apps in app stores by optimizing for "fitness tracker", "gym workouts", and "personal training app" searches.',
        icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
        link: '/aso-services'
      },
      {
        id: 'mobile-apps-development',
        title: 'Custom Gym Mobile Apps',
        description: 'Feature-rich fitness apps with workout tracking, class booking, progress monitoring, nutrition guides, and member community features to enhance retention.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: '/mobile-apps-development'
      },
      // {
      //   id: 'website-maintenance',
      //   title: 'Gym Website Maintenance',
      //   description: 'Ongoing website support including class schedule updates, trainer profile management, membership pricing changes, and performance optimization.',
      //   icon: React.createElement(IconSettings, { size: 30 }),
      //   link: '/website-maintenance'
      // },
      {
        id: 'leads-generation',
        title: 'Gym Lead Generation',
        description: 'Multi-channel lead generation using free trial offers, fitness challenges, nutrition guides, and conversion-optimized landing pages that attract potential members.',
        icon: React.createElement(IconUsers, { size: 30 }),
        link: '/leads-generation'
      },
    ]
  },

  stats: {
    title: "Proven Fitness Marketing Results",
    subtitle: "Data-Driven Success for Fitness Businesses",
    items: [
      {
        icon: React.createElement(IconUsers, { size: 30 }),
        title: 'Member Growth',
        value: '230%',
        description: 'Average increase in new gym memberships within 90 days of our marketing campaigns',
      },
      {
        icon: React.createElement(IconTarget, { size: 30 }),
        title: 'Higher Conversions',
        value: '3.4X',
        description: 'Improvement in trial-to-membership conversion rates through optimized funnels',
      },
      {
        icon: React.createElement(IconChartArea, { size: 30 }),
        title: 'Local Visibility',
        value: '280%',
        description: 'Increase in local search rankings and Google Maps visibility for fitness keywords',
      },
      {
        icon: React.createElement(IconHeart, { size: 30 }),
        title: 'Member Retention',
        value: '55%',
        description: 'Improvement in member retention through automated engagement campaigns',
      },
    ]
  },


  cta: {
    title: 'Ready to Fill Your Gym with Motivated Members?',
    subtitle: 'Get More Memberships, Grow Your Fitness Business',
    description: 'Schedule your free gym marketing consultation today. Our fitness marketing experts will analyze your current strategies and show you exactly how to attract more members and increase retention.',
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

}
