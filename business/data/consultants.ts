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
    IconTrophy,
    IconSettings,
    IconMapPin,
    IconBrandGooglePlay,
    IconTarget,
    IconStar,
    IconPlanet,
    IconTrendingUp,
} from '@tabler/icons-react';
import { Lightbulb } from 'lucide-react';
import React from 'react';

export const consultants: BusinessData = {
    id: '7',
    image: '/business/consultants-coaches-digital-marketing.webp',
    slug: 'consultants-coaches-digital-marketing',
    name: 'Consultants & Coaches Digital Marketing Agency',

    hero: {
        name: 'Consultants & Coaches Marketing Experts',
        initial: 'Scale Your Consulting Business with',
        headlineKeywords: [
            'Expert Consultant Digital Marketing',
            'Coaching Business Growth',
            'Authority Building Strategies'
        ],
        brandLine: [
            {
                text: 'Get 6X More High-Paying Clients & Establish Industry Authority',
                gradient: true,
                gradientClass: 'from-orange-500 via-pink-500 to-red-500'
            }
        ],
        subheadline: 'Our proven consultant and coach marketing strategies help independent consultants, business coaches, and advisory professionals in India generate 420% more qualified leads, build thought leadership, and command premium rates through strategic digital positioning.',
        ctaButtons: [
            {
                text: 'Get Free Consultant Marketing Audit',
                link: '/free-consultant-marketing-audit',
                variant: 'primary',
                icon: React.createElement(IconChartArea, { size: 20 })
            },
            {
                text: 'View Consultant Success Stories',
                link: '/consultant-marketing-case-studies',
                variant: 'secondary',
                icon: React.createElement(IconTrophy, { size: 20 })
            }
        ],
        backgroundImage: '/business/professional-consultant-coaching.webp'
    },

    services: {
        title: 'Complete Consultant & Coach Digital Marketing Services',
        subtitle: 'Everything Your Consulting Practice Needs to Attract Premium Clients',
        businessName: 'consultants',
        description: 'Comprehensive digital marketing solutions designed specifically for consultants, coaches, advisors, and thought leaders. Our data-driven strategies help consulting professionals build authority, generate high-value leads, and scale their expertise into profitable businesses.',
        items: [
            {
                id: '360-digital-marketing',
                title: 'Complete Consultant Digital Marketing',
                description: 'Integrated omnichannel marketing campaigns combining thought leadership content, speaking opportunities, LinkedIn strategy, and authority building to position consultants as industry experts and attract premium clients.',
                icon: React.createElement(IconPlanet, { size: 30 }),
                link: '/360-digital-marketing'
            },
            {
                id: 'meta-ads',
                title: 'LinkedIn & Facebook Consultant Advertising',
                description: 'Targeted social media advertising campaigns focusing on decision-makers and business leaders, showcasing expertise through case studies, testimonials, and thought leadership content.',
                icon: React.createElement(IconBrandMeta, { size: 30 }),
                link: '/meta-ads'
            },
            {
                id: 'google-ads',
                title: 'Google Ads for Consultants',
                description: 'Strategic PPC campaigns targeting high-intent searches like "business consultant", "executive coach", and industry-specific consulting keywords that attract clients ready to invest in expertise.',
                icon: React.createElement(IconBrandGoogle, { size: 30 }),
                link: '/google-ads'
            },
            {
                id: 'other-ads',
                title: 'LinkedIn & YouTube Consultant Advertising',
                description: 'Professional video content and thought leadership ads on LinkedIn and YouTube to demonstrate expertise, share insights, and attract high-value consulting opportunities.',
                icon: React.createElement(IconBrandYoutube, { size: 30 }),
                link: '/other-ads'
            },
            {
                id: 'local-seo',
                title: 'Local Consultant SEO',
                description: 'Optimize for location-based searches like "business consultant in [city]", "executive coach near me", and "management consultant [location]" to capture local high-value opportunities.',
                icon: React.createElement(IconMapSearch, { size: 30 }),
                link: '/local-seo'
            },
            {
                id: 'web-design-development',
                title: 'Professional Consultant Website Development',
                description: 'Authority-building websites with case studies, client testimonials, expertise showcases, speaking portfolios, and consultation booking systems that convert prospects into paying clients.',
                icon: React.createElement(IconCode, { size: 30 }),
                link: '/web-design-development'
            },
            {
                id: 'social-media-marketing',
                title: 'Consultant Social Media Marketing',
                description: 'Strategic LinkedIn, Twitter, and professional platform management with thought leadership content, industry insights, and expertise demonstration that builds credibility and attracts clients.',
                icon: React.createElement(IconBrandInstagram, { size: 30 }),
                link: '/social-media-marketing'
            },
            {
                id: 'seo-services',
                title: 'Consultant SEO Services',
                description: 'Comprehensive SEO for consultants targeting keywords like "business strategy consultant", "executive coaching", and expertise-specific terms to increase visibility among potential clients.',
                icon: React.createElement(IconSeo, { size: 30 }),
                link: '/seo-services'
            },
            {
                id: 'gmb-services',
                title: 'Google Business Profile for Consultants',
                description: 'Optimized Google My Business profiles with professional credentials, client reviews, service descriptions, and regular insights to dominate local consultant searches.',
                icon: React.createElement(IconMapPin, { size: 30 }),
                link: '/gmb-services'
            },
            {
                id: 'aso-services',
                title: 'Consultant App Store Optimization',
                description: 'Improve visibility and downloads for coaching and consulting mobile applications by optimizing for "business coaching apps", "consultant tools", and professional development searches.',
                icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
                link: '/aso-services'
            },
            {
                id: 'mobile-apps-development',
                title: 'Custom Consultant Mobile Applications',
                description: 'Professional coaching and consulting apps with client management, session scheduling, progress tracking, resource libraries, and communication tools for enhanced client experience.',
                icon: React.createElement(IconDeviceMobile, { size: 30 }),
                link: '/mobile-apps-development'
            },
            // {
            //     id: 'website-maintenance',
            //     title: 'Consultant Website Maintenance',
            //     description: 'Ongoing website support including content updates, case study additions, testimonial management, speaking engagement updates, and performance optimization for consultant websites.',
            //     icon: React.createElement(IconSettings, { size: 30 }),
            //     link: '/website-maintenance'
            // },
            {
                id: 'leads-generation',
                title: 'High-Value Client Lead Generation',
                description: 'Multi-channel lead generation using expertise-based content, webinars, whitepapers, and conversion-optimized campaigns that attract decision-makers seeking consulting services.',
                icon: React.createElement(IconUsers, { size: 30 }),
                link: '/leads-generation'
            },
        ]
    },

    stats: {
        title: "Proven Consultant Marketing Results",
        subtitle: "Data-Driven Success for Consulting Professionals",
        items: [
            {
                icon: React.createElement(IconTrendingUp, { size: 30 }),
                title: 'Client Acquisition',
                value: '420%',
                description: 'Average increase in high-value client inquiries within 120 days of our marketing campaigns',
            },
            {
                icon: React.createElement(IconTarget, { size: 30 }),
                title: 'Premium Rates',
                value: '6.5X',
                description: 'Improvement in consultant hourly rates and project values through authority positioning',
            },
            {
                icon: React.createElement(Lightbulb, { size: 30 }),
                title: 'Thought Leadership',
                value: '380%',
                description: 'Growth in industry recognition, speaking opportunities, and media mentions',
            },
            {
                icon: React.createElement(IconStar, { size: 30 }),
                title: 'Client Satisfaction',
                value: '4.9/5',
                description: 'Average improvement in consultant brand perception and client retention rates',
            },
        ]
    },


    cta: {
        title: 'Ready to Become the Go-To Expert in Your Field?',
        subtitle: 'Build Authority, Attract Premium Clients, Scale Your Consulting Practice',
        description: 'Schedule your free consultant marketing consultation today. Our experts will analyze your current positioning and show you exactly how to build thought leadership and attract high-value clients who pay premium rates.',
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
