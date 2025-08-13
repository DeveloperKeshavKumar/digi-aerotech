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
    IconPalette,
    IconMail,
    IconPlanet,
    IconHome,
    IconTrendingUp,
    IconCamera,
    IconRuler,
    IconBulb
} from '@tabler/icons-react';
import React from 'react';

export const interiorDesigners: BusinessData = {
    id: '10',
    image: '/business/interior-designers-digital-marketing.webp',
    slug: 'interior-designers-digital-marketing',
    name: 'Interior Designers Digital Marketing Agency',

    hero: {
        name: 'Interior Design Marketing Experts',
        initial: 'Transform Your Design Business with',
        headlineKeywords: [
            'Expert Interior Design Marketing',
            'Portfolio Showcase Strategies',
            'Client Acquisition Solutions'
        ],
        brandLine: [
            {
                text: 'Get 5X More High-End Clients & Premium Projects',
                gradient: true,
                gradientClass: 'from-orange-500 via-pink-500 to-red-500'
            }
        ],
        subheadline: 'Our proven interior design marketing strategies help designers, architects, and home decor professionals in India attract 380% more luxury clients, showcase stunning portfolios, and build prestigious design brands through visual-first digital campaigns.',
        ctaButtons: [
            {
                text: 'Get Free Design Marketing Audit',
                link: '/free-interior-design-marketing-audit',
                variant: 'primary',
                icon: React.createElement(IconChartArea, { size: 20 })
            },
            {
                text: 'View Designer Success Stories',
                link: '/interior-design-marketing-case-studies',
                variant: 'secondary',
                icon: React.createElement(IconTrophy, { size: 20 })
            }
        ],
        backgroundImage: '/business/luxury-interior-design-portfolio.webp'
    },

    services: {
        title: 'Complete Interior Design Digital Marketing Services',
        subtitle: 'Everything Your Design Business Needs to Attract Premium Clients',
        description: 'Comprehensive digital marketing solutions designed specifically for interior designers, architects, home decor specialists, and design studios. Our visual-focused strategies help design professionals showcase their creativity, attract high-end clients, and build prestigious design brands.',
        items: [
            {
                id: '360-digital-marketing',
                title: 'Complete Interior Design Marketing',
                description: 'Integrated omnichannel marketing campaigns combining visual portfolio showcasing, luxury client targeting, design trend content, and brand positioning to maximize design business visibility and attract premium projects.',
                icon: React.createElement(IconPlanet, { size: 30 }),
                link: '/services/360-digital-marketing'
            },
            {
                id: 'meta-ads',
                title: 'Instagram & Facebook Design Advertising',
                description: 'Visually stunning Meta advertising campaigns featuring design portfolios, before/after transformations, and luxury home showcases to reach affluent homeowners and design enthusiasts.',
                icon: React.createElement(IconBrandMeta, { size: 30 }),
                link: '/services/meta-ads'
            },
            {
                id: 'google-ads',
                title: 'Google Ads for Interior Designers',
                description: 'Targeted PPC campaigns for high-intent searches like "interior designer near me", "luxury home design", and "residential architect" that connect you with clients ready to invest in design.',
                icon: React.createElement(IconBrandGoogle, { size: 30 }),
                link: '/services/google-ads'
            },
            {
                id: 'other-ads',
                title: 'Pinterest & YouTube Design Advertising',
                description: 'Visual platform advertising on Pinterest and YouTube showcasing design process videos, room makeovers, and style inspiration to capture design-conscious audiences.',
                icon: React.createElement(IconBrandYoutube, { size: 30 }),
                link: '/services/other-ads'
            },
            {
                id: 'local-seo',
                title: 'Local Interior Design SEO',
                description: 'Dominate location-based searches like "interior designers in [city]", "home decorators near me", and "luxury design studios [area]" to attract local high-end clients.',
                icon: React.createElement(IconMapSearch, { size: 30 }),
                link: '/services/local-seo'
            },
            {
                id: 'ecommerce-marketing',
                title: 'Design Service Sales Optimization',
                description: 'Conversion-optimized consultation booking systems, design package sales, virtual consultation platforms, and premium service offerings that maximize project value.',
                icon: React.createElement(IconShoppingCart, { size: 30 }),
                link: '/services/ecommerce-marketing'
            },
            {
                id: 'web-design-development',
                title: 'Interior Design Website Development',
                description: 'Stunning, portfolio-focused websites with high-resolution galleries, project showcases, client testimonials, design process explanations, and seamless consultation booking.',
                icon: React.createElement(IconCode, { size: 30 }),
                link: '/services/web-design-development'
            },
            {
                id: 'social-media-marketing',
                title: 'Design Social Media Marketing',
                description: 'Strategic visual-first social media management across Instagram, Pinterest, and Houzz with stunning design content, behind-the-scenes processes, and design inspiration.',
                icon: React.createElement(IconBrandInstagram, { size: 30 }),
                link: '/services/social-media-marketing'
            },
            {
                id: 'seo-services',
                title: 'Interior Design SEO Services',
                description: 'Comprehensive SEO targeting design-related keywords like "modern interior design", "luxury home decor", and style-specific terms to attract design-conscious clients.',
                icon: React.createElement(IconSeo, { size: 30 }),
                link: '/services/seo-services'
            },
            {
                id: 'gmb-services',
                title: 'Google Business Profile for Designers',
                description: 'Optimized Google My Business profiles with stunning portfolio photos, client reviews, design services, and regular posts to dominate local interior design searches.',
                icon: React.createElement(IconMapPin, { size: 30 }),
                link: '/services/gmb-services'
            },
            {
                id: 'aso-services',
                title: 'Design App Store Optimization',
                description: 'Improve visibility for interior design and home decor apps in app stores by optimizing for "home design apps", "interior decorating", and "room planner" searches.',
                icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
                link: '/services/aso-services'
            },
            {
                id: 'mobile-apps-development',
                title: 'Custom Design Mobile Applications',
                description: 'Professional design apps with portfolio galleries, 3D room visualization, client project management, design inspiration feeds, and consultation booking features.',
                icon: React.createElement(IconDeviceMobile, { size: 30 }),
                link: '/services/mobile-apps-development'
            },
            {
                id: 'website-maintenance',
                title: 'Design Website Maintenance',
                description: 'Ongoing website support including portfolio updates, new project additions, client testimonial management, design trend content, and performance optimization.',
                icon: React.createElement(IconSettings, { size: 30 }),
                link: '/services/website-maintenance'
            },
            {
                id: 'leads-generation',
                title: 'High-End Client Lead Generation',
                description: 'Multi-channel lead generation targeting affluent homeowners using design guides, room makeover consultations, and luxury home showcases that attract premium clients.',
                icon: React.createElement(IconUsers, { size: 30 }),
                link: '/services/leads-generation'
            },
            {
                id: 'marketing-automation',
                title: 'Design Marketing Automation',
                description: 'Automated email campaigns, CRM integration, and client nurture sequences for consultation follow-ups, project updates, design inspiration, and client relationship management.',
                icon: React.createElement(IconRobot, { size: 30 }),
                link: '/services/marketing-automation'
            }
        ]
    },

    stats: {
        title: "Proven Interior Design Marketing Results",
        subtitle: "Data-Driven Success for Design Professionals",
        items: [
            {
                icon: React.createElement(IconTrendingUp, { size: 30 }),
                title: 'Premium Clients',
                value: '380%',
                description: 'Average increase in high-end client inquiries within 90 days of our design marketing campaigns',
            },
            {
                icon: React.createElement(IconTarget, { size: 30 }),
                title: 'Project Value',
                value: '4.5X',
                description: 'Improvement in average project size and design service rates through premium positioning',
            },
            {
                icon: React.createElement(IconCamera, { size: 30 }),
                title: 'Portfolio Visibility',
                value: '320%',
                description: 'Growth in design portfolio views and engagement across all digital platforms',
            },
            {
                icon: React.createElement(IconStar, { size: 30 }),
                title: 'Brand Recognition',
                value: '4.8/5',
                description: 'Average improvement in designer brand awareness and industry recognition',
            },
        ]
    },

    testimonials: {
        title: [
            { text: "Interior Design " },
            { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
        ],
        subtitle: "How We've Helped Design Professionals Build Prestigious Brands",
        description: "Read testimonials from successful interior designers, architects, and design studio owners who have transformed their businesses with our visual-first marketing expertise.",
        items: [
            {
                id: '1',
                message: 'My interior design business transformed completely within 6 months of working with this team. Their Instagram and portfolio website strategies attracted 15 luxury home projects worth ₹2.5 crore total. My consultation rates tripled.',
                highlight: '15 luxury projects worth ₹2.5 crore and tripled consultation rates',
                stars: 5,
                name: 'Kavya Sharma',
                designation: 'Interior Designer',
                company: 'Elegant Spaces Mumbai'
            },
            {
                id: '2',
                message: 'Their visual content strategy and Pinterest marketing for my home decor consultancy generated 280 high-quality leads in 4 months. I now work exclusively with premium clients and my project values increased by 400%.',
                highlight: '280 leads in 4 months and 400% higher project values',
                stars: 5,
                name: 'Arjun Patel',
                designation: 'Home Design Consultant',
                company: 'Luxury Living Designs Ahmedabad'
            },
            {
                id: '3',
                message: 'The local SEO and Google Ads campaigns they managed for our design studio brought in 45 consultation bookings per month. We rank #1 for "interior designers Bangalore" and our studio is booked 3 months in advance.',
                highlight: '45 consultation bookings monthly and #1 ranking',
                stars: 5,
                name: 'Priya Reddy',
                designation: 'Design Studio Owner',
                company: 'Modern Interiors Bangalore'
            },
            {
                id: '4',
                message: 'As an architect specializing in residential design, their marketing helped me establish thought leadership in luxury home design. Featured in 3 design magazines and landed a ₹5 crore villa project.',
                highlight: 'featured in 3 magazines and ₹5 crore villa project',
                stars: 5,
                name: 'Rajesh Malhotra',
                designation: 'Residential Architect',
                company: 'Architectural Visions Delhi'
            },
            {
                id: '5',
                message: 'Their social media marketing and before/after content strategy for my renovation business increased inquiries by 350%. I now focus only on high-end home makeovers and my margins improved significantly.',
                stars: 4,
                name: 'Meera Gupta',
                designation: 'Home Renovation Specialist',
                company: 'Transform Homes Pune'
            },
            {
                id: '6',
                message: 'The mobile app they developed for my design consultancy allows clients to visualize spaces in 3D. Client satisfaction scores reached 4.9/5 and referrals increased by 200%.',
                highlight: '4.9/5 client satisfaction and 200% more referrals',
                stars: 5,
                name: 'Vikram Singh',
                designation: 'Interior Design Consultant',
                company: 'Spatial Creations Jaipur'
            }
        ],
    },

    cta: {
        title: 'Ready to Attract Your Dream Design Clients?',
        subtitle: 'Build Your Design Brand, Showcase Your Portfolio, Win Premium Projects',
        description: 'Schedule your free interior design marketing consultation today. Our design marketing experts will analyze your current portfolio presentation and show you exactly how to attract high-end clients and command premium rates.',
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
