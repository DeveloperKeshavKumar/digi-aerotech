import React from "react";
import { BusinessData } from "../business.types";
import { IconBrandGoogle, IconBrandGooglePlay, IconBrandInstagram, IconBrandMeta, IconBrandYoutube, IconChartArea, IconCode, IconDeviceMobile, IconMapPin, IconMapSearch, IconPlanet, IconRobot, IconSeo, IconSettings, IconShield, IconShoppingCart, IconStar, IconTarget, IconTrendingUp, IconTrophy, IconUsers } from "@tabler/icons-react";

export const ayurveda: BusinessData = {
    id: '17',
    image: '/business/ayurveda-digital-marketing.webp',
    slug: 'ayurveda-digital-marketing',
    name: 'Ayurveda Digital Marketing Agency',

    hero: {
        name: 'Ayurvedic Marketing Experts',
        initial: 'Grow Your Ayurveda Practice with',
        headlineKeywords: [
            'Ayurvedic Digital Marketing',
            'Herbal Product Marketing',
            'Holistic Health Brand Building'
        ],
        brandLine: 'Attract More Clients and Build a Trusted Ayurvedic Brand Online',
        subheadline: 'Our proven Ayurveda marketing strategies help clinics and wellness centers increase bookings, build brand authority, and enhance reputation through holistic, ethical, and compliant digital campaigns.',
        ctaButtons: [
            {
                text: 'Get Free Ayurveda Marketing Audit',
                link: '/free-ayurveda-marketing-audit',
                variant: 'primary',
                icon: React.createElement(IconChartArea, { size: 20 })
            },
            {
                text: 'View Ayurvedic Success Stories',
                link: '/ayurveda-marketing-case-studies',
                variant: 'secondary',
                icon: React.createElement(IconTrophy, { size: 20 })
            }
        ],
        backgroundImage: '/business/modern-ayurveda-clinic.webp'
    },

    services: {
        title: 'Complete Ayurveda Digital Marketing Services',
        subtitle: 'Everything Your Ayurveda Practice Needs to Attract More Clients',
        businessName: 'ayurveda',
        description: 'We offer comprehensive digital marketing solutions designed specifically for Ayurveda practitioners, wellness centers, and holistic health services. Our client-centric strategies focus on building trust, increasing visibility, and growing your practice through ethical, compliant Ayurveda marketing.',
        items: [
            {
                id: '360-digital-marketing',
                title: 'Complete Ayurveda Digital Marketing',
                description: 'Integrated omnichannel marketing campaigns combining Ayurveda SEO, client education content, reputation management, and Ayurveda-compliant advertising to maximize clinic visibility and client acquisition.',
                icon: React.createElement(IconPlanet, { size: 30 }),
                link: '/360-digital-marketing'
            },
            {
                id: 'meta-ads',
                title: 'Facebook & Instagram Ayurvedic Advertising',
                description: 'Targeted Meta advertising campaigns focused on local clients, wellness awareness, and Ayurveda education. Content complies with Ayurveda standards and builds trust while driving consultations and bookings.',
                icon: React.createElement(IconBrandMeta, { size: 30 }),
                link: '/meta-ads'
            },
            {
                id: 'google-ads',
                title: 'Google Ads for Ayurveda Practices',
                description: 'PPC campaigns targeting high-intent searches like "Ayurveda near me", "Ayurvedic treatments", and wellness-related keywords to connect with clients actively seeking Ayurvedic services.',
                icon: React.createElement(IconBrandGoogle, { size: 30 }),
                link: '/google-ads'
            },
            {
                id: 'other-ads',
                title: 'YouTube & Ayurveda Platform Advertising',
                description: 'Educational video content and Ayurveda-related ads on platforms like YouTube to demonstrate expertise, share wellness tips, and attract clients through informative video content.',
                icon: React.createElement(IconBrandYoutube, { size: 30 }),
                link: '/other-ads'
            },
            {
                id: 'local-seo',
                title: 'Ayurveda Local SEO',
                description: 'Rank your Ayurveda clinic on local searches like "Ayurveda near me", "[specialty] in [city]", and "Ayurvedic healing in [city]" to ensure local clients find your clinic easily online.',
                icon: React.createElement(IconMapSearch, { size: 30 }),
                link: '/local-seo'
            },
            {
                id: 'ecommerce-marketing',
                title: 'Ayurvedic Product Marketing & Online Sales',
                description: 'Conversion-optimized online systems for Ayurvedic product sales, wellness packages, and consultation bookings, allowing your practice to expand into the e-commerce space seamlessly.',
                icon: React.createElement(IconShoppingCart, { size: 30 }),
                link: '/ecommerce-marketing'
            },
            {
                id: 'web-design-development',
                title: 'Ayurvedic Website Development',
                description: 'Develop fully responsive, visually appealing, and user-friendly websites for Ayurvedic practices with consultation booking, health resources, and trust-building elements.',
                icon: React.createElement(IconCode, { size: 30 }),
                link: '/web-design-development'
            },
            {
                id: 'social-media-marketing',
                title: 'Ayurvedic Social Media Marketing',
                description: 'Strategic social media management on Facebook, Instagram, and LinkedIn, focusing on health education, Ayurvedic treatments, client testimonials, and building a trusted online presence.',
                icon: React.createElement(IconBrandInstagram, { size: 30 }),
                link: '/social-media-marketing'
            },
            {
                id: 'seo-services',
                title: 'Ayurvedic SEO Services',
                description: 'Comprehensive SEO for Ayurveda practitioners focusing on Ayurvedic treatments, wellness services, and local Ayurvedic searches to increase organic client acquisition.',
                icon: React.createElement(IconSeo, { size: 30 }),
                link: '/seo-services'
            },
            {
                id: 'gmb-services',
                title: 'Google My Business for Ayurveda Practices',
                description: 'Optimize your Google My Business profile with credentials, client reviews, clinic photos, and appointment scheduling features to dominate local searches and enhance client trust.',
                icon: React.createElement(IconMapPin, { size: 30 }),
                link: '/gmb-services'
            },
            {
                id: 'aso-services',
                title: 'Ayurvedic App Store Optimization',
                description: 'Optimize your Ayurvedic apps in app stores for better visibility and higher downloads by targeting keywords like "Ayurvedic wellness", "herbal consultation", and "natural treatments".',
                icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
                link: '/aso-services'
            },
            {
                id: 'mobile-apps-development',
                title: 'Custom Ayurvedic Mobile Applications',
                description: 'Develop custom mobile applications for Ayurvedic consultations, health tracking, wellness programs, and client management to improve engagement and client retention.',
                icon: React.createElement(IconDeviceMobile, { size: 30 }),
                link: '/mobile-apps-development'
            },
            {
                id: 'website-maintenance',
                title: 'Ayurvedic Website Maintenance',
                description: 'Ongoing maintenance services for Ayurvedic websites, ensuring content updates, booking system maintenance, and compliance with the latest digital marketing trends.',
                icon: React.createElement(IconSettings, { size: 30 }),
                link: '/website-maintenance'
            },
            {
                id: 'leads-generation',
                title: 'Ayurvedic Client Lead Generation',
                description: 'Generate high-quality leads for Ayurveda clinics through digital health screenings, informative webinars, and conversion-optimized campaigns that attract clients seeking holistic treatments.',
                icon: React.createElement(IconUsers, { size: 30 }),
                link: '/leads-generation'
            },
            {
                id: 'marketing-automation',
                title: 'Ayurvedic Marketing Automation',
                description: 'Automated client communication, appointment reminders, follow-up care, health tips, and patient retention strategies tailored for Ayurveda practices to ensure smooth workflows.',
                icon: React.createElement(IconRobot, { size: 30 }),
                link: '/marketing-automation'
            }
        ]
    },

    stats: {
        title: "Proven Ayurveda Marketing Results",
        subtitle: "Data-Driven Success for Ayurvedic Practices",
        items: [
            {
                icon: React.createElement(IconTrendingUp, { size: 30 }),
                title: 'Client Growth',
                value: '350%',
                description: 'Average increase in new Ayurveda consultations within 120 days of our holistic marketing strategies.',
            },
            {
                icon: React.createElement(IconTarget, { size: 30 }),
                title: 'Appointment Bookings',
                value: '4X',
                description: 'Improvement in online booking rates for Ayurvedic consultations through optimized client acquisition funnels.',
            },
            {
                icon: React.createElement(IconShield, { size: 30 }),
                title: 'Online Reputation',
                value: '280%',
                description: 'Growth in positive reviews and Ayurvedic practice reputation scores across major platforms.',
            },
            {
                icon: React.createElement(IconStar, { size: 30 }),
                title: 'Client Satisfaction',
                value: '4.8/5',
                description: 'Average improvement in client experience and recommendation rates for Ayurveda services.',
            },
        ]
    },

    testimonials: {
        title: [
            { text: "Ayurveda Practice " },
            { text: "Success Stories", gradient: true, gradientClass: "from-green-500 via-teal-500 to-blue-500" }
        ],
        subtitle: "How We've Helped Ayurvedic Clinics Grow Their Client Base",
        description: "Read success stories from Ayurvedic clinics, wellness centers, and holistic health practitioners who have transformed their client acquisition with our Ayurveda-focused digital marketing expertise.",
        items: [
            {
                id: '1',
                message: 'Our Ayurveda center saw a 400% increase in appointments within 6 months of implementing SEO strategies. We now rank #1 for "Ayurveda treatment in Mumbai" and have doubled our client base.',
                highlight: '400% increase and #1 ranking',
                stars: 5,
                name: 'Dr. Anjali Joshi',
                designation: 'Ayurveda Practitioner',
                company: 'Ayurvedic Healing Center Mumbai'
            },
            {
                id: '2',
                message: 'The targeted Facebook and Instagram campaigns helped us bring in 300+ new clients in just 3 months. The educational content focused on holistic healing gave us more credibility in the local community.',
                highlight: '300+ new clients in 3 months',
                stars: 5,
                name: 'Dr. Rajesh Kumar',
                designation: 'Ayurveda Specialist',
                company: 'Pure Ayurveda Wellness Delhi'
            },
            {
                id: '3',
                message: 'Our website and booking system integration helped streamline client appointments and service inquiries. We saw a 350% growth in online consultations through digital marketing and SEO.',
                highlight: '350% growth in consultations',
                stars: 5,
                name: 'Dr. Neha Mehta',
                designation: 'Ayurvedic Doctor',
                company: 'Herbal Life Ayurveda Center Pune'
            },
        ],
    },

    cta: {
        title: 'Ready to Grow Your Ayurveda Practice?',
        subtitle: 'Get More Clients, Build Ayurveda Authority, and Expand Your Wellness Business',
        description: 'Schedule your free Ayurveda marketing consultation today. Our experts will analyze your current strategies and show you exactly how to attract more quality clients while maintaining the authenticity and compliance of your Ayurveda services.',
        backgroundColor: 'bg-gradient-to-r from-green-900 to-teal-700',
    },

    showSections: {
        hero: true,
        companies: true,
        services: true,
        stats: true,
        testimonials: true,
        cta: true,
    }
};
