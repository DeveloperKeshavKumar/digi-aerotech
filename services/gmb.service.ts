import React from 'react';
import { ServiceData } from "@/types/service.types";
import { Companies } from '@/components/homepage/companies';
import { ProvideServicesTo } from '@/components/services/provide-services-to';
import { FaqSection } from '@/components/services/faq-section';
import { WhoWeWorkWith } from '@/components/homepage/who-we-work-with';
import { Struggles } from '@/components/homepage/struggles';
import { ServiceIcons } from '@/constants/service-icons';
import { ArrowRight } from 'lucide-react';

const { IconMapPin, IconStar, IconCamera, IconPhone, IconClock, IconUsers, IconTrendingUp, IconStarsFilled, IconFreeRights, IconBrandGoogle, IconEdit, IconMessage, IconClockHour8, Briefcase, IconPackage, BarChart4, Settings2, IconTarget, IconRocket, IconChartBar } = ServiceIcons;

export const gmbService: ServiceData = {
    slug: 'gmb',
    showSections: {
        hero: true,
        whyChooseUs: true,
        typesOfServices: true,
        process: true,
        techStack: true,
        testimonials: true,
        cta: true
    },
    customSections: [
        {
            component: Companies,
            position: 'beforeWhyChooseUs'
        },
        {
            component: ProvideServicesTo,
            position: "afterWhyChooseUs",
            props: {
                heading: 'We provide GMB Services for',
                subheading: 'Local businesses ready to dominate Google Maps and local search results'
            }
        },
        {
            component: FaqSection,
            position: 'afterTestimonials',
            props: {
                faqs: [
                    {
                        id: '1',
                        question: 'How long does it take to optimize my GMB listing?',
                        answer: 'Initial GMB optimization is completed within 1-2 weeks. However, building authority through consistent posting, review management, and local SEO improvements is an ongoing process that shows significant results within 2-3 months.',
                        icon: React.createElement(IconClockHour8, { size: 24 })
                    },
                    {
                        id: '2',
                        question: 'Can you help get more Google reviews for my business?',
                        answer: 'Yes! We implement proven review generation strategies including automated review requests, follow-up campaigns, and review management systems. We help you ethically increase positive reviews while managing negative feedback professionally.',
                        icon: React.createElement(IconStar, { size: 24 })
                    },
                    {
                        id: '3',
                        question: 'What if my business has multiple locations?',
                        answer: 'We specialize in multi-location GMB management. Each location gets individual optimization, consistent NAP data, location-specific content, and coordinated review management while maintaining brand consistency across all listings.',
                        icon: React.createElement(IconMapPin, { size: 24 })
                    },
                    {
                        id: '4',
                        question: 'How does GMB optimization affect my local search rankings?',
                        answer: 'Optimized GMB listings significantly improve local search visibility. You\'ll rank higher in "near me" searches, Google Maps results, and local pack listings, leading to increased foot traffic and phone calls.',
                        icon: React.createElement(IconBrandGoogle, { size: 24 })
                    },
                    {
                        id: '5',
                        question: 'Do you handle negative reviews and reputation management?',
                        answer: 'Absolutely! We monitor all reviews, craft professional responses to negative feedback, and implement strategies to encourage more positive reviews. Our reputation management helps maintain and improve your online image.',
                        icon: React.createElement(IconMessage, { size: 24 })
                    },
                    {
                        id: '6',
                        question: 'What\'s included in your monthly GMB management?',
                        answer: 'Monthly services include regular posting, photo uploads, review monitoring and responses, Q&A management, performance tracking, local citation building, and detailed analytics reports showing your local search performance.',
                        icon: React.createElement(IconPackage, { size: 24 })
                    },
                    {
                        id: '7',
                        question: 'Can you help my business show up in Google Maps?',
                        answer: 'Yes, that\'s our specialty! Through proper GMB optimization, local SEO, citation building, and consistent NAP data, we help your business prominently appear in Google Maps searches and local pack results.',
                        icon: React.createElement(IconTarget, { size: 24 })
                    },
                    {
                        id: '8',
                        question: 'How do you measure GMB performance and success?',
                        answer: 'We track GMB insights including search views, map views, website clicks, phone calls, direction requests, photo views, and review metrics. Monthly reports show how GMB optimization drives real business results.',
                        icon: React.createElement(BarChart4, { size: 24 })
                    }
                ],
                heading: {
                    part1: 'GMB Services ',
                    part2: 'FAQs'
                }
            }
        },
        {
            component: WhoWeWorkWith,
            props: {
                title: "Who we work for",
                description: "",
                className: "relative -skew-y-3 hover:scale-112 transition-all duration-500 ease-in-out shadow-lg rounded-2xl border-t border-border dark:border-gray-800",
            },
            position: 'beforeProcess'
        },
        {
            component: Struggles,
            props: {
                title: [
                    { text: "Your Business is " },
                    { text: 'Invisible on Google Maps?', gradient: true, gradientClass: "from-red-500 via-orange-500 to-yellow-500" },
                    { text: " We Make You " },
                    { text: "Impossible to Miss!", gradient: true, gradientClass: "from-yellow-500 via-orange-500 to-red-500" }
                ],
                subheadline: "Stop losing local customers to competitors. Our GMB optimization gets you found, called, and visited.",
                painPoints: [
                    "Your business doesn't show up in Google Maps searches",
                    "Competitors appear before you in local results",
                    "Few or no Google reviews compared to competition",
                    "Inconsistent or incomplete business information online",
                    "Missing out on 'near me' search traffic",
                    "No phone calls or foot traffic from online searches"
                ],
                solutionPoints: [
                    "Top 3 positions in Google Maps and local pack results",
                    "Dominate local search for your industry keywords",
                    "5x more Google reviews with professional management",
                    "Consistent, optimized business information everywhere",
                    "Capture high-intent 'near me' searchers",
                    "10x more phone calls and store visits from Google"
                ],
                cta: { icon: React.createElement(ArrowRight), text: "Get My GMB Audit", link: "/contact" }
            },
            position: 'beforeWhyChooseUs'
        }
    ],
    hero: {
        initial: "Need ",
        headlineKeywords: [
            "Local Visibility?",
            "More Customers?",
            "Google Reviews?",
            "Map Rankings?",
            "Foot Traffic?",
            "Phone Calls?"
        ],
        brandLine: [
            { text: "Google My Business Optimization", gradient: false }
        ],
        subheadline: "Dominate local search results with expert Google My Business management. Get found on Google Maps, attract more customers, and build a stellar online reputation that drives business growth.",
        ctaButtons: [
            { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Free GMB Audit", link: "/contact" },
            { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
        ],
        stats: [
            {
                icon: React.createElement(IconMapPin, { size: 34 }),
                title: "300% More",
                description: "Visibility in local searches"
            },
            {
                icon: React.createElement(IconPhone, { size: 34 }),
                title: "50% More",
                description: "Calls from Google"
            },
            {
                icon: React.createElement(IconStar, { size: 34 }),
                title: "50+ Reviews",
                description: "Average per client"
            },
            {
                icon: React.createElement(IconStarsFilled, { size: 34 }),
                title: "4.9/5 Rating",
                description: "Client satisfaction"
            }
        ]
    },
    whyChooseUs: {
        title: [
            { text: 'Why Choose Our ', gradient: false },
            { text: 'GMB Services', gradient: true, gradientClass: 'from-red-600 via-orange-500 to-yellow-500' },
            { text: '?', gradient: false }
        ],
        trustPoints: [
            {
                icon: React.createElement(IconBrandGoogle, { size: 24 }),
                title: 'Complete GMB Optimization',
                description: 'We optimize every aspect of your Google My Business listing - from business information and categories to photos, posts, and service descriptions for maximum local search visibility.'
            },
            {
                icon: React.createElement(IconStar, { size: 24 }),
                title: 'Strategic Review Management',
                description: 'Our proven review generation system helps you earn more positive reviews while professionally managing negative feedback. Build trust and credibility that converts browsers into customers.'
            },
            {
                icon: React.createElement(IconCamera, { size: 24 }),
                title: 'Professional Visual Content',
                description: 'High-quality photos, virtual tours, and regular visual updates that showcase your business in the best light. Visual content drives 35% more engagement and customer actions.'
            },
            {
                icon: React.createElement(IconEdit, { size: 24 }),
                title: 'Regular GMB Posting',
                description: 'Consistent, engaging posts about offers, events, news, and updates keep your listing active and visible. Fresh content signals to Google that your business is active and relevant.'
            },
            {
                icon: React.createElement(IconUsers, { size: 24 }),
                title: 'Local Citation Building',
                description: 'We ensure your business information is consistent across all online directories and citation sources. Accurate NAP data strengthens your local search authority and rankings.'
            },
            {
                icon: React.createElement(IconChartBar, { size: 24 }),
                title: 'Performance Tracking & Analytics',
                description: 'Detailed monthly reports showing GMB insights, local search performance, customer actions, and ROI. Track how optimization drives real business results and growth.'
            }
        ],
        cta: {
            text: 'Optimize My GMB',
            link: '#contact',
            icon: React.createElement(IconRocket, { size: 24 })
        }
    },
    typesOfServices: {
        title: 'Our Complete GMB Services',
        subtitle: 'COMPREHENSIVE LOCAL OPTIMIZATION',
        description: 'Full-spectrum Google My Business services designed to maximize your local search visibility and drive more customers to your business.',
        services: [
            {
                id: 1,
                title: 'GMB Profile Optimization',
                description: 'Complete optimization of business name, address, phone, website, hours, categories, and descriptions. Ensure your listing is 100% complete and optimized for local search.',
                icon: React.createElement(IconEdit, { size: 24 })
            },
            {
                id: 2,
                title: 'Review Management & Generation',
                description: 'Strategic review acquisition campaigns, professional response management, and reputation monitoring. Build a 5-star reputation that attracts more customers.',
                icon: React.createElement(IconStar, { size: 24 })
            },
            {
                id: 3,
                title: 'Professional Photography & Media',
                description: 'High-quality business photos, virtual tours, and regular visual content updates. Showcase your business with compelling visuals that drive customer engagement.',
                icon: React.createElement(IconCamera, { size: 24 })
            },
            {
                id: 4,
                title: 'Regular GMB Posts & Updates',
                description: 'Consistent posting of offers, events, news, and business updates. Keep your listing active and engaging with fresh content that improves visibility and customer interaction.',
                icon: React.createElement(IconEdit, { size: 24 })
            },
            {
                id: 5,
                title: 'Q&A Management',
                description: 'Monitor and respond to customer questions on your GMB listing. Provide helpful, accurate answers that address common concerns and showcase your expertise.',
                icon: React.createElement(IconMessage, { size: 24 })
            },
            {
                id: 6,
                title: 'Local Citation & NAP Consistency',
                description: 'Ensure accurate, consistent business information across all online directories and citation sources. Build local authority and improve search rankings.',
                icon: React.createElement(IconMapPin, { size: 24 })
            }
        ]
    },
    process: {
        title: 'Our GMB Optimization Process',
        subtitle: 'STRATEGIC METHODOLOGY',
        className: 'border-t border-border dark:border-gray-700',
        description: 'A systematic approach to Google My Business optimization that maximizes your local search visibility and customer acquisition.',
        steps: [
            {
                id: 1,
                title: 'GMB Audit & Analysis',
                description: 'Comprehensive analysis of your current GMB listing, local search performance, competitor research, and identification of optimization opportunities.'
            },
            {
                id: 2,
                title: 'Profile Setup & Optimization',
                description: 'Complete optimization of all GMB elements - business information, categories, descriptions, attributes, and service areas for maximum search visibility.'
            },
            {
                id: 3,
                title: 'Visual Content Creation',
                description: 'Professional photography, virtual tours, and visual content creation to showcase your business in the best possible light and attract more customers.'
            },
            {
                id: 4,
                title: 'Review Strategy Implementation',
                description: 'Deploy review generation campaigns, set up automated review requests, and implement professional review response management systems.'
            },
            {
                id: 5,
                title: 'Ongoing Management & Posting',
                description: 'Regular GMB posts, Q&A management, photo updates, and continuous optimization to maintain peak performance and engagement.'
            },
            {
                id: 6,
                title: 'Performance Tracking & Reporting',
                description: 'Monthly analytics reports showing GMB insights, local search performance, customer actions, and ROI from optimization efforts.'
            }
        ]
    },
    techStack: {
        title: 'Our GMB Management Tools',
        subtitle: 'PROFESSIONAL PLATFORMS',
        description: 'We use advanced tools and platforms to manage, optimize, and track your Google My Business performance.',
        categories: ['GMB Tools', 'Review Management', 'Analytics', 'Local SEO'],
        technologies: [
            { id: 1, name: 'Google My Business', logo: '/tech/icons8-google-my-business-96.png', category: 'GMB Tools' },
            { id: 2, name: 'BirdEye', logo: '/tech/icons8-birdeye-96.png', category: 'Review Management' },
            { id: 3, name: 'ReviewTrackers', logo: '/tech/icons8-reviewtrackers-96.png', category: 'Review Management' },
            { id: 4, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
            { id: 5, name: 'BrightLocal', logo: '/tech/icons8-brightlocal-96.png', category: 'Local SEO' },
            { id: 6, name: 'Moz Local', logo: '/tech/icons8-moz-local-96.png', category: 'Local SEO' },
            { id: 7, name: 'Hootsuite', logo: '/tech/icons8-hootsuite-96.png', category: 'GMB Tools' },
            { id: 8, name: 'LocalClarity', logo: '/tech/icons8-localclarity-96.png', category: 'Analytics' }
        ]
    },
    testimonials: {
        title: [
            { text: 'GMB ', gradient: false },
            { text: 'Success Stories', gradient: true, gradientClass: 'from-red-500 via-orange-500 to-yellow-500' }
        ],
        description: 'Local businesses dominating Google Maps and attracting more customers than ever before',
        testimonials: [
            {
                id: '1',
                message: 'After GMB optimization, our restaurant went from invisible to #1 in local search results. We now get 50+ calls daily and our dining room is consistently full. The ROI has been incredible!',
                highlight: 'went from invisible to #1 in local search',
                stars: 5,
                name: 'Suresh Patel',
                designation: 'Owner',
                company: 'Family Restaurant'
            },
            {
                id: '2',
                message: 'DigiAerotech transformed our GMB listing with professional photos, regular posts, and review management. We went from 8 reviews to 120+ five-star reviews in 6 months. Business has tripled!',
                highlight: 'business has tripled in 6 months',
                stars: 5,
                name: 'Kavita Sharma',
                designation: 'Manager',
                company: 'Beauty Salon'
            },
            {
                id: '3',
                message: 'Their GMB management got our dental clinic ranking #1 for all local searches. Patient inquiries increased 400% and we\'re booked solid weeks in advance. Best marketing investment we\'ve made.',
                highlight: 'patient inquiries increased 400%',
                stars: 5,
                name: 'Dr. Rohit Gupta',
                designation: 'Dentist',
                company: 'Dental Clinic'
            }
        ]
    },
    cta: {
        title: 'Ready to Dominate Local Search Results?',
        subtitle: 'START YOUR GMB OPTIMIZATION',
        description: 'Get a comprehensive GMB audit and custom strategy to outrank competitors and attract more local customers to your business.'
    }
};