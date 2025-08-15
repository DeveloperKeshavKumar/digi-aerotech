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
    IconBuilding,
    IconMail,
    IconPlanet,
    IconClock,
    IconTrendingUp,
    IconHeart,
    IconPhone,
    IconTools
} from '@tabler/icons-react';
import React from 'react';

export const localBusinesses: BusinessData = {
    id: '8',
    image: '/business/local-businesses-digital-marketing.webp',
    slug: 'local-businesses-digital-marketing',
    name: 'Local Business Digital Marketing Agency',

    hero: {
        name: 'Local Business Marketing Experts',
        initial: 'Dominate Your Local Market with',
        headlineKeywords: [
            'Expert Local Business Marketing',
            'Community Growth Strategies',
            'Neighborhood Visibility Solutions'
        ],
        brandLine: [
            {
                text: 'Get 5X More Local Customers & Build Community Loyalty',
                gradient: true,
                gradientClass: 'from-orange-500 via-pink-500 to-red-500'
            }
        ],
        subheadline: 'Our proven local business marketing strategies help neighborhood shops, service providers, and community businesses in India increase foot traffic by 350%, boost local sales by 280%, and build lasting customer relationships through hyper-targeted digital campaigns.',
        ctaButtons: [
            {
                text: 'Get Free Local Business Audit',
                link: '/free-local-business-audit',
                variant: 'primary',
                icon: React.createElement(IconChartArea, { size: 20 })
            },
            {
                text: 'View Local Success Stories',
                link: '/local-business-case-studies',
                variant: 'secondary',
                icon: React.createElement(IconTrophy, { size: 20 })
            }
        ],
        backgroundImage: '/business/thriving-local-business-community.webp'
    },

    services: {
        title: 'Complete Local Business Digital Marketing Services',
        subtitle: 'Everything Your Community Business Needs to Attract More Local Customers',
        description: 'Comprehensive digital marketing solutions designed specifically for local businesses, neighborhood shops, service providers, and community-focused enterprises. Our data-driven strategies help local businesses increase visibility, attract nearby customers, and build strong community presence.',
        items: [
            {
                id: '360-digital-marketing',
                title: 'Complete Local Business Marketing',
                description: 'Integrated omnichannel marketing campaigns combining local SEO, community engagement, neighborhood advertising, and reputation management to maximize local visibility and drive foot traffic.',
                icon: React.createElement(IconPlanet, { size: 30 }),
                link: '/360-digital-marketing'
            },
            {
                id: 'meta-ads',
                title: 'Facebook & Instagram Local Advertising',
                description: 'Geo-targeted Meta advertising campaigns focusing on neighborhood audiences, local events, community promotions, and location-based offers that drive nearby customers to your business.',
                icon: React.createElement(IconBrandMeta, { size: 30 }),
                link: '/meta-ads'
            },
            {
                id: 'google-ads',
                title: 'Google Ads for Local Businesses',
                description: 'Location-based PPC campaigns targeting "near me" searches, local service keywords, and neighborhood-specific terms that connect you with customers actively looking for local solutions.',
                icon: React.createElement(IconBrandGoogle, { size: 30 }),
                link: '/google-ads'
            },
            {
                id: 'other-ads',
                title: 'YouTube & Local Display Advertising',
                description: 'Community-focused video content and display advertising on local websites, community platforms, and regional publications to build neighborhood brand awareness.',
                icon: React.createElement(IconBrandYoutube, { size: 30 }),
                link: '/other-ads'
            },
            {
                id: 'local-seo',
                title: 'Hyper-Local SEO Optimization',
                description: 'Dominate "near me" searches and neighborhood-specific keywords like "[service] in [locality]", "best [business type] [area]" to ensure locals find you first online.',
                icon: React.createElement(IconMapSearch, { size: 30 }),
                link: '/local-seo'
            },
            {
                id: 'ecommerce-marketing',
                title: 'Local E-commerce & Online Ordering',
                description: 'Local delivery optimization, neighborhood e-commerce solutions, online booking systems, and local marketplace presence to serve customers both online and offline.',
                icon: React.createElement(IconShoppingCart, { size: 30 }),
                link: '/ecommerce-marketing'
            },
            {
                id: 'web-design-development',
                title: 'Local Business Website Development',
                description: 'Mobile-responsive local business websites with location information, customer reviews, service areas, contact forms, and local SEO optimization for maximum neighborhood visibility.',
                icon: React.createElement(IconCode, { size: 30 }),
                link: '/web-design-development'
            },
            {
                id: 'social-media-marketing',
                title: 'Local Social Media Marketing',
                description: 'Community-focused social media management across Facebook, Instagram, and local platforms with neighborhood events, customer spotlights, and local engagement strategies.',
                icon: React.createElement(IconBrandInstagram, { size: 30 }),
                link: '/social-media-marketing'
            },
            {
                id: 'seo-services',
                title: 'Local Business SEO Services',
                description: 'Comprehensive local SEO targeting neighborhood keywords, service area optimization, and location-based content to dominate local search results and attract nearby customers.',
                icon: React.createElement(IconSeo, { size: 30 }),
                link: '/seo-services'
            },
            {
                id: 'gmb-services',
                title: 'Google My Business Optimization',
                description: 'Complete Google My Business management with local photos, customer reviews, Q&A optimization, posts, and local attributes to dominate local map searches and attract walk-ins.',
                icon: React.createElement(IconMapPin, { size: 30 }),
                link: '/gmb-services'
            },
            {
                id: 'aso-services',
                title: 'Local Business App Optimization',
                description: 'Improve visibility for local business mobile apps in app stores by optimizing for location-based searches and "local services" keywords that neighborhood customers use.',
                icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
                link: '/aso-services'
            },
            {
                id: 'mobile-apps-development',
                title: 'Local Business Mobile Apps',
                description: 'Custom mobile applications with location features, loyalty programs, local offers, push notifications for neighborhood promotions, and easy contact/booking functionality.',
                icon: React.createElement(IconDeviceMobile, { size: 30 }),
                link: '/mobile-apps-development'
            },
            {
                id: 'website-maintenance',
                title: 'Local Business Website Maintenance',
                description: 'Ongoing website support including hours updates, seasonal promotions, local event listings, customer testimonial management, and local SEO maintenance.',
                icon: React.createElement(IconSettings, { size: 30 }),
                link: '/website-maintenance'
            },
            {
                id: 'leads-generation',
                title: 'Local Customer Acquisition',
                description: 'Neighborhood-focused lead generation using local offers, community events, referral programs, and geo-targeted campaigns that attract customers from your immediate service area.',
                icon: React.createElement(IconUsers, { size: 30 }),
                link: '/leads-generation'
            },
            {
                id: 'marketing-automation',
                title: 'Local Marketing Automation',
                description: 'Automated email and SMS campaigns for appointment reminders, local promotions, customer follow-ups, birthday offers, and neighborhood event notifications.',
                icon: React.createElement(IconRobot, { size: 30 }),
                link: '/marketing-automation'
            }
        ]
    },

    stats: {
        title: "Proven Local Business Marketing Results",
        subtitle: "Data-Driven Success for Community Businesses",
        items: [
            {
                icon: React.createElement(IconTrendingUp, { size: 30 }),
                title: 'Foot Traffic',
                value: '350%',
                description: 'Average increase in local customers and walk-ins within 90 days of our marketing campaigns',
            },
            {
                icon: React.createElement(IconTarget, { size: 30 }),
                title: 'Local Sales',
                value: '280%',
                description: 'Improvement in neighborhood sales and revenue through targeted local marketing strategies',
            },
            {
                icon: React.createElement(IconHeart, { size: 30 }),
                title: 'Customer Loyalty',
                value: '4.5X',
                description: 'Growth in repeat customers and local community engagement through relationship building',
            },
            {
                icon: React.createElement(IconStar, { size: 30 }),
                title: 'Local Reviews',
                value: '450%',
                description: 'Increase in positive online reviews and local reputation scores across all platforms',
            },
        ]
    },

    testimonials: {
        title: [
            { text: "Local Business " },
            { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
        ],
        subtitle: "How We've Helped Community Businesses Thrive",
        description: "Read testimonials from successful local business owners, neighborhood shops, and service providers who have transformed their community presence with our digital marketing expertise.",
        items: [
            {
                id: '1',
                message: 'Our neighborhood bakery\'s daily customers tripled within 4 months thanks to their local SEO and Google My Business optimization. We now rank #1 for "bakery near me" and have customers traveling from 3 different localities to visit us.',
                highlight: 'daily customers tripled and rank #1 for bakery near me',
                stars: 5,
                name: 'Rajesh Sharma',
                designation: 'Owner',
                company: 'Sweet Treats Bakery Delhi'
            },
            {
                id: '2',
                message: 'Their Facebook advertising and local social media strategy for our salon brought in 120 new customers in 2 months. Our appointment book is now full 2 weeks in advance, and we had to hire additional staff.',
                highlight: '120 new customers in 2 months and fully booked',
                stars: 5,
                name: 'Priya Patel',
                designation: 'Salon Owner',
                company: 'Glamour Studio Mumbai'
            },
            {
                id: '3',
                message: 'As a local plumber, I was struggling to get noticed online. Their local SEO and Google Ads campaigns now bring me 40-50 calls per week. I\'ve expanded my team and increased my rates by 30%.',
                highlight: '40-50 calls per week and increased rates by 30%',
                stars: 5,
                name: 'Suresh Reddy',
                designation: 'Local Service Provider',
                company: 'Quick Fix Plumbing Hyderabad'
            },
            {
                id: '4',
                message: 'Our family restaurant was barely surviving before working with this team. Their local marketing campaigns and review management helped us become the top-rated restaurant in our area. Revenue increased by 400%.',
                highlight: 'became top-rated restaurant and 400% revenue increase',
                stars: 5,
                name: 'Meera Gupta',
                designation: 'Restaurant Owner',
                company: 'Home Style Kitchen Pune'
            },
            {
                id: '5',
                message: 'Their local business app and loyalty program transformed our grocery store. Regular customers increased by 200%, and our average order value went up significantly through the mobile ordering system.',
                stars: 4,
                name: 'Amit Kumar',
                designation: 'Store Owner',
                company: 'Fresh Mart Grocery Bangalore'
            },
            {
                id: '6',
                message: 'The website and local marketing automation they set up for our pet grooming service has been amazing. We went from 15 appointments per week to 60+, and our customer retention improved by 75%.',
                highlight: 'went from 15 to 60+ appointments and 75% better retention',
                stars: 5,
                name: 'Kavya Nair',
                designation: 'Pet Service Owner',
                company: 'Paws & Claws Grooming Kerala'
            }
        ],
    },

    cta: {
        title: 'Ready to Become the #1 Local Business in Your Area?',
        subtitle: 'Get More Local Customers, Build Community Loyalty, Dominate Your Neighborhood',
        description: 'Schedule your free local business marketing consultation today. Our local marketing experts will analyze your current community presence and show you exactly how to attract more neighborhood customers and build lasting local relationships.',
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
