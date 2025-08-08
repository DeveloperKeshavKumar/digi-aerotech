import React from 'react';
import { ServiceData } from "@/types/service.types";
import { Companies } from '@/components/homepage/companies';
import { ProvideServicesTo } from '@/components/services/provide-services-to';
import { FaqSection } from '@/components/services/faq-section';
import { WhoWeWorkWith } from '@/components/homepage/who-we-work-with';
import { Struggles } from '@/components/homepage/struggles';
import { ServiceIcons } from '@/constants/service-icons';
import { ArrowRight } from 'lucide-react';

const { IconDeviceMobile, IconStar, IconTrendingUp, IconUsers, IconTarget, IconStarsFilled, IconPhone, IconFreeRights, IconEdit, IconClockHour8, Briefcase, IconPackage, BarChart4, Settings2, IconRocket, IconChartBar, IconBrandApple, IconBrandGoogle, IconSearch, IconDownload } = ServiceIcons;

export const asoService: ServiceData = {
    slug: 'aso-services',
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
                heading: 'We provide ASO Services for',
                subheading: 'App developers and businesses seeking maximum app store visibility and downloads'
            }
        },
        {
            component: FaqSection,
            position: 'afterTestimonials',
            props: {
                faqs: [
                    {
                        id: '1',
                        question: 'How long does ASO take to show results in app rankings?',
                        answer: 'Initial ASO improvements typically appear within 2-4 weeks for less competitive keywords. Significant ranking improvements for competitive terms usually take 2-3 months. App store algorithm changes and consistency are key factors.',
                        icon: React.createElement(IconClockHour8, { size: 24 })
                    },
                    {
                        id: '2',
                        question: 'What\'s the difference between ASO and regular SEO?',
                        answer: 'ASO is specifically for app stores - optimizing app titles, descriptions, keywords, screenshots, and reviews for app store search. While similar to SEO principles, ASO requires platform-specific strategies and understanding of app store algorithms.',
                        icon: React.createElement(IconSearch, { size: 24 })
                    },
                    {
                        id: '3',
                        question: 'Do you optimize for both Apple App Store and Google Play Store?',
                        answer: 'Yes! We optimize for both iOS App Store and Google Play Store, adapting strategies for each platform\'s unique algorithms, ranking factors, and user behaviors. Each store requires different optimization approaches.',
                        icon: React.createElement(IconBrandApple, { size: 24 })
                    },
                    {
                        id: '4',
                        question: 'Can ASO help increase app downloads without paid advertising?',
                        answer: 'Absolutely! Effective ASO can increase organic downloads by 300-500% through improved search rankings, better conversion rates, and enhanced app store visibility. It\'s the most cost-effective way to grow app downloads.',
                        icon: React.createElement(IconDownload, { size: 24 })
                    },
                    {
                        id: '5',
                        question: 'How do you handle app review management and ratings?',
                        answer: 'We implement review generation strategies, monitor feedback, guide response strategies, and help improve overall app ratings. Higher ratings and positive reviews significantly impact app store rankings and conversion rates.',
                        icon: React.createElement(IconStar, { size: 24 })
                    },
                    {
                        id: '6',
                        question: 'What\'s included in your monthly ASO package?',
                        answer: 'Keyword research and optimization, metadata updates, screenshot and icon optimization, review monitoring, competitor analysis, performance tracking, and detailed monthly reports showing ranking improvements and download growth.',
                        icon: React.createElement(IconPackage, { size: 24 })
                    },
                    {
                        id: '7',
                        question: 'Do you work with apps in all categories and industries?',
                        answer: 'Yes, we optimize apps across all categories - gaming, productivity, e-commerce, social, education, health, finance, and more. Our ASO strategies adapt to category-specific competition levels and user behaviors.',
                        icon: React.createElement(Briefcase, { size: 24 })
                    },
                    {
                        id: '8',
                        question: 'How do you measure ASO success and ROI?',
                        answer: 'We track keyword rankings, search visibility, organic downloads, conversion rates, user ratings, and download-to-install ratios. Monthly reports show how ASO optimization directly impacts app growth and user acquisition costs.',
                        icon: React.createElement(BarChart4, { size: 24 })
                    }
                ],
                heading: {
                    part1: 'ASO Services ',
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
                    { text: "Your App is " },
                    { text: 'Lost in App Stores?', gradient: true, gradientClass: "from-blue-500 via-purple-500 to-pink-500" },
                    { text: " We Get You " },
                    { text: "Discovered & Downloaded!", gradient: true, gradientClass: "from-pink-500 via-purple-500 to-blue-500" }
                ],
                subheadline: "Stop wasting money on ads while your app stays invisible. Our ASO gets you found, downloaded, and loved.",
                painPoints: [
                    "Your app doesn't appear in relevant searches",
                    "Low download numbers despite having a great app",
                    "High user acquisition costs from paid advertising only",
                    "Poor app store ratings and reviews",
                    "Competitors consistently outrank you in app stores",
                    "No organic growth or discovery through app stores"
                ],
                solutionPoints: [
                    "Top 10 rankings for your most important keywords",
                    "300-500% increase in organic app downloads",
                    "Dramatically reduced user acquisition costs",
                    "Improved ratings and positive review management",
                    "Beat competitors in app store search results",
                    "Sustainable organic growth and user discovery"
                ],
                cta: { icon: React.createElement(ArrowRight), text: "Get My ASO Audit", link: "/contact" }
            },
            position: 'beforeWhyChooseUs'
        }
    ],
    hero: {
        initial: "Need ",
        headlineKeywords: [
            "More Downloads?",
            "App Visibility?",
            "Better Rankings?",
            "User Growth?",
            "Store Success?",
            "Organic Traffic?"
        ],
        brandLine: [
            { text: "App Store Optimization (ASO)", gradient: false }
        ],
        subheadline: "Maximize your app's visibility and downloads with expert ASO strategies. Get discovered in app stores, increase organic downloads, and reduce user acquisition costs through proven optimization techniques.",
        ctaButtons: [
            { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Free ASO Audit", link: "/contact" },
            { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
        ],
        stats: [
            {
                icon: React.createElement(IconDownload, { size: 34 }),
                title: "4x More",
                description: "Downloads Avg. increase"
            },
            {
                icon: React.createElement(IconTarget, { size: 34 }),
                title: "Top 10 Rank",
                description: "For target keywords"
            },
            {
                icon: React.createElement(IconDeviceMobile, { size: 34 }),
                title: "500+ Apps",
                description: "Successfully optimized"
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
            { text: 'ASO Services', gradient: true, gradientClass: 'from-blue-600 via-purple-500 to-pink-500' },
            { text: '?', gradient: false }
        ],
        trustPoints: [
            {
                icon: React.createElement(IconSearch, { size: 24 }),
                title: 'Advanced Keyword Research',
                description: 'We identify high-traffic, low-competition keywords specific to your app niche and target audience. Our research uncovers hidden keyword opportunities that competitors miss.'
            },
            {
                icon: React.createElement(IconBrandApple, { size: 24 }),
                title: 'Dual Platform Expertise',
                description: 'Specialized optimization for both iOS App Store and Google Play Store. We understand each platform\'s unique algorithms, ranking factors, and optimization requirements.'
            },
            {
                icon: React.createElement(IconEdit, { size: 24 }),
                title: 'Complete Metadata Optimization',
                description: 'Comprehensive optimization of app titles, descriptions, keywords, categories, and all metadata elements that influence search rankings and conversion rates.'
            },
            {
                icon: React.createElement(IconStar, { size: 24 }),
                title: 'Visual Asset Optimization',
                description: 'Professional optimization of app icons, screenshots, preview videos, and visual elements that significantly impact conversion rates and user engagement.'
            },
            {
                icon: React.createElement(IconUsers, { size: 24 }),
                title: 'Review & Rating Management',
                description: 'Strategic review generation campaigns and professional review management to improve app ratings, build credibility, and enhance app store rankings.'
            },
            {
                icon: React.createElement(IconChartBar, { size: 24 }),
                title: 'Data-Driven Optimization',
                description: 'Continuous A/B testing and data analysis to optimize every element. We use app store analytics and user behavior data to make informed optimization decisions.'
            }
        ],
        cta: {
            text: 'Optimize My App',
            link: '#contact',
            icon: React.createElement(IconRocket, { size: 24 })
        }
    },
    typesOfServices: {
        title: 'Our Complete ASO Services',
        subtitle: 'COMPREHENSIVE APP OPTIMIZATION',
        description: 'Full-spectrum App Store Optimization services designed to maximize your app\'s visibility, downloads, and user acquisition.',
        services: [
            {
                id: 1,
                title: 'Keyword Research & Strategy',
                description: 'In-depth keyword research to identify high-traffic, relevant keywords for your app. We analyze competition, search volume, and ranking difficulty to create winning keyword strategies.',
                icon: React.createElement(IconSearch, { size: 24 })
            },
            {
                id: 2,
                title: 'App Title & Description Optimization',
                description: 'Strategic optimization of app titles, subtitles, and descriptions with targeted keywords while maintaining readability and appeal to users and app store algorithms.',
                icon: React.createElement(IconEdit, { size: 24 })
            },
            {
                id: 3,
                title: 'Visual Asset Optimization',
                description: 'Professional optimization of app icons, screenshots, preview videos, and promotional graphics to maximize conversion rates and user engagement.',
                icon: React.createElement(IconDeviceMobile, { size: 24 })
            },
            {
                id: 4,
                title: 'Review & Rating Management',
                description: 'Strategic review generation campaigns, professional review response management, and rating improvement strategies to build app credibility and rankings.',
                icon: React.createElement(IconStar, { size: 24 })
            },
            {
                id: 5,
                title: 'Competitor Analysis & Monitoring',
                description: 'Comprehensive competitor research and ongoing monitoring to identify opportunities, track ranking changes, and stay ahead of competition in app stores.',
                icon: React.createElement(IconTarget, { size: 24 })
            },
            {
                id: 6,
                title: 'Performance Tracking & Reporting',
                description: 'Detailed analytics and monthly reports showing keyword rankings, download growth, conversion rates, and ROI from ASO optimization efforts.',
                icon: React.createElement(IconChartBar, { size: 24 })
            }
        ]
    },
    process: {
        title: 'Our Proven ASO Process',
        subtitle: 'STRATEGIC METHODOLOGY',
        className: 'border-t border-border dark:border-gray-700',
        description: 'A systematic approach to App Store Optimization that delivers measurable results and sustainable app growth.',
        steps: [
            {
                id: 1,
                title: 'App Store Audit & Analysis',
                description: 'Comprehensive analysis of your current app store presence, keyword rankings, metadata, visuals, reviews, and competitor research to identify optimization opportunities.'
            },
            {
                id: 2,
                title: 'Keyword Research & Strategy',
                description: 'In-depth keyword research using ASO tools to identify high-value, relevant keywords with optimal search volume and competition levels for your app category.'
            },
            {
                id: 3,
                title: 'Metadata Optimization',
                description: 'Strategic optimization of app title, subtitle, description, and keyword fields with target keywords while maintaining user appeal and readability.'
            },
            {
                id: 4,
                title: 'Visual Asset Enhancement',
                description: 'Professional optimization of app icon, screenshots, preview videos, and promotional materials to improve conversion rates and user engagement.'
            },
            {
                id: 5,
                title: 'Review Strategy Implementation',
                description: 'Deploy review generation campaigns, implement professional review management, and strategies to improve overall app ratings and credibility.'
            },
            {
                id: 6,
                title: 'Monitor, Analyze & Optimize',
                description: 'Continuous monitoring of rankings, downloads, and performance. Regular optimization based on data insights, algorithm changes, and market trends.'
            }
        ]
    },
    techStack: {
        title: 'Our ASO Technology Stack',
        subtitle: 'ADVANCED ASO TOOLS',
        description: 'We use industry-leading ASO tools and platforms to research, optimize, and track your app store performance.',
        categories: ['ASO Tools', 'Analytics', 'Design Tools', 'Tracking'],
        technologies: [
            { id: 1, name: 'App Annie', logo: '/tech/icons8-app-annie-96.png', category: 'ASO Tools' },
            { id: 2, name: 'Sensor Tower', logo: '/tech/icons8-sensor-tower-96.png', category: 'ASO Tools' },
            { id: 3, name: 'Mobile Action', logo: '/tech/icons8-mobile-action-96.png', category: 'ASO Tools' },
            { id: 4, name: 'App Store Connect', logo: '/tech/icons8-app-store-connect-96.png', category: 'Analytics' },
            { id: 5, name: 'Google Play Console', logo: '/tech/icons8-google-play-console-96.png', category: 'Analytics' },
            { id: 6, name: 'ASO World', logo: '/tech/icons8-aso-world-96.png', category: 'ASO Tools' },
            { id: 7, name: 'Adobe Creative Suite', logo: '/tech/icons8-adobe-96.png', category: 'Design Tools' },
            { id: 8, name: 'Appfigures', logo: '/tech/icons8-appfigures-96.png', category: 'Tracking' }
        ]
    },
    testimonials: {
        title: [
            { text: 'ASO ', gradient: false },
            { text: 'Success Stories', gradient: true, gradientClass: 'from-blue-500 via-purple-500 to-pink-500' }
        ],
        description: 'Real apps achieving top rankings and explosive download growth through strategic ASO',
        testimonials: [
            {
                id: '1',
                message: 'Our fitness app went from 1,000 to 50,000 downloads per month after DigiAerotech\'s ASO optimization. We now rank in top 5 for all our target keywords in both app stores. ROI has been phenomenal!',
                highlight: 'went from 1,000 to 50,000 downloads per month',
                stars: 5,
                name: 'Arjun Mehta',
                designation: 'Co-founder',
                company: 'Fitness App Startup'
            },
            {
                id: '2',
                message: 'The ASO strategy transformed our e-learning app\'s visibility completely. Download costs dropped 70% while organic downloads increased 400%. We\'re now a top-ranked app in our category.',
                highlight: 'organic downloads increased 400%',
                stars: 5,
                name: 'Sneha Patel',
                designation: 'Product Manager',
                company: 'EdTech Company'
            },
            {
                id: '3',
                message: 'Within 6 months of ASO optimization, our gaming app hit #1 rankings for competitive keywords. Daily downloads increased from 200 to 3,000+. Their expertise in app stores is unmatched.',
                highlight: 'daily downloads increased from 200 to 3,000+',
                stars: 5,
                name: 'Vikram Singh',
                designation: 'CEO',
                company: 'Mobile Gaming Studio'
            }
        ]
    },
    cta: {
        title: 'Ready to Dominate App Store Rankings?',
        subtitle: 'START YOUR ASO JOURNEY',
        description: 'Get a comprehensive ASO audit and custom strategy to skyrocket your app downloads and reduce user acquisition costs.'
    }
};