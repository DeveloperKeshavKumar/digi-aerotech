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
    IconPill,
    IconMail,
    IconPlanet,
    IconStethoscope,
    IconTrendingUp,
    IconShield,
    IconMicroscope,
    IconHeartbeat
} from '@tabler/icons-react';
import React from 'react';

export const pharmaCompanies: BusinessData = {
    id: '9',
    image: '/business/pharma-companies-digital-marketing.webp',
    slug: 'pharma-companies-digital-marketing',
    name: 'Pharma Companies Digital Marketing Agency',

    hero: {
        name: 'Pharmaceutical Marketing Experts',
        initial: 'Grow Your Pharma Business with',
        headlineKeywords: [
            'Expert Pharmaceutical Digital Marketing',
            'Healthcare Compliance Strategies',
            'Medical Brand Building Solutions'
        ],
        brandLine: [
            {
                text: 'Get 4X More Healthcare Professionals & Patient Reach',
                gradient: true,
                gradientClass: 'from-orange-500 via-pink-500 to-red-500'
            }
        ],
        subheadline: 'Our proven pharmaceutical marketing strategies help pharma companies, medical device manufacturers, and healthcare brands in India increase HCP engagement by 320%, build patient awareness, and drive prescription growth through compliant digital campaigns.',
        ctaButtons: [
            {
                text: 'Get Free Pharma Marketing Audit',
                link: '/free-pharma-marketing-audit',
                variant: 'primary',
                icon: React.createElement(IconChartArea, { size: 20 })
            },
            {
                text: 'View Pharma Success Stories',
                link: '/pharma-marketing-case-studies',
                variant: 'secondary',
                icon: React.createElement(IconTrophy, { size: 20 })
            }
        ],
        backgroundImage: '/business/modern-pharmaceutical-research.webp'
    },

    services: {
        title: 'Complete Pharmaceutical Digital Marketing Services',
        subtitle: 'Everything Your Pharma Company Needs for Compliant Growth',
        businessName: 'pharma-companies',
        description: 'Comprehensive digital marketing solutions designed specifically for pharmaceutical companies, medical device manufacturers, healthcare brands, and life sciences organizations. Our compliant strategies help pharma businesses reach healthcare professionals, build patient awareness, and drive prescription growth.',
        items: [
            {
                id: '360-digital-marketing',
                title: 'Complete Pharma Digital Marketing',
                description: 'Integrated omnichannel marketing campaigns combining medical content strategy, HCP targeting, patient education, and regulatory-compliant messaging to maximize pharmaceutical brand visibility and engagement.',
                icon: React.createElement(IconPlanet, { size: 30 }),
                link: '/360-digital-marketing'
            },
            {
                id: 'meta-ads',
                title: 'Healthcare Professional Social Advertising',
                description: 'Targeted Meta advertising campaigns focusing on healthcare professionals, medical associations, and patient education with compliance-approved content and therapeutic area expertise.',
                icon: React.createElement(IconBrandMeta, { size: 30 }),
                link: '/meta-ads'
            },
            {
                id: 'google-ads',
                title: 'Google Ads for Pharmaceutical Companies',
                description: 'Strategic PPC campaigns targeting healthcare professional searches, medical condition keywords, and therapeutic area terms while maintaining strict regulatory compliance and approval processes.',
                icon: React.createElement(IconBrandGoogle, { size: 30 }),
                link: '/google-ads'
            },
            {
                id: 'other-ads',
                title: 'Medical Platform & LinkedIn Advertising',
                description: 'Professional advertising on medical platforms, LinkedIn, and healthcare publications to reach doctors, specialists, and healthcare decision-makers with educational and promotional content.',
                icon: React.createElement(IconBrandYoutube, { size: 30 }),
                link: '/other-ads'
            },
            {
                id: 'local-seo',
                title: 'Healthcare Facility SEO',
                description: 'Optimize for location-based healthcare searches, medical facility listings, and regional therapeutic area keywords to help patients and HCPs find pharmaceutical information and support.',
                icon: React.createElement(IconMapSearch, { size: 30 }),
                link: '/local-seo'
            },
            {
                id: 'ecommerce-marketing',
                title: 'Pharmaceutical E-commerce Optimization',
                description: 'Compliant online pharmaceutical sales optimization, prescription fulfillment systems, patient support programs, and medication delivery platform integration.',
                icon: React.createElement(IconShoppingCart, { size: 30 }),
                link: '/ecommerce-marketing'
            },
            {
                id: 'web-design-development',
                title: 'Pharmaceutical Website Development',
                description: 'Medical-grade websites with product information, clinical data, patient resources, HCP portals, and regulatory compliance features that meet pharmaceutical industry standards.',
                icon: React.createElement(IconCode, { size: 30 }),
                link: '/web-design-development'
            },
            {
                id: 'social-media-marketing',
                title: 'Pharma Social Media Marketing',
                description: 'Compliant social media management across LinkedIn, medical platforms, and professional networks with educational content, disease awareness campaigns, and HCP engagement strategies.',
                icon: React.createElement(IconBrandInstagram, { size: 30 }),
                link: '/social-media-marketing'
            },
            {
                id: 'seo-services',
                title: 'Pharmaceutical SEO Services',
                description: 'Comprehensive SEO for pharma companies targeting medical terminology, therapeutic areas, drug information, and healthcare professional searches while maintaining regulatory compliance.',
                icon: React.createElement(IconSeo, { size: 30 }),
                link: '/seo-services'
            },
            {
                id: 'gmb-services',
                title: 'Medical Facility Google Business Profile',
                description: 'Optimized Google My Business profiles for pharmaceutical facilities, research centers, and medical offices with compliance-approved information and professional credibility elements.',
                icon: React.createElement(IconMapPin, { size: 30 }),
                link: '/gmb-services'
            },
            {
                id: 'aso-services',
                title: 'Medical App Store Optimization',
                description: 'Improve visibility for pharmaceutical and medical apps in app stores by optimizing for healthcare searches, medical reference apps, and patient support application keywords.',
                icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
                link: '/aso-services'
            },
            {
                id: 'mobile-apps-development',
                title: 'Pharmaceutical Mobile Applications',
                description: 'HIPAA-compliant mobile apps for patient support programs, HCP engagement, medical reference tools, clinical data access, and pharmaceutical sales force automation.',
                icon: React.createElement(IconDeviceMobile, { size: 30 }),
                link: '/mobile-apps-development'
            },
            {
                id: 'website-maintenance',
                title: 'Pharma Website Maintenance',
                description: 'Ongoing website support including regulatory updates, clinical data management, product information updates, and compliance monitoring for pharmaceutical websites.',
                icon: React.createElement(IconSettings, { size: 30 }),
                link: '/website-maintenance'
            },
            {
                id: 'leads-generation',
                title: 'Healthcare Professional Lead Generation',
                description: 'Multi-channel lead generation targeting healthcare professionals, medical institutions, and decision-makers using medical education, clinical studies, and therapeutic expertise.',
                icon: React.createElement(IconUsers, { size: 30 }),
                link: '/leads-generation'
            },
            {
                id: 'marketing-automation',
                title: 'Pharma Marketing Automation',
                description: 'Automated email campaigns, CRM integration, and nurture sequences designed for pharmaceutical sales cycles, medical education delivery, and HCP relationship management.',
                icon: React.createElement(IconRobot, { size: 30 }),
                link: '/marketing-automation'
            }
        ]
    },

    stats: {
        title: "Proven Pharmaceutical Marketing Results",
        subtitle: "Data-Driven Success for Healthcare & Life Sciences",
        items: [
            {
                icon: React.createElement(IconStethoscope, { size: 30 }),
                title: 'HCP Engagement',
                value: '320%',
                description: 'Average increase in healthcare professional engagement and prescription influence within 120 days',
            },
            {
                icon: React.createElement(IconTarget, { size: 30 }),
                title: 'Prescription Growth',
                value: '4.2X',
                description: 'Improvement in prescription volumes and market share through targeted digital campaigns',
            },
            {
                icon: React.createElement(IconShield, { size: 30 }),
                title: 'Compliance Rate',
                value: '100%',
                description: 'Maintained regulatory compliance across all digital marketing campaigns and content',
            },
            {
                icon: React.createElement(IconStar, { size: 30 }),
                title: 'Brand Recognition',
                value: '4.7/5',
                description: 'Average improvement in pharmaceutical brand awareness among target audiences',
            },
        ]
    },

    testimonials: {
        title: [
            { text: "Pharmaceutical " },
            { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
        ],
        subtitle: "How We've Helped Pharma Companies Scale Compliantly",
        description: "Read testimonials from successful pharmaceutical companies, medical device manufacturers, and healthcare brands who have transformed their digital presence with our compliant marketing expertise.",
        items: [
            {
                id: '1',
                message: 'Our prescription drug awareness campaign reached 85% more healthcare professionals within 6 months. The compliant digital strategy they developed helped us increase market share by 45% while maintaining full regulatory approval.',
                highlight: 'reached 85% more HCPs and increased market share by 45%',
                stars: 5,
                name: 'Dr. Rajesh Kumar',
                designation: 'Medical Affairs Director',
                company: 'MediCore Pharmaceuticals Mumbai'
            },
            {
                id: '2',
                message: 'Their medical content strategy and LinkedIn campaigns for our oncology portfolio generated 300+ qualified leads from oncologists nationwide. Our clinical engagement metrics improved dramatically.',
                highlight: 'generated 300+ qualified leads from oncologists',
                stars: 5,
                name: 'Priya Sharma',
                designation: 'Marketing Head',
                company: 'Advanced Therapeutics Delhi'
            },
            {
                id: '3',
                message: 'The patient education website and SEO strategy they created for our diabetes portfolio now ranks #1 for key therapeutic terms. Patient program enrollments increased by 280%.',
                highlight: 'ranks #1 for therapeutic terms and 280% enrollment increase',
                stars: 5,
                name: 'Dr. Vikram Patel',
                designation: 'Brand Manager',
                company: 'HealthFirst Pharma Ahmedabad'
            },
            {
                id: '4',
                message: 'Working with this team transformed our medical device marketing. Their compliant Google Ads campaigns for surgical equipment generated 150 qualified surgeon leads in 3 months.',
                highlight: 'generated 150 qualified surgeon leads in 3 months',
                stars: 5,
                name: 'Anita Reddy',
                designation: 'Commercial Director',
                company: 'SurgicalTech Innovations Hyderabad'
            },
            {
                id: '5',
                message: 'As a specialty pharma company, we needed precise targeting. Their medical platform advertising and HCP engagement strategies helped us reach 90% of our target specialist audience.',
                stars: 4,
                name: 'Suresh Gupta',
                designation: 'VP Marketing',
                company: 'Specialty Medicine Corp Bangalore'
            },
            {
                id: '6',
                message: 'The mobile app they developed for our patient support program has 40,000+ active users. Medication adherence rates improved by 65% and patient satisfaction scores reached an all-time high.',
                highlight: '40,000+ active users and 65% better medication adherence',
                stars: 5,
                name: 'Dr. Meera Nair',
                designation: 'Patient Program Manager',
                company: 'CarePlus Pharmaceuticals Kerala'
            }
        ],
    },

    cta: {
        title: 'Ready to Grow Your Pharmaceutical Business Compliantly?',
        subtitle: 'Reach More HCPs, Educate Patients, Drive Prescription Growth',
        description: 'Schedule your free pharmaceutical marketing consultation today. Our healthcare marketing experts will analyze your current strategies and show you exactly how to reach healthcare professionals and patients while maintaining full regulatory compliance.',
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
