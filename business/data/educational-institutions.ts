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
    IconMail,
    IconPlanet,
    IconBook,
    IconTrendingUp,
    IconCertificate,
    IconSchool,
    IconAward,
    IconBrain
} from '@tabler/icons-react';
import React from 'react';

export const educationalInstitutions: BusinessData = {
    id: '15',
    image: '/business/educational-institutions-digital-marketing.webp',
    slug: 'educational-institutions-digital-marketing',
    name: 'Educational Institutions Digital Marketing Agency',

    hero: {
        name: 'Education Marketing Experts',
        initial: 'Grow Your Educational Institution with',
        headlineKeywords: [
            'Expert Education Digital Marketing',
            'Student Enrollment Strategies',
            'Academic Brand Building'
        ],
        brandLine: 'Get 6X More Student Enrollments & Build Academic Excellence Brand',
        subheadline: 'Our proven educational marketing strategies help schools, colleges, universities, and training institutes in India increase student admissions by 480%, build academic reputation, and attract quality students through targeted digital campaigns that showcase educational excellence.',
        ctaButtons: [
            {
                text: 'Get Free Education Marketing Audit',
                link: '/free-education-marketing-audit',
                variant: 'primary',
                icon: React.createElement(IconChartArea, { size: 20 })
            },
            {
                text: 'View Education Success Stories',
                link: '/education-marketing-case-studies',
                variant: 'secondary',
                icon: React.createElement(IconTrophy, { size: 20 })
            }
        ],
        backgroundImage: '/business/modern-educational-campus.webp'
    },

    services: {
        title: 'Complete Educational Institution Digital Marketing Services',
        subtitle: 'Everything Your Educational Institution Needs to Attract More Students',
        description: 'Comprehensive digital marketing solutions designed specifically for schools, colleges, universities, coaching centers, and educational institutes. Our enrollment-focused strategies help educational institutions increase student admissions, build academic reputation, and create thriving learning communities.',
        items: [
            {
                id: '360-digital-marketing',
                title: 'Complete Education Digital Marketing',
                description: 'Integrated omnichannel marketing campaigns combining student recruitment, parent engagement, academic showcasing, and reputation management to maximize educational institution visibility and enrollment rates.',
                icon: React.createElement(IconPlanet, { size: 30 }),
                link: '/360-digital-marketing'
            },
            {
                id: 'meta-ads',
                title: 'Facebook & Instagram Education Advertising',
                description: 'Targeted Meta advertising campaigns focusing on prospective students, parents, and career-focused audiences with campus showcases, success stories, and program highlights that drive admissions.',
                icon: React.createElement(IconBrandMeta, { size: 30 }),
                link: '/meta-ads'
            },
            {
                id: 'google-ads',
                title: 'Google Ads for Educational Institutions',
                description: 'Strategic PPC campaigns targeting high-intent education searches like "best colleges in [city]", "admission 2024", and course-specific keywords that connect with students actively seeking education.',
                icon: React.createElement(IconBrandGoogle, { size: 30 }),
                link: '/google-ads'
            },
            {
                id: 'other-ads',
                title: 'YouTube & LinkedIn Education Advertising',
                description: 'Educational video content and professional platform advertising showcasing campus life, faculty expertise, student achievements, and career outcomes to attract quality applicants.',
                icon: React.createElement(IconBrandYoutube, { size: 30 }),
                link: '/other-ads'
            },
            {
                id: 'local-seo',
                title: 'Local Education SEO',
                description: 'Dominate location-based education searches like "colleges near me", "schools in [city]", and "coaching centers [area]" to attract students from your catchment area.',
                icon: React.createElement(IconMapSearch, { size: 30 }),
                link: '/local-seo'
            },
            {
                id: 'ecommerce-marketing',
                title: 'Educational Service Sales Optimization',
                description: 'Conversion-optimized admission portals, online course sales, fee payment systems, and enrollment funnel optimization that streamline the student admission and registration process.',
                icon: React.createElement(IconShoppingCart, { size: 30 }),
                link: '/ecommerce-marketing'
            },
            {
                id: 'web-design-development',
                title: 'Educational Website Development',
                description: 'Academic-grade websites with course information, faculty profiles, admission portals, virtual campus tours, student testimonials, and trust-building elements that convert visitors into students.',
                icon: React.createElement(IconCode, { size: 30 }),
                link: '/web-design-development'
            },
            {
                id: 'social-media-marketing',
                title: 'Education Social Media Marketing',
                description: 'Strategic social media management across Facebook, Instagram, LinkedIn, and YouTube with campus life content, academic achievements, and student success stories that build institutional reputation.',
                icon: React.createElement(IconBrandInstagram, { size: 30 }),
                link: '/social-media-marketing'
            },
            {
                id: 'seo-services',
                title: 'Educational SEO Services',
                description: 'Comprehensive SEO for educational institutions targeting academic programs, course keywords, admission-related searches, and educational content to increase organic student acquisition.',
                icon: React.createElement(IconSeo, { size: 30 }),
                link: '/seo-services'
            },
            {
                id: 'gmb-services',
                title: 'Google Business Profile for Education',
                description: 'Optimized Google My Business profiles with campus photos, student reviews, course information, admission details, and regular updates to dominate local education searches.',
                icon: React.createElement(IconMapPin, { size: 30 }),
                link: '/gmb-services'
            },
            {
                id: 'aso-services',
                title: 'Educational App Store Optimization',
                description: 'Improve visibility for educational mobile apps in app stores by optimizing for "online learning", "education apps", and "student portal" searches that learners use.',
                icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
                link: '/aso-services'
            },
            {
                id: 'mobile-apps-development',
                title: 'Custom Educational Mobile Applications',
                description: 'Feature-rich educational apps with learning management systems, student portals, online classrooms, assignment tracking, and parent communication features.',
                icon: React.createElement(IconDeviceMobile, { size: 30 }),
                link: '/mobile-apps-development'
            },
            {
                id: 'website-maintenance',
                title: 'Educational Website Maintenance',
                description: 'Ongoing website support including academic content updates, admission information management, event listings, and performance optimization for educational websites.',
                icon: React.createElement(IconSettings, { size: 30 }),
                link: '/website-maintenance'
            },
            {
                id: 'leads-generation',
                title: 'Student Enrollment Lead Generation',
                description: 'Multi-channel lead generation using educational webinars, campus tours, scholarship information, and conversion-optimized campaigns that attract prospective students and parents.',
                icon: React.createElement(IconUsers, { size: 30 }),
                link: '/leads-generation'
            },
            {
                id: 'marketing-automation',
                title: 'Education Marketing Automation',
                description: 'Automated email campaigns, admission follow-ups, student communication, parent updates, and enrollment nurture sequences designed for educational institution workflows.',
                icon: React.createElement(IconRobot, { size: 30 }),
                link: '/marketing-automation'
            }
        ]
    },

    stats: {
        title: "Proven Educational Marketing Results",
        subtitle: "Data-Driven Success for Academic Institutions",
        items: [
            {
                icon: React.createElement(IconTrendingUp, { size: 30 }),
                title: 'Student Enrollments',
                value: '480%',
                description: 'Average increase in student admissions within 12 months of our education marketing campaigns',
            },
            {
                icon: React.createElement(IconTarget, { size: 30 }),
                title: 'Admission Conversion',
                value: '5.8X',
                description: 'Improvement in inquiry-to-enrollment conversion rates through optimized admission funnels and follow-up systems',
            },
            {
                icon: React.createElement(IconAward, { size: 30 }),
                title: 'Brand Recognition',
                value: '380%',
                description: 'Growth in institutional reputation and academic brand awareness across digital platforms',
            },
            {
                icon: React.createElement(IconStar, { size: 30 }),
                title: 'Parent Satisfaction',
                value: '4.8/5',
                description: 'Average improvement in parent and student satisfaction with institutional communication and engagement',
            },
        ]
    },

    testimonials: {
        title: [
            { text: "Educational Institution " },
            { text: "Success Stories", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
        ],
        subtitle: "How We've Helped Educational Institutions Grow Their Student Base",
        description: "Read testimonials from successful principals, directors, and educational administrators who have transformed their student enrollment with our education-focused digital marketing expertise.",
        items: [
            {
                id: '1',
                message: 'Our engineering college\'s admission inquiries increased by 520% within 10 months of working with this team. Their Google Ads and SEO strategies got us ranking #1 for "engineering colleges Mumbai" and our enrollment reached full capacity with a waiting list.',
                highlight: 'admission inquiries increased by 520% and full enrollment',
                stars: 5,
                name: 'Dr. Rajesh Kumar',
                designation: 'Principal',
                company: 'Tech Engineering College Mumbai'
            },
            {
                id: '2',
                message: 'The Facebook and YouTube campaigns they created for our coaching institute brought in 350 new students in 6 months. The success story videos featuring our toppers have positioned us as the leading coaching center in our city.',
                highlight: '350 new students in 6 months',
                stars: 5,
                name: 'Priya Sharma',
                designation: 'Director',
                company: 'Excellence Coaching Institute Delhi'
            },
            {
                id: '3',
                message: 'Their digital marketing strategies for our international school increased parent inquiries by 400% and improved our admission conversion rate by 60%. We now have students from 15 different countries.',
                highlight: '400% more inquiries and students from 15 countries',
                stars: 5,
                name: 'Sarah Wilson',
                designation: 'Admissions Director',
                company: 'Global International School Bangalore'
            },
            {
                id: '4',
                message: 'As a vocational training institute, we needed to reach working professionals. Their LinkedIn and Google Ads campaigns generated 280 course enrollments and established us as the go-to skill development center.',
                highlight: '280 course enrollments',
                stars: 5,
                name: 'Vikram Patel',
                designation: 'Institute Head',
                company: 'SkillUp Training Institute Pune'
            },
            {
                id: '5',
                message: 'The mobile learning app they developed for our distance education program now has 25,000+ active students. Our online course completion rates improved by 75% and student satisfaction reached 4.9/5.',
                stars: 4,
                name: 'Dr. Meera Gupta',
                designation: 'Academic Director',
                company: 'Distance Learning University Chennai'
            },
            {
                id: '6',
                message: 'Their parent engagement campaigns and admission automation system transformed our school\'s enrollment process. Parent satisfaction improved by 85% and our admission cycle became 50% more efficient.',
                highlight: '85% better parent satisfaction and 50% more efficient',
                stars: 5,
                name: 'Anita Singh',
                designation: 'School Principal',
                company: 'Bright Future School Jaipur'
            }
        ],
    },

    cta: {
        title: 'Ready to Transform Your Educational Institution?',
        subtitle: 'Get More Student Enrollments, Build Academic Reputation, Grow Your Institution',
        description: 'Schedule your free education marketing consultation today. Our educational marketing experts will analyze your current enrollment strategies and show you exactly how to attract more quality students and build a prestigious academic brand.',
        backgroundColor: 'bg-gradient-to-r from-gray-900 to-black',
    },

    showSections: {
        hero: true,
        companies: false,
        services: true,
        stats: true,
        testimonials: true,
        cta: true,
    }
};
