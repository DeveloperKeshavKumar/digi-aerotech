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
  IconPlane,
  IconMail,
  IconPlanet,
  IconCamera,
  IconTrendingUp,
  IconCompass,
  IconBeach,
  IconMountain
} from '@tabler/icons-react';
import React from 'react';

export const travelTourism: BusinessData = {
  id: '11',
  image: '/business/travel-tourism-digital-marketing.webp',
  slug: 'travel-tourism-digital-marketing',
  name: 'Travel & Tourism Digital Marketing Agency',

  hero: {
    name: 'Travel & Tourism Marketing Experts',
    initial: 'Scale Your Travel Business with',
    headlineKeywords: [
      'Expert Travel Digital Marketing',
      'Destination Promotion Strategies',
      'Tourism Growth Solutions'
    ],
    brandLine: 'Get 6X More Bookings & Build Wanderlust Community',
    subheadline: 'Our proven travel and tourism marketing strategies help tour operators, travel agencies, and destination marketers in India increase bookings by 420%, build traveler communities, and create viral destination awareness through inspiring digital campaigns.',
    ctaButtons: [
      {
        text: 'Get Free Travel Marketing Audit',
        link: '/free-travel-marketing-audit',
        variant: 'primary',
        icon: React.createElement(IconChartArea, { size: 20 })
      },
      {
        text: 'View Travel Success Stories',
        link: '/travel-marketing-case-studies',
        variant: 'secondary',
        icon: React.createElement(IconTrophy, { size: 20 })
      }
    ],
    backgroundImage: '/business/incredible-travel-destinations.webp'
  },

  services: {
    title: 'Complete Travel & Tourism Digital Marketing Services',
    subtitle: 'Everything Your Travel Business Needs to Inspire More Travelers',
    businessName: 'travel-tourism',
    description: 'Comprehensive digital marketing solutions designed specifically for travel agencies, tour operators, hotels, destination marketers, and tourism boards. Our wanderlust-inspiring strategies help travel businesses attract adventure seekers, build travel communities, and drive bookings worldwide.',
    items: [
      {
        id: '360-digital-marketing',
        title: 'Complete Travel Digital Marketing',
        description: 'Integrated omnichannel marketing campaigns combining destination storytelling, travel influencer partnerships, seasonal promotions, and wanderlust-inspiring content to maximize travel brand visibility and bookings.',
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: '/360-digital-marketing'
      },
      {
        id: 'meta-ads',
        title: 'Instagram & Facebook Travel Advertising',
        description: 'Visually captivating Meta advertising campaigns featuring destination photography, travel videos, and experiential content to inspire wanderlust and drive travel bookings from social media.',
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: '/meta-ads'
      },
      {
        id: 'google-ads',
        title: 'Google Ads for Travel Companies',
        description: 'Strategic PPC campaigns targeting high-intent travel searches like "holiday packages", "tour operators", and destination-specific keywords that connect with travelers ready to book.',
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: '/google-ads'
      },
      {
        id: 'other-ads',
        title: 'YouTube & Travel Platform Advertising',
        description: 'Immersive travel video content and destination showcases on YouTube, travel blogs, and tourism platforms to inspire travel decisions and showcase unique experiences.',
        icon: React.createElement(IconBrandYoutube, { size: 30 }),
        link: '/other-ads'
      },
      {
        id: 'local-seo',
        title: 'Destination Local SEO',
        description: 'Optimize for location-based travel searches like "things to do in [destination]", "travel guide [city]", and "tour operators near [location]" to capture travel planning searches.',
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: '/local-seo'
      },
      {
        id: 'ecommerce-marketing',
        title: 'Travel Booking Optimization',
        description: 'Conversion-optimized travel booking systems, package deal promotions, early bird discounts, and seamless payment gateways that maximize travel sales and reduce booking abandonment.',
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        link: '/ecommerce-marketing'
      },
      {
        id: 'web-design-development',
        title: 'Travel Website Development',
        description: 'Inspiring travel websites with destination galleries, itinerary builders, booking systems, travel guides, customer testimonials, and immersive visual experiences that convert browsers into bookers.',
        icon: React.createElement(IconCode, { size: 30 }),
        link: '/web-design-development'
      },
      {
        id: 'social-media-marketing',
        title: 'Travel Social Media Marketing',
        description: 'Strategic travel content across Instagram, Facebook, TikTok, and Pinterest with destination highlights, travel tips, user-generated content, and community building that inspires wanderlust.',
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: '/social-media-marketing'
      },
      {
        id: 'seo-services',
        title: 'Travel SEO Services',
        description: 'Comprehensive SEO for travel businesses targeting destination keywords, travel guides, adventure activities, and tourism-related searches to attract travel planners and adventure seekers.',
        icon: React.createElement(IconSeo, { size: 30 }),
        link: '/seo-services'
      },
      {
        id: 'gmb-services',
        title: 'Google Business Profile for Travel',
        description: 'Optimized Google My Business profiles with destination photos, traveler reviews, tour highlights, and regular travel updates to dominate local travel and tourism searches.',
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: '/gmb-services'
      },
      {
        id: 'aso-services',
        title: 'Travel App Store Optimization',
        description: 'Improve visibility for travel and tourism apps in app stores by optimizing for "travel booking", "destination guide", and "trip planner" searches that travelers use.',
        icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
        link: '/aso-services'
      },
      {
        id: 'mobile-apps-development',
        title: 'Custom Travel Mobile Applications',
        description: 'Feature-rich travel apps with itinerary planning, offline maps, booking capabilities, travel guides, expense tracking, and social sharing for enhanced traveler experience.',
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: '/mobile-apps-development'
      },
      {
        id: 'website-maintenance',
        title: 'Travel Website Maintenance',
        description: 'Ongoing website support including seasonal package updates, destination content management, booking system maintenance, and travel trend integration for travel websites.',
        icon: React.createElement(IconSettings, { size: 30 }),
        link: '/website-maintenance'
      },
      {
        id: 'leads-generation',
        title: 'Travel Lead Generation',
        description: 'Multi-channel lead generation using travel guides, destination webinars, early bird offers, and conversion-optimized campaigns that attract travelers in their planning phase.',
        icon: React.createElement(IconUsers, { size: 30 }),
        link: '/leads-generation'
      },
      {
        id: 'marketing-automation',
        title: 'Travel Marketing Automation',
        description: 'Automated email and SMS campaigns for booking confirmations, travel reminders, post-trip follow-ups, seasonal promotions, and personalized travel recommendations.',
        icon: React.createElement(IconRobot, { size: 30 }),
        link: '/marketing-automation'
      }
    ]
  },

  stats: {
    title: "Proven Travel Marketing Results",
    subtitle: "Data-Driven Success for Tourism & Travel Businesses",
    items: [
      {
        icon: React.createElement(IconPlane, { size: 30 }),
        title: 'Booking Growth',
        value: '420%',
        description: 'Average increase in travel bookings within 120 days of our tourism marketing campaigns',
      },
      {
        icon: React.createElement(IconTarget, { size: 30 }),
        title: 'Revenue Boost',
        value: '5.2X',
        description: 'Improvement in travel package sales and average booking value through strategic marketing',
      },
      {
        icon: React.createElement(IconCamera, { size: 30 }),
        title: 'Brand Visibility',
        value: '380%',
        description: 'Growth in destination awareness and travel brand recognition across digital platforms',
      },
      {
        icon: React.createElement(IconStar, { size: 30 }),
        title: 'Traveler Satisfaction',
        value: '4.9/5',
        description: 'Average improvement in traveler experience and destination recommendation rates',
      },
    ]
  },

  testimonials: {
    title: [
      { text: "Travel & Tourism " },
      { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
    ],
    subtitle: "How We've Helped Travel Businesses Create Wanderlust",
    description: "Read testimonials from successful travel agencies, tour operators, and destination marketers who have transformed their businesses with our wanderlust-inspiring marketing expertise.",
    items: [
      {
        id: '1',
        message: 'Our travel agency\'s bookings increased by 480% within 8 months thanks to their Instagram campaigns and destination marketing strategies. The visual content they created made our packages go viral, bringing in travelers from 15 different countries.',
        highlight: 'bookings increased by 480% with travelers from 15 countries',
        stars: 5,
        name: 'Rajesh Khanna',
        designation: 'Travel Agency Owner',
        company: 'Wanderlust Adventures Delhi'
      },
      {
        id: '2',
        message: 'Their SEO and content marketing for our Goa tour packages got us ranking #1 for "Goa holiday packages" and "beach resorts Goa". Our monthly bookings went from 25 to 280, and we expanded our fleet of vehicles.',
        highlight: '#1 ranking and monthly bookings from 25 to 280',
        stars: 5,
        name: 'Priya Sharma',
        designation: 'Tour Operator',
        company: 'Coastal Escapes Goa'
      },
      {
        id: '3',
        message: 'The YouTube travel vlogs and Google Ads campaigns they created for our Himalayan trekking company brought in 350 adventure seekers in 6 months. Our premium treks are now booked 4 months in advance.',
        highlight: '350 adventure seekers and booked 4 months in advance',
        stars: 5,
        name: 'Vikram Patel',
        designation: 'Adventure Tour Company Owner',
        company: 'Mountain High Adventures Himachal'
      },
      {
        id: '4',
        message: 'Their destination marketing campaigns for our Kerala houseboat business generated international attention. Featured in 5 travel magazines and our revenue increased by 600% with bookings from USA, UK, and Australia.',
        highlight: 'featured in 5 magazines and 600% revenue increase',
        stars: 5,
        name: 'Anita Nair',
        designation: 'Houseboat Business Owner',
        company: 'Backwater Bliss Kerala'
      },
      {
        id: '5',
        message: 'As a heritage walk tour guide in Rajasthan, their local SEO and Google My Business optimization helped me get discovered by international tourists. My tour bookings increased by 250% and I now employ 3 additional guides.',
        stars: 4,
        name: 'Suresh Singh',
        designation: 'Heritage Tour Guide',
        company: 'Royal Rajasthan Walks Jaipur'
      },
      {
        id: '6',
        message: 'The travel app they developed for our multi-city tour company has been game-changing. Travelers love the offline maps and itinerary features. Our customer satisfaction score reached 4.8/5 and repeat bookings increased by 85%.',
        highlight: '4.8/5 satisfaction and 85% more repeat bookings',
        stars: 5,
        name: 'Meera Gupta',
        designation: 'Multi-City Tour Operator',
        company: 'Golden Triangle Tours Mumbai'
      }
    ],
  },

  cta: {
    title: 'Ready to Make Your Destination the Next Must-Visit Place?',
    subtitle: 'Get More Bookings, Inspire Travelers, Build Wanderlust Community',
    description: 'Schedule your free travel marketing consultation today. Our tourism experts will analyze your current marketing strategies and show you exactly how to attract more travelers and create unforgettable destination experiences.',
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
